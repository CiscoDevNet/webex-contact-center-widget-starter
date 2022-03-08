// import { logger } from "@/sdk";
import { Desktop } from "@wxcc-desktop/sdk";
import saveAs from "file-saver";
import { nanoid } from "nanoid";
import { NOTES_WIDGET_LS, DEFAULT, ENTER_KEY_CODE, SPACE_KEY_CODE, DOTTED_SEPARATOR } from "./constants";
import { agentId, NotesWidget } from "./index";

const logger = Desktop.logger.createLogger("learning-sample");

export const getBlankNote = (): NotesWidget.Note => {
  return {
    id: `note_${nanoid(8)}`,
    title: "",
    content: "",
    color: DEFAULT,
    favorite: false,
    timestampUTC: Date.now()
  };
};

export const getTimestampInDateLocale = (timestamp: number): string => {
  const ts = new Date(timestamp);
  return `${ts.getDate()}/${ts.getMonth() + 1}/${ts.getFullYear()}`;
};

export const getTimestampInLocale = (timestamp: number): string => {
  if (getTimestampInDateLocale(timestamp) === getTimestampInDateLocale(Date.now())) {
    const ts = new Date(timestamp);
    return ts.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
  }
  return getTimestampInDateLocale(timestamp);
};

const checkForAgentId = () => {
  if (!agentId) {
    logger.error("[Notes Widget] AgentId missing. Cannot fetch/update Notes");
    return false;
  }
  return true;
};

const getNotes = (): Record<string, NotesWidget.Note> => {
  if (checkForAgentId()) {
    const notes = JSON.parse(localStorage.getItem(NOTES_WIDGET_LS) || "{}");
    return notes[agentId] ?? {};
  } else {
    return {};
  }
};

const setNotes = (updatedAgentNotes: Record<string, NotesWidget.Note>): void => {
  if (checkForAgentId()) {
    const notes = JSON.parse(localStorage.getItem(NOTES_WIDGET_LS) || "{}");
    notes[agentId] = updatedAgentNotes;
    localStorage.setItem(NOTES_WIDGET_LS, JSON.stringify(notes));
  }
};

export const updateNotes = (updatedNote: NotesWidget.Note): void => {
  const notesFromLS = getNotes();
  notesFromLS[updatedNote.id] = updatedNote;
  setNotes(notesFromLS);
};

export const removeNotes = (deleteNotesList: string[]): void => {
  const notesFromLS = getNotes();
  deleteNotesList.forEach((noteId: string) => {
    delete notesFromLS[noteId];
  });
  setNotes(notesFromLS);
};

export const downloadNotes = (downloadNotesList: string[]): void => {
  const notesFromLS = getNotes();
  let downloadContent: BlobPart = ``;
  downloadNotesList.forEach((noteId: string) => {
    const note = notesFromLS[noteId];
    downloadContent += `${note.title}\r${getTimestampInDateLocale(note.timestampUTC)}\r${
      note.content
    }\r${DOTTED_SEPARATOR}\r`;
  });

  const fileName = `Notes_${getTimestampInDateLocale(Date.now())}.txt`;
  const blob = new Blob([downloadContent], {
    type: "text/plain;charset=utf-8"
  });
  saveAs(blob, fileName);
};

const sortBasedOnTimestamp = (note1: NotesWidget.Note, note2: NotesWidget.Note) => {
  return note1.timestampUTC < note2.timestampUTC ? 1 : -1;
};

export const fetchNotes = (): NotesWidget.Note[] => {
  const notesFromLS = Object.values(getNotes()).sort(sortBasedOnTimestamp);
  return Object.values(notesFromLS);
};

export const checkIfSpaceOrEnterKeydown = (keyCode: string): boolean => {
  if (keyCode === ENTER_KEY_CODE || keyCode === SPACE_KEY_CODE) {
    return true;
  }
  return false;
};
