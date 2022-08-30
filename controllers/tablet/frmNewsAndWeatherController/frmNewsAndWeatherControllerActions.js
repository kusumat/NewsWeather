define({
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
    /** onClick defined for btnKnowledgeFramework **/
    AS_Button_hff7959ff68e42de95fefed19d6c8650: function AS_Button_hff7959ff68e42de95fefed19d6c8650(eventobject) {
        var self = this;
        //this.knowledgeFrameworkOnclick();
    },
    /** onClick defined for ButtonRound **/
    AS_Button_j335c743e10643d4850db366fb3143ff: function AS_Button_j335c743e10643d4850db366fb3143ff(eventobject) {
        var self = this;
        this.openNewsItemInBrowser();
    },
    /** onClick defined for flxVoltMXDocumentation **/
    AS_FlexContainer_a549d267ea0540629204a9b07db11c06: function AS_FlexContainer_a549d267ea0540629204a9b07db11c06(eventobject) {
        var self = this;
        voltmx.application.openURL('https://www.hcltechsw.com/volt-mx');
    },
    /** onClick defined for flxCat1 **/
    AS_FlexContainer_ba96cc0f463d40e0802fe8b397f6f7df: function AS_FlexContainer_ba96cc0f463d40e0802fe8b397f6f7df(eventobject) {
        var self = this;
        this.setCategorySelected(eventobject.id);
    },
    /** onClick defined for flxCat8 **/
    AS_FlexContainer_be1c200fc622495894c4b38c4acd27d9: function AS_FlexContainer_be1c200fc622495894c4b38c4acd27d9(eventobject) {
        var self = this;
        this.setCategorySelected(eventobject.id);
    },
    /** onClick defined for flxClose **/
    AS_FlexContainer_c45e338067a74d849803bb62285765d7: function AS_FlexContainer_c45e338067a74d849803bb62285765d7(eventobject) {
        var self = this;
        //alert("on clikc");
        //this.knowledgeFrameworkOnclick();
        //this.knowledgeFrameworkOnclick();
        //this.frmNewsAndWeatherPostShow();
    },
    /** onClick defined for flxCat2 **/
    AS_FlexContainer_c83103e0eb9841ebb9d8e78ead92d38c: function AS_FlexContainer_c83103e0eb9841ebb9d8e78ead92d38c(eventobject) {
        var self = this;
        this.setCategorySelected(eventobject.id);
    },
    /** onClick defined for flxCat6 **/
    AS_FlexContainer_cad9c5aba370422e93c0b5d771a59b16: function AS_FlexContainer_cad9c5aba370422e93c0b5d771a59b16(eventobject) {
        var self = this;
        this.setCategorySelected(eventobject.id);
    },
    /** onClick defined for flxKnowledgeFramework **/
    AS_FlexContainer_d0fe206ab9ad42fc82718eb604463cd9: function AS_FlexContainer_d0fe206ab9ad42fc82718eb604463cd9(eventobject) {
        var self = this;
        //this.knowledgeFrameworkOnclick();
    },
    /** onClick defined for flxCat4 **/
    AS_FlexContainer_d9c0e75c332a45548f58f9cd414a4b2c: function AS_FlexContainer_d9c0e75c332a45548f58f9cd414a4b2c(eventobject) {
        var self = this;
        this.setCategorySelected(eventobject.id);
    },
    /** onClick defined for flxNewsDetails **/
    AS_FlexContainer_f009c2c093754b6692273652b1e5ccd5: function AS_FlexContainer_f009c2c093754b6692273652b1e5ccd5(eventobject) {
        var self = this;
        this.changeNewsDetailsVisibleState();
    },
    /** onClick defined for flxCat9 **/
    AS_FlexContainer_f2e650d16b3943d39669dfaa512760af: function AS_FlexContainer_f2e650d16b3943d39669dfaa512760af(eventobject) {
        var self = this;
        this.setCategorySelected(eventobject.id);
    },
    /** onClick defined for flxCat7 **/
    AS_FlexContainer_f75158fba6c2409f867555e9df4b199a: function AS_FlexContainer_f75158fba6c2409f867555e9df4b199a(eventobject) {
        var self = this;
        this.setCategorySelected(eventobject.id);
    },
    /** onClick defined for flxBaseCamp **/
    AS_FlexContainer_g39e5478db6c40c08cd962e2038e20b9: function AS_FlexContainer_g39e5478db6c40c08cd962e2038e20b9(eventobject) {
        var self = this;
        voltmx.application.openURL('https://www.hcltechsw.com/volt-mx/resources');
    },
    /** onClick defined for flexClickBack **/
    AS_FlexContainer_i5baba35de014fd8947f0127d9efeecd: function AS_FlexContainer_i5baba35de014fd8947f0127d9efeecd(eventobject) {
        var self = this;
        //this.onClickBack();
        this.knowledgeFrameworkOnclick();
    },
    /** onClick defined for flxBtnKnow **/
    AS_FlexContainer_j71671e4a3144c6b9afbe60ec0a20715: function AS_FlexContainer_j71671e4a3144c6b9afbe60ec0a20715(eventobject) {
        var self = this;
        this.knowledgeFrameworkOnclick();
    },
    /** onClick defined for flxCat5 **/
    AS_FlexContainer_j7adce38f3b0483f8dcb78cc260aa934: function AS_FlexContainer_j7adce38f3b0483f8dcb78cc260aa934(eventobject) {
        var self = this;
        this.setCategorySelected(eventobject.id);
    },
    /** preShow defined for frmNewsAndWeather **/
    AS_Form_dc0774db01814231abd1206b24e033ce: function AS_Form_dc0774db01814231abd1206b24e033ce(eventobject) {
        var self = this;
        //this.checkPermissions();
    },
    /** onOrientationChange defined for frmNewsAndWeather **/
    AS_Form_h14b65dae92b4c298e1e7d126b2b778d: function AS_Form_h14b65dae92b4c298e1e7d126b2b778d(eventobject) {
        var self = this;
        this.orientationChangedCallback(eventobject);
    },
    /** postShow defined for frmNewsAndWeather **/
    AS_Form_j7284119aec84b5cb84bed3d422957e6: function AS_Form_j7284119aec84b5cb84bed3d422957e6(eventobject) {
        var self = this;
        if (this.view.flxKnowledgeFramework.isVisible === true) {
            this.view.flxKnowledgeFramework.setVisibility(false);
            this.view.flxBtnKnow.isVisible = !this.view.flxBtnKnow.isVisible;
        } else {}
        this.view.flxHam.left = "0%";
        this.frmNewsAndWeatherPostShow();
    },
    /** onTouchEnd defined for imgCloseKF **/
    AS_Image_a6e35d038bda4dc2a83a64df998893b4: function AS_Image_a6e35d038bda4dc2a83a64df998893b4(eventobject, x, y) {
        var self = this;
    },
    /** onTouchStart defined for imgCloseKF **/
    AS_Image_f5c5d445c1ae499794ca47ddd0212d47: function AS_Image_f5c5d445c1ae499794ca47ddd0212d47(eventobject, x, y) {
        var self = this;
    },
    /** onTouchEnd defined for imgHamMenu **/
    AS_Image_jed09c85c0014676b5580430d4ba2f03: function AS_Image_jed09c85c0014676b5580430d4ba2f03(eventobject, x, y) {
        var self = this;
        this.showHideHamMenu();
    }
});