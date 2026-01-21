import React, { useState } from 'react';
import { ApiMethod, ApiParameter, ApiResponse } from './types';

interface ApiMethodCardProps {
  method: ApiMethod;
  onExecute: (methodId: string, params: any) => Promise<void>;
}

export const ApiMethodCard: React.FC<ApiMethodCardProps> = ({ method, onExecute }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [parameters, setParameters] = useState<Record<string, any>>(() => {
    const initial: Record<string, any> = {};
    method.parameters.forEach(param => {
      initial[param.name] = param.defaultValue ?? '';
    });
    return initial;
  });
  const [response, setResponse] = useState<ApiResponse>({ status: 'idle' });
  const [showCode, setShowCode] = useState(false);

  const handleParameterChange = (paramName: string, value: any) => {
    setParameters(prev => ({ ...prev, [paramName]: value }));
  };

  const handleExecute = async () => {
    setResponse({ status: 'loading' });
    const startTime = Date.now();
    
    try {
      await onExecute(method.id, parameters);
      const duration = Date.now() - startTime;
      setResponse({
        status: 'success',
        data: 'Check console for detailed response',
        timestamp: Date.now(),
        duration
      });
    } catch (error: any) {
      const duration = Date.now() - startTime;
      setResponse({
        status: 'error',
        error: error.message || 'An error occurred',
        timestamp: Date.now(),
        duration
      });
    }
  };

  const renderParameter = (param: ApiParameter) => {
    if (param.options) {
      return (
        <select
          key={param.name}
          value={parameters[param.name]}
          onChange={(e) => handleParameterChange(param.name, e.target.value)}
          aria-label={param.description}
          style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          {param.options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      );
    }

    if (param.type === 'boolean') {
      return (
        <md-checkbox
          key={param.name}
          checked={parameters[param.name]}
          onchange={(e: any) => handleParameterChange(param.name, e.target.checked)}
        >
          {param.description}
        </md-checkbox>
      );
    }

    return (
      <md-input
        key={param.name}
        placeholder={param.placeholder || param.description}
        value={parameters[param.name]}
        onInput={(e: any) => handleParameterChange(param.name, e.target.value)}
        shape="pill"
        clear=""
      />
    );
  };

  const getStatusColor = () => {
    switch (response.status) {
      case 'loading': return '#0078D4';
      case 'success': return '#107C10';
      case 'error': return '#D13438';
      default: return '#666';
    }
  };

  const getStatusIcon = () => {
    switch (response.status) {
      case 'loading': return 'icon-spinner_16';
      case 'success': return 'icon-check-circle_16';
      case 'error': return 'icon-error_16';
      default: return 'icon-info_16';
    }
  };

  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      marginBottom: '16px',
      backgroundColor: '#fff',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          padding: '16px',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: isExpanded ? '1px solid #e0e0e0' : 'none'
        }}
      >
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <md-icon name={isExpanded ? 'icon-arrow-down_16' : 'icon-arrow-right_16'} />
            <strong style={{ fontSize: '16px' }}>{method.name}</strong>
            {response.status !== 'idle' && (
              <md-badge
                color={getStatusColor()}
                style={{ marginLeft: '8px' }}
              >
                <md-icon name={getStatusIcon()} size="12" />
              </md-badge>
            )}
          </div>
          <div style={{ color: '#666', fontSize: '14px', marginTop: '4px', marginLeft: '24px' }}>
            {method.description}
          </div>
          <div style={{ color: '#999', fontSize: '12px', marginTop: '4px', marginLeft: '24px', fontFamily: 'monospace' }}>
            {method.sdkPath}
          </div>
        </div>
      </div>

      {isExpanded && (
        <div style={{ padding: '16px' }}>
          {/* Parameters Section */}
          {method.parameters.length > 0 && (
            <div style={{ marginBottom: '16px' }}>
              <h4 style={{ marginBottom: '12px', color: '#333' }}>Parameters</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {method.parameters.map(param => (
                  <div key={param.name} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label style={{ fontSize: '14px', fontWeight: 500, color: '#333' }}>
                      {param.name}
                      {param.required && <span style={{ color: '#D13438' }}> *</span>}
                    </label>
                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>
                      {param.description}
                    </div>
                    {renderParameter(param)}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
            <md-button
              variant="primary"
              onClick={handleExecute}
              disabled={response.status === 'loading'}
            >
              {response.status === 'loading' ? 'Executing...' : 'Execute'}
            </md-button>
            <md-button
              variant="secondary"
              onClick={() => setShowCode(!showCode)}
            >
              {showCode ? 'Hide Code' : 'Show Code'}
            </md-button>
          </div>

          {/* Code Example */}
          {showCode && (
            <div style={{ marginBottom: '16px' }}>
              <h4 style={{ marginBottom: '8px', color: '#333' }}>Code Example</h4>
              <pre style={{
                backgroundColor: '#f5f5f5',
                padding: '12px',
                borderRadius: '4px',
                overflow: 'auto',
                fontSize: '12px',
                fontFamily: 'monospace',
                border: '1px solid #e0e0e0'
              }}>
                {method.exampleCode}
              </pre>
            </div>
          )}

          {/* Request Payload */}
          {method.parameters.length > 0 && (
            <div style={{ marginBottom: '16px' }}>
              <h4 style={{ marginBottom: '8px', color: '#333' }}>Request Payload</h4>
              <pre style={{
                backgroundColor: '#f5f5f5',
                padding: '12px',
                borderRadius: '4px',
                overflow: 'auto',
                fontSize: '12px',
                fontFamily: 'monospace',
                border: '1px solid #e0e0e0'
              }}>
                {JSON.stringify(parameters, null, 2)}
              </pre>
            </div>
          )}

          {/* Response Section */}
          {response.status !== 'idle' && (
            <div>
              <h4 style={{ marginBottom: '8px', color: '#333' }}>Response</h4>
              <div style={{
                backgroundColor: response.status === 'error' ? '#FFF4F4' : '#F0F9FF',
                padding: '12px',
                borderRadius: '4px',
                border: `1px solid ${response.status === 'error' ? '#FFD6D6' : '#D0E7FF'}`
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <md-icon name={getStatusIcon()} color={getStatusColor()} />
                  <strong style={{ color: getStatusColor() }}>
                    {response.status === 'loading' ? 'Executing...' : 
                     response.status === 'success' ? 'Success' : 'Error'}
                  </strong>
                  {response.duration && (
                    <span style={{ fontSize: '12px', color: '#666', marginLeft: 'auto' }}>
                      {response.duration}ms
                    </span>
                  )}
                </div>
                {response.status === 'success' && response.data && (
                  <pre style={{
                    margin: 0,
                    fontSize: '12px',
                    fontFamily: 'monospace',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word'
                  }}>
                    {typeof response.data === 'string' ? response.data : JSON.stringify(response.data, null, 2)}
                  </pre>
                )}
                {response.status === 'error' && response.error && (
                  <div style={{ color: '#D13438', fontSize: '14px' }}>
                    {response.error}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
