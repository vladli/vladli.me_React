import{r as i,j as a,a as s,B as o,o as m}from"./index-f0b6871d.js";import{i as d}from"./axiosAPI-486a3c31.js";import{I as f}from"./Input-0da03ae6.js";import{u as h}from"./useQuery-826acc68.js";import"http://localhost:3000/@react-refresh";function E(){var l;const[n,c]=i.useState("XhYt4D0ZGlhuXryslrPDly40LJB3"),{isLoading:p,isError:y,data:e,refetch:u}=h({queryKey:["admin_getUser"],enabled:!1,queryFn:async()=>{const{data:r}=await d.get("/api/users/user",{params:{uid:n}});return r}}),t=i.useRef(null);return i.useEffect(()=>{var r;(r=t.current)==null||r.focus()},[]),a("div",{children:[a("div",{className:"flex place-items-center",children:[s(f,{ref:t,name:"uid",value:n,onChange:r=>c(r.target.value)}),s(o,{className:"ml-2",onClick:()=>u(),children:s(m,{})})]}),a("ul",{className:"mt-2",children:[s("li",{children:e==null?void 0:e.uid}),s("li",{children:e==null?void 0:e.email}),s("li",{children:(l=e==null?void 0:e.metadata)==null?void 0:l.creationTime})]})]})}export{E as default};
