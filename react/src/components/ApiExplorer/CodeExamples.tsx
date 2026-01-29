import React, { useState } from 'react';
import './CodeExamples.css';

interface CodeExample {
  id: string;
  title: string;
  description: string;
  category: 'api' | 'event' | 'workflow';
  code: string;
}

const codeExamples: CodeExample[] = [
  {
    id: 'init-sdk',
    title: 'Initialize Desktop SDK',
    description: 'Initialize the SDK when your widget loads',
    category: 'api',
    code: `import { Desktop } from '@wxcc-desktop/sdk';

// Initialize SDK in your component
useEffect(() => {
  async function init() {
    await Desktop.config.init({
      widgetName: "My Widget",
      widgetProvider: "Your Company"
    });
    console.log("SDK initialized");
  }
  init();
}, []);`
  },
  {
    id: 'get-agent-state',
    title: 'Get Current Agent State',
    description: 'Retrieve the latest agent state information',
    category: 'api',
    code: `// Get agent state data
const agentData = Desktop.agentStateInfo.latestData;

console.log("Agent ID:", agentData.agentId);
console.log("Agent Profile ID:", agentData.agentProfileID);
console.log("Current State:", agentData.state);
console.log("Team ID:", agentData.teamId);`
  },
  {
    id: 'change-agent-state',
    title: 'Change Agent State',
    description: 'Change agent state to Available or Idle',
    category: 'api',
    code: `// Change to Available
const result = await Desktop.agentStateInfo.stateChange({
  state: "Available",
  auxCodeIdArray: "0"
});

// Change to Idle with aux code
const idleResult = await Desktop.agentStateInfo.stateChange({
  state: "Idle",
  auxCodeIdArray: "123" // Your idle code ID
});`
  },
  {
    id: 'accept-interaction',
    title: 'Accept Incoming Interaction',
    description: 'Accept an offered interaction',
    category: 'api',
    code: `// Accept interaction
const result = await Desktop.agentContact.accept({
  interactionId: "your-interaction-id"
});

console.log("Interaction accepted:", result);`
  },
  {
    id: 'end-wrapup',
    title: 'End and Wrap Up Interaction',
    description: 'Complete interaction workflow',
    category: 'workflow',
    code: `// End the interaction
await Desktop.agentContact.end({
  interactionId: interactionId
});

// Wrap up with reason
await Desktop.agentContact.wrapup({
  interactionId: interactionId,
  data: {
    wrapUpReason: "Issue Resolved",
    auxCodeId: "0",
    isAutoWrapup: "false"
  }
});`
  },
  {
    id: 'consult-transfer',
    title: 'Consult and Transfer',
    description: 'Consult with another agent and transfer',
    category: 'workflow',
    code: `// 1. Get available agents
const buddyAgents = await Desktop.agentContact.buddyAgents({
  data: {
    agentProfileId: "profile-id",
    channelName: "chat",
    state: "Available"
  }
});

// 2. Initiate consult
await Desktop.agentContact.consult({
  interactionId: interactionId,
  data: {
    agentId: currentAgentId,
    destAgentId: buddyAgents.data.agentList[0].agentId,
    mediaType: "chat"
  },
  url: "consult"
});

// 3. Transfer after consult
await Desktop.agentContact.consultTransfer({
  interactionId: interactionId,
  data: {
    agentId: currentAgentId,
    destAgentId: destAgentId,
    mediaType: "chat",
    mediaResourceId: "resource-id"
  }
});`
  },
  {
    id: 'event-offer',
    title: 'Listen for Offered Interactions',
    description: 'Subscribe to interaction offer events',
    category: 'event',
    code: `// Subscribe to offer events
Desktop.agentContact.addEventListener(
  "eAgentOfferContact",
  (msg) => {
    console.log("New interaction offered:", msg.data.interactionId);
    
    // Auto-accept logic
    if (shouldAutoAccept) {
      Desktop.agentContact.accept({
        interactionId: msg.data.interactionId
      });
    }
  }
);`
  },
  {
    id: 'event-assigned',
    title: 'Handle Assigned Interactions',
    description: 'React when interaction is assigned',
    category: 'event',
    code: `Desktop.agentContact.addEventListener(
  "eAgentContactAssigned",
  (msg) => {
    console.log("Interaction assigned:", msg.data.interactionId);
    
    // Update UI
    setActiveInteraction(msg.data.interactionId);
    
    // Load customer data
    loadCustomerData(msg.data.interactionId);
  }
);`
  },
  {
    id: 'event-ended',
    title: 'Handle Interaction End',
    description: 'Clean up when interaction ends',
    category: 'event',
    code: `Desktop.agentContact.addEventListener(
  "eAgentContactEnded",
  (msg) => {
    console.log("Interaction ended:", msg.data.interactionId);
    
    // Clean up state
    setActiveInteraction(null);
    
    // Clear customer data
    clearCustomerData();
  }
);`
  },
  {
    id: 'event-wrapup',
    title: 'Handle Wrap-Up State',
    description: 'Show wrap-up UI when interaction enters wrap-up',
    category: 'event',
    code: `Desktop.agentContact.addEventListener(
  "eAgentWrapup",
  (msg) => {
    console.log("Entering wrap-up:", msg.data.interactionId);
    
    // Show wrap-up form
    setShowWrapUpForm(true);
    
    // Load wrap-up codes
    const codes = await Desktop.actions.getWrapUpCodes();
    setWrapUpCodes(codes);
  }
);`
  },
  {
    id: 'event-monitoring',
    title: 'Monitor Supervisor Events',
    description: 'Handle monitoring state changes',
    category: 'event',
    code: `// Monitoring offered
Desktop.monitoring.addEventListener(
  "eMonitoringOffered",
  (msg) => {
    console.log("Monitoring offered:", msg);
  }
);

// Monitoring started
Desktop.monitoring.addEventListener(
  "eMonitoringStarted",
  (msg) => {
    console.log("Monitoring started:", msg);
    setIsMonitoring(true);
  }
);

// Monitoring ended
Desktop.monitoring.addEventListener(
  "eMonitoringEnded",
  (msg) => {
    console.log("Monitoring ended:", msg);
    setIsMonitoring(false);
  }
);`
  },
  {
    id: 'event-cleanup',
    title: 'Clean Up Event Listeners',
    description: 'Remove listeners when component unmounts',
    category: 'event',
    code: `useEffect(() => {
  // Subscribe to events
  Desktop.agentContact.addEventListener("eAgentContact", handler);
  Desktop.monitoring.addEventListener("eMonitoringStarted", handler);
  
  // Cleanup on unmount
  return () => {
    Desktop.agentContact.removeAllEventListeners();
    Desktop.monitoring.removeAllEventListeners();
    Desktop.dialer.removeAllEventListeners();
    Desktop.screenpop.removeAllEventListeners();
  };
}, []);`
  },
  {
    id: 'get-task-map',
    title: 'Get All Active Tasks',
    description: 'Retrieve all assigned interactions with CAD data',
    category: 'api',
    code: `// Get task map
const taskMap = await Desktop.actions.getTaskMap();

// Convert to array
const tasks = Array.from(taskMap?.values() || []);

// Access CAD variables
tasks.forEach(task => {
  const cad = task.interaction.callAssociatedData;
  console.log("ANI:", cad.ani?.value);
  console.log("Customer Name:", cad.customerName?.value);
});`
  },
  {
    id: 'update-cad',
    title: 'Update CAD Variables',
    description: 'Update Call Associated Data for an interaction',
    category: 'api',
    code: `const contactPayload = {
  attributes: {
    customerName: "John Doe",
    accountNumber: "ACC-12345",
    priority: "High"
  }
};

await Desktop.dialer.updateCadVariables({
  interactionId: interactionId,
  data: contactPayload,
  keyId: "your-key-id",
  keyVersion: 1
});`
  },
  {
    id: 'fire-notification',
    title: 'Show Desktop Notification',
    description: 'Display notification to the agent',
    category: 'api',
    code: `import { Notifications } from '@uuip/unified-ui-platform-sdk';

const notifData = {
  data: {
    type: Notifications.ItemMeta.Type.Success,
    mode: Notifications.ItemMeta.Mode.AutoDismiss,
    title: "Task Completed",
    data: "Customer issue has been resolved"
  }
};

await Desktop.actions.fireGeneralAutoDismissNotification(notifData);`
  },
  {
    id: 'hold-unhold',
    title: 'Hold and Unhold Interaction',
    description: 'Place interaction on hold and retrieve',
    category: 'workflow',
    code: `// Place on hold
await Desktop.agentContact.hold({
  interactionId: interactionId
});

// Retrieve from hold
await Desktop.agentContact.unHold({
  interactionId: interactionId
});`
  }
];

