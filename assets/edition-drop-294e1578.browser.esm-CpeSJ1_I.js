var u=Object.defineProperty;var d=(s,e,t)=>e in s?u(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var o=(s,e,t)=>d(s,typeof e!="symbol"?e+"":e,t);import{cZ as g,a1 as C,v as f,c_ as w,a2 as y,aP as W,aR as T,o as i,T as A,B as R}from"./index-OKaLQa2V.js";import{a as E,b as k,C as v,G as S}from"./contract-appuri-5c40af52.browser.esm-B5lMZRzW.js";import{C as b}from"./contract-interceptor-d7b164a7.browser.esm-C_yNedqZ.js";import{C as O,a as P}from"./contract-owner-49e75547.browser.esm-DPdtIcRk.js";import{C as B}from"./contract-platform-fee-e756e68f.browser.esm--yEBZkt9.js";import{C as I}from"./contract-roles-71988d2e.browser.esm-9h5HZz0G.js";import{C as N}from"./contract-sales-918c7cb8.browser.esm-D3mmulqU.js";import{D as F}from"./erc-1155-7ce9bee1.browser.esm-CmEiyMgm.js";import{S as _}from"./erc-1155-standard-a5888d37.browser.esm-P1RapVdp.js";import{P as x}from"./thirdweb-checkout-f6974aaf.browser.esm-k3Nuf9b2.js";import"./setErc20Allowance-7f76f677.browser.esm-DFiAANSk.js";import"./QueryParams-32a56510.browser.esm-m8McVUGM.js";import"./index-KC4k62k7.js";import"./treeify-DjKmpdpG.js";import"./assertEnabled-d1700f0b.browser.esm-DuVb1Cl8.js";class D{constructor(e){this.events=e}async getAllClaimerAddresses(e){const t=(await this.events.getEvents("TokensClaimed")).filter(r=>r.data&&R.isBigNumber(r.data.tokenId)?r.data.tokenId.eq(e):!1);return Array.from(new Set(t.filter(r=>{var a;return typeof((a=r.data)==null?void 0:a.claimer)=="string"}).map(r=>r.data.claimer)))}}const p=class p extends _{constructor(t,r,a){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,h=arguments.length>5?arguments[5]:void 0,l=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new C(t,r,c,n,a);super(l,a,h);o(this,"createBatch",i(async(t,r)=>this.erc1155.lazyMint.prepare(t,r)));o(this,"claimTo",i((()=>{var t=this;return async function(r,a,n){let c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;return t.erc1155.claimTo.prepare(r,a,n,{checkERC20Allowance:c})}})()));o(this,"claim",i((()=>{var t=this;return async function(r,a){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const c=await t.contractWrapper.getSignerAddress();return t.claimTo.prepare(c,r,a,n)}})()));o(this,"burnTokens",i(async(t,r)=>this.erc1155.burn.prepare(t,r)));this.abi=f.parse(c),this.metadata=new E(this.contractWrapper,w,this.storage),this.app=new k(this.contractWrapper,this.metadata,this.storage),this.roles=new I(this.contractWrapper,p.contractRoles),this.royalties=new O(this.contractWrapper,this.metadata),this.sales=new N(this.contractWrapper),this.claimConditions=new F(this.contractWrapper,this.metadata,this.storage),this.events=new v(this.contractWrapper),this.history=new D(this.events),this.encoder=new y(this.contractWrapper),this.estimator=new S(this.contractWrapper),this.platformFees=new B(this.contractWrapper),this.interceptor=new b(this.contractWrapper),this.checkout=new x(this.contractWrapper),this.owner=new P(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t,r){return this.erc1155.getOwned(t,r)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[W("transfer"),T])}async getClaimTransaction(t,r,a){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;return this.erc1155.getClaimTransaction(t,r,a,{checkERC20Allowance:n})}async prepare(t,r,a){return A.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:a})}async call(t,r,a){return this.contractWrapper.call(t,r,a)}};o(p,"contractRoles",g);let m=p;export{m as EditionDrop};
