"use strict";(self.webpackChunkshoppingcart_react=self.webpackChunkshoppingcart_react||[]).push([[924],{924:(e,s,a)=>{a.r(s),a.d(s,{Shop:()=>d});var l=a(43),t=a(816),r=a(216),c=a(710),o=a(579);const n=(0,l.memo)((e=>{let{data:s}=e;const{id:a,productName:t,price:n,productImage:i}=s,d=(0,l.useContext)(c.Q),p=(0,r.Zp)();if(!d)return null;const{addToCart:u,cartItems:h}=d,x=h[a];return(0,o.jsxs)("div",{className:"product",onClick:()=>{p(`/product/${a}`)},children:[(0,o.jsx)("img",{src:i,loading:"lazy",alt:t}),(0,o.jsxs)("div",{className:"description",children:[(0,o.jsx)("p",{children:(0,o.jsx)("b",{children:t})}),(0,o.jsxs)("p",{children:["$",n]})]}),(0,o.jsxs)("button",{className:"addToCartBttn",onClick:e=>{e.stopPropagation(),u(a)},children:["Add To Cart ",x>0&&`(${x})`]})]})}));n.displayName="Product";const i=e=>{let{onSearch:s,onFilterPrice:a,onFilterCategory:t}=e;const[r,c]=(0,l.useState)(""),[n,i]=(0,l.useState)("all"),[d,p]=(0,l.useState)("all"),u=(0,l.useCallback)((e=>{const a=e.target.value;c(a),s(a)}),[s]),h=(0,l.useCallback)((e=>{const s=e.target.value;i(s),a(s)}),[a]),x=(0,l.useCallback)((e=>{const s=e.target.value;p(s),t(s)}),[t]);return(0,o.jsxs)("div",{className:"search-container",children:[(0,o.jsx)("div",{className:"search-input",children:(0,o.jsx)("input",{type:"text",placeholder:"Search products...",value:r,onChange:u})}),(0,o.jsxs)("div",{className:"filters",children:[(0,o.jsxs)("select",{value:n,onChange:h,children:[(0,o.jsx)("option",{value:"all",children:"All Prices"}),(0,o.jsx)("option",{value:"0-500",children:"$0 - $500"}),(0,o.jsx)("option",{value:"501-1000",children:"$501 - $1000"}),(0,o.jsx)("option",{value:"1001+",children:"$1001 and above"})]}),(0,o.jsxs)("select",{value:d,onChange:x,children:[(0,o.jsx)("option",{value:"all",children:"All Categories"}),(0,o.jsx)("option",{value:"phones",children:"Phones"}),(0,o.jsx)("option",{value:"laptops",children:"Laptops"}),(0,o.jsx)("option",{value:"gaming",children:"Gaming"}),(0,o.jsx)("option",{value:"accessories",children:"Accessories"}),(0,o.jsx)("option",{value:"cameras",children:"Cameras"}),(0,o.jsx)("option",{value:"tvs",children:"TVs"}),(0,o.jsx)("option",{value:"wearables",children:"Wearables"})]})]})]})},d=()=>{const[e,s]=(0,l.useState)(""),[a,r]=(0,l.useState)("all"),[c,d]=(0,l.useState)("all"),p=(0,l.useMemo)((()=>t.z.filter((s=>{const l=s.productName.toLowerCase().includes(e.toLowerCase());let t=!0;if("all"!==a)if("1001+"===a)t=s.price>=1001;else{const[e,l]=a.split("-").map(Number);t=s.price>=e&&s.price<=l}let r=!0;if("all"!==c){const e={phones:"phone",laptops:"laptop",gaming:"gaming",accessories:"accessories",cameras:"camera",tvs:"tv",wearables:"wearable"};r=s.category===e[c]}return l&&t&&r}))),[e,a,c]);return(0,o.jsxs)("div",{className:"shop",children:[(0,o.jsx)("div",{className:"shopTitle",children:(0,o.jsx)("h1",{children:"Tech Shop"})}),(0,o.jsx)(i,{onSearch:s,onFilterPrice:r,onFilterCategory:d}),(0,o.jsx)("div",{className:"products",children:p.map((e=>(0,o.jsx)(n,{data:e},e.id)))}),0===p.length&&(0,o.jsx)("div",{className:"no-results",children:"No products found matching your criteria"})]})}}}]);
//# sourceMappingURL=924.65ff2a4e.chunk.js.map