import{r as i,j as n,a as s,B as o,n as m}from"./index-c0ae077d.js";import{i as d}from"./axiosAPI-55b8a7ea.js";import{I as f}from"./Input-6d6addc6.js";import{u as h}from"./useQuery-a8de9743.js";function B(){var l;const[a,c]=i.useState("XhYt4D0ZGlhuXryslrPDly40LJB3"),{isLoading:p,isError:y,data:e,refetch:u}=h({queryKey:["admin_getUser"],enabled:!1,queryFn:async()=>{const{data:r}=await d.get("/api/users/user",{params:{uid:a}});return r}}),t=i.useRef(null);return i.useEffect(()=>{var r;(r=t.current)==null||r.focus()},[]),n("div",{children:[n("div",{className:"flex place-items-center",children:[s(f,{ref:t,name:"uid",value:a,onChange:r=>c(r.target.value)}),s(o,{className:"ml-2",onClick:()=>u(),children:s(m,{})})]}),n("ul",{className:"mt-2",children:[s("li",{children:e==null?void 0:e.uid}),s("li",{children:e==null?void 0:e.email}),s("li",{children:(l=e==null?void 0:e.metadata)==null?void 0:l.creationTime})]})]})}export{B as default};
