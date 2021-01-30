# WCC Widget Starter: Lit Element 
[![Generic badge](https://img.shields.io/badge/Completion-95-green)](https://shields.io/)

This widget starter can be run on `localhost` to be reviewed. In case you (the developer) are using this widget starter as a foundation of your custom widget, running the sandbox environment on `localhost` would be a perfect way to build your widget's logic and interface. It will also allow you to experiment with theme switching (light/dark) as well as test various container sizes that your widget might fit. 

**Note**: please keep in mind that we recommend to design every widget as responsive. With the exception of widgets for Agent or Supervisor Desktop **header** zone (where widgets should not exceed 64px height), you can assume that your custom widget might end up getting placed on various canvas sizes. Based on the Agent's screen size and configuration by the Administrator, it could even end up with a different aspect ratio. Please keep that in mind while testing your responsive widget's behavior. 
## Development

### Getting started
To run your widget on `localhost`, please navigate to widget's root directory in Terminal (Command line tool) and run the following commands (Assuming you have [`yarn`](https://classic.yarnpkg.com/en/docs/install/#mac-stable) installed globally on your machine):

1. Clone this repo.
2. Navigate to th widget/widget starter folder.
3. Run `yarn` from the root of the repo.
4. Run `yarn start` to start the playground (sandbox) app.

### Editing widget
There is generally no need for you to modify anything outside of the `src/components` folder. To customize you widget, we suggest for you to work within this directory. You are free to create your components and structure them however you see fit. 

### Building/exporting widget

Once you are ready to export your widget, all you need is to run the following command in Terminal (Command line tool):

```
yarn dist
```

This will create a `dist` folder in the root directory of your widget with a single `index.js` file that contains your entire widget. This file can be renamed and uploaded to a preferred location on a CDN (e.g. an S3 bucket on AWS. Please keep in mind tht this file has to be publicly available over the internet to be accessible to Agent or Supervisor Desktop).

### Sharing widget information with Agent/Supervisor Desktop administrator

To be able to place your custom widget within Agent/Supervisor Desktop, Contact Center administrator will need three pieces of information:

1. The URL to the `***.js` file that you had previously generated and placed on a CDN.
2. Information regarding any properties/attributes that are required to be set for the widget to function (e.g. for Maps widget in th Examples folder, one will require to pass Google Maps API key to an `api-key` attribute). 
    
    If you require dynamic data from Agent/Supervisor Desktop, you might want to either request it though [`wxcc-js-api`](https://apim-dev-portal.appstaging.ciscoccservice.com/documentation/guides/desktop#javascript-api) methods within your widget, or through properties - when the list of [Data Providers](https://apim-dev-portal.appstaging.ciscoccservice.com/documentation/guides/desktop#data-provider%E2%80%94widget-properties-and-attributes) contains the required information.
3. A quick preview/screenshot or the aspect ratio that is optimal for this widget. This way, an administrator will be able to make the best decision while placing it on the Desktop layout. 
