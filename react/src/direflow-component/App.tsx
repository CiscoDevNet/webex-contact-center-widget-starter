import React, { FC, useEffect, useRef, useState } from "react";
import { Styled } from "direflow-component";
import styles from "./App.css";
import { logger } from "./sdk";
import { Service } from "@wxcc-desktop/sdk-types";
import {
  Notifications,
  NotificationItemsContent
} from "@uuip/unified-ui-platform-sdk";
import { Desktop } from "@wxcc-desktop/sdk";
interface IProps {
  agentId: string;
  darkTheme: boolean;
}

const App: FC<IProps> = (props) => {
  /**
   * These values will be replaced with STORE values through Data provider
   * in JSON layout configuration file
   * Data provider documentation:
   * https://apim-dev-portal.appstaging.ciscoccservice.com/documentation/guides/desktop#data-provider%E2%80%94widget-properties-and-attributes
   */

  const [agentId, setAgentId] = useState(
    "7d12d9ea-e8e0-41ee-81bf-c11a685b64ed"
  );

  const [agentSessionId, setSessionId] = useState("");
  const [agentProfileId, setProfileId] = useState("");
  const [contacts, setContacts] = useState([] as string[]);
  const [acceptedContacts, setAcceptedContacts] = useState([] as string[]);
  const [sampleInteractionId, setSampleIntId] = useState(
    "58f76ca3-409f-11eb-8606-f1b296a9b969"
  );

  const [titleFor, setTitleFor] = useState("");
  const [agentIdSignout, setAgentIdSignout] = useState("");
  const [orgIdSignout, setOrgIdSignout] = useState("");
  const newInteractionId = useRef<any>(null);

  const [buddyAgents, setBuddyAgents] = useState(
    null as Service.Aqm.Contact.BuddyAgentsSuccess | null
  );
  const [vTeam, setVTeam] = useState(
    null as Service.Aqm.Contact.VTeamSuccess | null
  );
  const [assignedContacts, setAssignedContacts] = useState(
    [] as {
      interaction: Service.Aqm.Contact.Interaction;
    }[]
  );

  useEffect(() => {
    init();

    getCurrentInteractionId();
    subscribeAgentContactDataEvents();
    subscribeDialerEvents();
    subscribeScreenpopEvent();
    subscribeMonitoringDataEvents();
    setAgentId(props.agentId);

    return () => {
      Desktop.agentContact.removeAllEventListeners();
      Desktop.dialer.removeAllEventListeners();
      Desktop.screenpop.removeAllEventListeners();
      Desktop.monitoring.removeAllEventListeners();
    };
  }, []);

  useEffect(() => {}, [props.agentId, props.darkTheme]);

  async function init() {
    await Desktop.config.init({widgetName: "widgetName", widgetProvider: "widgetProvider"});
  }

  const subscribeScreenpopEvent = () => {
    Desktop.screenpop.addEventListener("eScreenPop", (msg) => logger.info(msg));
  };

  const subscribeDialerEvents = () => {
    Desktop.dialer.addEventListener("eOutdialFailed", (msg) =>
      logger.info(msg)
    );
  };

  const subscribeAgentContactDataEvents = () => {
    Desktop.agentContact.addEventListener("eAgentContact", (msg) =>
      logger.info("AgentContact eAgentContact: ", msg)
    );
    Desktop.agentContact.addEventListener(
      "eAgentContactAssigned",
      (msg: Service.Aqm.Contact.AgentContact) => {
        logger.info("AgentContact eAgentContactAssigned: ", msg);
        setAcceptedContacts([...acceptedContacts, msg.data.interactionId]);
        logger.info(acceptedContacts);
      }
    );
    Desktop.agentContact.addEventListener(
      "eAgentContactEnded",
      (msg: Service.Aqm.Contact.AgentContact) => {
        logger.info("AgentContact eAgentContactEnded: ", msg);
        const idx = acceptedContacts.indexOf(msg.data.interactionId);
        if (idx !== -1) {
          setAcceptedContacts(acceptedContacts.slice(idx, 1));
          logger.info(acceptedContacts);
        }
      }
    );
    Desktop.agentContact.addEventListener(
      "eAgentContactWrappedUp",
      (msg: Service.Aqm.Contact.AgentContact) =>
        logger.info("AgentContact eAgentContactWrappedUp: ", msg)
    );
    Desktop.agentContact.addEventListener(
      "eAgentOfferContact",
      (msg: Service.Aqm.Contact.AgentContact) => {
        logger.info(
          "AgentContact eAgentOfferContact: ",
          msg.data.interactionId
        );
        // AUX Sandbox Contact
        setContacts([...contacts, msg.data.interactionId]);
        logger.info("AgentContact eAgentOfferContact: ", contacts);
      }
    );
    Desktop.agentContact.addEventListener(
      "eAgentOfferContactRona",
      (msg: Service.Aqm.Contact.AgentContact) => {
        logger.info(
          "AgentContact eAgentOfferContactRona: ",
          msg.data.interactionId
        );
        // AUX Sandbox Contact
        const idx = contacts.indexOf(msg.data.interactionId);
        if (idx !== -1) {
          setContacts([
            ...contacts.filter(
              (interactionId) => interactionId !== msg.data.interactionId
            )
          ]);
          logger.info("AgentContact eAgentOfferContactRona: ", contacts);
        }
      }
    );
    Desktop.agentContact.addEventListener(
      "eAgentOfferConsult",
      (msg: Service.Aqm.Contact.AgentContact) =>
        logger.info("AgentContact eAgentOfferConsult: ", msg)
    );
    Desktop.agentContact.addEventListener(
      "eAgentWrapup",
      (msg: Service.Aqm.Contact.AgentContact) =>
        logger.info("AgentContact eAgentWrapup: ", msg)
    );
    Desktop.agentContact.addEventListener(
      "eAgentContactHeld",
      (msg: Service.Aqm.Contact.AgentContact) =>
        logger.info("AgentContact eAgentContactHeld: ", msg)
    );
    Desktop.agentContact.addEventListener(
      "eAgentContactUnHeld",
      (msg: Service.Aqm.Contact.AgentContact) =>
        logger.info("AgentContact eAgentContactUnHeld: ", msg)
    );
    Desktop.agentContact.addEventListener(
      "eCallRecordingStarted",
      (msg: Service.Aqm.Contact.AgentContact) =>
        logger.info("AgentContact eCallRecordingStarted: ", msg)
    );
    Desktop.agentContact.addEventListener(
      "eAgentConsultCreated",
      (msg: Service.Aqm.Contact.AgentContact) =>
        logger.info("AgentContact eAgentConsultCreated: ", msg)
    );
    Desktop.agentContact.addEventListener(
      "eAgentConsultConferenced",
      (msg: Service.Aqm.Contact.AgentContact) =>
        logger.info("AgentContact eAgentConsultConferenced: ", msg)
    );
    Desktop.agentContact.addEventListener(
      "eAgentConsultEnded",
      (msg: Service.Aqm.Contact.AgentContact) =>
        logger.info("AgentContact eAgentConsultEnded: ", msg)
    );
    Desktop.agentContact.addEventListener(
      "eAgentCtqCancelled",
      (msg: Service.Aqm.Contact.AgentContact) =>
        logger.info("AgentContact eAgentCtqCancelled: ", msg)
    );
    Desktop.agentContact.addEventListener("eAgentConsulting", (msg: any) =>
      logger.info("AgentContact eAgentConsulting: ", msg)
    );
    Desktop.agentContact.addEventListener(
      "eAgentConsultFailed",
      (msg: Service.Aqm.Contact.AgentContact) =>
        logger.info("AgentContact eAgentConsultFailed: ", msg)
    );
    Desktop.agentContact.addEventListener(
      "eAgentConsultEndFailed",
      (msg: Service.Aqm.Contact.AgentContact) =>
        logger.info("AgentContact eAgentConsultEndFailed: ", msg)
    );
    Desktop.agentContact.addEventListener("eAgentCtqFailed", (msg: any) =>
      logger.info("AgentContact eAgentCtqFailed: ", msg)
    );
    Desktop.agentContact.addEventListener(
      "eAgentCtqCancelFailed",
      (msg: Service.Aqm.Contact.AgentContact) =>
        logger.info("AgentContact eAgentCtqCancelFailed: ", msg)
    );
    Desktop.agentContact.addEventListener(
      "eAgentConsultConferenceEndFailed",
      (msg: Service.Aqm.Contact.AgentContact) =>
        logger.info("AgentContact eAgentConsultConferenceEndFailed: ", msg)
    );
    Desktop.agentContact.addEventListener(
      "eAgentMonitorStateChanged",
      (msg: any) => logger.info("AgentContact eAgentMonitorStateChanged: ", msg)
    );
    Desktop.agentContact.addEventListener("eAgentMonitoringEnded", (msg: any) =>
      logger.info("AgentContact eAgentMonitoringEnded: ", msg)
    );
    Desktop.agentContact.addEventListener(
      "eAgentOfferCampaignReserved",
      (msg: any) =>
        logger.info("AgentContact eAgentOfferCampaignReserved: ", msg)
    );
    Desktop.agentContact.addEventListener(
      "eAgentAddCampaignReserved",
      (msg: any) => logger.info("AgentContact eAgentAddCampaignReserved: ", msg)
    );
  };

  const subscribeMonitoringDataEvents = () => {
    Desktop.monitoring.addEventListener("eMonitoringOffered", (msg: any) =>
      logger.info("Monitoring eMonitoringOffered: ", msg)
    );

    Desktop.monitoring.addEventListener("eMonitoringStarted", (msg: any) =>
      logger.info("Monitoring eMonitoringStarted: ", msg)
    );

    Desktop.monitoring.addEventListener(
      "eMonitoringRequestCreateFailed",
      (msg: any) =>
        logger.info("Monitoring eMonitoringRequestCreateFailed: ", msg)
    );

    Desktop.monitoring.addEventListener("eMonitoringFailed", (msg: any) =>
      logger.info("Monitoring eMonitoringFailed: ", msg)
    );

    Desktop.monitoring.addEventListener("eMonitoringEnded", (msg: any) =>
      logger.info("Monitoring eMonitoringEnded: ", msg)
    );

    Desktop.monitoring.addEventListener("eMonitoringEndFailed", (msg: any) =>
      logger.info("Monitoring eMonitoringEndFailed: ", msg)
    );

    Desktop.monitoring.addEventListener("eMonitoringHeld", (msg: any) =>
      logger.info("Monitoring eMonitoringHeld: ", msg)
    );

    Desktop.monitoring.addEventListener("eMonitoringHoldFailed", (msg: any) =>
      logger.info("Monitoring eMonitoringHoldFailed: ", msg)
    );

    Desktop.monitoring.addEventListener("eMonitoringUnHeld", (msg: any) =>
      logger.info("Monitoring eMonitoringUnHeld: ", msg)
    );

    Desktop.monitoring.addEventListener("eMonitoringUnHoldFailed", (msg: any) =>
      logger.info("Monitoring eMonitoringUnHoldFailed: ", msg)
    );
    Desktop.monitoring.addEventListener("eAgentMonitorStateChanged", (msg: any) =>
      logger.info("Monitoring eBargedIn: ", msg)
    );
    Desktop.monitoring.addEventListener("eAgentMonitorStateChangeFailed", (msg: any) =>
      logger.info("Monitoring eBargeInFailed: ", msg)
    );
  };

  const getCurrentInteractionId = () => {
    let path = window.location.pathname;
    if (path.indexOf("task") >= 0 && path.replace("task/", "").length > 0) {
      setSampleIntId(path.replace("/task/", ""));
      logger.info("Current interactionID: ", sampleInteractionId);
    }
  };

  const getAgentInfo = () => {
    const latestData = Desktop.agentStateInfo.latestData;
    logger.info("AgentStateInfo latestData: ", latestData);
    if (latestData.agentProfileID) {
      setProfileId(latestData.agentProfileID);
    }

    if (latestData.subStatus) {
      setSessionId(latestData.subStatus);
    }
  };

  const logout = async () =>
  {
    await Desktop.logout.desktopLogout({ data: { logoutReason: "User requested logout" }  });
  }

  const signoutAgent = async (orgIdSignout: string, agentIdSignout:string) =>
  {
    await Desktop.logout.signoutAgent({orgId: orgIdSignout, data: { agentId: agentIdSignout, logoutReason: "SupervisorSignout" }});
  }

  const getClientLocale = () => {
    logger.info("Client locale: ", Desktop.config.clientLocale);
  };

  async function changeState(s: "Available" | "Idle") {
    const agentState = await Desktop.agentStateInfo.stateChange({
      state: s,
      auxCodeIdArray: "0"
    });
    logger.info("State Changed", agentState);
  }

  async function getAgentAddressBooks() {
    const books = await Desktop.agentStateInfo.fetchAddressBooks();
    logger.info("Address books: ", books);
  }

  async function getBuddyAgents() {
    const buddyAgentPayload = {
      agentProfileId: agentProfileId,
      channelName: "chat",
      state: "Available"
    };

    const myBuddyAgents =
      (await Desktop.agentContact.buddyAgents({
        data: buddyAgentPayload
      })) || null;

    setBuddyAgents(myBuddyAgents);
    logger.info(buddyAgents);
  }

  async function getVTeamList() {
    const vTeamPayload = {
      agentProfileId: agentProfileId,
      agentSessionId: agentSessionId,
      channelType: "chat",
      type: "inboundqueue"
    };

    const myvTeam =
      (await Desktop.agentContact.vteamList({
        data: vTeamPayload
      })) || null;

    setVTeam(myvTeam);
    logger.info(vTeam, vTeam!.data.data.vteamList);
  }

  async function acceptInteraction(interactionId: string) {
    const acceptInteraction = await Desktop.agentContact.accept({
      interactionId: interactionId
    });
    logger.info(acceptInteraction);
  }

  async function endInteraction() {
    const endedInteraction = await Desktop.agentContact.end({
      interactionId: sampleInteractionId
    });
    logger.info(endedInteraction);
  }

  async function wrapUpInteraction() {
    const wrappedUpInteraction = await Desktop.agentContact.wrapup({
      interactionId: sampleInteractionId,
      data: {
        wrapUpReason: "Example reason here",
        auxCodeId: "0",
        isAutoWrapup: "false"
      }
    });
    logger.info(wrappedUpInteraction);
  }

  async function consultWithAgent() {
    const consult = await Desktop.agentContact.consult({
      interactionId: sampleInteractionId,
      data: {
        agentId: agentId,
        destAgentId: buddyAgents?.data.agentList[0].agentId,
        mediaType: "chat"
      },
      url: "consult"
    });
    logger.info(consult);
  }

  async function endConferenceWithAgent() {
    const consult = await Desktop.agentContact.consultEnd({
      interactionId: sampleInteractionId,
      isConsult: false
    });
    logger.info(consult);
  }

  async function consultConferenceWithAgent() {
    const consult = await Desktop.agentContact.consultConference({
      interactionId: sampleInteractionId,
      data: {
        agentId: agentId,
        destAgentId: buddyAgents?.data.agentList[0].agentId,
        mediaType: "chat"
      }
    });
    logger.info(consult);
  }

  async function endConsultConferenceWithAgent() {
    const consult = await Desktop.agentContact.consultEnd({
      interactionId: sampleInteractionId,
      isConsult: true
    });
    logger.info(consult);
  }

  async function consultTransferToAgent() {
    if (buddyAgents?.data.agentList[0].agentId) {
      const consult = await Desktop.agentContact.consultTransfer({
        interactionId: sampleInteractionId,
        data: {
          agentId: agentId,
          destAgentId: buddyAgents?.data.agentList[0].agentId,
          mediaType: "chat",
          mediaResourceId: "b102ed10-fac2-4f8e-bece-1c2da6ba6dd8"
        }
      });
      logger.info(consult);
    } else {
      logger.info("consultTransferToAgent(): agentId is not defined");
    }
  }

  async function vTeamTransfer() {
    if (
      vTeam?.data.data.vteamList[0].analyzerId &&
      vTeam?.data.data.vteamList[0].type
    ) {
      const consult = await Desktop.agentContact.vteamTransfer({
        interactionId: sampleInteractionId,
        data: {
          vteamId: vTeam?.data.data.vteamList[0].analyzerId,
          vteamType: vTeam?.data.data.vteamList[0].type
        }
      });
      logger.info(consult);
    } else {
      if (!vTeam?.data.data.vteamList[0].analyzerId) {
        logger.info("vTeamTransfer(): analyzerId is not defined");
      }
      if (!vTeam?.data.data.vteamList[0].type) {
        logger.info("vTeamTransfer(): type is not defined");
      }
    }
  }

  async function getToken() {
    const token = await Desktop.actions.getToken();
    logger.info(token);
  }

  async function getIdleCodes() {
    const idle = await Desktop.actions.getIdleCodes();
    logger.info(idle);
  }

  async function getwrapupCodes() {
    const wrapup = await Desktop.actions.getWrapUpCodes();
    logger.info(wrapup);
  }

  async function fireNotification() {
    const raw: Notifications.ItemMeta.Raw = {
      data: {
        type: Notifications.ItemMeta.Type.Info,
        mode: Notifications.ItemMeta.Mode.AutoDismiss,
        title: "Info - Acknowledge",
        data: "Lorem Ipsum Dolor"
      }
    };
    const notifData: Notifications.ItemMeta.Raw = {
      data: {
        type: Notifications.ItemMeta.Type.Info,
        mode: Notifications.ItemMeta.Mode.AutoDismiss, // Change type here based on the method.
        title: "Info - Silent",
        data: new NotificationItemsContent.DataController({
          text: "Explore New Horizons",
          link: "https://www.abc.com/file/Tjpn4Z9p8jZy0Da0Ggq6ra/Priority-To-do-list?node-id=1280%3A83124",
          linkName: "Toaster Notification",
          linkTooltip:
            '<div style="text-align: left !important;">Phone - +1 (412)555-3782 <br />Queue - IVR_Queue <br />Activity Label <br /></div>',
          iconDetail: {
            iconName: "icon-alert-active_16",
            color: "blue",
            iconColor: "#08599C"
          }
        })
      }
    };

    console.log(">>>>> Firing Notification", notifData);
    try {
      const res = await Desktop.actions.fireGeneralAutoDismissNotification(
        notifData as Notifications.ItemMeta.Raw & {
          data: { mode: Notifications.ItemMeta.Mode.AutoDismiss  };
        }
      );
      console.log(">>>>> Fired Notification", notifData);
      if (res) {
        const [status, reason, mode] = res;
        logger.info(status, reason, mode);
      }
    } catch (e) {
      console.error(">>>>>> Fire Notification failed", e);
    }
  }

  async function getTaskMap() {
    const taskMap = await Desktop.actions.getTaskMap();
    console.log(taskMap);
    const myAssignedContacts = Array.from(taskMap?.values() || []);
    setAssignedContacts(myAssignedContacts);
    console.log(assignedContacts[0]);
  }

  async function updateCADVariable() {
    try {
      const contactPayload = {
        attributes: {
          diallerName: "agent-name",
          diallerPhoneNumber: "+1 010 010 010"
        }
      };
      await Desktop.dialer.updateCadVariables({
        interactionId: "123",
        data: contactPayload,
        keyId: "abc",
        keyVersion: 1
      });
    } catch (e) {
      // Handle Exception.
      console.error(e);
    }
  }

  async function mockOutdialAniList() {
    await Desktop.agentStateInfo.mockOutdialAniList();
  }

  function setNewInteraactionId() {
    console.log(">>>> onInput working");
    setSampleIntId(newInteractionId.current.value);
  }

  async function fetchOrganizationIdleCodes() {
    await Desktop.agentStateInfo.fetchOrganizationIdleCodes("123");
  }
  async function fetchAgentIdleCodes() {
    await Desktop.agentStateInfo.fetchAgentIdleCodes("123", "1234");
  }
  async function changeAgentState() {
    return await Desktop.agentStateInfo.changeAgentState("123", {
      auxCodeId: "",
      agentId: "1234",
      state: "IDLE"
    });
  }

  async function startMonitoring() {
    const monitoringRequest = {
      id: "62e5ffa9-7d80-40d7-bfbc-94cab8d5f67b",
      monitorType: "midcall",
      trackingId: "62e5ffa9-7d80-40d7-bfbc-94cab8d5f67b",
      taskId: "d6583397-d7ab-4dcb-b761-6cc925ad11d4"
    };

    await Desktop.monitoring.startMonitoring({ data: monitoringRequest });
    logger.info("Monitoring startMonitoring: success");
  }

  async function endMonitoring() {
    await Desktop.monitoring.endMonitoring({
      interactionId: "d6583397-d7ab-4dcb-b761-6cc925ad11d4"
    });
    logger.info("Monitoring endMonitoring: success");
  }

  async function holdMonitoring() {
    await Desktop.monitoring.holdMonitoring({
      interactionId: "d6583397-d7ab-4dcb-b761-6cc925ad11d4"
    });
    logger.info("Monitoring holdMonitoring: success");
  }

  async function unHoldMonitoring() {
    await Desktop.monitoring.unHoldMonitoring({
      interactionId: "d6583397-d7ab-4dcb-b761-6cc925ad11d4"
    });
    logger.info("Monitoring unHoldMonitoring: success");
  }

  async function bargeIn() {
    await Desktop.monitoring.bargeIn({
      interactionId: "9e2c3568-fd67-4950-89a6-c82f97a393d4"
    });
    logger.info("Monitoring bargeIn:success");
  }

  return (
    <Styled styles={styles}>
      <div className="app">
        <strong>MFE Props: </strong>
        <md-input
          htmlid="newInteractionId"
          class="input-field"
          placeholder="Enter interaction id"
          ariaLabel="Enter interaction id"
          shape="pill"
          clear=""
          value=""
          tabindex="0"
          autoFocus
          onInput={setNewInteraactionId}
          onChange={() => {
            console.log(">>>> onChange working");
          }}
          ref={newInteractionId}
        ></md-input>

        <pre>{JSON.stringify(props)}</pre>
        <hr />
        <md-tabs>
          <md-tab slot="tab">Desktop.agentStateInfo</md-tab>
          <md-tab-panel slot="panel">
            <div className="action-container">
              <h2>Monitor data output in console log</h2>
              <md-button onClick={() => getAgentInfo()}>
                Get latest Agent info
              </md-button>
              <md-button onClick={() => getClientLocale()}>
                Get current Locale
              </md-button>

              <md-button onClick={() => changeState("Idle")}>
                Change State to Idle
              </md-button>
              <md-button onClick={() => changeState("Available")}>
                Change State to Available
              </md-button>
              <md-button onClick={() => getAgentAddressBooks()}>
                Fetch Address Books
              </md-button>
              <md-button onClick={() => mockOutdialAniList()}>
                Mock Outdial Ani List
              </md-button>
              <h3>TPW Agent State</h3>
              <md-button onClick={() => fetchOrganizationIdleCodes()}>
                Get Organization Idle Codes
              </md-button>
              <md-button onClick={() => fetchAgentIdleCodes()}>
                Get Agent Idle Codes
              </md-button>
              <md-button onClick={() => changeAgentState()}>
                Change Agent State
              </md-button>
            </div>
          </md-tab-panel>

          <md-tab slot="tab">Desktop.agentContact</md-tab>
          <md-tab-panel slot="panel">
            <div className="action-container">
              <h2>Desktop.agentContact sub-module</h2>
              <md-input
                htmlid="newInteractionId"
                class="input-field"
                placeholder="Enter interaction id"
                ariaLabel="Enter interaction id"
                shape="pill"
                clear=""
                value=""
                tabindex="0"
                autoFocus
                onInput={setNewInteraactionId}
                onKeyUp={(e: any) => {
                  console.log(">>>> onChange working", e);
                }}
                ref={newInteractionId}
              ></md-input>
              <h3>Get Available Agents</h3>
              <p>
                Make sure to fetch latest agent info first before invoking this
                method
              </p>
              <md-button onClick={() => getBuddyAgents()}>
                Get Available Agents
              </md-button>

              <h3>Get channel specific team list</h3>
              <p>
                Make sure to fetch latest agent info first before invoking this
                method
              </p>
              <md-button onClick={() => getVTeamList()}>
                Get Team list
              </md-button>

              <h3>Accept interactions</h3>
              <span>New incoming interactions will appear here</span>

              {contacts.map((interactionId) => {
                if (acceptedContacts.indexOf(interactionId) === -1) {
                  return (
                    <md-button onClick={() => acceptInteraction(interactionId)}>
                      Accept interaction for {interactionId}
                    </md-button>
                  );
                }
                return <></>;
              })}

              <h3>End interaction</h3>
              <md-button onClick={() => endInteraction()}>
                End interaction for {sampleInteractionId}
              </md-button>

              <h3>Wrap Up interaction</h3>
              <md-button onClick={() => wrapUpInteraction()}>
                Wrap Up interaction for {sampleInteractionId}
              </md-button>

              <h3>Consult</h3>
              <md-label>
                Fetch buddy agents before initiating a consult
              </md-label>
              <md-button onClick={() => consultWithAgent()}>
                Consult with
                {buddyAgents && buddyAgents?.data.agentList.length > 0
                  ? buddyAgents?.data.agentList[0].agentId
                  : "No Agents available"}
              </md-button>

              <md-label>
                Make sure to have active conference before ending
              </md-label>
              <md-button onClick={() => endConferenceWithAgent()}>
                End Consult with
                {buddyAgents && buddyAgents?.data.agentList.length > 0
                  ? buddyAgents?.data.agentList[0].agentId
                  : "No Agents available"}
              </md-button>

              <h3>Consult Conference</h3>

              <md-button onClick={() => consultConferenceWithAgent()}>
                Consult Conference with
                {buddyAgents && buddyAgents?.data.agentList.length > 0
                  ? buddyAgents?.data.agentList[0].agentId
                  : "No Agents available"}
              </md-button>
              <md-label>
                Make sure to have active conference before ending
              </md-label>
              <md-button onClick={() => endConsultConferenceWithAgent()}>
                End Consult Conference with
                {buddyAgents && buddyAgents?.data.agentList.length > 0
                  ? buddyAgents?.data.agentList[0].agentId
                  : "No Agents available"}
              </md-button>

              <h3>Consult Transfer</h3>
              <md-button onClick={() => consultTransferToAgent()}>
                Consult Transfer to
                {buddyAgents && buddyAgents?.data.agentList.length > 0
                  ? buddyAgents?.data.agentList[0].agentId
                  : "No Agents available"}
              </md-button>

              <h3>vTeam Transfer</h3>
              <md-label>Fetch vTeam before initiating a transfer</md-label>
              <md-button onClick={() => vTeamTransfer()}>
                Consult Transfer to
                {vTeam?.data.data.vteamList[0].analyzerId}
              </md-button>
            </div>
          </md-tab-panel>
          <md-tab slot="tab">Desktop.monitor</md-tab>
          <md-tab-panel slot="panel">
            <div className="action-container">
              <h2>Monitor data output in console log</h2>
              <md-button onClick={() => startMonitoring()}>
                Start Monitoring
              </md-button>
              <md-button onClick={() => endMonitoring()}>
                End Monitoring
              </md-button>
              <md-button onClick={() => holdMonitoring()}>
                Hold Monitoring
              </md-button>
              <md-button onClick={() => unHoldMonitoring()}>
                UnHold Monitoring
              </md-button>
              <md-button onClick={() => bargeIn()}>BargIn Monitoring</md-button>
            </div>
          </md-tab-panel>
          <md-tab slot="tab">Desktop.shortcutKey</md-tab>
          <md-tab-panel slot="panel">
            <div className="“action-container”">
              <h2>Monitor data output in console log</h2>
              <md-button
                onClick={() =>
                  logger.info(Desktop.shortcutKey.DEFAULT_SHORTCUT_KEYS)
                }
              >
                Get Default Shortcut Keys
              </md-button>

              <md-button
                onClick={() => logger.info(Desktop.shortcutKey.MODIFIERS)}
              >
                Get Shortcut Keys Modifiers
              </md-button>

              <md-button
                onClick={() => logger.info(Desktop.shortcutKey.REGISTERED_KEYS)}
              >
                Get all registered Shortcut Keys
              </md-button>

              <md-button
                onClick={() =>
                  logger.info(Desktop.shortcutKey.getRegisteredKeys())
                }
              >
                Get all registered Shortcut Keys
              </md-button>
            </div>
          </md-tab-panel>

          <md-tab slot="tab">Desktop.actions</md-tab>
          <md-tab-panel slot="panel">
            <div className="action-container">
              <h2>Monitor data output in console log</h2>
              <md-button onClick={() => getToken()}>
                Get Agent Desktop auth token
              </md-button>

              <md-button onClick={() => getIdleCodes()}>
                Get idle codes
              </md-button>

              <md-button onClick={() => getwrapupCodes()}>
                Get wrap up codes
              </md-button>

              <md-button onClick={() => fireNotification()}>
                Fire notification
              </md-button>

              <md-button onClick={() => getTaskMap()}>
                Get full ist of assigned tasks including CAD variables
              </md-button>
              <md-button onClick={() => updateCADVariable()}>
                Update CAD Variables
              </md-button>
              <span>
                {assignedContacts.length > 0
                  ? assignedContacts[0].interaction.callAssociatedData &&
                    assignedContacts[0].interaction.callAssociatedData["ani"][
                      "value"
                    ] +
                      " " +
                      assignedContacts[0].interaction.callAssociatedData[
                        "customerName"
                      ]["value"]
                  : `First assigned task CAD variables will appear here.`}
              </span>
            </div>
          </md-tab-panel>

          <md-tab slot="tab">Vertical overflow tab</md-tab>
          <md-tab-panel slot="panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              ultricies lorem sem, id placerat massa rutrum eu. Sed dui neque,
              tincidunt quis sapien in, aliquam dignissim nulla. Vestibulum
              mollis at orci ac facilisis. Sed ut aliquam nunc. Suspendisse eu
              interdum odio. Sed libero dui, malesuada ac vulputate id,
              vulputate vel nisi. Proin id egestas mi. Fusce ut sem nibh.
              Vivamus aliquet accumsan feugiat. Etiam accumsan tortor quis
              ultrices tempus. Aenean porta feugiat ex. Praesent dictum mauris
              et dui posuere aliquet et non arcu. Sed eget aliquam elit. Nullam
              ornare ipsum quis feugiat tincidunt. Nullam a libero sed enim
              dictum convallis. Suspendisse egestas elit risus, at ultrices
              massa blandit eget. Vivamus dapibus bibendum nisl, eget cursus
              risus ultrices et. Quisque felis tortor, accumsan vel tempus quis,
              rutrum sed urna. Nulla quis magna et eros facilisis blandit. Nunc
              mattis urna eget diam accumsan, non vehicula est aliquet. Etiam
              vestibulum dui neque, faucibus sollicitudin nibh vestibulum vel.
              Nullam semper porta ipsum non varius. Vestibulum sollicitudin
              ipsum mauris. Praesent quis nisi sagittis, malesuada lacus semper,
              iaculis elit. Maecenas hendrerit quam ut felis pretium volutpat.
              Nulla molestie et tellus ac tincidunt. Sed sodales ultrices
              condimentum. Fusce quis rutrum dui, ut consectetur ante. Morbi
              quis sem in ipsum tempor mollis. Curabitur ac risus sed quam
              consequat faucibus quis nec neque. Nullam porttitor felis ut felis
              cursus dignissim. Curabitur tincidunt tortor et pharetra
              malesuada. Phasellus tempor ullamcorper scelerisque. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nulla porttitor ex
              vel egestas tristique. Aenean molestie cursus tortor at cursus.
              Sed interdum volutpat leo, sit amet placerat velit congue eu.
              Vestibulum vitae consequat ex. Ut nec venenatis augue, in porta
              massa. Curabitur quis porta felis, vel eleifend nisl. Nulla
              facilisi. Integer sagittis felis nec lacinia rutrum. Etiam a
              mauris eu nulla pulvinar auctor nec sit amet ex. Quisque turpis
              ipsum, lacinia in ex ut, tempor tempus est. Vivamus a rutrum
              velit. Donec eleifend fermentum sollicitudin. Quisque condimentum
              mauris convallis viverra tempus. Ut enim quam, pulvinar et metus
              interdum, sagittis ultricies dui. Aenean consectetur at risus eget
              ornare. Mauris pretium consequat metus a vestibulum. Nulla sit
              amet nisl eleifend, faucibus turpis at, mattis tellus. Aliquam
              vehicula orci ac nisi elementum, vitae sollicitudin odio ultrices.
              Proin in laoreet mi, vitae condimentum nibh. Nunc quis dictum
              urna, at imperdiet augue. Donec congue tempus elit quis rhoncus.
              Etiam orci quam, vestibulum egestas rutrum non, dapibus a justo.
            </p>
          </md-tab-panel>

          <md-tab slot="tab">Widget Header title update</md-tab>
          <md-tab-panel slot="panel">
            <h2>Update Dynamic widget header title</h2>
            <p>
              To test this functionality please add titleFor property in wrapper
              with unique id Example:
              <strong>
                &quot;titleFor&quot;:
                &quot;unique-react-id-to-update-title&quot;
              </strong>
            </p>

            <pre>
              {JSON.stringify(
                {
                  wrapper: {
                    title: "React Framework",
                    id: "unique-react-id-to-update-title",
                    maximizeAreaName: "app-maximize-area"
                  }
                },
                undefined,
                2
              )}
            </pre>

            <md-input
              class="input-field"
              shape="pill"
              placeholder="Enter New Title"
              clear=""
              value=""
              tabindex="0"
              autoFocus
              onInput={(e: any) => setTitleFor(e.target.value)}
            ></md-input>

            <md-button
              onClick={() => {
                const e = new CustomEvent("unique-react-id-to-update-title", {
                  bubbles: true,
                  detail: { title: titleFor }
                });
                window.dispatchEvent(e);
              }}
            >
              Update Title
            </md-button>
          </md-tab-panel>

          <md-tab slot="tab">Desktop.logout</md-tab>
          <md-tab-panel slot="panel">
            <div className="action-container">
              <h2>Signout Functionality</h2>
              <md-button onClick={() => logout()}>
                Self Signout
              </md-button>
            </div>
            <br></br>
              <h2>Supervisor sign out</h2>
              <md-input
                class="input-field"
                shape="pill"
                placeholder="AgentId"
                clear=""
                value=""
                tabindex="0"
                autoFocus
                onInput={(e: any) => setAgentIdSignout(e.target.value)}
              ></md-input>
              <md-input
                class="input-field"
                shape="pill"
                placeholder="OrgId"
                clear=""
                value=""
                tabindex="0"
                autoFocus
                onInput={(e: any) => setOrgIdSignout(e.target.value)}
              ></md-input>
              <md-button onClick={() => signoutAgent(orgIdSignout, agentIdSignout)}>
                Supervisor Signout
              </md-button>
          </md-tab-panel>


        </md-tabs>
      </div>
    </Styled>
  );
};

export default App;
