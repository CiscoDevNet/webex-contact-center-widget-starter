import { useEffect, useRef } from "react";

export const useShadowStyles = (styles: string[]) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Traverse up to find shadow root
    let node: Node | null = containerRef.current;
    let shadowRoot: ShadowRoot | null = null;

    while (node) {
      if (node instanceof ShadowRoot) {
        shadowRoot = node;
        break;
      }
      node = node.parentNode;
    }
    
    if (shadowRoot) {
      // Use Constructable Stylesheets API (modern browsers)
      if ('adoptedStyleSheets' in Document.prototype && 'CSSStyleSheet' in window) {
        try {
          const sheets = styles.map(css => {
            const sheet = new CSSStyleSheet();
            (sheet as any).replaceSync(css);
            return sheet;
          });
          (shadowRoot as any).adoptedStyleSheets = sheets;
          console.log("[useShadowStyles] Styles applied via Constructable Stylesheets");
        } catch (e) {
          console.error("[useShadowStyles] Error with Constructable Stylesheets:", e);
          // Fallback to style elements
          injectStyleElements(shadowRoot, styles);
        }
      } else {
        // Fallback: inject style elements
        injectStyleElements(shadowRoot, styles);
      }
    } else {
      console.warn("[useShadowStyles] Shadow root not found");
    }
  }, [styles]);

  return containerRef;
};

function injectStyleElements(shadowRoot: ShadowRoot, styles: string[]) {
  styles.forEach(css => {
    const style = document.createElement("style");
    style.textContent = css;
    if (shadowRoot.firstChild) {
      shadowRoot.insertBefore(style, shadowRoot.firstChild);
    } else {
      shadowRoot.appendChild(style);
    }
  });
  console.log("[useShadowStyles] Styles applied via style elements");
}
