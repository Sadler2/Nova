(self.webpackChunkreact_cad=self.webpackChunkreact_cad||[]).push([[285],{11314:(me,F,w)=>{"use strict";w.d(F,{zt:()=>B,Pi:()=>z});var u=w(38481),c=w(22142),m=w(7127),_=0;function V(e){if(typeof Symbol=="function")return Symbol(e);var r="__$mobx-react "+e+" ("+_+")";return _++,r}var j={};function b(e){return j[e]||(j[e]=V(e)),j[e]}function A(e,r){if(M(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var t=Object.keys(e),n=Object.keys(r);if(t.length!==n.length)return!1;for(var o=0;o<t.length;o++)if(!Object.hasOwnProperty.call(r,t[o])||!M(e[t[o]],r[t[o]]))return!1;return!0}function M(e,r){return e===r?e!==0||1/e==1/r:e!==e&&r!==r}var N={$$typeof:1,render:1,compare:1,type:1,childContextTypes:1,contextType:1,contextTypes:1,defaultProps:1,getDefaultProps:1,getDerivedStateFromError:1,getDerivedStateFromProps:1,mixins:1,propTypes:1};function ee(e,r){var t=Object.getOwnPropertyNames(Object.getPrototypeOf(e));Object.getOwnPropertyNames(e).forEach(function(n){!N[n]&&t.indexOf(n)===-1&&Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(e,n))})}function d(e,r,t){Object.hasOwnProperty.call(e,r)?e[r]=t:Object.defineProperty(e,r,{enumerable:!1,configurable:!0,writable:!0,value:t})}var U=b("patchMixins"),T=b("patchedDefinition");function re(e,r){var t=e[U]=e[U]||{},n=t[r]=t[r]||{};return n.locks=n.locks||0,n.methods=n.methods||[],n}function D(e,r){for(var t=this,n=arguments.length,o=new Array(n>2?n-2:0),a=2;a<n;a++)o[a-2]=arguments[a];r.locks++;try{var i;return e!=null&&(i=e.apply(this,o)),i}finally{r.locks--,r.locks===0&&r.methods.forEach(function(s){s.apply(t,o)})}}function $(e,r){var t=function(){for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];D.call.apply(D,[this,e,r].concat(a))};return t}function k(e,r,t){var n=re(e,r);n.methods.indexOf(t)<0&&n.methods.push(t);var o=Object.getOwnPropertyDescriptor(e,r);if(!(o&&o[T])){var a=e[r],i=I(e,r,o?o.enumerable:void 0,n,a);Object.defineProperty(e,r,i)}}function I(e,r,t,n,o){var a,i=$(o,n);return a={},a[T]=!0,a.get=function(){return i},a.set=function(f){if(this===e)i=$(f,n);else{var l=I(this,r,t,n,f);Object.defineProperty(this,r,l)}},a.configurable=!0,a.enumerable=t,a}var E=u.so||"$mobx",W=b("isMobXReactObserver"),L=b("isUnmounted"),O=b("skipRender"),g=b("isForcingUpdate");function te(e){var r=e.prototype;if(e[W]){var t=x(r);console.warn("The provided component class ("+t+`) 
                has already been declared as an observer component.`)}else e[W]=!0;if(r.componentWillReact)throw new Error("The componentWillReact life-cycle event is no longer supported");if(e.__proto__!==c.PureComponent){if(!r.shouldComponentUpdate)r.shouldComponentUpdate=H;else if(r.shouldComponentUpdate!==H)throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.")}X(r,"props"),X(r,"state");var n=r.render;return r.render=function(){return ne.call(this,n)},k(r,"componentWillUnmount",function(){var o;if((0,m.FY)()!==!0&&((o=this.render[E])==null||o.dispose(),this[L]=!0,!this.render[E])){var a=x(this);console.warn("The reactive render of an observer class component ("+a+`) 
                was overriden after MobX attached. This may result in a memory leak if the 
                overriden reactive render was not properly disposed.`)}}),e}function x(e){return e.displayName||e.name||e.constructor&&(e.constructor.displayName||e.constructor.name)||"<component>"}function ne(e){var r=this;if((0,m.FY)()===!0)return e.call(this);d(this,O,!1),d(this,g,!1);var t=x(this),n=e.bind(this),o=!1,a=new u.le(t+".render()",function(){if(!o&&(o=!0,r[L]!==!0)){var s=!0;try{d(r,g,!0),r[O]||c.Component.prototype.forceUpdate.call(r),s=!1}finally{d(r,g,!1),s&&a.dispose()}}});a.reactComponent=this,i[E]=a,this.render=i;function i(){o=!1;var s=void 0,f=void 0;if(a.track(function(){try{f=(0,u.$$)(!1,n)}catch(l){s=l}}),s)throw s;return f}return i.call(this)}function H(e,r){return(0,m.FY)()&&console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side."),this.state!==r?!0:!A(this.props,e)}function X(e,r){var t=b("reactProp_"+r+"_valueHolder"),n=b("reactProp_"+r+"_atomHolder");function o(){return this[n]||d(this,n,(0,u.cp)("reactive "+r)),this[n]}Object.defineProperty(e,r,{configurable:!0,enumerable:!0,get:function(){var i=!1;return u.wM&&u.mJ&&(i=(0,u.wM)(!0)),o.call(this).reportObserved(),u.wM&&u.mJ&&(0,u.mJ)(i),this[t]},set:function(i){!this[g]&&!A(this[t],i)?(d(this,t,i),d(this,O,!0),o.call(this).reportChanged(),d(this,O,!1)):d(this,t,i)}})}var Y=typeof Symbol=="function"&&Symbol.for,J=Y?Symbol.for("react.forward_ref"):typeof c.forwardRef=="function"&&(0,c.forwardRef)(function(e){return null}).$$typeof,q=Y?Symbol.for("react.memo"):typeof c.memo=="function"&&(0,c.memo)(function(e){return null}).$$typeof;function z(e){if(e.isMobxInjector===!0&&console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'"),q&&e.$$typeof===q)throw new Error("Mobx observer: You are trying to use 'observer' on a function component wrapped in either another observer or 'React.memo'. The observer already applies 'React.memo' for you.");if(J&&e.$$typeof===J){var r=e.render;if(typeof r!="function")throw new Error("render property of ForwardRef was not a function");return(0,c.forwardRef)(function(){var n=arguments;return(0,c.createElement)(m.Qj,null,function(){return r.apply(void 0,n)})})}return typeof e=="function"&&(!e.prototype||!e.prototype.render)&&!e.isReactClass&&!Object.prototype.isPrototypeOf.call(c.Component,e)?(0,m.Pi)(e):te(e)}function P(){return P=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},P.apply(this,arguments)}function oe(e,r){if(e==null)return{};var t={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(r.indexOf(o)>=0)&&(t[o]=e[o]);return t}var S=c.createContext({});function B(e){var r=e.children,t=oe(e,["children"]),n=c.useContext(S),o=c.useRef(P({},n,t)),a=o.current;if(!1)var i;return c.createElement(S.Provider,{value:a},r)}B.displayName="MobXProvider";function Q(e,r,t,n){var o=React__default.forwardRef(function(a,i){var s=P({},a),f=React__default.useContext(S);return Object.assign(s,e(f||{},s)||{}),i&&(s.ref=i),React__default.createElement(r,s)});return n&&(o=z(o)),o.isMobxInjector=!0,ee(r,o),o.wrappedComponent=r,o.displayName=ae(r,t),o}function ae(e,r){var t,n=e.displayName||e.name||e.constructor&&e.constructor.name||"Component";return r?t="inject-with-"+r+"("+n+")":t="inject("+n+")",t}function ie(e){return function(r,t){return e.forEach(function(n){if(!(n in t)){if(!(n in r))throw new Error("MobX injector: Store '"+n+"' is not available! Make sure it is provided by some Provider");t[n]=r[n]}}),t}}function we(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(typeof arguments[0]=="function"){var n=arguments[0];return function(o){return Q(n,o,n.name,!0)}}else return function(o){return Q(ie(r),o,r.join("-"),!1)}}var R=null,C=null;function se(){var e=this;[].concat(this[R]||[],this[C]||[]).forEach(function(r){var t=typeof r=="string"?e[r]:r;t!=null&&(Array.isArray(t)?t.map(function(n){return n()}):t())})}function fe(e,r){if(Array.isArray(r))return r.map(function(f){return fe(e,f)});var t=Object.getPrototypeOf(e).constructor,n=Object.getPrototypeOf(e.constructor),o=Object.getPrototypeOf(Object.getPrototypeOf(e));if(!(t===React__default.Component||t===React__default.PureComponent||n===React__default.Component||n===React__default.PureComponent||o===React__default.Component||o===React__default.PureComponent))throw new Error("[mobx-react] disposeOnUnmount only supports direct subclasses of React.Component or React.PureComponent.");if(typeof r!="string"&&typeof r!="function"&&!Array.isArray(r))throw new Error("[mobx-react] disposeOnUnmount only works if the parameter is either a property key or a function.");var a=typeof r=="string",i=!!e[R]||!!e[C],s=a?e[R]||(e[R]=[]):e[C]||(e[C]=[]);if(s.push(r),i||k(e,"componentWillUnmount",se),typeof r!="string")return r}function G(e){function r(n,o,a,i,s,f){for(var l=arguments.length,v=new Array(l>6?l-6:0),p=6;p<l;p++)v[p-6]=arguments[p];return(0,u.rg)(function(){if(i=i||"<<anonymous>>",f=f||a,o[a]==null){if(n){var h=o[a]===null?"null":"undefined";return new Error("The "+s+" `"+f+"` is marked as required in `"+i+"`, but its value is `"+h+"`.")}return null}else return e.apply(void 0,[o,a,i,s,f].concat(v))})}var t=r.bind(null,!1);return t.isRequired=r.bind(null,!0),t}function ue(e,r){return e==="symbol"||r["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&r instanceof Symbol}function K(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":ue(r,e)?"symbol":r}function ce(e){var r=K(e);if(r==="object"){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function y(e,r){return G(function(t,n,o,a,i){return(0,u.rg)(function(){if(e&&K(t[n])===r.toLowerCase())return null;var s;switch(r){case"Array":s=u.Ei;break;case"Object":s=u.Pb;break;case"Map":s=u.LJ;break;default:throw new Error("Unexpected mobxType: "+r)}var f=t[n];if(!s(f)){var l=ce(f),v=e?" or javascript `"+r.toLowerCase()+"`":"";return new Error("Invalid prop `"+i+"` of type `"+l+"` supplied to `"+o+"`, expected `mobx.Observable"+r+"`"+v+".")}return null})})}function Z(e,r){return G(function(t,n,o,a,i){for(var s=arguments.length,f=new Array(s>5?s-5:0),l=5;l<s;l++)f[l-5]=arguments[l];return(0,u.rg)(function(){if(typeof r!="function")return new Error("Property `"+i+"` of component `"+o+"` has invalid PropType notation.");var v=y(e,"Array")(t,n,o,a,i);if(v instanceof Error)return v;for(var p=t[n],h=0;h<p.length;h++)if(v=r.apply(void 0,[p,h,o,a,i+"["+h+"]"].concat(f)),v instanceof Error)return v;return null})})}var le=y(!1,"Array"),ve=Z.bind(null,!1),de=y(!1,"Map"),be=y(!1,"Object"),pe=y(!0,"Array"),ye=Z.bind(null,!0),he=y(!0,"Object"),Oe={observableArray:le,observableArrayOf:ve,observableMap:de,observableObject:be,arrayOrObservableArray:pe,arrayOrObservableArrayOf:ye,objectOrObservableObject:he};if(!c.Component)throw new Error("mobx-react requires React to be available");if(!u.LO)throw new Error("mobx-react requires mobx to be available")}}]);
