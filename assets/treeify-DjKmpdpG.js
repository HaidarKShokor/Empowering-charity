import{bO as B,bU as C}from"./index-OKaLQa2V.js";var D=function(a){for(var o=new Buffer(a.length),t=0,i=a.length-1;t<=i;++t,--i)o[t]=a[i],o[i]=a[t];return o};const O=B(D);var E={exports:{}};(function(l,a){(function(o,t){l.exports=t()})(C,function(){function o(f,e){var r=e?"└":"├";return f?r+="─ ":r+="──┐",r}function t(f,e){var r=[];for(var n in f)f.hasOwnProperty(n)&&(e&&typeof f[n]=="function"||r.push(n));return r}function i(f,e,r,n,u,y,x){var s="",b=0,g,p,m=n.slice(0);if(m.push([e,r])&&n.length>0&&(n.forEach(function(c,w){w>0&&(s+=(c[1]?" ":"│")+"  "),!p&&c[0]===e&&(p=!0)}),s+=o(f,r)+f,u&&(typeof e!="object"||e instanceof Date)&&(s+=": "+e),p&&(s+=" (circular ref.)"),x(s)),!p&&typeof e=="object"){var h=t(e,y);h.forEach(function(c){g=++b===h.length,i(c,e[c],g,m,u,y,x)})}}var v={};return v.asLines=function(f,e,r,n){var u=typeof r!="function"?r:!1;i(".",f,!1,[],e,u,n||r)},v.asTree=function(f,e,r){var n="";return i(".",f,!1,[],e,r,function(u){n+=u+`
`}),n},v})})(E);var P=E.exports;export{D as b,O as r,P as t};
