(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d20900a"],{a6cb:function(s,o,t){"use strict";t.r(o);var n=function(){var s=this,o=s.$createElement,t=s._self._c||o;return t("div",{staticClass:"Password"},[t("q-page",[t("div",{staticClass:"screen"},[t("div",{staticClass:"content"},[t("div",{staticClass:"q-pa-md"},[t("div",{staticClass:"row content-row"},[t("div",{staticClass:"col-12 align-center"},[t("p",{staticClass:"fontsize-14"},[s._v("\n                "+s._s(s.$t("SUPLOGIN_STR"))+"\n              ")])])]),t("div",{staticClass:"row content-row"},[t("div",{staticClass:"col-4"},[t("p",{staticClass:"fontsize-14"},[s._v(s._s(s.$t("PASSWORD_STR")))])]),t("div",{staticClass:"col-8"},[t("input",{ref:"input",staticClass:"inputbox fontsize-14",attrs:{type:"password"},domProps:{value:s.info.password},on:{input:s.onInputChangePassword,focus:function(o){s.showkeyboardPassword=!0,s.showkeyboardOldPassword=!1,s.showkeyboardNewPassword=!1,s.showkeyboardconfirmNew=!1}}})]),t("div",{staticClass:"keyboard-container"},[1==s.showkeyboardPassword?t("SimpleKeyboard",{staticStyle:{"background-color":"#FFF"},attrs:{input:s.info.password},on:{onChange:s.onChangePassword,onKeyPress:s.onKeyPress}}):s._e()],1)]),t("div",{staticClass:"row content-row"},[t("div",{staticClass:"col-12 align-center"},[t("p",{staticClass:"fontsize-14"},[s._v("\n                "+s._s(s.$t("CHANGEPASS_STR"))+"\n              ")])])]),t("div",{staticClass:"row content-row"},[t("div",{staticClass:"col-4"},[t("p",{staticClass:"fontsize-14"},[s._v("\n                "+s._s(s.$t("OLDPASS_STR"))+"\n              ")])]),t("div",{staticClass:"col-8"},[t("input",{ref:"input",staticClass:"inputbox fontsize-14",attrs:{type:"password"},domProps:{value:s.info.oldPassword},on:{input:s.onInputChangeOldPassword,focus:function(o){s.showkeyboardPassword=!1,s.showkeyboardOldPassword=!0,s.showkeyboardNewPassword=!1,s.showkeyboardconfirmNew=!1}}})]),t("div",{staticClass:"keyboard-container"},[1==s.showkeyboardOldPassword?t("SimpleKeyboard",{staticStyle:{"background-color":"#FFF"},attrs:{input:s.info.oldPassword},on:{onChange:s.onChangeOldPassword,onKeyPress:s.onKeyPressOldPassword}}):s._e()],1)]),t("div",{staticClass:"row content-row"},[t("div",{staticClass:"col-4"},[t("p",{staticClass:"fontsize-14"},[s._v("\n                "+s._s(s.$t("New Pass"))+"\n              ")])]),t("div",{staticClass:"col-8"},[t("input",{ref:"input",staticClass:"inputbox fontsize-14",attrs:{type:"password"},domProps:{value:s.info.newPassword},on:{input:s.onInputChangeNewPassword,focus:function(o){s.showkeyboardPassword=!1,s.showkeyboardOldPassword=!1,s.showkeyboardNewPassword=!0,s.showkeyboardconfirmNew=!1}}})]),t("div",{staticClass:"keyboard-container"},[1==s.showkeyboardNewPassword?t("input",{ref:"input",staticClass:"inputbox fontsize-14",staticStyle:{"background-color":"#FFF"},attrs:{type:"password"},domProps:{value:s.info.newPassword},on:{input:s.onInputChangeNewPassword}}):s._e(),1==s.showkeyboardNewPassword?t("SimpleKeyboard",{staticStyle:{"background-color":"#FFF"},attrs:{input:s.info.newPassword},on:{onChange:s.onChangeNewPassword,onKeyPress:s.onKeyPressNewPassword}}):s._e()],1)]),t("div",{staticClass:"row content-row"},[t("div",{staticClass:"col-4"},[t("p",{staticClass:"fontsize-14"},[s._v("\n                "+s._s(s.$t("CONFIRM_STR"))+"\n              ")])]),t("div",{staticClass:"col-8"},[t("input",{ref:"input",staticClass:"inputbox fontsize-14",attrs:{type:"password"},domProps:{value:s.info.confirmNew},on:{input:s.onInputChangeconfirmNew,focus:function(o){s.showkeyboardPassword=!1,s.showkeyboardOldPassword=!1,s.showkeyboardNewPassword=!1,s.showkeyboardconfirmNew=!0}}})]),t("div",{staticClass:"keyboard-container"},[1==s.showkeyboardconfirmNew?t("input",{ref:"input",staticClass:"inputbox fontsize-14",staticStyle:{"background-color":"#FFF"},attrs:{type:"password"},domProps:{value:s.info.confirmNew},on:{input:s.onInputChangeconfirmNew}}):s._e(),1==s.showkeyboardconfirmNew?t("SimpleKeyboard",{staticStyle:{"background-color":"#FFF"},attrs:{input:s.info.confirmNew},on:{onChange:s.onChangeconfirmNew,onKeyPress:s.onKeyPressconfirmNew}}):s._e()],1)]),t("div",{staticClass:"row container-left-right nav-bar"},[t("div",{staticClass:"col"},[t("button",{staticClass:"nav-button"},[t("i",{staticClass:"fa fa-chevron-left margin-right-10",attrs:{"aria-hidden":"true"}}),s._v("\n                "+s._s(s.$t("PLOGIN_STR"))+"\n              ")])]),t("div",{staticClass:"col",staticStyle:{display:"flex","justify-content":"center"}},[t("button",{staticClass:"nav-button",on:{click:s.home}},[t("i",{staticClass:"fa fa-home margin-right-10",attrs:{"aria-hidden":"true"}}),s._v("\n                "+s._s(s.$t("W_HOME_STR"))+"\n              ")])]),t("div",{staticClass:"col"},[t("button",{staticClass:"nav-button",staticStyle:{float:"right"}},[s._v("\n                "+s._s(s.$t("CHANGE_STR"))+"\n                ")])])])])])])])],1)},a=[],e=t("0aec"),i={name:"Password",components:{SimpleKeyboard:e["a"]},data:function(){return{info:{password:"",oldPassword:"",newPassword:"",confirmNew:""},showkeyboardPassword:!1,showkeyboardOldPassword:!1,showkeyboardNewPassword:!1,showkeyboardconfirmNew:!1}},methods:{home:function(){this.$router.push({path:"/"})},onInputChangePassword:function(s){this.info.password=s.target.value},onInputChangeOldPassword:function(s){this.info.oldPassword=s.target.value},onInputChangeNewPassword:function(s){this.info.newPassword=s.target.value},onInputChangeconfirmNew:function(s){this.info.confirmNew=s.target.value},onChangePassword:function(s){this.info.password=s},onChangeOldPassword:function(s){this.info.oldPassword=s},onChangeNewPassword:function(s){this.info.newPassword=s},onChangeconfirmNew:function(s){this.info.confirmNew=s},onKeyPress:function(s){console.log("button",s),"{enter}"==s&&(this.showkeyboardPassword=!1)},onKeyPressOldPassword:function(s){console.log("button",s),"{enter}"==s&&(this.showkeyboardOldPassword=!1)},onKeyPressNewPassword:function(s){console.log("button",s),"{enter}"==s&&(this.showkeyboardNewPassword=!1)},onKeyPressconfirmNew:function(s){console.log("button",s),"{enter}"==s&&(this.showkeyboardconfirmNew=!1)}}},r=i,d=t("2877"),c=Object(d["a"])(r,n,a,!1,null,null,null);o["default"]=c.exports}}]);