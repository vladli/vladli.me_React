import{r as i,d as r,F as l,j as e,B as t}from"./index-8fa23b88.js";import{M as s}from"./Modal-d46d4f53.js";import{P as d}from"./PageTitle-31293e2e.js";const m=()=>{const[a,o]=i.useState(!1);return r(l,{children:[e(d,{title:"Test Page"}),e(t,{onClick:()=>o(!a),children:"asd"}),r(s,{open:a,onClickBackDrop:()=>o(!1),children:[e(s.Header,{children:"Good"}),e(s.Body,{children:"Bad"}),e(s.Actions,{children:e(t,{children:"Good"})})]})]})};export{m as default};
