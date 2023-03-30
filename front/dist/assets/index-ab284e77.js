import{r as D,t as Ee,c as xe,a as k,u as ue,j as X,B as fe,M as Ie,R as j,f as Z,Q as Me,h as De,d as Ne}from"./index-c0ae077d.js";import{L as je}from"./LoadingEffect-29bd6fc6.js";import{i as ke}from"./axiosAPI-55b8a7ea.js";import{I as ze}from"./Input-6d6addc6.js";import{u as Pe}from"./useQuery-a8de9743.js";const de=D.forwardRef(({children:r,size:e,vertical:i,className:t,...s},o)=>{const l=Ee("input-group",t,xe({[`input-group-${e}`]:e,"input-group-vertical":i}));return k("label",{...s,className:l,ref:o,children:r})});de.displayName="InputGroup";const Ue=({refetch:r})=>{ue("beginnerProjects");const[e,i]=D.useState("");return k("div",{className:"my-4",children:k("form",{onSubmit:o=>{o.preventDefault(),ke.post("/api/todos/item",{text:e}).then(l=>{i(""),r()})},children:X(de,{className:"justify-center",children:[k(ze,{name:"AddTodo",value:e,onChange:o=>{i(o.currentTarget.value)},size:"sm"}),k(fe,{type:"submit",size:"sm",children:k(Ie,{})})]})})})},Ae=D.forwardRef(({color:r,size:e,indeterminate:i,className:t,...s},o)=>{const l=Ee("checkbox",t,xe({[`checkbox-${e}`]:e,[`checkbox-${r}`]:r})),d=D.useRef(null);return D.useImperativeHandle(o,()=>d.current),D.useEffect(()=>{d.current&&(i?d.current.indeterminate=!0:d.current.indeterminate=!1)},[i]),k("input",{...s,ref:d,type:"checkbox",className:l})});Ae.displayName="Checkbox";function ve(r,e,i,t,s,o,l){try{var d=r[o](l),L=d.value}catch(m){i(m);return}d.done?e(L):Promise.resolve(L).then(t,s)}function ne(r){return function(){var e=this,i=arguments;return new Promise(function(t,s){var o=r.apply(e,i);function l(L){ve(o,t,s,l,d,"next",L)}function d(L){ve(o,t,s,l,d,"throw",L)}l(void 0)})}}function P(){return P=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(r[t]=i[t])}return r},P.apply(this,arguments)}var he={},We={get exports(){return he},set exports(r){he=r}},le={},Be={get exports(){return le},set exports(r){le=r}};(function(r){function e(i){return r.exports=e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r.exports.__esModule=!0,r.exports.default=r.exports,e(i)}r.exports=e,r.exports.__esModule=!0,r.exports.default=r.exports})(Be);(function(r){var e=le.default;function i(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r.exports=i=function(){return t},r.exports.__esModule=!0,r.exports.default=r.exports;var t={},s=Object.prototype,o=s.hasOwnProperty,l=typeof Symbol=="function"?Symbol:{},d=l.iterator||"@@iterator",L=l.asyncIterator||"@@asyncIterator",m=l.toStringTag||"@@toStringTag";function f(a,n,h){return Object.defineProperty(a,n,{value:h,enumerable:!0,configurable:!0,writable:!0}),a[n]}try{f({},"")}catch{f=function(h,u,y){return h[u]=y}}function x(a,n,h,u){var y=n&&n.prototype instanceof A?n:A,_=Object.create(y.prototype),F=new G(u||[]);return _._invoke=function(N,W,E){var R="suspendedStart";return function(B,ye){if(R==="executing")throw new Error("Generator is already running");if(R==="completed"){if(B==="throw")throw ye;return $()}for(E.method=B,E.arg=ye;;){var me=E.delegate;if(me){var se=g(me,E);if(se){if(se===S)continue;return se}}if(E.method==="next")E.sent=E._sent=E.arg;else if(E.method==="throw"){if(R==="suspendedStart")throw R="completed",E.arg;E.dispatchException(E.arg)}else E.method==="return"&&E.abrupt("return",E.arg);R="executing";var Y=b(N,W,E);if(Y.type==="normal"){if(R=E.done?"completed":"suspendedYield",Y.arg===S)continue;return{value:Y.arg,done:E.done}}Y.type==="throw"&&(R="completed",E.method="throw",E.arg=Y.arg)}}}(a,h,F),_}function b(a,n,h){try{return{type:"normal",arg:a.call(n,h)}}catch(u){return{type:"throw",arg:u}}}t.wrap=x;var S={};function A(){}function z(){}function v(){}var I={};f(I,d,function(){return this});var M=Object.getPrototypeOf,C=M&&M(M(U([])));C&&C!==s&&o.call(C,d)&&(I=C);var c=v.prototype=A.prototype=Object.create(I);function w(a){["next","throw","return"].forEach(function(n){f(a,n,function(h){return this._invoke(n,h)})})}function p(a,n){function h(y,_,F,N){var W=b(a[y],a,_);if(W.type!=="throw"){var E=W.arg,R=E.value;return R&&e(R)=="object"&&o.call(R,"__await")?n.resolve(R.__await).then(function(B){h("next",B,F,N)},function(B){h("throw",B,F,N)}):n.resolve(R).then(function(B){E.value=B,F(E)},function(B){return h("throw",B,F,N)})}N(W.arg)}var u;this._invoke=function(y,_){function F(){return new n(function(N,W){h(y,_,N,W)})}return u=u?u.then(F,F):F()}}function g(a,n){var h=a.iterator[n.method];if(h===void 0){if(n.delegate=null,n.method==="throw"){if(a.iterator.return&&(n.method="return",n.arg=void 0,g(a,n),n.method==="throw"))return S;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return S}var u=b(h,a.iterator,n.arg);if(u.type==="throw")return n.method="throw",n.arg=u.arg,n.delegate=null,S;var y=u.arg;return y?y.done?(n[a.resultName]=y.value,n.next=a.nextLoc,n.method!=="return"&&(n.method="next",n.arg=void 0),n.delegate=null,S):y:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,S)}function O(a){var n={tryLoc:a[0]};1 in a&&(n.catchLoc=a[1]),2 in a&&(n.finallyLoc=a[2],n.afterLoc=a[3]),this.tryEntries.push(n)}function T(a){var n=a.completion||{};n.type="normal",delete n.arg,a.completion=n}function G(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(O,this),this.reset(!0)}function U(a){if(a){var n=a[d];if(n)return n.call(a);if(typeof a.next=="function")return a;if(!isNaN(a.length)){var h=-1,u=function y(){for(;++h<a.length;)if(o.call(a,h))return y.value=a[h],y.done=!1,y;return y.value=void 0,y.done=!0,y};return u.next=u}}return{next:$}}function $(){return{value:void 0,done:!0}}return z.prototype=v,f(c,"constructor",v),f(v,"constructor",z),z.displayName=f(v,m,"GeneratorFunction"),t.isGeneratorFunction=function(a){var n=typeof a=="function"&&a.constructor;return!!n&&(n===z||(n.displayName||n.name)==="GeneratorFunction")},t.mark=function(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,v):(a.__proto__=v,f(a,m,"GeneratorFunction")),a.prototype=Object.create(c),a},t.awrap=function(a){return{__await:a}},w(p.prototype),f(p.prototype,L,function(){return this}),t.AsyncIterator=p,t.async=function(a,n,h,u,y){y===void 0&&(y=Promise);var _=new p(x(a,n,h,u),y);return t.isGeneratorFunction(n)?_:_.next().then(function(F){return F.done?F.value:_.next()})},w(c),f(c,m,"Generator"),f(c,d,function(){return this}),f(c,"toString",function(){return"[object Generator]"}),t.keys=function(a){var n=[];for(var h in a)n.push(h);return n.reverse(),function u(){for(;n.length;){var y=n.pop();if(y in a)return u.value=y,u.done=!1,u}return u.done=!0,u}},t.values=U,G.prototype={constructor:G,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!n)for(var h in this)h.charAt(0)==="t"&&o.call(this,h)&&!isNaN(+h.slice(1))&&(this[h]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if(n.type==="throw")throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var h=this;function u(E,R){return F.type="throw",F.arg=n,h.next=E,R&&(h.method="next",h.arg=void 0),!!R}for(var y=this.tryEntries.length-1;y>=0;--y){var _=this.tryEntries[y],F=_.completion;if(_.tryLoc==="root")return u("end");if(_.tryLoc<=this.prev){var N=o.call(_,"catchLoc"),W=o.call(_,"finallyLoc");if(N&&W){if(this.prev<_.catchLoc)return u(_.catchLoc,!0);if(this.prev<_.finallyLoc)return u(_.finallyLoc)}else if(N){if(this.prev<_.catchLoc)return u(_.catchLoc,!0)}else{if(!W)throw new Error("try statement without catch or finally");if(this.prev<_.finallyLoc)return u(_.finallyLoc)}}}},abrupt:function(n,h){for(var u=this.tryEntries.length-1;u>=0;--u){var y=this.tryEntries[u];if(y.tryLoc<=this.prev&&o.call(y,"finallyLoc")&&this.prev<y.finallyLoc){var _=y;break}}_&&(n==="break"||n==="continue")&&_.tryLoc<=h&&h<=_.finallyLoc&&(_=null);var F=_?_.completion:{};return F.type=n,F.arg=h,_?(this.method="next",this.next=_.finallyLoc,S):this.complete(F)},complete:function(n,h){if(n.type==="throw")throw n.arg;return n.type==="break"||n.type==="continue"?this.next=n.arg:n.type==="return"?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):n.type==="normal"&&h&&(this.next=h),S},finish:function(n){for(var h=this.tryEntries.length-1;h>=0;--h){var u=this.tryEntries[h];if(u.finallyLoc===n)return this.complete(u.completion,u.afterLoc),T(u),S}},catch:function(n){for(var h=this.tryEntries.length-1;h>=0;--h){var u=this.tryEntries[h];if(u.tryLoc===n){var y=u.completion;if(y.type==="throw"){var _=y.arg;T(u)}return _}}throw new Error("illegal catch attempt")},delegateYield:function(n,h,u){return this.delegate={iterator:U(n),resultName:h,nextLoc:u},this.method==="next"&&(this.arg=void 0),S}},t}r.exports=i,r.exports.__esModule=!0,r.exports.default=r.exports})(We);var ee=he(),H=ee;try{regeneratorRuntime=ee}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=ee:Function("r","regeneratorRuntime = r")(ee)}const J=typeof performance=="object"&&performance&&typeof performance.now=="function"?performance:Date,Ge=typeof AbortController=="function",ie=Ge?AbortController:class{constructor(){this.signal=new Ce}abort(e=new Error("This operation was aborted")){this.signal.reason=this.signal.reason||e,this.signal.aborted=!0,this.signal.dispatchEvent({type:"abort",target:this.signal})}},$e=typeof AbortSignal=="function",qe=typeof ie.AbortSignal=="function",Ce=$e?AbortSignal:qe?ie.AbortController:class{constructor(){this.reason=void 0,this.aborted=!1,this._listeners=[]}dispatchEvent(e){e.type==="abort"&&(this.aborted=!0,this.onabort(e),this._listeners.forEach(i=>i(e),this))}onabort(){}addEventListener(e,i){e==="abort"&&this._listeners.push(i)}removeEventListener(e,i){e==="abort"&&(this._listeners=this._listeners.filter(t=>t!==i))}},pe=new Set,ae=(r,e)=>{const i=`LRU_CACHE_OPTION_${r}`;re(i)&&ge(i,`${r} option`,`options.${e}`,Q)},oe=(r,e)=>{const i=`LRU_CACHE_METHOD_${r}`;if(re(i)){const{prototype:t}=Q,{get:s}=Object.getOwnPropertyDescriptor(t,r);ge(i,`${r} method`,`cache.${e}()`,s)}},Qe=(r,e)=>{const i=`LRU_CACHE_PROPERTY_${r}`;if(re(i)){const{prototype:t}=Q,{get:s}=Object.getOwnPropertyDescriptor(t,r);ge(i,`${r} property`,`cache.${e}`,s)}},Fe=(...r)=>{typeof process=="object"&&process&&typeof process.emitWarning=="function"?process.emitWarning(...r):console.error(...r)},re=r=>!pe.has(r),ge=(r,e,i,t)=>{pe.add(r);const s=`The ${e} is deprecated. Please use ${i} instead.`;Fe(s,"DeprecationWarning",r,t)},q=r=>r&&r===Math.floor(r)&&r>0&&isFinite(r),Oe=r=>q(r)?r<=Math.pow(2,8)?Uint8Array:r<=Math.pow(2,16)?Uint16Array:r<=Math.pow(2,32)?Uint32Array:r<=Number.MAX_SAFE_INTEGER?te:null:null;class te extends Array{constructor(e){super(e),this.fill(0)}}class He{constructor(e){if(e===0)return[];const i=Oe(e);this.heap=new i(e),this.length=0}push(e){this.heap[this.length++]=e}pop(){return this.heap[--this.length]}}class Q{constructor(e={}){const{max:i=0,ttl:t,ttlResolution:s=1,ttlAutopurge:o,updateAgeOnGet:l,updateAgeOnHas:d,allowStale:L,dispose:m,disposeAfter:f,noDisposeOnSet:x,noUpdateTTL:b,maxSize:S=0,maxEntrySize:A=0,sizeCalculation:z,fetchMethod:v,fetchContext:I,noDeleteOnFetchRejection:M,noDeleteOnStaleGet:C,allowStaleOnFetchRejection:c,allowStaleOnFetchAbort:w,ignoreFetchAbort:p}=e,{length:g,maxAge:O,stale:T}=e instanceof Q?{}:e;if(i!==0&&!q(i))throw new TypeError("max option must be a nonnegative integer");const G=i?Oe(i):Array;if(!G)throw new Error("invalid max value: "+i);if(this.max=i,this.maxSize=S,this.maxEntrySize=A||this.maxSize,this.sizeCalculation=z||g,this.sizeCalculation){if(!this.maxSize&&!this.maxEntrySize)throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");if(typeof this.sizeCalculation!="function")throw new TypeError("sizeCalculation set to non-function")}if(this.fetchMethod=v||null,this.fetchMethod&&typeof this.fetchMethod!="function")throw new TypeError("fetchMethod must be a function if specified");if(this.fetchContext=I,!this.fetchMethod&&I!==void 0)throw new TypeError("cannot set fetchContext without fetchMethod");if(this.keyMap=new Map,this.keyList=new Array(i).fill(null),this.valList=new Array(i).fill(null),this.next=new G(i),this.prev=new G(i),this.head=0,this.tail=0,this.free=new He(i),this.initialFill=1,this.size=0,typeof m=="function"&&(this.dispose=m),typeof f=="function"?(this.disposeAfter=f,this.disposed=[]):(this.disposeAfter=null,this.disposed=null),this.noDisposeOnSet=!!x,this.noUpdateTTL=!!b,this.noDeleteOnFetchRejection=!!M,this.allowStaleOnFetchRejection=!!c,this.allowStaleOnFetchAbort=!!w,this.ignoreFetchAbort=!!p,this.maxEntrySize!==0){if(this.maxSize!==0&&!q(this.maxSize))throw new TypeError("maxSize must be a positive integer if specified");if(!q(this.maxEntrySize))throw new TypeError("maxEntrySize must be a positive integer if specified");this.initializeSizeTracking()}if(this.allowStale=!!L||!!T,this.noDeleteOnStaleGet=!!C,this.updateAgeOnGet=!!l,this.updateAgeOnHas=!!d,this.ttlResolution=q(s)||s===0?s:1,this.ttlAutopurge=!!o,this.ttl=t||O||0,this.ttl){if(!q(this.ttl))throw new TypeError("ttl must be a positive integer if specified");this.initializeTTLTracking()}if(this.max===0&&this.ttl===0&&this.maxSize===0)throw new TypeError("At least one of max, maxSize, or ttl is required");if(!this.ttlAutopurge&&!this.max&&!this.maxSize){const U="LRU_CACHE_UNBOUNDED";re(U)&&(pe.add(U),Fe("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.","UnboundedCacheWarning",U,Q))}T&&ae("stale","allowStale"),O&&ae("maxAge","ttl"),g&&ae("length","sizeCalculation")}getRemainingTTL(e){return this.has(e,{updateAgeOnHas:!1})?1/0:0}initializeTTLTracking(){this.ttls=new te(this.max),this.starts=new te(this.max),this.setItemTTL=(t,s,o=J.now())=>{if(this.starts[t]=s!==0?o:0,this.ttls[t]=s,s!==0&&this.ttlAutopurge){const l=setTimeout(()=>{this.isStale(t)&&this.delete(this.keyList[t])},s+1);l.unref&&l.unref()}},this.updateItemAge=t=>{this.starts[t]=this.ttls[t]!==0?J.now():0},this.statusTTL=(t,s)=>{t&&(t.ttl=this.ttls[s],t.start=this.starts[s],t.now=e||i(),t.remainingTTL=t.now+t.ttl-t.start)};let e=0;const i=()=>{const t=J.now();if(this.ttlResolution>0){e=t;const s=setTimeout(()=>e=0,this.ttlResolution);s.unref&&s.unref()}return t};this.getRemainingTTL=t=>{const s=this.keyMap.get(t);return s===void 0?0:this.ttls[s]===0||this.starts[s]===0?1/0:this.starts[s]+this.ttls[s]-(e||i())},this.isStale=t=>this.ttls[t]!==0&&this.starts[t]!==0&&(e||i())-this.starts[t]>this.ttls[t]}updateItemAge(e){}statusTTL(e,i){}setItemTTL(e,i,t){}isStale(e){return!1}initializeSizeTracking(){this.calculatedSize=0,this.sizes=new te(this.max),this.removeItemSize=e=>{this.calculatedSize-=this.sizes[e],this.sizes[e]=0},this.requireSize=(e,i,t,s)=>{if(this.isBackgroundFetch(i))return 0;if(!q(t))if(s){if(typeof s!="function")throw new TypeError("sizeCalculation must be a function");if(t=s(i,e),!q(t))throw new TypeError("sizeCalculation return invalid (expect positive integer)")}else throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");return t},this.addItemSize=(e,i,t)=>{if(this.sizes[e]=i,this.maxSize){const s=this.maxSize-this.sizes[e];for(;this.calculatedSize>s;)this.evict(!0)}this.calculatedSize+=this.sizes[e],t&&(t.entrySize=i,t.totalCalculatedSize=this.calculatedSize)}}removeItemSize(e){}addItemSize(e,i){}requireSize(e,i,t,s){if(t||s)throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache")}*indexes({allowStale:e=this.allowStale}={}){if(this.size)for(let i=this.tail;!(!this.isValidIndex(i)||((e||!this.isStale(i))&&(yield i),i===this.head));)i=this.prev[i]}*rindexes({allowStale:e=this.allowStale}={}){if(this.size)for(let i=this.head;!(!this.isValidIndex(i)||((e||!this.isStale(i))&&(yield i),i===this.tail));)i=this.next[i]}isValidIndex(e){return e!==void 0&&this.keyMap.get(this.keyList[e])===e}*entries(){for(const e of this.indexes())this.valList[e]!==void 0&&this.keyList[e]!==void 0&&!this.isBackgroundFetch(this.valList[e])&&(yield[this.keyList[e],this.valList[e]])}*rentries(){for(const e of this.rindexes())this.valList[e]!==void 0&&this.keyList[e]!==void 0&&!this.isBackgroundFetch(this.valList[e])&&(yield[this.keyList[e],this.valList[e]])}*keys(){for(const e of this.indexes())this.keyList[e]!==void 0&&!this.isBackgroundFetch(this.valList[e])&&(yield this.keyList[e])}*rkeys(){for(const e of this.rindexes())this.keyList[e]!==void 0&&!this.isBackgroundFetch(this.valList[e])&&(yield this.keyList[e])}*values(){for(const e of this.indexes())this.valList[e]!==void 0&&!this.isBackgroundFetch(this.valList[e])&&(yield this.valList[e])}*rvalues(){for(const e of this.rindexes())this.valList[e]!==void 0&&!this.isBackgroundFetch(this.valList[e])&&(yield this.valList[e])}[Symbol.iterator](){return this.entries()}find(e,i){for(const t of this.indexes()){const s=this.valList[t],o=this.isBackgroundFetch(s)?s.__staleWhileFetching:s;if(o!==void 0&&e(o,this.keyList[t],this))return this.get(this.keyList[t],i)}}forEach(e,i=this){for(const t of this.indexes()){const s=this.valList[t],o=this.isBackgroundFetch(s)?s.__staleWhileFetching:s;o!==void 0&&e.call(i,o,this.keyList[t],this)}}rforEach(e,i=this){for(const t of this.rindexes()){const s=this.valList[t],o=this.isBackgroundFetch(s)?s.__staleWhileFetching:s;o!==void 0&&e.call(i,o,this.keyList[t],this)}}get prune(){return oe("prune","purgeStale"),this.purgeStale}purgeStale(){let e=!1;for(const i of this.rindexes({allowStale:!0}))this.isStale(i)&&(this.delete(this.keyList[i]),e=!0);return e}dump(){const e=[];for(const i of this.indexes({allowStale:!0})){const t=this.keyList[i],s=this.valList[i],o=this.isBackgroundFetch(s)?s.__staleWhileFetching:s;if(o===void 0)continue;const l={value:o};if(this.ttls){l.ttl=this.ttls[i];const d=J.now()-this.starts[i];l.start=Math.floor(Date.now()-d)}this.sizes&&(l.size=this.sizes[i]),e.unshift([t,l])}return e}load(e){this.clear();for(const[i,t]of e){if(t.start){const s=Date.now()-t.start;t.start=J.now()-s}this.set(i,t.value,t)}}dispose(e,i,t){}set(e,i,{ttl:t=this.ttl,start:s,noDisposeOnSet:o=this.noDisposeOnSet,size:l=0,sizeCalculation:d=this.sizeCalculation,noUpdateTTL:L=this.noUpdateTTL,status:m}={}){if(l=this.requireSize(e,i,l,d),this.maxEntrySize&&l>this.maxEntrySize)return m&&(m.set="miss",m.maxEntrySizeExceeded=!0),this.delete(e),this;let f=this.size===0?void 0:this.keyMap.get(e);if(f===void 0)f=this.newIndex(),this.keyList[f]=e,this.valList[f]=i,this.keyMap.set(e,f),this.next[this.tail]=f,this.prev[f]=this.tail,this.tail=f,this.size++,this.addItemSize(f,l,m),m&&(m.set="add"),L=!1;else{this.moveToTail(f);const x=this.valList[f];if(i!==x){if(this.isBackgroundFetch(x)?x.__abortController.abort(new Error("replaced")):o||(this.dispose(x,e,"set"),this.disposeAfter&&this.disposed.push([x,e,"set"])),this.removeItemSize(f),this.valList[f]=i,this.addItemSize(f,l,m),m){m.set="replace";const b=x&&this.isBackgroundFetch(x)?x.__staleWhileFetching:x;b!==void 0&&(m.oldValue=b)}}else m&&(m.set="update")}if(t!==0&&this.ttl===0&&!this.ttls&&this.initializeTTLTracking(),L||this.setItemTTL(f,t,s),this.statusTTL(m,f),this.disposeAfter)for(;this.disposed.length;)this.disposeAfter(...this.disposed.shift());return this}newIndex(){return this.size===0?this.tail:this.size===this.max&&this.max!==0?this.evict(!1):this.free.length!==0?this.free.pop():this.initialFill++}pop(){if(this.size){const e=this.valList[this.head];return this.evict(!0),e}}evict(e){const i=this.head,t=this.keyList[i],s=this.valList[i];return this.isBackgroundFetch(s)?s.__abortController.abort(new Error("evicted")):(this.dispose(s,t,"evict"),this.disposeAfter&&this.disposed.push([s,t,"evict"])),this.removeItemSize(i),e&&(this.keyList[i]=null,this.valList[i]=null,this.free.push(i)),this.head=this.next[i],this.keyMap.delete(t),this.size--,i}has(e,{updateAgeOnHas:i=this.updateAgeOnHas,status:t}={}){const s=this.keyMap.get(e);if(s!==void 0)if(this.isStale(s))t&&(t.has="stale",this.statusTTL(t,s));else return i&&this.updateItemAge(s),t&&(t.has="hit"),this.statusTTL(t,s),!0;else t&&(t.has="miss");return!1}peek(e,{allowStale:i=this.allowStale}={}){const t=this.keyMap.get(e);if(t!==void 0&&(i||!this.isStale(t))){const s=this.valList[t];return this.isBackgroundFetch(s)?s.__staleWhileFetching:s}}backgroundFetch(e,i,t,s){const o=i===void 0?void 0:this.valList[i];if(this.isBackgroundFetch(o))return o;const l=new ie;t.signal&&t.signal.addEventListener("abort",()=>l.abort(t.signal.reason));const d={signal:l.signal,options:t,context:s},L=(S,A=!1)=>{const{aborted:z}=l.signal,v=t.ignoreFetchAbort&&S!==void 0;return t.status&&(z&&!A?(t.status.fetchAborted=!0,t.status.fetchError=l.signal.reason,v&&(t.status.fetchAbortIgnored=!0)):t.status.fetchResolved=!0),z&&!v&&!A?f(l.signal.reason):(this.valList[i]===b&&(S===void 0?b.__staleWhileFetching?this.valList[i]=b.__staleWhileFetching:this.delete(e):(t.status&&(t.status.fetchUpdated=!0),this.set(e,S,d.options))),S)},m=S=>(t.status&&(t.status.fetchRejected=!0,t.status.fetchError=S),f(S)),f=S=>{const{aborted:A}=l.signal,z=A&&t.allowStaleOnFetchAbort,v=z||t.allowStaleOnFetchRejection,I=v||t.noDeleteOnFetchRejection;if(this.valList[i]===b&&(!I||b.__staleWhileFetching===void 0?this.delete(e):z||(this.valList[i]=b.__staleWhileFetching)),v)return t.status&&b.__staleWhileFetching!==void 0&&(t.status.returnedStale=!0),b.__staleWhileFetching;if(b.__returned===b)throw S},x=(S,A)=>{this.fetchMethod(e,o,d).then(z=>S(z),A),l.signal.addEventListener("abort",()=>{(!t.ignoreFetchAbort||t.allowStaleOnFetchAbort)&&(S(),t.allowStaleOnFetchAbort&&(S=z=>L(z,!0)))})};t.status&&(t.status.fetchDispatched=!0);const b=new Promise(x).then(L,m);return b.__abortController=l,b.__staleWhileFetching=o,b.__returned=null,i===void 0?(this.set(e,b,{...d.options,status:void 0}),i=this.keyMap.get(e)):this.valList[i]=b,b}isBackgroundFetch(e){return e&&typeof e=="object"&&typeof e.then=="function"&&Object.prototype.hasOwnProperty.call(e,"__staleWhileFetching")&&Object.prototype.hasOwnProperty.call(e,"__returned")&&(e.__returned===e||e.__returned===null)}async fetch(e,{allowStale:i=this.allowStale,updateAgeOnGet:t=this.updateAgeOnGet,noDeleteOnStaleGet:s=this.noDeleteOnStaleGet,ttl:o=this.ttl,noDisposeOnSet:l=this.noDisposeOnSet,size:d=0,sizeCalculation:L=this.sizeCalculation,noUpdateTTL:m=this.noUpdateTTL,noDeleteOnFetchRejection:f=this.noDeleteOnFetchRejection,allowStaleOnFetchRejection:x=this.allowStaleOnFetchRejection,ignoreFetchAbort:b=this.ignoreFetchAbort,allowStaleOnFetchAbort:S=this.allowStaleOnFetchAbort,fetchContext:A=this.fetchContext,forceRefresh:z=!1,status:v,signal:I}={}){if(!this.fetchMethod)return v&&(v.fetch="get"),this.get(e,{allowStale:i,updateAgeOnGet:t,noDeleteOnStaleGet:s,status:v});const M={allowStale:i,updateAgeOnGet:t,noDeleteOnStaleGet:s,ttl:o,noDisposeOnSet:l,size:d,sizeCalculation:L,noUpdateTTL:m,noDeleteOnFetchRejection:f,allowStaleOnFetchRejection:x,allowStaleOnFetchAbort:S,ignoreFetchAbort:b,status:v,signal:I};let C=this.keyMap.get(e);if(C===void 0){v&&(v.fetch="miss");const c=this.backgroundFetch(e,C,M,A);return c.__returned=c}else{const c=this.valList[C];if(this.isBackgroundFetch(c)){const T=i&&c.__staleWhileFetching!==void 0;return v&&(v.fetch="inflight",T&&(v.returnedStale=!0)),T?c.__staleWhileFetching:c.__returned=c}const w=this.isStale(C);if(!z&&!w)return v&&(v.fetch="hit"),this.moveToTail(C),t&&this.updateItemAge(C),this.statusTTL(v,C),c;const p=this.backgroundFetch(e,C,M,A),g=p.__staleWhileFetching!==void 0,O=g&&i;return v&&(v.fetch=g&&w?"stale":"refresh",O&&w&&(v.returnedStale=!0)),O?p.__staleWhileFetching:p.__returned=p}}get(e,{allowStale:i=this.allowStale,updateAgeOnGet:t=this.updateAgeOnGet,noDeleteOnStaleGet:s=this.noDeleteOnStaleGet,status:o}={}){const l=this.keyMap.get(e);if(l!==void 0){const d=this.valList[l],L=this.isBackgroundFetch(d);return this.statusTTL(o,l),this.isStale(l)?(o&&(o.get="stale"),L?(o&&(o.returnedStale=i&&d.__staleWhileFetching!==void 0),i?d.__staleWhileFetching:void 0):(s||this.delete(e),o&&(o.returnedStale=i),i?d:void 0)):(o&&(o.get="hit"),L?d.__staleWhileFetching:(this.moveToTail(l),t&&this.updateItemAge(l),d))}else o&&(o.get="miss")}connect(e,i){this.prev[i]=e,this.next[e]=i}moveToTail(e){e!==this.tail&&(e===this.head?this.head=this.next[e]:this.connect(this.prev[e],this.next[e]),this.connect(this.tail,e),this.tail=e)}get del(){return oe("del","delete"),this.delete}delete(e){let i=!1;if(this.size!==0){const t=this.keyMap.get(e);if(t!==void 0)if(i=!0,this.size===1)this.clear();else{this.removeItemSize(t);const s=this.valList[t];this.isBackgroundFetch(s)?s.__abortController.abort(new Error("deleted")):(this.dispose(s,e,"delete"),this.disposeAfter&&this.disposed.push([s,e,"delete"])),this.keyMap.delete(e),this.keyList[t]=null,this.valList[t]=null,t===this.tail?this.tail=this.prev[t]:t===this.head?this.head=this.next[t]:(this.next[this.prev[t]]=this.next[t],this.prev[this.next[t]]=this.prev[t]),this.size--,this.free.push(t)}}if(this.disposed)for(;this.disposed.length;)this.disposeAfter(...this.disposed.shift());return i}clear(){for(const e of this.rindexes({allowStale:!0})){const i=this.valList[e];if(this.isBackgroundFetch(i))i.__abortController.abort(new Error("deleted"));else{const t=this.keyList[e];this.dispose(i,t,"delete"),this.disposeAfter&&this.disposed.push([i,t,"delete"])}}if(this.keyMap.clear(),this.valList.fill(null),this.keyList.fill(null),this.ttls&&(this.ttls.fill(0),this.starts.fill(0)),this.sizes&&this.sizes.fill(0),this.head=0,this.tail=0,this.initialFill=1,this.free.length=0,this.calculatedSize=0,this.size=0,this.disposed)for(;this.disposed.length;)this.disposeAfter(...this.disposed.shift())}get reset(){return oe("reset","clear"),this.clear}get length(){return Qe("length","size"),this.size}static get AbortController(){return ie}static get AbortSignal(){return Ce}}const Ve=Q;var we=Object.prototype.hasOwnProperty;function ce(r,e){var i,t;if(r===e)return!0;if(r&&e&&(i=r.constructor)===e.constructor){if(i===Date)return r.getTime()===e.getTime();if(i===RegExp)return r.toString()===e.toString();if(i===Array){if((t=r.length)===e.length)for(;t--&&ce(r[t],e[t]););return t===-1}if(!i||typeof r=="object"){t=0;for(i in r)if(we.call(r,i)&&++t&&!we.call(e,i)||!(i in e)||!ce(r[i],e[i]))return!1;return Object.keys(e).length===t}}return r!==r&&e!==e}var V={REQUEST_START:"REQUEST_START",REQUEST_END:"REQUEST_END"},Se={manual:!1,useCache:!0,ssr:!0,autoCancel:!0},K=Re();K.__ssrPromises;K.resetConfigure;K.configure;K.loadCache;K.serializeCache;K.clearCache;function Ke(r){return r&&r.nativeEvent&&r.nativeEvent instanceof Event}function _e(r){var e=P({},r);return delete e.cancelToken,JSON.stringify(e)}function be(r){return typeof r=="string"?{url:r}:Object.assign({},r)}function Re(r){var e,i,t,s=[];function o(){e=new Ve({max:500}),i=Z,t=Se}function l(c){c===void 0&&(c={}),c.axios!==void 0&&(i=c.axios),c.cache!==void 0&&(e=c.cache),c.defaultOptions!==void 0&&(t=P({},Se,c.defaultOptions))}o(),l(r);function d(c){e.load(c)}function L(){return m.apply(this,arguments)}function m(){return m=ne(H.mark(function c(){var w;return H.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return w=[].concat(s),s.length=0,g.next=4,Promise.all(w);case 4:return g.abrupt("return",e.dump());case 5:case"end":return g.stop()}},c)})),m.apply(this,arguments)}function f(){e.clear()}return Object.assign(C,{__ssrPromises:s,resetConfigure:o,configure:l,loadCache:d,serializeCache:L,clearCache:f});function x(c,w){if(e){var p=_e(c),g=P({},w);delete g.config,delete g.request,e.set(p,g)}}function b(c,w){var p=!w.manual&&A(c,w);return P({loading:!w.manual&&!p,error:null},p?{data:p.data,response:p}:null)}function S(c,w){var p;switch(w.type){case V.REQUEST_START:return P({},c,{loading:!0,error:null});case V.REQUEST_END:return P({},c,{loading:!1},w.error?{}:{data:w.payload.data,error:null},(p={},p[w.error?"error":"response"]=w.payload,p))}}function A(c,w,p){if(!(!e||!w.useCache)){var g=_e(c),O=e.get(g);return O&&p&&p({type:V.REQUEST_END,payload:O}),O}}function z(c,w){return v.apply(this,arguments)}function v(){return v=ne(H.mark(function c(w,p){var g;return H.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.prev=0,p({type:V.REQUEST_START}),T.next=4,i(w);case 4:return g=T.sent,x(w,g),p({type:V.REQUEST_END,payload:g}),T.abrupt("return",g);case 10:throw T.prev=10,T.t0=T.catch(0),Z.isCancel(T.t0)||p({type:V.REQUEST_END,payload:T.t0,error:!0}),T.t0;case 14:case"end":return T.stop()}},c,null,[[0,10]])})),v.apply(this,arguments)}function I(c,w,p){return M.apply(this,arguments)}function M(){return M=ne(H.mark(function c(w,p,g){return H.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.abrupt("return",A(w,p,g)||z(w,g));case 1:case"end":return T.stop()}},c)})),M.apply(this,arguments)}function C(c,w){var p=j.useMemo(function(){return be(c)},Te(c)),g=j.useMemo(function(){return P({},t,w)},Te(w)),O=j.useRef(),T=j.useReducer(S,b(p,g)),G=T[0],U=T[1];typeof window>"u"&&g.ssr&&!g.manual&&C.__ssrPromises.push(i(p));var $=j.useCallback(function(){O.current&&O.current.cancel()},[]),a=j.useCallback(function(h){return g.autoCancel&&$(),O.current=Z.CancelToken.source(),h.cancelToken=O.current.token,h},[$,g.autoCancel]);j.useEffect(function(){return g.manual||I(a(p),g,U).catch(function(){}),function(){g.autoCancel&&$()}},[p,g,a,$]);var n=j.useCallback(function(h,u){return h=be(h),I(a(P({},p,Ke(h)?null:h)),P({useCache:!1},u),U)},[p,a]);return[G,n,$]}}function Te(r){var e=j.useRef(),i=j.useRef(0);return ce(r,e.current)||(e.current=r,i.current+=1),[i.current]}const Ye={baseURL:"/",headers:{Authorization:`Bearer ${sessionStorage.getItem("Authorization")}`}},Le=Re({axios:Z.create(Ye)}),Je=({value:r,setItemText:e})=>{const[i,t]=j.useState(r);return k("div",{children:X(de,{children:[k(ze,{name:"EditItem",size:"xs",value:i,onChange:l=>t(l.currentTarget.value)}),k(fe,{size:"xs",onClick:()=>{e(i)},children:"✓"})]})})},Xe=({item:r,refetch:e})=>{const{t:i}=ue("beginnerProjects"),[t,s]=D.useState(r.completed),[o,l]=D.useState(!1),[d,L]=D.useState(!1),[m,f]=D.useState(r.text),[{loading:x},b]=Le({url:"/api/todos/item",method:"put"},{manual:!0}),[S,A]=D.useState(!1),[{loading:z},v]=Le({url:"/api/todos/item",method:"delete"},{manual:!0}),I=()=>{s(!t),l(!0)},M=()=>{L(!0)};D.useEffect(()=>{(o||d&&m)&&b({params:{_id:r._id,text:m,completed:t}}).then(()=>{l(!1),m&&L(!1)})},[o,m]);const C=()=>{A(!0)};return D.useEffect(()=>{S&&v({params:{_id:r._id}}).then(()=>{Me.info(i("Todos.ItemDeleted")),e()})},[S]),X("li",{className:"mb-2 flex",children:[X("div",{className:"flex basis-11/12 gap-2",children:[k(Ae,{checked:t,onChange:I,disabled:x}),d?k(Je,{value:m,setIsEditing:L,setItemText:f}):k("span",{onDoubleClick:M,children:m})]}),k("div",{className:"flex basis-1/12 justify-end",children:k(fe,{shape:"square",size:"sm",color:"ghost",disabled:S,onClick:C,children:k(De,{color:"red",size:20})})})]})},at=()=>{const{t:r}=ue("beginnerProjects"),{isLoading:e,isError:i,data:t,refetch:s}=Pe({queryKey:["todos"],queryFn:async()=>{const{data:o}=await ke.get("/api/todos/item");return o}});return e||!t?k(je,{}):X(Ne,{className:"w-1/2 p-4",children:[k("h5",{className:"text-center",children:r("Todos.title")}),k("p",{className:"text-center",children:r("Todos.EditTextInfo")}),k(Ue,{refetch:s}),k("ol",{start:1,children:t.map(o=>k(Xe,{item:o,refetch:s},o._id))})]})};export{at as default};
