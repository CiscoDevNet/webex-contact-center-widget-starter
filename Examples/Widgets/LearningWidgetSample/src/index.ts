import { Desktop } from "@wxcc-desktop/sdk";
import { Service } from "@wxcc-desktop/sdk-types";
import { LitElement, html } from 'lit-element';

const template = document.createElement('template')

template.innerHTML = `
<div>
<fieldset id="userfieldset" class="outline">
    <legend>User</legend>
    <div><b> Agent Name: </b><span id="userId"></span></div>
    <div><b> Team Name: </b><span id="teamName"></div>
    <div><b> Extension: </b><span id="extension"></div>
    <div><b> Current User State: </b><span id="userState"></div>
    <br>
    <div id="goAvailable">
        <button>Change state to Available</button>
    </div>
    <div id="goUnavailable">
        <button>Change state to Unavailable</button>
    </div>
    <br>
    <div id="makeCallButtondiv">
    <b> EntryPoint Id </b>
    <input type="text"  id="entryPointId"></input>
    <b> Destination no. </b>
        <input type="text" id="destination"></input>
        <button id ="makeCallButton">Make Call</button>
    </div>
</fieldset>
<br>

<fieldset id="interactionfieldset" class="outline">
    <legend>Interaction</legend>
    <div><b> Interaction Id: </b><span id="interactionId"></div>
    <div><b> Channel Type: </b><span id="interactionType"></div>
    <div><b> DNIS: </b><span id="dnis"></div>
    <div><b> From Address: </b><span id="fromAddress"></div>
    <div><b> To Address: </b><span id="toAddress"></div>
    <div><b> Call State: </b><span id="callState"></div>
    <br>
    <iframe name="bing" id="bing" width="100%" height="900" src="https://www.bing.com/"></iframe>
</fieldset>
</div>
`

//Creating a custom logger
const logger = Desktop.logger.createLogger("learning-sample");

class LearningSample extends LitElement  {
  interactionId: any;
  interactionType: any;
  mediaChannel: string;
  dnis: string;
  fromAddress: string;
  toAddress: any;
  mediaType: string;

  
state = {
  defaultAuxCode : '0'
  }
    
    constructor() {
        super();
        
        this.attachShadow({
            mode: 'open'
        })
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        
    }

    connectedCallback() {
        this.init();
        this.subscribeAgentContactDataEvents()
        this.subscribeDialerEvents();
        this.getAgentInfo();

        
 
      }
    
      disconnectedCallback() {
        Desktop.config.cleanup();
      }
    
      async init() {
        // Initiating desktop config

        await Desktop.config.init();   
        
        // Adding function to click operation of buttons
        this.shadowRoot.querySelector('#goAvailable').addEventListener('click', () => this.changeState("Available"))
        this.shadowRoot.querySelector('#goUnavailable').addEventListener('click', () => this.changeState("Idle"))
        this.shadowRoot.querySelector('#makeCallButton').addEventListener('click', () => this.makeCall(this.inputEl('entryPointId').value,this.inputEl('destination').value))
       
        // fetching the latest for the Agent and mappibg it to corresponding label
        this.shadowRoot.querySelector('#userId').innerHTML = Desktop.agentStateInfo.latestData.agentName
        this.shadowRoot.querySelector('#userState').innerHTML = Desktop.agentStateInfo.latestData.subStatus
        this.shadowRoot.querySelector('#teamName').innerHTML = Desktop.agentStateInfo.latestData.teamName
        this.shadowRoot.querySelector('#extension').innerHTML = Desktop.agentStateInfo.latestData.dn

        // Searching for default unavailble code in list of unavailable codes.
        let i = 0 
        const auxCount = Desktop.agentStateInfo.latestData.idleCodes.length
        while( i<=auxCount-1)
        {

          logger.info("AuxCode list ", Desktop.agentStateInfo.latestData.idleCodes[i].id)
          
         if(Desktop.agentStateInfo.latestData.idleCodes[i].isDefault==true) 
         {           
           this.state.defaultAuxCode = Desktop.agentStateInfo.latestData.idleCodes[i].id
           logger.info(" default aux found ", this.state.defaultAuxCode)
           break;
         }       
         i++ 
        }
      }

