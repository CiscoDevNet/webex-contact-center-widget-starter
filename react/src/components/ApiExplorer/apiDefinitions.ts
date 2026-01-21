import { ApiMethod } from './types';

export const apiMethods: ApiMethod[] = [
  // Desktop.agentStateInfo APIs
  {
    id: 'getAgentInfo',
    name: 'Get Agent Info',
    description: 'Retrieves the latest agent state information including profile ID and session details',
    category: 'Desktop.agentStateInfo',
    parameters: [],
    sdkPath: 'Desktop.agentStateInfo.latestData',
    exampleCode: `const latestData = Desktop.agentStateInfo.latestData;
console.log("Agent Profile ID:", latestData.agentProfileID);
console.log("Agent Status:", latestData.subStatus);`
  },
  {
    id: 'changeState',
    name: 'Change Agent State',
    description: 'Changes the agent state to Available or Idle',
    category: 'Desktop.agentStateInfo',
    parameters: [
      {
        name: 'state',
        type: 'string',
        required: true,
        description: 'Target agent state',
        options: ['Available', 'Idle'],
        defaultValue: 'Available'
      },
      {
        name: 'auxCodeIdArray',
        type: 'string',
        required: false,
        description: 'Auxiliary code ID (use "0" for default)',
        defaultValue: '0',
        placeholder: '0'
      }
    ],
    sdkPath: 'Desktop.agentStateInfo.stateChange',
    exampleCode: `const result = await Desktop.agentStateInfo.stateChange({
  state: "Available",
  auxCodeIdArray: "0"
});
console.log("State changed:", result);`
  },
  {
    id: 'getClientLocale',
    name: 'Get Client Locale',
    description: 'Retrieves the current client locale setting',
    category: 'Desktop.agentStateInfo',
    parameters: [],
    sdkPath: 'Desktop.config.clientLocale',
    exampleCode: `const locale = Desktop.config.clientLocale;
console.log("Client locale:", locale);`
  },
  {
    id: 'fetchAddressBooks',
    name: 'Fetch Address Books',
    description: 'Retrieves the list of address books available to the agent',
    category: 'Desktop.agentStateInfo',
    parameters: [],
    sdkPath: 'Desktop.agentStateInfo.fetchAddressBooks',
    exampleCode: `const books = await Desktop.agentStateInfo.fetchAddressBooks();
console.log("Address books:", books);`
  },
  {
    id: 'getIdleCodes',
    name: 'Get Idle Codes',
    description: 'Retrieves available idle codes for the agent',
    category: 'Desktop.agentStateInfo',
    parameters: [],
    sdkPath: 'Desktop.actions.getIdleCodes',
    exampleCode: `const idleCodes = await Desktop.actions.getIdleCodes();
console.log("Idle codes:", idleCodes);`
  },
  {
    id: 'getWrapUpCodes',
    name: 'Get Wrap-Up Codes',
    description: 'Retrieves available wrap-up codes for the agent',
    category: 'Desktop.agentStateInfo',
    parameters: [],
    sdkPath: 'Desktop.actions.getWrapUpCodes',
    exampleCode: `const wrapUpCodes = await Desktop.actions.getWrapUpCodes();
console.log("Wrap-up codes:", wrapUpCodes);`
  },
  {
    id: 'mockOutdialAniList',
    name: 'Mock Outdial ANI List',
    description: 'Retrieves mock outdial ANI list for testing',
    category: 'Desktop.agentStateInfo',
    parameters: [],
    sdkPath: 'Desktop.agentStateInfo.mockOutdialAniList',
    exampleCode: `await Desktop.agentStateInfo.mockOutdialAniList();
console.log("Mock outdial ANI list retrieved");`
  },
  {
    id: 'fetchOrganizationIdleCodes',
    name: 'Fetch Organization Idle Codes (Supervisor)',
    description: 'Fetches idle codes for the organization (Supervisor API)',
    category: 'Desktop.supervisor',
    parameters: [
      {
        name: 'orgId',
        type: 'string',
        required: true,
        description: 'Organization ID',
        placeholder: 'Enter organization ID'
      }
    ],
    sdkPath: 'Desktop.agentStateInfo.fetchOrganizationIdleCodes',
    exampleCode: `await Desktop.agentStateInfo.fetchOrganizationIdleCodes("orgId");
console.log("Organization idle codes fetched");`
  },
  {
    id: 'fetchAgentIdleCodes',
    name: 'Fetch Agent Idle Codes (Supervisor)',
    description: 'Fetches idle codes for a specific agent (Supervisor API)',
    category: 'Desktop.supervisor',
    parameters: [
      {
        name: 'orgId',
        type: 'string',
        required: true,
        description: 'Organization ID',
        placeholder: 'Enter organization ID'
      },
      {
        name: 'agentId',
        type: 'string',
        required: true,
        description: 'Agent ID',
        placeholder: 'Enter agent ID'
      }
    ],
    sdkPath: 'Desktop.agentStateInfo.fetchAgentIdleCodes',
    exampleCode: `await Desktop.agentStateInfo.fetchAgentIdleCodes("orgId", "agentId");
console.log("Agent idle codes fetched");`
  },
  {
    id: 'changeAgentState',
    name: 'Change Agent State (Supervisor)',
    description: 'Changes agent state for another agent (Supervisor API)',
    category: 'Desktop.supervisor',
    parameters: [
      {
        name: 'orgId',
        type: 'string',
        required: true,
        description: 'Organization ID',
        placeholder: 'Enter organization ID'
      },
      {
        name: 'agentId',
        type: 'string',
        required: true,
        description: 'Agent ID',
        placeholder: 'Enter agent ID'
      },
      {
        name: 'state',
        type: 'string',
        required: true,
        description: 'Target state',
        options: ['AVAILABLE', 'IDLE'],
        defaultValue: 'AVAILABLE'
      },
      {
        name: 'auxCodeId',
        type: 'string',
        required: false,
        description: 'Auxiliary code ID',
        defaultValue: '',
        placeholder: 'Enter aux code ID'
      }
    ],
    sdkPath: 'Desktop.agentStateInfo.changeAgentState',
    exampleCode: `await Desktop.agentStateInfo.changeAgentState("orgId", {
  auxCodeId: "",
  agentId: "agentId",
  state: "IDLE"
});
console.log("Agent state changed");`
  },

  // Desktop.agentContact APIs
  {
    id: 'acceptInteraction',
    name: 'Accept Interaction',
    description: 'Accepts an incoming interaction',
    category: 'Desktop.agentContact',
    parameters: [
      {
        name: 'interactionId',
        type: 'string',
        required: true,
        description: 'The ID of the interaction to accept',
        placeholder: 'Enter interaction ID'
      }
    ],
    sdkPath: 'Desktop.agentContact.accept',
    exampleCode: `const result = await Desktop.agentContact.accept({
  interactionId: "your-interaction-id"
});
console.log("Interaction accepted:", result);`
  },
  {
    id: 'endInteraction',
    name: 'End Interaction',
    description: 'Ends an active interaction',
    category: 'Desktop.agentContact',
    parameters: [
      {
        name: 'interactionId',
        type: 'string',
        required: true,
        description: 'The ID of the interaction to end',
        placeholder: 'Enter interaction ID'
      }
    ],
    sdkPath: 'Desktop.agentContact.end',
    exampleCode: `const result = await Desktop.agentContact.end({
  interactionId: "your-interaction-id"
});
console.log("Interaction ended:", result);`
  },
  {
    id: 'wrapUpInteraction',
    name: 'Wrap Up Interaction',
    description: 'Wraps up an interaction with optional wrap-up reason',
    category: 'Desktop.agentContact',
    parameters: [
      {
        name: 'interactionId',
        type: 'string',
        required: true,
        description: 'The ID of the interaction to wrap up',
        placeholder: 'Enter interaction ID'
      },
      {
        name: 'wrapUpReason',
        type: 'string',
        required: false,
        description: 'Reason for wrap-up',
        placeholder: 'Enter wrap-up reason',
        defaultValue: 'Completed'
      },
      {
        name: 'auxCodeId',
        type: 'string',
        required: false,
        description: 'Auxiliary code ID',
        defaultValue: '0',
        placeholder: '0'
      },
      {
        name: 'isAutoWrapup',
        type: 'string',
        required: false,
        description: 'Whether this is an auto wrap-up',
        options: ['true', 'false'],
        defaultValue: 'false'
      }
    ],
    sdkPath: 'Desktop.agentContact.wrapup',
    exampleCode: `const result = await Desktop.agentContact.wrapup({
  interactionId: "your-interaction-id",
  data: {
    wrapUpReason: "Completed",
    auxCodeId: "0",
    isAutoWrapup: "false"
  }
});
console.log("Interaction wrapped up:", result);`
  },
  {
    id: 'getBuddyAgents',
    name: 'Get Buddy Agents',
    description: 'Retrieves list of available agents for consultation or transfer',
    category: 'Desktop.agentContact',
    parameters: [
      {
        name: 'agentProfileId',
        type: 'string',
        required: true,
        description: 'Agent profile ID',
        placeholder: 'Enter agent profile ID'
      },
      {
        name: 'channelName',
        type: 'string',
        required: true,
        description: 'Channel name',
        options: ['chat', 'telephony', 'email'],
        defaultValue: 'chat'
      },
      {
        name: 'state',
        type: 'string',
        required: true,
        description: 'Agent state filter',
        options: ['Available', 'Idle'],
        defaultValue: 'Available'
      }
    ],
    sdkPath: 'Desktop.agentContact.buddyAgents',
    exampleCode: `const result = await Desktop.agentContact.buddyAgents({
  data: {
    agentProfileId: "your-profile-id",
    channelName: "chat",
    state: "Available"
  }
});
console.log("Buddy agents:", result);`
  },
  {
    id: 'getVTeamList',
    name: 'Get VTeam List',
    description: 'Retrieves channel-specific team list for transfers',
    category: 'Desktop.agentContact',
    parameters: [
      {
        name: 'agentProfileId',
        type: 'string',
        required: true,
        description: 'Agent profile ID',
        placeholder: 'Enter agent profile ID'
      },
      {
        name: 'agentSessionId',
        type: 'string',
        required: true,
        description: 'Agent session ID',
        placeholder: 'Enter agent session ID'
      },
      {
        name: 'channelType',
        type: 'string',
        required: true,
        description: 'Channel type',
        options: ['chat', 'telephony', 'email'],
        defaultValue: 'chat'
      },
      {
        name: 'type',
        type: 'string',
        required: true,
        description: 'Queue type',
        options: ['inboundqueue', 'outboundqueue'],
        defaultValue: 'inboundqueue'
      }
    ],
    sdkPath: 'Desktop.agentContact.vteamList',
    exampleCode: `const result = await Desktop.agentContact.vteamList({
  data: {
    agentProfileId: "your-profile-id",
    agentSessionId: "your-session-id",
    channelType: "chat",
    type: "inboundqueue"
  }
});
console.log("VTeam list:", result);`
  },
  {
    id: 'consultAgent',
    name: 'Consult with Agent',
    description: 'Initiates a consultation with another agent',
    category: 'Desktop.agentContact',
    parameters: [
      {
        name: 'interactionId',
        type: 'string',
        required: true,
        description: 'Current interaction ID',
        placeholder: 'Enter interaction ID'
      },
      {
        name: 'agentId',
        type: 'string',
        required: true,
        description: 'Current agent ID',
        placeholder: 'Enter your agent ID'
      },
      {
        name: 'destAgentId',
        type: 'string',
        required: true,
        description: 'Destination agent ID for consultation',
        placeholder: 'Enter destination agent ID'
      },
      {
        name: 'mediaType',
        type: 'string',
        required: true,
        description: 'Media type',
        options: ['chat', 'telephony', 'email'],
        defaultValue: 'chat'
      }
    ],
    sdkPath: 'Desktop.agentContact.consult',
    exampleCode: `const result = await Desktop.agentContact.consult({
  interactionId: "your-interaction-id",
  data: {
    agentId: "your-agent-id",
    destAgentId: "destination-agent-id",
    mediaType: "chat"
  },
  url: "consult"
});
console.log("Consult initiated:", result);`
  },
  {
    id: 'holdInteraction',
    name: 'Hold Interaction',
    description: 'Places an active interaction on hold',
    category: 'Desktop.agentContact',
    parameters: [
      {
        name: 'interactionId',
        type: 'string',
        required: true,
        description: 'Interaction ID to hold',
        placeholder: 'Enter interaction ID'
      }
    ],
    sdkPath: 'Desktop.agentContact.hold',
    exampleCode: `const result = await Desktop.agentContact.hold({
  interactionId: "your-interaction-id"
});
console.log("Interaction held:", result);`
  },
  {
    id: 'unholdInteraction',
    name: 'Unhold Interaction',
    description: 'Retrieves an interaction from hold',
    category: 'Desktop.agentContact',
    parameters: [
      {
        name: 'interactionId',
        type: 'string',
        required: true,
        description: 'Interaction ID to unhold',
        placeholder: 'Enter interaction ID'
      }
    ],
    sdkPath: 'Desktop.agentContact.unHold',
    exampleCode: `const result = await Desktop.agentContact.unHold({
  interactionId: "your-interaction-id"
});
console.log("Interaction unheld:", result);`
  },
  {
    id: 'consultEnd',
    name: 'End Consult',
    description: 'Ends an active consultation',
    category: 'Desktop.agentContact',
    parameters: [
      {
        name: 'interactionId',
        type: 'string',
        required: true,
        description: 'Interaction ID',
        placeholder: 'Enter interaction ID'
      },
      {
        name: 'isConsult',
        type: 'boolean',
        required: true,
        description: 'Is this a consult (true) or conference (false)',
        defaultValue: true
      }
    ],
    sdkPath: 'Desktop.agentContact.consultEnd',
    exampleCode: `const result = await Desktop.agentContact.consultEnd({
  interactionId: "your-interaction-id",
  isConsult: true
});
console.log("Consult ended:", result);`
  },
  {
    id: 'consultConference',
    name: 'Consult Conference',
    description: 'Converts a consultation into a conference',
    category: 'Desktop.agentContact',
    parameters: [
      {
        name: 'interactionId',
        type: 'string',
        required: true,
        description: 'Current interaction ID',
        placeholder: 'Enter interaction ID'
      },
      {
        name: 'agentId',
        type: 'string',
        required: true,
        description: 'Current agent ID',
        placeholder: 'Enter your agent ID'
      },
      {
        name: 'destAgentId',
        type: 'string',
        required: true,
        description: 'Destination agent ID',
        placeholder: 'Enter destination agent ID'
      },
      {
        name: 'mediaType',
        type: 'string',
        required: true,
        description: 'Media type',
        options: ['chat', 'telephony', 'email'],
        defaultValue: 'chat'
      }
    ],
    sdkPath: 'Desktop.agentContact.consultConference',
    exampleCode: `const result = await Desktop.agentContact.consultConference({
  interactionId: "your-interaction-id",
  data: {
    agentId: "your-agent-id",
    destAgentId: "destination-agent-id",
    mediaType: "chat"
  }
});
console.log("Conference created:", result);`
  },
  {
    id: 'consultTransfer',
    name: 'Consult Transfer',
    description: 'Transfers interaction to another agent after consultation',
    category: 'Desktop.agentContact',
    parameters: [
      {
        name: 'interactionId',
        type: 'string',
        required: true,
        description: 'Current interaction ID',
        placeholder: 'Enter interaction ID'
      },
      {
        name: 'agentId',
        type: 'string',
        required: true,
        description: 'Current agent ID',
        placeholder: 'Enter your agent ID'
      },
      {
        name: 'destAgentId',
        type: 'string',
        required: true,
        description: 'Destination agent ID',
        placeholder: 'Enter destination agent ID'
      },
      {
        name: 'mediaType',
        type: 'string',
        required: true,
        description: 'Media type',
        options: ['chat', 'telephony', 'email'],
        defaultValue: 'chat'
      },
      {
        name: 'mediaResourceId',
        type: 'string',
        required: true,
        description: 'Media resource ID',
        placeholder: 'Enter media resource ID'
      }
    ],
    sdkPath: 'Desktop.agentContact.consultTransfer',
    exampleCode: `const result = await Desktop.agentContact.consultTransfer({
  interactionId: "your-interaction-id",
  data: {
    agentId: "your-agent-id",
    destAgentId: "destination-agent-id",
    mediaType: "chat",
    mediaResourceId: "media-resource-id"
  }
});
console.log("Transfer completed:", result);`
  },
  {
    id: 'vteamTransfer',
    name: 'VTeam Transfer',
    description: 'Transfers interaction to a virtual team queue',
    category: 'Desktop.agentContact',
    parameters: [
      {
        name: 'interactionId',
        type: 'string',
        required: true,
        description: 'Current interaction ID',
        placeholder: 'Enter interaction ID'
      },
      {
        name: 'vteamId',
        type: 'string',
        required: true,
        description: 'Virtual team ID',
        placeholder: 'Enter vteam ID'
      },
      {
        name: 'vteamType',
        type: 'string',
        required: true,
        description: 'Virtual team type',
        placeholder: 'Enter vteam type'
      }
    ],
    sdkPath: 'Desktop.agentContact.vteamTransfer',
    exampleCode: `const result = await Desktop.agentContact.vteamTransfer({
  interactionId: "your-interaction-id",
  data: {
    vteamId: "vteam-id",
    vteamType: "vteam-type"
  }
});
console.log("VTeam transfer completed:", result);`
  },

  // Desktop.monitoring APIs
  {
    id: 'startMonitoring',
    name: 'Start Monitoring',
    description: 'Starts monitoring another agent\'s interaction',
    category: 'Desktop.monitoring',
    parameters: [
      {
        name: 'id',
        type: 'string',
        required: true,
        description: 'Monitoring request ID',
        placeholder: 'Enter monitoring ID'
      },
      {
        name: 'monitorType',
        type: 'string',
        required: true,
        description: 'Type of monitoring',
        options: ['silent', 'midcall', 'barge-in'],
        defaultValue: 'midcall'
      },
      {
        name: 'trackingId',
        type: 'string',
        required: true,
        description: 'Tracking ID',
        placeholder: 'Enter tracking ID'
      },
      {
        name: 'taskId',
        type: 'string',
        required: true,
        description: 'Task ID to monitor',
        placeholder: 'Enter task ID'
      }
    ],
    sdkPath: 'Desktop.monitoring.startMonitoring',
    exampleCode: `const result = await Desktop.monitoring.startMonitoring({
  data: {
    id: "monitoring-id",
    monitorType: "midcall",
    trackingId: "tracking-id",
    taskId: "task-id"
  }
});
console.log("Monitoring started:", result);`
  },
  {
    id: 'endMonitoring',
    name: 'End Monitoring',
    description: 'Ends an active monitoring session',
    category: 'Desktop.monitoring',
    parameters: [
      {
        name: 'interactionId',
        type: 'string',
        required: true,
        description: 'Interaction ID being monitored',
        placeholder: 'Enter interaction ID'
      }
    ],
    sdkPath: 'Desktop.monitoring.endMonitoring',
    exampleCode: `const result = await Desktop.monitoring.endMonitoring({
  interactionId: "your-interaction-id"
});
console.log("Monitoring ended:", result);`
  },
  {
    id: 'holdMonitoring',
    name: 'Hold Monitoring',
    description: 'Places a monitoring session on hold',
    category: 'Desktop.monitoring',
    parameters: [
      {
        name: 'interactionId',
        type: 'string',
        required: true,
        description: 'Interaction ID being monitored',
        placeholder: 'Enter interaction ID'
      }
    ],
    sdkPath: 'Desktop.monitoring.holdMonitoring',
    exampleCode: `const result = await Desktop.monitoring.holdMonitoring({
  interactionId: "your-interaction-id"
});
console.log("Monitoring held:", result);`
  },
  {
    id: 'unholdMonitoring',
    name: 'Unhold Monitoring',
    description: 'Retrieves a monitoring session from hold',
    category: 'Desktop.monitoring',
    parameters: [
      {
        name: 'interactionId',
        type: 'string',
        required: true,
        description: 'Interaction ID being monitored',
        placeholder: 'Enter interaction ID'
      }
    ],
    sdkPath: 'Desktop.monitoring.unHoldMonitoring',
    exampleCode: `const result = await Desktop.monitoring.unHoldMonitoring({
  interactionId: "your-interaction-id"
});
console.log("Monitoring unheld:", result);`
  },
  {
    id: 'bargeIn',
    name: 'Barge In',
    description: 'Barge into an ongoing monitored interaction',
    category: 'Desktop.monitoring',
    parameters: [
      {
        name: 'interactionId',
        type: 'string',
        required: true,
        description: 'Interaction ID to barge into',
        placeholder: 'Enter interaction ID'
      }
    ],
    sdkPath: 'Desktop.monitoring.bargeIn',
    exampleCode: `const result = await Desktop.monitoring.bargeIn({
  interactionId: "your-interaction-id"
});
console.log("Barged in:", result);`
  },

  // Desktop.dialer APIs
  {
    id: 'updateCadVariables',
    name: 'Update CAD Variables',
    description: 'Updates Call Associated Data (CAD) variables for an interaction',
    category: 'Desktop.dialer',
    parameters: [
      {
        name: 'interactionId',
        type: 'string',
        required: true,
        description: 'Interaction ID',
        placeholder: 'Enter interaction ID'
      },
      {
        name: 'diallerName',
        type: 'string',
        required: false,
        description: 'Dialler name',
        placeholder: 'Enter dialler name',
        defaultValue: 'agent-name'
      },
      {
        name: 'diallerPhoneNumber',
        type: 'string',
        required: false,
        description: 'Dialler phone number',
        placeholder: 'Enter phone number',
        defaultValue: '+1 010 010 010'
      },
      {
        name: 'keyId',
        type: 'string',
        required: true,
        description: 'Key ID',
        placeholder: 'Enter key ID',
        defaultValue: 'abc'
      },
      {
        name: 'keyVersion',
        type: 'number',
        required: true,
        description: 'Key version',
        defaultValue: 1
      }
    ],
    sdkPath: 'Desktop.dialer.updateCadVariables',
    exampleCode: `const contactPayload = {
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
console.log("CAD variables updated");`
  },

  // Desktop.actions APIs
  {
    id: 'getToken',
    name: 'Get Auth Token',
    description: 'Retrieves the current authentication token',
    category: 'Desktop.actions',
    parameters: [],
    sdkPath: 'Desktop.actions.getToken',
    exampleCode: `const token = await Desktop.actions.getToken();
console.log("Auth token:", token);`
  },
  {
    id: 'getTaskMap',
    name: 'Get Task Map',
    description: 'Retrieves all assigned tasks with CAD variables',
    category: 'Desktop.actions',
    parameters: [],
    sdkPath: 'Desktop.actions.getTaskMap',
    exampleCode: `const taskMap = await Desktop.actions.getTaskMap();
const tasks = Array.from(taskMap?.values() || []);
console.log("Assigned tasks:", tasks);`
  },
  {
    id: 'fireNotification',
    name: 'Fire Notification',
    description: 'Displays a notification to the agent',
    category: 'Desktop.actions',
    parameters: [
      {
        name: 'type',
        type: 'string',
        required: true,
        description: 'Notification type',
        options: ['Info', 'Success', 'Warning', 'Error'],
        defaultValue: 'Info'
      },
      {
        name: 'title',
        type: 'string',
        required: true,
        description: 'Notification title',
        placeholder: 'Enter notification title',
        defaultValue: 'Notification'
      },
      {
        name: 'message',
        type: 'string',
        required: true,
        description: 'Notification message',
        placeholder: 'Enter notification message',
        defaultValue: 'This is a test notification'
      }
    ],
    sdkPath: 'Desktop.actions.fireGeneralAutoDismissNotification',
    exampleCode: `const result = await Desktop.actions.fireGeneralAutoDismissNotification({
  data: {
    type: Notifications.ItemMeta.Type.Info,
    mode: Notifications.ItemMeta.Mode.AutoDismiss,
    title: "Notification Title",
    data: "Notification message"
  }
});
console.log("Notification fired:", result);`
  },

  // Desktop.logout APIs
  {
    id: 'desktopLogout',
    name: 'Desktop Logout',
    description: 'Logs out the current agent from the desktop',
    category: 'Desktop.logout',
    parameters: [
      {
        name: 'logoutReason',
        type: 'string',
        required: false,
        description: 'Reason for logout',
        placeholder: 'Enter logout reason',
        defaultValue: 'User requested logout'
      }
    ],
    sdkPath: 'Desktop.logout.desktopLogout',
    exampleCode: `await Desktop.logout.desktopLogout({
  data: { logoutReason: "User requested logout" }
});
console.log("Logged out successfully");`
  },
  {
    id: 'signoutAgent',
    name: 'Signout Agent (Supervisor)',
    description: 'Supervisor function to sign out another agent',
    category: 'Desktop.logout',
    parameters: [
      {
        name: 'orgId',
        type: 'string',
        required: true,
        description: 'Organization ID',
        placeholder: 'Enter organization ID'
      },
      {
        name: 'agentId',
        type: 'string',
        required: true,
        description: 'Agent ID to sign out',
        placeholder: 'Enter agent ID'
      },
      {
        name: 'logoutReason',
        type: 'string',
        required: false,
        description: 'Reason for signout',
        placeholder: 'Enter logout reason',
        defaultValue: 'SupervisorSignout'
      }
    ],
    sdkPath: 'Desktop.logout.signoutAgent',
    exampleCode: `await Desktop.logout.signoutAgent({
  orgId: "orgId",
  data: {
    agentId: "agentId",
    logoutReason: "SupervisorSignout"
  }
});
console.log("Agent signed out successfully");`
  }
];

export const apiCategories = [
  'Desktop.agentStateInfo',
  'Desktop.agentContact',
  'Desktop.supervisor',
  'Desktop.monitoring',
  'Desktop.dialer',
  'Desktop.actions',
  'Desktop.logout'
];
