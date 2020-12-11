/// <reference types="react-scripts" />

declare module '*.css' {
  export default style as string | CSSResult | CSSStyleSheet | CSSResultArray | undefined
}

declare module '*.scss' {
  export default style as string | CSSResult | CSSStyleSheet | CSSResultArray | undefined
}

declare module '*.sass' {
  export default style as string | CSSResult | CSSStyleSheet | CSSResultArray | undefined
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}
