import{T as e,S as t,a as o,B as n,b as i,P as a,c as s,d as r,e as d,W as c,C as l,f as w}from"./vendor.7a890ad7.js";new fullpage("#fullpage",{scrollHorizontally:!0,navigation:!0,anchors:["home","projects","about","contact"],navigationTooltips:["home","projects","about","contact"],showActiveTooltip:!0,sectionsColor:["#ed944d","#88EFE2","#ED944C","#29BA7F"],responsiveWidth:1e3,slidesNavigation:!0}),document.addEventListener("DOMContentLoaded",(function(e){window.addEventListener("load",(function(){const e=CSSRulePlugin.getRule(".hero-text:before"),t=document.querySelector("#name-h1"),o=document.querySelector("#title-h2"),n=document.querySelector(".static-social-icons"),i=document.querySelector(".side-email-link"),a=gsap.timeline();a.from(e,{delay:.5,duration:4,cssRule:{scaleX:0}}),a.to(t,{duration:2,clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",y:"40px"},"-=3"),a.to(o,{duration:2,clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",y:"40px"},"-=2"),a.to(n,{duration:2,clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)"},"-=2"),a.to(i,{duration:2,clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)"},"-=2")}),!1)}));(new e).load("./assets/particle.png");const h=document.querySelector("#bg"),p=new t,u=new o(.7,.2,16,100),g=new n,m=new Float32Array(21e4);for(let M=0;M<21e4;M++)m[M]=(Math.random()-.5)*(7*Math.random());g.setAttribute("position",new i(m,3));const y=new a({size:.01,color:"grey"}),v=new a({size:.002,transparent:!0,color:"grey"}),x=new s(u,y),P=new s(g,v);p.add(x,P);const z=new r(16777215,.1);z.position.x=2,z.position.y=3,z.position.z=4,p.add(z);const S={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",(()=>{S.width=window.innerWidth,S.height=window.innerHeight,f.aspect=S.width/S.height,f.updateProjectionMatrix(),E.setSize(S.width,S.height),E.setPixelRatio(Math.min(window.devicePixelRatio,2))}));const f=new d(75,S.width/S.height,.1,100);f.position.x=0,f.position.y=0,f.position.z=2,p.add(f);const E=new c({canvas:h});E.setSize(S.width,S.height),E.setPixelRatio(Math.min(window.devicePixelRatio,2)),E.setClearColor(new l("#ed944d"),1);document.addEventListener("mousemove",(e=>{R=e.clientY,C=e.clientX}));let C=0,R=0;const b=new w,q=()=>{const e=b.getElapsedTime();x.rotation.y=.5*e,x.rotation.x=.5*e,x.rotation.z=.5*e,P.rotation.y=.05*e,P.rotation.x=-.01*e,P.rotation.z=-.07*e,C>0&&(P.rotation.x=8e-6*e*-R,P.rotation.y=8e-6*e*-C),E.render(p,f),window.requestAnimationFrame(q)};q();
