import{r as n,d as i,F as u,j as r,B as d,q as m,o as f,a as h}from"./index-ddcfa2a1.js";import{P as p}from"./PageTitle-809ac95c.js";import{I as g}from"./Input-22ff2318.js";import{u as y}from"./useQuery-5b27c588.js";function x(){var l;const[t,c]=n.useState("XhYt4D0ZGlhuXryslrPDly40LJB3"),{isLoading:F,isError:U,data:e,refetch:o}=y({queryKey:["admin_getUser"],enabled:!1,queryFn:async()=>{const{data:s}=await f.get("/api/users/user",{params:{uid:t}});return s}}),a=n.useRef(null);return n.useEffect(()=>{var s;(s=a.current)==null||s.focus()},[]),i(u,{children:[i("div",{className:"flex place-items-center p-4",children:[r(g,{ref:a,name:"uid",value:t,onChange:s=>c(s.target.value)}),r(d,{className:"ml-2",onClick:()=>o(),children:r(m,{})})]}),i("ul",{children:[r("li",{children:e==null?void 0:e.uid}),r("li",{children:e==null?void 0:e.email}),r("li",{children:(l=e==null?void 0:e.metadata)==null?void 0:l.creationTime})]})]})}function A(){return i(u,{children:[r(p,{title:h.findUser.title}),r(x,{})]})}export{A as default};
