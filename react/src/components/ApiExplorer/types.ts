export interface ApiMethod {
  id: string;
  name: string;
  description: string;
  category: string;
  parameters: ApiParameter[];
  exampleCode: string;
  sdkPath: string;
}

export interface ApiParameter {
  name: string;
  type: 'string' | 'number' | 'boolean' | 'object' | 'array';
  required: boolean;
  description: string;
  defaultValue?: any;
  placeholder?: string;
  options?: string[];
}

export interface ApiResponse {
  status: 'idle' | 'loading' | 'success' | 'error';
  data?: any;
  error?: string;
  timestamp?: number;
  duration?: number;
}

export interface ApiExecution {
  methodId: string;
  request: any;
  response: ApiResponse;
}
