import{u as o,L as t,j as e}from"./index-B7FYjMjm.js";const r="/test-booking-vehicle/assets/hero-DXh4xXYG.jpg",n=o.section`
  margin-bottom: 40px;
`,i=o.h1`
  margin-bottom: 20px;
  text-align: center;
  font-size: 2em;
`,a=o.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 400px;
  padding-left: 40px;
  padding-right: 40px;

  background: url(${r});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 14px;
`,c=o.h2`
  margin-bottom: 20px;
  text-align: center;
  padding: 10px;

  color: #808080;

  border-radius: 14px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(30px);
`,s=o(t)`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;

  font-weight: 600;
  text-align: center;
  color: #fff;

  text-decoration: none;
  border-radius: 14px;
  background-color: #e44848;

  transition: 250ms background-color linear;

  &:hover {
    background-color: #d84343;
  }
`,l=()=>e.jsxs(n,{children:[e.jsx(i,{children:"Welcome to our campervan agency"}),e.jsx(a,{}),e.jsx(c,{children:"We provide a wide selection of campervan for rent. Find the perfect car for your travel."}),e.jsx(s,{to:"/catalog",children:"Let's go"})]});export{l as default};
