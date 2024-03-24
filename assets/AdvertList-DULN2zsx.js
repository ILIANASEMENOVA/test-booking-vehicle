import{u as t,r as g,j as e,a as K,b as Y,c as J,d as Q}from"./index-B7FYjMjm.js";const U=n=>n.adverts.favorites,mt=n=>n.adverts.isLoading,X=t.li`
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 24px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;
`,Z=t.img`
  width: 290px;
  height: 310px;
  object-fit: cover;
  border-radius: 10px;
`,ee=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
`,te=t.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`,ne=t.div`
  display: flex;
  justify-content: space-between;
`,ie=t.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: #101828;
`,oe=t.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,se=t.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: #101828;
`,re=t.button`
  width: 24px;
  height: 24px;
  padding: 0px;
  background: transparent;
  border: 0px;
`,ae=t.svg`
  width: 24px;
  height: 24px;

  stroke: ${n=>n["data-is-favorite"]?"#e44848":"#101828"};
  fill: ${n=>n["data-is-favorite"]?"#e44848":"none"};
`,ce=t.div`
  display: flex;
  gap: 16px;
`,le=t.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #101828;
`,de=t.svg`
  width: 16px;
  height: 16px;
  stroke: #ffc531;
  fill: #ffc531;
`,pe=t.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #101828;
`,xe=t.svg`
  width: 16px;
  height: 16px;
  stroke: #101828;
  fill: transparent;
`,he=t.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #475467;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
`,fe=t.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,ge=t.li`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  padding: 12px 18px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  text-transform: capitalize;
  color: #101828;
  background: #f2f4f7;
  mix-blend-mode: multiply;
`,ue=t.svg`
  width: 20px;
  height: 20px;
  stroke: #101828;
  fill: transparent;
`,me=t.button`
  padding: 16px 40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #fff;
  background-color: #e44848;
  border-radius: 200px;
  border: 0px;
  transition: 250ms background-color linear;

  &:hover {
    background-color: #d84343;
  }
`,l="/test-booking-vehicle/assets/sprite-790B8vgi.svg",be=()=>{const[n,s]=g.useState(!1);return g.useEffect(()=>{document.body.style.overflow=n?"hidden":"unset"},[n]),{isOpen:n,toggleModal:()=>{s(i=>!i)}}},je=t.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 18, 19, 0.4);
  overflow: auto;
`,we=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 982px;
  max-height: 90%;
  padding: 40px;
  background-color: #fff;
  border-radius: 20px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    margin-top: 14px;
    margin-bottom: 14px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background: #d9d9d9;
  }
`,ve=t.button`
  position: absolute;
  top: 40px;
  right: 40px;
  z-index: 1;
  width: 32px;
  height: 32px;
  padding: 0;
  background-color: transparent;
  border: none;
`,ye=t.svg`
  width: 32px;
  height: 32px;
  stroke: #101828;
`,ke=({onClose:n,children:s})=>{g.useEffect(()=>{const i=r=>{r.code==="Escape"&&n()};return window.addEventListener("keydown",i),()=>{window.removeEventListener("keydown",i)}},[n]);const o=i=>{i.target===i.currentTarget&&n()};return e.jsx(je,{onClick:o,children:e.jsxs(we,{children:[e.jsx(ve,{type:"button",onClick:n,children:e.jsx(ye,{children:e.jsx("use",{href:l+"#icon-close"})})}),s]})})},Ie=t.h3`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: #101828;
`,ze=t.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`,Fe=t.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: #101828;
`,Le=t.svg`
  width: 16px;
  height: 16px;
  stroke: #ffc531;
  fill: #ffc531;
`,$e=t.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #101828;
`,De=t.svg`
  width: 16px;
  height: 16px;
  stroke: #101828;
  fill: transparent;
`,Re=t.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: #101828;
`,Se=t.img`
  width: 290px;
  height: 310px;
  object-fit: cover;
  border-radius: 10px;
`,Ce=t.ul`
  display: flex;
  gap: 16px;
  margin-top: 24px;
  margin-bottom: 24px;
`,Ee=t.p`
  margin-bottom: 44px;
  max-height: 120px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #475467;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background: #d9d9d9;
  }
`,Oe=t.div`
  margin-bottom: 44px;
  display: flex;
  gap: 40px;
  border-bottom: 1px solid rgba(16, 24, 40, 0.2);
`,O=t.p`
  padding-bottom: 24px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: #101828;
  cursor: pointer;
  border-bottom: ${n=>n["data-is-active"]?"5px solid #e44848":"none"};
`,Be=t.div`
  display: flex;
  gap: 24px;
`,B=t.div`
  flex: 1;
