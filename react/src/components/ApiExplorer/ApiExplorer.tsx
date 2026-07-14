import React, { useState, useMemo } from 'react';
import { ApiMethodCard } from './ApiMethodCard';
import { apiMethods, apiCategories } from './apiDefinitions';
import { Desktop } from '@wxcc-desktop/sdk';
import { Notifications, NotificationItemsContent } from '@uuip/unified-ui-platform-sdk';

interface ApiExplorerProps {
  agentId?: string;
}

export const ApiExplorer: React.FC<ApiExplorerProps> = ({ agentId }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(apiCategories)
  );

  const filteredMethods = useMemo(() => {
    let methods = apiMethods;

    if (selectedCategory !== 'all') {
      methods = methods.filter(m => m.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      methods = methods.filter(m =>
        m.name.toLowerCase().includes(query) ||
        m.description.toLowerCase().includes(query) ||
        m.sdkPath.toLowerCase().includes(query)
      );
    }

    return methods;
  }, [selectedCategory, searchQuery]);

  const methodsByCategory = useMemo(() => {
    const grouped: Record<string, typeof apiMethods> = {};
    filteredMethods.forEach(method => {
      if (!grouped[method.category]) {
        grouped[method.category] = [];
      }
      grouped[method.category].push(method);
    });
    return grouped;
  }, [filteredMethods]);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
    });
  };

  const handleExecuteMethod = async (methodId: string, params: any) => {
    console.log(`[API Explorer] Executing: ${methodId}`, params);

    switch (methodId) {
      case 'getAgentInfo':
        const latestData = Desktop.agentStateInfo.latestData;
        console.log('[API Response] Agent Info:', latestData);
        break;

      case 'changeState':
        const stateResult = await Desktop.agentStateInfo.stateChange({
          state: params.state,
          auxCodeIdArray: params.auxCodeIdArray
        });
        console.log('[API Response] State Change:', stateResult);
        break;

      case 'getClientLocale':
        const locale = Desktop.config.clientLocale;
        console.log('[API Response] Client Locale:', locale);
        break;

      case 'fetchAddressBooks':
        const books = await Desktop.agentStateInfo.fetchAddressBooks();
        console.log('[API Response] Address Books:', books);
        break;

      case 'getIdleCodes':
        const idleCodes = await Desktop.actions.getIdleCodes();
        console.log('[API Response] Idle Codes:', idleCodes);
        break;

      case 'getWrapUpCodes':
        const wrapUpCodes = await Desktop.actions.getWrapUpCodes();
        console.log('[API Response] Wrap-Up Codes:', wrapUpCodes);
        break;

      case 'acceptInteraction':
        const acceptResult = await Desktop.agentContact.accept({
          interactionId: params.interactionId
        });
        console.log('[API Response] Accept Interaction:', acceptResult);
        break;

      case 'endInteraction':
        const endResult = await Desktop.agentContact.end({
          interactionId: params.interactionId
        });
        console.log('[API Response] End Interaction:', endResult);
        break;

      case 'wrapUpInteraction':
        const wrapUpResult = await Desktop.agentContact.wrapup({
          interactionId: params.interactionId,
          data: {
            wrapUpReason: params.wrapUpReason,
            auxCodeId: params.auxCodeId,
            isAutoWrapup: params.isAutoWrapup
          }
        });
        console.log('[API Response] Wrap Up:', wrapUpResult);
        break;

      case 'getBuddyAgents':
        const buddyAgents = await Desktop.agentContact.buddyAgents({
          data: {
            agentProfileId: params.agentProfileId,
            channelName: params.channelName,
            state: params.state
          }
        });
        console.log('[API Response] Buddy Agents:', buddyAgents);
        break;

      case 'getVTeamList':
        const vteamList = await Desktop.agentContact.vteamList({
          data: {
            agentProfileId: params.agentProfileId,
            agentSessionId: params.agentSessionId,
            channelType: params.channelType,
            type: params.type
          }
        });
        console.log('[API Response] VTeam List:', vteamList);
        break;

      case 'consultAgent':
        const consultResult = await Desktop.agentContact.consult({
          interactionId: params.interactionId,
          data: {
            agentId: params.agentId,
            destAgentId: params.destAgentId,
            mediaType: params.mediaType
          },
          url: 'consult'
        });
        console.log('[API Response] Consult:', consultResult);
        break;

      case 'consultTransfer':
        const transferResult = await Desktop.agentContact.consultTransfer({
          interactionId: params.interactionId,
          data: {
            agentId: params.agentId,
            destAgentId: params.destAgentId,
            mediaType: params.mediaType,
            mediaResourceId: params.mediaResourceId
          }
        });
        console.log('[API Response] Consult Transfer:', transferResult);
        break;

      case 'vteamTransfer':
        const vteamTransferResult = await Desktop.agentContact.vteamTransfer({
          interactionId: params.interactionId,
          data: {
            vteamId: params.vteamId,
            vteamType: params.vteamType
          }
        });
        console.log('[API Response] VTeam Transfer:', vteamTransferResult);
        break;

      case 'dropConferenceParticipant':
        const dropConferenceParticipantResult = await Desktop.agentContact.dropConferenceParticipant({
          interactionId: params.interactionId,
          data: {
            participantId: params.participantId
          }
        });
        console.log('[API Response] Drop Conference Participant:', dropConferenceParticipantResult);
        break;

      case 'startMonitoring':
        const monitorResult = await Desktop.monitoring.startMonitoring({
          data: {
            id: params.id,
            monitorType: params.monitorType,
            trackingId: params.trackingId,
            taskId: params.taskId
          }
        });
        console.log('[API Response] Start Monitoring:', monitorResult);
        break;

      case 'endMonitoring':
        const endMonitorResult = await Desktop.monitoring.endMonitoring({
          interactionId: params.interactionId
        });
        console.log('[API Response] End Monitoring:', endMonitorResult);
        break;

      case 'bargeIn':
        const bargeResult = await Desktop.monitoring.bargeIn({
          interactionId: params.interactionId
        });
        console.log('[API Response] Barge In:', bargeResult);
        break;

      case 'getToken':
        const token = await Desktop.actions.getToken();
        console.log('[API Response] Token:', token);
        break;

      case 'getTaskMap':
        const taskMap = await Desktop.actions.getTaskMap();
        const tasks = Array.from(taskMap?.values() || []);
        console.log('[API Response] Task Map:', tasks);
        break;

      case 'fireNotification':
        const notifData = {
          data: {
            type: Notifications.ItemMeta.Type[params.type as keyof typeof Notifications.ItemMeta.Type],
            mode: Notifications.ItemMeta.Mode.AutoDismiss,
            title: params.title,
            data: params.message
          }
        };
        const notifResult = await Desktop.actions.fireGeneralAutoDismissNotification(
          notifData as any
        );
        console.log('[API Response] Notification:', notifResult);
        break;

      case 'desktopLogout':
        await Desktop.logout.desktopLogout({
          data: { logoutReason: params?.logoutReason ?? 'User requested logout' }
        });
        console.log('[API Response] Logout successful');
        break;

      default:
        console.warn(`[API Explorer] Unknown method: ${methodId}`);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '8px', color: '#333' }}>
          @wxcc-desktop/sdk API Explorer
        </h1>
        <p style={{ color: '#666', fontSize: '14px' }}>
          Interactive documentation and testing tool for Webex Contact Center Desktop SDK
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div style={{
        display: 'flex',
        gap: '12px',
        marginBottom: '24px',
        flexWrap: 'wrap'
      }}>
        <div style={{ flex: '1', minWidth: '250px' }}>
          <md-input
            placeholder="Search APIs by name, description, or SDK path..."
            value={searchQuery}
            onInput={(e: any) => setSearchQuery(e.target.value)}
            shape="pill"
            clear=""
            style={{ width: '100%' }}
          >
            <md-icon name="icon-search_16" slot="prefix" />
          </md-input>
        </div>
        <div style={{ minWidth: '200px' }}>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            aria-label="Filter by API category"
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '20px',
              border: '1px solid #ccc',
              fontSize: '14px',
              backgroundColor: '#fff'
            }}
          >
            <option value="all">All Categories</option>
            {apiCategories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Stats */}
      <div style={{
        display: 'flex',
        gap: '16px',
        marginBottom: '24px',
        padding: '16px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px'
      }}>
        <div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#0078D4' }}>
            {filteredMethods.length}
          </div>
          <div style={{ fontSize: '12px', color: '#666' }}>
            API Methods
          </div>
        </div>
        <div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#107C10' }}>
            {Object.keys(methodsByCategory).length}
          </div>
          <div style={{ fontSize: '12px', color: '#666' }}>
            Categories
          </div>
        </div>
        {agentId && (
          <div style={{ marginLeft: 'auto' }}>
            <div style={{ fontSize: '12px', color: '#666' }}>Agent ID</div>
            <div style={{ fontSize: '14px', fontWeight: 500, fontFamily: 'monospace' }}>
              {agentId}
            </div>
          </div>
        )}
      </div>

      {/* API Methods by Category */}
      {Object.entries(methodsByCategory).map(([category, methods]) => (
        <div key={category} style={{ marginBottom: '24px' }}>
          <div
            onClick={() => toggleCategory(category)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 16px',
              backgroundColor: '#f0f0f0',
              borderRadius: '8px',
              cursor: 'pointer',
              marginBottom: '12px'
            }}
          >
            <md-icon
              name={expandedCategories.has(category) ? 'icon-arrow-down_16' : 'icon-arrow-right_16'}
            />
            <h2 style={{ fontSize: '18px', margin: 0, color: '#333' }}>
              {category}
            </h2>
            <md-badge color="#666" style={{ marginLeft: '8px' }}>
              {methods.length}
            </md-badge>
          </div>

          {expandedCategories.has(category) && (
            <div>
              {methods.map(method => (
                <ApiMethodCard
                  key={method.id}
                  method={method}
                  onExecute={handleExecuteMethod}
                />
              ))}
            </div>
          )}
        </div>
      ))}

      {filteredMethods.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '48px',
          color: '#666'
        }}>
          <md-icon name="icon-search_24" size="48" style={{ marginBottom: '16px' }} />
          <div style={{ fontSize: '16px' }}>No APIs found matching your search</div>
        </div>
      )}
    </div>
  );
};