      // function to change the state on button click
      async changeState(s: "Available" | "Idle") {
        logger.info('moving to state ',s)
        logger.info('latestData',Desktop.agentStateInfo.latestData)
        if(s=="Available")
            {
         
                const agentState = await Desktop.agentStateInfo.stateChange({
                    state: s,
                    auxCodeIdArray: "0",
                  });

                  logger.info("State Changed", agentState);
                  
                  
            }
            if(s=="Idle")
            {
            logger.info(s)
               const agentState = await Desktop.agentStateInfo.stateChange({
                    state: s,
                    auxCodeIdArray : this.state.defaultAuxCode
                  });
                  logger.info("State Changed to Idle", this.state.defaultAuxCode)
                //  logger.info(Desktop.agentStateInfo.latestData.idleCodes[3].id)
                 
            }   
            this.shadowRoot.querySelector('#userState').innerHTML = Desktop.agentStateInfo.latestData.subStatus
           
      }

        // sample function to print latest data of agent
         getAgentInfo() {
            const latestData = Desktop.agentStateInfo.latestData;
            logger.info("learning-sample latestdata: " , latestData );
          }


          // Subscribing to Agent contact event
          subscribeAgentContactDataEvents() {

            Desktop.agentContact.addEventListener("eAgentContact", (msg: Service.Aqm.Contact.AgentContact) =>
              logger.info("AgentContact eAgentContact: ", msg)
            );
            Desktop.agentContact.addEventListener(
              "eAgentContactAssigned",
              (msg: Service.Aqm.Contact.AgentContact) => {
                logger.info("AgentContact eAgentContactAssigned: ", msg);
               
              }
            );
            Desktop.agentContact.addEventListener(
              "eAgentContactEnded",
              (msg: Service.Aqm.Contact.AgentContact) => {
                logger.info("AgentContact eAgentContactEnded: ", msg);

                this.shadowRoot.querySelector('#interactionId').innerHTML = ""
                this.shadowRoot.querySelector('#interactionType').innerHTML = ""
                this.shadowRoot.querySelector('#dnis').innerHTML = ""
                this.shadowRoot.querySelector('#fromAddress').innerHTML = ""
                this.shadowRoot.querySelector('#toAddress').innerHTML = ""
                this.shadowRoot.querySelector('#callState').innerHTML = ""
         
              }
            );
            Desktop.agentContact.addEventListener(
              "eAgentContactWrappedUp",
              (msg: Service.Aqm.Contact.AgentContact) => logger.info("AgentContact eAgentContactWrappedUp: ", msg)
            );
            Desktop.agentContact.addEventListener(
              "eAgentOfferContact",
              (msg: Service.Aqm.Contact.AgentContact) => {
                logger.info("AgentContact eAgentOfferContact: ", msg);
                 this.interactionId = msg.data.interaction.interactionId
                 this.mediaType = msg.data.interaction.mediaType
                 this.dnis =  msg.data.interaction.callProcessingDetails.dnis
                 this.fromAddress = msg.data.interaction.callProcessingDetails.ani
                 this.toAddress = msg.data.interaction.callProcessingDetails.virtualTeamName

                 this.shadowRoot.querySelector('#interactionId').innerHTML = this.interactionId
                 this.shadowRoot.querySelector('#interactionType').innerHTML = this.mediaType
                 this.shadowRoot.querySelector('#dnis').innerHTML = this.dnis
                 this.shadowRoot.querySelector('#fromAddress').innerHTML = this.fromAddress
                 this.shadowRoot.querySelector('#toAddress').innerHTML = this.toAddress
                 this.shadowRoot.querySelector('#callState').innerHTML = "Contact Offered"



              }
            );

            Desktop.agentContact.addEventListener(
              "eAgentOfferContactRona",
              (msg: Service.Aqm.Contact.AgentContact) => {
                logger.info("AgentContact eAgentOfferContactRona: ", msg);
                  
                this.shadowRoot.querySelector('#interactionId').innerHTML = ""
                this.shadowRoot.querySelector('#interactionType').innerHTML = ""
                this.shadowRoot.querySelector('#dnis').innerHTML = ""
                this.shadowRoot.querySelector('#fromAddress').innerHTML = ""
                this.shadowRoot.querySelector('#toAddress').innerHTML = ""
                this.shadowRoot.querySelector('#callState').innerHTML = ""
              
              }
            );
            Desktop.agentContact.addEventListener(
              "eAgentOfferConsult",
              (msg: Service.Aqm.Contact.AgentContact) => logger.info("AgentContact eAgentOfferConsult: ", msg)
            );
            Desktop.agentContact.addEventListener("eAgentWrapup", (msg: Service.Aqm.Contact.AgentContact) =>
              logger.info("AgentContact eAgentWrapup: ", msg)
            );
            Desktop.agentContact.addEventListener("eAgentContactHeld", (msg: Service.Aqm.Contact.AgentContact) =>
              logger.info("AgentContact eAgentContactHeld: ", msg)
            );
            Desktop.agentContact.addEventListener(
              "eAgentContactUnHeld",
              (msg: Service.Aqm.Contact.AgentContact) => logger.info("AgentContact eAgentContactUnHeld: ", msg)
            );
            Desktop.agentContact.addEventListener(
              "eCallRecordingStarted",
              (msg: Service.Aqm.Contact.AgentContact) => logger.info("AgentContact eCallRecordingStarted: ", msg)
            );
            Desktop.agentContact.addEventListener(
              "eAgentConsultCreated",
              (msg: Service.Aqm.Contact.AgentContact) => logger.info("AgentContact eAgentConsultCreated: ", msg)
            );
            Desktop.agentContact.addEventListener(
              "eAgentConsultConferenced",
              (msg: Service.Aqm.Contact.AgentContact) => logger.info("AgentContact eAgentConsultConferenced: ", msg)
            );
            Desktop.agentContact.addEventListener(
              "eAgentConsultEnded",
              (msg: Service.Aqm.Contact.AgentContact) => logger.info("AgentContact eAgentConsultEnded: ", msg)
            );
            Desktop.agentContact.addEventListener(
              "eAgentCtqCancelled",
              (msg: Service.Aqm.Contact.AgentContact) => logger.info("AgentContact eAgentCtqCancelled: ", msg)
            );
            Desktop.agentContact.addEventListener("eAgentConsulting", (msg: any) =>
              logger.info("AgentContact eAgentConsulting: ", msg)
            );
            Desktop.agentContact.addEventListener(
              "eAgentConsultFailed",
              (msg: Service.Aqm.Contact.AgentContact) => logger.info("AgentContact eAgentConsultFailed: ", msg)
            );
            Desktop.agentContact.addEventListener(
              "eAgentConsultEndFailed",
              (msg: Service.Aqm.Contact.AgentContact) => logger.info("AgentContact eAgentConsultEndFailed: ", msg)
            );
            Desktop.agentContact.addEventListener("eAgentCtqFailed", (msg: any) =>
              logger.info("AgentContact eAgentCtqFailed: ", msg)
            );
            Desktop.agentContact.addEventListener(
              "eAgentCtqCancelFailed",
              (msg: Service.Aqm.Contact.AgentContact) => logger.info("AgentContact eAgentCtqCancelFailed: ", msg)
            );
            Desktop.agentContact.addEventListener(
              "eAgentConsultConferenceEndFailed",
              (msg: Service.Aqm.Contact.AgentContact) =>
                logger.info("AgentContact eAgentConsultConferenceEndFailed: ", msg)
            );
          }
               

    subscribeDialerEvents() {
            Desktop.dialer.addEventListener("eOutdialFailed", (msg: Service.Aqm.Contact.AgentContact) => logger.info(msg));
       }

     // function for making outdial call  
     makeCall(entryPointId,destination){
       
      const outdial =  Desktop.dialer.startOutdial({
        data: {
            entryPointId: entryPointId , // analyzer id of outdial EP AXEWS1233.....
            destination:  destination ,  // destination phone no. 
            direction: "OUTBOUND",
            attributes: {},
            mediaType: "telephoney",
            outboundType: "OUTDIAL"
        }
    });

     }

     private inputEl(name: string): HTMLInputElement {
      return this.shadowRoot!.getElementById(name)! as HTMLInputElement;
    }
    
    
      
}
window.customElements.define('learning-sample', LearningSample);