export const CodeExamples: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'api' | 'event' | 'workflow'>('all');
  const [selectedExample, setSelectedExample] = useState<CodeExample | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredExamples = selectedCategory === 'all'
    ? codeExamples
    : codeExamples.filter(ex => ex.category === selectedCategory);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="code-examples">
      <div className="examples-header">
        <h2>Code Examples & Event Usage</h2>
        <p>Learn how to use the SDK with real-world examples</p>
      </div>

      <div className="examples-filters">
        <button
          className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('all')}
        >
          All Examples
        </button>
        <button
          className={`filter-btn ${selectedCategory === 'api' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('api')}
        >
          API Calls
        </button>
        <button
          className={`filter-btn ${selectedCategory === 'event' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('event')}
        >
          Event Handling
        </button>
        <button
          className={`filter-btn ${selectedCategory === 'workflow' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('workflow')}
        >
          Workflows
        </button>
      </div>

      <div className="examples-grid">
        {filteredExamples.map(example => (
          <div key={example.id} className="example-card">
            <div className="example-header">
              <h3>{example.title}</h3>
              <span className={`example-badge ${example.category}`}>
                {example.category}
              </span>
            </div>
            <p className="example-description">{example.description}</p>
            <div className="example-code-container">
              <pre className="example-code">
                <code>{example.code}</code>
              </pre>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard(example.code, example.id)}
                title="Copy to clipboard"
              >
                {copiedId === example.id ? '✓ Copied!' : '📋 Copy'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
