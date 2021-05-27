(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{70:function(e){e.exports=JSON.parse('{"scenes":[{"id":"ball","camera":{"fov":50,"position":{"z":10}},"meshes":[{"name":"floor","geometry":{"type":"plane","parameters":{"width":5,"height":5,"widthSegments":32,"heightSegments":32}},"material":{"type":"standard","parameters":{"color":"#212529","opacity":0.1}},"position":[0,-2,0],"receiveShadow":true,"rotation":[-0.5,0,0]}]}]}')},78:function(e,t,a){},91:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(27),i=a.n(c),r=a(33),o=a(12),s=a(65),l=a(42),h=a(14),d=(a(78),a(1)),j=function(e){var t=e.color,a=void 0===t?"#f8f9fa":t,n=e.height,c=void 0===n?"5rem":n,i=e.width,r=void 0===i?"5rem":i;return Object(d.jsxs)("svg",{style:{height:c,width:r},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 60 60",children:[Object(d.jsx)("circle",{cx:"30",cy:"10",r:"3",fill:a}),Object(d.jsx)("line",{x1:"30",x2:"15",y1:"10",y2:"30",stroke:a}),Object(d.jsx)("circle",{cx:"15",cy:"30",r:"3",fill:a}),Object(d.jsx)("line",{x1:"30",x2:"45",y1:"10",y2:"30",stroke:a}),Object(d.jsx)("circle",{cx:"45",cy:"30",r:"3",fill:a}),Object(d.jsx)("line",{x1:"15",x2:"5",y1:"30",y2:"50",stroke:a}),Object(d.jsx)("circle",{cx:"5",cy:"50",r:"3",fill:a}),Object(d.jsx)("line",{x1:"15",x2:"25",y1:"30",y2:"50",stroke:a}),Object(d.jsx)("circle",{cx:"25",cy:"50",r:"3",fill:a}),Object(d.jsx)("line",{x1:"45",x2:"35",y1:"30",y2:"50",stroke:a}),Object(d.jsx)("circle",{cx:"35",cy:"50",r:"3",fill:a}),Object(d.jsxs)("line",{x1:"45",x2:"55",y1:"30",y2:"50",stroke:a,children:[Object(d.jsx)("animate",{attributeName:"x2",values:"45;55;45",dur:"2s",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"y2",values:"30;50;30",dur:"2s",repeatCount:"indefinite"})]}),Object(d.jsxs)("circle",{cx:"75",cy:"50",r:"3",fill:a,children:[Object(d.jsx)("animate",{attributeName:"cx",values:"45;55;45",dur:"2s",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"cy",values:"30;50;30",dur:"2s",repeatCount:"indefinite"})]})]})},u=function(){return Object(d.jsxs)(l.a,{variant:"dark",expand:"md",collapseOnSelect:!0,children:[Object(d.jsxs)(l.a.Brand,{href:"/",className:"text-light",children:[Object(d.jsx)(j,{color:"#f8f9fa",height:"2rem",width:"2rem"}),Object(d.jsx)("span",{className:"font-weight-light mx-4",children:"Teodor's Portfolio"})]}),Object(d.jsx)(l.a.Toggle,{className:"mb-2","aria-controls":"basic-navbar-nav",style:{outline:"none"}}),Object(d.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsxs)(s.a,{defaultActiveKey:"/home",children:[Object(d.jsx)(s.a.Link,{className:"text-light small",href:"/#blog",children:"Blog"}),Object(d.jsx)(h.a,{className:"small",title:"Finance",id:"basic-nav-dropdown",children:Object(d.jsx)(h.a.Item,{className:"small",href:"https://www.purewacc.com",target:"_blank",children:"Pure WACC"})}),Object(d.jsxs)(h.a,{className:"small",title:"3D",id:"basic-navbar-nav",children:[Object(d.jsx)(h.a.Item,{className:"small",href:"/#three?scene=spheres",children:"Rotating Spheres"}),Object(d.jsx)(h.a.Item,{className:"small",href:"/#three?scene=boxes",children:"Random boxes"}),Object(d.jsx)(h.a.Item,{className:"small",href:"/#3D?id=ball",children:"Falling Ball"})]}),Object(d.jsxs)(h.a,{className:"small",title:"Graphics",id:"basic-navbar-nav",children:[Object(d.jsx)(h.a.Item,{className:"small",href:"/#mathematical-graphics/random-stars",children:"Stars"}),Object(d.jsx)(h.a.Item,{className:"small",href:"/#mathematical-graphics/shooting-stars",children:"Shooting Stars"}),Object(d.jsx)(h.a.Item,{className:"small",href:"/#mathematical-graphics/random-web",children:"Web"}),Object(d.jsx)(h.a.Item,{className:"small",href:"/#mathematical-graphics/circular-animation",children:"Circle Animation"}),Object(d.jsx)(h.a.Item,{className:"small",href:"/#mathematical-graphics/sine-wave",children:"Sine Waves"}),Object(d.jsx)(h.a.Item,{className:"small",href:"/#mathematical-graphics/sine-cosine-animation",children:"Sine Cosine Animation"})]}),Object(d.jsx)(h.a,{className:"small",title:"Productivity",id:"basic-navbar-nav",children:Object(d.jsx)(h.a.Item,{className:"small",href:"https://www.pureokrs.com",target:"_blank",children:"Pure OKRs"})}),Object(d.jsxs)(h.a,{className:"small",title:"Sports",id:"basic-navbar-nav",children:[Object(d.jsx)(h.a.Item,{className:"small",href:"https://www.backcountrybook.com",target:"_blank",children:"BackcountryBook"}),Object(d.jsx)(h.a.Item,{className:"small",href:"https://www.strava.com/athletes/10361672",target:"_blank",children:"My Strava Profile"})]})]})})]})},m=a(35),b=a(8);function f(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function x(){var e=Object(n.useState)(f()),t=Object(b.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){c(f())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}var p,O,g,y,v,w=function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e},M=function(e){var t=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/t},S=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null),a=x(),c=a.width,i=a.height,r=Object(n.useState)([]),o=Object(b.a)(r,2),s=o[0],l=o[1];return Object(n.useEffect)((function(){var a=e.current,n=t.current,r=null===a||void 0===a?void 0:a.getContext("2d"),o=null===n||void 0===n?void 0:n.getContext("2d");if(a&&n){var s=M(r),h=getComputedStyle(a).getPropertyValue("width").slice(0,-2),d=getComputedStyle(a).getPropertyValue("height").slice(0,-2);if(a.width=+h*s,a.height=+d*s,a.style.width="".concat(c,"px"),a.style.height="".concat(i,"px"),n.width=+h*s,n.height=+d*s,n.style.width="".concat(c,"px"),n.style.height="".concat(i,"px"),o){var j=o.createLinearGradient(0,n.height,n.width/8,0);j.addColorStop(0,"rgba(88,88,124,0.5)"),j.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=j,o.fillRect(0,0,n.width,n.height)}l(new Array(1e3).fill(1).map((function(e){return[Math.random()*a.width,Math.random()*a.height,2*Math.random()*Math.PI]})))}}),[l,i,c]),Object(n.useEffect)((function(){if(e.current){var t=e.current,a=null===t||void 0===t?void 0:t.getContext("2d");if(a){a.fillStyle="#ffffff";var n,c,i=0;return function e(){if(a.clearRect(0,0,t.width,t.height),i+=.01,s.forEach((function(e){a.beginPath(),a.arc(e[0],e[1],e[2]*Math.abs(Math.cos(i+e[2]))*.2,0,2*Math.PI),a.fill()})),n%60===0){var r=Math.random()*t.width,o=Math.random()*t.height,l={x:2*Math.random()-1,y:2*Math.random()-1};c={x1:r,y1:o,x2:r,y2:o,direction:l}}else c&&(c={x1:c.x1+c.direction.x,y1:c.y1+c.direction.y,x2:c.x2+4*c.direction.x,y2:c.y2+4*c.direction.y,direction:c.direction},function(e,t){var a=e.createLinearGradient(t.x1,t.y1,t.x2,t.y2);a.addColorStop(0,"#FCAF82"),a.addColorStop(1,"#A7D4FF"),e.strokeStyle=a,e.moveTo(t.x1,t.y1),e.lineTo(t.x2,t.y2),e.stroke(),e.beginPath(),e.arc(t.x2,t.y2,2,0,2*Math.PI),e.fillStyle="#A7D4FF",e.fill()}(a,c));n=requestAnimationFrame(e)}(),function(){cancelAnimationFrame(n)}}}}),[s,i,c]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("canvas",{ref:t,className:"fixed-top",id:"bgCanvas",style:{zIndex:-2},width:c,height:i}),Object(d.jsx)("canvas",{ref:e,id:"myCanvas",className:"fixed-top",style:{zIndex:-1},width:c,height:i})]})},k=function(e){var t=e.date,a=e.title,n=e.content,c=e.picture,i=e.link,r=e.externalUrl,s=Object(o.f)();return Object(d.jsxs)("div",{className:"bg-dark rounded p-4 my-4",onClick:function(){return i?s.push(i):null},style:i?{cursor:"pointer"}:{},children:[Object(d.jsx)("h5",{className:"text-light",children:a}),t&&Object(d.jsx)("p",{className:"text-muted",children:new Date(t).toLocaleString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"})}),c&&Object(d.jsx)("img",{src:c,className:"w-100 border-0",alt:"apartment",loading:"eager"}),Object(d.jsx)("div",{className:"text-light",children:n.map((function(e,t){return Object(d.jsx)("p",{children:e},t)}))}),r&&Object(d.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",className:"small",children:r})]})},N=a.p+"static/media/518_62667910.29f88455.jpg",P=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(S,{}),Object(d.jsxs)(m.a,{children:[Object(d.jsxs)("div",{className:"bg-dark text-light rounded p-4 my-4",children:["I'm Teodor Nilseng Danielsen. A Norwegian software engineer and economist. Send me an"," ",Object(d.jsx)("a",{href:"mailto:teodor.nilseng@gmail.com",children:"email"})," if you're interested in one of my projects."]}),Object(d.jsx)(k,{date:"2021/04/14",title:"Github Pages",content:['Quite happy with being able to move this web page (a React single page application) to Github pages today. The site was previously hosted on a free dyno on Heroku.\n            A big drawback with free dynos on Heroku is that they don\'t allow serving with https when using a custom domain (like nilseng.com in my case). Another quite annoying thing\n            is the 30 second or so delay users have to wait if the dyno is "sleeping". \n            ',"While being able to host the page for free, with https, a custom domain (which is almost free at Namecheap.com) and no sleeping dynos, I have to say having\n            to use a HashRouter instead of a normal Router from react-router is a big minus (there may be a way around this, but in case it's real hard to find). In addition, the \n            docs where quite difficult to navigate. I should probably not be too surprised about a Microsoft company having Microsoft like docs though..\n            ","Anyways, farewell and thank you for your service free Heroku dynos, and welcome to my life Github Pages <3."]}),Object(d.jsx)(k,{date:"2020/10/25",title:"Basic physics + three.js",content:["Going back to school and the 3 equations of motion today to create a\n          rolling/falling ball animation with earth like gravity.","The ball is rendered\n          using three.js."],link:"/3D?id=ball"}),Object(d.jsx)(k,{date:"2020/10/25",title:"Apartment sold!",picture:N,content:["I'm selling my my cute 25 square meter apartment today."]}),Object(d.jsx)(k,{date:"2020/10/23",title:"Hello World!",content:["My very first blogpost."]})]})]})},I=a(25),C=a(4),F=a(70),B=a(52),R=a(16),A={plane:C.PlaneBufferGeometry,sphere:C.SphereBufferGeometry},E={standard:C.MeshStandardMaterial},D=function(e){var t,a=Object(B.a)(A[e.geometry.type],Object(R.a)(Object.values(e.geometry.parameters))),n=new E[e.material.type](e.material.parameters),c=new C.Mesh(a,n);e.position&&(t=c.position).set.apply(t,Object(R.a)(e.position));if(e.receiveShadow&&(c.receiveShadow=e.receiveShadow),e.rotation){var i,r=e.rotation.map((function(e){return e*Math.PI}));(i=c.rotation).set.apply(i,Object(R.a)(r))}return c},z=0,G=function e(){y&&(v=requestAnimationFrame(e),y.position.x+=.05,y.position.y+=y.position.y>=-1.5||y.position.x>2.5?z*(1/60)+-4.905*Math.pow(1/60,2):0,z=y.position.y>=-1.5||y.position.x>2.5?z-.1635:0,y.position.y<-4&&(y.position.y=4,y.position.x=-4,z=0)),p&&p.render(O,g)},L=function(){var e=function(){var e;return new URLSearchParams(null===(e=Object(o.g)())||void 0===e?void 0:e.search)}(),t=Object(n.useState)(),a=Object(b.a)(t,2),c=a[0],i=a[1];Object(n.useEffect)((function(){if(e){var t=e.get("id");t&&i(F.scenes.find((function(e){return e.id===t})))}}),[e]);var r=Object(n.useRef)(null);return Object(n.useEffect)((function(){return r&&c&&(!function(e,t){var a,n,c,i;if(t){if((g=new C.PerspectiveCamera(null===(a=t.camera)||void 0===a?void 0:a.fov,window.innerWidth/window.innerHeight)).position.z=null===(n=t.camera)||void 0===n||null===(c=n.position)||void 0===c?void 0:c.z,O=new C.Scene,t.meshes){var r,o=Object(I.a)(t.meshes);try{for(o.s();!(r=o.n()).done;){var s=r.value,l=D(s);O.add(l)}}catch(u){o.e(u)}finally{o.f()}}var h=new C.SphereBufferGeometry(.5,16,16),d=new C.MeshStandardMaterial({color:"#faf8f9"});(y=new C.Mesh(h,d)).castShadow=!0,y.position.set(-4,4,0),O.add(y);var j=new C.PointLight(16777215,2);j.position.set(-5,-10,20),j.castShadow=!0,O.add(j),j.shadow.mapSize.width=2e3,j.shadow.mapSize.height=2e3,j.shadow.camera.near=.5,j.shadow.camera.far=500,(p=new C.WebGLRenderer({antialias:!0,alpha:!0})).setClearColor(0,0),p.setSize(window.innerWidth,window.innerHeight),p.shadowMap.enabled=!0,p.shadowMap.type=C.PCFSoftShadowMap,p.render(O,g),null===(i=e.current)||void 0===i||i.appendChild(p.domElement)}}(r,c),G()),function(){return cancelAnimationFrame(v)}}),[r,c]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(S,{}),Object(d.jsx)("div",{ref:r,className:"h-100 w-100",style:{position:"absolute",top:0,left:0,zIndex:-1}})]})},T=a(41),W=a.p+"static/media/pureokrs.5dc1eb44.png",H=a.p+"static/media/purewacc.481e41cb.png",_=a.p+"static/media/backcountrybook.01af885d.png",q=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(S,{}),Object(d.jsx)(m.a,{className:"py-4",children:Object(d.jsxs)(T.a,{indicators:!1,interval:1e4,children:[Object(d.jsx)(T.a.Item,{children:Object(d.jsx)("a",{href:"https://www.backcountrybook.com",target:"__blank",style:{textDecoration:"none"},children:Object(d.jsx)(k,{title:"BackcountryBook.com",content:["BackcountryBook - an application for exploring and sharing backcountry skiing experiences. Share routes and images. Explore mountains in 2D or 3D.","Stack: React, Node.js, Express, MongoDB, AWS S3"],picture:_})})}),Object(d.jsx)(T.a.Item,{children:Object(d.jsx)("a",{href:"https://www.purewacc.com",target:"__blank",style:{textDecoration:"none"},children:Object(d.jsx)(k,{title:"PureWACC.com",content:["Pure Weighted Average Cost of Capital - an application simplifying calculation and distribution of WACCs for multi market and multi industry projects.","Stack: React, Node.js, Express, MongoDB"],picture:H})})}),Object(d.jsx)(T.a.Item,{children:Object(d.jsx)("a",{href:"https://www.pureokrs.com",target:"__blank",style:{textDecoration:"none"},children:Object(d.jsx)(k,{title:"PureOKRs.com",content:["Pure Objectives and Key Result - a goal management application.","Stack: Angular, Node.js, Express, MongoDB"],picture:W})})})]})})]})},V=a(9),K=a(22),J=function(e){var t=Object(n.useRef)(),a=Object(n.useState)(!1),c=Object(b.a)(a,2),i=c[0],r=c[1],o=Object(n.useState)(!1),s=Object(b.a)(o,2),l=s[0],h=s[1],j=Object(n.useState)(Math.random()),u=Object(b.a)(j,1)[0],m=Object(n.useState)(),f=Object(b.a)(m,2),x=f[0],p=f[1];return Object(n.useEffect)((function(){t.current&&p(Math.acos(t.current.position.x/Math.sqrt(Math.pow(t.current.position.x,2)+Math.pow(t.current.position.y,2)))*(Math.random()<.5?-1:1))}),[]),Object(K.d)((function(){t.current&&(x||0===x)&&(t.current.position.x=Math.cos(x),t.current.position.y=Math.sin(x),p(x+.01))})),Object(d.jsxs)("mesh",Object(V.a)(Object(V.a)({},e),{},{ref:t,scale:l?[1.5*u,1.5*u,1.5*u]:[u,u,u],onClick:function(e){return h(!l)},onPointerOver:function(e){return r(!0)},onPointerOut:function(e){return r(!1)},children:[Object(d.jsx)("boxBufferGeometry",{args:[1,1,1]}),Object(d.jsx)("meshStandardMaterial",{color:i?e.hoverColor:e.color})]}))},U=function(){return Object(d.jsx)(d.Fragment,{children:new Array(100).fill(1).map((function(e,t){return Object(d.jsx)(J,{position:[8*Math.random()-4,8*Math.random()-4,8*Math.random()-4],color:w(),hoverColor:w()},t)}))})},X=a(100),Q=a(73),Y=function(){var e=Object(n.useRef)(),t=Object(n.useRef)();return Object(n.useEffect)((function(){e.current&&(e.current.rotateX(Math.PI/2),e.current.position.y=0,e.current.position.z=-5)}),[]),Object(n.useEffect)((function(){t.current&&(t.current.rotateX(Math.PI/2),t.current.position.y=2.4,t.current.position.z=-5)}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("mesh",{ref:e,children:[Object(d.jsx)("planeBufferGeometry",{args:[10,5]}),Object(d.jsx)("meshStandardMaterial",{color:"#f8f9fa",side:C.DoubleSide})]}),Object(d.jsxs)("mesh",{ref:t,children:[Object(d.jsx)("planeBufferGeometry",{args:[10,5]}),Object(d.jsx)("meshStandardMaterial",{color:"#f8f9fa",side:C.DoubleSide})]})]})},Z=function(e){var t=Object(n.useRef)(),a=Object(n.useState)(!1),c=Object(b.a)(a,2),i=c[0],r=c[1],o=Object(n.useState)(.2),s=Object(b.a)(o,1)[0],l=Object(n.useState)(),h=Object(b.a)(l,2),j=h[0],u=h[1],m=Object(n.useState)(Math.random()>.5?1:-1),f=Object(b.a)(m,1)[0];return Object(n.useEffect)((function(){t.current&&(u(2*Math.PI*Math.random()),t.current.position.z=6*Math.random()-2)}),[]),Object(K.d)((function(){t.current&&(j||0===j)&&(t.current.position.x=Math.cos(j),t.current.position.y=Math.sin(j),u(j+.02*f))})),Object(d.jsxs)("mesh",Object(V.a)(Object(V.a)({},e),{},{ref:t,scale:i?[1.5*s,1.5*s,1.5*s]:[s,s,s],onClick:function(){return r(!i)},castShadow:!0,receiveShadow:!0,children:[Object(d.jsx)("sphereBufferGeometry",{args:[1,32,32]}),Object(d.jsx)("meshStandardMaterial",{color:e.color})]}))},$=function(){return Object(d.jsx)(d.Fragment,{children:new Array(100).fill(1).map((function(e,t){return Object(d.jsx)(Z,{color:"#f8f9fa"},t)}))})},ee={spheres:Object(d.jsx)($,{}),boxes:Object(d.jsx)(U,{}),house:Object(d.jsx)(Y,{})};Object(K.c)({OrbitControls:Q.a});var te=function(e){var t=e.setFps,a=e.sceneContent,c=Object(K.e)(),i=c.camera,r=c.gl.domElement,o=Date.now(),s=Object(n.useMemo)((function(){return Object(X.a)((function(e){return t(e.toFixed(0))}),60)}),[t]);return Object(K.d)((function(){var e=Date.now();s(1/((e-o)/1e3)),o=e})),Object(n.useEffect)((function(){return Object(K.b)((function(){return s(0)}))}),[s]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("orbitControls",{args:[i,r],keyPanSpeed:20}),Object(d.jsx)("ambientLight",{}),Object(d.jsx)("pointLight",{position:[5,5,10]}),a]})},ae=function(){var e=Object(n.useState)(),t=Object(b.a)(e,2),a=t[0],c=t[1],i=function(){var e;return new URLSearchParams(null===(e=Object(o.g)())||void 0===e?void 0:e.search)}();Object(n.useEffect)((function(){if(i){var e=i.get("scene");e&&c(ee[e])}return function(){return c(void 0)}}),[i]);var r=Object(n.useState)(),s=Object(b.a)(r,2),l=s[0],h=s[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"bg-light position-absolute rounded m-2 p-2",style:{width:"80px"},children:["FPS: ",l]}),Object(d.jsx)(K.a,{style:{width:"100%",height:"calc(100vh - 60px)"},children:a&&Object(d.jsx)(te,{setFps:h,sceneContent:a})})]})},ne=function(){return Object(d.jsx)("svg",{className:"position-fixed vh-100 vw-100",viewBox:"0 0 100 100",style:{zIndex:-1},children:new Array(100).fill(1).map((function(e,t){var a=50+20*Math.sin(2*Math.PI*t/100),n=20+20*Math.cos(2*Math.PI*t/100);return Object(d.jsx)("g",{children:Object(d.jsx)("circle",{r:.1,cy:a,cx:50+n,fill:"#f8f9fa",children:Object(d.jsx)("animate",{attributeName:"cx",values:"\n              ".concat(50+n,";\n              ").concat(50-n,";\n              ").concat(50+n,"\n              "),dur:"2s",repeatCount:"indefinite"})})},t)}))})},ce=function(){return Object(d.jsx)("svg",{className:"position-fixed vh-100 vw-100",viewBox:"0 0 100 100",style:{zIndex:-1},children:Object(d.jsx)("path",{d:"M ".concat(100*Math.random()," ").concat(100*Math.random()," H ").concat(100*Math.random()," V ").concat(100*Math.random()," H ").concat(100*Math.random()," L ").concat(100*Math.random()," ").concat(100*Math.random()),fill:"none",stroke:"#f8f9fa",strokeWidth:"0.05"})})},ie=function(){var e=Object(n.useRef)(null),t=x(),a=t.width,c=t.height;return Object(n.useEffect)((function(){if(e.current){var t=e.current,n=null===t||void 0===t?void 0:t.getContext("2d");if(n){var i,r=M(n),o=getComputedStyle(t).getPropertyValue("width").slice(0,-2),s=getComputedStyle(t).getPropertyValue("height").slice(0,-2);t.width=+o*r,t.height=+s*r,t.style.width="".concat(a,"px"),t.style.height="".concat(c,"px"),n.strokeStyle="#ffffff";return function e(){n.beginPath(),n.moveTo(Math.random()*t.width,Math.random()*t.height),n.lineTo(Math.random()*t.width,Math.random()*t.height),n.stroke(),i=requestAnimationFrame(e)}(),function(){cancelAnimationFrame(i)}}}})),Object(d.jsx)("canvas",{ref:e,id:"myCanvas",className:"fixed-top",style:{zIndex:-1},width:a,height:c})},re=function(){return Object(d.jsx)("svg",{className:"position-fixed min-vh-100",viewBox:"0 0 100 100",style:{zIndex:-1},children:new Array(2e3).fill(1).map((function(e,t){return Object(d.jsxs)("g",{children:[Object(d.jsx)("circle",{cx:t/20,cy:t/20*(Math.sin(t)+1)/2,fill:"#f8f9fa",opacity:"50%",children:Object(d.jsx)("animate",{attributeName:"r",values:"".concat(.05+1e-4*t),begin:"".concat(.001*t,"s")})}),Object(d.jsx)("circle",{cx:(2e3-t)/20,cy:t/20*(Math.cos(t)+1)/2,fill:"#f8f9fa",opacity:"50%",children:Object(d.jsx)("animate",{attributeName:"r",values:"".concat(.05+1e-4*t),begin:"".concat(2+.001*t,"s")})})]},t)}))})},oe=function(){return Object(d.jsx)("svg",{className:"position-fixed vh-100 vw-100",viewBox:"0 0 100 100",style:{zIndex:-1},children:new Array(1e3).fill(1).map((function(e,t){return Object(d.jsxs)("g",{children:[Object(d.jsx)("circle",{r:.1,cx:t/10,fill:"#f8f9fa",opacity:"50%",children:Object(d.jsx)("animate",{attributeName:"cy",values:"\n              ".concat(50*(Math.sin(2*Math.PI*t/1e3)+1),";\n              ").concat(50*(Math.sin(2*Math.PI*t/1e3+Math.PI)+1),";\n              ").concat(50*(Math.sin(2*Math.PI*t/1e3+2*Math.PI)+1)),dur:"4s",repeatCount:"indefinite"})}),Object(d.jsx)("circle",{r:.1,cx:t/10,fill:"#f8f9fa",opacity:"50%",children:Object(d.jsx)("animate",{attributeName:"cy",values:"\n              ".concat(50*(Math.sin(2*Math.PI*t/1e3+Math.PI)+1),";\n              ").concat(50*(Math.sin(2*Math.PI*t/1e3+2*Math.PI)+1),";\n              ").concat(50*(Math.sin(2*Math.PI*t/1e3+Math.PI)+1)),dur:"8s",repeatCount:"indefinite"})}),Object(d.jsx)("circle",{r:.1,cx:t/10,fill:"#f8f9fa",opacity:"50%",children:Object(d.jsx)("animate",{attributeName:"cy",values:"\n              ".concat(50*(Math.sin(2*Math.PI*t/1e3+Math.PI/2)+1),";\n              ").concat(50*(Math.sin(2*Math.PI*t/1e3+3*Math.PI/2)+1),";\n              ").concat(50*(Math.sin(2*Math.PI*t/1e3+Math.PI/2)+1)),dur:"16s",repeatCount:"indefinite"})})]},t)}))})},se=function(){var e=x(),t=e.width,a=e.height;return Object(d.jsx)("svg",{className:"fixed-top vw-100 vh-100",viewBox:"0 0 ".concat(t," ").concat(a),style:{zIndex:-1},children:new Array(1e3).fill(1).map((function(e,n){return Object(d.jsx)("circle",{cx:t*Math.random(),cy:a*Math.random(),fill:"#f8f9fa",children:Object(d.jsx)("animate",{attributeName:"r",values:"0;".concat(1.2*Math.random(),";0"),begin:"".concat(Math.random(),"s"),dur:"".concat(2+4*Math.random(),"s"),repeatCount:"indefinite"})},n)}))})},le=function(e){var t=e.match;return Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"".concat(t.url,"/random-stars"),component:se}),Object(d.jsx)(o.a,{path:"".concat(t.url,"/sine-cosine-animation"),component:re}),Object(d.jsx)(o.a,{path:"".concat(t.url,"/sine-wave"),component:oe}),Object(d.jsx)(o.a,{path:"".concat(t.url,"/circular-animation"),component:ne}),Object(d.jsx)(o.a,{path:"".concat(t.url,"/random-paths"),component:ce}),Object(d.jsx)(o.a,{path:"".concat(t.url,"/shooting-stars"),component:S}),Object(d.jsx)(o.a,{path:"".concat(t.url,"/random-web"),component:ie})]})},he=a(64),de=a(38),je=a.p+"static/media/muttern.610864f1.jpeg",ue=a.p+"static/media/romsdalseggen.1de48101.jpg",me=(a(91),function(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!1),r=Object(b.a)(i,2),o=r[0],s=r[1],l=Object(n.useState)(),h=Object(b.a)(l,2),j=h[0],u=h[1];Object(n.useEffect)((function(){setInterval(f,500)}),[]);var f=function(){var e=Math.floor(16777215*Math.random()).toString(16);u("#"+e)};return Object(d.jsxs)(m.a,{className:"text-light w-100 py-5",children:[Object(d.jsx)("h3",{children:"Gratulerer med dagen!"}),Object(d.jsx)("p",{children:"Hvem har bursdag sier du?"}),Object(d.jsx)(de.a,{onClick:function(){c(!0)},children:"Trykk her!"}),a&&Object(d.jsxs)("div",{children:[Object(d.jsx)(he.a,{src:je,className:"spin-2s mw-100 w-sm-60 py-4"}),Object(d.jsx)("p",{children:"Det er mamma som har bursdag. Jeeeeee!:D"})]}),a&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{children:"Hva er gaven fra Kaja, Oda og Teodor sier du?"}),Object(d.jsx)(de.a,{onClick:function(){s(!0)},children:"Trykk her!"}),o&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{style:{color:j},children:"TUR!!!"}),Object(d.jsx)("div",{children:Object(d.jsx)(he.a,{src:ue,className:"scale-2s mw-100 w-sm-60 py-4"})}),"Vi setter av 10.-12. september og foresl\xe5r Romsdalseggen! Blir den for t\xf8ff, finnes det andre muligheter i omr\xe5det. Vi har booket overnatting p\xe5"," ",Object(d.jsx)("a",{href:"https://www.heinali.no/index.html",children:"Hein\xe5li-hytta"}),". Gratulerer til"," ",Object(d.jsx)("span",{className:"spin-2s delay-2s",style:{color:j,display:"inline-block"},children:"KARI NILSENG"})]})]})]})}),be=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(r.a,{children:[Object(d.jsx)(u,{}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/",exact:!0,component:q}),Object(d.jsx)(o.a,{path:"/blog",component:P}),Object(d.jsx)(o.a,{path:"/3D",component:L}),Object(d.jsx)(o.a,{path:"/boxes",component:U}),Object(d.jsx)(o.a,{path:"/three",component:ae}),Object(d.jsx)(o.a,{path:"/mathematical-graphics",component:le}),Object(d.jsx)(o.a,{path:"/birthday",component:me})]})]})})},fe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,101)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};a(92),a(93);i.a.render(Object(d.jsx)(be,{}),document.getElementById("root")),fe(console.log)}},[[94,1,2]]]);
//# sourceMappingURL=main.f30c2e85.chunk.js.map