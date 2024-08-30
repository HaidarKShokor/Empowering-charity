var it=Object.defineProperty;var ot=(u,t,r)=>t in u?it(u,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):u[t]=r;var o=(u,t,r)=>ot(u,typeof t!="symbol"?t+"":t,r);import{ab as ct,aR as R,X as f,o as d,T as g,bh as k,B as T,bi as Q,bj as Y,bk as J,bl as _,bm as G,bn as H,aA as P,bo as B,bp as j,bq as K,br as X,bs as q,bt as tt,b1 as pt,a3 as dt,bu as ht,t as v,bv as z,aJ as U,aK as Z,y as rt,aM as F,a2 as at,V as lt,$ as ut,bw as mt,bx as gt,Z as V,a0 as Wt,by as yt,bz as ft}from"./index-OKaLQa2V.js";import{a as y}from"./assertEnabled-d1700f0b.browser.esm-DuVb1Cl8.js";import{h as E,d as m,a as wt}from"./contract-appuri-5c40af52.browser.esm-B5lMZRzW.js";import{F as Tt,a as Ct,u as A,g as N,b as et,D as L}from"./QueryParams-32a56510.browser.esm-m8McVUGM.js";import{D as Et}from"./drop-claim-conditions-e6f2abbf.browser.esm-aae7vFIr.js";import{c as bt,D as It}from"./contract-owner-49e75547.browser.esm-DPdtIcRk.js";import{B as Mt,C as $,s as x}from"./setErc20Allowance-7f76f677.browser.esm-DFiAANSk.js";import{o as St,q as At,s as kt,v as vt,B as Nt}from"./index-KC4k62k7.js";class Rt{constructor(t){o(this,"featureName",J.name);o(this,"token",d(async t=>g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"burn",args:[t]})));this.contractWrapper=t}}class Ft{constructor(t,r,a){o(this,"featureName",j.name);o(this,"to",d(async(t,r,a)=>{const n=await this.conditions.getClaimTransaction(t,r,a);return n.setParse(e=>{const i=this.contractWrapper.parseLogs("TokensClaimed",e==null?void 0:e.logs)[0].args.startTokenId,c=i.add(r),h=[];for(let p=i;p.lt(c);p=p.add(1))h.push({id:p,receipt:e,data:()=>this.erc721.get(p)});return h}),n}));this.erc721=t,this.contractWrapper=r,this.storage=a;const n=new wt(this.contractWrapper,dt,this.storage);this.conditions=new Et(this.contractWrapper,n,this.storage)}}function Lt(u){return lt(ut.parse(u))}class Ut{constructor(t,r){o(this,"featureName",ht.name);o(this,"to",d(async(t,r,a)=>{var p;const n=await((p=this.contractWrapper.getSigner())==null?void 0:p.getAddress());if(t!==n)throw new Error("Zora Drop: Destination address must match connected wallet address");if(a!=null&&a.pricePerToken)throw new Error("Zora Drop: Custom pricePerToken is not supported. Price is automatically calculated");const s=(await this.getSaleDetails()).publicSalePrice,i=Lt("0.000777"),c=T.from(s).add(i).mul(r),h=g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"purchase",args:[r],overrides:{value:c}});return h.setParse(l=>{const C=this.contractWrapper.parseLogs("Sale",l==null?void 0:l.logs)[0].args.firstPurchasedTokenId,w=C.add(r),b=[];for(let I=C;I.lt(w);I=I.add(1))b.push({id:I,receipt:l,data:()=>this.erc721.get(I)});return b}),h}));this.erc721=t,this.contractWrapper=r}async getSaleDetails(){return this.contractWrapper.read("saleDetails",[])}}class _t{constructor(t,r){o(this,"featureName",B.name);o(this,"to",d(async(t,r,a)=>{const n=await this.getClaimTransaction(t,r,a);return n.setParse(e=>{const i=this.contractWrapper.parseLogs("TokensClaimed",e==null?void 0:e.logs)[0].args.startTokenId,c=i.add(r),h=[];for(let p=i;p.lt(c);p=p.add(1))h.push({id:p,receipt:e,data:()=>this.erc721.get(p)});return h}),n}));this.erc721=t,this.contractWrapper=r}async getClaimTransaction(t,r,a){let n={};return a&&a.pricePerToken&&(n=await bt(this.contractWrapper,a.pricePerToken,r,a.currencyAddress,a.checkERC20Allowance)),g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"claim",args:[t,r],overrides:n})}}class Bt{constructor(t,r,a){o(this,"featureName",G.name);o(this,"lazyMint",d(async(t,r)=>{const a=await this.erc721.nextTokenIdToMint(),n=await A(t,this.storage,a.toNumber(),r),e=N(n);return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"lazyMint",args:[n.length,e.endsWith("/")?e:`${e}/`,v("")],parse:s=>{const i=this.contractWrapper.parseLogs("TokensLazyMinted",s==null?void 0:s.logs),c=i[0].args.startTokenId,h=i[0].args.endTokenId,p=[];for(let l=c;l.lte(h);l=l.add(1))p.push({id:l,receipt:s,data:()=>this.erc721.getTokenMetadata(l)});return p}})}));o(this,"updateMetadata",d(async(t,r,a)=>{const n=await this.contractWrapper.read("getBaseURICount",[]);if(n.eq(0))throw new Error("No base URI set. Please set a base URI before updating metadata");const e=T.from(t);let s=T.from(0),i=T.from(0),c=0;for(let w=0;w<n.toNumber()&&(c=w,i=await this.contractWrapper.read("getBatchIdAtIndex",[c]),!i.gt(e));w++)s=i;const h=Array.from({length:i.sub(s).toNumber()},(w,b)=>b+s.toNumber()),p=await Promise.all(h.map(w=>this.erc721.getTokenMetadata(w))),l=[];for(let w=0;w<p.length;w++){const{id:b,uri:I,...M}=p[w];T.from(e).eq(T.from(b))?l.push(r):l.push(M)}const W=await A(l,this.storage,s.toNumber(),a),C=W[0].substring(0,W[0].lastIndexOf("/"));return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"updateBatchBaseURI",args:[c,`${C.endsWith("/")?C:`${C}/`}`]})}));this.erc721=t,this.contractWrapper=r,this.storage=a,this.revealer=this.detectErc721Revealable()}detectErc721Revealable(){if(m(this.contractWrapper,"ERC721Revealable"))return new It(this.contractWrapper,this.storage,q.name,()=>this.erc721.nextTokenIdToMint())}}class xt{constructor(t){o(this,"featureName",_.name);o(this,"cancel",d(async t=>g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"cancel",args:[t]})));o(this,"revoke",d(async t=>g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"revoke",args:[t]})));this.contractWrapper=t}}class Ot{constructor(t,r){o(this,"featureName",H.name);o(this,"update",d(async(t,r)=>{const a=await et(r,this.storage);return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setTokenURI",args:[t,a]})}));this.contractWrapper=t,this.storage=r}}class Dt{constructor(t,r,a){o(this,"featureName",Y.name);o(this,"to",d(async(t,r)=>{const[a,n]=await Promise.all([A(r,this.storage),f(t)]),e=new at(this.contractWrapper),s=a.map(i=>e.encode("mintTo",[n,i]));return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[s],parse:i=>{const c=this.contractWrapper.parseLogs("TokensMinted",i.logs);if(c.length===0||c.length<r.length)throw new Error("TokenMinted event not found, minting failed");return c.map(h=>{const p=h.args.tokenIdMinted;return{id:p,receipt:i,data:()=>this.erc721.get(p)}})}})}));this.erc721=t,this.contractWrapper=r,this.storage=a}}class Pt{constructor(t,r,a){o(this,"featureName",Q.name);o(this,"to",d(async(t,r)=>{const[a,n]=await Promise.all([et(r,this.storage),f(t)]);return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintTo",args:[n,a],parse:e=>{const s=this.contractWrapper.parseLogs("Transfer",e==null?void 0:e.logs);if(s.length===0)throw new Error("TransferEvent event not found");const i=s[0].args.tokenId;return{id:i,receipt:e,data:()=>this.erc721.get(i)}}})}));this.erc721=t,this.contractWrapper=r,this.storage=a,this.batch=this.detectErc721BatchMintable()}async getMintTransaction(t,r){return this.to.prepare(await f(t),r)}detectErc721BatchMintable(){if(m(this.contractWrapper,"ERC721BatchMintable"))return new Dt(this.erc721,this.contractWrapper,this.storage)}}class zt{constructor(t,r){o(this,"featureName",tt.name);o(this,"set",d(async t=>{const r=Mt.parse(t);r.description=this.sanitizeJSONString(r.description);const a=[];z(r.image)?a.push(this.storage.upload(r.image)):typeof r.image=="string"?a.push(Promise.resolve(r.image)):a.push(Promise.resolve(void 0)),z(r.animation_url)?a.push(this.storage.upload(r.animation_url)):typeof r.animation_url=="string"?a.push(Promise.resolve(r.animation_url)):a.push(Promise.resolve(void 0));const[n,e]=await Promise.all(a);return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setSharedMetadata",args:[{name:`${r.name||""}`,description:r.description||"",imageURI:n||"",animationURI:e||""}]})}));this.contractWrapper=t,this.storage=r}async get(){const t=await this.contractWrapper.read("sharedMetadata",[]);if(!t.every(r=>r===""))return{name:t.name,description:t.description,image:t.imageURI,animation_url:t.animationURI}}sanitizeJSONString(t){if(!t)return t;const r=JSON.stringify(t);return r.slice(1,r.length-1)}}class Zt{constructor(t,r){o(this,"featureName",mt.name);this.erc721=t,this.contractWrapper=r}async all(t,r){let a=await this.tokenIds(t);if(r){const n=(r==null?void 0:r.start)||0,e=(r==null?void 0:r.count)||L;a=a.slice(n,n+e)}return await Promise.all(a.map(n=>this.erc721.get(n.toString())))}async tokenIds(t){const r=await f(t||await this.contractWrapper.getSignerAddress()),a=await this.contractWrapper.read("balanceOf",[r]),n=Array.from(Array(a.toNumber()).keys());return await Promise.all(n.map(e=>this.contractWrapper.read("tokenOfOwnerByIndex",[r,e])))}}class Vt{constructor(t,r){o(this,"featureName",gt.name);this.erc721=t,this.contractWrapper=r}async all(t,r){let a=await this.tokenIds(t);if(r){const n=(r==null?void 0:r.start)||0,e=(r==null?void 0:r.count)||L;a=a.slice(n,n+e)}return await Promise.all(a.map(n=>this.erc721.get(n.toString())))}async tokenIds(t){const r=await f(t||await this.contractWrapper.getSignerAddress());return await this.contractWrapper.read("tokensOfOwner",[r])}}class $t{constructor(t,r){o(this,"featureName",k.name);this.erc721=t,this.contractWrapper=r,this.owned=this.detectErc721Owned()}async all(t){let r=T.from(0);E("startTokenId",this.contractWrapper)&&(r=await this.contractWrapper.read("startTokenId",[]));const a=T.from((t==null?void 0:t.start)||0).add(r).toNumber(),n=T.from((t==null?void 0:t.count)||L).toNumber(),e=await this.erc721.nextTokenIdToMint(),s=Math.min(e.add(r).toNumber(),a+n);return await Promise.all([...Array(s-a).keys()].map(i=>this.erc721.get((a+i).toString())))}async allOwners(t){let r,a=T.from(0);E("startTokenId",this.contractWrapper)&&(a=await this.contractWrapper.read("startTokenId",[]));try{r=await this.erc721.totalClaimedSupply()}catch{r=await this.totalCount()}r=r.add(a);let n=[...new Array(r.toNumber()).keys()];if(t){const s=(t==null?void 0:t.start)||0,i=(t==null?void 0:t.count)||L;n=n.slice(s,s+i)}const e=await Promise.all(n.map(s=>this.erc721.ownerOf(s).catch(()=>R)));return n.map(s=>({tokenId:s,owner:e[s]})).filter(s=>s.owner!==R)}async totalCount(){return await this.erc721.nextTokenIdToMint()}async totalCirculatingSupply(){return await this.contractWrapper.read("totalSupply",[])}detectErc721Owned(){if(m(this.contractWrapper,"ERC721Enumerable"))return new Zt(this.erc721,this.contractWrapper);if(m(this.contractWrapper,"ERC721AQueryable"))return new Vt(this.erc721,this.contractWrapper)}}const Qt=Nt.extend({tierPriority:V.array(V.string()),royaltyRecipient:Wt.default(R),royaltyBps:yt.default(0),quantity:ft.default(1)}),Yt=[{name:"validityStartTimestamp",type:"uint128"},{name:"validityEndTimestamp",type:"uint128"},{name:"uid",type:"bytes32"},{name:"data",type:"bytes"}];class Jt{constructor(t,r,a){o(this,"featureName",K.name);o(this,"createBatchWithTier",d(async(t,r,a)=>{const n=await this.erc721.nextTokenIdToMint(),e=await A(t,this.storage,n.toNumber(),a),s=N(e);return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"lazyMint",args:[e.length,s.endsWith("/")?s:`${s}/`,r,v("")],parse:i=>{const c=this.contractWrapper.parseLogs("TokensLazyMinted",i==null?void 0:i.logs),h=c[0].args[1],p=c[0].args[2],l=[];for(let W=h;W.lte(p);W=W.add(1))l.push({id:W,receipt:i,data:()=>this.erc721.getTokenMetadata(W)});return l}})}));o(this,"createDelayedRevealBatchWithTier",d(async(t,r,a,n,e)=>{if(!a)throw new Error("Password is required");const s=await this.storage.uploadBatch([$.parse(t)],{rewriteFileNames:{fileStartNumber:0}}),i=N(s),c=await this.erc721.nextTokenIdToMint(),h=await this.storage.uploadBatch(r.map(M=>$.parse(M)),{onProgress:e==null?void 0:e.onProgress,rewriteFileNames:{fileStartNumber:c.toNumber()}}),p=N(h),l=await this.contractWrapper.read("getBaseURICount",[]),W=await this.contractWrapper.getChainID(),C=U(["string","uint256","uint256","address"],[a,W,l,this.contractWrapper.address]),w=await this.contractWrapper.read("encryptDecrypt",[v(p),C]),b=U(["bytes","bytes","uint256"],[v(p),C,W]),I=Z.encode(["bytes","bytes32"],[w,b]);return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"lazyMint",args:[h.length,i.endsWith("/")?i:`${i}/`,n,I],parse:M=>{const O=this.contractWrapper.parseLogs("TokensLazyMinted",M==null?void 0:M.logs),nt=O[0].args[1],st=O[0].args[2],D=[];for(let S=nt;S.lte(st);S=S.add(1))D.push({id:S,receipt:M,data:()=>this.erc721.getTokenMetadata(S)});return D}})}));o(this,"reveal",d(async(t,r)=>{if(!r)throw new Error("Password is required");const a=await this.contractWrapper.getChainID(),n=U(["string","uint256","uint256","address"],[r,a,t,this.contractWrapper.address]);try{const e=await this.contractWrapper.callStatic().reveal(t,n);if(!e.includes("://")||!e.endsWith("/"))throw new Error("invalid password")}catch{throw new Error("invalid password")}return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"reveal",args:[t,n]})}));this.erc721=t,this.contractWrapper=r,this.storage=a}async getMetadataInTier(t){const a=(await this.contractWrapper.read("getMetadataForAllTiers",[])).find(e=>e.tier===t);if(!a)throw new Error("Tier not found in contract.");return await Promise.all(a.ranges.map((e,s)=>{const i=[],c=a.baseURIs[s];for(let h=e.startIdInclusive.toNumber();h<e.endIdNonInclusive.toNumber();h++){const p=c.endsWith("/")?`${c}${h}`:`${c}/${h}`,l=this.storage.downloadJSON(p);i.push(l)}return i}).flat())}async getTokensInTier(t){const r=await this.contractWrapper.read("getTokensInTierLen",[]);if(r.eq(0))return[];const a=await this.contractWrapper.read("getTokensInTier",[t,0,r]);return await Promise.all(a.map(e=>{const s=[];for(let i=e.startIdInclusive.toNumber();i<e.endIdNonInclusive.toNumber();i++)s.push(this.erc721.get(i));return s}).flat())}async generate(t){const[r]=await this.generateBatch([t]);return r}async generateBatch(t){const r=await Promise.all(t.map(e=>Qt.parseAsync(e))),a=await this.contractWrapper.getChainID(),n=this.contractWrapper.getSigner();return rt(n),await Promise.all(r.map(async e=>{const s=await this.contractWrapper.signTypedData(n,{name:"SignatureAction",version:"1",chainId:a,verifyingContract:this.contractWrapper.address},{GenericRequest:Yt},await this.mapPayloadToContractStruct(e));return{payload:e,signature:s.toString()}}))}async verify(t){const r=await this.mapPayloadToContractStruct(t.payload);return(await this.contractWrapper.read("verify",[r,t.signature]))[0]}async claimWithSignature(t){const r=await this.mapPayloadToContractStruct(t.payload),a=await F(this.contractWrapper.getProvider(),t.payload.price,t.payload.currencyAddress),n=await this.contractWrapper.getCallOverrides();await x(this.contractWrapper,a,t.payload.currencyAddress,n);const e=await this.contractWrapper.sendTransaction("claimWithSignature",[r,t.signature],n),s=this.contractWrapper.parseLogs("TokensClaimed",e==null?void 0:e.logs),i=s[0].args.startTokenId,c=i.add(s[0].args.quantityClaimed),h=[];for(let p=i;p.lt(c);p=p.add(1))h.push({id:p,receipt:e,data:()=>this.erc721.get(p)});return h}async mapPayloadToContractStruct(t){const r=await F(this.contractWrapper.getProvider(),t.price,t.currencyAddress),a=Z.encode(["string[]","address","address","uint256","address","uint256","uint256","address"],[t.tierPriority,t.to,t.royaltyRecipient,t.royaltyBps,t.primarySaleRecipient,t.quantity,r,t.currencyAddress]);return{uid:t.uid,validityStartTimestamp:t.mintStartTime,validityEndTimestamp:t.mintEndTime,data:a}}}class Gt{constructor(t,r){o(this,"featureName",X.name);o(this,"mint",d(async t=>{const r=t.payload,a=t.signature,n=await this.contractWrapper.getCallOverrides(),e=s=>{const i=this.contractWrapper.parseLogs("TokensMintedWithSignature",s.logs);if(i.length===0)throw new Error("No MintWithSignature event found");return{id:i[0].args.tokenIdMinted,receipt:s}};if(await this.isLegacyNFTContract()){const s=await this.mapLegacyPayloadToContractStruct(r),i=s.price;return await x(this.contractWrapper,i,r.currencyAddress,n),g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintWithSignature",args:[s,a],overrides:n,parse:e})}else{const s=await this.mapPayloadToContractStruct(r),i=s.pricePerToken.mul(s.quantity);return await x(this.contractWrapper,i,r.currencyAddress,n),g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintWithSignature",args:[s,a],overrides:n,parse:e})}}));o(this,"mintBatch",d(async t=>{const r=await this.isLegacyNFTContract(),a=(await Promise.all(t.map(s=>r?this.mapLegacyPayloadToContractStruct(s.payload):this.mapPayloadToContractStruct(s.payload)))).map((s,i)=>{const c=t[i],h=c.signature,p=c.payload.price;if(T.from(p).gt(0))throw new Error("Can only batch free mints. For mints with a price, use regular mint()");return{message:s,signature:h}}),n=new at(this.contractWrapper),e=a.map(s=>r?n.encode("mintWithSignature",[s.message,s.signature]):n.encode("mintWithSignature",[s.message,s.signature]));if(E("multicall",this.contractWrapper))return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[e],parse:s=>{const i=this.contractWrapper.parseLogs("TokensMintedWithSignature",s.logs);if(i.length===0)throw new Error("No MintWithSignature event found");return i.map(c=>({id:c.args.tokenIdMinted,receipt:s}))}});throw new Error("Multicall not available on this contract!")}));this.contractWrapper=t,this.storage=r}async verify(t){const r=await this.isLegacyNFTContract(),a=t.payload,n=t.signature;let e,s;return r?(e=await this.mapLegacyPayloadToContractStruct(a),s=await this.contractWrapper.read("verify",[e,n])):(e=await this.mapPayloadToContractStruct(a),s=await this.contractWrapper.read("verify",[e,n])),s[0]}async generate(t){return(await this.generateBatch([t]))[0]}async generateBatch(t){const r=await this.isLegacyNFTContract(),a=await Promise.all(t.map(c=>St.parseAsync(c))),n=a.map(c=>c.metadata),e=await A(n,this.storage),s=await this.contractWrapper.getChainID(),i=this.contractWrapper.getSigner();return rt(i),await Promise.all(a.map(async(c,h)=>{const p=e[h],l=await At.parseAsync({...c,uri:p});let W;return r?W=await this.contractWrapper.signTypedData(i,{name:"TokenERC721",version:"1",chainId:s,verifyingContract:this.contractWrapper.address},{MintRequest:kt},await this.mapLegacyPayloadToContractStruct(l)):W=await this.contractWrapper.signTypedData(i,{name:"SignatureMintERC721",version:"1",chainId:s,verifyingContract:await this.contractWrapper.address},{MintRequest:vt},await this.mapPayloadToContractStruct(l)),{payload:l,signature:W.toString()}}))}async mapPayloadToContractStruct(t){const r=await F(this.contractWrapper.getProvider(),t.price,t.currencyAddress);return{to:t.to,royaltyRecipient:t.royaltyRecipient,royaltyBps:t.royaltyBps,primarySaleRecipient:t.primarySaleRecipient,uri:t.uri,quantity:t.quantity,pricePerToken:r,currency:t.currencyAddress,validityStartTimestamp:t.mintStartTime,validityEndTimestamp:t.mintEndTime,uid:t.uid}}async mapLegacyPayloadToContractStruct(t){const r=await F(this.contractWrapper.getProvider(),t.price,t.currencyAddress);return{to:t.to,price:r,uri:t.uri,currency:t.currencyAddress,validityEndTimestamp:t.mintEndTime,validityStartTimestamp:t.mintStartTime,uid:t.uid,royaltyRecipient:t.royaltyRecipient,royaltyBps:t.royaltyBps,primarySaleRecipient:t.primarySaleRecipient}}async isLegacyNFTContract(){return m(this.contractWrapper,"ERC721SignatureMintV1")}}class nr{constructor(t,r,a){o(this,"featureName",ct.name);o(this,"transfer",d(async(t,r)=>{const[a,n]=await Promise.all([this.contractWrapper.getSignerAddress(),f(t)]);return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"transferFrom(address,address,uint256)",args:[a,n,r]})}));o(this,"transferFrom",d(async(t,r,a)=>{const[n,e]=await Promise.all([f(t),f(r)]);return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"transferFrom(address,address,uint256)",args:[n,e,a]})}));o(this,"setApprovalForAll",d(async(t,r)=>g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setApprovalForAll",args:[await f(t),r]})));o(this,"setApprovalForToken",d(async(t,r)=>g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[await f(t),r]})));o(this,"mint",d(async t=>this.mintTo.prepare(await this.contractWrapper.getSignerAddress(),t)));o(this,"mintTo",d(async(t,r)=>y(this.mintable,Q).to.prepare(t,r)));o(this,"mintBatch",d(async t=>this.mintBatchTo.prepare(await this.contractWrapper.getSignerAddress(),t)));o(this,"mintBatchTo",d(async(t,r)=>{var a;return y((a=this.mintable)==null?void 0:a.batch,Y).to.prepare(t,r)}));o(this,"burn",d(async t=>y(this.burnable,J).token.prepare(t)));o(this,"cancel",d(async t=>y(this.loyaltyCard,_).cancel.prepare(t)));o(this,"revoke",d(async t=>y(this.loyaltyCard,_).revoke.prepare(t)));o(this,"lazyMint",d(async(t,r)=>y(this.lazyMintable,G).lazyMint.prepare(t,r)));o(this,"updateMetadata",d(async(t,r)=>this.lazyMintable?this.lazyMintable.updateMetadata.prepare(t,r):y(this.updatableMetadata,H).update.prepare(t,r)));o(this,"claim",d(async(t,r)=>this.claimTo.prepare(await this.contractWrapper.getSignerAddress(),t,r)));o(this,"claimTo",d(async(t,r,a)=>{const n=this.claimWithConditions,e=this.claimCustom,s=this.claimZora;if(n)return n.to.prepare(t,r,a);if(e)return e.to.prepare(t,r,a);if(s)return s.to.prepare(t,r,a);throw new P(B)}));this.contractWrapper=t,this.storage=r,this.query=this.detectErc721Enumerable(),this.mintable=this.detectErc721Mintable(),this.burnable=this.detectErc721Burnable(),this.lazyMintable=this.detectErc721LazyMintable(),this.tieredDropable=this.detectErc721TieredDrop(),this.signatureMintable=this.detectErc721SignatureMintable(),this.claimWithConditions=this.detectErc721ClaimableWithConditions(),this.claimCustom=this.detectErc721Claimable(),this.claimZora=this.detectErc721ClaimableZora(),this.erc721SharedMetadata=this.detectErc721SharedMetadata(),this.loyaltyCard=this.detectErc721LoyaltyCard(),this.updatableMetadata=this.detectErc721UpdatableMetadata(),this._chainId=a}get chainId(){return this._chainId}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(t){const[r,a]=await Promise.all([this.ownerOf(t).catch(()=>R),this.getTokenMetadata(t).catch(()=>({id:t.toString(),uri:"",...Tt}))]);return{owner:r,metadata:a,type:"ERC721",supply:"1"}}async ownerOf(t){return await this.contractWrapper.read("ownerOf",[t])}async balanceOf(t){return await this.contractWrapper.read("balanceOf",[await f(t)])}async balance(){return await this.balanceOf(await this.contractWrapper.getSignerAddress())}async isApproved(t,r){const[a,n]=await Promise.all([f(t),f(r)]);return await this.contractWrapper.read("isApprovedForAll",[a,n])}async getAll(t){return y(this.query,k).all(t)}async getAllOwners(t){return y(this.query,k).allOwners(t)}async totalCount(){return this.nextTokenIdToMint()}async totalCirculatingSupply(){return y(this.query,k).totalCirculatingSupply()}async getOwned(t,r){var a;if(t&&(t=await f(t)),(a=this.query)!=null&&a.owned)return this.query.owned.all(t,r);{const[n,e]=await Promise.all([t||this.contractWrapper.getSignerAddress(),this.getAllOwners(r)]),s=(e||[]).filter(i=>{var c;return(n==null?void 0:n.toLowerCase())===((c=i.owner)==null?void 0:c.toLowerCase())});return await Promise.all(s.map(async i=>this.get(i.tokenId)))}}async getOwnedTokenIds(t){var r;if(t&&(t=await f(t)),(r=this.query)!=null&&r.owned)return this.query.owned.tokenIds(t);{const[a,n]=await Promise.all([t||this.contractWrapper.getSignerAddress(),this.getAllOwners()]);return(n||[]).filter(e=>{var s;return(a==null?void 0:a.toLowerCase())===((s=e.owner)==null?void 0:s.toLowerCase())}).map(e=>T.from(e.tokenId))}}async getMintTransaction(t,r){return this.mintTo.prepare(t,r)}async update(t,r){return this.updateMetadata(t,r)}async getClaimTransaction(t,r,a){const n=this.claimWithConditions,e=this.claimCustom;if(n)return n.conditions.getClaimTransaction(t,r,a);if(e)return e.getClaimTransaction(t,r,a);throw new P(B)}async totalClaimedSupply(){const t=this.contractWrapper;if(E("totalMinted",t))return this.contractWrapper.read("totalMinted",[]);if(E("nextTokenIdToClaim",t))return this.contractWrapper.read("nextTokenIdToClaim",[]);throw new Error("No function found on contract to get total claimed supply")}async totalUnclaimedSupply(){const[t,r]=await Promise.all([this.nextTokenIdToMint(),this.totalClaimedSupply()]);return t.sub(r)}get claimConditions(){return y(this.claimWithConditions,j).conditions}get tieredDrop(){return y(this.tieredDropable,K)}get signature(){return y(this.signatureMintable,X)}get revealer(){var t;return y((t=this.lazyMintable)==null?void 0:t.revealer,q)}get sharedMetadata(){return y(this.erc721SharedMetadata,tt)}async getTokenMetadata(t){const r=await this.contractWrapper.read("tokenURI",[t]);if(!r)throw new pt;return Ct(t,r,this.storage)}async nextTokenIdToMint(){if(E("nextTokenIdToMint",this.contractWrapper)){let t=await this.contractWrapper.read("nextTokenIdToMint",[]);return E("startTokenId",this.contractWrapper)&&(t=t.sub(await this.contractWrapper.read("startTokenId",[]))),t}else{if(E("totalSupply",this.contractWrapper))return await this.contractWrapper.read("totalSupply",[]);throw new Error("Contract requires either `nextTokenIdToMint` or `totalSupply` function available to determine the next token ID to mint")}}detectErc721Enumerable(){if(m(this.contractWrapper,"ERC721Supply")||E("nextTokenIdToMint",this.contractWrapper))return new $t(this,this.contractWrapper)}detectErc721Mintable(){if(m(this.contractWrapper,"ERC721Mintable"))return new Pt(this,this.contractWrapper,this.storage)}detectErc721Burnable(){if(m(this.contractWrapper,"ERC721Burnable"))return new Rt(this.contractWrapper)}detectErc721LazyMintable(){if(m(this.contractWrapper,"ERC721LazyMintable"))return new Bt(this,this.contractWrapper,this.storage)}detectErc721TieredDrop(){if(m(this.contractWrapper,"ERC721TieredDrop"))return new Jt(this,this.contractWrapper,this.storage)}detectErc721SignatureMintable(){if(m(this.contractWrapper,"ERC721SignatureMintV1")||m(this.contractWrapper,"ERC721SignatureMintV2"))return new Gt(this.contractWrapper,this.storage)}detectErc721ClaimableWithConditions(){if(m(this.contractWrapper,"ERC721ClaimConditionsV1")||m(this.contractWrapper,"ERC721ClaimConditionsV2")||m(this.contractWrapper,"ERC721ClaimPhasesV1")||m(this.contractWrapper,"ERC721ClaimPhasesV2"))return new Ft(this,this.contractWrapper,this.storage)}detectErc721Claimable(){if(m(this.contractWrapper,"ERC721ClaimCustom"))return new _t(this,this.contractWrapper)}detectErc721ClaimableZora(){if(m(this.contractWrapper,"ERC721ClaimZora"))return new Ut(this,this.contractWrapper)}detectErc721SharedMetadata(){if(m(this.contractWrapper,"ERC721SharedMetadata"))return new zt(this.contractWrapper,this.storage)}detectErc721LoyaltyCard(){if(m(this.contractWrapper,"ERC721LoyaltyCard"))return new xt(this.contractWrapper)}detectErc721UpdatableMetadata(){if(m(this.contractWrapper,"ERC721UpdatableMetadata"))return new Ot(this.contractWrapper,this.storage)}}export{nr as E,Gt as a};
