var f=Object.defineProperty;var C=(p,s,t)=>s in p?f(p,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):p[s]=t;var n=(p,s,t)=>C(p,typeof s!="symbol"?s+"":s,t);import{D as h}from"./QueryParams-32a56510.browser.esm-m8McVUGM.js";import{cZ as w,a1 as W,v as A,da as T,a2 as y,bs as b,B as i,aP as R,aR as S,o,T as d}from"./index-OKaLQa2V.js";import{a as E,b as k,G as v,C as N}from"./contract-appuri-5c40af52.browser.esm-B5lMZRzW.js";import{C as I}from"./contract-interceptor-d7b164a7.browser.esm-C_yNedqZ.js";import{C as U,D as x,a as O}from"./contract-owner-49e75547.browser.esm-DPdtIcRk.js";import{C as F}from"./contract-platform-fee-e756e68f.browser.esm--yEBZkt9.js";import{C as M}from"./contract-roles-71988d2e.browser.esm-9h5HZz0G.js";import{C as _}from"./contract-sales-918c7cb8.browser.esm-D3mmulqU.js";import{D as L}from"./drop-claim-conditions-e6f2abbf.browser.esm-aae7vFIr.js";import{S as B}from"./erc-721-standard-4c4125d2.browser.esm-P5ghK_by.js";import{P as D}from"./thirdweb-checkout-f6974aaf.browser.esm-k3Nuf9b2.js";import"./setErc20Allowance-7f76f677.browser.esm-DFiAANSk.js";import"./index-KC4k62k7.js";import"./treeify-DjKmpdpG.js";import"./assertEnabled-d1700f0b.browser.esm-DuVb1Cl8.js";import"./erc-721-27306550.browser.esm-C8zXTDIQ.js";const l=class l extends B{constructor(t,r,a){let e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,m=arguments.length>5?arguments[5]:void 0,g=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new W(t,r,c,e,a);super(g,a,m);n(this,"createBatch",o(async(t,r)=>this.erc721.lazyMint.prepare(t,r)));n(this,"claimTo",o((()=>{var t=this;return async function(r,a){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return t.erc721.claimTo.prepare(r,a,{checkERC20Allowance:e})}})()));n(this,"claim",o((()=>{var t=this;return async function(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.claimTo.prepare(await t.contractWrapper.getSignerAddress(),r,a)}})()));n(this,"burn",o(async t=>this.erc721.burn.prepare(t)));n(this,"transfer",o(async(t,r)=>this.erc721.transfer.prepare(t,r)));n(this,"setApprovalForAll",o(async(t,r)=>this.erc721.setApprovalForAll.prepare(t,r)));n(this,"setApprovalForToken",o(async(t,r)=>d.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[t,r]})));this.abi=A.parse(c||[]),this.metadata=new E(this.contractWrapper,T,this.storage),this.app=new k(this.contractWrapper,this.metadata,this.storage),this.roles=new M(this.contractWrapper,l.contractRoles),this.royalties=new U(this.contractWrapper,this.metadata),this.sales=new _(this.contractWrapper),this.claimConditions=new L(this.contractWrapper,this.metadata,this.storage),this.encoder=new y(this.contractWrapper),this.estimator=new v(this.contractWrapper),this.events=new N(this.contractWrapper),this.platformFees=new F(this.contractWrapper),this.revealer=new x(this.contractWrapper,this.storage,b.name,()=>this.erc721.nextTokenIdToMint()),this.interceptor=new I(this.contractWrapper),this.owner=new O(this.contractWrapper),this.checkout=new D(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async totalSupply(){const[t,r]=await Promise.all([this.totalClaimedSupply(),this.totalUnclaimedSupply()]);return t.add(r)}async getAllClaimed(t){const r=i.from((t==null?void 0:t.start)||0).toNumber(),a=i.from((t==null?void 0:t.count)||h).toNumber(),e=Math.min((await this.contractWrapper.read("nextTokenIdToClaim",[])).toNumber(),r+a);return await Promise.all(Array.from(Array(e).keys()).map(c=>this.get(c.toString())))}async getAllUnclaimed(t){const r=i.from((t==null?void 0:t.start)||0).toNumber(),a=i.from((t==null?void 0:t.count)||h).toNumber(),e=i.from(Math.max((await this.contractWrapper.read("nextTokenIdToClaim",[])).toNumber(),r)),c=i.from(Math.min((await this.contractWrapper.read("nextTokenIdToMint",[])).toNumber(),e.toNumber()+a));return await Promise.all(Array.from(Array(c.sub(e).toNumber()).keys()).map(m=>this.erc721.getTokenMetadata(e.add(m).toString())))}async totalClaimedSupply(){return this.erc721.totalClaimedSupply()}async totalUnclaimedSupply(){return this.erc721.totalUnclaimedSupply()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[R("transfer"),S])}async getClaimTransaction(t,r){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return this.erc721.getClaimTransaction(t,r,{checkERC20Allowance:a})}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,r){return this.erc721.isApproved(t,r)}async prepare(t,r,a){return d.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:a})}async call(t,r,a){return this.contractWrapper.call(t,r,a)}};n(l,"contractRoles",w);let u=l;export{u as NFTDrop};
