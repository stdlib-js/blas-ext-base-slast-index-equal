"use strict";var t=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var n=t(function(D,f){
var _=require('@stdlib/blas-ext-base-sfirst-index-equal/dist').ndarray;function O(r,e,a,i,s,q,R){var u,o,x,l,d;return r<=0?-1:(o=i+(r-1)*a,x=R+(r-1)*q,l=-a,d=-q,u=_(r,e,l,o,s,d,x),u<0?u:r-1-u)}f.exports=O
});var E=t(function(F,c){
var y=require('@stdlib/strided-base-stride2offset/dist'),b=n();function g(r,e,a,i,s){return b(r,e,a,y(r,a),i,s,y(r,s))}c.exports=g
});var j=t(function(G,I){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=E(),k=n();h(p,"ndarray",k);I.exports=p
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=j(),v,m=z(w(__dirname,"./native.js"));A(m)?v=B:v=m;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
