# WXCC Desktop SDK Explorer

An interactive API documentation and testing tool for the `@wxcc-desktop/sdk`. This widget provides a comprehensive interface for engineers to explore, test, and understand all SDK APIs in real-time.

[![Generic badge](https://img.shields.io/badge/Status-Production-green)](https://shields.io/)

## Overview

The SDK Explorer lets you test `@wxcc-desktop/sdk` APIs directly from the desktop UI.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Yarn package manager
- Access to WXCC Desktop environment (for deployment)

### Installation

1. Clone this repository
2. Navigate to the widget directory
3. Install dependencies:

```bash
yarn install
```

### Development

Run the SDK Explorer in development mode with hot reload:

```bash
yarn start
```

The explorer will be available at `http://localhost:3001`

### Production Build

Build the SDK Explorer for production:

```bash
yarn build
```

Output: `build/wxcc-sdk-explorer.js`

This creates a single JavaScript file containing your entire widget, ready to be uploaded to a CDN.

## Usage

### Embedding in WXCC Desktop

#### HTML
```html
<wxcc-sdk-explorer 
  agent-id="$STORE.agent.agentId"
  dark-theme="false"
></wxcc-sdk-explorer>
```

#### JSON Layout Configuration
```json
{
  "comp": "wxcc-sdk-explorer",
  "attributes": {
    "agent-id": "$STORE.agent.agentId",
    "dark-theme": "false"
  }
}
```

### Widget Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `agent-id` | string | No | Agent ID for context-specific operations |
| `dark-theme` | boolean | No | Reserved for theme support (currently unused) |

## API Categories

### 1. Desktop.agentStateInfo (10 methods)
- Get agent information
- Change agent state (Available/Idle)
- Fetch address books
- Get idle codes
- Get wrap-up codes
- Mock outdial ANI list
- Supervisor idle code lookups
- Agent state change (supervisor)

### 2. Desktop.agentContact (18 methods)
- Accept/end/wrap-up interactions
- Hold/unhold interactions
- Get buddy agents
- Get VTeam lists
- Consult operations
- Transfer operations (consult/blind)
- Conference operations
- Consult accept/end
- DTMF, decline, recording pause/resume

### 3. Desktop.dialer (5 methods)
- Update CAD variables
- Start outdial
- Preview campaign accept/skip/remove

### 4. Desktop.monitoring (5 methods)
- Start/end monitoring
- Hold/unhold monitoring
- Barge-in

### 5. Desktop.actions (7 methods)
- Get auth token
- Get task map
- Get media type queue
- Fire notifications (auto/silent/acknowledge)
- Add custom task

### 6. Desktop.logout (2 methods)
- Desktop logout
- Supervisor signout agent

## Example Workflows

### Testing Agent State Change

1. Navigate to **Desktop.agentStateInfo** category
2. Find **"Change Agent State"** method
3. Select desired state from dropdown (Available/Idle)
4. Click **"Execute"**
5. View response in the console and UI

### Accepting an Interaction

1. Go to **Desktop.agentContact** category
2. Select **"Accept Interaction"**
3. Enter interaction ID
4. Click **"Execute"**
5. Monitor the response and any errors

### Using Code Examples

1. Select any API method
2. Click **"Show Code Example"**
3. Review the TypeScript code
4. Click **"📋 Copy"** to copy to clipboard
5. Paste into your own widget code

## File Structure

```
react/
├── src/
│   ├── components/
│   │   ├── ApiExplorer/
│   │   │   ├── types.ts                    # TypeScript interfaces
│   │   │   ├── apiDefinitions.ts           # 47 SDK method definitions
│   │   │   ├── SidebarApiExplorer.tsx      # Main explorer component
│   │   │   └── SidebarApiExplorer.css      # Widget styles
│   │   ├── App.tsx                         # App wrapper with SDK init
│   │   ├── sdk.ts                          # SDK initialization
│   │   └── useShadowStyles.ts              # Shadow DOM styles
│   ├── index.tsx                           # Entry point
│   └── types/                              # Type definitions
├── public/
│   ├── index.html                          # HTML template
│   └── agentx-mock.js                      # Mock for standalone dev
├── webpack.config.js                       # Webpack configuration
├── package.json                            # Dependencies & scripts
└── README.md                               # This file
```

## Development Tips

### Testing Without WXCC Desktop

The widget includes a mock `AGENTX_SERVICE` for standalone development. This allows you to:
- Test the UI and interactions
- Develop without a full WXCC Desktop environment
- See how the widget responds to API calls

### Customizing the Widget

To add new SDK methods:

1. Add method definition to `src/components/ApiExplorer/apiDefinitions.ts`
2. Add execution handler in `src/components/ApiExplorer/SidebarApiExplorer.tsx`
3. Test in development mode
4. Rebuild for production

### Styling

The widget uses a responsive CSS design that adapts to:
- Desktop screens (1200px+)
- Laptops (1024px+)
- Tablets (768px+)
- Mobile devices (480px+)

Modify `src/components/ApiExplorer/SidebarApiExplorer.css` to customize the appearance.

## Deployment

### Uploading to CDN

1. Build the widget: `yarn build`
2. Upload `build/wxcc-sdk-explorer.js` to your CDN (e.g., AWS S3)
3. Ensure the file is publicly accessible
4. Note the public URL

### Configuring in WXCC Desktop

Provide your administrator with:

1. **Widget URL**: The public CDN URL to `wxcc-sdk-explorer.js`
2. **Component Name**: `wxcc-sdk-explorer`
3. **Properties**: Optional `agent-id` and `dark-theme` attributes
4. **Recommended Placement**: Panel area (not header)





### Build Warnings

The webpack build may show size warnings for:
- `wxcc-sdk-explorer.js` (2.07 MiB)
- Momentum UI assets

These are expected and don't affect functionality. The SDK and Momentum UI libraries are externalized in production (`@momentum-ui/web-components`, `@momentum-ui/core`, `@momentum-ui/icons`, `@momentum-ui/utils`).

### Widget Not Loading

1. Check browser console for errors
2. Verify the widget URL is accessible
3. Ensure `@momentum-ui/web-components` is loaded by WXCC Desktop
4. Check that the web component is properly registered

## Contributing

When customizing this widget:

1. Follow the existing code structure
2. Add TypeScript types for new features
3. Update API definitions with proper documentation
4. Test in both development and production modes
5. Ensure responsive design is maintained

## Technical Details

### Technology Stack

- **React 16.10.1** - UI framework
- **TypeScript 4.9.3** - Type safety
- **Webpack 5** - Module bundling
- **@wxcc-desktop/sdk** - Local SDK package (file path in `react/package.json`)
- **@momentum-ui/web-components 2.7.44** - Cisco UI components
- **react-to-webcomponent** - Web component conversion

### Architecture

The widget uses:
- **Shadow DOM** for style encapsulation
- **Web Components** for WXCC Desktop integration
- **Event-driven** SDK interaction
- **Responsive flexbox** layout
- **CSS-in-JS** for shadow DOM styling

## License

This widget starter is provided as-is for use with Webex Contact Center. Please refer to your Cisco licensing agreement for terms of use.

## Support

For questions or issues:
- Contact your Cisco partner
- Refer to [WXCC Developer Documentation](https://developer.webex-cx.com/)
- Check [Desktop Developer Guide](https://www.cisco.com/c/en/us/td/docs/voice_ip_comm/cust_contact/contact_center/webexcc/developer_20/webexcc_b_20-desktop-developer-guide-.html)

---

**Version**: 1.0.0  
**Last Updated**: January 2026  
**Widget Name**: wxcc-sdk-explorer
