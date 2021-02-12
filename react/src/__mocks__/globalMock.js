/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/** Jest not able to resolve direflow-component 3.4.9, mocking it globally
 * Bug reference: https://github.com/Silind-Software/direflow/issues/41
 * */
jest.mock('direflow-component', () => ({
  Styled: props => {
    return props.children;
  },
  EventContext: {}
}));

jest.mock('@agentx/agentx-services', () => {
  return {
    __esModule: true,
    SERVICE: {
      aqm: {
        dialer: { startOutdial: jest.fn() },
        agent: {
          stateChange: jest.fn(),
          fetchAddressBooks: jest.fn(),
          eAgentStateChangeSuccess: { listen: jest.fn(), stopListen: jest.fn() }
        },
        contact: {
          fetchHistoryByANI: jest.fn(),
          fetchHistoryByAgent: jest.fn(),
          fetchTranscript: jest.fn(),
          pauseRecording: jest.fn(),
          resumeRecording: jest.fn(),
          blindTransfer: jest.fn(),
          hold: jest.fn(),
          unHold: jest.fn(),
          consult: jest.fn(),
          consultEnd: jest.fn(),
          end: jest.fn(),
          vteamList: jest.fn(),
          buddyAgents: jest.fn(),
          decline: jest.fn(),
          eAgentContactEnded: { listen: jest.fn(), stopListen: jest.fn() },
          eAgentContactAssigned: { listen: jest.fn(), stopListen: jest.fn() },
          eAgentOfferContact: { listen: jest.fn(), stopListen: jest.fn() },
          eAgentContact: { listen: jest.fn(), stopListen: jest.fn() },
          eAgentOfferContactRona: { listen: jest.fn(), stopListen: jest.fn() },
          eAgentOfferConsult: { listen: jest.fn(), stopListen: jest.fn() },
          eAgentConsultEnded: { listen: jest.fn(), stopListen: jest.fn() },
          eAgentConsultFailed: { listen: jest.fn(), stopListen: jest.fn() },
          eAgentConsulting: { listen: jest.fn(), stopListen: jest.fn() },
          eAgentContactHeld: { listen: jest.fn(), stopListen: jest.fn() },
          eAgentContactUnHeld: { listen: jest.fn(), stopListen: jest.fn() },
          eAgentWrapup: { listen: jest.fn(), stopListen: jest.fn() },
          eCallRecordingStarted: { listen: jest.fn(), stopListen: jest.fn() },
          eAgentConsultCreated: { listen: jest.fn(), stopListen: jest.fn() },
          eAgentConsultConferenced: { listen: jest.fn(), stopListen: jest.fn() },
          eAgentCtqCancelFailed: { listen: jest.fn(), stopListen: jest.fn() },
          eAgentCtqCancelled: { listen: jest.fn(), stopListen: jest.fn() },
          eAgentConsultConferenceEnded: { listen: jest.fn(), stopListen: jest.fn() },
          eAgentCtqFailed: { listen: jest.fn(), stopListen: jest.fn() },
          eAgentContactWrappedUp: { listen: jest.fn(), stopListen: jest.fn() },
          eResumeRecording: { listen: jest.fn(), stopListen: jest.fn() },
          ePauseRecording: { listen: jest.fn(), stopListen: jest.fn() },
          eConsultTransfer: { listen: jest.fn(), stopListen: jest.fn() },
          eAgentblindTransferred: { listen: jest.fn(), stopListen: jest.fn() },
          eAgentvteamTransfer: { listen: jest.fn(), stopListen: jest.fn() },

          accept: jest.fn(),
          wrapup: jest.fn()
        }
      },
      cms: {
        fetchChatResponses: jest.fn(),
        fetchChatResponseMapping: jest.fn()
      },
      emm: {
        downloadAttachment: jest.fn(),
        deleteAttachment: jest.fn(),
        addAttachment: jest.fn(),
        fetchContent: jest.fn(),
        sendEmail: jest.fn(),
        fetchEmailContentFromEmm: jest.fn()
      },
      mediaStorage: {
        fetchStorageEmailContent: jest.fn()
      },
      pci: {
        pciCheck: jest.fn()
      },
      shortcut: {
        REGISTERED_KEYS: {
          EXPAND_COLLAPSE_INTERACTION_PANEL_KEY: 'y',
          SAVE_EDITED_CAD_KEY: 'm',
          REVERT_EDITED_CAD_KEY: 'z',
          HOLD_RESUME_CALL_KEY: 'v',
          TRANSFER_KEY: 'x',
          CONSULT_KEY: 'c',
          END_KEY: 'e',
          CONFERENCE_KEY: 'h',
          PAUSE_RESUME_RECORDING_KEY: 'z',
          GO_TO_AVIALABLE_KEY: 'r',
          OPEN_STATE_SELECTOR_KEY: 'n',
          SEND_EMAIL_KEY: 's',
          REPLY_EMAIL_KEY: '6',
          REPLY_ALL_EMAIL_KEY: '5',
          OPEN_USER_PROFILE_KEY: 'u',
          OPEN_SHORTCUT_KEY_MODAL_KEY: 'f',
          DOWNLOAD_ERROR_REPORT_KEY: '2',
          SIGNOUT_KEY: 'l',
          ACCEPT_TASK_KEY: 'a',
          SWITCH_POPOVER_KEY: 'p',
          EXPAND_COLLAPSE_POPOVER_KEY: '9',
          OPEN_OUTDIAL_KEY: 'o',
          OPEN_WRAP_UP_KEY: 'w',
          EXPAND_COLLAPSE_TASK_LIST_PANEL_KEY: '7',
          OPEN_NOTIFICATION_CENTER_KEY: 'i',
          OPEN_NAVIGATION_TAB_KEY: 't',
          REFRESH_KEY: 'b',
          SWITCH_TASK_KEY: '8',
          ENABLE_SILENT_NOTIFICATION_KEY: 'd',
          ACCEPT_ALL_TASK_KEY: '4'
        },
        MODIFIERS: {
          CTRL_SHIFT: 'ctrlKey_shiftKey',
          ALT_SHIFT: 'altKey_shiftKey',
          CTRL_ALT: 'ctrlKey_altKey',
          SHIFT: 'shiftKey',
          CTRL: 'ctrlKey',
          ALT: 'altKey'
        },
        event: {
          listenKeyPress: jest.fn().mockReturnValue({ stopListen: jest.fn() })
        }
      }
    },
    getTrackingIdFromErrorObject: jest.fn()
  };
});

jest.mock('@agentx/ccc-media-view', () => {
  const mockMediaView = () => {
    return <div className="media-view">This is dummy Media View</div>;
  };
  return {
    Globals: {
      initialize: jest.fn(() => Promise.resolve()),
      getCiscoSparkInternal: jest.fn().mockReturnValue({ mercury: { off: jest.fn() } }),
      off: jest.fn(),
      on: jest.fn()
    },
    EVENTS: { CHAT: 'mock.event' },
    MediaView: mockMediaView
  };
});
