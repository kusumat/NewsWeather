/**
 * @controller: Sliding Menu UDW
 * @Author: Tejaswini Tubati
 * @category: Reusable Component
 * @componentVersion: 2.0
 * @description: extension to Sliding Menu 1.0
 */

define(function() {
  var voltmxLoggerModule = require('com/voltmxmp/slidingmenu/VoltmxLogger');
  var voltmxmp = {};
  voltmxmp.logger = new voltmxLoggerModule("Sliding Menu Component");
  return {
    /**
		 * @function constructor
         * @private
		 * @param {Object} baseConfig
		 * @param {Object} layoutConfig
		 * @param {Object} pspConfig
		 */
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      voltmxmp.logger.trace("----------Entering constructor---------", voltmxmp.logger.FUNCTION_ENTRY);
      voltmxmp.logger.trace("----------Exiting constructor ---------", voltmxmp.logger.FUNCTION_EXIT);
    },

    /** Global variables for custom properties */
    _returnData :[],
    _headerAnimationType : 'No Animation',
    _hamburgerDirection : 'Left',
    _hamburgerMenuType : 0,
    _hamburgerPosition : 0,
    _menuItemHeaderSkin : "slFLabel",
    _menuItemSkin : "slFLabel",
    _callbackMode : false,

    onShowMenu : function(){},
    onHideMenu : function(){},

    /**
		 * @function initGetterSetters
		 * @private
		 */
    initGettersSetters: function(){
      voltmxmp.logger.trace("----------Entering initGettersSetters Function---------", voltmxmp.logger.FUNCTION_ENTRY);
      defineSetter(this, "slidingMenuSkin", function (x) {
        voltmxmp.logger.trace("----------Entering slidingMenuSkin Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
        this.view.flxMainSlidingMenu.skin = x;
        voltmxmp.logger.trace("----------Exiting slidingMenuSkin Setter---------", voltmxmp.logger.FUNCTION_EXIT);
      });
      defineSetter(this, "callbackMode", function (x) {
        voltmxmp.logger.trace("----------Entering callbackMode Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
        this._callbackMode = x;
        voltmxmp.logger.trace("----------Exiting callbackMode Setter---------", voltmxmp.logger.FUNCTION_EXIT);
      });
      defineSetter(this, "btnClickSkin", function (x) {
        voltmxmp.logger.trace("----------Entering btnClickSkin Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
        this.view.btnClick.skin = x;
        voltmxmp.logger.trace("----------Exiting btnClickSkin Setter---------", voltmxmp.logger.FUNCTION_EXIT);
      });
      defineSetter(this, "headingSkin", function (x) {
        voltmxmp.logger.trace("----------Entering headingSkin Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
        this.view.lblHeaderText1.skin = x;
        voltmxmp.logger.trace("----------Exiting headingSkin Setter---------", voltmxmp.logger.FUNCTION_EXIT);
      });
      defineSetter(this, "subHeadingSkin", function (x) {
        voltmxmp.logger.trace("----------Entering subHeadingSkin Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
        //this.view.lblHeaderText2.skin = x;
        voltmxmp.logger.trace("----------Exiting subHeadingSkin Setter---------", voltmxmp.logger.FUNCTION_EXIT);
      });
      defineSetter(this, "menuItemTextSkin", function (x) {
        voltmxmp.logger.trace("----------Entering menuItemTextSkin Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
        this._menuItemSkin = x;
        voltmxmp.logger.trace("----------Exiting menuItemTextSkin Setter---------", voltmxmp.logger.FUNCTION_EXIT);
      });
      defineSetter(this, "menuItemHeaderTextSkin", function (x) {
        voltmxmp.logger.trace("----------Entering menuItemHeaderTextSkin Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
        this._menuItemHeaderTextSkin = x;
        voltmxmp.logger.trace("----------Exiting menuItemHeaderTextSkin Setter---------", voltmxmp.logger.FUNCTION_EXIT);
      });
      defineSetter(this, "footerTextSkin", function (x) {
        voltmxmp.logger.trace("----------Entering footerTextSkin Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
        this.view.textFooter.skin = x;
        voltmxmp.logger.trace("----------Exiting footerTextSkin Setter---------", voltmxmp.logger.FUNCTION_EXIT);
      });
      defineSetter(this, "footerStyle", function (x) {
        voltmxmp.logger.trace("----------Entering footerStyle Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
        switch (x.replace(/"/g, "")) {
          case 'No Footer': {
            this.view.flxBotom.setVisibility(false);
            break;
          }
          case 'only Text': {
            this.view.flxBotom.setVisibility(false);
            this.view.imgFooter.setVisibility(false);
            this.view.textFooter.left = "5%";
            this.view.textFooter.setVisibility(true);
            break;
          }
          case 'only Image': {
            this.view.flxBotom.setVisibility(true);						
            this.view.btnShare.setVisibility(true);
            this.view.btnHelp.setVisibility(true);						
            break;
          }
          case 'Image & Text': {
            this.view.flxBotom.setVisibility(true);
            this.view.imgFooter.setVisibility(true);
            this.view.textFooter.setVisibility(true);
            break;
          }
        }
        voltmxmp.logger.trace("----------Exiting footerStyle Setter---------", voltmxmp.logger.FUNCTION_EXIT);
      });
      defineSetter(this, "profileImageType", function (x) {
        voltmxmp.logger.trace("----------Entering profileImageType Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
        switch (x.replace(/"/g, "")) {
          case 'Regular': {
            break;
          }
          case 'Rounded Corner': {
            this.view.flxImage.skin = "SlidingMenuRoundedCornerImage";
            break;
          }
          case 'Circle': {
            this.view.flxImage.skin = "SlidingMenuCircleImage";
          }

        }
        voltmxmp.logger.trace("----------Exiting profileImageType Setter---------", voltmxmp.logger.FUNCTION_EXIT);
      });
      defineSetter(this, "headerAnimation", function (x) {
        voltmxmp.logger.trace("----------Entering headerAnimation Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
        this._headerAnimationType = x.replace(/"/g, "");
        voltmxmp.logger.trace("----------Exiting headerAnimation Setter---------", voltmxmp.logger.FUNCTION_EXIT);
      });
      defineSetter(this, "slidingMenuDirection", function (x) {
        voltmxmp.logger.trace("----------Entering slidingMenuDirection Setter---------", voltmxmp.logger.FUNCTION_ENTRY);
        this.view.flxMainSlidingMenu.isVisible = true;
        this.view.flxMainSlidingMenu.left = "-100%";

        switch (x.replace(/"/g, "")) {
          case 'Right': {
            this._hamburgerDirection = "Right";
            this.view.flxMenuControl.left = "5%";
            //this.view.flxHamParent.left = "88%";
            this.view.flxHeader.left = "5%";
            this.view.right = "0%";
            this.view.left = "";
            this.view.imgHamIcon.src="filter_icon.png";
            break;
          }
          case 'Left': {
            this._hamburgerDirection = "Left";
            this.view.flxHamParent.left = "0%";
            this.view.flxHeader.left = "20%";
            this.view.imgHamIcon.src="menu_icon.png";
            break;
          }
          case 'Top': {
            this._hamburgerDirection = "Top";
            this.view.flxHamParent.left = "0%";
            this.view.flxMenuControl.left = "25%";
            this.view.flxHeader.left = "0%";
            this.view.imgHamIcon.src="menu_icon.png";
            break;
          }
          case 'Bottom': {
            this._hamburgerDirection = "Bottom";
            this.view.flxHamParent.Top = "85%";
            this.view.flxHeader.left = "0%";
            break;
          }
        }
        voltmxmp.logger.trace("----------Exiting slidingMenuDirection Setter---------", voltmxmp.logger.FUNCTION_EXIT);
      });
      voltmxmp.logger.trace("----------Exiting initGetterSetter Function---------", voltmxmp.logger.FUNCTION_EXIT);
    },

    /**
         * @function headerAnimations
         * @description: Animation of Sliding Menu header based on type of animation and direction
         * @private
         */
    headerAnimations: function() {
      voltmxmp.logger.trace("----------Entering headerAnimations Function---------", voltmxmp.logger.FUNCTION_ENTRY);
      switch(this._headerAnimationType) {
        case 'No Animation': {
          break;
        }
        case 'Zoom Out': {
          var transformObject1 = voltmx.ui.makeAffineTransform();
          transformObject1.scale(0.1, 0.1);
          var transformObject4 = voltmx.ui.makeAffineTransform();
          transformObject4.scale(0.3, 0.3);
          var transformObject2 = voltmx.ui.makeAffineTransform();
          transformObject2.scale(1.1, 1.1);
          var transformObject3 = voltmx.ui.makeAffineTransform();
          transformObject3.scale(1, 1);
          var imgAnim = voltmx.ui.createAnimation({
            "0": {
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              },
              "transform": transformObject4
            },
            "80": {
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              },
              "transform": transformObject2
            },
            "100": {
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              },
              "transform": transformObject3
            }
          });
          var lblAnim = voltmx.ui.createAnimation({
            "0": {
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              },
              "transform": transformObject1
            },
            "80": {
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              },
              "transform": transformObject2
            },
            "100": {
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              },
              "transform": transformObject3
            }
          });
          var animConfig1 = {
            "delay": 0.1,
            "iterationCount": 1,
            "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
            "duration": 0.5
          };
          var animConfig = {
            "delay": 0.3,
            "iterationCount": 1,
            "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
            "duration": 0.4
          };
          this.view.flxImage.animate(imgAnim, animConfig1);
          animConfig.delay = 0.3;
          this.view.lblHeaderText1.animate(lblAnim, animConfig);
          //animConfig.delay = 0.4;
          //this.view.lblHeaderText2.animate(lblAnim, animConfig);
          break;
        }
        case 'Slide In': {	
          var imgTop = this.view.flxImage.top;
          var lbl1Top = this.view.lblHeaderText1.top;
          //var lbl2Top = this.view.lblHeaderText2.top;
          var animImgLeft =  voltmx.ui.createAnimation({
            "0":{
              "left": this._hamburgerDirection==='Left'?"-"+this.view.flxImage.width:Number(this.view.flxImage.left.split("%")[0]) + 100 + "%",
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              }
            },
            "100": {
              "left": this.view.flxImage.left,
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              }
            }
          });
          var animLbl1Left =  voltmx.ui.createAnimation({
            "100":{
              "left": this._hamburgerDirection==='Left'?"0%":"100%",
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              }
            },
            /*"100": {
							"left": this.view.lblHeaderText1.left,
							"stepConfig": {
								"timingFunction": voltmx.anim.EASE
							}
						}*/
          });
          var animLbl2Left =  voltmx.ui.createAnimation({
            "0":{
              "left": this._hamburgerDirection==='Left'?"0%":"100%",
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              }
            },
            /*"100": {
							"left": this.view.lblHeaderText2.left,
							"stepConfig": {
								"timingFunction": voltmx.anim.EASE
							}
						}*/
          });
          var animImgTop = voltmx.ui.createAnimation({	
            "0": {
              "top": "-100%",
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              }
            },
            "100": {
              "top": imgTop,
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              }
            },
          });
          var animLbl1Top = voltmx.ui.createAnimation({
            "0": {
              "top": "-50%",
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              }
            },	
            "100": {
              "top": lbl1Top,
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              }
            }
          });
          var animLbl2Top = voltmx.ui.createAnimation({
            "0": {
              "top": "-50%",
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              }
            },		
            "100": {
              "top": lbl2Top,
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              }
            }
          });
          var animationConfig = {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
            "duration": 0.5
          };
          switch(this._hamburgerDirection) {
            case 'Left': {
              this.view.lblHeaderText1.animate(animLbl1Left, animationConfig, {
                "animationEnd": function () {}
              });
              /*this.view.lblHeaderText2.animate(animLbl2Left, animationConfig, {		
								"animationEnd": function () {}
							});*/
              this.view.flxImage.animate(animImgLeft, animationConfig, {		
                "animationEnd": function () {}
              });
              break;
            }
            case 'Right': {
              this.view.flxImage.animate(animImgLeft, animationConfig, {	
                "animationEnd": function () {}
              });
              this.view.lblHeaderText1.animate(animLbl1Left, animationConfig, {
                "animationEnd": function () {}
              });
              /*this.view.lblHeaderText2.animate(animLbl1Left, animationConfig, {	
								"animationEnd": function () {}
							});*/
              break;
            }
            case 'Top': {
              //#ifdef iphone
              animationConfig.delay = 0.5;
              animationConfig.duration = 0.8;
              //#endif
              this.view.flxImage.animate(animImgTop, animationConfig, {
                "animationEnd": function () {}
              });
              this.view.lblHeaderText1.animate(animLbl1Top, animationConfig, {
                "animationEnd": function () {}
              });
              /*	this.view.lblHeaderText2.animate(animLbl2Top, animationConfig, {
								"animationEnd": function () {}
							});*/
              break;
            }
            case 'Bottom': {
              this.view.flxImage.top = Number(this.view.flxImage.top.split("%")[0]) + 100 + "%";
              this.view.lblHeaderText1.top = "100%";
              //this.view.lblHeaderText2.top = "100%";
              this.view.flxImage.animate(animImgTop, animationConfig, {
                "animationEnd": function () {}
              });
              this.view.lblHeaderText1.animate(animLbl1Top, animationConfig, {
              });
              /*this.view.lblHeaderText2.animate(animLbl2Top, animationConfig, {
							});*/
              break;
            }
          }
        }
      }
      voltmxmp.logger.trace("----------Exiting headerAnimations Function---------", voltmxmp.logger.FUNCTION_EXIT);
    },

    /**
         * @function segmentAnimation
         * @description: Menu items animation
         * @private
         */
    segmentAnimation: function() {
      voltmxmp.logger.trace("----------Entering segmentAnimation Function---------", voltmxmp.logger.FUNCTION_ENTRY);
      try {
        var alldata = this.view.flxMenuControl.widgets();
        if(alldata === null || alldata.length === 0){
          return;
        }
        var animationDef = "";
        var logoutLeft = {
          "100": {
            "left": "20%",
            "stepConfig": {
              "timingFunction": voltmx.anim.EASE
            }
          }
        };
        if(this._hamburgerDirection === "Left"){
          this.view.flxBotom.left = "-120%";
          animationDef = {
            "100": {
              "left": "5%",
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              }
            }
          };
        } 
        else if(this._hamburgerDirection === "Right"){
          this.view.flxBotom.left = "100%";
          logoutLeft = {
            "100": {
              "left": "0%",
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              }
            }
          };
          animationDef = {
            "100": {
              "left": "5%",
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              }
            }
          };
          for(var j in alldata){
            alldata[j].left = "100%";
          }
        } 
        else if(this._hamburgerDirection === "Top"){
          this.view.flxBotom.left = "15%";
          this.view.flxBotom.top = "-100%";
          animationDef = {
            "0": {
              "top": "-3%",
              "left": "0%",
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              }
            },
            "100": {
              "top": "5%",
              "left": "0%",
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              }
            }
          };
          logoutLeft = {
            "0": {
              "top": "50%",
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              }
            },
            "100": {
              "top": "88%",
              "stepConfig": {
                "timingFunction": voltmx.anim.EASE
              }
            }
          };
        }
        for(var i in alldata){
          var animationDefObject = voltmx.ui.createAnimation(animationDef);
          var animConfig = {
            "delay": 0.07*i,
            "iterationCount" : 1,
            "fillMode" : voltmx.anim.FILL_MODE_FORWARDS,
            "duration" : 0.5
          };
          //#ifdef iphone
          animConfig.delay= 0.07*i;
          //#endif 
          if(alldata[i].id.indexOf("flxflxOptions")===-1){
            alldata[i].animate(
              animationDefObject, animConfig , {"animationEnd": function(){} }
            );
          }
          else {
            var tmpanimconfig = animationDef;
            tmpanimconfig["100"].left = "10%";
            animationDefObject = voltmx.ui.createAnimation(tmpanimconfig);
            alldata[i].animate(
              animationDefObject, animConfig , {"animationEnd": function(){} }
            );
            // alldata[i].left = "10%";
          }
          if(i == (alldata.length - 1)){
            this.view.flxBotom.animate(
              voltmx.ui.createAnimation(logoutLeft), {
                "delay": 0.2,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": 0.5
              }, {
                "animationEnd": function(){this.view.flxMenuControl.forceLayout();}.bind(this)
              }
            );
          }
        }
      } 
      catch(e){
        voltmxmp.logger.error(JSON.stringify(e), voltmxmp.logger.EXCEPTION);
      }
      voltmxmp.logger.trace("----------Exiting segmentAnimation Function---------", voltmxmp.logger.FUNCTION_EXIT);
    },

    /**
		 * @function removeMenuItemAt
		 * @description: removes menu item at a particular index
         * @private
		 * @param: index
		 */
    removeMenuItemAt: function(index){
      voltmxmp.logger.trace("----------Entering removeMenuItemAt Function---------", voltmxmp.logger.FUNCTION_ENTRY);
      this.view.flxMenuControl.removeAt(index);
      voltmxmp.logger.trace("----------Entering removeMenuItemAt Function---------", voltmxmp.logger.FUNCTION_ENTRY);
    },

    /**
         * @function removeAllMenuItem
         * @description: removes all the menu items from the menu
         * @private
         */
    removeAllMenuItem : function(){
      voltmxmp.logger.trace("----------Entering removeAllMenuItem Function---------", voltmxmp.logger.FUNCTION_ENTRY);
      this.view.flxMenuControl.removeAll();
      voltmxmp.logger.trace("----------Exiting removeAllMenuItem Function---------", voltmxmp.logger.FUNCTION_EXIT);
    },

    /**
		 * @function addMenuItems
         * @description: adds menu items to the sliding menu
		 * @param: Array of JSON[{img:"",text:""}] : menuItem
         * @param {Boolean} callBackMode
         * @access: exposed to user
		 */
    addMenuItems: function(menuItem, callbackMode){
      try {
        voltmxmp.logger.trace("----------Entering addMenuItems Function---------", voltmxmp.logger.FUNCTION_ENTRY);
        if(menuItem === undefined || menuItem === null || menuItem === ""){
          throw {
            message: "empty or undefined parameter"
          };
          return;
        }
        this.view.flxMenuControl.removeAll();
        this._createMenuItems(menuItem);
        this._returnData = [];
      } catch(err) {
        voltmxmp.logger.error(JSON.stringify(err), voltmxmp.logger.EXCEPTION);
      }
      voltmxmp.logger.trace("----------Exiting addMenuItems Function---------", voltmxmp.logger.FUNCTION_EXIT);
    },

    /**
         * @function _createMenuItems
         * @description: creates menu items with sub-options or without sub-options based on data
         * @private
         * @param {JSON Array} data
         */
    _createMenuItems: function(data){
      voltmxmp.logger.trace("----------Entering _createMenuItems Function---------", voltmxmp.logger.FUNCTION_ENTRY);
      this._items = data;
      for(var i = 0; i < data.length; i++){
        if(Array.isArray(data[i])){
          this._addwithsubItem(data[i],"menu" + i);
          /*var wid = this._addWidgets(data[i], "Head" + i);
					this.view.flxMenuControl.add(wid); */
        } 
        else if(typeof data[i] == 'object'){
          var wid1 = this._createOption(data[i], "menu" + i,"option");
          wid1.top = "5%";
          this.view.flxMenuControl.add(wid1);
        } 
        else {
          throw {
            message : "wrong data passed while creatng hamburger.",
            error : "reusable widget error"
          };
        }
      }
      this.formatSelectedData();
      voltmxmp.logger.trace("----------Exiting _createMenuItems Function---------", voltmxmp.logger.FUNCTION_EXIT);
    },

    /**
       * @function _addwithsubItem
       * @description: adds menu items with sub-options
       * @private
       * @param {JSON Array} data
       * @param {String} id
       */
    _addwithsubItem: function(data,id){
      voltmxmp.logger.trace("----------Entering _addwithsubItem Function---------", voltmxmp.logger.FUNCTION_ENTRY);
      var flxHeaderData = new voltmx.ui.FlexContainer({
        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "enableCache": false,
        "top": "0%",
        "left": "5%",
        "id": "flxHeaderData" + id.trim(),
        "isVisible": true,
        "skin": "slFbox",
        "width": "100%",
        "height": voltmx.flex.USE_PREFFERED_SIZE,
        "zIndex": 3,
        "layoutType": voltmx.flex.FLOW_VERTICAL
      }, {}, {});
      flxHeaderData.setDefaultUnit(voltmx.flex.DP);
      var imgOpt1 = new voltmx.ui.Image2({
        "enableCache": false,
        "height": "30dp",
        "id": "Sectionimg" + id,
        "isVisible": (data[1] !== undefined || data[1] !== "" || data[1] !== null)? true:false,
        "left": "5%",
        "skin": "slImage",
        "src": (data[1] !== undefined || data[1] !== "" || data[1] !== null) ? data[1] : "",
        "top": "3dp",
        "width": "30dp",
        "zIndex": 1
      }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
      }, {});
      var lblHeadText = new voltmx.ui.Label({
        "enableCache": false,
        "id": "lblHeadText" + id.trim(),
        "isVisible": true,
        "top": "6dp",
        "skin": this._menuItemHeaderTextSkin,
        "text": data[0],
        "width": "50%",
        "left" : "11%",
        "height": voltmx.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
      }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
      }, {});
      var flxLine = new voltmx.ui.FlexContainer({
        "autogrowMode": voltmx.flex.AUTOGROW_NONE,
        "left": "7%",
        "clipBounds": true,
        "height": "5dp",
        "id": "flxLine"+ id.trim(),
        "isVisible": true,
        "layoutType": voltmx.flex.FREE_FORM,
        "skin": "sknMenuLine",
        "top": "3%",
        "width": "80%",
        "zIndex": 1
      }, {}, {});

      /* Shows or hides sub-options on click of the main option */
      function _showhideSubOption(suboptionIds,context){
        voltmxmp.logger.trace("----------Entering _showhideSubOption Function---------", voltmxmp.logger.FUNCTION_ENTRY);
        var transformObject = "",
            transformObject0,
            transformObject1,
            callback;
        //var imgWid = context.widgets()[2];
        if(this.view[""+suboptionIds[0]].isVisible === false){
          transformObject = voltmx.ui.makeAffineTransform();
          transformObject.rotate(-90);
          transformObject0 = voltmx.ui.makeAffineTransform();
          //transformObject0.scale(1, 0.1);
          transformObject0.translate(0,-40);
          transformObject1 = voltmx.ui.makeAffineTransform();
          transformObject1.translate(0,0);
          //transformObject1.scale(1, 1);
          callback = function(){
            this.view.flxMenuControl.forceLayout();
          };
          for(var j = suboptionIds.length-1;j>=0;j--){
            //this.view[""+suboptionIds[j]].left = (parseInt(context.left)+15)+"%";
            this.view[""+suboptionIds[j]].isVisible = true; 
            this.view[suboptionIds[j]].anchorPoint = {
              "x": 0.5,
              "y": 0
            };
            this.view[suboptionIds[j]].animate(voltmx.ui.createAnimation({
              "0": {	
                "opacity": 0,
                "stepConfig": {
                  "timingFunction": voltmx.anim.EASE
                },
                "transform": transformObject0,
              },
              "100": {
                "opacity": 1,
                "stepConfig": {
                  "timingFunction": voltmx.anim.EASE
                },
                "transform": transformObject1,
              }
            }), {
              "delay": 0,
              "iterationCount": 1,
              "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
              "duration": 0.1
            }, {
              "animationEnd": callback.bind(this)
            });
            this.view.flxMenuControl.forceLayout();
          } 
        }
        else {
          transformObject = voltmx.ui.makeAffineTransform();
          transformObject.rotate(0);
          transformObject0 = voltmx.ui.makeAffineTransform();
          //transformObject0.scale(1, 1);
          transformObject1 = voltmx.ui.makeAffineTransform();
          //transformObject1.scale(1, 0.1);
          transformObject1.translate(0,-40);
          //widgets[1].isVisible = false;
          callback = function(widget){
            widget.isVisible = false;
            this.view.flxMenuControl.forceLayout();
          };
          for(var k in suboptionIds){
            this.view[suboptionIds[k]].anchorPoint = {
              "x": 0.5,
              "y": 0
            };
            this.view[suboptionIds[k]].animate(
              voltmx.ui.createAnimation({
                "100": {
                  "opacity": 0,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  },
                  "transform": transformObject1,  
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": 0.1
              }, {
                "animationEnd": callback.bind(this,this.view[suboptionIds[k]])
              }
            );   
            this.view.flxMenuControl.forceLayout();
          } 
        } 
        voltmxmp.logger.trace("----------Exiting _showhideSubOption Function---------", voltmxmp.logger.FUNCTION_EXIT);
      } 
      flxHeaderData.add(lblHeadText, flxLine);
      this.view.flxMenuControl.add(flxHeaderData);
      var allid = [];
      for(var i in data[2]) {
        try {
          this.view.flxMenuControl.add(this._createOption(data[2][i], "flxOptions" + id + i, "suboption"));
          allid.push("flxflxOptions" + id + i);
        } catch(e) {
          alert(e);
        }
      }
      this.view.flxMenuControl[flxHeaderData.id].onClick = _showhideSubOption.bind(this,allid);
      //alert(this.view.flxMenuControl.widgets().length);
      voltmxmp.logger.trace("----------Exiting _addwithsubItem Function---------", voltmxmp.logger.FUNCTION_EXIT);
    },

    /**
	   * @function _createOption
	   * @description: creats menu items
       * @private
	   * @param {JSON Array} data
	   * @param {String} id
       * @param {String} type
 	   */
    _createOption: function(data, id, type){
      voltmxmp.logger.trace("----------Entering _createOption Function---------", voltmxmp.logger.FUNCTION_ENTRY); 
      var flxOpt1 = new voltmx.ui.FlexContainer({
        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
        "height": "20%",
        "clipBounds": true,
        "enableCache": false,
        "id": "flx" + id,
        "isVisible": true,
        "layoutType": voltmx.flex.FLOW_VERTICAL,
        "left": type !== "option"?"10%":"0%",
        "skin": (data.skin !== undefined || data.skin !== "" || data.skin !== null) ? data.skin : "slFbox",
        "focusSkin": "flxfocusSkin",
        "top": "0%",
        "width": "100%",
        "onClick": (this._callbackMode === true)?this.onDflexClick.bind(this, id):(data.callback !== undefined || data.callback !== "" || data.callback !== null) ? data.callback : function () {},
        //this.onDflexClick.bind(this, id),
        "zIndex": 1
      }, {}, {});
      flxOpt1.setDefaultUnit(voltmx.flex.DP);
      var imgOpt1 = new voltmx.ui.Image2({
        "enableCache": false,
        "height": "100%",
        "id": "img" + id,
        "isVisible": (data.src !== undefined || data.src !== "" || data.src !== null)?true:false,
        "left": "2%",
        "skin": "slImage",
        "src": (data.src !== undefined || data.src !== "" || data.src !== null) ? data.src : "",
        "top": "2dp",
        "width": "30dp",
        "zIndex": 1
      }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
      }, {});
      var lblOpt1 = new voltmx.ui.Label({
        "enableCache": false,
        "id": "lbl" + id,
        "isVisible": true,
        "skin": this._menuItemSkin,
        "text": (data.text !== undefined || data.text !== "" || data.text !== null) ? data.text : "",
        "centerY": "20%",
        "width": "50%",
        "left": "11%",
        "height": voltmx.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
      }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
      }, {});
      var flxLine1 = new voltmx.ui.FlexContainer({
        "autogrowMode": voltmx.flex.AUTOGROW_NONE,
        "left": "9%",
        "clipBounds": true,
        "height": "1dp",
        "id": "flxLine1"+ id,
        "isVisible": true,
        "layoutType": voltmx.flex.FREE_FORM,
        "skin": "sknMenuLine",
        "top": "30%",
        "width": "50%",
        "zIndex": 1
      }, {}, {});
      flxOpt1.add(lblOpt1,flxLine1);
      voltmxmp.logger.trace("----------Exiting _createOption Function---------", voltmxmp.logger.FUNCTION_EXIT);
      return flxOpt1;
    },

    /**
       * @function hamIconAnim
       * @description: animates hamburger icon
       * @private
       */
    hamIconAnim: function(r1a, opacity, o1, o2, d1, d2){
      voltmxmp.logger.trace("----------Entering hamIconAnim Function---------", voltmxmp.logger.FUNCTION_ENTRY);
      this.view.imgHamIconClose.isVisible=true;
      var r1=voltmx.ui.makeAffineTransform();
      r1.rotate(r1a);
      this.view.imgHamIcon.animate(
        voltmx.ui.createAnimation({
          "100": {
            "stepConfig": {
              "timingFunction": voltmx.anim.EASE
            },
            "transform": r1,
            "opacity": parseFloat(opacity)
          }
        }), {
          "delay": 0,
          "iterationCount": 1,
          "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
          "duration": d1
        }, {
          "animationEnd": function(){}
        }
      );
      this.view.imgHamIconClose.animate(
        voltmx.ui.createAnimation({
          "0": {
            "stepConfig": {
              "timingFunction": voltmx.anim.EASE
            },                      
            "opacity": parseFloat(o1)
          },
          "100": {
            "stepConfig": {
              "timingFunction": voltmx.anim.EASE
            },
            "transform": r1,
            "opacity": parseFloat(o2)
          }
        }), {
          "delay": 0,
          "iterationCount": 1,
          "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
          "duration": d2
        }, {
          "animationEnd": function(){}
        }
      );
      voltmxmp.logger.trace("----------Exiting hamIconAnim Function---------", voltmxmp.logger.FUNCTION_EXIT);
    },

    /**
       * @function onDflexClick
       * @description: custom callback function for onClick of menu items
       * @private
       * @param {String} id
       */
    onDflexClick: function(id){
      voltmxmp.logger.trace("----------Entering onDflexClick Function---------", voltmxmp.logger.FUNCTION_ENTRY);
      if(this.view["img"+id].src == "checkboxinactive.png"){
        this.view["img"+id].src = "checkboxactive.png";
      }
      else {
        this.view["img"+id].src = "checkboxinactive.png";
      }
      this.addSelectedValues("img"+id);
      this.view.forceLayout();
      voltmxmp.logger.trace("----------Exiting onDflexClick Function---------", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
       * @function addSelectedValues
       * @description: stores all the values of selected items of the menu items
       * @private
       * @param {String} id
       */
    addSelectedValues: function(id){
      voltmxmp.logger.trace("----------Entering addSelectedValues Function---------", voltmxmp.logger.FUNCTION_ENTRY); 
      var setValue =0;
      if(this.view[id].src=="checkboxactive.png"){
        setValue = 1;
      }
      var searchData = this.view[id].parent.widgets()[1].text;
      for(i=0;i<Object.keys(this.sectionedData).length;i++){
        var header = Object.keys(this.sectionedData[i]);
        var subheaders = Object.keys(this.sectionedData[i][Object.keys(this.sectionedData[Object.keys(this.sectionedData)[i]])]);
        for(j=0;j<subheaders.length;j++){
          if(searchData == subheaders[j])
          {
            this.sectionedData[i][header][subheaders[j]] =  setValue;
          }
        }
      }
      if(this.onItemClick !== null){
        this.onItemClick();
      }
      voltmxmp.logger.trace("----------Exiting addSelectedValues Function---------", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
       * @function getSelectedValues
       * @description: returns all the selected menu items data when called
       * @access: exposed to user
       */
    getSelectedValues: function(){
      voltmxmp.logger.trace("----------Entering getSelectedValues Function---------", voltmxmp.logger.FUNCTION_ENTRY);
      voltmxmp.logger.trace("----------Exiting getSelectedValues Function---------", voltmxmp.logger.FUNCTION_EXIT);
      return this.sectionedData;
    },
    /**
       * @function formatSelectedData
       * @description: formats data according to header and subheader
       * @private
       */
    formatSelectedData : function(){
      this.sectionedData = [];
      for(i=0;i<this._items.length;i++){
        var subheaders = {};
        for(j=0;j<this._items[i][2].length;j++){
          subheaders[this._items[i][2][j].text] = 0;
        }
        var header = {};
        header[this._items[i][0]] = subheaders;
        this.sectionedData.push(header);        
      }
    },

    /**
		* @function showMenu
		* @description: Shows sliding menu
		* @access: exposed to user
		*/
    showMenu: function(){
      voltmxmp.logger.trace("----------Entering showMenu Function---------", voltmxmp.logger.FUNCTION_ENTRY);
      if (this._hamburgerPosition === 1) {
        this.showMenu();
        return;
      }
      this._hamburgerPosition = 1;
      try {
        this.onShowMenu();
      } catch(e) {
        voltmx.logger.error(JSON.stringify(e), voltmx.logger.EXCEPTION);
      }
      this.view.width = "100%";
      this.view.height = "100%";
      this.view.flxMainSlidingMenu.setVisibility(true);
      switch(this._hamburgerDirection){
        case "Left":{
          this.view.left = "0%";
          this.view.flxMainSlidingMenu.left = "-100%";
          this.view.flxMainSlidingMenu.animate(
            voltmx.ui.createAnimation({
              "100": {
                "left": "-20%",
                "stepConfig": {
                  "timingFunction": voltmx.anim.EASE
                }
              }
            }), {
              "delay": 0,
              "iterationCount": 1,
              "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
              "duration": 0.5
            }, {
              "animationEnd": function(){
                this.view.flxCover.onClick = this.hideMenu.bind(this);
              }.bind(this),
            }
          );
          break;
        }
        case "Right":{
          this.view.left = "0%";
          this.view.flxMainSlidingMenu.left = "100%";
          this.view.flxMainSlidingMenu.animate(
            voltmx.ui.createAnimation({
              "100": {
                "left": "20%",
                "stepConfig": {
                  "timingFunction": voltmx.anim.EASE
                }
              }
            }), {
              "delay": 0,
              "iterationCount": 1,
              "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
              "duration": 0.5
            }, {
              "animationEnd": function(){
                this.view.flxCover.onClick = this.hideMenu.bind(this);
              }.bind(this),
            }
          );
          break;
        }
        case "Top":{
          this.view.flxMainSlidingMenu.left = "0%";
          this.view.flxMainSlidingMenu.height = "90%";                    
          this.view.flxHamParent.left = "0%";
          this.view.flxMainSlidingMenu.animate(
            voltmx.ui.createAnimation({
              "0" :{
                "top": "-90%",
                "stepConfig": {
                  "timingFunction": voltmx.anim.EASE
                }
              },
              "100": {
                "top": "0%",
                "stepConfig": {
                  "timingFunction": voltmx.anim.EASE
                }
              }
            }), {
              "delay": 0,
              "iterationCount": 1,
              "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
              "duration": 0.5
            }, {
              "animationEnd": function(){} 
            }
          );
          break;
        }
      }
      //this.headerAnimations();
      //this.segmentAnimation();
      this.view.flxCover.setVisibility(true);
      this.view.flxCover.animate(
        voltmx.ui.createAnimation({
          "0": {
            "stepConfig": {
              "timingFunction": voltmx.anim.EASE
            },
            "backgroundColor": "29262900",
            "opacity": 0
          },
          "100": {
            "stepConfig": {
              "timingFunction": voltmx.anim.EASE
            },
            "backgroundColor": "292629",
            "opacity": 0.75
          }
        }), {
          "delay": 0,
          "iterationCount": 1,
          "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
          "duration": 0.25
        }, {
          "animationEnd": function(){}
        }
      );
      this.view.forceLayout();
      voltmxmp.logger.trace("----------Exiting showMenu Function---------", voltmxmp.logger.FUNCTION_EXIT);
    },

    /**
		* @function hideMenu
		* @description: Hides sliding menu
		* @access: exposed to user
		*/
    hideMenu: function(){
      voltmxmp.logger.trace("----------Entering hideMenu Function---------", voltmxmp.logger.FUNCTION_ENTRY);
      this.view.flxCover.onClick = function(){};
      this._hamburgerPosition = 0;
      try {
        this.onHideMenu();
      } catch(e) {
        voltmx.logger.error(JSON.stringify(e), voltmx.logger.EXCEPTION);
      }
      this.view.flxCover.animate(
        voltmx.ui.createAnimation({
          "0": {
            "stepConfig": {
              "timingFunction": voltmx.anim.EASE
            },
            "backgroundColor": "2926292b",
            "opacity": 1
          },
          "100": {
            "stepConfig": {
              "timingFunction": voltmx.anim.EASE
            },
            "backgroundColor": "29262900",
            "opacity": 0
          }
        }), {
          "delay": 0,
          "iterationCount": 1,
          "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
          "duration": 0.25
        }, {
          "animationEnd": function(){
            this.view.flxCover.setVisibility(false);
          }.bind(this)
        }
      );
      switch(this._hamburgerDirection){
        case "Left":{
          this.view.left = "-100%";
          this.view.flxMainSlidingMenu.animate(
            voltmx.ui.createAnimation({
              "100": {
                "left": "-100%",
                "stepConfig": {
                  "timingFunction": voltmx.anim.EASE
                }
              }
            }), {
              "delay": 0.50,
              "iterationCount": 1,
              "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
              "duration": 0.5
            }, {
              "animationEnd": function(){}  //callback.bind(this)
            }
          );
          break;
        }
        case "Right":{
          this.view.left = "100%";
          this.view.flxMainSlidingMenu.animate(
            voltmx.ui.createAnimation({
              "100": {
                "left": "100%",
                "stepConfig": {
                  "timingFunction": voltmx.anim.EASE
                }
              }
            }), {
              "delay": 0.50,
              "iterationCount": 1,
              "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
              "duration": 0.5
            }, {
              "animationEnd": function(){}  //callback.bind(this)
            }
          );
          break;
        }
        case "Top": {
          this.view.flxMainSlidingMenu.animate(
            voltmx.ui.createAnimation({
              "100": {
                "top": "-100%",
                "stepConfig": {
                  "timingFunction": voltmx.anim.EASE
                }
              }
            }), {
              "delay": 0,
              "iterationCount": 1,
              "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
              "duration": 0.5
            }, {
              "animationEnd": callback.bind(this)
            }
          );
          break;
        }
      }
      this.view.forceLayout();
      voltmxmp.logger.trace("----------Exiting hideMenu Function---------", voltmxmp.logger.FUNCTION_EXIT);
    },
    /**
		 * @function removeMenuItemAt
		 * @description: removes menu item at a particular index
         * @private
		 * @param: index
		 */
    removeMenuItemAt2: function(index){
      voltmxmp.logger.trace("----------Entering removeMenuItemAt Function---------", voltmxmp.logger.FUNCTION_ENTRY);
      this.view.flxMenuControl2.removeAt(index);
      voltmxmp.logger.trace("----------Entering removeMenuItemAt Function---------", voltmxmp.logger.FUNCTION_ENTRY);
    },

    /**
         * @function removeAllMenuItem
         * @description: removes all the menu items from the menu
         * @private
         */
    removeAllMenuItem2 : function(){
      voltmxmp.logger.trace("----------Entering removeAllMenuItem Function---------", voltmxmp.logger.FUNCTION_ENTRY);
      this.view.flxMenuControl2.removeAll();
      voltmxmp.logger.trace("----------Exiting removeAllMenuItem Function---------", voltmxmp.logger.FUNCTION_EXIT);
    },

    /**
		 * @function addMenuItems
         * @description: adds menu items to the sliding menu
		 * @param: Array of JSON[{img:"",text:""}] : menuItem
         * @param {Boolean} callBackMode
         * @access: exposed to user
		 */
    addMenuItems2: function(menuItem, callbackMode){
      try {
        voltmxmp.logger.trace("----------Entering addMenuItems Function---------", voltmxmp.logger.FUNCTION_ENTRY);
        if(menuItem === undefined || menuItem === null || menuItem === ""){
          throw {
            message: "empty or undefined parameter"
          };
          return;
        }
        this.view.flxMenuControl2.removeAll();
        this._createMenuItems2(menuItem);
        this._returnData2 = [];
      } catch(err) {
        voltmxmp.logger.error(JSON.stringify(err), voltmxmp.logger.EXCEPTION);
      }
      voltmxmp.logger.trace("----------Exiting addMenuItems Function---------", voltmxmp.logger.FUNCTION_EXIT);
    },

    /**
         * @function _createMenuItems
         * @description: creates menu items with sub-options or without sub-options based on data
         * @private
         * @param {JSON Array} data
         */
    _createMenuItems2: function(data){
      voltmxmp.logger.trace("----------Entering _createMenuItems Function---------", voltmxmp.logger.FUNCTION_ENTRY);
      this._items2 = data;
      for(var i = 0; i < data.length; i++){
        if(Array.isArray(data[i])){
          this._addwithsubItem2(data[i],"menu" + i);
          /*var wid = this._addWidgets(data[i], "Head" + i);
					this.view.flxMenuControl.add(wid); */
        } 
        else if(typeof data[i] == 'object'){
          var wid1 = this._createOption2(data[i], "menu" + i,"option");
          wid1.top = "5%";
          this.view.flxMenuControl2.add(wid1);
        } 
        else {
          throw {
            message : "wrong data passed while creatng hamburger.",
            error : "reusable widget error"
          };
        }
      }
      this.formatSelectedData();
      voltmxmp.logger.trace("----------Exiting _createMenuItems Function---------", voltmxmp.logger.FUNCTION_EXIT);
    },

    /**
       * @function _addwithsubItem
       * @description: adds menu items with sub-options
       * @private
       * @param {JSON Array} data
       * @param {String} id
       */
    _addwithsubItem2: function(data,id){
      voltmxmp.logger.trace("----------Entering _addwithsubItem Function---------", voltmxmp.logger.FUNCTION_ENTRY);
      var flxHeaderData = new voltmx.ui.FlexContainer({
        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
        "clipBounds": true,
        "enableCache": false,
        "top": "0%",
        "left": "5%",
        "id": "flxHeaderData2" + id.trim(),
        "isVisible": true,
        "skin": "slFbox",
        "width": "100%",
        "height": voltmx.flex.USE_PREFFERED_SIZE,
        "zIndex": 3,
        "layoutType": voltmx.flex.FLOW_VERTICAL
      }, {}, {});
      flxHeaderData.setDefaultUnit(voltmx.flex.DP);
      var imgOpt1 = new voltmx.ui.Image2({
        "enableCache": false,
        "height": "30dp",
        "id": "Sectionimg2" + id,
        "isVisible": (data[1] !== undefined || data[1] !== "" || data[1] !== null)? true:false,
        "left": "5%",
        "skin": "slImage",
        "src": (data[1] !== undefined || data[1] !== "" || data[1] !== null) ? data[1] : "",
        "top": "3dp",
        "width": "30dp",
        "zIndex": 1
      }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
      }, {});
      var lblHeadText = new voltmx.ui.Label({
        "enableCache": false,
        "id": "lblHeadText2" + id.trim(),
        "isVisible": true,
        "top": "6dp",
        "skin": this._menuItemHeaderTextSkin,
        "text": data[0],
        "width": "50%",
        "left" : "11%",
        "height": voltmx.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
      }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
      }, {});
      var flxLine = new voltmx.ui.FlexContainer({
        "autogrowMode": voltmx.flex.AUTOGROW_NONE,
        "left": "7%",
        "clipBounds": true,
        "height": "5dp",
        "id": "flxLine12"+ id.trim(),
        "isVisible": true,
        "layoutType": voltmx.flex.FREE_FORM,
        "skin": "sknMenuLine",
        "top": "5dp",
        "width": "80%",
        "zIndex": 1
      }, {}, {});

      /* Shows or hides sub-options on click of the main option */
      function _showhideSubOption2(suboptionIds,context){
        voltmxmp.logger.trace("----------Entering _showhideSubOption Function---------", voltmxmp.logger.FUNCTION_ENTRY);
        var transformObject = "",
            transformObject0,
            transformObject1,
            callback;
        //var imgWid = context.widgets()[2];
        if(this.view[""+suboptionIds[0]].isVisible === false){
          transformObject = voltmx.ui.makeAffineTransform();
          transformObject.rotate(-90);
          transformObject0 = voltmx.ui.makeAffineTransform();
          //transformObject0.scale(1, 0.1);
          transformObject0.translate(0,-40);
          transformObject1 = voltmx.ui.makeAffineTransform();
          transformObject1.translate(0,0);
          //transformObject1.scale(1, 1);
          callback = function(){
            this.view.flxMenuControl2.forceLayout();
          };
          for(var j = suboptionIds.length-1;j>=0;j--){
            //this.view[""+suboptionIds[j]].left = (parseInt(context.left)+15)+"%";
            this.view[""+suboptionIds[j]].isVisible = true; 
            this.view[suboptionIds[j]].anchorPoint = {
              "x": 0.5,
              "y": 0
            };
            this.view[suboptionIds[j]].animate(voltmx.ui.createAnimation({
              "0": {	
                "opacity": 0,
                "stepConfig": {
                  "timingFunction": voltmx.anim.EASE
                },
                "transform": transformObject0,
              },
              "100": {
                "opacity": 1,
                "stepConfig": {
                  "timingFunction": voltmx.anim.EASE
                },
                "transform": transformObject1,
              }
            }), {
              "delay": 0,
              "iterationCount": 1,
              "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
              "duration": 0.1
            }, {
              "animationEnd": callback.bind(this)
            });
            this.view.flxMenuControl2.forceLayout();
          } 
        }
        else {
          transformObject = voltmx.ui.makeAffineTransform();
          transformObject.rotate(0);
          transformObject0 = voltmx.ui.makeAffineTransform();
          //transformObject0.scale(1, 1);
          transformObject1 = voltmx.ui.makeAffineTransform();
          //transformObject1.scale(1, 0.1);
          transformObject1.translate(0,-40);
          //widgets[1].isVisible = false;
          callback = function(widget){
            widget.isVisible = false;
            this.view.flxMenuControl2.forceLayout();
          };
          for(var k in suboptionIds){
            this.view[suboptionIds[k]].anchorPoint = {
              "x": 0.5,
              "y": 0
            };
            this.view[suboptionIds[k]].animate(
              voltmx.ui.createAnimation({
                "100": {
                  "opacity": 0,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  },
                  "transform": transformObject1,  
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": 0.1
              }, {
                "animationEnd": callback.bind(this,this.view[suboptionIds[k]])
              }
            );   
            this.view.flxMenuControl2.forceLayout();
          } 
        } 
        voltmxmp.logger.trace("----------Exiting _showhideSubOption Function---------", voltmxmp.logger.FUNCTION_EXIT);
      } 
      flxHeaderData.add(lblHeadText, flxLine);
      this.view.flxMenuControl2.add(flxHeaderData);
      var allid = [];
      for(var i in data[2]) {
        try {
          this.view.flxMenuControl2.add(this._createOption2(data[2][i], "flxOptions" + id + i, "suboption"));
          allid.push("flxflxOptions" + id + i);
        } catch(e) {
          alert(e);
        }
      }
      this.view.flxMenuControl2[flxHeaderData.id].onClick = _showhideSubOption2.bind(this,allid);
      //alert(this.view.flxMenuControl.widgets().length);
      voltmxmp.logger.trace("----------Exiting _addwithsubItem Function---------", voltmxmp.logger.FUNCTION_EXIT);
    },

    /**
	   * @function _createOption
	   * @description: creats menu items
       * @private
	   * @param {JSON Array} data
	   * @param {String} id
       * @param {String} type
 	   */
    _createOption2: function(data, id, type){
      voltmxmp.logger.trace("----------Entering _createOption Function---------", voltmxmp.logger.FUNCTION_ENTRY); 
      var flxOpt1 = new voltmx.ui.FlexContainer({
        "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
        "height": "28%",
        "clipBounds": true,
        "enableCache": false,
        "id": "flx2" + id,
        "isVisible": true,
        "layoutType": voltmx.flex.FLOW_VERTICAL,
        "left": type !== "option"?"10%":"0%",
        "skin": (data.skin !== undefined || data.skin !== "" || data.skin !== null) ? data.skin : "slFbox",
        "focusSkin": "flxfocusSkin",
        "top": "0%",
        "width": "100%",
        "onClick": (this._callbackMode === true)?this.onDflexClick.bind(this, id):(data.callback !== undefined || data.callback !== "" || data.callback !== null) ? data.callback : function () {},
        //this.onDflexClick.bind(this, id),
        "zIndex": 1
      }, {}, {});
      flxOpt1.setDefaultUnit(voltmx.flex.DP);
      var imgOpt1 = new voltmx.ui.Image2({
        "enableCache": false,
        "height": "100%",
        "id": "img2" + id,
        "isVisible": (data.src !== undefined || data.src !== "" || data.src !== null)?true:false,
        "left": "2%",
        "skin": "slImage",
        "src": (data.src !== undefined || data.src !== "" || data.src !== null) ? data.src : "",
        "top": "2dp",
        "width": "30dp",
        "zIndex": 1
      }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
      }, {});
      var lblOpt1 = new voltmx.ui.Label({
        "enableCache": false,
        "id": "lbl2" + id,
        "isVisible": true,
        "skin": this._menuItemSkin,
        "text": (data.text !== undefined || data.text !== "" || data.text !== null) ? data.text : "",
        "centerY": "30%",
        "width": "50%",
        "left": "11%",
        "height": voltmx.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
      }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
      }, {});
      var flxLine1 = new voltmx.ui.FlexContainer({
        "autogrowMode": voltmx.flex.AUTOGROW_NONE,
        "left": "9%",
        "clipBounds": true,
        "height": "1dp",
        "id": "flxLine2"+ id,
        "isVisible": true,
        "layoutType": voltmx.flex.FREE_FORM,
        "skin": "sknMenuLine",
        "top": "28%",
        "width": "50%",
        "zIndex": 1
      }, {}, {});
      flxOpt1.add(lblOpt1,flxLine1);
      voltmxmp.logger.trace("----------Exiting _createOption Function---------", voltmxmp.logger.FUNCTION_EXIT);
      return flxOpt1;
    }

  };
});