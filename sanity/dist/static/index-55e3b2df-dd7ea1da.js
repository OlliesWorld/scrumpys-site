import{s as h,a8 as x,b as c,x as d,P as k,k as o,c2 as j,ao as v,cm as H,ak as I,aS as B,ap as E,b6 as y}from"./desk-beccae6c-db7d2a61.js";import{useDeskTool as C}from"./index-684ea917-985e37e7.js";var u;function O(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function g(t){const{actionHandlers:e,index:s,menuItems:n,menuItemGroups:r,title:i}=t,{features:a}=C();return!(n!=null&&n.length)&&!i?null:o(v,{actions:o(H,{menuItems:n,menuItemGroups:r,actionHandlers:e}),backButton:a.backButton&&s>0&&o(I,{as:B,"data-as":"a",icon:E,mode:"bleed"}),title:i})}const L=h(x)(u||(u=O([`
  position: relative;
`])));function S(t){const{children:e}=t,{collapsed:s}=y();return o(L,{hidden:s,height:"fill",overflow:"auto",children:e})}function z(t){const{index:e,pane:s,paneKey:n,...r}=t,{child:i,component:a,menuItems:m,menuItemGroups:p,title:f="",type:T,...P}=s,[l,b]=c.useState(null);return d(k,{id:n,minWidth:320,selected:r.isSelected,children:[o(g,{actionHandlers:l==null?void 0:l.actionHandlers,index:e,menuItems:m,menuItemGroups:p,title:f}),d(S,{children:[j.isValidElementType(a)&&c.createElement(a,{...r,...P,ref:b,child:i,paneKey:n}),c.isValidElement(a)&&a]})]})}export{z as default};