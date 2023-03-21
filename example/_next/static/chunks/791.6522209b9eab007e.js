"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[791],{1791:function(e,t,n){n.r(t),n.d(t,{WalletConnectButton:function(){return i},WalletDialog:function(){return u.Z},WalletDialogButton:function(){return s},WalletDialogContext:function(){return a.j},WalletDialogProvider:function(){return d.q},WalletDisconnectButton:function(){return m},WalletIcon:function(){return c.o},WalletMultiButton:function(){return W},useWalletDialog:function(){return a.G}});var a=n(7973),l=n(7323),o=n(5593),r=n(2363),c=n(5196);const i=({color:e="primary",variant:t="contained",type:n="button",children:a,disabled:i,onClick:u,...s})=>{const{wallet:d,connect:m,connecting:p,connected:h}=(0,o.O)(),v=(0,r.useCallback)((e=>{u&&u(e),e.defaultPrevented||m().catch((()=>{}))}),[u,m]),g=(0,r.useMemo)((()=>a||(p?"Connecting ...":h?"Connected":d?"Connect":"Connect Wallet")),[a,p,h,d]);return r.createElement(l.Z,{color:e,variant:t,type:n,onClick:v,disabled:i||!d||p||h,startIcon:r.createElement(c.o,{wallet:d}),...s},g)};var u=n(6798);const s=({children:e="Select Wallet",color:t="primary",variant:n="contained",type:o="button",onClick:c,...i})=>{const{setOpen:u}=(0,a.G)(),s=(0,r.useCallback)((e=>{c&&c(e),e.defaultPrevented||u(!0)}),[c,u]);return r.createElement(l.Z,{color:t,variant:n,type:o,onClick:s,...i},e)};var d=n(6759);const m=({color:e="primary",variant:t="contained",type:n="button",children:a,disabled:i,onClick:u,...s})=>{const{wallet:d,disconnect:m,disconnecting:p}=(0,o.O)(),h=(0,r.useCallback)((e=>{u&&u(e),e.defaultPrevented||m().catch((()=>{}))}),[u,m]),v=(0,r.useMemo)((()=>a||(p?"Disconnecting ...":d?"Disconnect":"Disconnect Wallet")),[a,p,d]);return r.createElement(l.Z,{color:e,variant:t,type:n,onClick:h,disabled:i||!d,startIcon:r.createElement(c.o,{wallet:d}),...s},v)};var p=n(6827),h=n(4093),v=n(2176),g=n(1629),C=n(4204),E=n(4846),b=n(4406),k=n(6489),Z=n(1515);const y=(0,g.ZP)(C.Z)((({theme:e})=>({"& .MuiList-root":{padding:0},"& .MuiListItemIcon-root":{marginRight:e.spacing(),minWidth:"unset","& .MuiSvgIcon-root":{width:20,height:20}}}))),f=(0,g.ZP)(E.Z)((({theme:e})=>({padding:e.spacing(1,2),boxShadow:"inset 0 1px 0 0 rgba(255, 255, 255, 0.1)","&:hover":{boxShadow:"inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 1px 0 0 rgba(255, 255, 255, 0.05)"}}))),w=(0,g.ZP)(f)((({theme:e})=>({padding:0,"& .MuiButton-root":{borderRadius:0}}))),W=({color:e="primary",variant:t="contained",type:n="button",children:u,...d})=>{const{publicKey:m,wallet:g,disconnect:C}=(0,o.O)(),{setOpen:E}=(0,a.G)(),[W,D]=(0,r.useState)(),M=(0,r.useMemo)((()=>m?.toBase58()),[m]),I=(0,r.useMemo)((()=>u||(g&&M?M.slice(0,4)+".."+M.slice(-4):null)),[u,g,M]);return g?M?r.createElement(r.Fragment,null,r.createElement(l.Z,{color:e,variant:t,type:n,startIcon:r.createElement(c.o,{wallet:g}),onClick:e=>D(e.currentTarget),"aria-controls":"wallet-menu","aria-haspopup":"true",...d},I),r.createElement(y,{id:"wallet-menu",anchorEl:W,open:!!W,onClose:()=>D(void 0),marginThreshold:0,TransitionComponent:b.Z,transitionDuration:250,keepMounted:!0,anchorOrigin:{vertical:"top",horizontal:"left"}},r.createElement(w,{onClick:()=>D(void 0)},r.createElement(l.Z,{color:e,variant:t,type:n,startIcon:r.createElement(c.o,{wallet:g}),onClick:e=>D(void 0),fullWidth:!0,...d},g.adapter.name)),r.createElement(k.Z,{in:!!W},r.createElement(f,{onClick:async()=>{D(void 0),await navigator.clipboard.writeText(M)}},r.createElement(Z.Z,null,r.createElement(p.Z,null)),"Copy address"),r.createElement(f,{onClick:()=>{D(void 0),E(!0)}},r.createElement(Z.Z,null,r.createElement(h.Z,null)),"Change wallet"),r.createElement(f,{onClick:()=>{D(void 0),C().catch((()=>{}))}},r.createElement(Z.Z,null,r.createElement(v.Z,null)),"Disconnect")))):r.createElement(i,{color:e,variant:t,type:n,...d},u):r.createElement(s,{color:e,variant:t,type:n,...d},u)}}}]);