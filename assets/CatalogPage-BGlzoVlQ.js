import{u as h,r as t,a as x,b as f,j as e,f as b}from"./index-B7FYjMjm.js";import{s as L,A as v}from"./AdvertList-DULN2zsx.js";const j=h.button`
  display: flex;
  margin-top: 50px;
  margin-right: auto;
  margin-left: auto;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #101828;
  background-color: transparent;
  border: 1px solid rgba(71, 84, 103, 0.2);
  border-radius: 200px;
  transition: 250ms border-color linear;

  &:hover {
    border-color: #e44848;
  }
`,S=()=>{const[a,i]=t.useState([]),[c,d]=t.useState(!0),[s,l]=t.useState(1),g=x(L),o=f();t.useEffect(()=>{(async()=>{const m=new URLSearchParams({page:s,limit:4}),n=await o(b(m)).unwrap();n.length<4&&d(!1),i(u=>[...u,...n])})()},[o,s]);const p=()=>{l(r=>r+1)};return e.jsxs(e.Fragment,{children:[a.length>0&&e.jsx(v,{adverts:a}),c&&e.jsx(j,{onClick:p,children:g?"Loading...":"Load more"})]})};export{S as default};
