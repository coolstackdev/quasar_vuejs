(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ecb2a888"],{"33f1":function(t,s,a){},"51f6":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("q-page",{attrs:{padding:""}},[a("div",{staticClass:"screen"},[a("div",{staticClass:"content"},[a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("p",{staticClass:"fontsize-24"},[t._v("\n              "+t._s(t.$t("string_sensors"))+"\n            ")])]),a("div",{staticClass:"col"},[a("p",{staticClass:"fontsize-24"},[t._v("\n              "+t._s(t.$t("string_mc"))+"\n            ")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("button",{staticClass:"nav-button",staticStyle:{float:"right"}},[t._v("\n              "+t._s(t.$t("string_zero"))+"\n            ")])]),a("div",{staticClass:"col"})]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},t._l(t.leftRow,function(s){return a("div",{key:s.id},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-3"},[a("p",{staticClass:"fontsize-24"},[t._v(t._s(s.id)+":")])]),a("div",{staticClass:"col-6",staticStyle:{"text-align":"right"}},[a("p",{staticClass:"fontsize-24"},[t._v("\n                    "+t._s(t.toFloat2(s.percentage))+"%\n                  ")])]),a("div",{staticClass:"col-3"})]),s.isAlarm?a("p",{staticClass:"fontsize-12 alarm"},[t._v("\n                "+t._s(t.$t("string_alarm"))+"\n              ")]):t._e()])}),0),a("div",{staticClass:"col"},t._l(t.rightRow,function(s){return a("div",{key:s.id},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-3"},[a("p",{staticClass:"fontsize-24"},[t._v(t._s(s.id)+":")])]),a("div",{staticClass:"col-6",staticStyle:{"text-align":"right"}},[a("p",{staticClass:"fontsize-24"},[t._v("\n                    "+t._s(t.toFloat2(s.percentage))+"%\n                  ")])]),a("div",{staticClass:"col-3"})]),s.isAlarm?a("p",{staticClass:"fontsize-12 alarm"},[t._v("\n                "+t._s(t.$t("string_alarm"))+"\n              ")]):t._e()])}),0)])])]),a("div",{staticClass:"row container-left-right"},[a("div",{staticClass:"col"},[a("button",{staticClass:"nav-button"},[a("i",{staticClass:"fa fa-chevron-left margin-right-10",attrs:{"aria-hidden":"true"}}),t._v("\n          "+t._s(t.$t("string_previous"))+"\n        ")])]),a("div",{staticClass:"col",staticStyle:{display:"flex","justify-content":"center"}},[a("button",{staticClass:"nav-button"},[a("i",{staticClass:"fa fa-bars margin-right-10",attrs:{"aria-hidden":"true"}}),t._v("\n          "+t._s(t.$t("string_menu"))+"\n        ")])]),a("div",{staticClass:"col"},[a("button",{staticClass:"nav-button",staticStyle:{float:"right"}},[t._v("\n          "+t._s(t.$t("string_next"))+"\n          "),a("i",{staticClass:"fa fa-chevron-right margin-left-10",attrs:{"aria-hidden":"true"}})])])])])])},n=[],e={name:"AllMc",methods:{toFloat2:function(t){var s=t;return"string"===typeof t&&(s=parseFloat(t)),s.toFixed(2)}},computed:{leftRow:function(){return this.sensors.filter(function(t){return t.id<=4})},rightRow:function(){return this.sensors.filter(function(t){return t.id>4})}},data:function(){return{sensors:[{id:1,percentage:-4.5,isAlarm:!0},{id:2,percentage:0,isAlarm:!1},{id:3,percentage:12.03,isAlarm:!1},{id:4,percentage:0,isAlarm:!0},{id:5,percentage:0,isAlarm:!1},{id:6,percentage:1.8,isAlarm:!0},{id:7,percentage:0,isAlarm:!1},{id:8,percentage:0,isAlarm:!1}]}}},r=e,c=(a("ee7e"),a("2877")),l=Object(c["a"])(r,i,n,!1,null,"5413cc02",null);s["default"]=l.exports},ee7e:function(t,s,a){"use strict";var i=a("33f1"),n=a.n(i);n.a}}]);