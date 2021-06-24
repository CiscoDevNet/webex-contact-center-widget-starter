Please refer the Provisioning --> Desktop Layout section in Cisco Webex Contact Center Setup and Administration Guide for managing the layout [here](https://www.cisco.com/c/en/us/td/docs/voice_ip_comm/cust_contact/contact_center/CJP/SetupandAdministrationGuide_2/b_mp-release-2/b_cc-release-2_chapter_011.html#topic_BF0EBDF65DCB0A552164D6306657C892)

**Refer this video for additional help** - https://www.youtube.com/watch?v=KZgUvCKh284&feature=youtu.be

* **Logo_Added_ Desktop Layout.json** - This a basic layout to add a logo into the desktop layout <br />
* **Nav_Added_ Desktop Layout.json**  - This layout helps to understand how add a Navigation tab with a widget in the desktop layout
* **Header_Added_Desktop Layout.json** - This layout have RSS widget added in Header Section
* **Demo_Widgets_Added_Desktop Layout.json** - This layout have RSS widget in Header, map widget and covid-by-location widget in the desktop layout (Note: google map API key is required for these widget in attribute section)
* **Salesforce_Desktop.json** - Salesforce agent desktop layout:(Users have to update the attribute property named agentDN with OutDial Ani configured in the WebexCC Management Portal)
* **Zendesk_Desktop.json** - Zendesk agent desktop layout

These layouts are for reference only and some of these might required additional configuration (e.g API key for Google Maps) to function properly. Please note, all hosted images and widgets are for demo purposes only and it is always recommended to obtain an independent hosting solution for these. If any issue is discovered in Example widgets please feel free to raise it at https://github.com/CiscoDevNet/webex-contact-center-widget-starter/issues