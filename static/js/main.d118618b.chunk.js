(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{69:function(e,t,n){},71:function(e){e.exports=JSON.parse('{"scenes":[{"id":"ball","camera":{"fov":50,"position":{"z":10}},"meshes":[{"name":"floor","geometry":{"type":"plane","parameters":{"width":5,"height":5,"widthSegments":32,"heightSegments":32}},"material":{"type":"standard","parameters":{"color":"#212529","opacity":0.1}},"position":[0,-2,0],"receiveShadow":true,"rotation":[-0.5,0,0]}]}]}')},80:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(28),i=n.n(c),r=n(34),o=n(12),s=n(65),l=n(43),h=n(14),d=(n(80),n(1)),j=function(e){var t=e.color,n=void 0===t?"#f8f9fa":t,a=e.height,c=void 0===a?"5rem":a,i=e.width,r=void 0===i?"5rem":i;return Object(d.jsxs)("svg",{style:{height:c,width:r},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 60 60",children:[Object(d.jsx)("circle",{cx:"30",cy:"10",r:"3",fill:n}),Object(d.jsx)("line",{x1:"30",x2:"15",y1:"10",y2:"30",stroke:n}),Object(d.jsx)("circle",{cx:"15",cy:"30",r:"3",fill:n}),Object(d.jsx)("line",{x1:"30",x2:"45",y1:"10",y2:"30",stroke:n}),Object(d.jsx)("circle",{cx:"45",cy:"30",r:"3",fill:n}),Object(d.jsx)("line",{x1:"15",x2:"5",y1:"30",y2:"50",stroke:n}),Object(d.jsx)("circle",{cx:"5",cy:"50",r:"3",fill:n}),Object(d.jsx)("line",{x1:"15",x2:"25",y1:"30",y2:"50",stroke:n}),Object(d.jsx)("circle",{cx:"25",cy:"50",r:"3",fill:n}),Object(d.jsx)("line",{x1:"45",x2:"35",y1:"30",y2:"50",stroke:n}),Object(d.jsx)("circle",{cx:"35",cy:"50",r:"3",fill:n}),Object(d.jsxs)("line",{x1:"45",x2:"55",y1:"30",y2:"50",stroke:n,children:[Object(d.jsx)("animate",{attributeName:"x2",values:"45;55;45",dur:"2s",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"y2",values:"30;50;30",dur:"2s",repeatCount:"indefinite"})]}),Object(d.jsxs)("circle",{cx:"75",cy:"50",r:"3",fill:n,children:[Object(d.jsx)("animate",{attributeName:"cx",values:"45;55;45",dur:"2s",repeatCount:"indefinite"}),Object(d.jsx)("animate",{attributeName:"cy",values:"30;50;30",dur:"2s",repeatCount:"indefinite"})]})]})},u=function(){return Object(d.jsxs)(l.a,{variant:"dark",expand:"md",collapseOnSelect:!0,children:[Object(d.jsxs)(l.a.Brand,{href:"/",className:"text-light",children:[Object(d.jsx)(j,{color:"#f8f9fa",height:"2rem",width:"2rem"}),Object(d.jsx)("span",{className:"font-weight-light mx-4",children:"Teodor's Portfolio"})]}),Object(d.jsx)(l.a.Toggle,{className:"mb-2","aria-controls":"basic-navbar-nav",style:{outline:"none"}}),Object(d.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsxs)(s.a,{defaultActiveKey:"/home",children:[Object(d.jsx)(s.a.Link,{className:"text-light small",href:"/#blog",children:"Blog"}),Object(d.jsx)(h.a,{className:"small",title:"Finance",id:"basic-nav-dropdown",children:Object(d.jsx)(h.a.Item,{className:"small",href:"https://www.purewacc.com",target:"_blank",children:"Pure WACC"})}),Object(d.jsxs)(h.a,{className:"small",title:"3D",id:"basic-navbar-nav",children:[Object(d.jsx)(h.a.Item,{className:"small",href:"/#three?scene=spheres",children:"Rotating Spheres"}),Object(d.jsx)(h.a.Item,{className:"small",href:"/#three?scene=boxes",children:"Random boxes"}),Object(d.jsx)(h.a.Item,{className:"small",href:"/#3D?id=ball",children:"Falling Ball"})]}),Object(d.jsxs)(h.a,{className:"small",title:"Graphics",id:"basic-navbar-nav",children:[Object(d.jsx)(h.a.Item,{className:"small",href:"/#mathematical-graphics/random-stars",children:"Stars"}),Object(d.jsx)(h.a.Item,{className:"small",href:"/#mathematical-graphics/shooting-stars",children:"Shooting Stars"}),Object(d.jsx)(h.a.Item,{className:"small",href:"/#mathematical-graphics/bezier-waves",children:"Bezier Waves"}),Object(d.jsx)(h.a.Item,{className:"small",href:"/#mathematical-graphics/random-web",children:"Web"}),Object(d.jsx)(h.a.Item,{className:"small",href:"/#mathematical-graphics/circular-animation",children:"Circle Animation"}),Object(d.jsx)(h.a.Item,{className:"small",href:"/#mathematical-graphics/sine-wave",children:"Sine Waves"})]}),Object(d.jsx)(h.a,{className:"small",title:"Productivity",id:"basic-navbar-nav",children:Object(d.jsx)(h.a.Item,{className:"small",href:"https://www.pureokrs.com",target:"_blank",children:"Pure OKRs"})}),Object(d.jsxs)(h.a,{className:"small",title:"Sports",id:"basic-navbar-nav",children:[Object(d.jsx)(h.a.Item,{className:"small",href:"https://www.backcountrybook.com",target:"_blank",children:"BackcountryBook"}),Object(d.jsx)(h.a.Item,{className:"small",href:"https://www.strava.com/athletes/10361672",target:"_blank",children:"My Strava Profile"})]})]})})]})},b=n(27),m=n(7),f=function(e){var t=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/t},x=function(e,t,n,a){if(e&&t&&n&&a){var c=f(t),i=getComputedStyle(e).getPropertyValue("width").slice(0,-2),r=getComputedStyle(e).getPropertyValue("height").slice(0,-2);e.width=+i*c,e.height=+r*c,e.style.width="".concat(n,"px"),e.style.height="".concat(a,"px")}else console.error("Could not set canvas style ratio")};function p(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function O(){var e=Object(a.useState)(p()),t=Object(m.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){function e(){c(p())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}var g,v,y,w,M,S=n(40),k=n.p+"static/media/moon.5e596c07.png",N=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=O(),c=n.width,i=n.height,r=Object(a.useState)([]),o=Object(m.a)(r,2),s=o[0],l=o[1];return Object(a.useEffect)((function(){var n=e.current,a=t.current,r=null===n||void 0===n?void 0:n.getContext("2d"),o=null===a||void 0===a?void 0:a.getContext("2d");if(n&&a){if(x(n,r,c,i),x(a,o,c,i),o){var s=o.createLinearGradient(0,a.height,a.width/8,0);s.addColorStop(0,"#444466"),s.addColorStop(1,"#212529"),o.fillStyle=s,o.fillRect(0,0,a.width,a.height)}l(new Array(1e3).fill(1).map((function(e){return[Math.random()*n.width,Math.random()*n.height,2*Math.random()*Math.PI]})))}}),[l,i,c]),Object(a.useEffect)((function(){if(e.current){var t=e.current,n=null===t||void 0===t?void 0:t.getContext("2d");if(n){n.fillStyle="#ffffff";var a,c,i=0;return function e(){if(n.clearRect(0,0,t.width,t.height),i+=.01,s.forEach((function(e){n.beginPath(),n.arc(e[0],e[1],e[2]*Math.abs(Math.cos(i+e[2]))*.2,0,2*Math.PI),n.fill()})),a%240===0){var r=Math.random()*t.width,o=Math.random()*t.height,l={x:2*Math.random()-1,y:Math.random()};c={x1:r,y1:o,x2:r,y2:o,direction:l}}else a%240<40&&c&&(c={x1:c.x1+c.direction.x,y1:c.y1+c.direction.y,x2:c.x2+4*c.direction.x,y2:c.y2+4*c.direction.y,direction:c.direction},function(e,t){var n=e.createLinearGradient(t.x1,t.y1,t.x2,t.y2);n.addColorStop(0,"#FCAF82"),n.addColorStop(1,"#A7D4FF"),e.strokeStyle=n,e.moveTo(t.x1,t.y1),e.lineTo(t.x2,t.y2),e.stroke(),e.beginPath(),e.arc(t.x2,t.y2,2,0,2*Math.PI),e.fillStyle="#A7D4FF",e.fill()}(n,c));a=requestAnimationFrame(e)}(),function(){cancelAnimationFrame(a)}}}}),[s,i,c]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(S.a,{src:k,style:{position:"absolute",top:0,right:0,height:"2rem",margin:"3rem"},onClick:function(){return window.alert("Please be respectful and leave the moon alone!")}}),Object(d.jsx)("canvas",{ref:t,className:"fixed-top",id:"bgCanvas",style:{zIndex:-2},width:c,height:i}),Object(d.jsx)("canvas",{ref:e,id:"myCanvas",className:"fixed-top",style:{zIndex:-1},width:c,height:i})]})},C=function(e){var t=e.date,n=e.title,a=e.content,c=e.picture,i=e.link,r=e.externalUrl,s=Object(o.f)();return Object(d.jsxs)("div",{className:"p-5 my-4",onClick:function(){return i?s.push(i):null},style:i?{cursor:"pointer",backgroundColor:"rgba(52, 58, 64, 0.4)"}:{backgroundColor:"rgba(52, 58, 64, 0.4)"},children:[n&&Object(d.jsx)("h5",{className:"text-light",children:n}),t&&Object(d.jsx)("p",{className:"text-muted",children:new Date(t).toLocaleString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"})}),c&&Object(d.jsx)("img",{src:c,className:"w-100 border-0 pb-4",alt:"apartment",loading:"eager"}),Object(d.jsx)("div",{className:"text-light",children:a.map((function(e,t){return Object(d.jsx)("p",{children:e},t)}))}),r&&Object(d.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",className:"small",children:r})]})},I=n.p+"static/media/518_62667910.29f88455.jpg",P=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(N,{}),Object(d.jsxs)(b.a,{children:[Object(d.jsxs)("div",{className:"bg-dark text-light rounded p-4 my-4",children:["I'm Teodor Nilseng Danielsen. A Norwegian software engineer and economist. Send me an"," ",Object(d.jsx)("a",{href:"mailto:teodor.nilseng@gmail.com",children:"email"})," if you're interested in one of my projects."]}),Object(d.jsx)(C,{date:"2021/04/14",title:"Github Pages",content:['Quite happy with being able to move this web page (a React single page application) to Github pages today. The site was previously hosted on a free dyno on Heroku.\n            A big drawback with free dynos on Heroku is that they don\'t allow serving with https when using a custom domain (like nilseng.com in my case). Another quite annoying thing\n            is the 30 second or so delay users have to wait if the dyno is "sleeping". \n            ',"While being able to host the page for free, with https, a custom domain (which is almost free at Namecheap.com) and no sleeping dynos, I have to say having\n            to use a HashRouter instead of a normal Router from react-router is a big minus (there may be a way around this, but in case it's real hard to find). In addition, the \n            docs where quite difficult to navigate. I should probably not be too surprised about a Microsoft company having Microsoft like docs though..\n            ","Anyways, farewell and thank you for your service free Heroku dynos, and welcome to my life Github Pages <3."]}),Object(d.jsx)(C,{date:"2020/10/25",title:"Basic physics + three.js",content:["Going back to school and the 3 equations of motion today to create a\n          rolling/falling ball animation with earth like gravity.","The ball is rendered\n          using three.js."],link:"/3D?id=ball"}),Object(d.jsx)(C,{date:"2020/10/25",title:"Apartment sold!",picture:I,content:["I'm selling my my cute 25 square meter apartment today."]}),Object(d.jsx)(C,{date:"2020/10/23",title:"Hello World!",content:["My very first blogpost."]})]})]})},F=n(25),R=n(4),B=n(71),A=n(53),E=n(16),T={plane:R.PlaneBufferGeometry,sphere:R.SphereBufferGeometry},z={standard:R.MeshStandardMaterial},D=function(e){var t,n=Object(A.a)(T[e.geometry.type],Object(E.a)(Object.values(e.geometry.parameters))),a=new z[e.material.type](e.material.parameters),c=new R.Mesh(n,a);e.position&&(t=c.position).set.apply(t,Object(E.a)(e.position));if(e.receiveShadow&&(c.receiveShadow=e.receiveShadow),e.rotation){var i,r=e.rotation.map((function(e){return e*Math.PI}));(i=c.rotation).set.apply(i,Object(E.a)(r))}return c},G=0,L=function e(){w&&(M=requestAnimationFrame(e),w.position.x+=.05,w.position.y+=w.position.y>=-1.5||w.position.x>2.5?G*(1/60)+-4.905*Math.pow(1/60,2):0,G=w.position.y>=-1.5||w.position.x>2.5?G-.1635:0,w.position.y<-4&&(w.position.y=4,w.position.x=-4,G=0)),g&&g.render(v,y)},W=function(){var e=function(){var e;return new URLSearchParams(null===(e=Object(o.g)())||void 0===e?void 0:e.search)}(),t=Object(a.useState)(),n=Object(m.a)(t,2),c=n[0],i=n[1];Object(a.useEffect)((function(){if(e){var t=e.get("id");t&&i(B.scenes.find((function(e){return e.id===t})))}}),[e]);var r=Object(a.useRef)(null);return Object(a.useEffect)((function(){return r&&c&&(!function(e,t){var n,a,c,i;if(t){if((y=new R.PerspectiveCamera(null===(n=t.camera)||void 0===n?void 0:n.fov,window.innerWidth/window.innerHeight)).position.z=null===(a=t.camera)||void 0===a||null===(c=a.position)||void 0===c?void 0:c.z,v=new R.Scene,t.meshes){var r,o=Object(F.a)(t.meshes);try{for(o.s();!(r=o.n()).done;){var s=r.value,l=D(s);v.add(l)}}catch(u){o.e(u)}finally{o.f()}}var h=new R.SphereBufferGeometry(.5,16,16),d=new R.MeshStandardMaterial({color:"#faf8f9"});(w=new R.Mesh(h,d)).castShadow=!0,w.position.set(-4,4,0),v.add(w);var j=new R.PointLight(16777215,2);j.position.set(-5,-10,20),j.castShadow=!0,v.add(j),j.shadow.mapSize.width=2e3,j.shadow.mapSize.height=2e3,j.shadow.camera.near=.5,j.shadow.camera.far=500,(g=new R.WebGLRenderer({antialias:!0,alpha:!0})).setClearColor(0,0),g.setSize(window.innerWidth,window.innerHeight),g.shadowMap.enabled=!0,g.shadowMap.type=R.PCFSoftShadowMap,g.render(v,y),null===(i=e.current)||void 0===i||i.appendChild(g.domElement)}}(r,c),L()),function(){return cancelAnimationFrame(M)}}),[r,c]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(N,{}),Object(d.jsx)("div",{ref:r,className:"h-100 w-100",style:{position:"absolute",top:0,left:0,zIndex:-1}})]})},H=n(42),Q=n.p+"static/media/pureokrs.5dc1eb44.png",_=n.p+"static/media/purewacc.481e41cb.png",q=n.p+"static/media/backcountrybook2.5ed4c532.png",J=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(N,{}),Object(d.jsx)(b.a,{className:"py-4",children:Object(d.jsxs)(H.a,{indicators:!1,interval:1e4,children:[Object(d.jsx)(H.a.Item,{children:Object(d.jsx)("a",{href:"https://www.backcountrybook.com",target:"__blank",style:{textDecoration:"none"},children:Object(d.jsx)(C,{content:["BackcountryBook - an application for exploring and sharing backcountry skiing experiences. Share routes and images. Explore mountains in 2D or 3D.","Built with React, Node.js, Express, MongoDB, AWS S3, Mapbox, Auth0 and more."],picture:q})})}),Object(d.jsx)(H.a.Item,{children:Object(d.jsx)("a",{href:"https://www.purewacc.com",target:"__blank",style:{textDecoration:"none"},children:Object(d.jsx)(C,{content:["Pure Weighted Average Cost of Capital - an application simplifying calculation and distribution of WACCs for multi market and multi industry projects.","Stack: React, Node.js, Express, MongoDB"],picture:_})})}),Object(d.jsx)(H.a.Item,{children:Object(d.jsx)("a",{href:"https://www.pureokrs.com",target:"__blank",style:{textDecoration:"none"},children:Object(d.jsx)(C,{content:["Pure Objectives and Key Result - a goal management application.","Stack: Angular, Node.js, Express, MongoDB"],picture:Q})})})]})})]})},V=function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e},K=n(9),U=n(22),X=function(e){var t=Object(a.useRef)(),n=Object(a.useState)(!1),c=Object(m.a)(n,2),i=c[0],r=c[1],o=Object(a.useState)(!1),s=Object(m.a)(o,2),l=s[0],h=s[1],j=Object(a.useState)(Math.random()),u=Object(m.a)(j,1)[0],b=Object(a.useState)(),f=Object(m.a)(b,2),x=f[0],p=f[1];return Object(a.useEffect)((function(){t.current&&p(Math.acos(t.current.position.x/Math.sqrt(Math.pow(t.current.position.x,2)+Math.pow(t.current.position.y,2)))*(Math.random()<.5?-1:1))}),[]),Object(U.d)((function(){t.current&&(x||0===x)&&(t.current.position.x=Math.cos(x),t.current.position.y=Math.sin(x),p(x+.01))})),Object(d.jsxs)("mesh",Object(K.a)(Object(K.a)({},e),{},{ref:t,scale:l?[1.5*u,1.5*u,1.5*u]:[u,u,u],onClick:function(e){return h(!l)},onPointerOver:function(e){return r(!0)},onPointerOut:function(e){return r(!1)},children:[Object(d.jsx)("boxBufferGeometry",{args:[1,1,1]}),Object(d.jsx)("meshStandardMaterial",{color:i?e.hoverColor:e.color})]}))},Y=function(){return Object(d.jsx)(d.Fragment,{children:new Array(100).fill(1).map((function(e,t){return Object(d.jsx)(X,{position:[8*Math.random()-4,8*Math.random()-4,8*Math.random()-4],color:V(),hoverColor:V()},t)}))})},Z=n(101),$=n(74),ee=function(){var e=Object(a.useRef)(),t=Object(a.useRef)();return Object(a.useEffect)((function(){e.current&&(e.current.rotateX(Math.PI/2),e.current.position.y=0,e.current.position.z=-5)}),[]),Object(a.useEffect)((function(){t.current&&(t.current.rotateX(Math.PI/2),t.current.position.y=2.4,t.current.position.z=-5)}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("mesh",{ref:e,children:[Object(d.jsx)("planeBufferGeometry",{args:[10,5]}),Object(d.jsx)("meshStandardMaterial",{color:"#f8f9fa",side:R.DoubleSide})]}),Object(d.jsxs)("mesh",{ref:t,children:[Object(d.jsx)("planeBufferGeometry",{args:[10,5]}),Object(d.jsx)("meshStandardMaterial",{color:"#f8f9fa",side:R.DoubleSide})]})]})},te=function(e){var t=Object(a.useRef)(),n=Object(a.useState)(!1),c=Object(m.a)(n,2),i=c[0],r=c[1],o=Object(a.useState)(.2),s=Object(m.a)(o,1)[0],l=Object(a.useState)(),h=Object(m.a)(l,2),j=h[0],u=h[1],b=Object(a.useState)(Math.random()>.5?1:-1),f=Object(m.a)(b,1)[0];return Object(a.useEffect)((function(){t.current&&(u(2*Math.PI*Math.random()),t.current.position.z=6*Math.random()-2)}),[]),Object(U.d)((function(){t.current&&(j||0===j)&&(t.current.position.x=Math.cos(j),t.current.position.y=Math.sin(j),u(j+.02*f))})),Object(d.jsxs)("mesh",Object(K.a)(Object(K.a)({},e),{},{ref:t,scale:i?[1.5*s,1.5*s,1.5*s]:[s,s,s],onClick:function(){return r(!i)},castShadow:!0,receiveShadow:!0,children:[Object(d.jsx)("sphereBufferGeometry",{args:[1,32,32]}),Object(d.jsx)("meshStandardMaterial",{color:e.color})]}))},ne=function(){return Object(d.jsx)(d.Fragment,{children:new Array(100).fill(1).map((function(e,t){return Object(d.jsx)(te,{color:"#f8f9fa"},t)}))})},ae={spheres:Object(d.jsx)(ne,{}),boxes:Object(d.jsx)(Y,{}),house:Object(d.jsx)(ee,{})};Object(U.c)({OrbitControls:$.a});var ce=function(e){var t=e.setFps,n=e.sceneContent,c=Object(U.e)(),i=c.camera,r=c.gl.domElement,o=Date.now(),s=Object(a.useMemo)((function(){return Object(Z.a)((function(e){return t(e.toFixed(0))}),60)}),[t]);return Object(U.d)((function(){var e=Date.now();s(1/((e-o)/1e3)),o=e})),Object(a.useEffect)((function(){return Object(U.b)((function(){return s(0)}))}),[s]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("orbitControls",{args:[i,r],keyPanSpeed:20}),Object(d.jsx)("ambientLight",{}),Object(d.jsx)("pointLight",{position:[5,5,10]}),n]})},ie=function(){var e=Object(a.useState)(),t=Object(m.a)(e,2),n=t[0],c=t[1],i=function(){var e;return new URLSearchParams(null===(e=Object(o.g)())||void 0===e?void 0:e.search)}();Object(a.useEffect)((function(){if(i){var e=i.get("scene");e&&c(ae[e])}return function(){return c(void 0)}}),[i]);var r=Object(a.useState)(),s=Object(m.a)(r,2),l=s[0],h=s[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"bg-light position-absolute rounded m-2 p-2",style:{width:"80px"},children:["FPS: ",l]}),Object(d.jsx)(U.a,{style:{width:"100%",height:"calc(100vh - 60px)"},children:n&&Object(d.jsx)(ce,{setFps:h,sceneContent:n})})]})},re=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=O(),c=n.width,i=n.height;return Object(a.useEffect)((function(){var n=e.current,a=t.current,r=null===n||void 0===n?void 0:n.getContext("2d"),o=null===a||void 0===a?void 0:a.getContext("2d");if(n&&a&&(x(n,r,c,i),x(a,o,c,i),o)){var s=o.createLinearGradient(0,a.height,a.width/8,0);s.addColorStop(0,"#444466"),s.addColorStop(1,"#212529"),o.fillStyle=s,o.fillRect(0,0,a.width,a.height)}}),[i,c]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("svg",{width:c,height:i,viewBox:"0 0 ".concat(c," ").concat(i),xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{stroke:"#0092bc",fill:"transparent",children:Object(d.jsx)("animate",{attributeName:"d",values:"M 0 ".concat(i/2," \n            Q ").concat(c/4," 0, ").concat(c/2," ").concat(i/2," \n            T ").concat(c," ").concat(i/2,";\n            M 0 ").concat(i/2," \n            Q ").concat(c/4," ").concat(i,", ").concat(c/2," ").concat(i/2," \n            T ").concat(c," ").concat(i/2,";\n            M 0 ").concat(i/2," \n            Q ").concat(c/4," 0, ").concat(c/2," ").concat(i/2," \n            T ").concat(c," ").concat(i/2),dur:"2s",repeatCount:"indefinite"})}),Object(d.jsx)("path",{stroke:"#4444bc",fill:"transparent",children:Object(d.jsx)("animate",{attributeName:"d",values:"\n            M 0 ".concat(i/2," \n            Q ").concat(c/4," ").concat(i,", ").concat(c/2," ").concat(i/2," \n            T ").concat(c," ").concat(i/2,";\n            M 0 ").concat(i/2," \n            Q ").concat(c/4," 0, ").concat(c/2," ").concat(i/2," \n            T ").concat(c," ").concat(i/2,";\n            M 0 ").concat(i/2," \n            Q ").concat(c/4," ").concat(i,", ").concat(c/2," ").concat(i/2," \n            T ").concat(c," ").concat(i/2),dur:"2s",repeatCount:"indefinite"})}),Object(d.jsx)("path",{stroke:"#2222bc",fill:"transparent",children:Object(d.jsx)("animate",{attributeName:"d",values:"\n            M 0 ".concat(i/2," \n            Q ").concat(c/8," 0, ").concat(c/2," ").concat(i/2," \n            T ").concat(c," ").concat(i/2,";\n            M 0 ").concat(i/2," \n            Q ").concat(3*c/8," 0, ").concat(c/2," ").concat(i/2," \n            T ").concat(c," ").concat(i/2,";\n            M 0 ").concat(i/2," \n            Q ").concat(c/8," 0, ").concat(c/2," ").concat(i/2," \n            T ").concat(c," ").concat(i/2),dur:"2s",repeatCount:"indefinite"})}),Object(d.jsx)("path",{stroke:"#444466",fill:"transparent",children:Object(d.jsx)("animate",{attributeName:"d",values:"\n            M 0 ".concat(i/2," \n            Q ").concat(c/8," ").concat(i,", ").concat(c/2," ").concat(i/2," \n            T ").concat(c," ").concat(i/2,";\n            M 0 ").concat(i/2," \n            Q ").concat(3*c/8," ").concat(i,", ").concat(c/2," ").concat(i/2," \n            T ").concat(c," ").concat(i/2,";\n            M 0 ").concat(i/2," \n            Q ").concat(c/8," ").concat(i,", ").concat(c/2," ").concat(i/2," \n            T ").concat(c," ").concat(i/2),dur:"2s",repeatCount:"indefinite"})})]}),Object(d.jsx)("canvas",{ref:t,className:"fixed-top",id:"bgCanvas",style:{zIndex:-2},width:c,height:i}),Object(d.jsx)("canvas",{ref:e,id:"myCanvas",className:"fixed-top",style:{zIndex:-1},width:c,height:i})]})},oe=function(){return Object(d.jsx)("svg",{className:"position-fixed vh-100 vw-100",viewBox:"0 0 100 100",style:{zIndex:-1},children:new Array(100).fill(1).map((function(e,t){var n=50+20*Math.sin(2*Math.PI*t/100),a=20+20*Math.cos(2*Math.PI*t/100);return Object(d.jsx)("g",{children:Object(d.jsx)("circle",{r:.1,cy:n,cx:50+a,fill:"#f8f9fa",children:Object(d.jsx)("animate",{attributeName:"cx",values:"\n              ".concat(50+a,";\n              ").concat(50-a,";\n              ").concat(50+a,"\n              "),dur:"2s",repeatCount:"indefinite"})})},t)}))})},se=function(){return Object(d.jsx)("svg",{className:"position-fixed vh-100 vw-100",viewBox:"0 0 100 100",style:{zIndex:-1},children:Object(d.jsx)("path",{d:"M ".concat(100*Math.random()," ").concat(100*Math.random()," H ").concat(100*Math.random()," V ").concat(100*Math.random()," H ").concat(100*Math.random()," L ").concat(100*Math.random()," ").concat(100*Math.random()),fill:"none",stroke:"#f8f9fa",strokeWidth:"0.05"})})},le=(n(69),function(){var e=Object(a.useRef)(null),t=O(),n=t.width,c=t.height,i=Object(a.useState)(!1),r=Object(m.a)(i,2),o=r[0],s=r[1];return Object(a.useEffect)((function(){if(e.current){var t=e.current,a=null===t||void 0===t?void 0:t.getContext("2d");if(a){var i,r=f(a),o=getComputedStyle(t).getPropertyValue("width").slice(0,-2),s=getComputedStyle(t).getPropertyValue("height").slice(0,-2);t.width=+o*r,t.height=+s*r,t.style.width="".concat(n,"px"),t.style.height="".concat(c,"px"),a.strokeStyle="#ffffff";return function e(){a.beginPath(),a.moveTo(Math.random()*t.width,Math.random()*t.height),a.lineTo(Math.random()*t.width,Math.random()*t.height),a.stroke(),i=requestAnimationFrame(e)}(),function(){cancelAnimationFrame(i)}}}}),[c,n]),Object(a.useEffect)((function(){setTimeout((function(){return s(!0)}),2e3)}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"fixed-top vw-100 vh-100 d-flex align-items-center justify-content-center",style:{zIndex:-1},children:Object(d.jsx)("h1",{className:"spin-2s delay-2s",style:{color:"red",visibility:o?"visible":"hidden"},children:"lol"})}),Object(d.jsx)("canvas",{ref:e,id:"myCanvas",className:"fixed-top",style:{zIndex:-2},width:n,height:c})]})}),he=function(){var e=O(),t=e.width,n=e.height;return Object(d.jsx)("svg",{className:"position-fixed vh-100 vw-100",viewBox:"0 0 ".concat(t," ").concat(n),style:{zIndex:-1},children:new Array(1e3).fill(1).map((function(e,a){return Object(d.jsxs)("g",{children:[Object(d.jsx)("circle",{r:1,cx:t*a/1e3,fill:"#f8f9fa",opacity:"50%",children:Object(d.jsx)("animate",{attributeName:"cy",values:"\n              ".concat(n/2*(Math.sin(2*Math.PI*a/1e3)+1),";\n              ").concat(n/2*(Math.sin(2*Math.PI*a/1e3+Math.PI)+1),";\n              ").concat(n/2*(Math.sin(2*Math.PI*a/1e3+2*Math.PI)+1)),dur:"4s",repeatCount:"indefinite"})}),Object(d.jsx)("circle",{r:1,cx:t*a/1e3,fill:"#f8f9fa",opacity:"50%",children:Object(d.jsx)("animate",{attributeName:"cy",values:"\n              ".concat(n/2*(Math.sin(2*Math.PI*a/1e3+Math.PI)+1),";\n              ").concat(n/2*(Math.sin(2*Math.PI*a/1e3+2*Math.PI)+1),";\n              ").concat(n/2*(Math.sin(2*Math.PI*a/1e3+Math.PI)+1)),dur:"8s",repeatCount:"indefinite"})}),Object(d.jsx)("circle",{r:1,cx:t*a/1e3,fill:"#f8f9fa",opacity:"50%",children:Object(d.jsx)("animate",{attributeName:"cy",values:"\n              ".concat(n/2*(Math.sin(2*Math.PI*a/1e3+Math.PI/2)+1),";\n              ").concat(n/2*(Math.sin(2*Math.PI*a/1e3+3*Math.PI/2)+1),";\n              ").concat(n/2*(Math.sin(2*Math.PI*a/1e3+Math.PI/2)+1)),dur:"16s",repeatCount:"indefinite"})})]},a)}))})},de=function(){var e=O(),t=e.width,n=e.height;return Object(d.jsx)("svg",{className:"fixed-top vw-100 vh-100",viewBox:"0 0 ".concat(t," ").concat(n),style:{zIndex:-1},children:new Array(1e3).fill(1).map((function(e,a){return Object(d.jsx)("circle",{cx:t*Math.random(),cy:n*Math.random(),fill:"#f8f9fa",children:Object(d.jsx)("animate",{attributeName:"r",values:"0;".concat(1.2*Math.random(),";0"),begin:"".concat(Math.random(),"s"),dur:"".concat(2+4*Math.random(),"s"),repeatCount:"indefinite"})},a)}))})},je=function(e){var t=e.match;return Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"".concat(t.url,"/random-stars"),component:de}),Object(d.jsx)(o.a,{path:"".concat(t.url,"/sine-wave"),component:he}),Object(d.jsx)(o.a,{path:"".concat(t.url,"/circular-animation"),component:oe}),Object(d.jsx)(o.a,{path:"".concat(t.url,"/random-paths"),component:se}),Object(d.jsx)(o.a,{path:"".concat(t.url,"/shooting-stars"),component:N}),Object(d.jsx)(o.a,{path:"".concat(t.url,"/random-web"),component:le}),Object(d.jsx)(o.a,{path:"".concat(t.url,"/bezier-waves"),component:re})]})},ue=n(29),be=n.p+"static/media/muttern.610864f1.jpeg",me=n.p+"static/media/romsdalseggen.1de48101.jpg",fe=function(){var e=Object(a.useState)(!1),t=Object(m.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),r=Object(m.a)(i,2),o=r[0],s=r[1],l=Object(a.useState)(),h=Object(m.a)(l,2),j=h[0],u=h[1];Object(a.useEffect)((function(){setInterval(f,500)}),[]);var f=function(){var e=Math.floor(16777215*Math.random()).toString(16);u("#"+e)};return Object(d.jsxs)(b.a,{className:"text-light w-100 py-5",children:[Object(d.jsx)("h3",{children:"Gratulerer med dagen!"}),Object(d.jsx)("p",{children:"Hvem har bursdag sier du?"}),Object(d.jsx)(ue.a,{onClick:function(){c(!0)},children:"Trykk her!"}),n&&Object(d.jsxs)("div",{children:[Object(d.jsx)(S.a,{src:be,className:"spin-2s mw-100 w-sm-60 py-4"}),Object(d.jsx)("p",{children:"Det er mamma som har bursdag. Jeeeeee!:D"})]}),n&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{children:"Hva er gaven fra Kaja, Oda og Teodor sier du?"}),Object(d.jsx)(ue.a,{onClick:function(){s(!0)},children:"Trykk her!"}),o&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{style:{color:j},children:"TUR!!!"}),Object(d.jsx)("div",{children:Object(d.jsx)(S.a,{src:me,className:"scale-2s mw-100 w-sm-60 py-4"})}),"Vi setter av 10.-12. september og foresl\xe5r Romsdalseggen! Blir den for t\xf8ff, finnes det andre muligheter i omr\xe5det. Vi har booket overnatting p\xe5"," ",Object(d.jsx)("a",{href:"https://www.heinali.no/index.html",children:"Hein\xe5li-hytta"}),". Gratulerer til"," ",Object(d.jsx)("span",{className:"spin-2s delay-2s",style:{color:j,display:"inline-block"},children:"KARI NILSENG"})]})]})]})},xe=n(76),pe=n.n(xe),Oe=function(){var e=Object(a.useState)("off"),t=Object(m.a)(e,2),n=t[0],c=t[1],i=Object(o.f)();return Object(d.jsxs)(b.a,{className:"text-light py-4",children:[Object(d.jsx)("p",{children:JSON.stringify(pe()(navigator.userAgent))}),Object(d.jsx)("p",{children:JSON.stringify(i)}),Object(d.jsx)("p",{children:JSON.stringify(localStorage)}),Object(d.jsx)("p",{children:document.referrer}),"off"===n&&Object(d.jsx)(ue.a,{onClick:function(){c("on"),document.designMode="on"},children:"Edit page"}),"on"===n&&Object(d.jsx)(ue.a,{variant:"secondary",onClick:function(){c("off"),document.designMode="off"},children:"Stop editing"})]})},ge=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(r.a,{children:[Object(d.jsx)(u,{}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/",exact:!0,component:J}),Object(d.jsx)(o.a,{path:"/blog",component:P}),Object(d.jsx)(o.a,{path:"/3D",component:W}),Object(d.jsx)(o.a,{path:"/boxes",component:Y}),Object(d.jsx)(o.a,{path:"/three",component:ie}),Object(d.jsx)(o.a,{path:"/mathematical-graphics",component:je}),Object(d.jsx)(o.a,{path:"/birthday",component:fe}),Object(d.jsx)(o.a,{path:"/user-info",component:Oe})]})]})})},ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,102)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};n(93),n(94);i.a.render(Object(d.jsx)(ge,{}),document.getElementById("root")),ve(console.log)}},[[95,1,2]]]);
//# sourceMappingURL=main.d118618b.chunk.js.map