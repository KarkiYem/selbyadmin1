(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1171:function(e,t,n){"use strict";n.r(t);n(11),n(245),n(86);var r,o=n(165),l=n.n(o),c=n(419),d=n(10),m=n(9),v=(n(406),n(407)),f=n.n(v),h=(n(408),n(409)),y=n.n(h),_=(n(37),n(26),n(169),n(46),n(437),n(68)),C=n(403),k=n(404),w=n(405),x=n(402),S=(n(420),n(421)),O=n(73),j={name:"form-components",layout:"DashboardLayout",middleware:["isAuthenticated","checkAdmin"],components:(r={CustomStylesValidation:C.a,BrowserDefaultsValidation:k.a,ServerSideValidation:w.a},Object(m.a)(r,y.a.name,y.a),Object(m.a)(r,f.a.name,f.a),Object(m.a)(r,"FileInput",x.a),r),data:function(){return{validated:!1,seen:!0,se:!0,sin:!0,model:{id:"",aprice:"",kprice:"",gst:"",gst1:"",vat:"",vat1:"",musk:"",no:"",maxCapacity:0,cancellable_time:0},isOk:!1,code:"",cod:"",hour:0,minute:0,range:[],decks:[],dates:[],cruiseRange:[]}},watch:{cruiseRange:function(){this.initFlatpickr()}},methods:{initFlatpickr:function(){var e=this;this.$nextTick((function(){e.cruiseRange.forEach((function(e,t){Object(S.default)("#ids".concat(t+1),{enableTime:!1,dateFormat:"Y-m-d",mode:"multiple",defaultDate:e.dates})}))}))},firstFormSubmit:function(){var e=this;return Object(d.a)(regeneratorRuntime.mark((function t(){var n,data,r,o,d,i,m,v,f,h,y;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(data={gst:(n=e).model.gst,gst1:n.model.gst1,vat:n.model.vat,vat1:n.model.vat1,maxCapacity:n.model.maxCapacity,cancellation_time:"".concat(n.hour<10?"0"+parseInt(n.hour):parseInt(n.hour),":").concat(n.minute<10?"0"+parseInt(n.minute):parseInt(n.minute))},n.sin=!1,r=[],o=Object(c.a)(n.cruiseRange),d=function(i){var e=null!=o[i].dates?o[i].dates.split(", "):[],t=(e=e.filter((function(e){return""!=e}))).map((function(e){return{cruise:o[i].name,date:n.formatDate1(e)}}));r=[].concat(Object(c.a)(r),Object(c.a)(t))},i=0;i<o.length;i++)d(i);m=r.filter((function(e){return!n.dates.some((function(a){return a.date===e.date&&a.cruise===e.cruise}))})),v=n.dates.filter((function(e){return!r.some((function(a){return a.date===e.date&&a.cruise===e.cruise}))})),f=0;case 10:if(!(f<v.length)){t.next=16;break}return t.next=13,_.a.collection("cruise_logs").delete(v[f].id);case 13:f++,t.next=10;break;case 16:h=0;case 17:if(!(h<m.length)){t.next=24;break}return y={dates:m[h].date,cruise:m[h].cruise},t.next=21,_.a.collection("cruise_logs").create(y);case 21:h++,t.next=17;break;case 24:return t.next=26,_.a.collection("Settings").update(n.model.id,data).then((function(){setTimeout((function(){l()({showClose:!0,message:"Updated Successfuly!",type:"success"}),n.sin=!0}),1500)})).catch((function(){n.sin=!0,l()({showClose:!0,message:"Something went wrong!",type:"warning"})}));case 26:case"end":return t.stop()}}),t)})))()},getcat:function(){var e=this;return Object(d.a)(regeneratorRuntime.mark((function t(){var n,r,o,l,c,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e,t.next=3,_.a.collection("settings").getOne("wpaaz5r1qamc9o1");case 3:return n.model=t.sent,n.cod=n.model.code,r=n.model.cancellation_time.split(":"),n.hour=parseInt(r[0]),n.minute=parseInt(r[1]),t.next=10,_.a.collection("webcruise").getFullList({sort:"-created"});case 10:return n.decks=t.sent,t.next=13,_.a.collection("cruise_logs").getFullList({sort:"-created"});case 13:for(n.dates=t.sent,_.a.collection("cruise_logs").subscribe("*",function(){var e=Object(d.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.collection("cruise_logs").getFullList({sort:"-created"});case 2:n.dates=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),o=n.dates.map((function(e){return{cruise:e.cruise,date:e.dates}})),l=o.reduce((function(e,t){var n=t.cruise;return e[n]=e[n]||[],e[n].push(t),e}),{}),c=n.decks.map((function(e){return e.name})),i=0;i<c.length;i++)l.hasOwnProperty(c[i])?n.cruiseRange.push({name:c[i],dates:l[c[i]]}):n.cruiseRange.push({name:c[i],dates:[]});n.cruiseRange=n.cruiseRange.map((function(e){return{name:e.name,dates:e.dates.map((function(a){return n.formatDate(a.date)})).join(", ")}}));case 20:case"end":return t.stop()}}),t)})))()},mask:function(){this.isOk=!0},maskk:function(){var e=this;""!=e.code?e.code==e.cod?(O.set("code",e.code),e.$store.commit("code",e.code),e.$router.push("/Setting/masking/auth/secret/mask")):l()({showClose:!0,message:"Invalid Code!",type:"warning"}):l()({showClose:!0,message:"Code is required!",type:"warning"})},formatDate:function(e){var t=new Date(e),n=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0");return"".concat(n,"-").concat(r,"-").concat(o)},formatDate1:function(e){var t=e.split("-"),n=new Date(parseInt(t[0]),parseInt(t[1])-1,parseInt(t[2])),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n.getMonth()];return this.formatted="".concat(n.getDate()," ").concat(r," ").concat(n.getFullYear()),this.formatted}},mounted:function(){this.getcat()}},$=j,L=(n(967),n(968),n(7)),component=Object(L.a)($,(function(){var e=this,t=e._self._c;return t("div",[t("base-header",{staticClass:"pb-3"},[t("div",{staticClass:"row align-items-center py-4"},[t("div",{staticClass:"col-lg-6 col-7"},[t("h6",{staticClass:"h2 text-white"},[e._v("Other Settings")])])])]),e._v(" "),t("div",{staticClass:"container-fluid mt--6"},[t("div",{staticClass:"row ht"},[t("div",{staticClass:"col"},[t("div",{staticClass:"card-wrapper"},[t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(n){var r=n.handleSubmit;return[t("form",{staticClass:"needs-validation",on:{submit:function(e){e.preventDefault()}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"GST 1",name:"GST 1",placeholder:"Enter GST 1","success-message":"Looks good!"},model:{value:e.model.gst,callback:function(t){e.$set(e.model,"gst",t)},expression:"model.gst"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"GST 2",name:"GST 2",placeholder:"Enter GST 2","success-message":"Looks good!"},model:{value:e.model.gst1,callback:function(t){e.$set(e.model,"gst1",t)},expression:"model.gst1"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"VAT 1",name:"VAT 1",placeholder:"Enter VAT 1","success-message":"Looks good!"},model:{value:e.model.vat,callback:function(t){e.$set(e.model,"vat",t)},expression:"model.vat"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Vat 2",name:"Vat 2",placeholder:"Enter Vat 2","success-message":"Looks good!"},model:{value:e.model.vat1,callback:function(t){e.$set(e.model,"vat1",t)},expression:"model.vat1"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Cruise Max Capacity",name:"Cruise Max Capacity",placeholder:"Enter Cruise Max Capacity","success-message":"Looks good!"},model:{value:e.model.maxCapacity,callback:function(t){e.$set(e.model,"maxCapacity",t)},expression:"model.maxCapacity"}})],1),e._v(" "),t("div",{staticClass:"d-flex",staticStyle:{width:"100%","margin-bottom":"1rem"}},[t("h4",{staticStyle:{"margin-top":"1rem"}},[e._v("\n                    Cancellation Time i.e "),t("br"),e._v("\n                    Time before Reporting Time\n                  ")]),e._v(" "),t("div",{staticClass:"col-md-3 ml-2"},[t("base-input",{attrs:{label:"Hour",name:"Hour",type:"number",min:"0","success-message":"Looks good!"},model:{value:e.hour,callback:function(t){e.hour=t},expression:"hour"}})],1),e._v(" "),t("div",{staticClass:"col-md-3 ml-2"},[t("base-input",{attrs:{label:"Minute",name:"Minute",type:"number",min:"0","success-message":"Looks good!"},model:{value:e.minute,callback:function(t){e.minute=t},expression:"minute"}})],1)]),e._v(" "),t("div",{staticStyle:{width:"100%","margin-bottom":"1rem"}},[t("h3",[e._v("Cruise Non-Availability :-")])]),e._v(" "),e._l(e.cruiseRange,(function(n,i){return t("div",{key:i,staticStyle:{width:"100%",display:"flex","margin-bottom":"1rem"}},[t("h4",{staticStyle:{"margin-top":"-4px"}},[e._v(e._s(n.name))]),e._v(" "),t("div",{staticClass:"col-md-4 ml-2"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.cruiseRange[i].dates,expression:"cruiseRange[i].dates"}],staticClass:"col-md-12 form-control datepicker",attrs:{type:"text",placeholder:"Select Date",id:"ids"+(i+1)},domProps:{value:e.cruiseRange[i].dates},on:{input:function(t){t.target.composing||e.$set(e.cruiseRange[i],"dates",t.target.value)}}})])])})),e._v(" "),t("div",{staticClass:"col-md-12"}),e._v(" "),0==e.isOk?t("div",{staticClass:"col-md-3 mb-4"},[t("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return e.mask()}}},[e._v("\n                    Go To Masking\n                  ")])]):e._e(),e._v(" "),1==e.isOk?t("div",{staticStyle:{width:"100%",display:"flex"}},[t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Code",name:"Code",placeholder:"Enter Code","success-message":"Looks good!"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1),e._v(" "),t("button",{staticClass:"btn btn-primary",staticStyle:{height:"2.6rem","margin-top":"2rem"},attrs:{type:"button"},on:{click:function(t){return e.maskk()}}},[e._v("\n                    Go\n                  ")])]):e._e()],2),e._v(" "),1==e.sin?t("base-button",{attrs:{type:"success","native-type":"submit"},on:{click:function(t){return r(e.firstFormSubmit)}}},[e._v("Update")]):e._e(),e._v(" "),0==e.sin?t("base-button",{attrs:{type:"success","native-type":"submit",disabled:""}},[e._v("Updating\n                "),t("p",{staticClass:"spinner"})]):e._e()],1)]}}])})],1)])])])],1)}),[],!1,null,"58c72921",null);t.default=component.exports},402:function(e,t,n){"use strict";n(32),n(21),n(26),n(38),n(39),n(23),n(19),n(44),n(45),n(43);var r=n(9);n(11);function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){d=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw o}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={name:"file-input",inheritAttrs:!1,props:{initialLabel:{type:String,default:"Select file"}},data:function(){return{files:[]}},computed:{listeners:function(){return d(d({},this.$listeners),{},{change:this.fileChange})},label:function(){var e,t=[],n=o(this.files);try{for(n.s();!(e=n.n()).done;){var r=e.value;t.push(r.name)}}catch(e){n.e(e)}finally{n.f()}return t.length?t.join(", "):this.initialLabel}},methods:{fileChange:function(e){this.files=e.target.files,this.$emit("change",this.files)}}},v=n(7),component=Object(v.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"custom-file"},[t("input",e._g(e._b({staticClass:"custom-file-input",attrs:{type:"file",id:"customFileLang",lang:"en"}},"input",e.$attrs,!1),e.listeners)),e._v(" "),t("label",{staticClass:"custom-file-label",attrs:{for:"customFileLang"}},[e._v("\n    "+e._s(e.label)+"\n  ")])])}),[],!1,null,null,null);t.a=component.exports},403:function(e,t,n){"use strict";var r=n(10),o=(n(37),{components:{},data:function(){return{validated:!1,model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{firstFormSubmit:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}}),l=n(7),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Custom styles")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        For custom form validation messages, you’ll need to provide error messages to your\n        "),t("code",[e._v("<base-input>")]),e._v(" components. This disables the browser default feedback tooltips, but still\n        provides access to the form\n        validation APIs in JavaScript.\n        "),t("br"),t("br"),e._v("\n        When attempting to submit, you’ll see the"),t("code",[e._v(".is-valid")]),e._v(" and "),t("code",[e._v(".is-invalid")]),e._v(" classes applied\n        to your form controls.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(n){var r=n.handleSubmit;return[t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),r(e.firstFormSubmit)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",name:"First name",placeholder:"First name","success-message":"Looks good!",rules:"required"},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",name:"Last name",placeholder:"Last name",rules:"required","success-message":"Looks good!"},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",name:"Username",placeholder:"Username",rules:"required"},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",placeholder:"City",rules:"required"},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",placeholder:"State",rules:"required"},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",placeholder:"Zip",rules:"required"},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",{attrs:{rules:{required:{allowFalse:!1}},name:"Terms"}},[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n          Agree to terms and conditions\n        ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)]}}])})],1)}),[],!1,null,null,null);t.a=component.exports},404:function(e,t,n){"use strict";var r=n(10),o=(n(37),{components:{},data:function(){return{model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{submit:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}}}),l=n(7),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Browser defaults")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll\n        see a slightly different style of feedback.\n        "),t("br"),t("br"),e._v("\n        While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",name:"First name",placeholder:"First name",required:""},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",name:"Last name",placeholder:"Last name",required:""},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",name:"Username",placeholder:"Username",required:""},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",placeholder:"City",required:""},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",placeholder:"State",required:""},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",placeholder:"Zip",required:""},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n        Agree to terms and conditions\n      ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)])}),[],!1,null,null,null);t.a=component.exports},405:function(e,t,n){"use strict";var r=n(10),o=(n(37),{components:{},data:function(){return{validated:!1,model:{firstName:"Mark",lastName:"Otto",username:"",city:"",state:"",zip:"",agree:!1}}},methods:{onSubmit:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.$refs.formValidator.validate()}}),l=n(7),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("card",[t("h3",{staticClass:"mb-0",attrs:{slot:"header"},slot:"header"},[e._v("Server side validation")]),e._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-8"},[t("p",{staticClass:"mb-0"},[e._v("\n        We recommend using client side validation, but in case you require server side, you can indicate invalid and\n        valid form fields with "),t("code",[e._v(".is-invalid")]),e._v(" and "),t("code",[e._v(".is-valid")]),e._v(". Note that\n        "),t("code",[e._v(".invalid-feedback")]),e._v("\n        is also supported with these classes.\n      ")])])]),e._v(" "),t("hr"),e._v(" "),t("validation-observer",{ref:"formValidator",scopedSlots:e._u([{key:"default",fn:function(n){var r=n.handleSubmit;return[t("form",{staticClass:"needs-validation",on:{submit:function(t){return t.preventDefault(),r(e.onSubmit)}}},[t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"First name",rules:"required",name:"First name",placeholder:"First name","success-message":"Looks good!"},model:{value:e.model.firstName,callback:function(t){e.$set(e.model,"firstName",t)},expression:"model.firstName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Last name",rules:"required",name:"Last name",placeholder:"Last name","success-message":"Looks good!"},model:{value:e.model.lastName,callback:function(t){e.$set(e.model,"lastName",t)},expression:"model.lastName"}})],1),e._v(" "),t("div",{staticClass:"col-md-4"},[t("base-input",{attrs:{label:"Username",rules:"required",name:"Username",placeholder:"Username","success-message":"Looks good!"},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1)]),e._v(" "),t("div",{staticClass:"form-row"},[t("div",{staticClass:"col-md-6"},[t("base-input",{attrs:{label:"City",name:"City",rules:"required",placeholder:"City","success-message":"Looks good!"},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"State",name:"State",rules:"required",placeholder:"State","success-message":"Looks good!"},model:{value:e.model.state,callback:function(t){e.$set(e.model,"state",t)},expression:"model.state"}})],1),e._v(" "),t("div",{staticClass:"col-md-3"},[t("base-input",{attrs:{label:"Zip",name:"Zip",rules:"required",placeholder:"Zip","success-message":"Looks good!"},model:{value:e.model.zip,callback:function(t){e.$set(e.model,"zip",t)},expression:"model.zip"}})],1)]),e._v(" "),t("base-input",{attrs:{rules:{required:{allowFalse:!1}},name:"Terms"}},[t("base-checkbox",{model:{value:e.model.agree,callback:function(t){e.$set(e.model,"agree",t)},expression:"model.agree"}},[e._v("\n          Agree to terms and conditions\n        ")])],1),e._v(" "),t("base-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("Submit form")])],1)]}}])})],1)}),[],!1,null,null,null);t.a=component.exports},419:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(129);var o=n(170),l=n(89);function c(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||Object(o.a)(e)||Object(l.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},437:function(e,t,n){"use strict";var r=n(12),o=n(438),l=n(246),c=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(l);r(r.P+r.F*c,"String",{padStart:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},438:function(e,t,n){var r=n(35),o=n(247),l=n(47);e.exports=function(e,t,n,c){var d=String(l(e)),m=d.length,v=void 0===n?" ":String(n),f=r(t);if(f<=m||""==v)return d;var h=f-m,y=o.call(v,Math.ceil(h/v.length));return y.length>h&&(y=y.slice(0,h)),c?y+d:d+y}},739:function(e,t,n){},740:function(e,t,n){},967:function(e,t,n){"use strict";n(739)},968:function(e,t,n){"use strict";n(740)}}]);