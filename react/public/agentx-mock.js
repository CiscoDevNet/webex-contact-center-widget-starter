// Mock AGENTX_SERVICE for standalone development
window.AGENTX_SERVICE = {
  // Agent State Info
  agentStateInfo: {
    latestData: {
      agentId: 'mock-agent-123',
      agentProfileID: 'mock-profile-456',
      agentSessionId: 'mock-session-789',
      teamId: 'mock-team-001',
      teamName: 'Mock Team',
      state: 'Available',
      subStatus: 'Available',
      auxCodeId: '0',
      idleCodes: [],
      wrapUpCodes: []
    },
    stateChange: function(data) {
      console.log('[MOCK] agentStateInfo.stateChange called with:', data);
      return Promise.resolve({ success: true, data: data });
    },
    fetchAddressBooks: function() {
      console.log('[MOCK] agentStateInfo.fetchAddressBooks called');
      return Promise.resolve({ 
        success: true, 
        data: [
          { id: '1', name: 'Address Book 1' },
          { id: '2', name: 'Address Book 2' }
        ]
      });
    },
    fetchOrganizationIdleCodes: function(orgId) {
      console.log('[MOCK] agentStateInfo.fetchOrganizationIdleCodes called with:', orgId);
      return Promise.resolve({ 
        success: true, 
        data: [
          { id: '1', name: 'Break', isActive: true },
          { id: '2', name: 'Lunch', isActive: true }
        ]
      });
    },
    fetchAgentIdleCodes: function(orgId, agentId) {
      console.log('[MOCK] agentStateInfo.fetchAgentIdleCodes called with:', orgId, agentId);
      return Promise.resolve({ 
        success: true, 
        data: [
          { id: '1', name: 'Break', isActive: true },
          { id: '2', name: 'Lunch', isActive: true }
        ]
      });
    },
    changeAgentState: function(orgId, data) {
      console.log('[MOCK] agentStateInfo.changeAgentState called with:', orgId, data);
      return Promise.resolve({ success: true, data: data });
    },
    mockOutdialAniList: function() {
      console.log('[MOCK] agentStateInfo.mockOutdialAniList called');
      return Promise.resolve({ 
        success: true, 
        data: ['+1234567890', '+0987654321']
      });
    }
  },

  // Agent Contact
  agentContact: {
    accept: function(data) {
      console.log('[MOCK] agentContact.accept called with:', data);
      return Promise.resolve({ success: true, interactionId: data.interactionId });
    },
    end: function(data) {
      console.log('[MOCK] agentContact.end called with:', data);
      return Promise.resolve({ success: true, interactionId: data.interactionId });
    },
    wrapup: function(data) {
      console.log('[MOCK] agentContact.wrapup called with:', data);
      return Promise.resolve({ success: true, data: data });
    },
    buddyAgents: function(data) {
      console.log('[MOCK] agentContact.buddyAgents called with:', data);
      return Promise.resolve({ 
        success: true, 
        data: {
          agentList: [
            { agentId: 'agent-001', agentName: 'John Doe', state: 'Available' },
            { agentId: 'agent-002', agentName: 'Jane Smith', state: 'Available' }
          ]
        }
      });
    },
    vteamList: function(data) {
      console.log('[MOCK] agentContact.vteamList called with:', data);
      return Promise.resolve({ 
        success: true, 
        data: {
          data: {
            vteamList: [
              { analyzerId: 'vteam-001', name: 'Support Queue', type: 'inboundqueue' },
              { analyzerId: 'vteam-002', name: 'Sales Queue', type: 'inboundqueue' }
            ]
          }
        }
      });
    },
    consult: function(data) {
      console.log('[MOCK] agentContact.consult called with:', data);
      return Promise.resolve({ success: true, data: data });
    },
    consultTransfer: function(data) {
      console.log('[MOCK] agentContact.consultTransfer called with:', data);
      return Promise.resolve({ success: true, data: data });
    },
    consultConference: function(data) {
      console.log('[MOCK] agentContact.consultConference called with:', data);
      return Promise.resolve({ success: true, data: data });
    },
    consultEnd: function(data) {
      console.log('[MOCK] agentContact.consultEnd called with:', data);
      return Promise.resolve({ success: true, data: data });
    },
    vteamTransfer: function(data) {
      console.log('[MOCK] agentContact.vteamTransfer called with:', data);
      return Promise.resolve({ success: true, data: data });
    },
    addEventListener: function(eventName, callback) {
      console.log('[MOCK] agentContact.addEventListener:', eventName);
    },
    removeAllEventListeners: function() {
      console.log('[MOCK] agentContact.removeAllEventListeners called');
    }
  },

  // Monitoring
  monitoring: {
    startMonitoring: function(data) {
      console.log('[MOCK] monitoring.startMonitoring called with:', data);
      return Promise.resolve({ success: true, data: data });
    },
    endMonitoring: function(data) {
      console.log('[MOCK] monitoring.endMonitoring called with:', data);
      return Promise.resolve({ success: true, data: data });
    },
    holdMonitoring: function(data) {
      console.log('[MOCK] monitoring.holdMonitoring called with:', data);
      return Promise.resolve({ success: true, data: data });
    },
    unHoldMonitoring: function(data) {
      console.log('[MOCK] monitoring.unHoldMonitoring called with:', data);
      return Promise.resolve({ success: true, data: data });
    },
    bargeIn: function(data) {
      console.log('[MOCK] monitoring.bargeIn called with:', data);
      return Promise.resolve({ success: true, data: data });
    },
    addEventListener: function(eventName, callback) {
      console.log('[MOCK] monitoring.addEventListener:', eventName);
    },
    removeAllEventListeners: function() {
      console.log('[MOCK] monitoring.removeAllEventListeners called');
    }
  },

  // Actions
  actions: {
    getToken: function() {
      console.log('[MOCK] actions.getToken called');
      return Promise.resolve({ 
        success: true, 
        token: 'mock-jwt-token-' + Date.now()
      });
    },
    getIdleCodes: function() {
      console.log('[MOCK] actions.getIdleCodes called');
      return Promise.resolve({ 
        success: true, 
        data: [
          { id: '1', name: 'Break', isActive: true },
          { id: '2', name: 'Lunch', isActive: true },
          { id: '3', name: 'Meeting', isActive: true }
        ]
      });
    },
    getWrapUpCodes: function() {
      console.log('[MOCK] actions.getWrapUpCodes called');
      return Promise.resolve({ 
        success: true, 
        data: [
          { id: '1', name: 'Resolved', isActive: true },
          { id: '2', name: 'Escalated', isActive: true },
          { id: '3', name: 'Follow-up Required', isActive: true }
        ]
      });
    },
    getTaskMap: function() {
      console.log('[MOCK] actions.getTaskMap called');
      const mockTaskMap = new Map();
      mockTaskMap.set('task-001', {
        interaction: {
          interactionId: 'task-001',
          channelType: 'chat',
          callAssociatedData: {
            ani: { value: '+1234567890' },
            customerName: { value: 'John Customer' }
          }
        }
      });
      return Promise.resolve(mockTaskMap);
    },
    fireGeneralAutoDismissNotification: function(data) {
      console.log('[MOCK] actions.fireGeneralAutoDismissNotification called with:', data);
      return Promise.resolve(['success', 'Notification displayed', 'AutoDismiss']);
    }
  },

  // Dialer
  dialer: {
    updateCadVariables: function(data) {
      console.log('[MOCK] dialer.updateCadVariables called with:', data);
      return Promise.resolve({ success: true, data: data });
    },
    addEventListener: function(eventName, callback) {
      console.log('[MOCK] dialer.addEventListener:', eventName);
    },
    removeAllEventListeners: function() {
      console.log('[MOCK] dialer.removeAllEventListeners called');
    }
  },

  // Screenpop
  screenpop: {
    addEventListener: function(eventName, callback) {
      console.log('[MOCK] screenpop.addEventListener:', eventName);
    },
    removeAllEventListeners: function() {
      console.log('[MOCK] screenpop.removeAllEventListeners called');
    }
  },

  // Logout
  logout: {
    desktopLogout: function(data) {
      console.log('[MOCK] logout.desktopLogout called with:', data);
      return Promise.resolve({ success: true });
    },
    signoutAgent: function(data) {
      console.log('[MOCK] logout.signoutAgent called with:', data);
      return Promise.resolve({ success: true });
    }
  },

  // Config
  config: {
    init: function(config) {
      console.log('[MOCK] config.init called with:', config);
      return Promise.resolve({ success: true });
    },
    clientLocale: 'en-US'
  },

  // Shortcut Keys
  shortcutKey: {
    DEFAULT_SHORTCUT_KEYS: {},
    MODIFIERS: {},
    REGISTERED_KEYS: {},
    getRegisteredKeys: function() {
      console.log('[MOCK] shortcutKey.getRegisteredKeys called');
      return {};
    }
  }
};

console.log('[MOCK] AGENTX_SERVICE initialized for standalone development');
