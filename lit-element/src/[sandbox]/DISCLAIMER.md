## Sandbox use disclaimer
This sandbox is considered helpful for various purposes of your WXCC widget development. It does, however, have it's limitations. Below you will find a list of functions you are able or not able to test within this sandbox. 

### You are bale to test within this sandbox:
<details>
    <summary>Widget appearance.</summary>
    By running this sandbox locally, you are able to see the interface the way it would appear in WXCC Agent/Supervisor Desktop. You do not need to worry regarding any style (CSS) conflicts due to your widget being contained within a Shadow DOM. You are able to launch this sandbox in any browser to test cross-browser support.
</details>
<details>
    <summary>Widget responsiveness.</summary>
    Feel free to use the header panel tools to test how your widget can adjust to various space allocation. As a developer, you likely will not have control over where and how this widget will be placed on Agent/Supervisor Desktop, as well as you are not aware of the screen size of the device the Agent/Supervisor persona will be accessing your widget. This means, it has to be responsive. You won't be able to rely on <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries">CSS media queries</a> for this situation - since they rely on change of the window object and not an individual container. We recommend you to look into the <a href="https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver">Resize Observer API</a> instead. 
</details>
<details>
    <summary>Dark mode.</summary>
    If you rely on pre-defined Momentum UI CSS custom values for your color schema, and/or Momentum UI Web Components - you can easily achieve Light/Dark theme support with your Widget. You can refer to this <a href="https://github.com/momentum-design/momentum-ui/blob/master/web-components/src/wc_scss/themes/global--light.scss">file</a> for reference. 
</details>

### You won't be able to test within this sandbox:
<details>
    <summary>JS API functionality.</summary>
    WXCC JS API usage examples are some of the most prominent parts of this widget starter.  However, you won't be able to test functionality of the JavaScript functions that are utilizing JS API methods in this sandbox. You would have to build and export this widget, upload the widget .js file to a hosting solution (e.g. AWS) and add it to your WXCC instance through JSON Layout configuration file. Only within WXCC environment, can JS API truly access data and subscribe to events. 
    To read more on the steps to export widget, please refer to the README.ms file for this starter.
</details>