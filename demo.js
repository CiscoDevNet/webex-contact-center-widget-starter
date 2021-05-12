(function () {
  const getCardTemplate = (w) => {
    return `
          <div class="widget-card">
            <div class="widget-card-container">
              <div style="display:grid; grid-template-columns: auto 1fr auto; gap:12px ">
                <b style="flex:1;">${w.label}</b>
                <span>${w.externalProps ? w.externalProps : ""}</span>
                <div>
                  
                  <button style="border-radius: 16px; padding: 5px 16px; border: 0px; background-color: var(--badge-green-bg-color,#78f5b8)" onclick="const ce = new CustomEvent('show-code', {detail: {comp: '${
                    w.label
                  }', cb: this.getBoundingClientRect() }}); document.dispatchEvent(ce);">Example</button>

                </div>
              </div>
            </div>
              ${w.comp}
          </div>
          `;
  };

  const widgets = [
    {
      x: 0,
      y: 0,
      w: 6,
      h: 5,
      content: `<crm-widget phone-number="+1 (800) 471-2389"></crm-widget>`,
      label: "CRM",
      comp: `<crm-widget phone-number="+1 (800) 471-2389"></crm-widget>`,
      script:
        "https://ciscodevnet.github.io/webex-contact-center-widget-starter/widgets/crm.js",
      layoutConfig: {
        comp: "crm-widget",
        attributes: { "phone-number": "+1 (800) 471-2389" },
        script:
          "https://ciscodevnet.github.io/webex-contact-center-widget-starter/widgets/crm.js",
      },
      style: "grid-column: span 3",
    },

    {
      x: 6,
      y: 0,
      w: 3,
      h: 1,
      content: `<timer-widget duration="08:00:00" style="margin-top: 10px"></timer-widget>`,
      label: "Timer",
      comp: `<timer-widget duration="08:00:00" style="margin-top: 10px"></timer-widget>`,
      script:
        "https://ciscodevnet.github.io/webex-contact-center-widget-starter/widgets/timer.js",
      layoutConfig: {
        comp: "timer-widget",
        attributes: {
          duration: "08:00:00",
        },
        script:
          "https://ciscodevnet.github.io/webex-contact-center-widget-starter/widgets/timer.js",
      },
      style: "grid-column: span 1;",
    },
    {
      x: 9,
      y: 0,
      w: 3,
      h: 1,
      content: `<rss-feed-widget rss-feed="https://www.who.int/feeds/entity/csr/don/en/rss.xml"
                update-delay="5000"></rss-feed-widget>`,
      label: "RSS",
      comp: `<rss-feed-widget rss-feed="https://www.who.int/feeds/entity/csr/don/en/rss.xml"
                update-delay="5000"></rss-feed-widget>`,
      script:
        "https://ciscodevnet.github.io/webex-contact-center-widget-starter/widgets/rss-feed-widget.js",
      layoutConfig: {
        comp: "rss-feed-widget",
        attributes: {
          "rss-feed": "https://w1.weather.gov/xml/current_obs/PHNL.rss",
        },
        script:
          "https://ciscodevnet.github.io/webex-contact-center-widget-starter/widgets/rss-feed-widget.js",
      },
      style: "grid-column: span 1;",
    },
    {
      x: 6,
      y: 0,
      w: 6,
      h: 4,
      content: `<map-widget api-key="" search-enabled></map-widget>`,
      label: "Map",
      comp: `<map-widget api-key="" search-enabled></map-widget>`,
      script:
        "https://ciscodevnet.github.io/webex-contact-center-widget-starter/widgets/map-widget.js",
      layoutConfig: {
        comp: "map-widget",
        attributes: {
          "api-key": "google api key here",
          "search-enabled": true,
        },
        script:
          "https://ciscodevnet.github.io/webex-contact-center-widget-starter/widgets/map-widget.js",
      },
      style: "grid-column: span 2;",
      externalProps:
        '<div style="display:grid; grid-template-columns: 1fr auto; gap: 4px"><md-input id="google-api-key-map" placeholder="Please enter Google api key"></md-input> <md-button id="map-widget-btn">Apply</md-button> </div>',
      handler: `document.querySelector('#map-widget-btn').addEventListener('click', () => {
              const gkey = document.querySelector('#google-api-key-map').value;
              document.querySelector('map-widget').setAttribute('api-key', gkey);

            });`,
    },
    {
      x: 0,
      y: 1,
      w: 6,
      h: 4,
      content: `<covid-by-location api-key="1318b408f01c4aa3b5f79dedc6c90848" selectedCountyState="New York County, NY"></covid-by-location>`,
      label: "Covid By Location",
      comp: '<covid-by-location api-key="1318b408f01c4aa3b5f79dedc6c90848" selectedCountyState="New York County, NY"></covid-by-location>',
      script:
        "https://ciscodevnet.github.io/webex-contact-center-widget-starter/widgets/covid-by-location.js",
      style: "grid-column: span 3;",
      layoutConfig: {
        comp: "covid-by-location",
        script:
          "https://ciscodevnet.github.io/webex-contact-center-widget-starter/widgets/covid-by-location.js",
        attributes: {
          "api-key": "1318b408f01c4aa3b5f79dedc6c90848",
          selectedCountyState: "New York County, NY",
        },
        wrapper: {
          title: "Covid by location",
          maximizeAreaName: "app-maximize-area",
        },
      },
    },
    {
      x: 6,
      y: 1,
      w: 6,
      h: 4,
      content: `<my-hospital-widget covi-api-key="1318b408f01c4aa3b5f79dedc6c90848" google-api-key="googleApiKey" latitude="88.363892" longitude="-74.005974">
      </my-hospital-widget>`,
      label: "Hospital Bed Capacity",
      comp: `<hospital-bed-capacity google-api-key="googleApiKey" covid-api-key="1318b408f01c4aa3b5f79dedc6c90848"
              latitude="88.363892" longitude="-74.005974"></<hospital-bed-capacity>`,
      script:
        "https://ciscodevnet.github.io/webex-contact-center-widget-starter/widgets/hospital-bed-capacity.js",
      layoutConfig: {
        comp: "hospital-bed-capacity",
        attributes: {
          "google-api-key": "googleApiKey",
          "covid-api-key": "covidApiKey",
          latitude: "88.363892",
          longitude: "-74.005974",
        },
        script:
          "https://ciscodevnet.github.io/webex-contact-center-widget-starter/widgets/hospital-bed-capacity.js",
      },
      style: "grid-column: span 5;",
      externalProps: `<div style="display:grid; grid-template-columns: repeat(4, 1fr) auto; gap: 4px">
              <md-input id="google-api-key" placeholder="google-api-key"></md-input>
              <md-input id="covid-api-key" value="1318b408f01c4aa3b5f79dedc6c90848"  placeholder="covid-api-key"></md-input>
              <md-input value="88.363892" id="latitude" placeholder="latitude"></md-input>
              <md-input value="-74.005974"  id="longitude"  placeholder="longitude"></md-input>
              <md-button id="hospital-bed-capacity-btn">Apply</md-button>
            </div>`,
      handler: `document.querySelector('#hospital-bed-capacity-btn').addEventListener('click', () => {
              const gkey = document.querySelector('#google-api-key').value;
              const ckey = document.querySelector('#covid-api-key').value;
              const lad = document.querySelector('#latitude').value;
              const lon = document.querySelector('#longitude').value;
              document.querySelector('hospital-bed-capacity').setAttribute('google-api-key', gkey);
              document.querySelector('hospital-bed-capacity').setAttribute('covid-api-key', ckey)
              document.querySelector('hospital-bed-capacity').setAttribute('latitude', lat)
              document.querySelector('hospital-bed-capacity').setAttribute('longitude', lon)

            });`,
    },
    {
      x: 0,
      y: 2,
      w: 12,
      h: 3,
      content: `<learning-sample></learning-sample>`,
      label: "Learning Sample",
      comp: `<learning-sample></learning-sample>`,
      script:
        "https://ciscodevnet.github.io/webex-contact-center-widget-starter/widgets/learning-widget-sample.js",
      layoutConfig: {
        comp: "learning-sample",
        script:
          "https://ciscodevnet.github.io/webex-contact-center-widget-starter/widgets/learning-widget-sample.js",
      },
      style: "grid-column: span 5;",
    },
  ];

  widgets.forEach((w) => {
    w.content = getCardTemplate(w);
  });

  document.querySelector("md-toggle-switch").addEventListener("click", (e) => {
    const themeElm = document.querySelector("md-theme");
    if (e.target.checked) {
      themeElm.setAttribute("darkTheme", true);
    } else {
      themeElm.removeAttribute("darkTheme");
    }
  });

  var simpleGrid = GridStack.init(
    {
      alwaysShowResizeHandle:
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ),
    },
    "#simple-grid"
  );
  simpleGrid.load(widgets);
  let fm;
  setTimeout(() => {
    fm = document.createElement("md-floating-modal");
    fm.removeAttribute("show");
    fm.setAttribute("class", "float-modal");

    document.body.appendChild(fm);
  }, 0);

  document.addEventListener("show-code", (e) => {
    const w = widgets.filter((w) => w.label === e.detail.comp)[0];
    fm.setAttribute("show", true);
    const st = document.createElement("style");

    st.appendChild(
      document.createTextNode(
        `.float-modal::part(floating) { overflow: hidden;height: 400px;width: 700px;left: calc(${
          e.detail.cb.x
        }px - 700px );top: ${
          document.documentElement.scrollTop + e.detail.cb.y
        }px; }`
      )
    );

    document.head.appendChild(st);
    fm.setAttribute("heading", w.label);
    fm.innerHTML = `
        
        <div
          style="
            width: 700px;
            overflow: auto;
            display: flex;
            flex-direction: column;
            background-color: var(--md-primary-bg-color);
            white-space: break-spaces;
            color: var(--md-primary-text-color);
          "><div
            style="
              display: flex;
              flex-direction: column;
              padding: 5px;
              color: var(--md-primary-text-color);
            "
          ><strong>Layout Config Example</strong>
            <pre style="
                color: var(--md-primary-text-color);
                border: 1px dashed var(--md-primary-seperator-color);
                padding: 5px;
                overflow-y: auto;
                overflow-x: hidden;
                white-space: break-spaces;
                user-select: all;
              "
            >${JSON.stringify(w.layoutConfig, null, 2)}</pre>
          </div>
        </div>`;
    //
  });
})();
