define(function() {

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this._frmNameToNavigate = null;
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineSetter(this, "frmNameToNavigate", function (value) {
        try {
          this._frmNameToNavigate  = value; 
        } catch (e) {
          alert("Error Occured"+JSON,stringify(e));
        }

      });
      defineGetter(this, "stateCount", function () {		
        return this._stateCount;
      });
    },
    index:0,
    data:null,
    showFirstScreen : function()
    {
      var controllerScope = this;
      controllerScope.view.flxToolbar.animate(
        voltmx.ui.createAnimation({100:{top:"91%","stepConfig":{}}}),
        {delay:0,fillMode:voltmx.anim.FILL_MODE_FORWARDS,duration:0.5},
        {animationEnd: function() {

        } 
        });
    },
    setSplashScreenData : function(data)
    {
      if(data === undefined && data === null && data.length === 0)
      {
        voltmx.print("There are no data to set, either the data is null or undefined");
      }
      else
      {   
        for(var i=0;i<data.length;i++){
          if(i===0){
            data[i].flexAppName = {
              "isVisible" : true
            };
          }else{
            data[i].flexAppName = {
              "isVisible" : false
            };
          }

        }
        this.view.segGetStarted.removeAll();
        this.view.segGetStarted.widgetDataMap = {
          "imgGetStart" : "image",
          "lblSplashDesc" : "desc",
          "flexAppName" : "flexAppName",
          "lblAppTitle" : "appTitle"
        };
        //kony.application.
        this.view.segGetStarted.setData(data);
      }
    },
    onGetStarted : function()
    {
      //alert(this._frmNameToNavigate);
       //kony.model.ApplicationContext.showLoadingScreen("Loading...");
      this.view.flxToolbar.top = "100%";
      var navObject = new voltmx.mvc.Navigation(this._frmNameToNavigate);
      navObject.navigate();
    }

  };
});