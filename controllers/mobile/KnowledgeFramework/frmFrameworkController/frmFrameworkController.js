define({ 

  onPreshow : function(){
    try{
      var data = [
        {
          "title": "Integration & Orchestration services",
          "desc1": "<b>Integration Service</b><br>A service is an application component that represents the application interaction with the external data source. A service definition comprises the meta-data or the configurations required to exchange data with the external data source. For example, the configurations can be service type, service ID, input parameters, output parameters, preprocessors and postprocessors, target URL, authentication credentials if required, and type (HTTP/HTTPS).<br><br>The service definition enables the application to exchange data with any external data source. The Volt MX Foundry provides back-end for connecting to a Web service and an XML service. Even if the external data source does not expose the services to these well-known interfaces, the developer can build a Java service.<br><br><b>Orchestration Service</b><br>Service orchestration is the coordination or integration of several services and exposing them as a single service. The mix of services supports the automation of business processes.Service orchestration helps you make the most of the user experience. You can create work flows and composite services that include custom logic and data processing on the server side to reduce the workload on the device.<br><br>You can also create a <b>composite orchestration service with a combination of objects services.</b> You can select a combination of objects services from one or more objects, or multiple objects services along with integration or orchestration services.",
          "video1": "https://youtu.be/830t8QWcDO8",
          "image1": "integration.png",
          "desc2": "This app makes use of the Google News and Google weather APIs to demonstrate usage of Integration and Orchestration Services. The simple UI for the front end of the app has been designed using Volt MX Iris and service calls have been made through Volt MX Foundry. Volt MX Foundry in turn makes calls to the Google News API and returns the news items for the appropriate categories sent as parameters in the web service call.<br><br>In the video shown below, we will walk you through creating your first Volt MX Foundry application. At the end of this module, you will understand how to use Volt MX Foundry to connect with backend APIs.",
          "video2": "https://youtu.be/830t8QWcDO8",
          "image2": "integration.png",
          "link": 'Please find below the links containing the video tutorials:<br><a href="https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Orchestration.html" target="_blank"><br>Integration and Orchestration Overview </a><br><br><a href = "https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Iris/iris_tutorials/Content/Module/mf_integration.html" target="_blank"> Integration Services </a><br><br>Please find below the links to the documentation site:<br><br><a href = "https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Services.html" target="_blank">Integration Services </a><br><br><a href =  "https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Orchestration.html" target="_blank">Orchestration Services </a>'
        }
      ];
    this.view.KnowledgeFramework1.setData(data);
    }catch(err){
      alert("error");
    }
    
  }
 });