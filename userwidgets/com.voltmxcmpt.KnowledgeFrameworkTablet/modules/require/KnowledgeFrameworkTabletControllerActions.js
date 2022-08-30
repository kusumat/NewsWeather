define({
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
    /** onClick defined for btnPlay1 **/
    AS_Button_b718419d01b642dd8bc07c9817fa4079: function AS_Button_b718419d01b642dd8bc07c9817fa4079(eventobject) {
        var self = this;
        this.onClickPlayButton(eventobject.id);
    },
    /** onClick defined for btnPlay2 **/
    AS_Button_f9581cb6fba34c6f814aec8030df8567: function AS_Button_f9581cb6fba34c6f814aec8030df8567(eventobject) {
        var self = this;
        this.onClickPlayButton(eventobject.id);
    },
    /** onClick defined for flexAcc3 **/
    AS_FlexContainer_a7d21bdb905542e388601a79d73a657c: function AS_FlexContainer_a7d21bdb905542e388601a79d73a657c(eventobject) {
        var self = this;
        // if(this.view.rchtextDoc.isVisible === true)
        //   this.onClickDisappear(eventobject);
        // else
        //   this.onClickDisplay(eventobject);
        this.showAccord(eventobject.id);
    },
    /** onClick defined for flexScrollDesc3 **/
    AS_FlexContainer_ae9964881c344f08a8f228c882052304: function AS_FlexContainer_ae9964881c344f08a8f228c882052304(eventobject) {
        var self = this;
        this.onLinkClick();
    },
    /** onClick defined for flexAcc2 **/
    AS_FlexContainer_d87ab03fcb7643d28994686182c0859e: function AS_FlexContainer_d87ab03fcb7643d28994686182c0859e(eventobject) {
        var self = this;
        // if(this.view.lblCodeSnippet.isVisible === true)
        //   this.onClickDisappear(eventobject);
        // else
        //   this.onClickDisplay(eventobject);
        this.showAccord(eventobject.id);
    },
    /** onClick defined for flexCloseClick **/
    AS_FlexContainer_e15fbe04dfcf4014a258a61f7936be4a: function AS_FlexContainer_e15fbe04dfcf4014a258a61f7936be4a(eventobject) {
        var self = this;
        //this.closeWhenDone();
    },
    /** onClick defined for flexAcc1 **/
    AS_FlexContainer_f290dab2715449c4b088e2fc38bd8eb2: function AS_FlexContainer_f290dab2715449c4b088e2fc38bd8eb2(eventobject) {
        var self = this;
        // if(this.view.rchTextDesc.isVisible === true)
        //   this.onClickDisappear(eventobject);
        // else
        //   this.onClickDisplay(eventobject);
        this.showAccord(eventobject.id);
    },
    /** onClick defined for flexClickBack **/
    AS_FlexContainer_h7d12210580a4ebea75accb826344f11: function AS_FlexContainer_h7d12210580a4ebea75accb826344f11(eventobject) {
        var self = this;
        this.onClickBack();
    },
    /** onTouchEnd defined for btnClose **/
    AS_Image_hd8397261cea44a49cc757f7d56d1eda: function AS_Image_hd8397261cea44a49cc757f7d56d1eda(eventobject, x, y) {
        var self = this;
        //this.closeWhenDone();
    },
    /** onRowClick defined for sgmtApi **/
    AS_Segment_j8b7147596804cb3bf1f47a8a5b280dd: function AS_Segment_j8b7147596804cb3bf1f47a8a5b280dd(eventobject, sectionNumber, rowNumber) {
        var self = this;
        try {
            this.onRowClick();
        } catch (err) {
            alert("error");
        }
    }
});