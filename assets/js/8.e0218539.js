(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{517:function(t,o,e){var a=e(1),i=e(518),n=e(154);a({target:"Array",proto:!0},{fill:i}),n("fill")},518:function(t,o,e){"use strict";var a=e(15),i=e(155),n=e(22);t.exports=function(t){for(var o=a(this),e=n(o.length),r=arguments.length,l=i(r>1?arguments[1]:void 0,e),s=r>2?arguments[2]:void 0,c=void 0===s?e:i(s,e);c>l;)o[l++]=t;return o}},660:function(t,o,e){"use strict";e.r(o);e(517);var a={data:function(){return{opareation:""}},mounted:function(){this.init()},watch:{opareation:function(t){this.init(t)}},methods:{init:function(t){var o=document.getElementById("canvas").getContext("2d");o.beginPath(),o.fillStyle="rgb(14, 165, 198)",o.fillRect(20,20,150,100),o.fill(),o.closePath(),o.beginPath(),o.globalCompositeOperation=t,o.arc(160,100,50,0,2*Math.PI,!0),o.fillStyle="rgb(255, 198, 11)",o.fill(),o.closePath()}}},i=e(69),n=Object(i.a)(a,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("canvas",{attrs:{id:"canvas",width:"740",height:"200"}}),t._v(" "),e("div",[t._v("\n        globalCompositeOperation:\n        "),e("el-radio-group",{model:{value:t.opareation,callback:function(o){t.opareation=o},expression:"opareation"}},[e("el-radio",{attrs:{label:"source-over"}},[t._v("source-over")]),t._v(" "),e("el-radio",{attrs:{label:"source-atop"}},[t._v("source-atop")]),t._v(" "),e("el-radio",{attrs:{label:"source-in"}},[t._v("source-in")]),t._v(" "),e("el-radio",{attrs:{label:"source-out"}},[t._v("source-out")]),t._v(" "),e("el-radio",{attrs:{label:"destination-over"}},[t._v("destination-over")]),t._v(" "),e("el-radio",{attrs:{label:"destination-atop"}},[t._v("destination-atop")]),t._v(" "),e("el-radio",{attrs:{label:"destination-in"}},[t._v("destination-in")]),t._v(" "),e("el-radio",{attrs:{label:"copy"}},[t._v("copy")]),t._v(" "),e("el-radio",{attrs:{label:"xor"}},[t._v("xor")])],1)],1)])}),[],!1,null,"7c96df70",null);o.default=n.exports}}]);