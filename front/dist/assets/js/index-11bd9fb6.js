import{a as o,B as h,c as g,u as N,r as T,j as b,d as j,l as B}from"./index-a8e0468b.js";const C=({value:l,color:e,onClick:i,...c})=>o(h,{className:g({"btn-primary":!e,"btn-success":e}),onClick:i,...c,children:l}),A=({xIsNext:l,squares:e,onPlay:i,calculateWinner:c})=>{const s=c(e),d=r=>()=>{if(s&&s[0]||e[r])return;const t=e.slice();l?t[r]="X":t[r]="O",i(t)},f=r=>{if(s&&s[1]){const t=s[1].values();for(const u of t)if(r===u)return!0}return!1};return o("div",{className:"grid grid-cols-3 gap-2",children:Array.from(Array(9),(r,t)=>o(C,{color:f(t),value:e[t],onClick:d(t)},t))})},k=()=>{const{t:l}=N("beginnerProjects"),[e,i]=T.useState([Array(9).fill(null)]),[c,s]=T.useState(0),d=c%2===0,f=e[c];function r(n){const a=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(let m=0;m<a.length;m++){const[x,v,y]=a[m];if(n[x]&&n[x]===n[v]&&n[x]===n[y])return[n[x],a[m]]}return null}const t=r(f);let u;t&&t[0]?u=l("TicTacToe.Winner")+": "+t[0]:u=l("TicTacToe.NextPlayer")+": "+(d?"X":"O");function p(n){const a=[...e.slice(0,c+1),n];i(a),s(a.length-1)}return b(j,{className:"w-6/12 p-4",children:[o("div",{className:"mb-2 text-center",children:u}),o(A,{xIsNext:d,squares:f,onPlay:p,calculateWinner:r}),o(h,{className:"mt-2",color:"ghost",fullWidth:!0,responsive:!0,onClick:(n=>()=>{s(n)})(0),children:o(B,{size:24})})]})};export{k as default};