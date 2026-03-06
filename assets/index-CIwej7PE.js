(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))d(h);new MutationObserver(h=>{for(const w of h)if(w.type==="childList")for(const C of w.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&d(C)}).observe(document,{childList:!0,subtree:!0});function s(h){const w={};return h.integrity&&(w.integrity=h.integrity),h.referrerPolicy&&(w.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?w.credentials="include":h.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function d(h){if(h.ep)return;h.ep=!0;const w=s(h);fetch(h.href,w)}})();function eh(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Da={exports:{}},si={},Aa={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ed;function th(){if(ed)return ne;ed=1;var o=Symbol.for("react.element"),u=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),C=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),K=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),W=Symbol.iterator;function Z(g){return g===null||typeof g!="object"?null:(g=W&&g[W]||g["@@iterator"],typeof g=="function"?g:null)}var ae={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,U={};function Y(g,j,J){this.props=g,this.context=j,this.refs=U,this.updater=J||ae}Y.prototype.isReactComponent={},Y.prototype.setState=function(g,j){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,j,"setState")},Y.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function he(){}he.prototype=Y.prototype;function ue(g,j,J){this.props=g,this.context=j,this.refs=U,this.updater=J||ae}var re=ue.prototype=new he;re.constructor=ue,X(re,Y.prototype),re.isPureReactComponent=!0;var I=Array.isArray,q=Object.prototype.hasOwnProperty,H={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function F(g,j,J){var ee,le={},ie=null,ce=null;if(j!=null)for(ee in j.ref!==void 0&&(ce=j.ref),j.key!==void 0&&(ie=""+j.key),j)q.call(j,ee)&&!P.hasOwnProperty(ee)&&(le[ee]=j[ee]);var se=arguments.length-2;if(se===1)le.children=J;else if(1<se){for(var me=Array(se),Ee=0;Ee<se;Ee++)me[Ee]=arguments[Ee+2];le.children=me}if(g&&g.defaultProps)for(ee in se=g.defaultProps,se)le[ee]===void 0&&(le[ee]=se[ee]);return{$$typeof:o,type:g,key:ie,ref:ce,props:le,_owner:H.current}}function xe(g,j){return{$$typeof:o,type:g.type,key:j,ref:g.ref,props:g.props,_owner:g._owner}}function Ie(g){return typeof g=="object"&&g!==null&&g.$$typeof===o}function oe(g){var j={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(J){return j[J]})}var Te=/\/+/g;function Ce(g,j){return typeof g=="object"&&g!==null&&g.key!=null?oe(""+g.key):j.toString(36)}function Ge(g,j,J,ee,le){var ie=typeof g;(ie==="undefined"||ie==="boolean")&&(g=null);var ce=!1;if(g===null)ce=!0;else switch(ie){case"string":case"number":ce=!0;break;case"object":switch(g.$$typeof){case o:case u:ce=!0}}if(ce)return ce=g,le=le(ce),g=ee===""?"."+Ce(ce,0):ee,I(le)?(J="",g!=null&&(J=g.replace(Te,"$&/")+"/"),Ge(le,j,J,"",function(Ee){return Ee})):le!=null&&(Ie(le)&&(le=xe(le,J+(!le.key||ce&&ce.key===le.key?"":(""+le.key).replace(Te,"$&/")+"/")+g)),j.push(le)),1;if(ce=0,ee=ee===""?".":ee+":",I(g))for(var se=0;se<g.length;se++){ie=g[se];var me=ee+Ce(ie,se);ce+=Ge(ie,j,J,me,le)}else if(me=Z(g),typeof me=="function")for(g=me.call(g),se=0;!(ie=g.next()).done;)ie=ie.value,me=ee+Ce(ie,se++),ce+=Ge(ie,j,J,me,le);else if(ie==="object")throw j=String(g),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return ce}function Ze(g,j,J){if(g==null)return g;var ee=[],le=0;return Ge(g,ee,"","",function(ie){return j.call(J,ie,le++)}),ee}function Ye(g){if(g._status===-1){var j=g._result;j=j(),j.then(function(J){(g._status===0||g._status===-1)&&(g._status=1,g._result=J)},function(J){(g._status===0||g._status===-1)&&(g._status=2,g._result=J)}),g._status===-1&&(g._status=0,g._result=j)}if(g._status===1)return g._result.default;throw g._result}var ve={current:null},T={transition:null},B={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:T,ReactCurrentOwner:H};function L(){throw Error("act(...) is not supported in production builds of React.")}return ne.Children={map:Ze,forEach:function(g,j,J){Ze(g,function(){j.apply(this,arguments)},J)},count:function(g){var j=0;return Ze(g,function(){j++}),j},toArray:function(g){return Ze(g,function(j){return j})||[]},only:function(g){if(!Ie(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},ne.Component=Y,ne.Fragment=s,ne.Profiler=h,ne.PureComponent=ue,ne.StrictMode=d,ne.Suspense=b,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,ne.act=L,ne.cloneElement=function(g,j,J){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var ee=X({},g.props),le=g.key,ie=g.ref,ce=g._owner;if(j!=null){if(j.ref!==void 0&&(ie=j.ref,ce=H.current),j.key!==void 0&&(le=""+j.key),g.type&&g.type.defaultProps)var se=g.type.defaultProps;for(me in j)q.call(j,me)&&!P.hasOwnProperty(me)&&(ee[me]=j[me]===void 0&&se!==void 0?se[me]:j[me])}var me=arguments.length-2;if(me===1)ee.children=J;else if(1<me){se=Array(me);for(var Ee=0;Ee<me;Ee++)se[Ee]=arguments[Ee+2];ee.children=se}return{$$typeof:o,type:g.type,key:le,ref:ie,props:ee,_owner:ce}},ne.createContext=function(g){return g={$$typeof:C,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:w,_context:g},g.Consumer=g},ne.createElement=F,ne.createFactory=function(g){var j=F.bind(null,g);return j.type=g,j},ne.createRef=function(){return{current:null}},ne.forwardRef=function(g){return{$$typeof:z,render:g}},ne.isValidElement=Ie,ne.lazy=function(g){return{$$typeof:G,_payload:{_status:-1,_result:g},_init:Ye}},ne.memo=function(g,j){return{$$typeof:K,type:g,compare:j===void 0?null:j}},ne.startTransition=function(g){var j=T.transition;T.transition={};try{g()}finally{T.transition=j}},ne.unstable_act=L,ne.useCallback=function(g,j){return ve.current.useCallback(g,j)},ne.useContext=function(g){return ve.current.useContext(g)},ne.useDebugValue=function(){},ne.useDeferredValue=function(g){return ve.current.useDeferredValue(g)},ne.useEffect=function(g,j){return ve.current.useEffect(g,j)},ne.useId=function(){return ve.current.useId()},ne.useImperativeHandle=function(g,j,J){return ve.current.useImperativeHandle(g,j,J)},ne.useInsertionEffect=function(g,j){return ve.current.useInsertionEffect(g,j)},ne.useLayoutEffect=function(g,j){return ve.current.useLayoutEffect(g,j)},ne.useMemo=function(g,j){return ve.current.useMemo(g,j)},ne.useReducer=function(g,j,J){return ve.current.useReducer(g,j,J)},ne.useRef=function(g){return ve.current.useRef(g)},ne.useState=function(g){return ve.current.useState(g)},ne.useSyncExternalStore=function(g,j,J){return ve.current.useSyncExternalStore(g,j,J)},ne.useTransition=function(){return ve.current.useTransition()},ne.version="18.3.1",ne}var td;function es(){return td||(td=1,Aa.exports=th()),Aa.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rd;function rh(){if(rd)return si;rd=1;var o=es(),u=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,h=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function C(z,b,K){var G,W={},Z=null,ae=null;K!==void 0&&(Z=""+K),b.key!==void 0&&(Z=""+b.key),b.ref!==void 0&&(ae=b.ref);for(G in b)d.call(b,G)&&!w.hasOwnProperty(G)&&(W[G]=b[G]);if(z&&z.defaultProps)for(G in b=z.defaultProps,b)W[G]===void 0&&(W[G]=b[G]);return{$$typeof:u,type:z,key:Z,ref:ae,props:W,_owner:h.current}}return si.Fragment=s,si.jsx=C,si.jsxs=C,si}var nd;function nh(){return nd||(nd=1,Da.exports=rh()),Da.exports}var a=nh(),Eo={},Fa={exports:{}},lt={},Ma={exports:{}},Ba={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var id;function ih(){return id||(id=1,(function(o){function u(T,B){var L=T.length;T.push(B);e:for(;0<L;){var g=L-1>>>1,j=T[g];if(0<h(j,B))T[g]=B,T[L]=j,L=g;else break e}}function s(T){return T.length===0?null:T[0]}function d(T){if(T.length===0)return null;var B=T[0],L=T.pop();if(L!==B){T[0]=L;e:for(var g=0,j=T.length,J=j>>>1;g<J;){var ee=2*(g+1)-1,le=T[ee],ie=ee+1,ce=T[ie];if(0>h(le,L))ie<j&&0>h(ce,le)?(T[g]=ce,T[ie]=L,g=ie):(T[g]=le,T[ee]=L,g=ee);else if(ie<j&&0>h(ce,L))T[g]=ce,T[ie]=L,g=ie;else break e}}return B}function h(T,B){var L=T.sortIndex-B.sortIndex;return L!==0?L:T.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;o.unstable_now=function(){return w.now()}}else{var C=Date,z=C.now();o.unstable_now=function(){return C.now()-z}}var b=[],K=[],G=1,W=null,Z=3,ae=!1,X=!1,U=!1,Y=typeof setTimeout=="function"?setTimeout:null,he=typeof clearTimeout=="function"?clearTimeout:null,ue=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function re(T){for(var B=s(K);B!==null;){if(B.callback===null)d(K);else if(B.startTime<=T)d(K),B.sortIndex=B.expirationTime,u(b,B);else break;B=s(K)}}function I(T){if(U=!1,re(T),!X)if(s(b)!==null)X=!0,Ye(q);else{var B=s(K);B!==null&&ve(I,B.startTime-T)}}function q(T,B){X=!1,U&&(U=!1,he(F),F=-1),ae=!0;var L=Z;try{for(re(B),W=s(b);W!==null&&(!(W.expirationTime>B)||T&&!oe());){var g=W.callback;if(typeof g=="function"){W.callback=null,Z=W.priorityLevel;var j=g(W.expirationTime<=B);B=o.unstable_now(),typeof j=="function"?W.callback=j:W===s(b)&&d(b),re(B)}else d(b);W=s(b)}if(W!==null)var J=!0;else{var ee=s(K);ee!==null&&ve(I,ee.startTime-B),J=!1}return J}finally{W=null,Z=L,ae=!1}}var H=!1,P=null,F=-1,xe=5,Ie=-1;function oe(){return!(o.unstable_now()-Ie<xe)}function Te(){if(P!==null){var T=o.unstable_now();Ie=T;var B=!0;try{B=P(!0,T)}finally{B?Ce():(H=!1,P=null)}}else H=!1}var Ce;if(typeof ue=="function")Ce=function(){ue(Te)};else if(typeof MessageChannel!="undefined"){var Ge=new MessageChannel,Ze=Ge.port2;Ge.port1.onmessage=Te,Ce=function(){Ze.postMessage(null)}}else Ce=function(){Y(Te,0)};function Ye(T){P=T,H||(H=!0,Ce())}function ve(T,B){F=Y(function(){T(o.unstable_now())},B)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(T){T.callback=null},o.unstable_continueExecution=function(){X||ae||(X=!0,Ye(q))},o.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xe=0<T?Math.floor(1e3/T):5},o.unstable_getCurrentPriorityLevel=function(){return Z},o.unstable_getFirstCallbackNode=function(){return s(b)},o.unstable_next=function(T){switch(Z){case 1:case 2:case 3:var B=3;break;default:B=Z}var L=Z;Z=B;try{return T()}finally{Z=L}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(T,B){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var L=Z;Z=T;try{return B()}finally{Z=L}},o.unstable_scheduleCallback=function(T,B,L){var g=o.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?g+L:g):L=g,T){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=L+j,T={id:G++,callback:B,priorityLevel:T,startTime:L,expirationTime:j,sortIndex:-1},L>g?(T.sortIndex=L,u(K,T),s(b)===null&&T===s(K)&&(U?(he(F),F=-1):U=!0,ve(I,L-g))):(T.sortIndex=j,u(b,T),X||ae||(X=!0,Ye(q))),T},o.unstable_shouldYield=oe,o.unstable_wrapCallback=function(T){var B=Z;return function(){var L=Z;Z=B;try{return T.apply(this,arguments)}finally{Z=L}}}})(Ba)),Ba}var od;function oh(){return od||(od=1,Ma.exports=ih()),Ma.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ld;function lh(){if(ld)return lt;ld=1;var o=es(),u=oh();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,h={};function w(e,t){C(e,t),C(e+"Capture",t)}function C(e,t){for(h[e]=t,e=0;e<t.length;e++)d.add(t[e])}var z=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),b=Object.prototype.hasOwnProperty,K=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,G={},W={};function Z(e){return b.call(W,e)?!0:b.call(G,e)?!1:K.test(e)?W[e]=!0:(G[e]=!0,!1)}function ae(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function X(e,t,r,n){if(t===null||typeof t=="undefined"||ae(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function U(e,t,r,n,i,l,c){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=c}var Y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Y[e]=new U(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Y[t]=new U(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Y[e]=new U(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Y[e]=new U(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Y[e]=new U(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Y[e]=new U(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Y[e]=new U(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Y[e]=new U(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Y[e]=new U(e,5,!1,e.toLowerCase(),null,!1,!1)});var he=/[\-:]([a-z])/g;function ue(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(he,ue);Y[t]=new U(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(he,ue);Y[t]=new U(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(he,ue);Y[t]=new U(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Y[e]=new U(e,1,!1,e.toLowerCase(),null,!1,!1)}),Y.xlinkHref=new U("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Y[e]=new U(e,1,!1,e.toLowerCase(),null,!0,!0)});function re(e,t,r,n){var i=Y.hasOwnProperty(t)?Y[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(X(t,r,i,n)&&(r=null),n||i===null?Z(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var I=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,q=Symbol.for("react.element"),H=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),xe=Symbol.for("react.profiler"),Ie=Symbol.for("react.provider"),oe=Symbol.for("react.context"),Te=Symbol.for("react.forward_ref"),Ce=Symbol.for("react.suspense"),Ge=Symbol.for("react.suspense_list"),Ze=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),ve=Symbol.for("react.offscreen"),T=Symbol.iterator;function B(e){return e===null||typeof e!="object"?null:(e=T&&e[T]||e["@@iterator"],typeof e=="function"?e:null)}var L=Object.assign,g;function j(e){if(g===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);g=t&&t[1]||""}return`
`+g+e}var J=!1;function ee(e,t){if(!e||J)return"";J=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(y){var n=y}Reflect.construct(e,[],t)}else{try{t.call()}catch(y){n=y}e.call(t.prototype)}else{try{throw Error()}catch(y){n=y}e()}}catch(y){if(y&&n&&typeof y.stack=="string"){for(var i=y.stack.split(`
`),l=n.stack.split(`
`),c=i.length-1,p=l.length-1;1<=c&&0<=p&&i[c]!==l[p];)p--;for(;1<=c&&0<=p;c--,p--)if(i[c]!==l[p]){if(c!==1||p!==1)do if(c--,p--,0>p||i[c]!==l[p]){var f=`
`+i[c].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=c&&0<=p);break}}}finally{J=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?j(e):""}function le(e){switch(e.tag){case 5:return j(e.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return e=ee(e.type,!1),e;case 11:return e=ee(e.type.render,!1),e;case 1:return e=ee(e.type,!0),e;default:return""}}function ie(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case P:return"Fragment";case H:return"Portal";case xe:return"Profiler";case F:return"StrictMode";case Ce:return"Suspense";case Ge:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case oe:return(e.displayName||"Context")+".Consumer";case Ie:return(e._context.displayName||"Context")+".Provider";case Te:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ze:return t=e.displayName||null,t!==null?t:ie(e.type)||"Memo";case Ye:t=e._payload,e=e._init;try{return ie(e(t))}catch{}}return null}function ce(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(t);case 8:return t===F?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function se(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function me(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ee(e){var t=me(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r!="undefined"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,l=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(c){n=""+c,l.call(this,c)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(c){n=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function tr(e){e._valueTracker||(e._valueTracker=Ee(e))}function Nr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=me(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function jt(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ho(e,t){var r=t.checked;return L({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r!=null?r:e._wrapperState.initialChecked})}function as(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=se(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ss(e,t){t=t.checked,t!=null&&re(e,"checked",t,!1)}function $o(e,t){ss(e,t);var r=se(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Vo(e,t.type,r):t.hasOwnProperty("defaultValue")&&Vo(e,t.type,se(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function us(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Vo(e,t,r){(t!=="number"||jt(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Sn=Array.isArray;function $r(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+se(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Go(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return L({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cs(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(s(92));if(Sn(r)){if(1<r.length)throw Error(s(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:se(r)}}function ds(e,t){var r=se(t.value),n=se(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function ps(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xi,hs=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xi=xi||document.createElement("div"),xi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Cn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Nn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},np=["Webkit","ms","Moz","O"];Object.keys(Nn).forEach(function(e){np.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Nn[t]=Nn[e]})});function ms(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Nn.hasOwnProperty(e)&&Nn[e]?(""+t).trim():t+"px"}function gs(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=ms(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var ip=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qo(e,t){if(t){if(ip[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function Ko(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xo=null;function qo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zo=null,Vr=null,Gr=null;function xs(e){if(e=Yn(e)){if(typeof Zo!="function")throw Error(s(280));var t=e.stateNode;t&&(t=Bi(t),Zo(e.stateNode,e.type,t))}}function vs(e){Vr?Gr?Gr.push(e):Gr=[e]:Vr=e}function ys(){if(Vr){var e=Vr,t=Gr;if(Gr=Vr=null,xs(e),t)for(e=0;e<t.length;e++)xs(t[e])}}function ws(e,t){return e(t)}function js(){}var Jo=!1;function ks(e,t,r){if(Jo)return e(t,r);Jo=!0;try{return ws(e,t,r)}finally{Jo=!1,(Vr!==null||Gr!==null)&&(js(),ys())}}function En(e,t){var r=e.stateNode;if(r===null)return null;var n=Bi(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(s(231,t,typeof r));return r}var el=!1;if(z)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){el=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{el=!1}function op(e,t,r,n,i,l,c,p,f){var y=Array.prototype.slice.call(arguments,3);try{t.apply(r,y)}catch(S){this.onError(S)}}var _n=!1,vi=null,yi=!1,tl=null,lp={onError:function(e){_n=!0,vi=e}};function ap(e,t,r,n,i,l,c,p,f){_n=!1,vi=null,op.apply(lp,arguments)}function sp(e,t,r,n,i,l,c,p,f){if(ap.apply(this,arguments),_n){if(_n){var y=vi;_n=!1,vi=null}else throw Error(s(198));yi||(yi=!0,tl=y)}}function Er(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Ss(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cs(e){if(Er(e)!==e)throw Error(s(188))}function up(e){var t=e.alternate;if(!t){if(t=Er(e),t===null)throw Error(s(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var l=i.alternate;if(l===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===r)return Cs(i),e;if(l===n)return Cs(i),t;l=l.sibling}throw Error(s(188))}if(r.return!==n.return)r=i,n=l;else{for(var c=!1,p=i.child;p;){if(p===r){c=!0,r=i,n=l;break}if(p===n){c=!0,n=i,r=l;break}p=p.sibling}if(!c){for(p=l.child;p;){if(p===r){c=!0,r=l,n=i;break}if(p===n){c=!0,n=l,r=i;break}p=p.sibling}if(!c)throw Error(s(189))}}if(r.alternate!==n)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?e:t}function Ns(e){return e=up(e),e!==null?Es(e):null}function Es(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Es(e);if(t!==null)return t;e=e.sibling}return null}var bs=u.unstable_scheduleCallback,_s=u.unstable_cancelCallback,cp=u.unstable_shouldYield,dp=u.unstable_requestPaint,Le=u.unstable_now,pp=u.unstable_getCurrentPriorityLevel,rl=u.unstable_ImmediatePriority,Ts=u.unstable_UserBlockingPriority,wi=u.unstable_NormalPriority,fp=u.unstable_LowPriority,Ps=u.unstable_IdlePriority,ji=null,zt=null;function hp(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(ji,e,void 0,(e.current.flags&128)===128)}catch{}}var kt=Math.clz32?Math.clz32:xp,mp=Math.log,gp=Math.LN2;function xp(e){return e>>>=0,e===0?32:31-(mp(e)/gp|0)|0}var ki=64,Si=4194304;function Tn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ci(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,l=e.pingedLanes,c=r&268435455;if(c!==0){var p=c&~i;p!==0?n=Tn(p):(l&=c,l!==0&&(n=Tn(l)))}else c=r&~i,c!==0?n=Tn(c):l!==0&&(n=Tn(l));if(n===0)return 0;if(t!==0&&t!==n&&(t&i)===0&&(i=n&-n,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if((n&4)!==0&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-kt(t),i=1<<r,n|=e[r],t&=~i;return n}function vp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yp(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var c=31-kt(l),p=1<<c,f=i[c];f===-1?((p&r)===0||(p&n)!==0)&&(i[c]=vp(p,t)):f<=t&&(e.expiredLanes|=p),l&=~p}}function nl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zs(){var e=ki;return ki<<=1,(ki&4194240)===0&&(ki=64),e}function il(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Pn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-kt(t),e[t]=r}function wp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-kt(r),l=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~l}}function ol(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-kt(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var ge=0;function Is(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ls,ll,Rs,Os,Ds,al=!1,Ni=[],rr=null,nr=null,ir=null,zn=new Map,In=new Map,or=[],jp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function As(e,t){switch(e){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":zn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":In.delete(t.pointerId)}}function Ln(e,t,r,n,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Yn(t),t!==null&&ll(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function kp(e,t,r,n,i){switch(t){case"focusin":return rr=Ln(rr,e,t,r,n,i),!0;case"dragenter":return nr=Ln(nr,e,t,r,n,i),!0;case"mouseover":return ir=Ln(ir,e,t,r,n,i),!0;case"pointerover":var l=i.pointerId;return zn.set(l,Ln(zn.get(l)||null,e,t,r,n,i)),!0;case"gotpointercapture":return l=i.pointerId,In.set(l,Ln(In.get(l)||null,e,t,r,n,i)),!0}return!1}function Fs(e){var t=br(e.target);if(t!==null){var r=Er(t);if(r!==null){if(t=r.tag,t===13){if(t=Ss(r),t!==null){e.blockedOn=t,Ds(e.priority,function(){Rs(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ei(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=ul(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Xo=n,r.target.dispatchEvent(n),Xo=null}else return t=Yn(r),t!==null&&ll(t),e.blockedOn=r,!1;t.shift()}return!0}function Ms(e,t,r){Ei(e)&&r.delete(t)}function Sp(){al=!1,rr!==null&&Ei(rr)&&(rr=null),nr!==null&&Ei(nr)&&(nr=null),ir!==null&&Ei(ir)&&(ir=null),zn.forEach(Ms),In.forEach(Ms)}function Rn(e,t){e.blockedOn===t&&(e.blockedOn=null,al||(al=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,Sp)))}function On(e){function t(i){return Rn(i,e)}if(0<Ni.length){Rn(Ni[0],e);for(var r=1;r<Ni.length;r++){var n=Ni[r];n.blockedOn===e&&(n.blockedOn=null)}}for(rr!==null&&Rn(rr,e),nr!==null&&Rn(nr,e),ir!==null&&Rn(ir,e),zn.forEach(t),In.forEach(t),r=0;r<or.length;r++)n=or[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<or.length&&(r=or[0],r.blockedOn===null);)Fs(r),r.blockedOn===null&&or.shift()}var Yr=I.ReactCurrentBatchConfig,bi=!0;function Cp(e,t,r,n){var i=ge,l=Yr.transition;Yr.transition=null;try{ge=1,sl(e,t,r,n)}finally{ge=i,Yr.transition=l}}function Np(e,t,r,n){var i=ge,l=Yr.transition;Yr.transition=null;try{ge=4,sl(e,t,r,n)}finally{ge=i,Yr.transition=l}}function sl(e,t,r,n){if(bi){var i=ul(e,t,r,n);if(i===null)El(e,t,n,_i,r),As(e,n);else if(kp(i,e,t,r,n))n.stopPropagation();else if(As(e,n),t&4&&-1<jp.indexOf(e)){for(;i!==null;){var l=Yn(i);if(l!==null&&Ls(l),l=ul(e,t,r,n),l===null&&El(e,t,n,_i,r),l===i)break;i=l}i!==null&&n.stopPropagation()}else El(e,t,n,null,r)}}var _i=null;function ul(e,t,r,n){if(_i=null,e=qo(n),e=br(e),e!==null)if(t=Er(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Ss(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return _i=e,null}function Bs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pp()){case rl:return 1;case Ts:return 4;case wi:case fp:return 16;case Ps:return 536870912;default:return 16}default:return 16}}var lr=null,cl=null,Ti=null;function Ws(){if(Ti)return Ti;var e,t=cl,r=t.length,n,i="value"in lr?lr.value:lr.textContent,l=i.length;for(e=0;e<r&&t[e]===i[e];e++);var c=r-e;for(n=1;n<=c&&t[r-n]===i[l-n];n++);return Ti=i.slice(e,1<n?1-n:void 0)}function Pi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zi(){return!0}function Us(){return!1}function st(e){function t(r,n,i,l,c){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=l,this.target=c,this.currentTarget=null;for(var p in e)e.hasOwnProperty(p)&&(r=e[p],this[p]=r?r(l):l[p]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?zi:Us,this.isPropagationStopped=Us,this}return L(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=zi)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=zi)},persist:function(){},isPersistent:zi}),t}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dl=st(Qr),Dn=L({},Qr,{view:0,detail:0}),Ep=st(Dn),pl,fl,An,Ii=L({},Dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ml,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==An&&(An&&e.type==="mousemove"?(pl=e.screenX-An.screenX,fl=e.screenY-An.screenY):fl=pl=0,An=e),pl)},movementY:function(e){return"movementY"in e?e.movementY:fl}}),Hs=st(Ii),bp=L({},Ii,{dataTransfer:0}),_p=st(bp),Tp=L({},Dn,{relatedTarget:0}),hl=st(Tp),Pp=L({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),zp=st(Pp),Ip=L({},Qr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lp=st(Ip),Rp=L({},Qr,{data:0}),$s=st(Rp),Op={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ap={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ap[e])?!!t[e]:!1}function ml(){return Fp}var Mp=L({},Dn,{key:function(e){if(e.key){var t=Op[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ml,charCode:function(e){return e.type==="keypress"?Pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bp=st(Mp),Wp=L({},Ii,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vs=st(Wp),Up=L({},Dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ml}),Hp=st(Up),$p=L({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vp=st($p),Gp=L({},Ii,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yp=st(Gp),Qp=[9,13,27,32],gl=z&&"CompositionEvent"in window,Fn=null;z&&"documentMode"in document&&(Fn=document.documentMode);var Kp=z&&"TextEvent"in window&&!Fn,Gs=z&&(!gl||Fn&&8<Fn&&11>=Fn),Ys=" ",Qs=!1;function Ks(e,t){switch(e){case"keyup":return Qp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kr=!1;function Xp(e,t){switch(e){case"compositionend":return Xs(t);case"keypress":return t.which!==32?null:(Qs=!0,Ys);case"textInput":return e=t.data,e===Ys&&Qs?null:e;default:return null}}function qp(e,t){if(Kr)return e==="compositionend"||!gl&&Ks(e,t)?(e=Ws(),Ti=cl=lr=null,Kr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gs&&t.locale!=="ko"?null:t.data;default:return null}}var Zp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Zp[e.type]:t==="textarea"}function Zs(e,t,r,n){vs(n),t=Ai(t,"onChange"),0<t.length&&(r=new dl("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Mn=null,Bn=null;function Jp(e){gu(e,0)}function Li(e){var t=en(e);if(Nr(t))return e}function ef(e,t){if(e==="change")return t}var Js=!1;if(z){var xl;if(z){var vl="oninput"in document;if(!vl){var eu=document.createElement("div");eu.setAttribute("oninput","return;"),vl=typeof eu.oninput=="function"}xl=vl}else xl=!1;Js=xl&&(!document.documentMode||9<document.documentMode)}function tu(){Mn&&(Mn.detachEvent("onpropertychange",ru),Bn=Mn=null)}function ru(e){if(e.propertyName==="value"&&Li(Bn)){var t=[];Zs(t,Bn,e,qo(e)),ks(Jp,t)}}function tf(e,t,r){e==="focusin"?(tu(),Mn=t,Bn=r,Mn.attachEvent("onpropertychange",ru)):e==="focusout"&&tu()}function rf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Li(Bn)}function nf(e,t){if(e==="click")return Li(t)}function of(e,t){if(e==="input"||e==="change")return Li(t)}function lf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:lf;function Wn(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!b.call(t,i)||!St(e[i],t[i]))return!1}return!0}function nu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function iu(e,t){var r=nu(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=nu(r)}}function ou(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ou(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lu(){for(var e=window,t=jt();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=jt(e.document)}return t}function yl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function af(e){var t=lu(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&ou(r.ownerDocument.documentElement,r)){if(n!==null&&yl(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,l=Math.min(n.start,i);n=n.end===void 0?l:Math.min(n.end,i),!e.extend&&l>n&&(i=n,n=l,l=i),i=iu(r,l);var c=iu(r,n);i&&c&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>n?(e.addRange(t),e.extend(c.node,c.offset)):(t.setEnd(c.node,c.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sf=z&&"documentMode"in document&&11>=document.documentMode,Xr=null,wl=null,Un=null,jl=!1;function au(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;jl||Xr==null||Xr!==jt(n)||(n=Xr,"selectionStart"in n&&yl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Un&&Wn(Un,n)||(Un=n,n=Ai(wl,"onSelect"),0<n.length&&(t=new dl("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Xr)))}function Ri(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var qr={animationend:Ri("Animation","AnimationEnd"),animationiteration:Ri("Animation","AnimationIteration"),animationstart:Ri("Animation","AnimationStart"),transitionend:Ri("Transition","TransitionEnd")},kl={},su={};z&&(su=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function Oi(e){if(kl[e])return kl[e];if(!qr[e])return e;var t=qr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in su)return kl[e]=t[r];return e}var uu=Oi("animationend"),cu=Oi("animationiteration"),du=Oi("animationstart"),pu=Oi("transitionend"),fu=new Map,hu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(e,t){fu.set(e,t),w(t,[e])}for(var Sl=0;Sl<hu.length;Sl++){var Cl=hu[Sl],uf=Cl.toLowerCase(),cf=Cl[0].toUpperCase()+Cl.slice(1);ar(uf,"on"+cf)}ar(uu,"onAnimationEnd"),ar(cu,"onAnimationIteration"),ar(du,"onAnimationStart"),ar("dblclick","onDoubleClick"),ar("focusin","onFocus"),ar("focusout","onBlur"),ar(pu,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),df=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hn));function mu(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,sp(n,t,void 0,e),e.currentTarget=null}function gu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var l=void 0;if(t)for(var c=n.length-1;0<=c;c--){var p=n[c],f=p.instance,y=p.currentTarget;if(p=p.listener,f!==l&&i.isPropagationStopped())break e;mu(i,p,y),l=f}else for(c=0;c<n.length;c++){if(p=n[c],f=p.instance,y=p.currentTarget,p=p.listener,f!==l&&i.isPropagationStopped())break e;mu(i,p,y),l=f}}}if(yi)throw e=tl,yi=!1,tl=null,e}function je(e,t){var r=t[Il];r===void 0&&(r=t[Il]=new Set);var n=e+"__bubble";r.has(n)||(xu(t,e,2,!1),r.add(n))}function Nl(e,t,r){var n=0;t&&(n|=4),xu(r,e,n,t)}var Di="_reactListening"+Math.random().toString(36).slice(2);function $n(e){if(!e[Di]){e[Di]=!0,d.forEach(function(r){r!=="selectionchange"&&(df.has(r)||Nl(r,!1,e),Nl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Di]||(t[Di]=!0,Nl("selectionchange",!1,t))}}function xu(e,t,r,n){switch(Bs(t)){case 1:var i=Cp;break;case 4:i=Np;break;default:i=sl}r=i.bind(null,t,r,e),i=void 0,!el||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function El(e,t,r,n,i){var l=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var c=n.tag;if(c===3||c===4){var p=n.stateNode.containerInfo;if(p===i||p.nodeType===8&&p.parentNode===i)break;if(c===4)for(c=n.return;c!==null;){var f=c.tag;if((f===3||f===4)&&(f=c.stateNode.containerInfo,f===i||f.nodeType===8&&f.parentNode===i))return;c=c.return}for(;p!==null;){if(c=br(p),c===null)return;if(f=c.tag,f===5||f===6){n=l=c;continue e}p=p.parentNode}}n=n.return}ks(function(){var y=l,S=qo(r),N=[];e:{var k=fu.get(e);if(k!==void 0){var R=dl,D=e;switch(e){case"keypress":if(Pi(r)===0)break e;case"keydown":case"keyup":R=Bp;break;case"focusin":D="focus",R=hl;break;case"focusout":D="blur",R=hl;break;case"beforeblur":case"afterblur":R=hl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Hs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=_p;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=Hp;break;case uu:case cu:case du:R=zp;break;case pu:R=Vp;break;case"scroll":R=Ep;break;case"wheel":R=Yp;break;case"copy":case"cut":case"paste":R=Lp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Vs}var A=(t&4)!==0,Re=!A&&e==="scroll",x=A?k!==null?k+"Capture":null:k;A=[];for(var m=y,v;m!==null;){v=m;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,x!==null&&(E=En(m,x),E!=null&&A.push(Vn(m,E,v)))),Re)break;m=m.return}0<A.length&&(k=new R(k,D,null,r,S),N.push({event:k,listeners:A}))}}if((t&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",k&&r!==Xo&&(D=r.relatedTarget||r.fromElement)&&(br(D)||D[$t]))break e;if((R||k)&&(k=S.window===S?S:(k=S.ownerDocument)?k.defaultView||k.parentWindow:window,R?(D=r.relatedTarget||r.toElement,R=y,D=D?br(D):null,D!==null&&(Re=Er(D),D!==Re||D.tag!==5&&D.tag!==6)&&(D=null)):(R=null,D=y),R!==D)){if(A=Hs,E="onMouseLeave",x="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(A=Vs,E="onPointerLeave",x="onPointerEnter",m="pointer"),Re=R==null?k:en(R),v=D==null?k:en(D),k=new A(E,m+"leave",R,r,S),k.target=Re,k.relatedTarget=v,E=null,br(S)===y&&(A=new A(x,m+"enter",D,r,S),A.target=v,A.relatedTarget=Re,E=A),Re=E,R&&D)t:{for(A=R,x=D,m=0,v=A;v;v=Zr(v))m++;for(v=0,E=x;E;E=Zr(E))v++;for(;0<m-v;)A=Zr(A),m--;for(;0<v-m;)x=Zr(x),v--;for(;m--;){if(A===x||x!==null&&A===x.alternate)break t;A=Zr(A),x=Zr(x)}A=null}else A=null;R!==null&&vu(N,k,R,A,!1),D!==null&&Re!==null&&vu(N,Re,D,A,!0)}}e:{if(k=y?en(y):window,R=k.nodeName&&k.nodeName.toLowerCase(),R==="select"||R==="input"&&k.type==="file")var M=ef;else if(qs(k))if(Js)M=of;else{M=rf;var $=tf}else(R=k.nodeName)&&R.toLowerCase()==="input"&&(k.type==="checkbox"||k.type==="radio")&&(M=nf);if(M&&(M=M(e,y))){Zs(N,M,r,S);break e}$&&$(e,k,y),e==="focusout"&&($=k._wrapperState)&&$.controlled&&k.type==="number"&&Vo(k,"number",k.value)}switch($=y?en(y):window,e){case"focusin":(qs($)||$.contentEditable==="true")&&(Xr=$,wl=y,Un=null);break;case"focusout":Un=wl=Xr=null;break;case"mousedown":jl=!0;break;case"contextmenu":case"mouseup":case"dragend":jl=!1,au(N,r,S);break;case"selectionchange":if(sf)break;case"keydown":case"keyup":au(N,r,S)}var V;if(gl)e:{switch(e){case"compositionstart":var Q="onCompositionStart";break e;case"compositionend":Q="onCompositionEnd";break e;case"compositionupdate":Q="onCompositionUpdate";break e}Q=void 0}else Kr?Ks(e,r)&&(Q="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Q="onCompositionStart");Q&&(Gs&&r.locale!=="ko"&&(Kr||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&Kr&&(V=Ws()):(lr=S,cl="value"in lr?lr.value:lr.textContent,Kr=!0)),$=Ai(y,Q),0<$.length&&(Q=new $s(Q,e,null,r,S),N.push({event:Q,listeners:$}),V?Q.data=V:(V=Xs(r),V!==null&&(Q.data=V)))),(V=Kp?Xp(e,r):qp(e,r))&&(y=Ai(y,"onBeforeInput"),0<y.length&&(S=new $s("onBeforeInput","beforeinput",null,r,S),N.push({event:S,listeners:y}),S.data=V))}gu(N,t)})}function Vn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ai(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=En(e,r),l!=null&&n.unshift(Vn(e,l,i)),l=En(e,t),l!=null&&n.push(Vn(e,l,i))),e=e.return}return n}function Zr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vu(e,t,r,n,i){for(var l=t._reactName,c=[];r!==null&&r!==n;){var p=r,f=p.alternate,y=p.stateNode;if(f!==null&&f===n)break;p.tag===5&&y!==null&&(p=y,i?(f=En(r,l),f!=null&&c.unshift(Vn(r,f,p))):i||(f=En(r,l),f!=null&&c.push(Vn(r,f,p)))),r=r.return}c.length!==0&&e.push({event:t,listeners:c})}var pf=/\r\n?/g,ff=/\u0000|\uFFFD/g;function yu(e){return(typeof e=="string"?e:""+e).replace(pf,`
`).replace(ff,"")}function Fi(e,t,r){if(t=yu(t),yu(e)!==t&&r)throw Error(s(425))}function Mi(){}var bl=null,_l=null;function Tl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pl=typeof setTimeout=="function"?setTimeout:void 0,hf=typeof clearTimeout=="function"?clearTimeout:void 0,wu=typeof Promise=="function"?Promise:void 0,mf=typeof queueMicrotask=="function"?queueMicrotask:typeof wu!="undefined"?function(e){return wu.resolve(null).then(e).catch(gf)}:Pl;function gf(e){setTimeout(function(){throw e})}function zl(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),On(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);On(t)}function sr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ju(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Jr=Math.random().toString(36).slice(2),It="__reactFiber$"+Jr,Gn="__reactProps$"+Jr,$t="__reactContainer$"+Jr,Il="__reactEvents$"+Jr,xf="__reactListeners$"+Jr,vf="__reactHandles$"+Jr;function br(e){var t=e[It];if(t)return t;for(var r=e.parentNode;r;){if(t=r[$t]||r[It]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=ju(e);e!==null;){if(r=e[It])return r;e=ju(e)}return t}e=r,r=e.parentNode}return null}function Yn(e){return e=e[It]||e[$t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function en(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function Bi(e){return e[Gn]||null}var Ll=[],tn=-1;function ur(e){return{current:e}}function ke(e){0>tn||(e.current=Ll[tn],Ll[tn]=null,tn--)}function ye(e,t){tn++,Ll[tn]=e.current,e.current=t}var cr={},Qe=ur(cr),tt=ur(!1),_r=cr;function rn(e,t){var r=e.type.contextTypes;if(!r)return cr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in r)i[l]=t[l];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function rt(e){return e=e.childContextTypes,e!=null}function Wi(){ke(tt),ke(Qe)}function ku(e,t,r){if(Qe.current!==cr)throw Error(s(168));ye(Qe,t),ye(tt,r)}function Su(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(s(108,ce(e)||"Unknown",i));return L({},r,n)}function Ui(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cr,_r=Qe.current,ye(Qe,e),ye(tt,tt.current),!0}function Cu(e,t,r){var n=e.stateNode;if(!n)throw Error(s(169));r?(e=Su(e,t,_r),n.__reactInternalMemoizedMergedChildContext=e,ke(tt),ke(Qe),ye(Qe,e)):ke(tt),ye(tt,r)}var Vt=null,Hi=!1,Rl=!1;function Nu(e){Vt===null?Vt=[e]:Vt.push(e)}function yf(e){Hi=!0,Nu(e)}function dr(){if(!Rl&&Vt!==null){Rl=!0;var e=0,t=ge;try{var r=Vt;for(ge=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Vt=null,Hi=!1}catch(i){throw Vt!==null&&(Vt=Vt.slice(e+1)),bs(rl,dr),i}finally{ge=t,Rl=!1}}return null}var nn=[],on=0,$i=null,Vi=0,ht=[],mt=0,Tr=null,Gt=1,Yt="";function Pr(e,t){nn[on++]=Vi,nn[on++]=$i,$i=e,Vi=t}function Eu(e,t,r){ht[mt++]=Gt,ht[mt++]=Yt,ht[mt++]=Tr,Tr=e;var n=Gt;e=Yt;var i=32-kt(n)-1;n&=~(1<<i),r+=1;var l=32-kt(t)+i;if(30<l){var c=i-i%5;l=(n&(1<<c)-1).toString(32),n>>=c,i-=c,Gt=1<<32-kt(t)+i|r<<i|n,Yt=l+e}else Gt=1<<l|r<<i|n,Yt=e}function Ol(e){e.return!==null&&(Pr(e,1),Eu(e,1,0))}function Dl(e){for(;e===$i;)$i=nn[--on],nn[on]=null,Vi=nn[--on],nn[on]=null;for(;e===Tr;)Tr=ht[--mt],ht[mt]=null,Yt=ht[--mt],ht[mt]=null,Gt=ht[--mt],ht[mt]=null}var ut=null,ct=null,Ne=!1,Ct=null;function bu(e,t){var r=yt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function _u(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ut=e,ct=sr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ut=e,ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Tr!==null?{id:Gt,overflow:Yt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=yt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ut=e,ct=null,!0):!1;default:return!1}}function Al(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fl(e){if(Ne){var t=ct;if(t){var r=t;if(!_u(e,t)){if(Al(e))throw Error(s(418));t=sr(r.nextSibling);var n=ut;t&&_u(e,t)?bu(n,r):(e.flags=e.flags&-4097|2,Ne=!1,ut=e)}}else{if(Al(e))throw Error(s(418));e.flags=e.flags&-4097|2,Ne=!1,ut=e}}}function Tu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ut=e}function Gi(e){if(e!==ut)return!1;if(!Ne)return Tu(e),Ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Tl(e.type,e.memoizedProps)),t&&(t=ct)){if(Al(e))throw Pu(),Error(s(418));for(;t;)bu(e,t),t=sr(t.nextSibling)}if(Tu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ct=sr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ct=null}}else ct=ut?sr(e.stateNode.nextSibling):null;return!0}function Pu(){for(var e=ct;e;)e=sr(e.nextSibling)}function ln(){ct=ut=null,Ne=!1}function Ml(e){Ct===null?Ct=[e]:Ct.push(e)}var wf=I.ReactCurrentBatchConfig;function Qn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(s(309));var n=r.stateNode}if(!n)throw Error(s(147,e));var i=n,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(c){var p=i.refs;c===null?delete p[l]:p[l]=c},t._stringRef=l,t)}if(typeof e!="string")throw Error(s(284));if(!r._owner)throw Error(s(290,e))}return e}function Yi(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zu(e){var t=e._init;return t(e._payload)}function Iu(e){function t(x,m){if(e){var v=x.deletions;v===null?(x.deletions=[m],x.flags|=16):v.push(m)}}function r(x,m){if(!e)return null;for(;m!==null;)t(x,m),m=m.sibling;return null}function n(x,m){for(x=new Map;m!==null;)m.key!==null?x.set(m.key,m):x.set(m.index,m),m=m.sibling;return x}function i(x,m){return x=yr(x,m),x.index=0,x.sibling=null,x}function l(x,m,v){return x.index=v,e?(v=x.alternate,v!==null?(v=v.index,v<m?(x.flags|=2,m):v):(x.flags|=2,m)):(x.flags|=1048576,m)}function c(x){return e&&x.alternate===null&&(x.flags|=2),x}function p(x,m,v,E){return m===null||m.tag!==6?(m=Pa(v,x.mode,E),m.return=x,m):(m=i(m,v),m.return=x,m)}function f(x,m,v,E){var M=v.type;return M===P?S(x,m,v.props.children,E,v.key):m!==null&&(m.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ye&&zu(M)===m.type)?(E=i(m,v.props),E.ref=Qn(x,m,v),E.return=x,E):(E=vo(v.type,v.key,v.props,null,x.mode,E),E.ref=Qn(x,m,v),E.return=x,E)}function y(x,m,v,E){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=za(v,x.mode,E),m.return=x,m):(m=i(m,v.children||[]),m.return=x,m)}function S(x,m,v,E,M){return m===null||m.tag!==7?(m=Fr(v,x.mode,E,M),m.return=x,m):(m=i(m,v),m.return=x,m)}function N(x,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Pa(""+m,x.mode,v),m.return=x,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case q:return v=vo(m.type,m.key,m.props,null,x.mode,v),v.ref=Qn(x,null,m),v.return=x,v;case H:return m=za(m,x.mode,v),m.return=x,m;case Ye:var E=m._init;return N(x,E(m._payload),v)}if(Sn(m)||B(m))return m=Fr(m,x.mode,v,null),m.return=x,m;Yi(x,m)}return null}function k(x,m,v,E){var M=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return M!==null?null:p(x,m,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case q:return v.key===M?f(x,m,v,E):null;case H:return v.key===M?y(x,m,v,E):null;case Ye:return M=v._init,k(x,m,M(v._payload),E)}if(Sn(v)||B(v))return M!==null?null:S(x,m,v,E,null);Yi(x,v)}return null}function R(x,m,v,E,M){if(typeof E=="string"&&E!==""||typeof E=="number")return x=x.get(v)||null,p(m,x,""+E,M);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case q:return x=x.get(E.key===null?v:E.key)||null,f(m,x,E,M);case H:return x=x.get(E.key===null?v:E.key)||null,y(m,x,E,M);case Ye:var $=E._init;return R(x,m,v,$(E._payload),M)}if(Sn(E)||B(E))return x=x.get(v)||null,S(m,x,E,M,null);Yi(m,E)}return null}function D(x,m,v,E){for(var M=null,$=null,V=m,Q=m=0,He=null;V!==null&&Q<v.length;Q++){V.index>Q?(He=V,V=null):He=V.sibling;var pe=k(x,V,v[Q],E);if(pe===null){V===null&&(V=He);break}e&&V&&pe.alternate===null&&t(x,V),m=l(pe,m,Q),$===null?M=pe:$.sibling=pe,$=pe,V=He}if(Q===v.length)return r(x,V),Ne&&Pr(x,Q),M;if(V===null){for(;Q<v.length;Q++)V=N(x,v[Q],E),V!==null&&(m=l(V,m,Q),$===null?M=V:$.sibling=V,$=V);return Ne&&Pr(x,Q),M}for(V=n(x,V);Q<v.length;Q++)He=R(V,x,Q,v[Q],E),He!==null&&(e&&He.alternate!==null&&V.delete(He.key===null?Q:He.key),m=l(He,m,Q),$===null?M=He:$.sibling=He,$=He);return e&&V.forEach(function(wr){return t(x,wr)}),Ne&&Pr(x,Q),M}function A(x,m,v,E){var M=B(v);if(typeof M!="function")throw Error(s(150));if(v=M.call(v),v==null)throw Error(s(151));for(var $=M=null,V=m,Q=m=0,He=null,pe=v.next();V!==null&&!pe.done;Q++,pe=v.next()){V.index>Q?(He=V,V=null):He=V.sibling;var wr=k(x,V,pe.value,E);if(wr===null){V===null&&(V=He);break}e&&V&&wr.alternate===null&&t(x,V),m=l(wr,m,Q),$===null?M=wr:$.sibling=wr,$=wr,V=He}if(pe.done)return r(x,V),Ne&&Pr(x,Q),M;if(V===null){for(;!pe.done;Q++,pe=v.next())pe=N(x,pe.value,E),pe!==null&&(m=l(pe,m,Q),$===null?M=pe:$.sibling=pe,$=pe);return Ne&&Pr(x,Q),M}for(V=n(x,V);!pe.done;Q++,pe=v.next())pe=R(V,x,Q,pe.value,E),pe!==null&&(e&&pe.alternate!==null&&V.delete(pe.key===null?Q:pe.key),m=l(pe,m,Q),$===null?M=pe:$.sibling=pe,$=pe);return e&&V.forEach(function(Jf){return t(x,Jf)}),Ne&&Pr(x,Q),M}function Re(x,m,v,E){if(typeof v=="object"&&v!==null&&v.type===P&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case q:e:{for(var M=v.key,$=m;$!==null;){if($.key===M){if(M=v.type,M===P){if($.tag===7){r(x,$.sibling),m=i($,v.props.children),m.return=x,x=m;break e}}else if($.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ye&&zu(M)===$.type){r(x,$.sibling),m=i($,v.props),m.ref=Qn(x,$,v),m.return=x,x=m;break e}r(x,$);break}else t(x,$);$=$.sibling}v.type===P?(m=Fr(v.props.children,x.mode,E,v.key),m.return=x,x=m):(E=vo(v.type,v.key,v.props,null,x.mode,E),E.ref=Qn(x,m,v),E.return=x,x=E)}return c(x);case H:e:{for($=v.key;m!==null;){if(m.key===$)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){r(x,m.sibling),m=i(m,v.children||[]),m.return=x,x=m;break e}else{r(x,m);break}else t(x,m);m=m.sibling}m=za(v,x.mode,E),m.return=x,x=m}return c(x);case Ye:return $=v._init,Re(x,m,$(v._payload),E)}if(Sn(v))return D(x,m,v,E);if(B(v))return A(x,m,v,E);Yi(x,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(r(x,m.sibling),m=i(m,v),m.return=x,x=m):(r(x,m),m=Pa(v,x.mode,E),m.return=x,x=m),c(x)):r(x,m)}return Re}var an=Iu(!0),Lu=Iu(!1),Qi=ur(null),Ki=null,sn=null,Bl=null;function Wl(){Bl=sn=Ki=null}function Ul(e){var t=Qi.current;ke(Qi),e._currentValue=t}function Hl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function un(e,t){Ki=e,Bl=sn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(nt=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(Bl!==e)if(e={context:e,memoizedValue:t,next:null},sn===null){if(Ki===null)throw Error(s(308));sn=e,Ki.dependencies={lanes:0,firstContext:e}}else sn=sn.next=e;return t}var zr=null;function $l(e){zr===null?zr=[e]:zr.push(e)}function Ru(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,$l(t)):(r.next=i.next,i.next=r),t.interleaved=r,Qt(e,n)}function Qt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var pr=!1;function Vl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ou(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function fr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(de&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Qt(e,r)}return i=n.interleaved,i===null?(t.next=t,$l(n)):(t.next=i.next,i.next=t),n.interleaved=t,Qt(e,r)}function Xi(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ol(e,r)}}function Du(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,l=null;if(r=r.firstBaseUpdate,r!==null){do{var c={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};l===null?i=l=c:l=l.next=c,r=r.next}while(r!==null);l===null?i=l=t:l=l.next=t}else i=l=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function qi(e,t,r,n){var i=e.updateQueue;pr=!1;var l=i.firstBaseUpdate,c=i.lastBaseUpdate,p=i.shared.pending;if(p!==null){i.shared.pending=null;var f=p,y=f.next;f.next=null,c===null?l=y:c.next=y,c=f;var S=e.alternate;S!==null&&(S=S.updateQueue,p=S.lastBaseUpdate,p!==c&&(p===null?S.firstBaseUpdate=y:p.next=y,S.lastBaseUpdate=f))}if(l!==null){var N=i.baseState;c=0,S=y=f=null,p=l;do{var k=p.lane,R=p.eventTime;if((n&k)===k){S!==null&&(S=S.next={eventTime:R,lane:0,tag:p.tag,payload:p.payload,callback:p.callback,next:null});e:{var D=e,A=p;switch(k=t,R=r,A.tag){case 1:if(D=A.payload,typeof D=="function"){N=D.call(R,N,k);break e}N=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=A.payload,k=typeof D=="function"?D.call(R,N,k):D,k==null)break e;N=L({},N,k);break e;case 2:pr=!0}}p.callback!==null&&p.lane!==0&&(e.flags|=64,k=i.effects,k===null?i.effects=[p]:k.push(p))}else R={eventTime:R,lane:k,tag:p.tag,payload:p.payload,callback:p.callback,next:null},S===null?(y=S=R,f=N):S=S.next=R,c|=k;if(p=p.next,p===null){if(p=i.shared.pending,p===null)break;k=p,p=k.next,k.next=null,i.lastBaseUpdate=k,i.shared.pending=null}}while(!0);if(S===null&&(f=N),i.baseState=f,i.firstBaseUpdate=y,i.lastBaseUpdate=S,t=i.shared.interleaved,t!==null){i=t;do c|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Rr|=c,e.lanes=c,e.memoizedState=N}}function Au(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(s(191,i));i.call(n)}}}var Kn={},Lt=ur(Kn),Xn=ur(Kn),qn=ur(Kn);function Ir(e){if(e===Kn)throw Error(s(174));return e}function Gl(e,t){switch(ye(qn,t),ye(Xn,e),ye(Lt,Kn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Yo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Yo(t,e)}ke(Lt),ye(Lt,t)}function cn(){ke(Lt),ke(Xn),ke(qn)}function Fu(e){Ir(qn.current);var t=Ir(Lt.current),r=Yo(t,e.type);t!==r&&(ye(Xn,e),ye(Lt,r))}function Yl(e){Xn.current===e&&(ke(Lt),ke(Xn))}var be=ur(0);function Zi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ql=[];function Kl(){for(var e=0;e<Ql.length;e++)Ql[e]._workInProgressVersionPrimary=null;Ql.length=0}var Ji=I.ReactCurrentDispatcher,Xl=I.ReactCurrentBatchConfig,Lr=0,_e=null,Fe=null,We=null,eo=!1,Zn=!1,Jn=0,jf=0;function Ke(){throw Error(s(321))}function ql(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!St(e[r],t[r]))return!1;return!0}function Zl(e,t,r,n,i,l){if(Lr=l,_e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ji.current=e===null||e.memoizedState===null?Nf:Ef,e=r(n,i),Zn){l=0;do{if(Zn=!1,Jn=0,25<=l)throw Error(s(301));l+=1,We=Fe=null,t.updateQueue=null,Ji.current=bf,e=r(n,i)}while(Zn)}if(Ji.current=no,t=Fe!==null&&Fe.next!==null,Lr=0,We=Fe=_e=null,eo=!1,t)throw Error(s(300));return e}function Jl(){var e=Jn!==0;return Jn=0,e}function Rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?_e.memoizedState=We=e:We=We.next=e,We}function xt(){if(Fe===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=We===null?_e.memoizedState:We.next;if(t!==null)We=t,Fe=e;else{if(e===null)throw Error(s(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},We===null?_e.memoizedState=We=e:We=We.next=e}return We}function ei(e,t){return typeof t=="function"?t(e):t}function ea(e){var t=xt(),r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var n=Fe,i=n.baseQueue,l=r.pending;if(l!==null){if(i!==null){var c=i.next;i.next=l.next,l.next=c}n.baseQueue=i=l,r.pending=null}if(i!==null){l=i.next,n=n.baseState;var p=c=null,f=null,y=l;do{var S=y.lane;if((Lr&S)===S)f!==null&&(f=f.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),n=y.hasEagerState?y.eagerState:e(n,y.action);else{var N={lane:S,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};f===null?(p=f=N,c=n):f=f.next=N,_e.lanes|=S,Rr|=S}y=y.next}while(y!==null&&y!==l);f===null?c=n:f.next=p,St(n,t.memoizedState)||(nt=!0),t.memoizedState=n,t.baseState=c,t.baseQueue=f,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do l=i.lane,_e.lanes|=l,Rr|=l,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ta(e){var t=xt(),r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,l=t.memoizedState;if(i!==null){r.pending=null;var c=i=i.next;do l=e(l,c.action),c=c.next;while(c!==i);St(l,t.memoizedState)||(nt=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),r.lastRenderedState=l}return[l,n]}function Mu(){}function Bu(e,t){var r=_e,n=xt(),i=t(),l=!St(n.memoizedState,i);if(l&&(n.memoizedState=i,nt=!0),n=n.queue,ra(Hu.bind(null,r,n,e),[e]),n.getSnapshot!==t||l||We!==null&&We.memoizedState.tag&1){if(r.flags|=2048,ti(9,Uu.bind(null,r,n,i,t),void 0,null),Ue===null)throw Error(s(349));(Lr&30)!==0||Wu(r,t,i)}return i}function Wu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Uu(e,t,r,n){t.value=r,t.getSnapshot=n,$u(t)&&Vu(e)}function Hu(e,t,r){return r(function(){$u(t)&&Vu(e)})}function $u(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!St(e,r)}catch{return!0}}function Vu(e){var t=Qt(e,1);t!==null&&_t(t,e,1,-1)}function Gu(e){var t=Rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:e},t.queue=e,e=e.dispatch=Cf.bind(null,_e,e),[t.memoizedState,e]}function ti(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=_e.updateQueue,t===null?(t={lastEffect:null,stores:null},_e.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Yu(){return xt().memoizedState}function to(e,t,r,n){var i=Rt();_e.flags|=e,i.memoizedState=ti(1|t,r,void 0,n===void 0?null:n)}function ro(e,t,r,n){var i=xt();n=n===void 0?null:n;var l=void 0;if(Fe!==null){var c=Fe.memoizedState;if(l=c.destroy,n!==null&&ql(n,c.deps)){i.memoizedState=ti(t,r,l,n);return}}_e.flags|=e,i.memoizedState=ti(1|t,r,l,n)}function Qu(e,t){return to(8390656,8,e,t)}function ra(e,t){return ro(2048,8,e,t)}function Ku(e,t){return ro(4,2,e,t)}function Xu(e,t){return ro(4,4,e,t)}function qu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zu(e,t,r){return r=r!=null?r.concat([e]):null,ro(4,4,qu.bind(null,t,e),r)}function na(){}function Ju(e,t){var r=xt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ql(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function ec(e,t){var r=xt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ql(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function tc(e,t,r){return(Lr&21)===0?(e.baseState&&(e.baseState=!1,nt=!0),e.memoizedState=r):(St(r,t)||(r=zs(),_e.lanes|=r,Rr|=r,e.baseState=!0),t)}function kf(e,t){var r=ge;ge=r!==0&&4>r?r:4,e(!0);var n=Xl.transition;Xl.transition={};try{e(!1),t()}finally{ge=r,Xl.transition=n}}function rc(){return xt().memoizedState}function Sf(e,t,r){var n=xr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},nc(e))ic(t,r);else if(r=Ru(e,t,r,n),r!==null){var i=et();_t(r,e,n,i),oc(r,t,n)}}function Cf(e,t,r){var n=xr(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(nc(e))ic(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var c=t.lastRenderedState,p=l(c,r);if(i.hasEagerState=!0,i.eagerState=p,St(p,c)){var f=t.interleaved;f===null?(i.next=i,$l(t)):(i.next=f.next,f.next=i),t.interleaved=i;return}}catch{}finally{}r=Ru(e,t,i,n),r!==null&&(i=et(),_t(r,e,n,i),oc(r,t,n))}}function nc(e){var t=e.alternate;return e===_e||t!==null&&t===_e}function ic(e,t){Zn=eo=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function oc(e,t,r){if((r&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ol(e,r)}}var no={readContext:gt,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},Nf={readContext:gt,useCallback:function(e,t){return Rt().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:Qu,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,to(4194308,4,qu.bind(null,t,e),r)},useLayoutEffect:function(e,t){return to(4194308,4,e,t)},useInsertionEffect:function(e,t){return to(4,2,e,t)},useMemo:function(e,t){var r=Rt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Rt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Sf.bind(null,_e,e),[n.memoizedState,e]},useRef:function(e){var t=Rt();return e={current:e},t.memoizedState=e},useState:Gu,useDebugValue:na,useDeferredValue:function(e){return Rt().memoizedState=e},useTransition:function(){var e=Gu(!1),t=e[0];return e=kf.bind(null,e[1]),Rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=_e,i=Rt();if(Ne){if(r===void 0)throw Error(s(407));r=r()}else{if(r=t(),Ue===null)throw Error(s(349));(Lr&30)!==0||Wu(n,t,r)}i.memoizedState=r;var l={value:r,getSnapshot:t};return i.queue=l,Qu(Hu.bind(null,n,l,e),[e]),n.flags|=2048,ti(9,Uu.bind(null,n,l,r,t),void 0,null),r},useId:function(){var e=Rt(),t=Ue.identifierPrefix;if(Ne){var r=Yt,n=Gt;r=(n&~(1<<32-kt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Jn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=jf++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ef={readContext:gt,useCallback:Ju,useContext:gt,useEffect:ra,useImperativeHandle:Zu,useInsertionEffect:Ku,useLayoutEffect:Xu,useMemo:ec,useReducer:ea,useRef:Yu,useState:function(){return ea(ei)},useDebugValue:na,useDeferredValue:function(e){var t=xt();return tc(t,Fe.memoizedState,e)},useTransition:function(){var e=ea(ei)[0],t=xt().memoizedState;return[e,t]},useMutableSource:Mu,useSyncExternalStore:Bu,useId:rc,unstable_isNewReconciler:!1},bf={readContext:gt,useCallback:Ju,useContext:gt,useEffect:ra,useImperativeHandle:Zu,useInsertionEffect:Ku,useLayoutEffect:Xu,useMemo:ec,useReducer:ta,useRef:Yu,useState:function(){return ta(ei)},useDebugValue:na,useDeferredValue:function(e){var t=xt();return Fe===null?t.memoizedState=e:tc(t,Fe.memoizedState,e)},useTransition:function(){var e=ta(ei)[0],t=xt().memoizedState;return[e,t]},useMutableSource:Mu,useSyncExternalStore:Bu,useId:rc,unstable_isNewReconciler:!1};function Nt(e,t){if(e&&e.defaultProps){t=L({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ia(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:L({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var io={isMounted:function(e){return(e=e._reactInternals)?Er(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=et(),i=xr(e),l=Kt(n,i);l.payload=t,r!=null&&(l.callback=r),t=fr(e,l,i),t!==null&&(_t(t,e,i,n),Xi(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=et(),i=xr(e),l=Kt(n,i);l.tag=1,l.payload=t,r!=null&&(l.callback=r),t=fr(e,l,i),t!==null&&(_t(t,e,i,n),Xi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=et(),n=xr(e),i=Kt(r,n);i.tag=2,t!=null&&(i.callback=t),t=fr(e,i,n),t!==null&&(_t(t,e,n,r),Xi(t,e,n))}};function lc(e,t,r,n,i,l,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,c):t.prototype&&t.prototype.isPureReactComponent?!Wn(r,n)||!Wn(i,l):!0}function ac(e,t,r){var n=!1,i=cr,l=t.contextType;return typeof l=="object"&&l!==null?l=gt(l):(i=rt(t)?_r:Qe.current,n=t.contextTypes,l=(n=n!=null)?rn(e,i):cr),t=new t(r,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=io,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function sc(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&io.enqueueReplaceState(t,t.state,null)}function oa(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Vl(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=gt(l):(l=rt(t)?_r:Qe.current,i.context=rn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ia(e,t,l,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&io.enqueueReplaceState(i,i.state,null),qi(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function dn(e,t){try{var r="",n=t;do r+=le(n),n=n.return;while(n);var i=r}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function la(e,t,r){return{value:e,source:null,stack:r!=null?r:null,digest:t!=null?t:null}}function aa(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var _f=typeof WeakMap=="function"?WeakMap:Map;function uc(e,t,r){r=Kt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){po||(po=!0,ka=n),aa(e,t)},r}function cc(e,t,r){r=Kt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){aa(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(r.callback=function(){aa(e,t),typeof n!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})}),r}function dc(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new _f;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=Uf.bind(null,e,t,r),t.then(e,e))}function pc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fc(e,t,r,n,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Kt(-1,1),t.tag=2,fr(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Tf=I.ReactCurrentOwner,nt=!1;function Je(e,t,r,n){t.child=e===null?Lu(t,null,r,n):an(t,e.child,r,n)}function hc(e,t,r,n,i){r=r.render;var l=t.ref;return un(t,i),n=Zl(e,t,r,n,l,i),r=Jl(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xt(e,t,i)):(Ne&&r&&Ol(t),t.flags|=1,Je(e,t,n,i),t.child)}function mc(e,t,r,n,i){if(e===null){var l=r.type;return typeof l=="function"&&!Ta(l)&&l.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=l,gc(e,t,l,n,i)):(e=vo(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&i)===0){var c=l.memoizedProps;if(r=r.compare,r=r!==null?r:Wn,r(c,n)&&e.ref===t.ref)return Xt(e,t,i)}return t.flags|=1,e=yr(l,n),e.ref=t.ref,e.return=t,t.child=e}function gc(e,t,r,n,i){if(e!==null){var l=e.memoizedProps;if(Wn(l,n)&&e.ref===t.ref)if(nt=!1,t.pendingProps=n=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(nt=!0);else return t.lanes=e.lanes,Xt(e,t,i)}return sa(e,t,r,n,i)}function xc(e,t,r){var n=t.pendingProps,i=n.children,l=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(fn,dt),dt|=r;else{if((r&1073741824)===0)return e=l!==null?l.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ye(fn,dt),dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=l!==null?l.baseLanes:r,ye(fn,dt),dt|=n}else l!==null?(n=l.baseLanes|r,t.memoizedState=null):n=r,ye(fn,dt),dt|=n;return Je(e,t,i,r),t.child}function vc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function sa(e,t,r,n,i){var l=rt(r)?_r:Qe.current;return l=rn(t,l),un(t,i),r=Zl(e,t,r,n,l,i),n=Jl(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xt(e,t,i)):(Ne&&n&&Ol(t),t.flags|=1,Je(e,t,r,i),t.child)}function yc(e,t,r,n,i){if(rt(r)){var l=!0;Ui(t)}else l=!1;if(un(t,i),t.stateNode===null)lo(e,t),ac(t,r,n),oa(t,r,n,i),n=!0;else if(e===null){var c=t.stateNode,p=t.memoizedProps;c.props=p;var f=c.context,y=r.contextType;typeof y=="object"&&y!==null?y=gt(y):(y=rt(r)?_r:Qe.current,y=rn(t,y));var S=r.getDerivedStateFromProps,N=typeof S=="function"||typeof c.getSnapshotBeforeUpdate=="function";N||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==n||f!==y)&&sc(t,c,n,y),pr=!1;var k=t.memoizedState;c.state=k,qi(t,n,c,i),f=t.memoizedState,p!==n||k!==f||tt.current||pr?(typeof S=="function"&&(ia(t,r,S,n),f=t.memoizedState),(p=pr||lc(t,r,p,n,k,f,y))?(N||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=f),c.props=n,c.state=f,c.context=y,n=p):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{c=t.stateNode,Ou(e,t),p=t.memoizedProps,y=t.type===t.elementType?p:Nt(t.type,p),c.props=y,N=t.pendingProps,k=c.context,f=r.contextType,typeof f=="object"&&f!==null?f=gt(f):(f=rt(r)?_r:Qe.current,f=rn(t,f));var R=r.getDerivedStateFromProps;(S=typeof R=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==N||k!==f)&&sc(t,c,n,f),pr=!1,k=t.memoizedState,c.state=k,qi(t,n,c,i);var D=t.memoizedState;p!==N||k!==D||tt.current||pr?(typeof R=="function"&&(ia(t,r,R,n),D=t.memoizedState),(y=pr||lc(t,r,y,n,k,D,f)||!1)?(S||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(n,D,f),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(n,D,f)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=D),c.props=n,c.state=D,c.context=f,n=y):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&k===e.memoizedState||(t.flags|=1024),n=!1)}return ua(e,t,r,n,l,i)}function ua(e,t,r,n,i,l){vc(e,t);var c=(t.flags&128)!==0;if(!n&&!c)return i&&Cu(t,r,!1),Xt(e,t,l);n=t.stateNode,Tf.current=t;var p=c&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&c?(t.child=an(t,e.child,null,l),t.child=an(t,null,p,l)):Je(e,t,p,l),t.memoizedState=n.state,i&&Cu(t,r,!0),t.child}function wc(e){var t=e.stateNode;t.pendingContext?ku(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ku(e,t.context,!1),Gl(e,t.containerInfo)}function jc(e,t,r,n,i){return ln(),Ml(i),t.flags|=256,Je(e,t,r,n),t.child}var ca={dehydrated:null,treeContext:null,retryLane:0};function da(e){return{baseLanes:e,cachePool:null,transitions:null}}function kc(e,t,r){var n=t.pendingProps,i=be.current,l=!1,c=(t.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(i&2)!==0),p?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ye(be,i&1),e===null)return Fl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(c=n.children,e=n.fallback,l?(n=t.mode,l=t.child,c={mode:"hidden",children:c},(n&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=c):l=yo(c,n,0,null),e=Fr(e,n,r,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=da(r),t.memoizedState=ca,e):pa(t,c));if(i=e.memoizedState,i!==null&&(p=i.dehydrated,p!==null))return Pf(e,t,c,n,p,i,r);if(l){l=n.fallback,c=t.mode,i=e.child,p=i.sibling;var f={mode:"hidden",children:n.children};return(c&1)===0&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=f,t.deletions=null):(n=yr(i,f),n.subtreeFlags=i.subtreeFlags&14680064),p!==null?l=yr(p,l):(l=Fr(l,c,r,null),l.flags|=2),l.return=t,n.return=t,n.sibling=l,t.child=n,n=l,l=t.child,c=e.child.memoizedState,c=c===null?da(r):{baseLanes:c.baseLanes|r,cachePool:null,transitions:c.transitions},l.memoizedState=c,l.childLanes=e.childLanes&~r,t.memoizedState=ca,n}return l=e.child,e=l.sibling,n=yr(l,{mode:"visible",children:n.children}),(t.mode&1)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function pa(e,t){return t=yo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function oo(e,t,r,n){return n!==null&&Ml(n),an(t,e.child,null,r),e=pa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pf(e,t,r,n,i,l,c){if(r)return t.flags&256?(t.flags&=-257,n=la(Error(s(422))),oo(e,t,c,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=n.fallback,i=t.mode,n=yo({mode:"visible",children:n.children},i,0,null),l=Fr(l,i,c,null),l.flags|=2,n.return=t,l.return=t,n.sibling=l,t.child=n,(t.mode&1)!==0&&an(t,e.child,null,c),t.child.memoizedState=da(c),t.memoizedState=ca,l);if((t.mode&1)===0)return oo(e,t,c,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var p=n.dgst;return n=p,l=Error(s(419)),n=la(l,n,void 0),oo(e,t,c,n)}if(p=(c&e.childLanes)!==0,nt||p){if(n=Ue,n!==null){switch(c&-c){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(n.suspendedLanes|c))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Qt(e,i),_t(n,e,i,-1))}return _a(),n=la(Error(s(421))),oo(e,t,c,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Hf.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,ct=sr(i.nextSibling),ut=t,Ne=!0,Ct=null,e!==null&&(ht[mt++]=Gt,ht[mt++]=Yt,ht[mt++]=Tr,Gt=e.id,Yt=e.overflow,Tr=t),t=pa(t,n.children),t.flags|=4096,t)}function Sc(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Hl(e.return,t,r)}function fa(e,t,r,n,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=r,l.tailMode=i)}function Cc(e,t,r){var n=t.pendingProps,i=n.revealOrder,l=n.tail;if(Je(e,t,n.children,r),n=be.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sc(e,r,t);else if(e.tag===19)Sc(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(ye(be,n),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Zi(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),fa(t,!1,i,r,l);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Zi(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}fa(t,!0,r,null,l);break;case"together":fa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function lo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Rr|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,r=yr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=yr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function zf(e,t,r){switch(t.tag){case 3:wc(t),ln();break;case 5:Fu(t);break;case 1:rt(t.type)&&Ui(t);break;case 4:Gl(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;ye(Qi,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(ye(be,be.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?kc(e,t,r):(ye(be,be.current&1),e=Xt(e,t,r),e!==null?e.sibling:null);ye(be,be.current&1);break;case 19:if(n=(r&t.childLanes)!==0,(e.flags&128)!==0){if(n)return Cc(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(be,be.current),n)break;return null;case 22:case 23:return t.lanes=0,xc(e,t,r)}return Xt(e,t,r)}var Nc,ha,Ec,bc;Nc=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},ha=function(){},Ec=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Ir(Lt.current);var l=null;switch(r){case"input":i=Ho(e,i),n=Ho(e,n),l=[];break;case"select":i=L({},i,{value:void 0}),n=L({},n,{value:void 0}),l=[];break;case"textarea":i=Go(e,i),n=Go(e,n),l=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Mi)}Qo(r,n);var c;r=null;for(y in i)if(!n.hasOwnProperty(y)&&i.hasOwnProperty(y)&&i[y]!=null)if(y==="style"){var p=i[y];for(c in p)p.hasOwnProperty(c)&&(r||(r={}),r[c]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(h.hasOwnProperty(y)?l||(l=[]):(l=l||[]).push(y,null));for(y in n){var f=n[y];if(p=i!=null?i[y]:void 0,n.hasOwnProperty(y)&&f!==p&&(f!=null||p!=null))if(y==="style")if(p){for(c in p)!p.hasOwnProperty(c)||f&&f.hasOwnProperty(c)||(r||(r={}),r[c]="");for(c in f)f.hasOwnProperty(c)&&p[c]!==f[c]&&(r||(r={}),r[c]=f[c])}else r||(l||(l=[]),l.push(y,r)),r=f;else y==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,p=p?p.__html:void 0,f!=null&&p!==f&&(l=l||[]).push(y,f)):y==="children"?typeof f!="string"&&typeof f!="number"||(l=l||[]).push(y,""+f):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(h.hasOwnProperty(y)?(f!=null&&y==="onScroll"&&je("scroll",e),l||p===f||(l=[])):(l=l||[]).push(y,f))}r&&(l=l||[]).push("style",r);var y=l;(t.updateQueue=y)&&(t.flags|=4)}},bc=function(e,t,r,n){r!==n&&(t.flags|=4)};function ri(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function If(e,t,r){var n=t.pendingProps;switch(Dl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(t),null;case 1:return rt(t.type)&&Wi(),Xe(t),null;case 3:return n=t.stateNode,cn(),ke(tt),ke(Qe),Kl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Gi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ct!==null&&(Na(Ct),Ct=null))),ha(e,t),Xe(t),null;case 5:Yl(t);var i=Ir(qn.current);if(r=t.type,e!==null&&t.stateNode!=null)Ec(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(s(166));return Xe(t),null}if(e=Ir(Lt.current),Gi(t)){n=t.stateNode,r=t.type;var l=t.memoizedProps;switch(n[It]=t,n[Gn]=l,e=(t.mode&1)!==0,r){case"dialog":je("cancel",n),je("close",n);break;case"iframe":case"object":case"embed":je("load",n);break;case"video":case"audio":for(i=0;i<Hn.length;i++)je(Hn[i],n);break;case"source":je("error",n);break;case"img":case"image":case"link":je("error",n),je("load",n);break;case"details":je("toggle",n);break;case"input":as(n,l),je("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!l.multiple},je("invalid",n);break;case"textarea":cs(n,l),je("invalid",n)}Qo(r,l),i=null;for(var c in l)if(l.hasOwnProperty(c)){var p=l[c];c==="children"?typeof p=="string"?n.textContent!==p&&(l.suppressHydrationWarning!==!0&&Fi(n.textContent,p,e),i=["children",p]):typeof p=="number"&&n.textContent!==""+p&&(l.suppressHydrationWarning!==!0&&Fi(n.textContent,p,e),i=["children",""+p]):h.hasOwnProperty(c)&&p!=null&&c==="onScroll"&&je("scroll",n)}switch(r){case"input":tr(n),us(n,l,!0);break;case"textarea":tr(n),ps(n);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(n.onclick=Mi)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{c=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fs(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=c.createElement(r,{is:n.is}):(e=c.createElement(r),r==="select"&&(c=e,n.multiple?c.multiple=!0:n.size&&(c.size=n.size))):e=c.createElementNS(e,r),e[It]=t,e[Gn]=n,Nc(e,t,!1,!1),t.stateNode=e;e:{switch(c=Ko(r,n),r){case"dialog":je("cancel",e),je("close",e),i=n;break;case"iframe":case"object":case"embed":je("load",e),i=n;break;case"video":case"audio":for(i=0;i<Hn.length;i++)je(Hn[i],e);i=n;break;case"source":je("error",e),i=n;break;case"img":case"image":case"link":je("error",e),je("load",e),i=n;break;case"details":je("toggle",e),i=n;break;case"input":as(e,n),i=Ho(e,n),je("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=L({},n,{value:void 0}),je("invalid",e);break;case"textarea":cs(e,n),i=Go(e,n),je("invalid",e);break;default:i=n}Qo(r,i),p=i;for(l in p)if(p.hasOwnProperty(l)){var f=p[l];l==="style"?gs(e,f):l==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&hs(e,f)):l==="children"?typeof f=="string"?(r!=="textarea"||f!=="")&&Cn(e,f):typeof f=="number"&&Cn(e,""+f):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(h.hasOwnProperty(l)?f!=null&&l==="onScroll"&&je("scroll",e):f!=null&&re(e,l,f,c))}switch(r){case"input":tr(e),us(e,n,!1);break;case"textarea":tr(e),ps(e);break;case"option":n.value!=null&&e.setAttribute("value",""+se(n.value));break;case"select":e.multiple=!!n.multiple,l=n.value,l!=null?$r(e,!!n.multiple,l,!1):n.defaultValue!=null&&$r(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Mi)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Xe(t),null;case 6:if(e&&t.stateNode!=null)bc(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(s(166));if(r=Ir(qn.current),Ir(Lt.current),Gi(t)){if(n=t.stateNode,r=t.memoizedProps,n[It]=t,(l=n.nodeValue!==r)&&(e=ut,e!==null))switch(e.tag){case 3:Fi(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fi(n.nodeValue,r,(e.mode&1)!==0)}l&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[It]=t,t.stateNode=n}return Xe(t),null;case 13:if(ke(be),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&ct!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Pu(),ln(),t.flags|=98560,l=!1;else if(l=Gi(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[It]=t}else ln(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Xe(t),l=!1}else Ct!==null&&(Na(Ct),Ct=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(be.current&1)!==0?Me===0&&(Me=3):_a())),t.updateQueue!==null&&(t.flags|=4),Xe(t),null);case 4:return cn(),ha(e,t),e===null&&$n(t.stateNode.containerInfo),Xe(t),null;case 10:return Ul(t.type._context),Xe(t),null;case 17:return rt(t.type)&&Wi(),Xe(t),null;case 19:if(ke(be),l=t.memoizedState,l===null)return Xe(t),null;if(n=(t.flags&128)!==0,c=l.rendering,c===null)if(n)ri(l,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Zi(e),c!==null){for(t.flags|=128,ri(l,!1),n=c.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)l=r,e=n,l.flags&=14680066,c=l.alternate,c===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=c.childLanes,l.lanes=c.lanes,l.child=c.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=c.memoizedProps,l.memoizedState=c.memoizedState,l.updateQueue=c.updateQueue,l.type=c.type,e=c.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ye(be,be.current&1|2),t.child}e=e.sibling}l.tail!==null&&Le()>hn&&(t.flags|=128,n=!0,ri(l,!1),t.lanes=4194304)}else{if(!n)if(e=Zi(c),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ri(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!Ne)return Xe(t),null}else 2*Le()-l.renderingStartTime>hn&&r!==1073741824&&(t.flags|=128,n=!0,ri(l,!1),t.lanes=4194304);l.isBackwards?(c.sibling=t.child,t.child=c):(r=l.last,r!==null?r.sibling=c:t.child=c,l.last=c)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Le(),t.sibling=null,r=be.current,ye(be,n?r&1|2:r&1),t):(Xe(t),null);case 22:case 23:return ba(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(dt&1073741824)!==0&&(Xe(t),t.subtreeFlags&6&&(t.flags|=8192)):Xe(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function Lf(e,t){switch(Dl(t),t.tag){case 1:return rt(t.type)&&Wi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return cn(),ke(tt),ke(Qe),Kl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Yl(t),null;case 13:if(ke(be),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));ln()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ke(be),null;case 4:return cn(),null;case 10:return Ul(t.type._context),null;case 22:case 23:return ba(),null;case 24:return null;default:return null}}var ao=!1,qe=!1,Rf=typeof WeakSet=="function"?WeakSet:Set,O=null;function pn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Pe(e,t,n)}else r.current=null}function ma(e,t,r){try{r()}catch(n){Pe(e,t,n)}}var _c=!1;function Of(e,t){if(bl=bi,e=lu(),yl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{r.nodeType,l.nodeType}catch{r=null;break e}var c=0,p=-1,f=-1,y=0,S=0,N=e,k=null;t:for(;;){for(var R;N!==r||i!==0&&N.nodeType!==3||(p=c+i),N!==l||n!==0&&N.nodeType!==3||(f=c+n),N.nodeType===3&&(c+=N.nodeValue.length),(R=N.firstChild)!==null;)k=N,N=R;for(;;){if(N===e)break t;if(k===r&&++y===i&&(p=c),k===l&&++S===n&&(f=c),(R=N.nextSibling)!==null)break;N=k,k=N.parentNode}N=R}r=p===-1||f===-1?null:{start:p,end:f}}else r=null}r=r||{start:0,end:0}}else r=null;for(_l={focusedElem:e,selectionRange:r},bi=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var D=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(D!==null){var A=D.memoizedProps,Re=D.memoizedState,x=t.stateNode,m=x.getSnapshotBeforeUpdate(t.elementType===t.type?A:Nt(t.type,A),Re);x.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(E){Pe(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return D=_c,_c=!1,D}function ni(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&ma(t,r,l)}i=i.next}while(i!==n)}}function so(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function ga(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Tc(e){var t=e.alternate;t!==null&&(e.alternate=null,Tc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[Gn],delete t[Il],delete t[xf],delete t[vf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pc(e){return e.tag===5||e.tag===3||e.tag===4}function zc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xa(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Mi));else if(n!==4&&(e=e.child,e!==null))for(xa(e,t,r),e=e.sibling;e!==null;)xa(e,t,r),e=e.sibling}function va(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(va(e,t,r),e=e.sibling;e!==null;)va(e,t,r),e=e.sibling}var $e=null,Et=!1;function hr(e,t,r){for(r=r.child;r!==null;)Ic(e,t,r),r=r.sibling}function Ic(e,t,r){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(ji,r)}catch{}switch(r.tag){case 5:qe||pn(r,t);case 6:var n=$e,i=Et;$e=null,hr(e,t,r),$e=n,Et=i,$e!==null&&(Et?(e=$e,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):$e.removeChild(r.stateNode));break;case 18:$e!==null&&(Et?(e=$e,r=r.stateNode,e.nodeType===8?zl(e.parentNode,r):e.nodeType===1&&zl(e,r),On(e)):zl($e,r.stateNode));break;case 4:n=$e,i=Et,$e=r.stateNode.containerInfo,Et=!0,hr(e,t,r),$e=n,Et=i;break;case 0:case 11:case 14:case 15:if(!qe&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var l=i,c=l.destroy;l=l.tag,c!==void 0&&((l&2)!==0||(l&4)!==0)&&ma(r,t,c),i=i.next}while(i!==n)}hr(e,t,r);break;case 1:if(!qe&&(pn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(p){Pe(r,t,p)}hr(e,t,r);break;case 21:hr(e,t,r);break;case 22:r.mode&1?(qe=(n=qe)||r.memoizedState!==null,hr(e,t,r),qe=n):hr(e,t,r);break;default:hr(e,t,r)}}function Lc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Rf),t.forEach(function(n){var i=$f.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function bt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var l=e,c=t,p=c;e:for(;p!==null;){switch(p.tag){case 5:$e=p.stateNode,Et=!1;break e;case 3:$e=p.stateNode.containerInfo,Et=!0;break e;case 4:$e=p.stateNode.containerInfo,Et=!0;break e}p=p.return}if($e===null)throw Error(s(160));Ic(l,c,i),$e=null,Et=!1;var f=i.alternate;f!==null&&(f.return=null),i.return=null}catch(y){Pe(i,t,y)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Rc(t,e),t=t.sibling}function Rc(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(bt(t,e),Ot(e),n&4){try{ni(3,e,e.return),so(3,e)}catch(A){Pe(e,e.return,A)}try{ni(5,e,e.return)}catch(A){Pe(e,e.return,A)}}break;case 1:bt(t,e),Ot(e),n&512&&r!==null&&pn(r,r.return);break;case 5:if(bt(t,e),Ot(e),n&512&&r!==null&&pn(r,r.return),e.flags&32){var i=e.stateNode;try{Cn(i,"")}catch(A){Pe(e,e.return,A)}}if(n&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,c=r!==null?r.memoizedProps:l,p=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{p==="input"&&l.type==="radio"&&l.name!=null&&ss(i,l),Ko(p,c);var y=Ko(p,l);for(c=0;c<f.length;c+=2){var S=f[c],N=f[c+1];S==="style"?gs(i,N):S==="dangerouslySetInnerHTML"?hs(i,N):S==="children"?Cn(i,N):re(i,S,N,y)}switch(p){case"input":$o(i,l);break;case"textarea":ds(i,l);break;case"select":var k=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var R=l.value;R!=null?$r(i,!!l.multiple,R,!1):k!==!!l.multiple&&(l.defaultValue!=null?$r(i,!!l.multiple,l.defaultValue,!0):$r(i,!!l.multiple,l.multiple?[]:"",!1))}i[Gn]=l}catch(A){Pe(e,e.return,A)}}break;case 6:if(bt(t,e),Ot(e),n&4){if(e.stateNode===null)throw Error(s(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(A){Pe(e,e.return,A)}}break;case 3:if(bt(t,e),Ot(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{On(t.containerInfo)}catch(A){Pe(e,e.return,A)}break;case 4:bt(t,e),Ot(e);break;case 13:bt(t,e),Ot(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(ja=Le())),n&4&&Lc(e);break;case 22:if(S=r!==null&&r.memoizedState!==null,e.mode&1?(qe=(y=qe)||S,bt(t,e),qe=y):bt(t,e),Ot(e),n&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!S&&(e.mode&1)!==0)for(O=e,S=e.child;S!==null;){for(N=O=S;O!==null;){switch(k=O,R=k.child,k.tag){case 0:case 11:case 14:case 15:ni(4,k,k.return);break;case 1:pn(k,k.return);var D=k.stateNode;if(typeof D.componentWillUnmount=="function"){n=k,r=k.return;try{t=n,D.props=t.memoizedProps,D.state=t.memoizedState,D.componentWillUnmount()}catch(A){Pe(n,r,A)}}break;case 5:pn(k,k.return);break;case 22:if(k.memoizedState!==null){Ac(N);continue}}R!==null?(R.return=k,O=R):Ac(N)}S=S.sibling}e:for(S=null,N=e;;){if(N.tag===5){if(S===null){S=N;try{i=N.stateNode,y?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(p=N.stateNode,f=N.memoizedProps.style,c=f!=null&&f.hasOwnProperty("display")?f.display:null,p.style.display=ms("display",c))}catch(A){Pe(e,e.return,A)}}}else if(N.tag===6){if(S===null)try{N.stateNode.nodeValue=y?"":N.memoizedProps}catch(A){Pe(e,e.return,A)}}else if((N.tag!==22&&N.tag!==23||N.memoizedState===null||N===e)&&N.child!==null){N.child.return=N,N=N.child;continue}if(N===e)break e;for(;N.sibling===null;){if(N.return===null||N.return===e)break e;S===N&&(S=null),N=N.return}S===N&&(S=null),N.sibling.return=N.return,N=N.sibling}}break;case 19:bt(t,e),Ot(e),n&4&&Lc(e);break;case 21:break;default:bt(t,e),Ot(e)}}function Ot(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Pc(r)){var n=r;break e}r=r.return}throw Error(s(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Cn(i,""),n.flags&=-33);var l=zc(e);va(e,l,i);break;case 3:case 4:var c=n.stateNode.containerInfo,p=zc(e);xa(e,p,c);break;default:throw Error(s(161))}}catch(f){Pe(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Df(e,t,r){O=e,Oc(e)}function Oc(e,t,r){for(var n=(e.mode&1)!==0;O!==null;){var i=O,l=i.child;if(i.tag===22&&n){var c=i.memoizedState!==null||ao;if(!c){var p=i.alternate,f=p!==null&&p.memoizedState!==null||qe;p=ao;var y=qe;if(ao=c,(qe=f)&&!y)for(O=i;O!==null;)c=O,f=c.child,c.tag===22&&c.memoizedState!==null?Fc(i):f!==null?(f.return=c,O=f):Fc(i);for(;l!==null;)O=l,Oc(l),l=l.sibling;O=i,ao=p,qe=y}Dc(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,O=l):Dc(e)}}function Dc(e){for(;O!==null;){var t=O;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:qe||so(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!qe)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Nt(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Au(t,l,n);break;case 3:var c=t.updateQueue;if(c!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Au(t,c,r)}break;case 5:var p=t.stateNode;if(r===null&&t.flags&4){r=p;var f=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&r.focus();break;case"img":f.src&&(r.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var y=t.alternate;if(y!==null){var S=y.memoizedState;if(S!==null){var N=S.dehydrated;N!==null&&On(N)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}qe||t.flags&512&&ga(t)}catch(k){Pe(t,t.return,k)}}if(t===e){O=null;break}if(r=t.sibling,r!==null){r.return=t.return,O=r;break}O=t.return}}function Ac(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var r=t.sibling;if(r!==null){r.return=t.return,O=r;break}O=t.return}}function Fc(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{so(4,t)}catch(f){Pe(t,r,f)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(f){Pe(t,i,f)}}var l=t.return;try{ga(t)}catch(f){Pe(t,l,f)}break;case 5:var c=t.return;try{ga(t)}catch(f){Pe(t,c,f)}}}catch(f){Pe(t,t.return,f)}if(t===e){O=null;break}var p=t.sibling;if(p!==null){p.return=t.return,O=p;break}O=t.return}}var Af=Math.ceil,uo=I.ReactCurrentDispatcher,ya=I.ReactCurrentOwner,vt=I.ReactCurrentBatchConfig,de=0,Ue=null,De=null,Ve=0,dt=0,fn=ur(0),Me=0,ii=null,Rr=0,co=0,wa=0,oi=null,it=null,ja=0,hn=1/0,qt=null,po=!1,ka=null,mr=null,fo=!1,gr=null,ho=0,li=0,Sa=null,mo=-1,go=0;function et(){return(de&6)!==0?Le():mo!==-1?mo:mo=Le()}function xr(e){return(e.mode&1)===0?1:(de&2)!==0&&Ve!==0?Ve&-Ve:wf.transition!==null?(go===0&&(go=zs()),go):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Bs(e.type)),e)}function _t(e,t,r,n){if(50<li)throw li=0,Sa=null,Error(s(185));Pn(e,r,n),((de&2)===0||e!==Ue)&&(e===Ue&&((de&2)===0&&(co|=r),Me===4&&vr(e,Ve)),ot(e,n),r===1&&de===0&&(t.mode&1)===0&&(hn=Le()+500,Hi&&dr()))}function ot(e,t){var r=e.callbackNode;yp(e,t);var n=Ci(e,e===Ue?Ve:0);if(n===0)r!==null&&_s(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&_s(r),t===1)e.tag===0?yf(Bc.bind(null,e)):Nu(Bc.bind(null,e)),mf(function(){(de&6)===0&&dr()}),r=null;else{switch(Is(n)){case 1:r=rl;break;case 4:r=Ts;break;case 16:r=wi;break;case 536870912:r=Ps;break;default:r=wi}r=Qc(r,Mc.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Mc(e,t){if(mo=-1,go=0,(de&6)!==0)throw Error(s(327));var r=e.callbackNode;if(mn()&&e.callbackNode!==r)return null;var n=Ci(e,e===Ue?Ve:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=xo(e,n);else{t=n;var i=de;de|=2;var l=Uc();(Ue!==e||Ve!==t)&&(qt=null,hn=Le()+500,Dr(e,t));do try{Bf();break}catch(p){Wc(e,p)}while(!0);Wl(),uo.current=l,de=i,De!==null?t=0:(Ue=null,Ve=0,t=Me)}if(t!==0){if(t===2&&(i=nl(e),i!==0&&(n=i,t=Ca(e,i))),t===1)throw r=ii,Dr(e,0),vr(e,n),ot(e,Le()),r;if(t===6)vr(e,n);else{if(i=e.current.alternate,(n&30)===0&&!Ff(i)&&(t=xo(e,n),t===2&&(l=nl(e),l!==0&&(n=l,t=Ca(e,l))),t===1))throw r=ii,Dr(e,0),vr(e,n),ot(e,Le()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(s(345));case 2:Ar(e,it,qt);break;case 3:if(vr(e,n),(n&130023424)===n&&(t=ja+500-Le(),10<t)){if(Ci(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){et(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Pl(Ar.bind(null,e,it,qt),t);break}Ar(e,it,qt);break;case 4:if(vr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var c=31-kt(n);l=1<<c,c=t[c],c>i&&(i=c),n&=~l}if(n=i,n=Le()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Af(n/1960))-n,10<n){e.timeoutHandle=Pl(Ar.bind(null,e,it,qt),n);break}Ar(e,it,qt);break;case 5:Ar(e,it,qt);break;default:throw Error(s(329))}}}return ot(e,Le()),e.callbackNode===r?Mc.bind(null,e):null}function Ca(e,t){var r=oi;return e.current.memoizedState.isDehydrated&&(Dr(e,t).flags|=256),e=xo(e,t),e!==2&&(t=it,it=r,t!==null&&Na(t)),e}function Na(e){it===null?it=e:it.push.apply(it,e)}function Ff(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],l=i.getSnapshot;i=i.value;try{if(!St(l(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vr(e,t){for(t&=~wa,t&=~co,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-kt(t),n=1<<r;e[r]=-1,t&=~n}}function Bc(e){if((de&6)!==0)throw Error(s(327));mn();var t=Ci(e,0);if((t&1)===0)return ot(e,Le()),null;var r=xo(e,t);if(e.tag!==0&&r===2){var n=nl(e);n!==0&&(t=n,r=Ca(e,n))}if(r===1)throw r=ii,Dr(e,0),vr(e,t),ot(e,Le()),r;if(r===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ar(e,it,qt),ot(e,Le()),null}function Ea(e,t){var r=de;de|=1;try{return e(t)}finally{de=r,de===0&&(hn=Le()+500,Hi&&dr())}}function Or(e){gr!==null&&gr.tag===0&&(de&6)===0&&mn();var t=de;de|=1;var r=vt.transition,n=ge;try{if(vt.transition=null,ge=1,e)return e()}finally{ge=n,vt.transition=r,de=t,(de&6)===0&&dr()}}function ba(){dt=fn.current,ke(fn)}function Dr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,hf(r)),De!==null)for(r=De.return;r!==null;){var n=r;switch(Dl(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Wi();break;case 3:cn(),ke(tt),ke(Qe),Kl();break;case 5:Yl(n);break;case 4:cn();break;case 13:ke(be);break;case 19:ke(be);break;case 10:Ul(n.type._context);break;case 22:case 23:ba()}r=r.return}if(Ue=e,De=e=yr(e.current,null),Ve=dt=t,Me=0,ii=null,wa=co=Rr=0,it=oi=null,zr!==null){for(t=0;t<zr.length;t++)if(r=zr[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,l=r.pending;if(l!==null){var c=l.next;l.next=i,n.next=c}r.pending=n}zr=null}return e}function Wc(e,t){do{var r=De;try{if(Wl(),Ji.current=no,eo){for(var n=_e.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}eo=!1}if(Lr=0,We=Fe=_e=null,Zn=!1,Jn=0,ya.current=null,r===null||r.return===null){Me=1,ii=t,De=null;break}e:{var l=e,c=r.return,p=r,f=t;if(t=Ve,p.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var y=f,S=p,N=S.tag;if((S.mode&1)===0&&(N===0||N===11||N===15)){var k=S.alternate;k?(S.updateQueue=k.updateQueue,S.memoizedState=k.memoizedState,S.lanes=k.lanes):(S.updateQueue=null,S.memoizedState=null)}var R=pc(c);if(R!==null){R.flags&=-257,fc(R,c,p,l,t),R.mode&1&&dc(l,y,t),t=R,f=y;var D=t.updateQueue;if(D===null){var A=new Set;A.add(f),t.updateQueue=A}else D.add(f);break e}else{if((t&1)===0){dc(l,y,t),_a();break e}f=Error(s(426))}}else if(Ne&&p.mode&1){var Re=pc(c);if(Re!==null){(Re.flags&65536)===0&&(Re.flags|=256),fc(Re,c,p,l,t),Ml(dn(f,p));break e}}l=f=dn(f,p),Me!==4&&(Me=2),oi===null?oi=[l]:oi.push(l),l=c;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var x=uc(l,f,t);Du(l,x);break e;case 1:p=f;var m=l.type,v=l.stateNode;if((l.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(mr===null||!mr.has(v)))){l.flags|=65536,t&=-t,l.lanes|=t;var E=cc(l,p,t);Du(l,E);break e}}l=l.return}while(l!==null)}$c(r)}catch(M){t=M,De===r&&r!==null&&(De=r=r.return);continue}break}while(!0)}function Uc(){var e=uo.current;return uo.current=no,e===null?no:e}function _a(){(Me===0||Me===3||Me===2)&&(Me=4),Ue===null||(Rr&268435455)===0&&(co&268435455)===0||vr(Ue,Ve)}function xo(e,t){var r=de;de|=2;var n=Uc();(Ue!==e||Ve!==t)&&(qt=null,Dr(e,t));do try{Mf();break}catch(i){Wc(e,i)}while(!0);if(Wl(),de=r,uo.current=n,De!==null)throw Error(s(261));return Ue=null,Ve=0,Me}function Mf(){for(;De!==null;)Hc(De)}function Bf(){for(;De!==null&&!cp();)Hc(De)}function Hc(e){var t=Yc(e.alternate,e,dt);e.memoizedProps=e.pendingProps,t===null?$c(e):De=t,ya.current=null}function $c(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=If(r,t,dt),r!==null){De=r;return}}else{if(r=Lf(r,t),r!==null){r.flags&=32767,De=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,De=null;return}}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);Me===0&&(Me=5)}function Ar(e,t,r){var n=ge,i=vt.transition;try{vt.transition=null,ge=1,Wf(e,t,r,n)}finally{vt.transition=i,ge=n}return null}function Wf(e,t,r,n){do mn();while(gr!==null);if((de&6)!==0)throw Error(s(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var l=r.lanes|r.childLanes;if(wp(e,l),e===Ue&&(De=Ue=null,Ve=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||fo||(fo=!0,Qc(wi,function(){return mn(),null})),l=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||l){l=vt.transition,vt.transition=null;var c=ge;ge=1;var p=de;de|=4,ya.current=null,Of(e,r),Rc(r,e),af(_l),bi=!!bl,_l=bl=null,e.current=r,Df(r),dp(),de=p,ge=c,vt.transition=l}else e.current=r;if(fo&&(fo=!1,gr=e,ho=i),l=e.pendingLanes,l===0&&(mr=null),hp(r.stateNode),ot(e,Le()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(po)throw po=!1,e=ka,ka=null,e;return(ho&1)!==0&&e.tag!==0&&mn(),l=e.pendingLanes,(l&1)!==0?e===Sa?li++:(li=0,Sa=e):li=0,dr(),null}function mn(){if(gr!==null){var e=Is(ho),t=vt.transition,r=ge;try{if(vt.transition=null,ge=16>e?16:e,gr===null)var n=!1;else{if(e=gr,gr=null,ho=0,(de&6)!==0)throw Error(s(331));var i=de;for(de|=4,O=e.current;O!==null;){var l=O,c=l.child;if((O.flags&16)!==0){var p=l.deletions;if(p!==null){for(var f=0;f<p.length;f++){var y=p[f];for(O=y;O!==null;){var S=O;switch(S.tag){case 0:case 11:case 15:ni(8,S,l)}var N=S.child;if(N!==null)N.return=S,O=N;else for(;O!==null;){S=O;var k=S.sibling,R=S.return;if(Tc(S),S===y){O=null;break}if(k!==null){k.return=R,O=k;break}O=R}}}var D=l.alternate;if(D!==null){var A=D.child;if(A!==null){D.child=null;do{var Re=A.sibling;A.sibling=null,A=Re}while(A!==null)}}O=l}}if((l.subtreeFlags&2064)!==0&&c!==null)c.return=l,O=c;else e:for(;O!==null;){if(l=O,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:ni(9,l,l.return)}var x=l.sibling;if(x!==null){x.return=l.return,O=x;break e}O=l.return}}var m=e.current;for(O=m;O!==null;){c=O;var v=c.child;if((c.subtreeFlags&2064)!==0&&v!==null)v.return=c,O=v;else e:for(c=m;O!==null;){if(p=O,(p.flags&2048)!==0)try{switch(p.tag){case 0:case 11:case 15:so(9,p)}}catch(M){Pe(p,p.return,M)}if(p===c){O=null;break e}var E=p.sibling;if(E!==null){E.return=p.return,O=E;break e}O=p.return}}if(de=i,dr(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(ji,e)}catch{}n=!0}return n}finally{ge=r,vt.transition=t}}return!1}function Vc(e,t,r){t=dn(r,t),t=uc(e,t,1),e=fr(e,t,1),t=et(),e!==null&&(Pn(e,1,t),ot(e,t))}function Pe(e,t,r){if(e.tag===3)Vc(e,e,r);else for(;t!==null;){if(t.tag===3){Vc(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(mr===null||!mr.has(n))){e=dn(r,e),e=cc(t,e,1),t=fr(t,e,1),e=et(),t!==null&&(Pn(t,1,e),ot(t,e));break}}t=t.return}}function Uf(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=et(),e.pingedLanes|=e.suspendedLanes&r,Ue===e&&(Ve&r)===r&&(Me===4||Me===3&&(Ve&130023424)===Ve&&500>Le()-ja?Dr(e,0):wa|=r),ot(e,t)}function Gc(e,t){t===0&&((e.mode&1)===0?t=1:(t=Si,Si<<=1,(Si&130023424)===0&&(Si=4194304)));var r=et();e=Qt(e,t),e!==null&&(Pn(e,t,r),ot(e,r))}function Hf(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Gc(e,r)}function $f(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(s(314))}n!==null&&n.delete(t),Gc(e,r)}var Yc;Yc=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||tt.current)nt=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return nt=!1,zf(e,t,r);nt=(e.flags&131072)!==0}else nt=!1,Ne&&(t.flags&1048576)!==0&&Eu(t,Vi,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;lo(e,t),e=t.pendingProps;var i=rn(t,Qe.current);un(t,r),i=Zl(null,t,n,e,i,r);var l=Jl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(n)?(l=!0,Ui(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vl(t),i.updater=io,t.stateNode=i,i._reactInternals=t,oa(t,n,e,r),t=ua(null,t,n,!0,l,r)):(t.tag=0,Ne&&l&&Ol(t),Je(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(lo(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=Gf(n),e=Nt(n,e),i){case 0:t=sa(null,t,n,e,r);break e;case 1:t=yc(null,t,n,e,r);break e;case 11:t=hc(null,t,n,e,r);break e;case 14:t=mc(null,t,n,Nt(n.type,e),r);break e}throw Error(s(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Nt(n,i),sa(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Nt(n,i),yc(e,t,n,i,r);case 3:e:{if(wc(t),e===null)throw Error(s(387));n=t.pendingProps,l=t.memoizedState,i=l.element,Ou(e,t),qi(t,n,null,r);var c=t.memoizedState;if(n=c.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=dn(Error(s(423)),t),t=jc(e,t,n,r,i);break e}else if(n!==i){i=dn(Error(s(424)),t),t=jc(e,t,n,r,i);break e}else for(ct=sr(t.stateNode.containerInfo.firstChild),ut=t,Ne=!0,Ct=null,r=Lu(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ln(),n===i){t=Xt(e,t,r);break e}Je(e,t,n,r)}t=t.child}return t;case 5:return Fu(t),e===null&&Fl(t),n=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,c=i.children,Tl(n,i)?c=null:l!==null&&Tl(n,l)&&(t.flags|=32),vc(e,t),Je(e,t,c,r),t.child;case 6:return e===null&&Fl(t),null;case 13:return kc(e,t,r);case 4:return Gl(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=an(t,null,n,r):Je(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Nt(n,i),hc(e,t,n,i,r);case 7:return Je(e,t,t.pendingProps,r),t.child;case 8:return Je(e,t,t.pendingProps.children,r),t.child;case 12:return Je(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,l=t.memoizedProps,c=i.value,ye(Qi,n._currentValue),n._currentValue=c,l!==null)if(St(l.value,c)){if(l.children===i.children&&!tt.current){t=Xt(e,t,r);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var p=l.dependencies;if(p!==null){c=l.child;for(var f=p.firstContext;f!==null;){if(f.context===n){if(l.tag===1){f=Kt(-1,r&-r),f.tag=2;var y=l.updateQueue;if(y!==null){y=y.shared;var S=y.pending;S===null?f.next=f:(f.next=S.next,S.next=f),y.pending=f}}l.lanes|=r,f=l.alternate,f!==null&&(f.lanes|=r),Hl(l.return,r,t),p.lanes|=r;break}f=f.next}}else if(l.tag===10)c=l.type===t.type?null:l.child;else if(l.tag===18){if(c=l.return,c===null)throw Error(s(341));c.lanes|=r,p=c.alternate,p!==null&&(p.lanes|=r),Hl(c,r,t),c=l.sibling}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===t){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}Je(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,un(t,r),i=gt(i),n=n(i),t.flags|=1,Je(e,t,n,r),t.child;case 14:return n=t.type,i=Nt(n,t.pendingProps),i=Nt(n.type,i),mc(e,t,n,i,r);case 15:return gc(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Nt(n,i),lo(e,t),t.tag=1,rt(n)?(e=!0,Ui(t)):e=!1,un(t,r),ac(t,n,i),oa(t,n,i,r),ua(null,t,n,!0,e,r);case 19:return Cc(e,t,r);case 22:return xc(e,t,r)}throw Error(s(156,t.tag))};function Qc(e,t){return bs(e,t)}function Vf(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,r,n){return new Vf(e,t,r,n)}function Ta(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gf(e){if(typeof e=="function")return Ta(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Te)return 11;if(e===Ze)return 14}return 2}function yr(e,t){var r=e.alternate;return r===null?(r=yt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function vo(e,t,r,n,i,l){var c=2;if(n=e,typeof e=="function")Ta(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case P:return Fr(r.children,i,l,t);case F:c=8,i|=8;break;case xe:return e=yt(12,r,t,i|2),e.elementType=xe,e.lanes=l,e;case Ce:return e=yt(13,r,t,i),e.elementType=Ce,e.lanes=l,e;case Ge:return e=yt(19,r,t,i),e.elementType=Ge,e.lanes=l,e;case ve:return yo(r,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ie:c=10;break e;case oe:c=9;break e;case Te:c=11;break e;case Ze:c=14;break e;case Ye:c=16,n=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=yt(c,r,t,i),t.elementType=e,t.type=n,t.lanes=l,t}function Fr(e,t,r,n){return e=yt(7,e,n,t),e.lanes=r,e}function yo(e,t,r,n){return e=yt(22,e,n,t),e.elementType=ve,e.lanes=r,e.stateNode={isHidden:!1},e}function Pa(e,t,r){return e=yt(6,e,null,t),e.lanes=r,e}function za(e,t,r){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Yf(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=il(0),this.expirationTimes=il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=il(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ia(e,t,r,n,i,l,c,p,f){return e=new Yf(e,t,r,p,f),t===1?(t=1,l===!0&&(t|=8)):t=0,l=yt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vl(l),e}function Qf(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Kc(e){if(!e)return cr;e=e._reactInternals;e:{if(Er(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var r=e.type;if(rt(r))return Su(e,r,t)}return t}function Xc(e,t,r,n,i,l,c,p,f){return e=Ia(r,n,!0,e,i,l,c,p,f),e.context=Kc(null),r=e.current,n=et(),i=xr(r),l=Kt(n,i),l.callback=t!=null?t:null,fr(r,l,i),e.current.lanes=i,Pn(e,i,n),ot(e,n),e}function wo(e,t,r,n){var i=t.current,l=et(),c=xr(i);return r=Kc(r),t.context===null?t.context=r:t.pendingContext=r,t=Kt(l,c),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=fr(i,t,c),e!==null&&(_t(e,i,c,l),Xi(e,i,c)),c}function jo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function La(e,t){qc(e,t),(e=e.alternate)&&qc(e,t)}function Kf(){return null}var Zc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ra(e){this._internalRoot=e}ko.prototype.render=Ra.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));wo(e,t,null,null)},ko.prototype.unmount=Ra.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Or(function(){wo(null,e,null,null)}),t[$t]=null}};function ko(e){this._internalRoot=e}ko.prototype.unstable_scheduleHydration=function(e){if(e){var t=Os();e={blockedOn:null,target:e,priority:t};for(var r=0;r<or.length&&t!==0&&t<or[r].priority;r++);or.splice(r,0,e),r===0&&Fs(e)}};function Oa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function So(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Jc(){}function Xf(e,t,r,n,i){if(i){if(typeof n=="function"){var l=n;n=function(){var y=jo(c);l.call(y)}}var c=Xc(t,n,e,0,null,!1,!1,"",Jc);return e._reactRootContainer=c,e[$t]=c.current,$n(e.nodeType===8?e.parentNode:e),Or(),c}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var p=n;n=function(){var y=jo(f);p.call(y)}}var f=Ia(e,0,!1,null,null,!1,!1,"",Jc);return e._reactRootContainer=f,e[$t]=f.current,$n(e.nodeType===8?e.parentNode:e),Or(function(){wo(t,f,r,n)}),f}function Co(e,t,r,n,i){var l=r._reactRootContainer;if(l){var c=l;if(typeof i=="function"){var p=i;i=function(){var f=jo(c);p.call(f)}}wo(t,c,e,i)}else c=Xf(r,t,e,i,n);return jo(c)}Ls=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Tn(t.pendingLanes);r!==0&&(ol(t,r|1),ot(t,Le()),(de&6)===0&&(hn=Le()+500,dr()))}break;case 13:Or(function(){var n=Qt(e,1);if(n!==null){var i=et();_t(n,e,1,i)}}),La(e,1)}},ll=function(e){if(e.tag===13){var t=Qt(e,134217728);if(t!==null){var r=et();_t(t,e,134217728,r)}La(e,134217728)}},Rs=function(e){if(e.tag===13){var t=xr(e),r=Qt(e,t);if(r!==null){var n=et();_t(r,e,t,n)}La(e,t)}},Os=function(){return ge},Ds=function(e,t){var r=ge;try{return ge=e,t()}finally{ge=r}},Zo=function(e,t,r){switch(t){case"input":if($o(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Bi(n);if(!i)throw Error(s(90));Nr(n),$o(n,i)}}}break;case"textarea":ds(e,r);break;case"select":t=r.value,t!=null&&$r(e,!!r.multiple,t,!1)}},ws=Ea,js=Or;var qf={usingClientEntryPoint:!1,Events:[Yn,en,Bi,vs,ys,Ea]},ai={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zf={bundleType:ai.bundleType,version:ai.version,rendererPackageName:ai.rendererPackageName,rendererConfig:ai.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:I.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ns(e),e===null?null:e.stateNode},findFiberByHostInstance:ai.findFiberByHostInstance||Kf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var No=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!No.isDisabled&&No.supportsFiber)try{ji=No.inject(Zf),zt=No}catch{}}return lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qf,lt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oa(t))throw Error(s(200));return Qf(e,t,null,r)},lt.createRoot=function(e,t){if(!Oa(e))throw Error(s(299));var r=!1,n="",i=Zc;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ia(e,1,!1,null,null,r,!1,n,i),e[$t]=t.current,$n(e.nodeType===8?e.parentNode:e),new Ra(t)},lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=Ns(t),e=e===null?null:e.stateNode,e},lt.flushSync=function(e){return Or(e)},lt.hydrate=function(e,t,r){if(!So(t))throw Error(s(200));return Co(null,e,t,!0,r)},lt.hydrateRoot=function(e,t,r){if(!Oa(e))throw Error(s(405));var n=r!=null&&r.hydratedSources||null,i=!1,l="",c=Zc;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(c=r.onRecoverableError)),t=Xc(t,null,e,1,r!=null?r:null,i,!1,l,c),e[$t]=t.current,$n(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new ko(t)},lt.render=function(e,t,r){if(!So(t))throw Error(s(200));return Co(null,e,t,!1,r)},lt.unmountComponentAtNode=function(e){if(!So(e))throw Error(s(40));return e._reactRootContainer?(Or(function(){Co(null,null,e,!1,function(){e._reactRootContainer=null,e[$t]=null})}),!0):!1},lt.unstable_batchedUpdates=Ea,lt.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!So(r))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Co(e,t,r,!1,n)},lt.version="18.3.1-next-f1338f8080-20240426",lt}var ad;function ah(){if(ad)return Fa.exports;ad=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(u){console.error(u)}}return o(),Fa.exports=lh(),Fa.exports}var sd;function sh(){if(sd)return Eo;sd=1;var o=ah();return Eo.createRoot=o.createRoot,Eo.hydrateRoot=o.hydrateRoot,Eo}var uh=sh(),ze=es();const ft=eh(ze);var at=function(){return at=Object.assign||function(u){for(var s,d=1,h=arguments.length;d<h;d++){s=arguments[d];for(var w in s)Object.prototype.hasOwnProperty.call(s,w)&&(u[w]=s[w])}return u},at.apply(this,arguments)};function Lo(o,u,s){if(s||arguments.length===2)for(var d=0,h=u.length,w;d<h;d++)(w||!(d in u))&&(w||(w=Array.prototype.slice.call(u,0,d)),w[d]=u[d]);return o.concat(w||Array.prototype.slice.call(u))}var Se="-ms-",di="-moz-",fe="-webkit-",Td="comm",Fo="rule",ts="decl",ch="@import",dh="@namespace",Pd="@keyframes",ph="@layer",zd=Math.abs,rs=String.fromCharCode,Ya=Object.assign;function fh(o,u){return Be(o,0)^45?(((u<<2^Be(o,0))<<2^Be(o,1))<<2^Be(o,2))<<2^Be(o,3):0}function Id(o){return o.trim()}function Zt(o,u){return(o=u.exec(o))?o[0]:o}function te(o,u,s){return o.replace(u,s)}function _o(o,u,s){return o.indexOf(u,s)}function Be(o,u){return o.charCodeAt(u)|0}function Hr(o,u,s){return o.slice(u,s)}function Tt(o){return o.length}function Ld(o){return o.length}function ui(o,u){return u.push(o),o}function hh(o,u){return o.map(u).join("")}function ud(o,u){return o.filter(function(s){return!Zt(s,u)})}var Mo=1,xn=1,Rd=0,wt=0,Ae=0,kn="";function Bo(o,u,s,d,h,w,C,z){return{value:o,root:u,parent:s,type:d,props:h,children:w,line:Mo,column:xn,length:C,return:"",siblings:z}}function kr(o,u){return Ya(Bo("",null,null,"",null,null,0,o.siblings),o,{length:-o.length},u)}function gn(o){for(;o.root;)o=kr(o.root,{children:[o]});ui(o,o.siblings)}function mh(){return Ae}function gh(){return Ae=wt>0?Be(kn,--wt):0,xn--,Ae===10&&(xn=1,Mo--),Ae}function Pt(){return Ae=wt<Rd?Be(kn,wt++):0,xn++,Ae===10&&(xn=1,Mo++),Ae}function Sr(){return Be(kn,wt)}function To(){return wt}function Wo(o,u){return Hr(kn,o,u)}function fi(o){switch(o){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xh(o){return Mo=xn=1,Rd=Tt(kn=o),wt=0,[]}function vh(o){return kn="",o}function Wa(o){return Id(Wo(wt-1,Qa(o===91?o+2:o===40?o+1:o)))}function yh(o){for(;(Ae=Sr())&&Ae<33;)Pt();return fi(o)>2||fi(Ae)>3?"":" "}function wh(o,u){for(;--u&&Pt()&&!(Ae<48||Ae>102||Ae>57&&Ae<65||Ae>70&&Ae<97););return Wo(o,To()+(u<6&&Sr()==32&&Pt()==32))}function Qa(o){for(;Pt();)switch(Ae){case o:return wt;case 34:case 39:o!==34&&o!==39&&Qa(Ae);break;case 40:o===41&&Qa(o);break;case 92:Pt();break}return wt}function jh(o,u){for(;Pt()&&o+Ae!==57;)if(o+Ae===84&&Sr()===47)break;return"/*"+Wo(u,wt-1)+"*"+rs(o===47?o:Pt())}function kh(o){for(;!fi(Sr());)Pt();return Wo(o,wt)}function Sh(o){return vh(Po("",null,null,null,[""],o=xh(o),0,[0],o))}function Po(o,u,s,d,h,w,C,z,b){for(var K=0,G=0,W=C,Z=0,ae=0,X=0,U=1,Y=1,he=1,ue=0,re="",I=h,q=w,H=d,P=re;Y;)switch(X=ue,ue=Pt()){case 40:if(X!=108&&Be(P,W-1)==58){_o(P+=te(Wa(ue),"&","&\f"),"&\f",zd(K?z[K-1]:0))!=-1&&(he=-1);break}case 34:case 39:case 91:P+=Wa(ue);break;case 9:case 10:case 13:case 32:P+=yh(X);break;case 92:P+=wh(To()-1,7);continue;case 47:switch(Sr()){case 42:case 47:ui(Ch(jh(Pt(),To()),u,s,b),b),(fi(X||1)==5||fi(Sr()||1)==5)&&Tt(P)&&Hr(P,-1,void 0)!==" "&&(P+=" ");break;default:P+="/"}break;case 123*U:z[K++]=Tt(P)*he;case 125*U:case 59:case 0:switch(ue){case 0:case 125:Y=0;case 59+G:he==-1&&(P=te(P,/\f/g,"")),ae>0&&(Tt(P)-W||U===0&&X===47)&&ui(ae>32?dd(P+";",d,s,W-1,b):dd(te(P," ","")+";",d,s,W-2,b),b);break;case 59:P+=";";default:if(ui(H=cd(P,u,s,K,G,h,z,re,I=[],q=[],W,w),w),ue===123)if(G===0)Po(P,u,H,H,I,w,W,z,q);else{switch(Z){case 99:if(Be(P,3)===110)break;case 108:if(Be(P,2)===97)break;default:G=0;case 100:case 109:case 115:}G?Po(o,H,H,d&&ui(cd(o,H,H,0,0,h,z,re,h,I=[],W,q),q),h,q,W,z,d?I:q):Po(P,H,H,H,[""],q,0,z,q)}}K=G=ae=0,U=he=1,re=P="",W=C;break;case 58:W=1+Tt(P),ae=X;default:if(U<1){if(ue==123)--U;else if(ue==125&&U++==0&&gh()==125)continue}switch(P+=rs(ue),ue*U){case 38:he=G>0?1:(P+="\f",-1);break;case 44:z[K++]=(Tt(P)-1)*he,he=1;break;case 64:Sr()===45&&(P+=Wa(Pt())),Z=Sr(),G=W=Tt(re=P+=kh(To())),ue++;break;case 45:X===45&&Tt(P)==2&&(U=0)}}return w}function cd(o,u,s,d,h,w,C,z,b,K,G,W){for(var Z=h-1,ae=h===0?w:[""],X=Ld(ae),U=0,Y=0,he=0;U<d;++U)for(var ue=0,re=Hr(o,Z+1,Z=zd(Y=C[U])),I=o;ue<X;++ue)(I=Id(Y>0?ae[ue]+" "+re:te(re,/&\f/g,ae[ue])))&&(b[he++]=I);return Bo(o,u,s,h===0?Fo:z,b,K,G,W)}function Ch(o,u,s,d){return Bo(o,u,s,Td,rs(mh()),Hr(o,2,-2),0,d)}function dd(o,u,s,d,h){return Bo(o,u,s,ts,Hr(o,0,d),Hr(o,d+1,-1),d,h)}function Od(o,u,s){switch(fh(o,u)){case 5103:return fe+"print-"+o+o;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return fe+o+o;case 4855:return fe+o.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+o;case 4789:return di+o+o;case 5349:case 4246:case 4810:case 6968:case 2756:return fe+o+di+o+Se+o+o;case 5936:switch(Be(o,u+11)){case 114:return fe+o+Se+te(o,/[svh]\w+-[tblr]{2}/,"tb")+o;case 108:return fe+o+Se+te(o,/[svh]\w+-[tblr]{2}/,"tb-rl")+o;case 45:return fe+o+Se+te(o,/[svh]\w+-[tblr]{2}/,"lr")+o}case 6828:case 4268:case 2903:return fe+o+Se+o+o;case 6165:return fe+o+Se+"flex-"+o+o;case 5187:return fe+o+te(o,/(\w+).+(:[^]+)/,fe+"box-$1$2"+Se+"flex-$1$2")+o;case 5443:return fe+o+Se+"flex-item-"+te(o,/flex-|-self/g,"")+(Zt(o,/flex-|baseline/)?"":Se+"grid-row-"+te(o,/flex-|-self/g,""))+o;case 4675:return fe+o+Se+"flex-line-pack"+te(o,/align-content|flex-|-self/g,"")+o;case 5548:return fe+o+Se+te(o,"shrink","negative")+o;case 5292:return fe+o+Se+te(o,"basis","preferred-size")+o;case 6060:return fe+"box-"+te(o,"-grow","")+fe+o+Se+te(o,"grow","positive")+o;case 4554:return fe+te(o,/([^-])(transform)/g,"$1"+fe+"$2")+o;case 6187:return te(te(te(o,/(zoom-|grab)/,fe+"$1"),/(image-set)/,fe+"$1"),o,"")+o;case 5495:case 3959:return te(o,/(image-set\([^]*)/,fe+"$1$`$1");case 4968:return te(te(o,/(.+:)(flex-)?(.*)/,fe+"box-pack:$3"+Se+"flex-pack:$3"),/space-between/,"justify")+fe+o+o;case 4200:if(!Zt(o,/flex-|baseline/))return Se+"grid-column-align"+Hr(o,u)+o;break;case 2592:case 3360:return Se+te(o,"template-","")+o;case 4384:case 3616:return s&&s.some(function(d,h){return u=h,Zt(d.props,/grid-\w+-end/)})?~_o(o+(s=s[u].value),"span",0)?o:Se+te(o,"-start","")+o+Se+"grid-row-span:"+(~_o(s,"span",0)?Zt(s,/\d+/):+Zt(s,/\d+/)-+Zt(o,/\d+/))+";":Se+te(o,"-start","")+o;case 4896:case 4128:return s&&s.some(function(d){return Zt(d.props,/grid-\w+-start/)})?o:Se+te(te(o,"-end","-span"),"span ","")+o;case 4095:case 3583:case 4068:case 2532:return te(o,/(.+)-inline(.+)/,fe+"$1$2")+o;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Tt(o)-1-u>6)switch(Be(o,u+1)){case 109:if(Be(o,u+4)!==45)break;case 102:return te(o,/(.+:)(.+)-([^]+)/,"$1"+fe+"$2-$3$1"+di+(Be(o,u+3)==108?"$3":"$2-$3"))+o;case 115:return~_o(o,"stretch",0)?Od(te(o,"stretch","fill-available"),u,s)+o:o}break;case 5152:case 5920:return te(o,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(d,h,w,C,z,b,K){return Se+h+":"+w+K+(C?Se+h+"-span:"+(z?b:+b-+w)+K:"")+o});case 4949:if(Be(o,u+6)===121)return te(o,":",":"+fe)+o;break;case 6444:switch(Be(o,Be(o,14)===45?18:11)){case 120:return te(o,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+fe+(Be(o,14)===45?"inline-":"")+"box$3$1"+fe+"$2$3$1"+Se+"$2box$3")+o;case 100:return te(o,":",":"+Se)+o}break;case 5719:case 2647:case 2135:case 3927:case 2391:return te(o,"scroll-","scroll-snap-")+o}return o}function Ro(o,u){for(var s="",d=0;d<o.length;d++)s+=u(o[d],d,o,u)||"";return s}function Nh(o,u,s,d){switch(o.type){case ph:if(o.children.length)break;case ch:case dh:case ts:return o.return=o.return||o.value;case Td:return"";case Pd:return o.return=o.value+"{"+Ro(o.children,d)+"}";case Fo:if(!Tt(o.value=o.props.join(",")))return""}return Tt(s=Ro(o.children,d))?o.return=o.value+"{"+s+"}":""}function Eh(o){var u=Ld(o);return function(s,d,h,w){for(var C="",z=0;z<u;z++)C+=o[z](s,d,h,w)||"";return C}}function bh(o){return function(u){u.root||(u=u.return)&&o(u)}}function _h(o,u,s,d){if(o.length>-1&&!o.return)switch(o.type){case ts:o.return=Od(o.value,o.length,s);return;case Pd:return Ro([kr(o,{value:te(o.value,"@","@"+fe)})],d);case Fo:if(o.length)return hh(s=o.props,function(h){switch(Zt(h,d=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":gn(kr(o,{props:[te(h,/:(read-\w+)/,":"+di+"$1")]})),gn(kr(o,{props:[h]})),Ya(o,{props:ud(s,d)});break;case"::placeholder":gn(kr(o,{props:[te(h,/:(plac\w+)/,":"+fe+"input-$1")]})),gn(kr(o,{props:[te(h,/:(plac\w+)/,":"+di+"$1")]})),gn(kr(o,{props:[te(h,/:(plac\w+)/,Se+"input-$1")]})),gn(kr(o,{props:[h]})),Ya(o,{props:ud(s,d)});break}return""})}}var Th={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},pt={},vn=typeof process!="undefined"&&pt!==void 0&&(pt.REACT_APP_SC_ATTR||pt.SC_ATTR)||"data-styled",Dd="active",Ad="data-styled-version",Uo="6.3.10",ns=`/*!sc*/
`,pi=typeof window!="undefined"&&typeof document!="undefined",Ph=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&pt!==void 0&&pt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&pt.REACT_APP_SC_DISABLE_SPEEDY!==""?pt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&pt.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&pt!==void 0&&pt.SC_DISABLE_SPEEDY!==void 0&&pt.SC_DISABLE_SPEEDY!==""&&pt.SC_DISABLE_SPEEDY!=="false"&&pt.SC_DISABLE_SPEEDY);function mi(o){for(var u=[],s=1;s<arguments.length;s++)u[s-1]=arguments[s];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(o," for more information.").concat(u.length>0?" Args: ".concat(u.join(", ")):""))}var zo=new Map,Oo=new Map,Io=1,ci=function(o){if(zo.has(o))return zo.get(o);for(;Oo.has(Io);)Io++;var u=Io++;return zo.set(o,u),Oo.set(u,o),u},zh=function(o,u){Io=u+1,zo.set(o,u),Oo.set(u,o)},is=Object.freeze([]),yn=Object.freeze({});function Ih(o,u,s){return s===void 0&&(s=yn),o.theme!==s.theme&&o.theme||u||s.theme}var Fd=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Lh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Rh=/(^-|-$)/g;function pd(o){return o.replace(Lh,"-").replace(Rh,"")}var Oh=/(a)(d)/gi,fd=function(o){return String.fromCharCode(o+(o>25?39:97))};function Ka(o){var u,s="";for(u=Math.abs(o);u>52;u=u/52|0)s=fd(u%52)+s;return(fd(u%52)+s).replace(Oh,"$1-$2")}var Ua,Mr=function(o,u){for(var s=u.length;s;)o=33*o^u.charCodeAt(--s);return o},Md=function(o){return Mr(5381,o)};function Dh(o){return Ka(Md(o)>>>0)}function Ah(o){return o.displayName||o.name||"Component"}function Ha(o){return typeof o=="string"&&!0}var Bd=typeof Symbol=="function"&&Symbol.for,Wd=Bd?Symbol.for("react.memo"):60115,Fh=Bd?Symbol.for("react.forward_ref"):60112,Mh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Bh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ud={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Wh=((Ua={})[Fh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ua[Wd]=Ud,Ua);function hd(o){return("type"in(u=o)&&u.type.$$typeof)===Wd?Ud:"$$typeof"in o?Wh[o.$$typeof]:Mh;var u}var Uh=Object.defineProperty,Hh=Object.getOwnPropertyNames,md=Object.getOwnPropertySymbols,$h=Object.getOwnPropertyDescriptor,Vh=Object.getPrototypeOf,gd=Object.prototype;function Hd(o,u,s){if(typeof u!="string"){if(gd){var d=Vh(u);d&&d!==gd&&Hd(o,d,s)}var h=Hh(u);md&&(h=h.concat(md(u)));for(var w=hd(o),C=hd(u),z=0;z<h.length;++z){var b=h[z];if(!(b in Bh||s&&s[b]||C&&b in C||w&&b in w)){var K=$h(u,b);try{Uh(o,b,K)}catch{}}}}return o}function wn(o){return typeof o=="function"}function os(o){return typeof o=="object"&&"styledComponentId"in o}function Wr(o,u){return o&&u?"".concat(o," ").concat(u):o||u||""}function xd(o,u){return o.join("")}function hi(o){return o!==null&&typeof o=="object"&&o.constructor.name===Object.name&&!("props"in o&&o.$$typeof)}function Xa(o,u,s){if(s===void 0&&(s=!1),!s&&!hi(o)&&!Array.isArray(o))return u;if(Array.isArray(u))for(var d=0;d<u.length;d++)o[d]=Xa(o[d],u[d]);else if(hi(u))for(var d in u)o[d]=Xa(o[d],u[d]);return o}function ls(o,u){Object.defineProperty(o,"toString",{value:u})}var Gh=(function(){function o(u){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=u,this._cGroup=0,this._cIndex=0}return o.prototype.indexOfGroup=function(u){if(u===this._cGroup)return this._cIndex;var s=this._cIndex;if(u>this._cGroup)for(var d=this._cGroup;d<u;d++)s+=this.groupSizes[d];else for(d=this._cGroup-1;d>=u;d--)s-=this.groupSizes[d];return this._cGroup=u,this._cIndex=s,s},o.prototype.insertRules=function(u,s){if(u>=this.groupSizes.length){for(var d=this.groupSizes,h=d.length,w=h;u>=w;)if((w<<=1)<0)throw mi(16,"".concat(u));this.groupSizes=new Uint32Array(w),this.groupSizes.set(d),this.length=w;for(var C=h;C<w;C++)this.groupSizes[C]=0}for(var z=this.indexOfGroup(u+1),b=0,K=(C=0,s.length);C<K;C++)this.tag.insertRule(z,s[C])&&(this.groupSizes[u]++,z++,b++);b>0&&this._cGroup>u&&(this._cIndex+=b)},o.prototype.clearGroup=function(u){if(u<this.length){var s=this.groupSizes[u],d=this.indexOfGroup(u),h=d+s;this.groupSizes[u]=0;for(var w=d;w<h;w++)this.tag.deleteRule(d);s>0&&this._cGroup>u&&(this._cIndex-=s)}},o.prototype.getGroup=function(u){var s="";if(u>=this.length||this.groupSizes[u]===0)return s;for(var d=this.groupSizes[u],h=this.indexOfGroup(u),w=h+d,C=h;C<w;C++)s+=this.tag.getRule(C)+ns;return s},o})(),Yh="style[".concat(vn,"][").concat(Ad,'="').concat(Uo,'"]'),Qh=new RegExp("^".concat(vn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),vd=function(o){return typeof ShadowRoot!="undefined"&&o instanceof ShadowRoot||"host"in o&&o.nodeType===11},qa=function(o){if(!o)return document;if(vd(o))return o;if("getRootNode"in o){var u=o.getRootNode();if(vd(u))return u}return document},Kh=function(o,u,s){for(var d,h=s.split(","),w=0,C=h.length;w<C;w++)(d=h[w])&&o.registerName(u,d)},Xh=function(o,u){for(var s,d=((s=u.textContent)!==null&&s!==void 0?s:"").split(ns),h=[],w=0,C=d.length;w<C;w++){var z=d[w].trim();if(z){var b=z.match(Qh);if(b){var K=0|parseInt(b[1],10),G=b[2];K!==0&&(zh(G,K),Kh(o,G,b[3]),o.getTag().insertRules(K,h)),h.length=0}else h.push(z)}}},$a=function(o){for(var u=qa(o.options.target).querySelectorAll(Yh),s=0,d=u.length;s<d;s++){var h=u[s];h&&h.getAttribute(vn)!==Dd&&(Xh(o,h),h.parentNode&&h.parentNode.removeChild(h))}};function qh(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var $d=function(o){var u=document.head,s=o||u,d=document.createElement("style"),h=(function(z){var b=Array.from(z.querySelectorAll("style[".concat(vn,"]")));return b[b.length-1]})(s),w=h!==void 0?h.nextSibling:null;d.setAttribute(vn,Dd),d.setAttribute(Ad,Uo);var C=qh();return C&&d.setAttribute("nonce",C),s.insertBefore(d,w),d},Zh=(function(){function o(u){this.element=$d(u),this.element.appendChild(document.createTextNode("")),this.sheet=(function(s){var d;if(s.sheet)return s.sheet;for(var h=(d=s.getRootNode().styleSheets)!==null&&d!==void 0?d:document.styleSheets,w=0,C=h.length;w<C;w++){var z=h[w];if(z.ownerNode===s)return z}throw mi(17)})(this.element),this.length=0}return o.prototype.insertRule=function(u,s){try{return this.sheet.insertRule(s,u),this.length++,!0}catch{return!1}},o.prototype.deleteRule=function(u){this.sheet.deleteRule(u),this.length--},o.prototype.getRule=function(u){var s=this.sheet.cssRules[u];return s&&s.cssText?s.cssText:""},o})(),Jh=(function(){function o(u){this.element=$d(u),this.nodes=this.element.childNodes,this.length=0}return o.prototype.insertRule=function(u,s){if(u<=this.length&&u>=0){var d=document.createTextNode(s);return this.element.insertBefore(d,this.nodes[u]||null),this.length++,!0}return!1},o.prototype.deleteRule=function(u){this.element.removeChild(this.nodes[u]),this.length--},o.prototype.getRule=function(u){return u<this.length?this.nodes[u].textContent:""},o})(),em=(function(){function o(u){this.rules=[],this.length=0}return o.prototype.insertRule=function(u,s){return u<=this.length&&(u===this.length?this.rules.push(s):this.rules.splice(u,0,s),this.length++,!0)},o.prototype.deleteRule=function(u){this.rules.splice(u,1),this.length--},o.prototype.getRule=function(u){return u<this.length?this.rules[u]:""},o})(),yd=pi,tm={isServer:!pi,useCSSOMInjection:!Ph},Vd=(function(){function o(u,s,d){u===void 0&&(u=yn),s===void 0&&(s={});var h=this;this.options=at(at({},tm),u),this.gs=s,this.names=new Map(d),this.server=!!u.isServer,!this.server&&pi&&yd&&(yd=!1,$a(this)),ls(this,function(){return(function(w){for(var C=w.getTag(),z=C.length,b="",K=function(W){var Z=(function(he){return Oo.get(he)})(W);if(Z===void 0)return"continue";var ae=w.names.get(Z);if(ae===void 0||!ae.size)return"continue";var X=C.getGroup(W);if(X.length===0)return"continue";var U=vn+".g"+W+'[id="'+Z+'"]',Y="";ae.forEach(function(he){he.length>0&&(Y+=he+",")}),b+=X+U+'{content:"'+Y+'"}'+ns},G=0;G<z;G++)K(G);return b})(h)})}return o.registerId=function(u){return ci(u)},o.prototype.rehydrate=function(){!this.server&&pi&&$a(this)},o.prototype.reconstructWithOptions=function(u,s){s===void 0&&(s=!0);var d=new o(at(at({},this.options),u),this.gs,s&&this.names||void 0);return!this.server&&pi&&u.target!==this.options.target&&qa(this.options.target)!==qa(u.target)&&$a(d),d},o.prototype.allocateGSInstance=function(u){return this.gs[u]=(this.gs[u]||0)+1},o.prototype.getTag=function(){return this.tag||(this.tag=(u=(function(s){var d=s.useCSSOMInjection,h=s.target;return s.isServer?new em(h):d?new Zh(h):new Jh(h)})(this.options),new Gh(u)));var u},o.prototype.hasNameForId=function(u,s){var d,h;return(h=(d=this.names.get(u))===null||d===void 0?void 0:d.has(s))!==null&&h!==void 0&&h},o.prototype.registerName=function(u,s){ci(u);var d=this.names.get(u);d?d.add(s):this.names.set(u,new Set([s]))},o.prototype.insertRules=function(u,s,d){this.registerName(u,s),this.getTag().insertRules(ci(u),d)},o.prototype.clearNames=function(u){this.names.has(u)&&this.names.get(u).clear()},o.prototype.clearRules=function(u){this.getTag().clearGroup(ci(u)),this.clearNames(u)},o.prototype.clearTag=function(){this.tag=void 0},o})(),rm=/&/g,Jt=47,Br=42;function wd(o){if(o.indexOf("}")===-1)return!1;for(var u=o.length,s=0,d=0,h=!1,w=0;w<u;w++){var C=o.charCodeAt(w);if(d!==0||h||C!==Jt||o.charCodeAt(w+1)!==Br)if(h)C===Br&&o.charCodeAt(w+1)===Jt&&(h=!1,w++);else if(C!==34&&C!==39||w!==0&&o.charCodeAt(w-1)===92){if(d===0){if(C===123)s++;else if(C===125&&--s<0)return!0}}else d===0?d=C:d===C&&(d=0);else h=!0,w++}return s!==0||d!==0}function Gd(o,u){return o.map(function(s){return s.type==="rule"&&(s.value="".concat(u," ").concat(s.value),s.value=s.value.replaceAll(",",",".concat(u," ")),s.props=s.props.map(function(d){return"".concat(u," ").concat(d)})),Array.isArray(s.children)&&s.type!=="@keyframes"&&(s.children=Gd(s.children,u)),s})}function nm(o){var u,s,d,h=yn,w=h.options,C=w===void 0?yn:w,z=h.plugins,b=z===void 0?is:z,K=function(X,U,Y){return Y.startsWith(s)&&Y.endsWith(s)&&Y.replaceAll(s,"").length>0?".".concat(u):X},G=b.slice();G.push(function(X){X.type===Fo&&X.value.includes("&")&&(d||(d=new RegExp("\\".concat(s,"\\b"),"g")),X.props[0]=X.props[0].replace(rm,s).replace(d,K))}),C.prefix&&G.push(_h),G.push(Nh);var W=[],Z=Eh(G.concat(bh(function(X){return W.push(X)}))),ae=function(X,U,Y,he){U===void 0&&(U=""),Y===void 0&&(Y=""),he===void 0&&(he="&"),u=he,s=U,d=void 0;var ue=(function(I){if(!wd(I))return I;for(var q=I.length,H="",P=0,F=0,xe=0,Ie=!1,oe=0;oe<q;oe++){var Te=I.charCodeAt(oe);if(xe!==0||Ie||Te!==Jt||I.charCodeAt(oe+1)!==Br)if(Ie)Te===Br&&I.charCodeAt(oe+1)===Jt&&(Ie=!1,oe++);else if(Te!==34&&Te!==39||oe!==0&&I.charCodeAt(oe-1)===92){if(xe===0)if(Te===123)F++;else if(Te===125){if(--F<0){for(var Ce=oe+1;Ce<q;){var Ge=I.charCodeAt(Ce);if(Ge===59||Ge===10)break;Ce++}Ce<q&&I.charCodeAt(Ce)===59&&Ce++,F=0,oe=Ce-1,P=Ce;continue}F===0&&(H+=I.substring(P,oe+1),P=oe+1)}else Te===59&&F===0&&(H+=I.substring(P,oe+1),P=oe+1)}else xe===0?xe=Te:xe===Te&&(xe=0);else Ie=!0,oe++}if(P<q){var Ze=I.substring(P);wd(Ze)||(H+=Ze)}return H})((function(I){if(I.indexOf("//")===-1)return I;for(var q=I.length,H=[],P=0,F=0,xe=0,Ie=0;F<q;){var oe=I.charCodeAt(F);if(oe!==34&&oe!==39||F!==0&&I.charCodeAt(F-1)===92)if(xe===0)if(oe===Jt&&F+1<q&&I.charCodeAt(F+1)===Br){for(F+=2;F+1<q&&(I.charCodeAt(F)!==Br||I.charCodeAt(F+1)!==Jt);)F++;F+=2}else if(oe===40&&F>=3&&(32|I.charCodeAt(F-1))==108&&(32|I.charCodeAt(F-2))==114&&(32|I.charCodeAt(F-3))==117)Ie=1,F++;else if(Ie>0)oe===41?Ie--:oe===40&&Ie++,F++;else if(oe===Br&&F+1<q&&I.charCodeAt(F+1)===Jt)F>P&&H.push(I.substring(P,F)),P=F+=2;else if(oe===Jt&&F+1<q&&I.charCodeAt(F+1)===Jt){for(F>P&&H.push(I.substring(P,F));F<q&&I.charCodeAt(F)!==10;)F++;P=F}else F++;else F++;else xe===0?xe=oe:xe===oe&&(xe=0),F++}return P===0?I:(P<q&&H.push(I.substring(P)),H.join(""))})(X)),re=Sh(Y||U?"".concat(Y," ").concat(U," { ").concat(ue," }"):ue);return C.namespace&&(re=Gd(re,C.namespace)),W=[],Ro(re,Z),W};return ae.hash=b.length?b.reduce(function(X,U){return U.name||mi(15),Mr(X,U.name)},5381).toString():"",ae}var im=new Vd,Za=nm(),Yd=ft.createContext({shouldForwardProp:void 0,styleSheet:im,stylis:Za});Yd.Consumer;ft.createContext(void 0);function jd(){return ft.useContext(Yd)}var om=(function(){function o(u,s){var d=this;this.inject=function(h,w){w===void 0&&(w=Za);var C=d.name+w.hash;h.hasNameForId(d.id,C)||h.insertRules(d.id,C,w(d.rules,C,"@keyframes"))},this.name=u,this.id="sc-keyframes-".concat(u),this.rules=s,ls(this,function(){throw mi(12,String(d.name))})}return o.prototype.getName=function(u){return u===void 0&&(u=Za),this.name+u.hash},o})();function lm(o,u){return u==null||typeof u=="boolean"||u===""?"":typeof u!="number"||u===0||o in Th||o.startsWith("--")?String(u).trim():"".concat(u,"px")}var am=function(o){return o>="A"&&o<="Z"};function kd(o){for(var u="",s=0;s<o.length;s++){var d=o[s];if(s===1&&d==="-"&&o[0]==="-")return o;am(d)?u+="-"+d.toLowerCase():u+=d}return u.startsWith("ms-")?"-"+u:u}var Qd=function(o){return o==null||o===!1||o===""},Kd=function(o){var u=[];for(var s in o){var d=o[s];o.hasOwnProperty(s)&&!Qd(d)&&(Array.isArray(d)&&d.isCss||wn(d)?u.push("".concat(kd(s),":"),d,";"):hi(d)?u.push.apply(u,Lo(Lo(["".concat(s," {")],Kd(d),!1),["}"],!1)):u.push("".concat(kd(s),": ").concat(lm(s,d),";")))}return u};function Ur(o,u,s,d,h){if(h===void 0&&(h=[]),typeof o=="string")return o&&h.push(o),h;if(Qd(o))return h;if(os(o))return h.push(".".concat(o.styledComponentId)),h;if(wn(o)){if(!wn(C=o)||C.prototype&&C.prototype.isReactComponent||!u)return h.push(o),h;var w=o(u);return Ur(w,u,s,d,h)}var C;if(o instanceof om)return s?(o.inject(s,d),h.push(o.getName(d))):h.push(o),h;if(hi(o)){for(var z=Kd(o),b=0;b<z.length;b++)h.push(z[b]);return h}if(!Array.isArray(o))return h.push(o.toString()),h;for(b=0;b<o.length;b++)Ur(o[b],u,s,d,h);return h}function sm(o){for(var u=0;u<o.length;u+=1){var s=o[u];if(wn(s)&&!os(s))return!1}return!0}var um=Md(Uo),cm=(function(){function o(u,s,d){this.rules=u,this.staticRulesId="",this.isStatic=(d===void 0||d.isStatic)&&sm(u),this.componentId=s,this.baseHash=Mr(um,s),this.baseStyle=d,Vd.registerId(s)}return o.prototype.generateAndInjectStyles=function(u,s,d){var h=this.baseStyle?this.baseStyle.generateAndInjectStyles(u,s,d).className:"";if(this.isStatic&&!d.hash)if(this.staticRulesId&&s.hasNameForId(this.componentId,this.staticRulesId))h=Wr(h,this.staticRulesId);else{var w=xd(Ur(this.rules,u,s,d)),C=Ka(Mr(this.baseHash,w)>>>0);if(!s.hasNameForId(this.componentId,C)){var z=d(w,".".concat(C),void 0,this.componentId);s.insertRules(this.componentId,C,z)}h=Wr(h,C),this.staticRulesId=C}else{for(var b=Mr(this.baseHash,d.hash),K="",G=0;G<this.rules.length;G++){var W=this.rules[G];if(typeof W=="string")K+=W;else if(W){var Z=xd(Ur(W,u,s,d));b=Mr(Mr(b,String(G)),Z),K+=Z}}if(K){var ae=Ka(b>>>0);if(!s.hasNameForId(this.componentId,ae)){var X=d(K,".".concat(ae),void 0,this.componentId);s.insertRules(this.componentId,ae,X)}h=Wr(h,ae)}}return{className:h,css:typeof window=="undefined"?s.getTag().getGroup(ci(this.componentId)):""}},o})(),Xd=ft.createContext(void 0);Xd.Consumer;var Va={};function dm(o,u,s){var d=os(o),h=o,w=!Ha(o),C=u.attrs,z=C===void 0?is:C,b=u.componentId,K=b===void 0?(function(I,q){var H=typeof I!="string"?"sc":pd(I);Va[H]=(Va[H]||0)+1;var P="".concat(H,"-").concat(Dh(Uo+H+Va[H]));return q?"".concat(q,"-").concat(P):P})(u.displayName,u.parentComponentId):b,G=u.displayName,W=G===void 0?(function(I){return Ha(I)?"styled.".concat(I):"Styled(".concat(Ah(I),")")})(o):G,Z=u.displayName&&u.componentId?"".concat(pd(u.displayName),"-").concat(u.componentId):u.componentId||K,ae=d&&h.attrs?h.attrs.concat(z).filter(Boolean):z,X=u.shouldForwardProp;if(d&&h.shouldForwardProp){var U=h.shouldForwardProp;if(u.shouldForwardProp){var Y=u.shouldForwardProp;X=function(I,q){return U(I,q)&&Y(I,q)}}else X=U}var he=new cm(s,Z,d?h.componentStyle:void 0);function ue(I,q){return(function(H,P,F){var xe=H.attrs,Ie=H.componentStyle,oe=H.defaultProps,Te=H.foldedComponentIds,Ce=H.styledComponentId,Ge=H.target,Ze=ft.useContext(Xd),Ye=jd(),ve=H.shouldForwardProp||Ye.shouldForwardProp,T=Ih(P,Ze,oe)||yn,B=(function(ie,ce,se){for(var me,Ee=at(at({},ce),{className:void 0,theme:se}),tr=0;tr<ie.length;tr+=1){var Nr=wn(me=ie[tr])?me(Ee):me;for(var jt in Nr)jt==="className"?Ee.className=Wr(Ee.className,Nr[jt]):jt==="style"?Ee.style=at(at({},Ee.style),Nr[jt]):Ee[jt]=Nr[jt]}return"className"in ce&&typeof ce.className=="string"&&(Ee.className=Wr(Ee.className,ce.className)),Ee})(xe,P,T),L=B.as||Ge,g={};for(var j in B)B[j]===void 0||j[0]==="$"||j==="as"||j==="theme"&&B.theme===T||(j==="forwardedAs"?g.as=B.forwardedAs:ve&&!ve(j,L)||(g[j]=B[j]));var J=(function(ie,ce){var se=jd(),me=ie.generateAndInjectStyles(ce,se.styleSheet,se.stylis);return me})(Ie,B),ee=J.className,le=Wr(Te,Ce);return ee&&(le+=" "+ee),B.className&&(le+=" "+B.className),g[Ha(L)&&!Fd.has(L)?"class":"className"]=le,F&&(g.ref=F),ze.createElement(L,g)})(re,I,q)}ue.displayName=W;var re=ft.forwardRef(ue);return re.attrs=ae,re.componentStyle=he,re.displayName=W,re.shouldForwardProp=X,re.foldedComponentIds=d?Wr(h.foldedComponentIds,h.styledComponentId):"",re.styledComponentId=Z,re.target=d?h.target:o,Object.defineProperty(re,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(I){this._foldedDefaultProps=d?(function(q){for(var H=[],P=1;P<arguments.length;P++)H[P-1]=arguments[P];for(var F=0,xe=H;F<xe.length;F++)Xa(q,xe[F],!0);return q})({},h.defaultProps,I):I}}),ls(re,function(){return".".concat(re.styledComponentId)}),w&&Hd(re,o,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),re}function Sd(o,u){for(var s=[o[0]],d=0,h=u.length;d<h;d+=1)s.push(u[d],o[d+1]);return s}var Cd=function(o){return Object.assign(o,{isCss:!0})};function pm(o){for(var u=[],s=1;s<arguments.length;s++)u[s-1]=arguments[s];if(wn(o)||hi(o))return Cd(Ur(Sd(is,Lo([o],u,!0))));var d=o;return u.length===0&&d.length===1&&typeof d[0]=="string"?Ur(d):Cd(Ur(Sd(d,u)))}function Ja(o,u,s){if(s===void 0&&(s=yn),!u)throw mi(1,u);var d=function(h){for(var w=[],C=1;C<arguments.length;C++)w[C-1]=arguments[C];return o(u,s,pm.apply(void 0,Lo([h],w,!1)))};return d.attrs=function(h){return Ja(o,u,at(at({},s),{attrs:Array.prototype.concat(s.attrs,h).filter(Boolean)}))},d.withConfig=function(h){return Ja(o,u,at(at({},s),h))},d}var qd=function(o){return Ja(dm,o)},_=qd;Fd.forEach(function(o){_[o]=qd(o)});const Ga={Wrapper:_.div`
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:_.header`
        height: 60px;
        flex-shrink: 0;
    `,Main:_.main`
        flex: 1;
        overflow-y: auto;
        position: relative;

        .contentWrapper {
            min-height: 100%;
            max-width: 1440px;
            margin: auto;
            display: flex;
            flex-direction: column;
            padding: 15px;

            .category {
                margin: 30px 0 15px 0;
            }
        }

        .footerWrapper {
            flex-shrink: 0;
        }

        /* Topic wrappers - used for same-page scroll targeting */
        .topicWrapper {
            scroll-margin-top: 84px;
        }

        /* Optional - tiny spacing consistency */
        .topicWrapper + .topicWrapper {
            margin-top: 6px;
        }

        /* Pulse highlight when About scrolls here */
        .topicWrapper.a2rpFocusPulse {
            animation: a2rpFocusPulse 900ms ease;
        }

        @keyframes a2rpFocusPulse {
            0% {
                box-shadow: 0 0 0 0px
                    color-mix(in srgb, var(--color-primary) 28%, transparent);
                border-radius: 18px;
            }
            50% {
                box-shadow: 0 0 0 8px
                    color-mix(in srgb, var(--color-primary) 18%, transparent);
                border-radius: 18px;
            }
            100% {
                box-shadow: 0 0 0 0px
                    color-mix(in srgb, var(--color-primary) 0%, transparent);
                border-radius: 18px;
            }
        }
    `},Nd={Wrapper:_.header`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;

        border-bottom: 1px solid var(--color-border);

        background: color-mix(
            in srgb,
            var(--color-bg) 92%,
            var(--color-surface)
        );

        position: sticky;
        top: 0;
        z-index: 50;
        height: 64px;

        box-shadow: 0 10px 28px var(--color-shadow);
        overflow: hidden;

        /* Architecture vibe - blueprint glow + subtle structure grid */
        &::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;

            background-image:
                radial-gradient(
                    760px 220px at 16% 0%,
                    color-mix(in srgb, var(--color-primary) 12%, transparent),
                    transparent 66%
                ),
                radial-gradient(
                    620px 200px at 86% 10%,
                    color-mix(in srgb, var(--color-accent) 10%, transparent),
                    transparent 70%
                ),
                repeating-linear-gradient(
                    90deg,
                    color-mix(in srgb, var(--color-border) 18%, transparent) 0px,
                    color-mix(in srgb, var(--color-border) 18%, transparent) 1px,
                    transparent 1px,
                    transparent 30px
                ),
                repeating-linear-gradient(
                    0deg,
                    color-mix(in srgb, var(--color-border) 12%, transparent) 0px,
                    color-mix(in srgb, var(--color-border) 12%, transparent) 1px,
                    transparent 1px,
                    transparent 30px
                );

            opacity: 0.62;

            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0)
            );
        }

        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            pointer-events: none;
            background: linear-gradient(
                90deg,
                transparent,
                var(--color-primary),
                color-mix(
                    in srgb,
                    var(--color-primary) 55%,
                    var(--color-accent)
                ),
                transparent
            );
            opacity: 0.92;
        }
    `,Main:_.div`
        width: 100%;
        max-width: 1440px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
        position: relative;
        z-index: 1;

        .leftSide {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoNameWrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoWrapper {
            height: 50px;
            width: 50px;
            border-radius: 14px;
            position: relative;
            overflow: hidden;
            flex: 0 0 auto;
            padding: 6px;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border: 1px solid var(--color-border);

            box-shadow:
                0 0 0 1px
                    color-mix(in srgb, var(--color-primary) 10%, transparent),
                0 12px 24px var(--color-shadow);

            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
                display: block;
                transition: opacity 180ms ease;
                filter: saturate(1.06) contrast(1.03);
            }

            .logoSkeleton {
                position: absolute;
                inset: 0;
                background:
                    radial-gradient(
                        120px 90px at 20% 20%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 18%,
                            transparent
                        ),
                        transparent 62%
                    ),
                    radial-gradient(
                        120px 90px at 85% 80%,
                        color-mix(
                            in srgb,
                            var(--color-accent) 14%,
                            transparent
                        ),
                        transparent 62%
                    ),
                    var(--color-surface-2);
                opacity: 0.85;
            }
        }

        .nameWrapper {
            display: flex;
            flex-direction: column;
            gap: 2px;
            min-width: 0;

            .title {
                color: var(--color-text-primary);
                font-weight: 900;
                letter-spacing: 0.2px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .subTitle {
                color: var(--color-text-muted);
                font-size: 12px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            @media (width < 560px) {
                .subTitle {
                    display: none;
                }
            }

            @media (width < 420px) {
                display: none;
            }
        }

        .pillRow {
            display: flex;
            align-items: center;
            gap: 8px;

            @media (width < 760px) {
                display: none;
            }
        }

        .stat {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 7px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 800;

            box-shadow: 0 10px 22px var(--color-shadow);

            .sIcon {
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
                display: inline-flex;
            }

            .sIcon svg {
                width: 14px;
                height: 14px;
            }
        }

        .rightSide {
            display: flex;
            align-items: center;
            gap: 10px;
            flex: 0 0 auto;
        }

        .themeToggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 14px;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            border: 1px solid var(--color-border);
            color: var(--color-text-primary);

            box-shadow: 0 10px 22px var(--color-shadow);

            .icon {
                font-size: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }

            .label {
                font-size: 13px;
                font-weight: 800;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 3px;
                box-shadow:
                    0 0 0 4px
                        color-mix(
                            in srgb,
                            var(--color-primary) 18%,
                            transparent
                        ),
                    0 10px 22px var(--color-shadow);
            }

            @media (width < 420px) {
                .label {
                    display: none;
                }
            }
        }
    `},fm="/architecture-and-clean-code-core-notes/images/transparentLogo.png";var Zd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ed=ft.createContext&&ft.createContext(Zd),hm=["attr","size","title"];function mm(o,u){if(o==null)return{};var s=gm(o,u),d,h;if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(o);for(h=0;h<w.length;h++)d=w[h],!(u.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(o,d)&&(s[d]=o[d])}return s}function gm(o,u){if(o==null)return{};var s={};for(var d in o)if(Object.prototype.hasOwnProperty.call(o,d)){if(u.indexOf(d)>=0)continue;s[d]=o[d]}return s}function Do(){return Do=Object.assign?Object.assign.bind():function(o){for(var u=1;u<arguments.length;u++){var s=arguments[u];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&(o[d]=s[d])}return o},Do.apply(this,arguments)}function bd(o,u){var s=Object.keys(o);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(o);u&&(d=d.filter(function(h){return Object.getOwnPropertyDescriptor(o,h).enumerable})),s.push.apply(s,d)}return s}function Ao(o){for(var u=1;u<arguments.length;u++){var s=arguments[u]!=null?arguments[u]:{};u%2?bd(Object(s),!0).forEach(function(d){xm(o,d,s[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(s)):bd(Object(s)).forEach(function(d){Object.defineProperty(o,d,Object.getOwnPropertyDescriptor(s,d))})}return o}function xm(o,u,s){return u=vm(u),u in o?Object.defineProperty(o,u,{value:s,enumerable:!0,configurable:!0,writable:!0}):o[u]=s,o}function vm(o){var u=ym(o,"string");return typeof u=="symbol"?u:u+""}function ym(o,u){if(typeof o!="object"||!o)return o;var s=o[Symbol.toPrimitive];if(s!==void 0){var d=s.call(o,u);if(typeof d!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(u==="string"?String:Number)(o)}function Jd(o){return o&&o.map((u,s)=>ft.createElement(u.tag,Ao({key:s},u.attr),Jd(u.child)))}function Oe(o){return u=>ft.createElement(wm,Do({attr:Ao({},o.attr)},u),Jd(o.child))}function wm(o){var u=s=>{var{attr:d,size:h,title:w}=o,C=mm(o,hm),z=h||s.size||"1em",b;return s.className&&(b=s.className),o.className&&(b=(b?b+" ":"")+o.className),ft.createElement("svg",Do({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,d,C,{className:b,style:Ao(Ao({color:o.color||s.color},s.style),o.style),height:z,width:z,xmlns:"http://www.w3.org/2000/svg"}),w&&ft.createElement("title",null,w),o.children)};return Ed!==void 0?ft.createElement(Ed.Consumer,null,s=>u(s)):u(Zd)}function jm(o){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"},child:[]}]})(o)}function er(o){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(o)}function km(o){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(o)}function Ht(o){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(o)}function Sm(o){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(o)}function we(o){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(o)}function Cr(o){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(o)}function ep(o){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(o)}function Cm(o){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polygon",attr:{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"},child:[]}]})(o)}function Nm(o){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(o)}function Em(o){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(o)}function gi(o){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"},child:[]},{tag:"line",attr:{x1:"16",y1:"8",x2:"2",y2:"22"},child:[]},{tag:"line",attr:{x1:"17.5",y1:"15",x2:"9",y2:"15"},child:[]}]})(o)}function bm(o){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(o)}function _m(o){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"},child:[]}]})(o)}function Tm(o){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"path",attr:{d:"M6 21V9a9 9 0 0 0 9 9"},child:[]}]})(o)}function jn(o){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(o)}function Pm(o){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(o)}function zm(o){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(o)}function tp(o){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(o)}function Im(o){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(o)}function rp(o){return Oe({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(o)}const _d="architecture-and-clean-code-core-notes-theme",Lm=()=>{const[o,u]=ze.useState(!1),[s,d]=ze.useState("dark");ze.useEffect(()=>{const z=localStorage.getItem(_d)||"dark";d(z),z==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),ze.useEffect(()=>{s==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem(_d,s)},[s]);const h=ze.useMemo(()=>s==="light"?"dark":"light",[s]),w=()=>{d(h)};return a.jsx(Nd.Wrapper,{children:a.jsxs(Nd.Main,{children:[a.jsx("div",{className:"leftSide",children:a.jsxs("div",{className:"logoNameWrapper",children:[a.jsxs("div",{className:"logoWrapper",children:[!o&&a.jsx("div",{className:"logoSkeleton"}),a.jsx("img",{src:fm,alt:"architecture-and-clean-code-core-notes",onLoad:()=>u(!0),style:{opacity:o?1:0},loading:"lazy"})]}),a.jsxs("div",{className:"nameWrapper",children:[a.jsx("div",{className:"title",children:"architecture-and-clean-code-core-notes"}),a.jsx("div",{className:"subTitle",children:"SOLID, DRY, KISS, structure, readability, documentation"})]}),a.jsxs("div",{className:"pillRow",children:[a.jsxs("div",{className:"stat",children:[a.jsx("span",{className:"sIcon",children:a.jsx(jn,{})}),a.jsx("span",{children:"Architecture"})]}),a.jsxs("div",{className:"stat",children:[a.jsx("span",{className:"sIcon",children:a.jsx(gi,{})}),a.jsx("span",{children:"Clean Code"})]})]})]})}),a.jsx("div",{className:"rightSide",children:a.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:w,"aria-label":`Switch to ${h} theme`,title:`Switch to ${h}`,children:[a.jsx("span",{className:"icon",children:s==="light"?a.jsx(zm,{}):a.jsx(Im,{})}),a.jsx("span",{className:"label",children:s==="light"?"Light":"Dark"})]})})]})})},Rm={Wrapper:_.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 15px;
        border-top: 1px solid var(--color-border);

        font-size: 12px;
        color: var(--color-text-muted);

        .right a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        .right a:hover {
            color: var(--color-text-primary);
        }

        a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        a:hover {
            color: var(--color-text-primary);
        }

        @media (width < 600px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
        }
    `},Om=()=>a.jsxs(Rm.Wrapper,{children:[a.jsxs("div",{className:"left",children:["© ",new Date().getFullYear()," | All rights reserved"]}),a.jsxs("div",{className:"right",children:["By ",a.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]})]}),bo={Wrapper:_.section`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 60px 20px 40px;
    `,Container:_.div`
        width: 100%;
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        gap: 40px;
    `,Header:_.div`
        max-width: 720px;

        h2 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 26px;
            margin-bottom: 10px;
        }

        p {
            font-size: 15px;
            line-height: 1.7;
        }

        svg {
            color: var(--color-primary);
        }
    `,Grid:_.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 20px;

        .card {
            padding: 20px;
            border-radius: 16px;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            border: 1px solid var(--color-border);

            display: flex;
            flex-direction: column;
            gap: 10px;

            box-shadow: 0 10px 24px var(--color-shadow);
        }

        .card.wide {
            grid-column: span 2;
        }

        .icon {
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 10px;

            background: color-mix(
                in srgb,
                var(--color-primary) 18%,
                transparent
            );

            color: var(--color-primary);
            font-size: 18px;
        }

        h3 {
            font-size: 16px;
        }

        p {
            font-size: 14px;
            line-height: 1.6;
            color: var(--color-text-secondary);
        }

        @media (max-width: 720px) {
            .card.wide {
                grid-column: span 1;
            }
        }
    `},Dm=()=>a.jsx(bo.Wrapper,{children:a.jsxs(bo.Container,{children:[a.jsxs(bo.Header,{children:[a.jsxs("h2",{children:[a.jsx(jn,{}),"Architecture and Clean Code"]}),a.jsx("p",{children:"Writing software is not only about making code work. It is about designing systems that remain understandable, maintainable, and adaptable as they grow over time."})]}),a.jsxs(bo.Grid,{children:[a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"icon",children:a.jsx(jn,{})}),a.jsx("h3",{children:"Software Architecture"}),a.jsx("p",{children:"Architecture describes how different parts of a system are organized and how they communicate with each other. A good architecture keeps complexity manageable and allows systems to scale without collapsing under their own weight."})]}),a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"icon",children:a.jsx(gi,{})}),a.jsx("h3",{children:"Clean Code"}),a.jsx("p",{children:"Clean code focuses on readability, clarity, and simplicity. Code should communicate intent clearly so that other developers can understand and extend it without confusion."})]}),a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"icon",children:a.jsx(ep,{})}),a.jsx("h3",{children:"Engineering Discipline"}),a.jsx("p",{children:"Good software is rarely the result of clever tricks. It is the result of consistent practices such as structured project organization, meaningful naming, proper error handling, and clear documentation."})]}),a.jsxs("div",{className:"card",children:[a.jsx("div",{className:"icon",children:a.jsx(Ht,{})}),a.jsx("h3",{children:"Practical Principles"}),a.jsx("p",{children:"Principles such as SOLID, DRY, and KISS help guide engineers toward simpler and more maintainable designs. These ideas reduce duplication, prevent unnecessary complexity, and make systems easier to evolve."})]}),a.jsxs("div",{className:"card wide",children:[a.jsx("div",{className:"icon",children:a.jsx(jm,{})}),a.jsx("h3",{children:"Why This Matters"}),a.jsx("p",{children:"As software grows, poorly structured code becomes difficult to change. Small updates start breaking other features and the system slowly becomes fragile. Good architecture and clean code practices act like structural engineering for software, ensuring that systems remain stable as they expand."})]})]})]})}),Am={Button:_.button`
        position: fixed;
        right: 18px;
        bottom: 18px;
        z-index: 9999;

        width: 48px;
        height: 48px;

        display: grid;
        place-items: center;

        border-radius: 14px;
        border: 1px solid var(--color-border);

        background: color-mix(in srgb, var(--color-primary) 26%, transparent);
        color: var(--color-text-primary);

        box-shadow: 0 16px 44px var(--color-shadow);

        cursor: pointer;

        transition:
            transform 140ms ease,
            opacity 160ms ease,
            border-color 140ms ease,
            background-color 140ms ease;

        svg {
            width: 20px;
            height: 20px;
        }

        &.hide {
            opacity: 0;
            pointer-events: none;
            transform: translateY(10px) scale(0.98);
        }

        &.show {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0px) scale(1);
        }

        &:hover {
            transform: translateY(-2px) scale(1.02);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-primary) 34%,
                transparent
            );
        }

        &:active {
            transform: translateY(0px) scale(1);
        }
    `},Fm=({scrollerRef:o})=>{const[u,s]=ze.useState(!1);ze.useEffect(()=>{const h=o==null?void 0:o.current;if(!h)return;const w=()=>{const C=h.scrollTop||0;s(C>350)};return w(),h.addEventListener("scroll",w),()=>h.removeEventListener("scroll",w)},[o]);const d=()=>{const h=o==null?void 0:o.current;h&&h.scrollTo({top:0,behavior:"smooth"})};return a.jsx(Am.Button,{type:"button",onClick:d,className:u?"show":"hide","aria-label":"Go to top",title:"Go to top",children:a.jsx(km,{})})},Dt={Wrapper:_.section`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 18px 16px 28px;
    `,Card:_.div`
        width: 100%;
        max-width: 1200px;
        border-radius: 18px;
        border: 1px solid var(--color-border);

        background: linear-gradient(
            180deg,
            color-mix(in srgb, var(--color-surface) 92%, transparent),
            color-mix(in srgb, var(--color-surface-2) 92%, transparent)
        );

        box-shadow: 0 18px 40px var(--color-shadow);
        overflow: hidden;
    `,TopBar:_.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;

        padding: 16px 16px;
        border-bottom: 1px solid var(--color-border);

        background: color-mix(in srgb, var(--color-bg) 70%, transparent);

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .badge {
            width: 42px;
            height: 42px;
            border-radius: 14px;

            display: flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 14%,
                transparent
            );
            color: var(--color-primary);

            box-shadow: 0 12px 24px var(--color-shadow);
        }

        .titles {
            min-width: 0;
        }

        .title {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .subTitle {
            margin-top: 2px;
            font-size: 12px;
            color: var(--color-text-muted);

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .toggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;

            padding: 10px 12px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 12px 24px var(--color-shadow);

            color: var(--color-text-primary);

            transition:
                transform 140ms ease,
                border-color 140ms ease;

            &:hover {
                border-color: var(--color-border-light);
            }

            &:active {
                transform: translateY(1px);
            }
        }

        .toggleIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;

            color: color-mix(
                in srgb,
                var(--color-primary) 86%,
                var(--color-text-primary)
            );

            transition: transform 160ms ease;
        }

        .toggleText {
            font-size: 13px;
            font-weight: 800;
            color: var(--color-text-secondary);
        }

        @media (width < 520px) {
            .subTitle {
                display: none;
            }

            .toggleText {
                display: none;
            }
        }
    `,Body:_.div`
        padding: 16px;
        display: grid;
        gap: 16px;

        max-height: 0;
        opacity: 0;
        overflow: hidden;

        transform: translateY(-4px);
        transition:
            max-height 240ms ease,
            opacity 200ms ease,
            transform 200ms ease;

        &[data-open="true"] {
            max-height: 4000px;
            opacity: 1;
            transform: translateY(0px);
        }
    `,IntroRow:_.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;

        .introCard {
            padding: 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .introTitle {
            display: inline-flex;
            align-items: center;
            gap: 10px;

            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;

            svg {
                color: var(--color-accent);
            }
        }

        p {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.65;
        }

        @media (width < 860px) {
            grid-template-columns: 1fr;
        }
    `,SectionTitle:_.div`
        margin-top: 6px;
        font-weight: 900;
        color: var(--color-text-primary);
        letter-spacing: 0.2px;
    `,Grid:_.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;

        .itemCard {
            padding: 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .itemHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .i {
            width: 34px;
            height: 34px;
            border-radius: 12px;

            display: flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 14%,
                transparent
            );
            color: var(--color-primary);
        }

        .t {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .list {
            display: grid;
            gap: 8px;
            padding-left: 0;
            margin: 0;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.6;

            padding-left: 16px;
            position: relative;
        }

        .list li::before {
            content: "-";
            position: absolute;
            left: 0;
            color: var(--color-text-muted);
        }

        @media (width < 900px) {
            grid-template-columns: 1fr;
        }
    `,Examples:_.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 14px;

        .exCard {
            padding: 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );

            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .exTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;
        }

        .exText {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.65;
            margin-bottom: 10px;
        }

        .code {
            margin: 0;
            padding: 12px;
            border-radius: 14px;

            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);

            color: var(--color-text-primary);
            font-size: 12.5px;
            line-height: 1.55;
            overflow: auto;

            box-shadow: 0 14px 30px var(--color-shadow);
        }
    `,FooterNote:_.div`
        padding: 12px 14px;
        border-radius: 16px;

        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-primary) 10%, transparent);

        color: var(--color-text-secondary);
        font-size: 13.5px;
        line-height: 1.65;

        box-shadow: 0 14px 30px var(--color-shadow);
    `},Mm=()=>{const[o,u]=ze.useState(!1),s=ze.useMemo(()=>[{title:"Design principles are guidelines, not laws",icon:a.jsx(Cm,{}),points:["Design principles help you make better trade-offs under pressure","They reduce chaos in large codebases and teams","They do not guarantee perfection, they improve odds"]},{title:"Core goals of good design",icon:a.jsx(we,{}),points:["Low coupling - parts of the system should depend on each other as little as possible","High cohesion - a module should do one kind of job clearly","Clarity - code should explain intent, not just behavior","Change friendliness - new requirements should not force rewrites everywhere"]},{title:"Common design principles you will use all the time",icon:a.jsx(jn,{}),points:["Single Responsibility - one module, one reason to change","Separation of Concerns - UI, business logic, data access should not be mixed","Encapsulation - hide internal details, expose a small clean API","Composition over inheritance - build behavior by combining smaller pieces","Prefer explicitness - make important behavior obvious in code"]},{title:"Naming and boundaries matter more than clever code",icon:a.jsx(gi,{}),points:["A good name reduces the need for comments","Clear boundaries reduce bugs and speed up debugging","Small, predictable functions beat large, magical functions"]},{title:"A simple mental checklist before writing code",icon:a.jsx(rp,{}),points:["What is the responsibility of this file or function","What should it know and what should it not know","What can change in future and how to contain that change","How will a new teammate understand this in 30 seconds"]}],[]);return a.jsx(Dt.Wrapper,{children:a.jsxs(Dt.Card,{"data-open":o?"true":"false",children:[a.jsxs(Dt.TopBar,{children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"badge",children:a.jsx(Ht,{})}),a.jsxs("div",{className:"titles",children:[a.jsx("div",{className:"title",children:"Design Principles"}),a.jsx("div",{className:"subTitle",children:"The rules of thumb that keep codebases sane as they grow"})]})]}),a.jsxs("button",{type:"button",className:"toggleBtn",onClick:()=>u(d=>!d),"aria-expanded":o,"aria-label":o?"Collapse":"Expand",title:o?"Collapse":"Expand",children:[a.jsx("span",{className:"toggleIcon",children:a.jsx(Cr,{})}),a.jsx("span",{className:"toggleText",children:o?"Collapse":"Expand"})]})]}),a.jsxs(Dt.Body,{"data-open":o?"true":"false",children:[a.jsxs(Dt.IntroRow,{children:[a.jsxs("div",{className:"introCard",children:[a.jsxs("div",{className:"introTitle",children:[a.jsx(er,{}),"Beginner note"]}),a.jsx("p",{children:"Most bugs in real projects are not about syntax. They are caused by unclear responsibilities, hidden coupling, and messy boundaries. Design principles are about preventing that kind of mess early."})]}),a.jsxs("div",{className:"introCard",children:[a.jsxs("div",{className:"introTitle",children:[a.jsx(we,{}),"How to use these notes"]}),a.jsx("p",{children:"Read the principles, then look at the examples. Try to apply them to your current project structure. Keep it simple and consistent."})]})]}),a.jsx(Dt.SectionTitle,{children:"Key ideas in plain language"}),a.jsx(Dt.Grid,{children:s.map(d=>a.jsxs("div",{className:"itemCard",children:[a.jsxs("div",{className:"itemHead",children:[a.jsx("span",{className:"i",children:d.icon}),a.jsx("span",{className:"t",children:d.title})]}),a.jsx("ul",{className:"list",children:d.points.map(h=>a.jsx("li",{children:h},h))})]},d.title))}),a.jsx(Dt.SectionTitle,{children:"Mini examples"}),a.jsxs(Dt.Examples,{children:[a.jsxs("div",{className:"exCard",children:[a.jsx("div",{className:"exTitle",children:"Example 1 - single responsibility"}),a.jsx("div",{className:"exText",children:"If a function does validation, formatting, and database saving together, it has multiple responsibilities. Split into smaller functions with clear names."}),a.jsx("pre",{className:"code",children:`// not ideal - too many responsibilities
function createUser(payload) {
  validate(payload);
  const normalized = normalize(payload);
  const user = db.users.insert(normalized);
  auditLog("user_created", user.id);
  return user;
}

// better - clear steps, smaller pieces
function createUser(payload) {
  const input = validateUserInput(payload);
  const data = normalizeUserInput(input);
  const user = saveUser(data);
  logUserCreated(user.id);
  return user;
}`})]}),a.jsxs("div",{className:"exCard",children:[a.jsx("div",{className:"exTitle",children:"Example 2 - separation of concerns"}),a.jsx("div",{className:"exText",children:"UI components should not directly build SQL queries or know database details. Keep UI and data access separate via a service layer."}),a.jsx("pre",{className:"code",children:`// UI should not do data access details
// better - UI calls a service function

// ui layer
async function handleSave(formValues) {
  await userService.create(formValues);
}

// service layer
const userService = {
  async create(values) {
    const payload = mapUiToApi(values);
    return api.post("/users", payload);
  }
};`})]}),a.jsxs("div",{className:"exCard",children:[a.jsx("div",{className:"exTitle",children:"Example 3 - low coupling and clear boundaries"}),a.jsx("div",{className:"exText",children:"Instead of importing random helpers everywhere, group related code into modules with a small public API."}),a.jsx("pre",{className:"code",children:`// avoid - many files importing internal helpers directly
import { buildHeaders } from "./auth/internal";
import { parseToken } from "./auth/internal";

// better - module exports a clean API
import { auth } from "./auth";

auth.getHeaders();
auth.isLoggedIn();`})]})]}),a.jsx(Dt.FooterNote,{children:"Practical rule - if you are unsure, choose the design that makes the next developer's job easier. That next developer is usually you, in three weeks."})]})]})})},jr={Wrapper:_.section`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 18px 16px 28px;
    `,Card:_.div`
        width: 100%;
        max-width: 1200px;
        border-radius: 18px;
        border: 1px solid var(--color-border);

        background: linear-gradient(
            180deg,
            color-mix(in srgb, var(--color-surface) 92%, transparent),
            color-mix(in srgb, var(--color-surface-2) 92%, transparent)
        );

        box-shadow: 0 18px 40px var(--color-shadow);
        overflow: hidden;
    `,TopBar:_.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;

        padding: 16px 16px;
        border-bottom: 1px solid var(--color-border);

        background: color-mix(in srgb, var(--color-bg) 70%, transparent);

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .badge {
            width: 42px;
            height: 42px;
            border-radius: 14px;

            display: flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 14%,
                transparent
            );
            color: var(--color-primary);

            box-shadow: 0 12px 24px var(--color-shadow);
            flex: 0 0 auto;
        }

        .titles {
            min-width: 0;
        }

        .title {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .subTitle {
            margin-top: 2px;
            font-size: 12px;
            color: var(--color-text-muted);

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .pillRow {
            display: flex;
            align-items: center;
            gap: 8px;

            @media (width < 980px) {
                display: none;
            }
        }

        .stat {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 7px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 800;

            box-shadow: 0 10px 22px var(--color-shadow);

            .sIcon {
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
                display: inline-flex;
            }

            .sIcon svg {
                width: 14px;
                height: 14px;
            }
        }

        .toggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;

            padding: 10px 12px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 12px 24px var(--color-shadow);

            color: var(--color-text-primary);

            transition:
                transform 140ms ease,
                border-color 140ms ease;

            &:hover {
                border-color: var(--color-border-light);
            }

            &:active {
                transform: translateY(1px);
            }
        }

        .toggleIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;

            color: color-mix(
                in srgb,
                var(--color-primary) 86%,
                var(--color-text-primary)
            );

            transition: transform 160ms ease;

            &[data-open="true"] {
                transform: rotate(180deg);
            }
        }

        .toggleText {
            font-size: 13px;
            font-weight: 800;
            color: var(--color-text-secondary);
        }

        @media (width < 520px) {
            .subTitle {
                display: none;
            }

            .toggleText {
                display: none;
            }
        }
    `,Body:_.div`
        padding: 16px;
        display: grid;
        gap: 16px;

        max-height: 0;
        opacity: 0;
        overflow: hidden;

        transform: translateY(-4px);
        transition:
            max-height 240ms ease,
            opacity 200ms ease,
            transform 200ms ease;

        &[data-open="true"] {
            max-height: 8000px;
            opacity: 1;
            transform: translateY(0px);
        }
    `,IntroRow:_.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;

        .introCard {
            padding: 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .introTitle {
            display: inline-flex;
            align-items: center;
            gap: 10px;

            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;

            svg {
                color: var(--color-accent);
            }
        }

        p {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.65;
        }

        .dashList {
            display: grid;
            gap: 8px;
            padding-left: 0;
            margin: 0;
        }

        .dashList li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.6;

            padding-left: 16px;
            position: relative;
        }

        .dashList li::before {
            content: "-";
            position: absolute;
            left: 0;
            color: var(--color-text-muted);
        }

        @media (width < 860px) {
            grid-template-columns: 1fr;
        }
    `,SectionTitle:_.div`
        margin-top: 6px;
        font-weight: 900;
        color: var(--color-text-primary);
        letter-spacing: 0.2px;
    `,Grid:_.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;

        .itemCard {
            padding: 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);
            overflow: hidden;
        }

        .itemHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .i {
            width: 38px;
            height: 38px;
            border-radius: 14px;

            display: flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 14%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .headText {
            min-width: 0;
            display: grid;
            gap: 2px;
        }

        .k {
            font-size: 12px;
            font-weight: 900;
            letter-spacing: 0.3px;
            color: var(--color-text-muted);
        }

        .t {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .plain {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.65;
            margin-bottom: 12px;
        }

        .miniGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            margin-bottom: 12px;

            @media (width < 720px) {
                grid-template-columns: 1fr;
            }
        }

        .mini {
            padding: 12px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 86%,
                transparent
            );

            box-shadow: 0 12px 24px var(--color-shadow);
        }

        .miniTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;
            font-size: 13px;
        }

        .dashList {
            display: grid;
            gap: 8px;
            padding-left: 0;
            margin: 0;
        }

        .dashList li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.6;

            padding-left: 16px;
            position: relative;
        }

        .dashList li::before {
            content: "-";
            position: absolute;
            left: 0;
            color: var(--color-text-muted);
        }

        .codeTitle {
            margin-top: 10px;
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            letter-spacing: 0.2px;
        }

        .codeTitle.good {
            margin-top: 12px;
            color: color-mix(
                in srgb,
                var(--color-accent) 86%,
                var(--color-text-primary)
            );
        }

        .code {
            margin: 8px 0 0;
            padding: 12px;
            border-radius: 14px;

            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);

            color: var(--color-text-primary);
            font-size: 12.5px;
            line-height: 1.55;
            overflow: auto;

            box-shadow: 0 14px 30px var(--color-shadow);
        }

        @media (width < 980px) {
            grid-template-columns: 1fr;
        }
    `,FooterNote:_.div`
        padding: 12px 14px;
        border-radius: 16px;

        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-primary) 10%, transparent);

        color: var(--color-text-secondary);
        font-size: 13.5px;
        line-height: 1.65;

        box-shadow: 0 14px 30px var(--color-shadow);
    `},Bm=()=>{const[o,u]=ze.useState(!1),s=ze.useMemo(()=>[{key:"S",title:"S - Single Responsibility Principle",icon:a.jsx(gi,{}),plain:"A module should have one job and one reason to change.",whenGood:["You can describe the module in one sentence","Changes in one feature do not force edits across unrelated areas"],smell:["A file keeps growing because it owns many unrelated responsibilities","A function validates, formats, saves, logs, and emails in one place"],exampleBad:`// not ideal - multiple responsibilities in one function
function registerUser(payload) {
  validate(payload);
  const normalized = normalize(payload);
  const user = db.users.insert(normalized);
  sendWelcomeEmail(user.email);
  auditLog("user_registered", user.id);
  return user;
}`,exampleGood:`// better - responsibilities are separated with clear names
function registerUser(payload) {
  const input = validateUserInput(payload);
  const data = normalizeUserInput(input);
  const user = saveUser(data);
  sendWelcomeEmail(user.email);
  logUserRegistered(user.id);
  return user;
}

function saveUser(data) {
  return db.users.insert(data);
}`},{key:"O",title:"O - Open Closed Principle",icon:a.jsx(Sm,{}),plain:"Open for extension, closed for modification. Add new behavior without rewriting old code.",whenGood:["Adding a new type does not require changing many if else blocks","You can extend behavior by adding new modules"],smell:["Every new requirement forces edits inside a big switch statement","A single function knows all types and all rules"],exampleBad:`// not ideal - every new type changes this function
function getShippingCost(order) {
  if (order.type === "standard") return 40;
  if (order.type === "express") return 120;
  return 0;
}`,exampleGood:`// better - extend by adding new strategy
const shippingRules = {
  standard: () => 40,
  express: () => 120,
};

function getShippingCost(order) {
  const rule = shippingRules[order.type];
  return rule ? rule(order) : 0;
}

// later, add new type without touching getShippingCost
shippingRules.priority = () => 180;`},{key:"L",title:"L - Liskov Substitution Principle",icon:a.jsx(jn,{}),plain:"A subtype should be usable wherever its parent type is expected, without breaking behavior.",whenGood:["Replacing one implementation with another does not surprise callers","Your interface contract stays consistent across implementations"],smell:["Child class throws errors for methods that should work","Callers must add special cases for certain subtypes"],exampleBad:`// not ideal - a subtype breaks expected behavior
class Bird {
  fly() {
    return "flying";
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Penguins cannot fly");
  }
}

// any code expecting Bird.fly() can break with Penguin`,exampleGood:`// better - model capability with separate interfaces
class FlyingBird {
  fly() {
    return "flying";
  }
}

class Penguin {
  swim() {
    return "swimming";
  }
}

// callers depend on the right capability, no surprises`},{key:"I",title:"I - Interface Segregation Principle",icon:a.jsx(Pm,{}),plain:"Do not force clients to depend on methods they do not use. Prefer small focused interfaces.",whenGood:["Consumers only implement what they need","Interfaces stay minimal and easy to understand"],smell:["Many implementations have empty methods","A big interface tries to cover every possible feature"],exampleBad:`// not ideal - one big interface forces unused methods
class Worker {
  work() {}
  eat() {}
  sleep() {}
}

// a Robot worker does not eat or sleep but must implement them`,exampleGood:`// better - split into small focused interfaces
class Workable {
  work() {}
}

class Eatable {
  eat() {}
}

class Sleepable {
  sleep() {}
}

class Human extends Workable {
  work() {}
}
class HumanNeeds extends Eatable {
  eat() {}
}
class HumanRest extends Sleepable {
  sleep() {}
}

class Robot extends Workable {
  work() {}
}`},{key:"D",title:"D - Dependency Inversion Principle",icon:a.jsx(Tm,{}),plain:"Depend on abstractions, not concrete implementations. High-level policy should not depend on low-level details.",whenGood:["You can swap databases or APIs without rewriting business rules","Testing becomes easier with mocks and fakes"],smell:["Business logic imports database client directly","You cannot test without hitting real network or real DB"],exampleBad:`// not ideal - business logic depends on low level details
import { db } from "./db";

export async function createInvoice(order) {
  const invoice = buildInvoice(order);
  await db.invoices.insert(invoice);
  return invoice;
}`,exampleGood:`// better - inject dependency as an abstraction
export async function createInvoice(order, deps) {
  const invoice = buildInvoice(order);
  await deps.invoiceRepo.save(invoice);
  return invoice;
}

// implementation can be swapped
const invoiceRepo = {
  async save(invoice) {
    return db.invoices.insert(invoice);
  },
};

// tests can pass a fake repo`}],[]),d=ze.useMemo(()=>["S keeps responsibilities clean and prevents god files","O reduces risky edits and prevents condition explosion","L keeps substitution safe and avoids surprise behavior","I keeps contracts small and prevents unused method bloat","D keeps business rules independent from technical details"],[]);return a.jsx(jr.Wrapper,{children:a.jsxs(jr.Card,{children:[a.jsxs(jr.TopBar,{children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"badge",children:a.jsx(tp,{})}),a.jsxs("div",{className:"titles",children:[a.jsx("div",{className:"title",children:"SOLID"}),a.jsx("div",{className:"subTitle",children:"5 design principles that keep code scalable and maintainable"})]}),a.jsxs("div",{className:"pillRow",children:[a.jsxs("div",{className:"stat",children:[a.jsx("span",{className:"sIcon",children:a.jsx(we,{})}),a.jsx("span",{children:"Maintainable"})]}),a.jsxs("div",{className:"stat",children:[a.jsx("span",{className:"sIcon",children:a.jsx(Ht,{})}),a.jsx("span",{children:"Principles"})]})]})]}),a.jsxs("button",{type:"button",className:"toggleBtn",onClick:()=>u(h=>!h),"aria-expanded":o,"aria-label":o?"Collapse":"Expand",title:o?"Collapse":"Expand",children:[a.jsx("span",{className:"toggleIcon","data-open":o?"true":"false",children:a.jsx(Cr,{})}),a.jsx("span",{className:"toggleText",children:o?"Collapse":"Expand"})]})]}),a.jsxs(jr.Body,{"data-open":o?"true":"false",children:[a.jsxs(jr.IntroRow,{children:[a.jsxs("div",{className:"introCard",children:[a.jsxs("div",{className:"introTitle",children:[a.jsx(er,{}),"Beginner note"]}),a.jsx("p",{children:"SOLID is not about writing more code. It is about creating clean boundaries so change does not spread everywhere. Use it when a codebase is growing or when teams are working together."})]}),a.jsxs("div",{className:"introCard",children:[a.jsxs("div",{className:"introTitle",children:[a.jsx(we,{}),"Quick summary"]}),a.jsx("ul",{className:"dashList",children:d.map(h=>a.jsx("li",{children:h},h))})]})]}),a.jsx(jr.SectionTitle,{children:"SOLID explained with practical mini examples"}),a.jsx(jr.Grid,{children:s.map(h=>a.jsxs("div",{className:"itemCard",children:[a.jsxs("div",{className:"itemHead",children:[a.jsx("span",{className:"i",children:h.icon}),a.jsxs("div",{className:"headText",children:[a.jsx("div",{className:"k",children:h.key}),a.jsx("div",{className:"t",children:h.title})]})]}),a.jsx("div",{className:"plain",children:h.plain}),a.jsxs("div",{className:"miniGrid",children:[a.jsxs("div",{className:"mini",children:[a.jsx("div",{className:"miniTitle",children:"When it helps"}),a.jsx("ul",{className:"dashList",children:h.whenGood.map(w=>a.jsx("li",{children:w},w))})]}),a.jsxs("div",{className:"mini",children:[a.jsx("div",{className:"miniTitle",children:"Common smells"}),a.jsx("ul",{className:"dashList",children:h.smell.map(w=>a.jsx("li",{children:w},w))})]})]}),a.jsx("div",{className:"codeTitle",children:"Example"}),a.jsx("pre",{className:"code",children:h.exampleBad}),a.jsx("div",{className:"codeTitle good",children:"Improved version"}),a.jsx("pre",{className:"code",children:h.exampleGood})]},h.key))}),a.jsx(jr.FooterNote,{children:"Practical rule - Start simple. Apply SOLID where change is frequent. If a module rarely changes, do not over engineer it."})]})]})})},At={Wrapper:_.section`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 18px 16px 28px;
    `,Card:_.div`
        width: 100%;
        max-width: 1200px;
        border-radius: 18px;
        border: 1px solid var(--color-border);

        background: linear-gradient(
            180deg,
            color-mix(in srgb, var(--color-surface) 92%, transparent),
            color-mix(in srgb, var(--color-surface-2) 92%, transparent)
        );

        box-shadow: 0 18px 40px var(--color-shadow);
        overflow: hidden;
    `,TopBar:_.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;

        padding: 16px 16px;
        border-bottom: 1px solid var(--color-border);

        background: color-mix(in srgb, var(--color-bg) 70%, transparent);

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .badge {
            width: 42px;
            height: 42px;
            border-radius: 14px;

            display: flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 14%,
                transparent
            );
            color: var(--color-primary);

            box-shadow: 0 12px 24px var(--color-shadow);
            flex: 0 0 auto;
        }

        .titles {
            min-width: 0;
        }

        .title {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .subTitle {
            margin-top: 2px;
            font-size: 12px;
            color: var(--color-text-muted);

            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .pillRow {
            display: flex;
            align-items: center;
            gap: 8px;

            @media (width < 980px) {
                display: none;
            }
        }

        .stat {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 7px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 800;

            box-shadow: 0 10px 22px var(--color-shadow);

            .sIcon {
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
                display: inline-flex;
            }

            .sIcon svg {
                width: 14px;
                height: 14px;
            }
        }

        .toggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;

            padding: 10px 12px;
            border-radius: 14px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 12px 24px var(--color-shadow);

            color: var(--color-text-primary);

            transition:
                transform 140ms ease,
                border-color 140ms ease;

            &:hover {
                border-color: var(--color-border-light);
            }

            &:active {
                transform: translateY(1px);
            }
        }

        .toggleIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;

            color: color-mix(
                in srgb,
                var(--color-primary) 86%,
                var(--color-text-primary)
            );

            transition: transform 160ms ease;

            &[data-open="true"] {
                transform: rotate(180deg);
            }
        }

        .toggleText {
            font-size: 13px;
            font-weight: 800;
            color: var(--color-text-secondary);
        }

        @media (width < 520px) {
            .subTitle {
                display: none;
            }

            .toggleText {
                display: none;
            }
        }
    `,Body:_.div`
        padding: 16px;
        display: grid;
        gap: 16px;

        max-height: 0;
        opacity: 0;
        overflow: hidden;

        transform: translateY(-4px);
        transition:
            max-height 240ms ease,
            opacity 200ms ease,
            transform 200ms ease;

        &[data-open="true"] {
            max-height: 6000px;
            opacity: 1;
            transform: translateY(0px);
        }
    `,IntroRow:_.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;

        .introCard {
            padding: 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .introTitle {
            display: inline-flex;
            align-items: center;
            gap: 10px;

            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;

            svg {
                color: var(--color-accent);
            }
        }

        p {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.65;
        }

        @media (width < 860px) {
            grid-template-columns: 1fr;
        }
    `,SectionTitle:_.div`
        margin-top: 6px;
        font-weight: 900;
        color: var(--color-text-primary);
        letter-spacing: 0.2px;
    `,Grid:_.div`
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;

        .itemCard {
            padding: 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .itemHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .i {
            width: 34px;
            height: 34px;
            border-radius: 12px;

            display: flex;
            align-items: center;
            justify-content: center;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 14%,
                transparent
            );
            color: var(--color-primary);
        }

        .t {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 14px;
        }

        .dashList {
            display: grid;
            gap: 8px;
            padding-left: 0;
            margin: 0;
        }

        .dashList li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.6;

            padding-left: 16px;
            position: relative;
        }

        .dashList li::before {
            content: "-";
            position: absolute;
            left: 0;
            color: var(--color-text-muted);
        }

        @media (width < 900px) {
            grid-template-columns: 1fr;
        }
    `,Examples:_.div`
        display: grid;
        gap: 14px;

        .exCard {
            padding: 14px;
            border-radius: 16px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );

            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .exTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;
        }

        .exText {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.65;
            margin-bottom: 10px;
        }

        .code {
            margin: 0;
            padding: 12px;
            border-radius: 14px;

            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);

            color: var(--color-text-primary);
            font-size: 12.5px;
            line-height: 1.55;
            overflow: auto;

            box-shadow: 0 14px 30px var(--color-shadow);
        }
    `,FooterNote:_.div`
        padding: 12px 14px;
        border-radius: 16px;

        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-primary) 10%, transparent);

        color: var(--color-text-secondary);
        font-size: 13.5px;
        line-height: 1.65;

        box-shadow: 0 14px 30px var(--color-shadow);
    `},Wm=()=>{const[o,u]=ze.useState(!1),s=ze.useMemo(()=>[{title:"What DRY really means",icon:a.jsx(Ht,{}),points:["DRY means avoid duplication of knowledge, not just duplicated lines","If the same rule exists in multiple places, future changes will break something","Good DRY creates one source of truth for a behavior"]},{title:"Where duplication hides in real projects",icon:a.jsx(jn,{}),points:["Validation rules repeated in UI and API without a shared contract","API URLs, headers, and error mapping repeated across multiple files","Copy pasted UI blocks for cards, tables, empty states, modals","Business rules duplicated in controllers and services"]},{title:"When DRY is worth doing",icon:a.jsx(we,{}),points:["When a rule changes often and multiple places must be updated","When duplication causes bugs and inconsistent behavior","When a shared utility improves clarity instead of hiding logic"]},{title:"When NOT to DRY",icon:a.jsx(er,{}),points:["When two pieces of code only look similar today but may diverge tomorrow","When abstraction creates a hard to understand mega helper","When you end up passing 12 options into one generic function"]},{title:"A practical DRY checklist",icon:a.jsx(rp,{}),points:["Is this duplicated behavior or duplicated text","Will these two places always change together","Can I extract a small named function without adding complexity","Will a beginner teammate understand this extraction quickly"]}],[]);return a.jsx(At.Wrapper,{children:a.jsxs(At.Card,{children:[a.jsxs(At.TopBar,{children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"badge",children:a.jsx(Nm,{})}),a.jsxs("div",{className:"titles",children:[a.jsx("div",{className:"title",children:"DRY"}),a.jsx("div",{className:"subTitle",children:"Don't Repeat Yourself - avoid duplicated knowledge"})]}),a.jsxs("div",{className:"pillRow",children:[a.jsxs("div",{className:"stat",children:[a.jsx("span",{className:"sIcon",children:a.jsx(ep,{})}),a.jsx("span",{children:"Maintainable"})]}),a.jsxs("div",{className:"stat",children:[a.jsx("span",{className:"sIcon",children:a.jsx(Ht,{})}),a.jsx("span",{children:"One Truth"})]})]})]}),a.jsxs("button",{type:"button",className:"toggleBtn",onClick:()=>u(d=>!d),"aria-expanded":o,"aria-label":o?"Collapse":"Expand",title:o?"Collapse":"Expand",children:[a.jsx("span",{className:"toggleIcon","data-open":o?"true":"false",children:a.jsx(Cr,{})}),a.jsx("span",{className:"toggleText",children:o?"Collapse":"Expand"})]})]}),a.jsxs(At.Body,{"data-open":o?"true":"false",children:[a.jsxs(At.IntroRow,{children:[a.jsxs("div",{className:"introCard",children:[a.jsxs("div",{className:"introTitle",children:[a.jsx(er,{}),"Beginner note"]}),a.jsx("p",{children:'DRY is not "never repeat code". DRY is about avoiding multiple sources of truth. If you copy paste the same business rule into 3 places, future changes will create inconsistencies.'})]}),a.jsxs("div",{className:"introCard",children:[a.jsxs("div",{className:"introTitle",children:[a.jsx(we,{}),"Simple definition"]}),a.jsx("p",{children:"If the same rule exists in multiple places, you have duplication of knowledge. DRY asks you to keep that rule in one clear place."})]})]}),a.jsx(At.SectionTitle,{children:"DRY concepts in plain language"}),a.jsx(At.Grid,{children:s.map(d=>a.jsxs("div",{className:"itemCard",children:[a.jsxs("div",{className:"itemHead",children:[a.jsx("span",{className:"i",children:d.icon}),a.jsx("span",{className:"t",children:d.title})]}),a.jsx("ul",{className:"dashList",children:d.points.map(h=>a.jsx("li",{children:h},h))})]},d.title))}),a.jsx(At.SectionTitle,{children:"Mini examples"}),a.jsxs(At.Examples,{children:[a.jsxs("div",{className:"exCard",children:[a.jsx("div",{className:"exTitle",children:"Example 1 - duplication in validation"}),a.jsx("div",{className:"exText",children:"When validation rules are copy pasted across multiple handlers, updates become risky. Extract a small function with a clear name."}),a.jsx("pre",{className:"code",children:`// not ideal - repeated checks across files
function validateEmail(email) {
  if (!email) throw new Error("Email is required");
  if (!email.includes("@")) throw new Error("Email is invalid");
}

function validateSignup(values) {
  if (!values.email) throw new Error("Email is required");
  if (!values.email.includes("@")) throw new Error("Email is invalid");
  if (!values.password) throw new Error("Password is required");
}

// better - one source of truth
function requireValidEmail(email) {
  if (!email) throw new Error("Email is required");
  if (!email.includes("@")) throw new Error("Email is invalid");
  return email.trim().toLowerCase();
}

function validateSignup(values) {
  const email = requireValidEmail(values.email);
  if (!values.password) throw new Error("Password is required");
  return { ...values, email };
}`})]}),a.jsxs("div",{className:"exCard",children:[a.jsx("div",{className:"exTitle",children:"Example 2 - duplication in API calls"}),a.jsx("div",{className:"exText",children:"If every file repeats base URL, headers, and error mapping, changes become painful. Keep one API layer."}),a.jsx("pre",{className:"code",children:`// not ideal - repeated API setup everywhere
async function fetchUsers() {
  const res = await fetch("https://api.site.com/users", {
    headers: { Authorization: "Bearer " + token }
  });
  if (!res.ok) throw new Error("Request failed");
  return res.json();
}

// better - central API helper
async function apiGet(path) {
  const res = await fetch(API_BASE + path, { headers: buildHeaders() });
  if (!res.ok) throw mapError(res);
  return res.json();
}

async function fetchUsers() {
  return apiGet("/users");
}`})]}),a.jsxs("div",{className:"exCard",children:[a.jsx("div",{className:"exTitle",children:'Example 3 - "false DRY" over abstraction'}),a.jsx("div",{className:"exText",children:"DRY can be misused. If you create one mega helper that accepts too many flags, you are hiding complexity, not removing it."}),a.jsx("pre",{className:"code",children:`// risky - one mega function with too many options
renderCard(data, { isCompact, isAdmin, showMeta, showActions, showBadge });

// better - a few focused components or functions
renderCompactCard(data);
renderAdminCard(data);
renderDefaultCard(data);`})]})]}),a.jsx(At.FooterNote,{children:"Practical rule - Extract duplication only when you can name it clearly. If you cannot give it a clear name, you probably do not understand the abstraction yet."})]})]})})},Ft={Wrapper:_.section`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 18px 16px 28px;
    `,Card:_.div`
        width: 100%;
        max-width: 1200px;
        border-radius: 18px;
        border: 1px solid var(--color-border);

        background: linear-gradient(
            180deg,
            var(--color-surface),
            var(--color-surface-2)
        );

        box-shadow: 0 18px 40px var(--color-shadow);
        overflow: hidden;
    `,TopBar:_.div`
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 16px;
        border-bottom: 1px solid var(--color-border);

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .badge {
            width: 40px;
            height: 40px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 12px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                transparent
            );
            color: var(--color-primary);
        }

        .title {
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .subTitle {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .toggleBtn {
            display: flex;
            align-items: center;
            gap: 8px;

            padding: 8px 12px;

            border-radius: 12px;
            border: 1px solid var(--color-border);

            background: var(--color-surface);
        }

        .toggleIcon[data-open="true"] {
            transform: rotate(180deg);
        }
    `,Body:_.div`
        padding: 18px;
        display: grid;
        gap: 16px;

        max-height: 0;
        overflow: hidden;
        opacity: 0;

        transition: all 0.25s ease;

        &[data-open="true"] {
            max-height: 3000px;
            opacity: 1;
        }
    `,IntroRow:_.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;

        .introCard {
            padding: 14px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
        }

        .introTitle {
            font-weight: 900;
            margin-bottom: 6px;
        }

        @media (max-width: 800px) {
            grid-template-columns: 1fr;
        }
    `,SectionTitle:_.div`
        font-weight: 900;
        color: var(--color-text-primary);
    `,Grid:_.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;

        .itemCard {
            padding: 14px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
        }

        .itemHead {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 900;
            margin-bottom: 6px;
        }

        ul {
            padding-left: 16px;
        }

        li {
            color: var(--color-text-secondary);
        }

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    `,ExampleCard:_.div`
        padding: 14px;
        border-radius: 14px;
        border: 1px solid var(--color-border);

        .code {
            background: var(--color-code-bg);
            padding: 12px;
            border-radius: 10px;
            font-size: 12px;
        }
    `,FooterNote:_.div`
        padding: 12px;
        border-radius: 12px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-primary) 8%, transparent);
    `},Um=()=>{const[o,u]=ze.useState(!1);return a.jsx(Ft.Wrapper,{children:a.jsxs(Ft.Card,{children:[a.jsxs(Ft.TopBar,{children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"badge",children:a.jsx(gi,{})}),a.jsxs("div",{className:"titles",children:[a.jsx("div",{className:"title",children:"KISS"}),a.jsx("div",{className:"subTitle",children:"Keep It Simple - avoid unnecessary complexity"})]})]}),a.jsxs("button",{type:"button",className:"toggleBtn",onClick:()=>u(s=>!s),"aria-expanded":o,children:[a.jsx("span",{className:"toggleIcon","data-open":o?"true":"false",children:a.jsx(Cr,{})}),a.jsx("span",{className:"toggleText",children:o?"Collapse":"Expand"})]})]}),a.jsxs(Ft.Body,{"data-open":o?"true":"false",children:[a.jsxs(Ft.IntroRow,{children:[a.jsxs("div",{className:"introCard",children:[a.jsxs("div",{className:"introTitle",children:[a.jsx(Ht,{}),"What KISS means"]}),a.jsx("p",{children:'KISS stands for "Keep It Simple". The idea is that systems should be designed as simply as possible. Complex designs create hidden bugs, confusing code, and difficult maintenance.'})]}),a.jsxs("div",{className:"introCard",children:[a.jsxs("div",{className:"introTitle",children:[a.jsx(we,{}),"Why simplicity matters"]}),a.jsx("p",{children:"Simple code is easier to read, easier to debug, and easier to extend. In real software projects, clarity usually beats cleverness."})]})]}),a.jsx(Ft.SectionTitle,{children:"Practical KISS guidelines"}),a.jsxs(Ft.Grid,{children:[a.jsxs("div",{className:"itemCard",children:[a.jsxs("div",{className:"itemHead",children:[a.jsx(we,{}),"Prefer clarity over clever tricks"]}),a.jsxs("ul",{children:[a.jsx("li",{children:"Write code that is easy to understand"}),a.jsx("li",{children:"Avoid overly clever one-line expressions"}),a.jsx("li",{children:"Future developers should understand code quickly"})]})]}),a.jsxs("div",{className:"itemCard",children:[a.jsxs("div",{className:"itemHead",children:[a.jsx(we,{}),"Avoid premature abstraction"]}),a.jsxs("ul",{children:[a.jsx("li",{children:"Do not create generic frameworks too early"}),a.jsx("li",{children:"Wait until patterns become clear before abstracting"}),a.jsx("li",{children:"Simple duplication is sometimes better than bad abstraction"})]})]}),a.jsxs("div",{className:"itemCard",children:[a.jsxs("div",{className:"itemHead",children:[a.jsx(we,{}),"Prefer small readable functions"]}),a.jsxs("ul",{children:[a.jsx("li",{children:"Functions should do one simple thing"}),a.jsx("li",{children:"Short functions improve readability"}),a.jsx("li",{children:"Clear naming is more valuable than comments"})]})]}),a.jsxs("div",{className:"itemCard",children:[a.jsxs("div",{className:"itemHead",children:[a.jsx(er,{}),"Signs your code is too complex"]}),a.jsxs("ul",{children:[a.jsx("li",{children:"Functions with too many parameters"}),a.jsx("li",{children:"Nested condition blocks everywhere"}),a.jsx("li",{children:"Hard to explain logic in plain language"})]})]})]}),a.jsx(Ft.SectionTitle,{children:"Example"}),a.jsxs(Ft.ExampleCard,{children:[a.jsx("div",{className:"exTitle",children:"Complex solution vs simple solution"}),a.jsx("pre",{className:"code",children:`// overly complex
function isEven(n) {
  return !!(n % 2 === 0 ? true : false);
}

// simple and clear
function isEven(n) {
  return n % 2 === 0;
}`})]}),a.jsx(Ft.FooterNote,{children:"Practical rule - if two solutions solve the same problem, prefer the simpler one."})]})]})})},Mt={Wrapper:_.section`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 18px 16px 28px;
    `,Card:_.div`
        width: 100%;
        max-width: 1200px;
        border-radius: 18px;
        border: 1px solid var(--color-border);

        background: linear-gradient(
            180deg,
            var(--color-surface),
            var(--color-surface-2)
        );

        box-shadow: 0 18px 40px var(--color-shadow);
        overflow: hidden;
    `,TopBar:_.div`
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 16px;
        border-bottom: 1px solid var(--color-border);

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .badge {
            width: 40px;
            height: 40px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 12px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                transparent
            );
            color: var(--color-primary);
        }

        .title {
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .subTitle {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .toggleBtn {
            display: flex;
            align-items: center;
            gap: 8px;

            padding: 8px 12px;

            border-radius: 12px;
            border: 1px solid var(--color-border);

            background: var(--color-surface);
        }

        .toggleIcon[data-open="true"] {
            transform: rotate(180deg);
        }
    `,Body:_.div`
        padding: 18px;
        display: grid;
        gap: 16px;

        max-height: 0;
        overflow: hidden;
        opacity: 0;

        transition: all 0.25s ease;

        &[data-open="true"] {
            max-height: 3000px;
            opacity: 1;
        }
    `,IntroRow:_.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;

        .introCard {
            padding: 14px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
        }

        .introTitle {
            font-weight: 900;
            margin-bottom: 6px;
        }

        @media (max-width: 800px) {
            grid-template-columns: 1fr;
        }
    `,SectionTitle:_.div`
        font-weight: 900;
        color: var(--color-text-primary);
    `,Grid:_.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;

        .itemCard {
            padding: 14px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
        }

        .itemHead {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 900;
            margin-bottom: 6px;
        }

        ul {
            padding-left: 16px;
        }

        li {
            color: var(--color-text-secondary);
        }

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    `,ExampleCard:_.div`
        padding: 14px;
        border-radius: 14px;
        border: 1px solid var(--color-border);

        .code {
            background: var(--color-code-bg);
            padding: 12px;
            border-radius: 10px;
            font-size: 12px;
        }
    `,FooterNote:_.div`
        padding: 12px;
        border-radius: 12px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-primary) 8%, transparent);
    `},Hm=()=>{const[o,u]=ze.useState(!1);return a.jsx(Mt.Wrapper,{children:a.jsxs(Mt.Card,{children:[a.jsxs(Mt.TopBar,{children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"badge",children:a.jsx(_m,{})}),a.jsxs("div",{className:"titles",children:[a.jsx("div",{className:"title",children:"Project Structure"}),a.jsx("div",{className:"subTitle",children:"Organizing code so systems remain easy to navigate"})]})]}),a.jsxs("button",{type:"button",className:"toggleBtn",onClick:()=>u(s=>!s),"aria-expanded":o,children:[a.jsx("span",{className:"toggleIcon","data-open":o?"true":"false",children:a.jsx(Cr,{})}),a.jsx("span",{className:"toggleText",children:o?"Collapse":"Expand"})]})]}),a.jsxs(Mt.Body,{"data-open":o?"true":"false",children:[a.jsxs(Mt.IntroRow,{children:[a.jsxs("div",{className:"introCard",children:[a.jsxs("div",{className:"introTitle",children:[a.jsx(Ht,{}),"What project structure means"]}),a.jsx("p",{children:"Project structure defines how files and directories are organized in a codebase. A good structure helps developers quickly understand where logic belongs and where new code should be added."})]}),a.jsxs("div",{className:"introCard",children:[a.jsxs("div",{className:"introTitle",children:[a.jsx(we,{}),"Why it matters"]}),a.jsx("p",{children:"When projects grow, poor structure causes confusion. Developers spend time searching for files instead of building features. A clear structure keeps systems predictable and easier to maintain."})]})]}),a.jsx(Mt.SectionTitle,{children:"Principles of a good project structure"}),a.jsxs(Mt.Grid,{children:[a.jsxs("div",{className:"itemCard",children:[a.jsxs("div",{className:"itemHead",children:[a.jsx(we,{}),"Group by responsibility"]}),a.jsxs("ul",{children:[a.jsx("li",{children:"Separate UI, logic, and data layers"}),a.jsx("li",{children:"Group related features together"}),a.jsx("li",{children:"Keep utilities in a shared location"})]})]}),a.jsxs("div",{className:"itemCard",children:[a.jsxs("div",{className:"itemHead",children:[a.jsx(we,{}),"Predictable file locations"]}),a.jsxs("ul",{children:[a.jsx("li",{children:"Developers should know where code belongs"}),a.jsx("li",{children:"Similar features should follow the same structure"}),a.jsx("li",{children:"Avoid random files at the root of the project"})]})]}),a.jsxs("div",{className:"itemCard",children:[a.jsxs("div",{className:"itemHead",children:[a.jsx(we,{}),"Modular organization"]}),a.jsxs("ul",{children:[a.jsx("li",{children:"Break systems into smaller modules"}),a.jsx("li",{children:"Each module should handle a clear feature"}),a.jsx("li",{children:"Modules reduce coupling between parts of the system"})]})]}),a.jsxs("div",{className:"itemCard",children:[a.jsxs("div",{className:"itemHead",children:[a.jsx(er,{}),"Signs of bad structure"]}),a.jsxs("ul",{children:[a.jsx("li",{children:"Files with unrelated responsibilities"}),a.jsx("li",{children:"Huge directories containing everything"}),a.jsx("li",{children:"Difficult to find where logic belongs"})]})]})]}),a.jsx(Mt.SectionTitle,{children:"Example structure"}),a.jsx(Mt.ExampleCard,{children:a.jsx("pre",{className:"code",children:`src/
  components/
    header/
    footer/
    button/

  pages/
    home/
    dashboard/
    settings/

  services/
    api.js
    authService.js

  utils/
    dateUtils.js
    formatUtils.js

  hooks/
    useAuth.js
    useFetch.js

  styles/
    theme.css`})}),a.jsx(Mt.FooterNote,{children:"Practical rule - a new developer should understand your project structure within a few minutes."})]})]})})},Bt={Wrapper:_.section`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 18px 16px 28px;
    `,Card:_.div`
        width: 100%;
        max-width: 1200px;
        border-radius: 18px;
        border: 1px solid var(--color-border);

        background: linear-gradient(
            180deg,
            var(--color-surface),
            var(--color-surface-2)
        );

        box-shadow: 0 18px 40px var(--color-shadow);
        overflow: hidden;
    `,TopBar:_.div`
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 16px;
        border-bottom: 1px solid var(--color-border);

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .badge {
            width: 40px;
            height: 40px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 12px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                transparent
            );
            color: var(--color-primary);
        }

        .title {
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .subTitle {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .toggleBtn {
            display: flex;
            align-items: center;
            gap: 8px;

            padding: 8px 12px;

            border-radius: 12px;
            border: 1px solid var(--color-border);

            background: var(--color-surface);
        }

        .toggleIcon[data-open="true"] {
            transform: rotate(180deg);
        }
    `,Body:_.div`
        padding: 18px;
        display: grid;
        gap: 16px;

        max-height: 0;
        overflow: hidden;
        opacity: 0;

        transition: all 0.25s ease;

        &[data-open="true"] {
            max-height: 3000px;
            opacity: 1;
        }
    `,IntroRow:_.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;

        .introCard {
            padding: 14px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
        }

        .introTitle {
            font-weight: 900;
            margin-bottom: 6px;
        }

        @media (max-width: 800px) {
            grid-template-columns: 1fr;
        }
    `,SectionTitle:_.div`
        font-weight: 900;
        color: var(--color-text-primary);
    `,Grid:_.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;

        .itemCard {
            padding: 14px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
        }

        .itemHead {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 900;
            margin-bottom: 6px;
        }

        ul {
            padding-left: 16px;
        }

        li {
            color: var(--color-text-secondary);
        }

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    `,ExampleCard:_.div`
        padding: 14px;
        border-radius: 14px;
        border: 1px solid var(--color-border);

        .code {
            background: var(--color-code-bg);
            padding: 12px;
            border-radius: 10px;
            font-size: 12px;
        }
    `,FooterNote:_.div`
        padding: 12px;
        border-radius: 12px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-primary) 8%, transparent);
    `},$m=()=>{const[o,u]=ze.useState(!1);return a.jsx(Bt.Wrapper,{children:a.jsxs(Bt.Card,{children:[a.jsxs(Bt.TopBar,{children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"badge",children:a.jsx(Em,{})}),a.jsxs("div",{className:"titles",children:[a.jsx("div",{className:"title",children:"Code Readability"}),a.jsx("div",{className:"subTitle",children:"Writing code that humans can easily understand"})]})]}),a.jsxs("button",{type:"button",className:"toggleBtn",onClick:()=>u(s=>!s),"aria-expanded":o,children:[a.jsx("span",{className:"toggleIcon","data-open":o?"true":"false",children:a.jsx(Cr,{})}),a.jsx("span",{className:"toggleText",children:o?"Collapse":"Expand"})]})]}),a.jsxs(Bt.Body,{"data-open":o?"true":"false",children:[a.jsxs(Bt.IntroRow,{children:[a.jsxs("div",{className:"introCard",children:[a.jsxs("div",{className:"introTitle",children:[a.jsx(Ht,{}),"What readability means"]}),a.jsx("p",{children:"Code readability means writing code so that other developers can quickly understand what it does. Clear code reduces bugs, speeds up development, and makes maintenance easier."})]}),a.jsxs("div",{className:"introCard",children:[a.jsxs("div",{className:"introTitle",children:[a.jsx(we,{}),"Why readability matters"]}),a.jsx("p",{children:"In most projects, code is read far more often than it is written. When code is easy to read, debugging, extending features, and onboarding new developers becomes much easier."})]})]}),a.jsx(Bt.SectionTitle,{children:"Principles of readable code"}),a.jsxs(Bt.Grid,{children:[a.jsxs("div",{className:"itemCard",children:[a.jsxs("div",{className:"itemHead",children:[a.jsx(we,{}),"Use meaningful names"]}),a.jsxs("ul",{children:[a.jsx("li",{children:"Variable names should describe their purpose"}),a.jsx("li",{children:"Avoid vague names like data or temp"}),a.jsx("li",{children:"Use consistent naming conventions"})]})]}),a.jsxs("div",{className:"itemCard",children:[a.jsxs("div",{className:"itemHead",children:[a.jsx(we,{}),"Keep functions small"]}),a.jsxs("ul",{children:[a.jsx("li",{children:"Functions should do one clear task"}),a.jsx("li",{children:"Smaller functions are easier to read"}),a.jsx("li",{children:"Long functions usually hide multiple responsibilities"})]})]}),a.jsxs("div",{className:"itemCard",children:[a.jsxs("div",{className:"itemHead",children:[a.jsx(we,{}),"Maintain consistent formatting"]}),a.jsxs("ul",{children:[a.jsx("li",{children:"Use consistent indentation"}),a.jsx("li",{children:"Organize code blocks logically"}),a.jsx("li",{children:"Follow a consistent style guide"})]})]}),a.jsxs("div",{className:"itemCard",children:[a.jsxs("div",{className:"itemHead",children:[a.jsx(er,{}),"Avoid overly clever code"]}),a.jsxs("ul",{children:[a.jsx("li",{children:"Clever tricks reduce readability"}),a.jsx("li",{children:"Prefer simple and explicit logic"}),a.jsx("li",{children:"Code should be understandable at first glance"})]})]})]}),a.jsx(Bt.SectionTitle,{children:"Example"}),a.jsxs(Bt.ExampleCard,{children:[a.jsx("div",{className:"exTitle",children:"Poor readability vs clear readability"}),a.jsx("pre",{className:"code",children:`// unclear variable names
function calc(a, b) {
  return a * b;
}

// better naming
function calculateArea(width, height) {
  return width * height;
}`})]}),a.jsx(Bt.FooterNote,{children:"Practical rule - if someone reading your code has to stop and think too long, the code can probably be made clearer."})]})]})})},Wt={Wrapper:_.section`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 18px 16px 28px;
    `,Card:_.div`
        width: 100%;
        max-width: 1200px;
        border-radius: 18px;
        border: 1px solid var(--color-border);

        background: linear-gradient(
            180deg,
            var(--color-surface),
            var(--color-surface-2)
        );

        box-shadow: 0 18px 40px var(--color-shadow);
        overflow: hidden;
    `,TopBar:_.div`
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 16px;
        border-bottom: 1px solid var(--color-border);

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .badge {
            width: 40px;
            height: 40px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 12px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                transparent
            );
            color: var(--color-primary);
        }

        .title {
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .subTitle {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .toggleBtn {
            display: flex;
            align-items: center;
            gap: 8px;

            padding: 8px 12px;

            border-radius: 12px;
            border: 1px solid var(--color-border);

            background: var(--color-surface);
        }

        .toggleIcon[data-open="true"] {
            transform: rotate(180deg);
        }
    `,Body:_.div`
        padding: 18px;
        display: grid;
        gap: 16px;

        max-height: 0;
        overflow: hidden;
        opacity: 0;

        transition: all 0.25s ease;

        &[data-open="true"] {
            max-height: 3000px;
            opacity: 1;
        }
    `,IntroRow:_.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;

        .introCard {
            padding: 14px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
        }

        .introTitle {
            font-weight: 900;
            margin-bottom: 6px;
        }

        @media (max-width: 800px) {
            grid-template-columns: 1fr;
        }
    `,SectionTitle:_.div`
        font-weight: 900;
        color: var(--color-text-primary);
    `,Grid:_.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;

        .itemCard {
            padding: 14px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
        }

        .itemHead {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 900;
            margin-bottom: 6px;
        }

        ul {
            padding-left: 16px;
        }

        li {
            color: var(--color-text-secondary);
        }

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    `,ExampleCard:_.div`
        padding: 14px;
        border-radius: 14px;
        border: 1px solid var(--color-border);

        .code {
            background: var(--color-code-bg);
            padding: 12px;
            border-radius: 10px;
            font-size: 12px;
        }
    `,FooterNote:_.div`
        padding: 12px;
        border-radius: 12px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-primary) 8%, transparent);
    `},Vm=()=>{const[o,u]=ze.useState(!1);return a.jsx(Wt.Wrapper,{children:a.jsxs(Wt.Card,{children:[a.jsxs(Wt.TopBar,{children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"badge",children:a.jsx(er,{})}),a.jsxs("div",{className:"titles",children:[a.jsx("div",{className:"title",children:"Error Handling Strategy"}),a.jsx("div",{className:"subTitle",children:"Designing systems that behave safely when things go wrong"})]})]}),a.jsxs("button",{type:"button",className:"toggleBtn",onClick:()=>u(s=>!s),"aria-expanded":o,children:[a.jsx("span",{className:"toggleIcon","data-open":o?"true":"false",children:a.jsx(Cr,{})}),a.jsx("span",{className:"toggleText",children:o?"Collapse":"Expand"})]})]}),a.jsxs(Wt.Body,{"data-open":o?"true":"false",children:[a.jsxs(Wt.IntroRow,{children:[a.jsxs("div",{className:"introCard",children:[a.jsxs("div",{className:"introTitle",children:[a.jsx(Ht,{}),"What error handling means"]}),a.jsx("p",{children:"Error handling is the process of detecting, reporting, and responding to unexpected situations in software. A good strategy ensures systems remain stable and predictable even when failures occur."})]}),a.jsxs("div",{className:"introCard",children:[a.jsxs("div",{className:"introTitle",children:[a.jsx(we,{}),"Why it matters"]}),a.jsx("p",{children:"Without proper error handling, applications may crash, produce incorrect results, or hide important failures. A clear strategy helps developers detect problems early and recover safely."})]})]}),a.jsx(Wt.SectionTitle,{children:"Principles of good error handling"}),a.jsxs(Wt.Grid,{children:[a.jsxs("div",{className:"itemCard",children:[a.jsxs("div",{className:"itemHead",children:[a.jsx(we,{}),"Fail clearly"]}),a.jsxs("ul",{children:[a.jsx("li",{children:"Errors should communicate what went wrong"}),a.jsx("li",{children:"Avoid silent failures that hide problems"}),a.jsx("li",{children:"Use clear error messages"})]})]}),a.jsxs("div",{className:"itemCard",children:[a.jsxs("div",{className:"itemHead",children:[a.jsx(we,{}),"Handle errors close to the source"]}),a.jsxs("ul",{children:[a.jsx("li",{children:"Validate inputs early"}),a.jsx("li",{children:"Catch errors where recovery is possible"}),a.jsx("li",{children:"Prevent invalid data from spreading"})]})]}),a.jsxs("div",{className:"itemCard",children:[a.jsxs("div",{className:"itemHead",children:[a.jsx(we,{}),"Use centralized handling"]}),a.jsxs("ul",{children:[a.jsx("li",{children:"Applications should have a global error handler"}),a.jsx("li",{children:"Logging and monitoring should capture failures"}),a.jsx("li",{children:"Avoid repeating try-catch logic everywhere"})]})]}),a.jsxs("div",{className:"itemCard",children:[a.jsxs("div",{className:"itemHead",children:[a.jsx(tp,{}),"Protect system stability"]}),a.jsxs("ul",{children:[a.jsx("li",{children:"Never expose sensitive data in errors"}),a.jsx("li",{children:"Prevent crashes from propagating through the system"}),a.jsx("li",{children:"Provide fallback behavior when possible"})]})]})]}),a.jsx(Wt.SectionTitle,{children:"Example"}),a.jsxs(Wt.ExampleCard,{children:[a.jsx("div",{className:"exTitle",children:"Poor error handling vs better error handling"}),a.jsx("pre",{className:"code",children:`// poor error handling
function getUser(id) {
  return database.findUser(id);
}

// improved error handling
function getUser(id) {
  if (!id) {
    throw new Error("User id is required");
  }

  const user = database.findUser(id);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}`})]}),a.jsx(Wt.FooterNote,{children:"Practical rule - errors should be predictable, informative, and safely handled so the system remains stable."})]})]})})},Ut={Wrapper:_.section`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 18px 16px 28px;
    `,Card:_.div`
        width: 100%;
        max-width: 1200px;
        border-radius: 18px;
        border: 1px solid var(--color-border);

        background: linear-gradient(
            180deg,
            var(--color-surface),
            var(--color-surface-2)
        );

        box-shadow: 0 18px 40px var(--color-shadow);
        overflow: hidden;
    `,TopBar:_.div`
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 16px;
        border-bottom: 1px solid var(--color-border);

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .badge {
            width: 40px;
            height: 40px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 12px;
            border: 1px solid var(--color-border);

            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                transparent
            );
            color: var(--color-primary);
        }

        .title {
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .subTitle {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .toggleBtn {
            display: flex;
            align-items: center;
            gap: 8px;

            padding: 8px 12px;

            border-radius: 12px;
            border: 1px solid var(--color-border);

            background: var(--color-surface);
        }

        .toggleIcon[data-open="true"] {
            transform: rotate(180deg);
        }
    `,Body:_.div`
        padding: 18px;
        display: grid;
        gap: 16px;

        max-height: 0;
        overflow: hidden;
        opacity: 0;

        transition: all 0.25s ease;

        &[data-open="true"] {
            max-height: 3000px;
            opacity: 1;
        }
    `,IntroRow:_.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;

        .introCard {
            padding: 14px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
        }

        .introTitle {
            font-weight: 900;
            margin-bottom: 6px;
        }

        @media (max-width: 800px) {
            grid-template-columns: 1fr;
        }
    `,SectionTitle:_.div`
        font-weight: 900;
        color: var(--color-text-primary);
    `,Grid:_.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px;

        .itemCard {
            padding: 14px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
        }

        .itemHead {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 900;
            margin-bottom: 6px;
        }

        ul {
            padding-left: 16px;
        }

        li {
            color: var(--color-text-secondary);
        }

        @media (max-width: 900px) {
            grid-template-columns: 1fr;
        }
    `,ExampleCard:_.div`
        padding: 14px;
        border-radius: 14px;
        border: 1px solid var(--color-border);

        .code {
            background: var(--color-code-bg);
            padding: 12px;
            border-radius: 10px;
            font-size: 12px;
        }
    `,FooterNote:_.div`
        padding: 12px;
        border-radius: 12px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-primary) 8%, transparent);
    `},Gm=()=>{const[o,u]=ze.useState(!1);return a.jsx(Ut.Wrapper,{children:a.jsxs(Ut.Card,{children:[a.jsxs(Ut.TopBar,{children:[a.jsxs("div",{className:"left",children:[a.jsx("div",{className:"badge",children:a.jsx(Ht,{})}),a.jsxs("div",{className:"titles",children:[a.jsx("div",{className:"title",children:"Documentation"}),a.jsx("div",{className:"subTitle",children:"Explaining systems so humans understand how they work"})]})]}),a.jsxs("button",{type:"button",className:"toggleBtn",onClick:()=>u(s=>!s),"aria-expanded":o,children:[a.jsx("span",{className:"toggleIcon","data-open":o?"true":"false",children:a.jsx(Cr,{})}),a.jsx("span",{className:"toggleText",children:o?"Collapse":"Expand"})]})]}),a.jsxs(Ut.Body,{"data-open":o?"true":"false",children:[a.jsxs(Ut.IntroRow,{children:[a.jsxs("div",{className:"introCard",children:[a.jsxs("div",{className:"introTitle",children:[a.jsx(bm,{}),"What documentation means"]}),a.jsx("p",{children:"Documentation explains how software works, why decisions were made, and how developers should use or modify the system. It helps teams understand the structure and behavior of the project."})]}),a.jsxs("div",{className:"introCard",children:[a.jsxs("div",{className:"introTitle",children:[a.jsx(we,{}),"Why documentation matters"]}),a.jsx("p",{children:"Without documentation, developers must read large amounts of code just to understand basic concepts. Good documentation reduces confusion, improves collaboration, and speeds up onboarding."})]})]}),a.jsx(Ut.SectionTitle,{children:"Types of documentation"}),a.jsxs(Ut.Grid,{children:[a.jsxs("div",{className:"itemCard",children:[a.jsxs("div",{className:"itemHead",children:[a.jsx(we,{}),"Project documentation"]}),a.jsxs("ul",{children:[a.jsx("li",{children:"Explains project purpose and goals"}),a.jsx("li",{children:"Describes system architecture"}),a.jsx("li",{children:"Provides setup and installation steps"})]})]}),a.jsxs("div",{className:"itemCard",children:[a.jsxs("div",{className:"itemHead",children:[a.jsx(we,{}),"Code documentation"]}),a.jsxs("ul",{children:[a.jsx("li",{children:"Comments explaining complex logic"}),a.jsx("li",{children:"Function descriptions"}),a.jsx("li",{children:"API usage details"})]})]}),a.jsxs("div",{className:"itemCard",children:[a.jsxs("div",{className:"itemHead",children:[a.jsx(we,{}),"API documentation"]}),a.jsxs("ul",{children:[a.jsx("li",{children:"Endpoint descriptions"}),a.jsx("li",{children:"Request and response formats"}),a.jsx("li",{children:"Error handling information"})]})]}),a.jsxs("div",{className:"itemCard",children:[a.jsxs("div",{className:"itemHead",children:[a.jsx(er,{}),"Signs of poor documentation"]}),a.jsxs("ul",{children:[a.jsx("li",{children:"Outdated or incorrect information"}),a.jsx("li",{children:"Missing setup instructions"}),a.jsx("li",{children:"Unexplained design decisions"})]})]})]}),a.jsx(Ut.SectionTitle,{children:"Example"}),a.jsxs(Ut.ExampleCard,{children:[a.jsx("div",{className:"exTitle",children:"Example function documentation"}),a.jsx("pre",{className:"code",children:`/**
 * Calculates the total price including tax
 *
 * @param {number} price - base product price
 * @param {number} taxRate - tax percentage
 * @returns {number} total price including tax
 */
function calculateTotal(price, taxRate) {
  return price + price * taxRate;
}`})]}),a.jsx(Ut.FooterNote,{children:"Practical rule - if a new developer joins the team, they should understand the system quickly using your documentation."})]})]})})},Ym=()=>{const o=ze.useRef(null);return a.jsxs(Ga.Wrapper,{children:[a.jsx(Ga.Header,{children:a.jsx(Lm,{})}),a.jsxs(Ga.Main,{ref:o,children:[a.jsxs("div",{className:"contentWrapper",children:[a.jsx(Dm,{}),a.jsx(Mm,{}),a.jsx(Bm,{}),a.jsx(Wm,{}),a.jsx(Um,{}),a.jsx(Hm,{}),a.jsx($m,{}),a.jsx(Vm,{}),a.jsx(Gm,{})]}),a.jsx("div",{className:"footerWrapper",children:a.jsx(Om,{})})]}),a.jsx(Fm,{scrollerRef:o})]})};uh.createRoot(document.getElementById("root")).render(a.jsx(a.Fragment,{children:a.jsx(Ym,{})}));
