"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[329],{2170:function(e,t,r){var o=r(6134),n=r(9980);t.Z=(0,o.Z)((0,n.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4 6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"}),"FileCopy")},9387:function(e,t,r){var o=r(6134),n=r(9980);t.Z=(0,o.Z)((0,n.jsx)("path",{d:"M17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.43-.98 2.63-2.31 2.98l1.46 1.46C20.88 15.61 22 13.95 22 12c0-2.76-2.24-5-5-5zm-1 4h-2.19l2 2H16zM2 4.27l3.11 3.11C3.29 8.12 2 9.91 2 12c0 2.76 2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1 0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4L20 19.74 3.27 3 2 4.27z"}),"LinkOff")},6537:function(e,t,r){var o=r(6134),n=r(9980);t.Z=(0,o.Z)((0,n.jsx)("path",{d:"M6.99 11 3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"}),"SwapHoriz")},9440:function(e,t,r){var o=r(4673),n=r(2220),i=r(2363),a=r(8640),s=r(9569),l=r(5359),c=r(1664),u=r(5309),p=r(9863),d=r(9980);const f=["className"],m=(0,l.ZP)("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,"flex-start"===r.alignItems&&t.alignItemsFlexStart]}})((({theme:e,ownerState:t})=>(0,n.Z)({minWidth:56,color:(e.vars||e).palette.action.active,flexShrink:0,display:"inline-flex"},"flex-start"===t.alignItems&&{marginTop:8}))),h=i.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiListItemIcon"}),{className:l}=r,h=(0,o.Z)(r,f),v=i.useContext(p.Z),g=(0,n.Z)({},r,{alignItems:v.alignItems}),b=(e=>{const{alignItems:t,classes:r}=e,o={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,s.Z)(o,u.f,r)})(g);return(0,d.jsx)(m,(0,n.Z)({className:(0,a.Z)(b.root,l),ownerState:g,ref:t},h))}));t.Z=h},5309:function(e,t,r){r.d(t,{f:function(){return i}});var o=r(3206),n=r(375);function i(e){return(0,n.Z)("MuiListItemIcon",e)}const a=(0,o.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]);t.Z=a},8598:function(e,t,r){r.d(t,{Z:function(){return q}});var o=r(2220),n=r(4673),i=r(2363),a=(r(7313),r(8640)),s=r(9569),l=r(8662).Z,c=r(3485),u=r(8740).Z,p=r(1689),d=r(826),f=r(9980);const m=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function h(e,t,r){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:r?null:e.firstChild}function v(e,t,r){return e===t?r?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:r?null:e.lastChild}function g(e,t){if(void 0===t)return!0;let r=e.innerText;return void 0===r&&(r=e.textContent),r=r.trim().toLowerCase(),0!==r.length&&(t.repeating?r[0]===t.keys[0]:0===r.indexOf(t.keys.join("")))}function b(e,t,r,o,n,i){let a=!1,s=n(e,t,!!t&&r);for(;s;){if(s===e.firstChild){if(a)return!1;a=!0}const t=!o&&(s.disabled||"true"===s.getAttribute("aria-disabled"));if(s.hasAttribute("tabindex")&&g(s,i)&&!t)return s.focus(),!0;s=n(e,s,r)}return!1}var y=i.forwardRef((function(e,t){const{actions:r,autoFocus:a=!1,autoFocusItem:s=!1,children:y,className:Z,disabledItemsFocusable:x=!1,disableListWrap:C=!1,onKeyDown:M,variant:P="selectedMenu"}=e,w=(0,n.Z)(e,m),S=i.useRef(null),I=i.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});(0,d.Z)((()=>{a&&S.current.focus()}),[a]),i.useImperativeHandle(r,(()=>({adjustStyleForScrollbar:(e,t)=>{const r=!S.current.style.width;if(e.clientHeight<S.current.clientHeight&&r){const r=`${u(l(e))}px`;S.current.style["rtl"===t.direction?"paddingLeft":"paddingRight"]=r,S.current.style.width=`calc(100% + ${r})`}return S.current}})),[]);const k=(0,p.Z)(S,t);let F=-1;i.Children.forEach(y,((e,t)=>{i.isValidElement(e)&&(e.props.disabled||("selectedMenu"===P&&e.props.selected||-1===F)&&(F=t),F===t&&(e.props.disabled||e.props.muiSkipListHighlight||e.type.muiSkipListHighlight)&&(F+=1,F>=y.length&&(F=-1)))}));const $=i.Children.map(y,((e,t)=>{if(t===F){const t={};return s&&(t.autoFocus=!0),void 0===e.props.tabIndex&&"selectedMenu"===P&&(t.tabIndex=0),i.cloneElement(e,t)}return e}));return(0,f.jsx)(c.Z,(0,o.Z)({role:"menu",ref:k,className:Z,onKeyDown:e=>{const t=S.current,r=e.key,o=l(t).activeElement;if("ArrowDown"===r)e.preventDefault(),b(t,o,C,x,h);else if("ArrowUp"===r)e.preventDefault(),b(t,o,C,x,v);else if("Home"===r)e.preventDefault(),b(t,null,C,x,h);else if("End"===r)e.preventDefault(),b(t,null,C,x,v);else if(1===r.length){const n=I.current,i=r.toLowerCase(),a=performance.now();n.keys.length>0&&(a-n.lastTime>500?(n.keys=[],n.repeating=!0,n.previousKeyMatched=!0):n.repeating&&i!==n.keys[0]&&(n.repeating=!1)),n.lastTime=a,n.keys.push(i);const s=o&&!n.repeating&&g(o,n);n.previousKeyMatched&&(s||b(t,o,!1,x,h,n))?e.preventDefault():n.previousKeyMatched=!1}M&&M(e)},tabIndex:a?0:-1},w,{children:$}))})),Z=r(8392),x=r(5359),C=r(1664),M=r(8123),P=r(2967),w=r(1945),S=r(2025),I=r(3206),k=r(375);function F(e){return(0,k.Z)("MuiPopover",e)}(0,I.Z)("MuiPopover",["root","paper"]);const $=["onEntering"],O=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"];function z(e,t){let r=0;return"number"===typeof t?r=t:"center"===t?r=e.height/2:"bottom"===t&&(r=e.height),r}function L(e,t){let r=0;return"number"===typeof t?r=t:"center"===t?r=e.width/2:"right"===t&&(r=e.width),r}function R(e){return[e.horizontal,e.vertical].map((e=>"number"===typeof e?`${e}px`:e)).join(" ")}function E(e){return"function"===typeof e?e():e}const T=(0,x.ZP)(S.Z,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),H=(0,x.ZP)(Z.Z,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0});var D=i.forwardRef((function(e,t){const r=(0,C.Z)({props:e,name:"MuiPopover"}),{action:c,anchorEl:u,anchorOrigin:d={vertical:"top",horizontal:"left"},anchorPosition:m,anchorReference:h="anchorEl",children:v,className:g,container:b,elevation:y=8,marginThreshold:Z=16,open:x,PaperProps:S={},transformOrigin:I={vertical:"top",horizontal:"left"},TransitionComponent:k=w.Z,transitionDuration:D="auto",TransitionProps:{onEntering:N}={}}=r,j=(0,n.Z)(r.TransitionProps,$),V=(0,n.Z)(r,O),A=i.useRef(),W=(0,p.Z)(A,S.ref),K=(0,o.Z)({},r,{anchorOrigin:d,anchorReference:h,elevation:y,marginThreshold:Z,PaperProps:S,transformOrigin:I,TransitionComponent:k,transitionDuration:D,TransitionProps:j}),_=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"],paper:["paper"]},F,t)})(K),B=i.useCallback((()=>{if("anchorPosition"===h)return m;const e=E(u),t=(e&&1===e.nodeType?e:l(A.current).body).getBoundingClientRect();return{top:t.top+z(t,d.vertical),left:t.left+L(t,d.horizontal)}}),[u,d.horizontal,d.vertical,m,h]),G=i.useCallback((e=>({vertical:z(e,I.vertical),horizontal:L(e,I.horizontal)})),[I.horizontal,I.vertical]),q=i.useCallback((e=>{const t={width:e.offsetWidth,height:e.offsetHeight},r=G(t);if("none"===h)return{top:null,left:null,transformOrigin:R(r)};const o=B();let n=o.top-r.vertical,i=o.left-r.horizontal;const a=n+t.height,s=i+t.width,l=(0,P.Z)(E(u)),c=l.innerHeight-Z,p=l.innerWidth-Z;if(n<Z){const e=n-Z;n-=e,r.vertical+=e}else if(a>c){const e=a-c;n-=e,r.vertical+=e}if(i<Z){const e=i-Z;i-=e,r.horizontal+=e}else if(s>p){const e=s-p;i-=e,r.horizontal+=e}return{top:`${Math.round(n)}px`,left:`${Math.round(i)}px`,transformOrigin:R(r)}}),[u,h,B,G,Z]),[U,X]=i.useState(x),Y=i.useCallback((()=>{const e=A.current;if(!e)return;const t=q(e);null!==t.top&&(e.style.top=t.top),null!==t.left&&(e.style.left=t.left),e.style.transformOrigin=t.transformOrigin,X(!0)}),[q]);i.useEffect((()=>{x&&Y()})),i.useImperativeHandle(c,(()=>x?{updatePosition:()=>{Y()}}:null),[x,Y]),i.useEffect((()=>{if(!x)return;const e=(0,M.Z)((()=>{Y()})),t=(0,P.Z)(u);return t.addEventListener("resize",e),()=>{e.clear(),t.removeEventListener("resize",e)}}),[u,x,Y]);let J=D;"auto"!==D||k.muiSupportAuto||(J=void 0);const Q=b||(u?l(E(u)).body:void 0);return(0,f.jsx)(T,(0,o.Z)({BackdropProps:{invisible:!0},className:(0,a.Z)(_.root,g),container:Q,open:x,ref:t,ownerState:K},V,{children:(0,f.jsx)(k,(0,o.Z)({appear:!0,in:x,onEntering:(e,t)=>{N&&N(e,t),Y()},onExited:()=>{X(!1)},timeout:J},j,{children:(0,f.jsx)(H,(0,o.Z)({elevation:y},S,{ref:W,className:(0,a.Z)(_.paper,S.className)},U?void 0:{style:(0,o.Z)({},S.style,{opacity:0})},{ownerState:K,children:v}))}))}))})),N=r(5620);function j(e){return(0,k.Z)("MuiMenu",e)}(0,I.Z)("MuiMenu",["root","paper","list"]);const V=["onEntering"],A=["autoFocus","children","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant"],W={vertical:"top",horizontal:"right"},K={vertical:"top",horizontal:"left"},_=(0,x.ZP)(D,{shouldForwardProp:e=>(0,x.FO)(e)||"classes"===e,name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),B=(0,x.ZP)(Z.Z,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),G=(0,x.ZP)(y,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0});var q=i.forwardRef((function(e,t){const r=(0,C.Z)({props:e,name:"MuiMenu"}),{autoFocus:l=!0,children:c,disableAutoFocusItem:u=!1,MenuListProps:p={},onClose:d,open:m,PaperProps:h={},PopoverClasses:v,transitionDuration:g="auto",TransitionProps:{onEntering:b}={},variant:y="selectedMenu"}=r,Z=(0,n.Z)(r.TransitionProps,V),x=(0,n.Z)(r,A),M=(0,N.Z)(),P="rtl"===M.direction,w=(0,o.Z)({},r,{autoFocus:l,disableAutoFocusItem:u,MenuListProps:p,onEntering:b,PaperProps:h,transitionDuration:g,TransitionProps:Z,variant:y}),S=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"],paper:["paper"],list:["list"]},j,t)})(w),I=l&&!u&&m,k=i.useRef(null);let F=-1;return i.Children.map(c,((e,t)=>{i.isValidElement(e)&&(e.props.disabled||("selectedMenu"===y&&e.props.selected||-1===F)&&(F=t))})),(0,f.jsx)(_,(0,o.Z)({onClose:d,anchorOrigin:{vertical:"bottom",horizontal:P?"right":"left"},transformOrigin:P?W:K,PaperProps:(0,o.Z)({as:B},h,{classes:(0,o.Z)({},h.classes,{root:S.paper})}),className:S.root,open:m,ref:t,transitionDuration:g,TransitionProps:(0,o.Z)({onEntering:(e,t)=>{k.current&&k.current.adjustStyleForScrollbar(e,M),b&&b(e,t)}},Z),ownerState:w},x,{classes:v,children:(0,f.jsx)(G,(0,o.Z)({onKeyDown:e=>{"Tab"===e.key&&(e.preventDefault(),d&&d(e,"tabKeyDown"))},actions:k,autoFocus:l&&(-1===F||u),autoFocusItem:I,variant:y},p,{className:(0,a.Z)(S.list,p.className),children:c}))}))}))},4224:function(e,t,r){r.d(t,{Z:function(){return w}});var o=r(4673),n=r(2220),i=r(2363),a=r(8640),s=r(9569),l=r(2786),c=r(5359),u=r(1664),p=r(9863),d=r(2577),f=r(826),m=r(1689),h=r(3206),v=r(375);var g=(0,h.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),b=r(5309);var y=(0,h.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);function Z(e){return(0,v.Z)("MuiMenuItem",e)}var x=(0,h.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),C=r(9980);const M=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],P=(0,c.ZP)(d.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.dense&&t.dense,r.divider&&t.divider,!r.disableGutters&&t.gutters]}})((({theme:e,ownerState:t})=>(0,n.Z)({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${x.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${x.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${x.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${x.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${x.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${g.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${g.inset}`]:{marginLeft:52},[`& .${y.root}`]:{marginTop:0,marginBottom:0},[`& .${y.inset}`]:{paddingLeft:36},[`& .${b.Z.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&(0,n.Z)({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${b.Z.root} svg`]:{fontSize:"1.25rem"}}))));var w=i.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:l=!1,component:c="li",dense:d=!1,divider:h=!1,disableGutters:v=!1,focusVisibleClassName:g,role:b="menuitem",tabIndex:y,className:x}=r,w=(0,o.Z)(r,M),S=i.useContext(p.Z),I=i.useMemo((()=>({dense:d||S.dense||!1,disableGutters:v})),[S.dense,d,v]),k=i.useRef(null);(0,f.Z)((()=>{l&&k.current&&k.current.focus()}),[l]);const F=(0,n.Z)({},r,{dense:I.dense,divider:h,disableGutters:v}),$=(e=>{const{disabled:t,dense:r,divider:o,disableGutters:i,selected:a,classes:l}=e,c={root:["root",r&&"dense",t&&"disabled",!i&&"gutters",o&&"divider",a&&"selected"]},u=(0,s.Z)(c,Z,l);return(0,n.Z)({},l,u)})(r),O=(0,m.Z)(k,t);let z;return r.disabled||(z=void 0!==y?y:-1),(0,C.jsx)(p.Z.Provider,{value:I,children:(0,C.jsx)(P,(0,n.Z)({ref:O,role:b,tabIndex:z,component:c,focusVisibleClassName:(0,a.Z)($.focusVisible,g),className:(0,a.Z)($.root,x)},w,{ownerState:F,classes:$}))})}))},2202:function(e,t){var r,o=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.server_context"),p=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),v=Symbol.for("react.offscreen");function g(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case i:case s:case a:case d:case f:return e;default:switch(e=e&&e.$$typeof){case u:case c:case p:case h:case m:case l:return e;default:return t}}case n:return t}}}r=Symbol.for("react.module.reference")},7313:function(e,t,r){r(2202)}}]);