const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-OKaLQa2V.js","assets/index-CQtKXDbQ.css"])))=>i.map(i=>d[i]);
var U=Object.defineProperty;var F=(w,s,t)=>s in w?U(w,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):w[s]=t;var g=(w,s,t)=>F(w,typeof s!="symbol"?s+"":s,t);import{Z as R,bC as l,$ as _,a0 as $,db as N,dc as T,a1 as W,v as x,dd as D,a2 as M,aP as V,aR as z,B as m,b9 as y,aF as A,o as f,T as k,X as O,aM as K,de as B,c as S,df as Q}from"./index-OKaLQa2V.js";import{h as Y}from"./hasERC20Allowance-654a940b.browser.esm-ClSzhS1u.js";import{R as j,a as G}from"./assertEnabled-d1700f0b.browser.esm-DuVb1Cl8.js";import{a as Z,b as H,G as X,C as L,d as J}from"./contract-appuri-5c40af52.browser.esm-B5lMZRzW.js";import{i as E}from"./marketplace-e3129e2f.browser.esm-AFUJc6qs.js";import{b as tt}from"./QueryParams-32a56510.browser.esm-m8McVUGM.js";import{C as rt}from"./contract-interceptor-d7b164a7.browser.esm-C_yNedqZ.js";import{C as et,a as at}from"./contract-owner-49e75547.browser.esm-DPdtIcRk.js";import{C as nt}from"./contract-roles-71988d2e.browser.esm-9h5HZz0G.js";import{S as st}from"./erc-1155-standard-a5888d37.browser.esm-P1RapVdp.js";import{E as ot}from"./erc-20-9a18a51c.browser.esm-D_rh5OZB.js";import{N as ct}from"./setErc20Allowance-7f76f677.browser.esm-DFiAANSk.js";import"./index-KC4k62k7.js";import"./treeify-DjKmpdpG.js";import"./erc-1155-7ce9bee1.browser.esm-CmEiyMgm.js";import"./drop-claim-conditions-e6f2abbf.browser.esm-aae7vFIr.js";const v=R.object({contractAddress:$}),dt=v.extend({quantity:_}),it=v.extend({tokenId:l}),pt=v.extend({tokenId:l,quantity:l}),ut=dt.omit({quantity:!0}).extend({quantityPerReward:_}),ht=it,gt=pt.omit({quantity:!0}).extend({quantityPerReward:l}),mt=ut.extend({totalRewards:l.default("1")}),lt=ht,wt=gt.extend({totalRewards:l.default("1")}),q=R.object({erc20Rewards:R.array(mt).default([]),erc721Rewards:R.array(lt).default([]),erc1155Rewards:R.array(wt).default([])}),ft=q.extend({packMetadata:ct,rewardsPerPack:l.default("1"),openStartTime:j.default(new Date)});class kt{constructor(s,t,r,n,e){g(this,"featureName",T.name);g(this,"open",f((()=>{var s=this;return async function(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5e5;return k.fromContractWrapper({contractWrapper:s.contractWrapper,method:"openPack",args:[t,r],overrides:{gasLimit:n},parse:e=>{let o=m.from(0);try{o=s.contractWrapper.parseLogs("PackOpenRequested",e==null?void 0:e.logs)[0].args.requestId}catch{}return{receipt:e,id:o}}})}})()));g(this,"claimRewards",f((()=>{var s=this;return async function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:5e5;return k.fromContractWrapper({contractWrapper:s.contractWrapper,method:"claimRewards",args:[],overrides:{gasLimit:t},parse:async r=>{const n=s.contractWrapper.parseLogs("PackOpened",r==null?void 0:r.logs);if(n.length===0)throw new Error("PackOpened event not found");const e=n[0].args.rewardUnitsDistributed;return await s.parseRewards(e)}})}})()));let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:new W(s,t,B,n,r);this.contractWrapper=o,this.storage=r,this.chainId=e,this.events=new L(this.contractWrapper)}onNetworkUpdated(s){this.contractWrapper.updateSignerOrProvider(s)}getAddress(){return this.contractWrapper.address}async parseRewards(s){const t=[],r=[],n=[];for(const e of s)switch(e.tokenType){case 0:{const o=await y(this.contractWrapper.getProvider(),e.assetContract);t.push({contractAddress:e.assetContract,quantityPerReward:A(e.totalAmount,o.decimals).toString()});break}case 1:{r.push({contractAddress:e.assetContract,tokenId:e.tokenId.toString()});break}case 2:{n.push({contractAddress:e.assetContract,tokenId:e.tokenId.toString(),quantityPerReward:e.totalAmount.toString()});break}}return{erc20Rewards:t,erc721Rewards:r,erc1155Rewards:n}}async addPackOpenEventListener(s){return this.events.addEventListener("PackOpened",async t=>{s(t.data.packId.toString(),t.data.opener,await this.parseRewards(t.data.rewardUnitsDistributed))})}async canClaimRewards(s){const t=await O(s||await this.contractWrapper.getSignerAddress());return await this.contractWrapper.read("canClaimRewards",[t])}async openAndClaim(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5e5;const n=await this.contractWrapper.sendTransaction("openPackAndClaimRewards",[s,t,r],{gasLimit:m.from(5e5)});let e=m.from(0);try{e=this.contractWrapper.parseLogs("PackOpenRequested",n==null?void 0:n.logs)[0].args.requestId}catch{}return{receipt:n,id:e}}async getLinkBalance(){const s=(await S(async()=>{const{default:t}=await import("./index-OKaLQa2V.js").then(r=>r.ec);return{default:t}},__vite__mapDeps([0,1]))).default;return this.getLinkContract(s).balanceOf(this.contractWrapper.address)}async transferLink(s){const t=(await S(async()=>{const{default:r}=await import("./index-OKaLQa2V.js").then(n=>n.ec);return{default:r}},__vite__mapDeps([0,1]))).default;await this.getLinkContract(t).transfer(this.contractWrapper.address,s)}getLinkContract(s){const t=Q[this.chainId];if(!t)throw new Error(`No LINK token address found for chainId ${this.chainId}`);const r=new W(this.contractWrapper.getSignerOrProvider(),t,s,this.contractWrapper.options,this.storage);return new ot(r,this.storage,this.chainId)}}const C=class C extends st{constructor(t,r,n){let e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},o=arguments.length>4?arguments[4]:void 0,p=arguments.length>5?arguments[5]:void 0,d=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new W(t,r,o,e.gasless&&"openzeppelin"in e.gasless?{...e,gasless:{...e.gasless,openzeppelin:{...e.gasless.openzeppelin,useEOAForwarder:!0}}}:e,n);super(d,n,p);g(this,"create",f(async t=>{const r=await this.contractWrapper.getSignerAddress();return this.createTo.prepare(r,t)}));g(this,"addPackContents",f(async(t,r)=>{const[n,e]=await Promise.all([this.contractWrapper.getSignerAddress(),q.parseAsync(r)]),{contents:o,numOfRewardUnits:p}=await this.toPackContentArgs(e);return k.fromContractWrapper({contractWrapper:this.contractWrapper,method:"addPackContents",args:[t,o,p,n],parse:d=>{const c=this.contractWrapper.parseLogs("PackUpdated",d==null?void 0:d.logs);if(c.length===0)throw new Error("PackUpdated event not found");const a=c[0].args.packId;return{id:a,receipt:d,data:()=>this.erc1155.get(a)}}})}));g(this,"createTo",f(async(t,r)=>{const[n,e,o]=await Promise.all([tt(r.packMetadata,this.storage),ft.parseAsync(r),O(t)]),{erc20Rewards:p,erc721Rewards:d,erc1155Rewards:c}=e,a={erc20Rewards:p,erc721Rewards:d,erc1155Rewards:c},{contents:u,numOfRewardUnits:i}=await this.toPackContentArgs(a);return k.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createPack",args:[u,i,n,e.openStartTime,e.rewardsPerPack,o],parse:h=>{const P=this.contractWrapper.parseLogs("PackCreated",h==null?void 0:h.logs);if(P.length===0)throw new Error("PackCreated event not found");const I=P[0].args.packId;return{id:I,receipt:h,data:()=>this.erc1155.get(I)}}})}));g(this,"open",f((()=>{var t=this;return async function(r){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5e5;if(t._vrf)throw new Error("This contract is using Chainlink VRF, use `contract.vrf.open()` or `contract.vrf.openAndClaim()` instead");return k.fromContractWrapper({contractWrapper:t.contractWrapper,method:"openPack",args:[r,n],overrides:{gasLimit:e},parse:async o=>{const p=t.contractWrapper.parseLogs("PackOpened",o==null?void 0:o.logs);if(p.length===0)throw new Error("PackOpened event not found");const d=p[0].args.rewardUnitsDistributed,c=[],a=[],u=[];for(const i of d)switch(i.tokenType){case 0:{const h=await y(t.contractWrapper.getProvider(),i.assetContract);c.push({contractAddress:i.assetContract,quantityPerReward:A(i.totalAmount,h.decimals).toString()});break}case 1:{a.push({contractAddress:i.assetContract,tokenId:i.tokenId.toString()});break}case 2:{u.push({contractAddress:i.assetContract,tokenId:i.tokenId.toString(),quantityPerReward:i.totalAmount.toString()});break}}return{erc20Rewards:c,erc721Rewards:a,erc1155Rewards:u}}})}})()));this.abi=x.parse(o||[]),this.metadata=new Z(this.contractWrapper,D,this.storage),this.app=new H(this.contractWrapper,this.metadata,this.storage),this.roles=new nt(this.contractWrapper,C.contractRoles),this.royalties=new et(this.contractWrapper,this.metadata),this.encoder=new M(this.contractWrapper),this.estimator=new X(this.contractWrapper),this.events=new L(this.contractWrapper),this.interceptor=new rt(this.contractWrapper),this.owner=new at(this.contractWrapper),this._vrf=this.detectVrf()}get vrf(){return G(this._vrf,T)}onNetworkUpdated(t){var r;this.contractWrapper.updateSignerOrProvider(t),(r=this._vrf)==null||r.onNetworkUpdated(t)}getAddress(){return this.contractWrapper.address}async get(t){return this.erc1155.get(t)}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t){return this.erc1155.getOwned(t)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[V("transfer"),z])}async getPackContents(t){const{contents:r,perUnitAmounts:n}=await this.contractWrapper.read("getPackContents",[t]),e=[],o=[],p=[];for(let d=0;d<r.length;d++){const c=r[d],a=n[d];switch(c.tokenType){case 0:{const u=await y(this.contractWrapper.getProvider(),c.assetContract),i=A(a,u.decimals),h=A(m.from(c.totalAmount).div(a),u.decimals);e.push({contractAddress:c.assetContract,quantityPerReward:i,totalRewards:h});break}case 1:{o.push({contractAddress:c.assetContract,tokenId:c.tokenId.toString()});break}case 2:{p.push({contractAddress:c.assetContract,tokenId:c.tokenId.toString(),quantityPerReward:a.toString(),totalRewards:m.from(c.totalAmount).div(a).toString()});break}}}return{erc20Rewards:e,erc721Rewards:o,erc1155Rewards:p}}async toPackContentArgs(t){const r=[],n=[],{erc20Rewards:e,erc721Rewards:o,erc1155Rewards:p}=t,d=this.contractWrapper.getProvider(),c=await this.contractWrapper.getSignerAddress();for(const a of e){const i=(await K(d,a.quantityPerReward,a.contractAddress)).mul(a.totalRewards);if(!await Y(this.contractWrapper,a.contractAddress,i))throw new Error(`ERC20 token with contract address "${a.contractAddress}" does not have enough allowance to transfer.

You can set allowance to the multiwrap contract to transfer these tokens by running:

await sdk.getToken("${a.contractAddress}").setAllowance("${this.getAddress()}", ${i});

`);n.push(a.totalRewards),r.push({assetContract:a.contractAddress,tokenType:0,totalAmount:i,tokenId:0})}for(const a of o){if(!await E(this.contractWrapper.getProvider(),this.getAddress(),a.contractAddress,a.tokenId,c))throw new Error(`ERC721 token "${a.tokenId}" with contract address "${a.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getNFTCollection("${a.contractAddress}").setApprovalForToken("${this.getAddress()}", ${a.tokenId});

`);n.push("1"),r.push({assetContract:a.contractAddress,tokenType:1,totalAmount:1,tokenId:a.tokenId})}for(const a of p){if(!await E(this.contractWrapper.getProvider(),this.getAddress(),a.contractAddress,a.tokenId,c))throw new Error(`ERC1155 token "${a.tokenId}" with contract address "${a.contractAddress}" is not approved for transfer.

You can give approval the multiwrap contract to transfer this token by running:

await sdk.getEdition("${a.contractAddress}").setApprovalForAll("${this.getAddress()}", true);

`);n.push(a.totalRewards),r.push({assetContract:a.contractAddress,tokenType:2,totalAmount:m.from(a.quantityPerReward).mul(m.from(a.totalRewards)),tokenId:a.tokenId})}return{contents:r,numOfRewardUnits:n}}async prepare(t,r,n){return k.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:n})}async call(t,r,n){return this.contractWrapper.call(t,r,n)}detectVrf(){if(J(this.contractWrapper,"PackVRF"))return new kt(this.contractWrapper.getSignerOrProvider(),this.contractWrapper.address,this.storage,this.contractWrapper.options,this.chainId)}};g(C,"contractRoles",N);let b=C;export{b as Pack};