`,Me=t.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 44px;
`,Ae=t.li`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 100px;
  padding: 12px 18px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  text-transform: capitalize;
  color: #101828;
  background: #f2f4f7;
  mix-blend-mode: multiply;
`,Te=t.svg`
  width: 20px;
  height: 20px;
  stroke: #101828;
  fill: transparent;
`,We=t.p`
  padding-bottom: 24px;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: #101828;
  border-bottom: 1px solid rgba(16, 24, 40, 0.1);
`,_e=t.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,qe=t.li`
  display: flex;
  justify-content: space-between;
`,Ne=t.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  text-align: center;
  color: #101828;
  text-transform: capitalize;
`,Pe=t.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  text-align: center;
  color: #101828;
`,He=t.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,Ve=t.li`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,Ge=t.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,Ke=t.p`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  width: 60px;
  height: 60px;
  background: #f2f4f7;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: #e44848;
`,Ye=t.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Je=t.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.33333;
  color: #101828;
`,Qe=t.ul`
  display: flex;
  gap: 4px;
`,Ue=t.svg`
  width: 16px;
  height: 16px;
  /* stroke: #ffc531;
  fill: #ffc531; */
  stroke: ${n=>n["data-is-actual"]?"#ffc531":"#f2f4f7"};
  fill: ${n=>n["data-is-actual"]?"#ffc531":"#f2f4f7"};
`,Xe=t.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #475467;
`,Ze=t.div`
  flex: 1;
`,M=n=>n.split(", ").reverse().join(", "),et=n=>{const s=Object.entries(n),o=[];for(const i of s){const[r,c]=i;typeof c=="number"&&c>0&&o.push({[r]:c})}return o},A=n=>n.map(s=>{const[o,i]=Object.entries(s)[0];return i===1?o:`${i} ${o}`}),T=(n,s,o,i)=>[`${s} adults`,o,i].concat(n),W=n=>["adults","transmission","engine"].concat(n.map(s=>Object.keys(s)[0])),tt=t.div`
  width: 448px;
  padding: 24px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
