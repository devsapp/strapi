"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[2544],{5790:(e,t,a)=>{var r=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(53547)),l=a(94117),o=a(39272),u=a(40264),i=a(9524),s=a(33483),d=a(78607),c=a(99136),f=a(64459),p=r(a(45697)),m=a(97132),g=function(e){var t=e.disabled,a=e.role,r=e.values,p=e.errors,g=e.onChange,b=e.onBlur,v=(0,m.useIntl)().formatMessage;return n.default.createElement(n.default.Fragment,null,n.default.createElement(l.Box,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},n.default.createElement(i.Stack,{size:4},n.default.createElement(u.Flex,{justifyContent:"space-between"},n.default.createElement(l.Box,null,n.default.createElement(l.Box,null,n.default.createElement(s.Typography,{fontWeight:"bold"},a?a.name:v({id:"Settings.roles.form.title",defaultMessage:"Details"}))),n.default.createElement(l.Box,null,n.default.createElement(s.Typography,{textColor:"neutral500",variant:"pi"},a?a.description:v({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})))),n.default.createElement(f.Button,{disabled:!0,variant:"secondary"},v({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:a.usersCount}))),n.default.createElement(o.Grid,{gap:4},n.default.createElement(o.GridItem,{col:6},n.default.createElement(c.TextInput,{disabled:t,name:"name",error:p.name&&v({id:p.name}),label:v({id:"Settings.roles.form.input.name",defaultMessage:"Name"}),onChange:g,onBlur:b,value:r.name||""})),n.default.createElement(o.GridItem,{col:6},n.default.createElement(d.Textarea,{disabled:t,label:v({id:"Settings.roles.form.input.description",defaultMessage:"Description"}),name:"description",error:p.name&&v({id:p.name}),onChange:g,onBlur:b},r.description||""))))))};g.defaultProps={disabled:!1,role:null,values:{name:"",description:""}},g.propTypes={disabled:p.default.bool,errors:p.default.object.isRequired,onBlur:p.default.func.isRequired,onChange:p.default.func.isRequired,role:p.default.object,values:p.default.object};var b=g;t.default=b},4397:(e,t,a)=>{var r=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Permissions",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"RoleForm",{enumerable:!0,get:function(){return l.default}});var n=r(a(74716)),l=r(a(5790))},46781:(e,t,a)=>{var r=a(25108),n=a(95318),l=a(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(87757)),u=n(a(48926)),i=n(a(63038)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!==typeof e)return{default:e};var a=j(t);if(a&&a.has(e))return a.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e,a&&a.set(e,r);return r}(a(53547)),d=a(68547),c=a(94117),f=a(64459),p=a(35395),m=a(80117),g=a(9524),b=a(80831),v=a(56156),h=n(a(87760)),y=n(a(27361)),E=a(97132),k=a(39711),O=a(4397),P=a(63376),M=n(a(88245));function j(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(j=function(e){return e?a:t})(e)}var w=function(){var e=(0,d.useNotification)(),t=(0,E.useIntl)().formatMessage,a=(0,k.useRouteMatch)("/settings/roles/:id").params.id,n=(0,s.useState)(!1),l=(0,i.default)(n,2),j=l[0],w=l[1],S=(0,s.useRef)(),B=(0,d.useOverlayBlocker)(),C=B.lockApp,R=B.unlockApp,_=(0,d.useTracking)().trackUsage,x=(0,P.useFetchPermissionsLayout)(a),L=x.isLoading,D=x.data,F=(0,P.useFetchRole)(a),T=F.role,W=F.permissions,A=F.isLoading,I=F.onSubmitSucceeded,q=function(){var t=(0,u.default)(o.default.mark((function t(n){var l,u,i,s,c;return o.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,C(),w(!0),l=S.current.getPermissions(),u=l.permissionsToSend,i=l.didUpdateConditions,t.next=6,(0,d.request)("/admin/roles/".concat(a),{method:"PUT",body:n});case 6:if("strapi-super-admin"===T.code){t.next=10;break}return t.next=9,(0,d.request)("/admin/roles/".concat(a,"/permissions"),{method:"PUT",body:{permissions:u}});case 9:i&&_("didUpdateConditions");case 10:S.current.setFormAfterSubmit(),I({name:n.name,description:n.description}),e({type:"success",message:{id:"notification.success.saved"}}),t.next=21;break;case 15:t.prev=15,t.t0=t.catch(0),r.error(t.t0.response),s=(0,y.default)(t.t0,"response.payload.message","An error occured"),c=(0,y.default)(t.t0,"response.payload.data.permissions[0]",s),e({type:"warning",message:c});case 21:return t.prev=21,w(!1),R(),t.finish(21);case 25:case"end":return t.stop()}}),t,null,[[0,15,21,25]])})));return function(e){return t.apply(this,arguments)}}(),z="strapi-super-admin"===T.code;return s.default.createElement(m.Main,null,s.default.createElement(d.SettingsPageTitle,{name:"Roles"}),s.default.createElement(b.Formik,{enableReinitialize:!0,initialValues:{name:T.name,description:T.description},onSubmit:q,validationSchema:M.default,validateOnChange:!1},(function(e){var a=e.handleSubmit,r=e.values,n=e.errors,l=e.handleChange,o=e.handleBlur;return s.default.createElement("form",{onSubmit:a},s.default.createElement(s.default.Fragment,null,s.default.createElement(p.HeaderLayout,{primaryAction:s.default.createElement(g.Stack,{horizontal:!0,size:2},s.default.createElement(f.Button,{disabled:"strapi-super-admin"===T.code,onClick:a,loading:j,size:"L"},t({id:"app.components.Button.save",defaultMessage:"Save"}))),title:t({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:t({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:s.default.createElement(v.Link,{startIcon:s.default.createElement(h.default,null),to:"/settings/roles"},t({id:"app.components.go-back",defaultMessage:"Back"}))}),s.default.createElement(p.ContentLayout,null,s.default.createElement(g.Stack,{size:6},s.default.createElement(O.RoleForm,{isLoading:A,disabled:z,errors:n,values:r,onChange:l,onBlur:o,role:T}),L||A?s.default.createElement(c.Box,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},s.default.createElement(d.LoadingIndicatorPage,null)):s.default.createElement(c.Box,{shadow:"filterShadow",hasRadius:!0},s.default.createElement(O.Permissions,{isFormDisabled:z,permissions:W,ref:S,layout:D}))))))})))};t.default=w},88245:(e,t,a)=>{var r=a(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var a=o(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=l?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}n.default=e,a&&a.set(e,n);return n}(a(63600)),l=a(68547);function o(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(o=function(e){return e?a:t})(e)}var u=n.object().shape({name:n.string().required(l.translatedErrors.required)});t.default=u},19144:(e,t,a)=>{var r=a(95318),n=a(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var a=d(t);if(a&&a.has(e))return a.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e,a&&a.set(e,r);return r}(a(53547)),o=a(68547),u=a(39711),i=r(a(13240)),s=r(a(46781));function d(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(d=function(e){return e?a:t})(e)}var c=function(){var e=(0,l.useMemo)((function(){return{read:i.default.settings.roles.read,update:i.default.settings.roles.update}}),[]),t=(0,o.useRBAC)(e),a=t.isLoading,r=t.allowedActions,n=r.canRead,d=r.canUpdate;return a?l.default.createElement(o.LoadingIndicatorPage,null):n||d?l.default.createElement(s.default,null):l.default.createElement(u.Redirect,{to:"/"})};t.default=c}}]);