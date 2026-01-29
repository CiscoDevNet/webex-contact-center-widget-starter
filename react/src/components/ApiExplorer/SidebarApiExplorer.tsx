import React, { useState, useEffect, useRef } from 'react';
import { apiMethods, apiCategories } from './apiDefinitions';
import { ApiMethod } from './types';
import { Desktop } from '@wxcc-desktop/sdk';
import { Notifications } from '@uuip/unified-ui-platform-sdk';
import './SidebarApiExplorer.css';

interface ConsoleLog {
  id: number;
  timestamp: Date;
  type: 'log' | 'error' | 'success';
  message: string;
  data?: any;
}

export const SidebarApiExplorer: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<ApiMethod | null>(null);
  const [parameters, setParameters] = useState<Record<string, any>>({});
  const [consoleLogs, setConsoleLogs] = useState<ConsoleLog[]>([]);
  const [isExecuting, setIsExecuting] = useState(false);
  const [showCodeExample, setShowCodeExample] = useState(false);
  const consoleEndRef = useRef<HTMLDivElement>(null);
  const logIdCounter = useRef(0);

  useEffect(() => {
    if (apiMethods.length > 0) {
      setSelectedMethod(apiMethods[0]);
      initializeParameters(apiMethods[0]);
    }
  }, []);

  useEffect(() => {
    consoleEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [consoleLogs]);

  const initializeParameters = (method: ApiMethod) => {
    const params: Record<string, any> = {};
    method.parameters.forEach(param => {
      params[param.name] = param.defaultValue ?? '';
    });
    setParameters(params);
  };

  const handleMethodSelect = (method: ApiMethod) => {
    setSelectedMethod(method);
    initializeParameters(method);
    setConsoleLogs([]);
  };

  const addLog = (type: 'log' | 'error' | 'success', message: string, data?: any) => {
    const log: ConsoleLog = {
      id: logIdCounter.current++,
      timestamp: new Date(),
      type,
      message,
      data
    };
    setConsoleLogs(prev => [...prev, log]);
  };

  const handleParameterChange = (paramName: string, value: any) => {
    setParameters(prev => ({ ...prev, [paramName]: value }));
  };

  const clearConsole = () => {
    setConsoleLogs([]);
    setIsExecuting(false);
  };

  const copyToClipboard = (text: string) => {
    // Fallback method that works in shadow DOM
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      addLog('log', 'Code copied to clipboard', null);
    } catch (err) {
      addLog('error', 'Failed to copy code', err);
    }
    document.body.removeChild(textArea);
  };

  const executeMethod = async () => {
    if (!selectedMethod) return;

    setConsoleLogs([]);
    setIsExecuting(true);
    addLog('log', `Executing: ${selectedMethod.name}`, parameters);

    try {
      let result;
      
      switch (selectedMethod.id) {
        case 'getAgentInfo':
          result = Desktop.agentStateInfo.latestData;
          addLog('success', 'Agent Info Retrieved', result);
          break;

        case 'changeState':
          result = await Desktop.agentStateInfo.stateChange({
            state: parameters.state,
            auxCodeIdArray: parameters.auxCodeIdArray
          });
          addLog('success', 'State Changed Successfully', result);
          break;

        case 'getClientLocale':
          result = Desktop.config.clientLocale;
          addLog('success', 'Client Locale Retrieved', result);
          break;

        case 'fetchAddressBooks':
          result = await Desktop.agentStateInfo.fetchAddressBooks();
          addLog('success', 'Address Books Retrieved', result);
          break;

        case 'getIdleCodes':
          result = await Desktop.actions.getIdleCodes();
          addLog('success', 'Idle Codes Retrieved', result);
          break;

        case 'getWrapUpCodes':
          result = await Desktop.actions.getWrapUpCodes();
          addLog('success', 'Wrap-Up Codes Retrieved', result);
          break;

        case 'mockOutdialAniList':
          result = await Desktop.agentStateInfo.mockOutdialAniList();
          addLog('success', 'Mock Outdial ANI List Retrieved', result);
          break;

        case 'fetchOrganizationIdleCodes':
          result = await Desktop.agentStateInfo.fetchOrganizationIdleCodes(parameters.orgId);
          addLog('success', 'Organization Idle Codes Retrieved', result);
          break;

        case 'fetchAgentIdleCodes':
          result = await Desktop.agentStateInfo.fetchAgentIdleCodes(
            parameters.orgId,
            parameters.agentId
          );
          addLog('success', 'Agent Idle Codes Retrieved', result);
          break;

        case 'changeAgentState':
          result = await Desktop.agentStateInfo.changeAgentState(parameters.orgId, {
            auxCodeId: parameters.auxCodeId,
            agentId: parameters.agentId,
            state: parameters.state
          });
          addLog('success', 'Agent State Changed', result);
          break;

        case 'acceptInteraction':
          result = await Desktop.agentContact.accept({
            interactionId: parameters.interactionId
          });
          addLog('success', 'Interaction Accepted', result);
          break;

        case 'endInteraction':
          result = await Desktop.agentContact.end({
            interactionId: parameters.interactionId
          });
          addLog('success', 'Interaction Ended', result);
          break;

        case 'wrapUpInteraction':
          result = await Desktop.agentContact.wrapup({
            interactionId: parameters.interactionId,
            data: {
              wrapUpReason: parameters.wrapUpReason,
              auxCodeId: parameters.auxCodeId,
              isAutoWrapup: parameters.isAutoWrapup
            }
          });
          addLog('success', 'Interaction Wrapped Up', result);
          break;

        case 'getBuddyAgents':
          result = await Desktop.agentContact.buddyAgents({
            data: {
              agentProfileId: parameters.agentProfileId,
              channelName: parameters.channelName,
              state: parameters.state
            }
          });
          addLog('success', 'Buddy Agents Retrieved', result);
          break;

        case 'getVTeamList':
          result = await Desktop.agentContact.vteamList({
            data: {
              agentProfileId: parameters.agentProfileId,
              agentSessionId: parameters.agentSessionId,
              channelType: parameters.channelType,
              type: parameters.type
            }
          });
          addLog('success', 'VTeam List Retrieved', result);
          break;

        case 'consultAgent':
          result = await Desktop.agentContact.consult({
            interactionId: parameters.interactionId,
            data: {
              agentId: parameters.agentId,
              destAgentId: parameters.destAgentId,
              mediaType: parameters.mediaType
            },
            url: 'consult'
          });
          addLog('success', 'Consult Initiated', result);
          break;

        case 'holdInteraction':
          result = await Desktop.agentContact.hold({
            interactionId: parameters.interactionId
          });
          addLog('success', 'Interaction Held', result);
          break;

        case 'unholdInteraction':
          result = await Desktop.agentContact.unHold({
            interactionId: parameters.interactionId
          });
          addLog('success', 'Interaction Unheld', result);
          break;

        case 'consultEnd':
          result = await Desktop.agentContact.consultEnd({
            interactionId: parameters.interactionId,
            isConsult: parameters.isConsult
          });
          addLog('success', 'Consult Ended', result);
          break;

        case 'consultConference':
          result = await Desktop.agentContact.consultConference({
            interactionId: parameters.interactionId,
            data: {
              agentId: parameters.agentId,
              destAgentId: parameters.destAgentId,
              mediaType: parameters.mediaType
            }
          });
          addLog('success', 'Conference Created', result);
          break;

        case 'consultTransfer':
          result = await Desktop.agentContact.consultTransfer({
            interactionId: parameters.interactionId,
            data: {
              agentId: parameters.agentId,
              destAgentId: parameters.destAgentId,
              mediaType: parameters.mediaType,
              mediaResourceId: parameters.mediaResourceId
            }
          });
          addLog('success', 'Transfer Completed', result);
          break;

        case 'vteamTransfer':
          result = await Desktop.agentContact.vteamTransfer({
            interactionId: parameters.interactionId,
            data: {
              vteamId: parameters.vteamId,
              vteamType: parameters.vteamType
            }
          });
          addLog('success', 'VTeam Transfer Completed', result);
          break;

        case 'sendDtmf':
          Desktop.agentContact.sendDtmf(parameters.digit);
          addLog('success', 'DTMF Digit Sent', { digit: parameters.digit });
          break;

        case 'consultAccept':
          result = await Desktop.agentContact.consultAccept({
            interactionId: parameters.interactionId
          });
          addLog('success', 'Consult Accepted', result);
          break;

        case 'blindTransfer':
          result = await Desktop.agentContact.blindTransfer({
            interactionId: parameters.interactionId,
            data: {
              destination: parameters.destination
            }
          });
          addLog('success', 'Blind Transfer Completed', result);
          break;

        case 'declineInteraction':
          result = await Desktop.agentContact.decline({
            interactionId: parameters.interactionId,
            data: {
              mediaResourceId: parameters.mediaResourceId
            },
            isConsult: parameters.isConsult === 'true'
          });
          addLog('success', 'Interaction Declined', result);
          break;

        case 'pauseRecording':
          result = await Desktop.agentContact.pauseRecording({
            interactionId: parameters.interactionId
          });
          addLog('success', 'Recording Paused', result);
          break;

        case 'resumeRecording':
          result = await Desktop.agentContact.resumeRecording({
            interactionId: parameters.interactionId,
            data: {
              autoResumed: parameters.autoResumed === 'true'
            }
          });
          addLog('success', 'Recording Resumed', result);
          break;

        case 'startMonitoring':
          result = await Desktop.monitoring.startMonitoring({
            data: {
              id: parameters.id,
              monitorType: parameters.monitorType,
              trackingId: parameters.trackingId,
              taskId: parameters.taskId
            }
          });
          addLog('success', 'Monitoring Started', result);
          break;

        case 'endMonitoring':
          result = await Desktop.monitoring.endMonitoring({
            interactionId: parameters.interactionId
          });
          addLog('success', 'Monitoring Ended', result);
          break;

        case 'holdMonitoring':
          result = await Desktop.monitoring.holdMonitoring({
            interactionId: parameters.interactionId
          });
          addLog('success', 'Monitoring Held', result);
          break;

        case 'unholdMonitoring':
          result = await Desktop.monitoring.unHoldMonitoring({
            interactionId: parameters.interactionId
          });
          addLog('success', 'Monitoring Unheld', result);
          break;

        case 'bargeIn':
          result = await Desktop.monitoring.bargeIn({
            interactionId: parameters.interactionId
          });
          addLog('success', 'Barged In', result);
          break;

        case 'updateCadVariables':
          const contactPayload = {
            attributes: {
              diallerName: parameters.diallerName,
              diallerPhoneNumber: parameters.diallerPhoneNumber
            }
          };
          await Desktop.dialer.updateCadVariables({
            interactionId: parameters.interactionId,
            data: contactPayload,
            keyId: parameters.keyId,
            keyVersion: parameters.keyVersion
          });
          addLog('success', 'CAD Variables Updated', contactPayload);
          break;

        case 'startOutdial':
          result = await Desktop.dialer.startOutdial({
            data: {
              destination: parameters.destination,
              outDialANI: parameters.outDialANI
            }
          });
          addLog('success', 'Outdial Started', result);
          break;

        case 'previewCampaignAccept':
          result = await Desktop.dialer.previewCampaignAccept({
            data: {
              contactId: parameters.contactId
            }
          });
          addLog('success', 'Preview Campaign Accepted', result);
          break;

        case 'previewCampaignSkip':
          result = await Desktop.dialer.previewCampaignSkip({
            data: {
              contactId: parameters.contactId
            }
          });
          addLog('success', 'Preview Campaign Skipped', result);
          break;

        case 'removePreviewContact':
          result = await Desktop.dialer.removePreviewContact({
            data: {
              contactId: parameters.contactId
            }
          });
          addLog('success', 'Preview Contact Removed', result);
          break;

        case 'getToken':
          result = await Desktop.actions.getToken();
          addLog('success', 'Token Retrieved', result);
          break;

        case 'getTaskMap':
          result = await Desktop.actions.getTaskMap();
          const tasks = Array.from(result?.values() || []);
          addLog('success', 'Task Map Retrieved', tasks);
          break;

        case 'getMediaTypeQueue':
          result = await Desktop.actions.getMediaTypeQueue(parameters.mediaType);
          const queueTasks = Array.from(result?.values() || []);
          addLog('success', 'Media Type Queue Retrieved', queueTasks);
          break;

        case 'fireNotification':
          const notifData = {
            data: {
              type: Notifications.ItemMeta.Type[parameters.type as keyof typeof Notifications.ItemMeta.Type],
              mode: Notifications.ItemMeta.Mode.AutoDismiss,
              title: parameters.title,
              data: parameters.message
            }
          };
          result = await Desktop.actions.fireGeneralAutoDismissNotification(notifData as any);
          addLog('success', 'Auto-Dismiss Notification Fired', result);
          break;

        case 'fireSilentNotification':
          const silentNotifData = {
            data: {
              type: Notifications.ItemMeta.Type[parameters.type as keyof typeof Notifications.ItemMeta.Type],
              mode: Notifications.ItemMeta.Mode.Silent,
              title: parameters.title,
              data: parameters.message
            }
          };
          Desktop.actions.fireGeneralSilentNotification(silentNotifData as any);
          addLog('success', 'Silent Notification Fired', null);
          break;

        case 'fireAcknowledgeNotification':
          const ackNotifData = {
            data: {
              type: Notifications.ItemMeta.Type[parameters.type as keyof typeof Notifications.ItemMeta.Type],
              mode: Notifications.ItemMeta.Mode.Acknowledge,
              title: parameters.title,
              data: parameters.message
            }
          };
          result = await Desktop.actions.fireGeneralAcknowledgeNotification(ackNotifData as any);
          addLog('success', 'Acknowledge Notification Fired', result);
          break;

        case 'addCustomTask':
          const customTaskData = {
            taskId: parameters.taskId,
            title: parameters.title,
            mediaType: parameters.mediaType
          };
          Desktop.actions.addCustomTask(customTaskData as any);
          addLog('success', 'Custom Task Added', customTaskData);
          break;

        case 'desktopLogout':
          await Desktop.logout.desktopLogout({
            data: { logoutReason: parameters?.logoutReason ?? 'User requested logout' }
          });
          addLog('success', 'Logout Successful', null);
          break;

        case 'signoutAgent':
          await Desktop.logout.signoutAgent({
            orgId: parameters?.orgId,
            data: {
              agentId: parameters?.agentId,
              logoutReason: parameters?.logoutReason ?? 'SupervisorSignout'
            }
          });
          addLog('success', 'Agent Signed Out Successfully', null);
          break;

        case 'fetchByAssigneeAgentId':
          result = await Desktop.scheduleCallback.fetchByAssigneeAgentId({
            data: {
              page: parameters.page,
              assigneeAgent: parameters.assigneeAgent,
              sortBy: parameters.sortBy,
              sortOrder: parameters.sortOrder
            }
          });
          addLog('success', 'Callbacks Fetched', result);
          break;
        case 'fetchByCallbackPhoneNumber':
          result = await Desktop.scheduleCallback.fetchByCallbackPhoneNumber({
            data: {
              page: parameters.page,
              phoneNumber: parameters.phoneNumber
            }
          });
          addLog('success', 'Callbacks Fetched by Phone Number', result);
          break;
        case 'createScheduleCallback':
          result = await Desktop.scheduleCallback.createScheduleCallback({
            data: {
              callbackNumber: parameters.callbackNumber,
              customerName: parameters.customerName,
              timezone: parameters.timezone,
              scheduleDate: parameters.scheduleDate,
              startTime: parameters.startTime,
              endTime: parameters.endTime,
              ...(parameters.assigneeAgent && { assigneeAgent: parameters.assigneeAgent }),
              queueId: parameters.queueId,
              callbackReason: parameters.callbackReason
            }
          });
          addLog('success', 'Scheduled Callback Created', result);
          break;
        case 'updateCallBackDetails':
          result = await Desktop.scheduleCallback.updateCallBackDetails({
            data: {
              id: parameters.id,
              callbackNumber: parameters.callbackNumber,
              customerName: parameters.customerName,
              timezone: parameters.timezone,
              scheduleDate: parameters.scheduleDate,
              startTime: parameters.startTime,
              endTime: parameters.endTime,
              ...(parameters.assigneeAgent && { assigneeAgent: parameters.assigneeAgent }),
              queueId: parameters.queueId,
              callbackReason: parameters.callbackReason
            }
          });
          addLog('success', 'Scheduled Callback Updated', result);
          break;
        case 'deleteScheduleCallback':
          result = await Desktop.scheduleCallback.deleteScheduleCallback({
            data: {
              id: parameters.id
            }
          });
          addLog('success', 'Scheduled Callback Deleted', result);
          break;
        default:
          addLog('error', `Unknown method: ${selectedMethod.id}`, null);
      }
    } catch (error: any) {
      addLog('error', `Error: ${error.message || 'Unknown error'}`, error);
    } finally {
      setIsExecuting(false);
    }
  };

  const renderParameterInput = (param: any) => {
    if (param.options) {
      return (
        <select
          value={parameters[param.name] || ''}
          onChange={(e) => handleParameterChange(param.name, e.target.value)}
          className="param-select"
        >
          {param.options.map((option: string) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      );
    }

    return (
      <input
        type="text"
        value={parameters[param.name] || ''}
        onChange={(e) => handleParameterChange(param.name, e.target.value)}
        placeholder={param.placeholder || param.description}
        className="param-input"
      />
    );
  };

  const methodsByCategory = apiCategories.reduce((acc, category) => {
    acc[category] = apiMethods.filter(m => m.category === category);
    return acc;
  }, {} as Record<string, ApiMethod[]>);

  return (
    <div className="sdk-explorer">
      <div className="sdk-header">
        <h1>Webex Contact Center Desktop SDK Demo</h1>
      </div>

      <div className="sdk-tabs">
        {apiCategories.map(category => (
          <button
            key={category}
            className={`sdk-tab ${selectedMethod?.category === category ? 'active' : ''}`}
            onClick={() => {
              setConsoleLogs([]);
              const firstMethod = methodsByCategory[category][0];
              if (firstMethod) handleMethodSelect(firstMethod);
            }}
          >
            {category.replace('Desktop.', '')}
          </button>
        ))}
      </div>

      <div className="sdk-content">
        <div className="sdk-sidebar">
          {selectedMethod && methodsByCategory[selectedMethod.category]?.map(method => (
            <div
              key={method.id}
              className={`sidebar-item ${selectedMethod.id === method.id ? 'active' : ''}`}
              onClick={() => handleMethodSelect(method)}
            >
              <div className="sidebar-item-title">{method.name}</div>
              <div className="sidebar-item-desc">{method.description}</div>
            </div>
          ))}
        </div>

        <div className="sdk-main">
          {selectedMethod && (
            <>
              <div className="test-section">
                <h2>Test: {selectedMethod.sdkPath}</h2>
                <p className="method-description">{selectedMethod.description}</p>

                {selectedMethod.parameters.length > 0 && (
                  <div className="parameters-section">
                    <h3>API requires {selectedMethod.parameters.length} parameter(s)</h3>
                    {selectedMethod.parameters.map(param => (
                      <div key={param.name} className="param-row">
                        <label className="param-label">
                          {param.name}
                          {param.required && <span className="required">*</span>}
                        </label>
                        {renderParameterInput(param)}
                      </div>
                    ))}
                  </div>
                )}

                <div className="action-buttons">
                  <button
                    className="btn-execute"
                    onClick={executeMethod}
                    disabled={isExecuting}
                  >
                    {isExecuting ? 'Executing...' : 'Execute API'}
                  </button>
                  <button className="btn-clear" onClick={clearConsole}>
                    Clear
                  </button>
                  <button 
                    className="btn-toggle-code"
                    onClick={() => setShowCodeExample(!showCodeExample)}
                  >
                    {showCodeExample ? '📋 Hide Code' : '💡 Show Code Example'}
                  </button>
                </div>
              </div>

              {showCodeExample && (
                <div className="code-example-section">
                  <div className="code-example-header">
                    <span>Code Example</span>
                    <button
                      className="copy-code-btn"
                      onClick={() => copyToClipboard(selectedMethod.exampleCode)}
                      title="Copy to clipboard"
                    >
                      📋 Copy
                    </button>
                  </div>
                  <pre className="code-example-content">
                    <code>{selectedMethod.exampleCode}</code>
                  </pre>
                </div>
              )}

              <div className="console-section">
                <div className="console-header">
                  <span>Response</span>
                </div>
                <div className="console-output">
                  {consoleLogs.length === 0 ? (
                    <div className="console-empty">No output yet. Execute an API to see results.</div>
                  ) : (
                    consoleLogs.map(log => (
                      <div key={log.id} className={`console-log console-${log.type}`}>
                        <div className="console-log-header">
                          <span className="console-timestamp">
                            {log.timestamp.toLocaleTimeString()}
                          </span>
                          <span className={`console-type ${log.type}`}>
                            {log.type.toUpperCase()}
                          </span>
                        </div>
                        <div className="console-message">{log.message}</div>
                        {log.data && (
                          <pre className="console-data">
                            {JSON.stringify(log.data, null, 2)}
                          </pre>
                        )}
                      </div>
                    ))
                  )}
                  <div ref={consoleEndRef} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