`,nt=t.p`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: #101828;
`,it=t.p`
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #475467;
`,ot=t.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`,st=t.input`
  border-radius: 10px;
  padding: 18px;
  background: #f7f7f7;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #101828;
  border: none;

  &::placeholder {
    color: rgba(16, 24, 40, 0.6);
  }
`,rt=t.input`
  border-radius: 10px;
  padding: 18px;
  background: #f7f7f7;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #101828;
  border: none;

  &::placeholder {
    color: rgba(16, 24, 40, 0.6);
  }
`,at=t.input`
  border-radius: 10px;
  padding: 18px;
  background: #f7f7f7;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #101828;
  border: none;

  &::placeholder {
    color: rgba(16, 24, 40, 0.6);
  }
`,ct=t.textarea`
  border-radius: 10px;
  padding: 18px;
  height: 114px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: #101828;
  border: none;
  background: #f7f7f7;

  &::placeholder {
    color: rgba(16, 24, 40, 0.6);
  }
`,lt=t.button`
  margin-top: 10px;
  align-self: start;
  padding: 16px 60px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #fff;
  background-color: #e44848;
  border-radius: 200px;
  border: 0px;
  transition: 250ms background-color linear;

  &:hover {
    background-color: #d84343;
  }
`,dt=()=>{let n=new Date,s=n.getFullYear(),o=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0");return`${s}-${o}-${i}`},pt=()=>e.jsxs(tt,{children:[e.jsx(nt,{children:"Book your campervan now"}),e.jsx(it,{children:"Stay connected! We are always ready to help you."}),e.jsxs(ot,{children:[e.jsx(st,{type:"text",placeholder:"Name",name:"name",required:!0}),e.jsx(rt,{type:"email",placeholder:"Email",name:"email",required:!0}),e.jsx(at,{type:"date",placeholder:"Booking date",name:"booking_date",min:dt(),required:!0}),e.jsx(ct,{name:"comment",placeholder:"Comment"}),e.jsx(lt,{type:"submit",children:"Send"})]})]}),xt=({onClose:n,advert:s})=>{const{name:o,price:i,rating:r,location:c,adults:p,engine:d,transmission:x,description:f,details:z,gallery:F,reviews:u,form:L,length:$,width:D,height:m,tank:R,consumption:b}=s,[j,w]=g.useState(!0),[v,y]=g.useState(!1),k=()=>{y(!1),w(!0)},S=()=>{y(!0),w(!1)},C=et(z),_=A(C),q=T(_,p,x,d),N=W(C),P=M(c),H=[{form:L},{length:$},{width:D},{height:m},{tank:R},{consumption:b}],E=[];H.forEach(a=>E.push(...Object.entries(a)));const V=a=>{const h=[],G=Math.round(a);for(let I=1;I<=5;I++)h.push(e.jsx("li",{children:e.jsx(Ue,{"data-is-actual":G>=I,children:e.jsx("use",{href:l+"#icon-star"})})},I));return h};return e.jsxs(ke,{onClose:n,children:[e.jsx(Ie,{children:o}),e.jsxs(ze,{children:[e.jsxs(Fe,{children:[e.jsx(Le,{children:e.jsx("use",{href:l+"#icon-star"})}),r," (",u.length," Reviews)"]}),e.jsxs($e,{children:[e.jsx(De,{children:e.jsx("use",{href:l+"#icon-location"})}),P]})]}),e.jsxs(Re,{children:["€",i.toFixed(2)]}),e.jsx(Ce,{children:F.map(a=>e.jsx("li",{children:e.jsx(Se,{src:a,alt:o})},a))}),e.jsx(Ee,{children:f}),e.jsxs(Oe,{children:[e.jsx(O,{onClick:k,"data-is-active":j,children:"Features"}),e.jsx(O,{onClick:S,"data-is-active":v,children:"Reviews"})]}),e.jsxs(Be,{children:[j&&e.jsxs(B,{children:[e.jsx(Me,{children:q.map((a,h)=>e.jsxs(Ae,{children:[e.jsx(Te,{children:e.jsx("use",{href:l+`#icon-${N[h]}`})}),a]},a))}),e.jsx(We,{children:"Vehicle details"}),e.jsx(_e,{children:E.map(a=>e.jsxs(qe,{children:[e.jsx(Ne,{children:a[0]}),e.jsx(Pe,{children:a[1]})]},a[0]))})]}),v&&e.jsx(B,{children:e.jsx(He,{children:u.map((a,h)=>e.jsxs(Ve,{children:[e.jsxs(Ge,{children:[e.jsx(Ke,{children:a.reviewer_name[0]}),e.jsxs(Ye,{children:[e.jsx(Je,{children:a.reviewer_name}),e.jsx(Qe,{children:V(a.reviewer_rating)})]})]}),e.jsxs(Xe,{children:[" ",a.comment]})]},h))})}),e.jsx(Ze,{children:e.jsx(pt,{})})]})]})},ht=(n,s)=>{const o=Object.entries(n),i=[];let r=0;for(;r<s;){const c=Math.floor(Math.random()*o.length),[p,d]=o[c],x=[];i.forEach(f=>x.push(...Object.keys(f))),!x.includes(p)&&typeof d=="number"&&d>0&&(i.push({[p]:d}),r++)}return i},ft=({advert:n,isFavorite:s,onAddFavorite:o,onRemoveFavorite:i})=>{const{name:r,price:c,rating:p,location:d,adults:x,engine:f,transmission:z,description:F,details:u,gallery:L,reviews:$}=n,{isOpen:D,toggleModal:m}=be(),R=()=>{if(s)return i();o()},b=ht(u,3),j=A(b),w=T(j,x,z,f),v=W(b),y=M(d);return e.jsxs(X,{children:[e.jsx(Z,{src:L[0],alt:r}),e.jsxs(ee,{children:[e.jsxs(te,{children:[e.jsxs(ne,{children:[e.jsx(ie,{children:r}),e.jsxs(oe,{children:[e.jsxs(se,{children:["€",c.toFixed(2)]}),e.jsx(re,{type:"button",onClick:R,children:e.jsx(ae,{"data-is-favorite":s,children:e.jsx("use",{href:l+"#icon-heart"})})})]})]}),e.jsxs(ce,{children:[e.jsxs(le,{children:[e.jsx(de,{children:e.jsx("use",{href:l+"#icon-star"})}),p," (",$.length," Reviews)"]}),e.jsxs(pe,{children:[e.jsx(xe,{children:e.jsx("use",{href:l+"#icon-location"})}),y]})]})]}),e.jsx(he,{children:F}),e.jsx(fe,{children:w.map((k,S)=>e.jsxs(ge,{children:[e.jsx(ue,{children:e.jsx("use",{href:l+`#icon-${v[S]}`})}),k]},k))}),e.jsx(me,{type:"button",onClick:m,children:"Show more"}),D&&e.jsx(xt,{onClose:m,advert:n})]})]})},gt=t.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
`,bt=({adverts:n})=>{const s=K(U),o=Y(),i=r=>s.some(c=>(c==null?void 0:c._id)===r);return e.jsx(gt,{children:n.map(r=>e.jsx(ft,{advert:r,isFavorite:i(r._id),onAddFavorite:()=>o(J(r)),onRemoveFavorite:()=>o(Q(r._id))},r._id))})};export{bt as A,U as a,mt as s};
