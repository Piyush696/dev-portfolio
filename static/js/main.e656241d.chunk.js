(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,function(e,a,t){e.exports=t.p+"static/media/react.9e188349.svg"},,,,function(e,a,t){e.exports=t.p+"static/media/github.2c472603.svg"},,,function(e,a,t){e.exports=t.p+"static/media/computer.16d20bbc.svg"},,,,,function(e,a,t){e.exports=t.p+"static/media/facebook.f9de737f.svg"},function(e,a,t){e.exports=t.p+"static/media/instagram.bb5903db.svg"},function(e,a,t){e.exports=t.p+"static/media/pin.9aa92c21.svg"},function(e,a,t){e.exports=t.p+"static/media/tie.d8c6f553.svg"},function(e,a,t){e.exports=t.p+"static/media/mightycoder.a13311a3.svg"},function(e,a,t){e.exports=t.p+"static/media/piyushDutta.5ef83eb9.pdf"},,,function(e,a,t){e.exports=t.p+"static/media/api.406f6ef2.svg"},function(e,a,t){e.exports=t.p+"static/media/algo.12786bc7.svg"},function(e,a,t){e.exports=t.p+"static/media/repair.37257631.svg"},function(e,a,t){e.exports=t.p+"static/media/puzzle.cdfaf911.svg"},function(e,a,t){e.exports=t.p+"static/media/python.e2905a88.svg"},function(e,a,t){e.exports=t.p+"static/media/tweetme.2185e423.PNG"},function(e,a,t){e.exports=t.p+"static/media/chatapp.6b5433ec.JPG"},function(e,a,t){e.exports=t.p+"static/media/hardware_store.4ba98a82.jpg"},function(e,a,t){e.exports=t.p+"static/media/portfolio.45b48090.JPG"},function(e,a,t){e.exports=t.p+"static/media/new_year.82f6dd4a.jpg"},function(e,a,t){e.exports=t.p+"static/media/color_classification.f69a82f6.jpg"},function(e,a,t){e.exports=t.p+"static/media/blinking.8931471b.JPG"},function(e,a,t){e.exports=t.p+"static/media/COVID.0685327b.jpg"},function(e,a,t){e.exports=t.p+"static/media/Dev_talks.b76d63af.jpg"},function(e,a,t){e.exports=t(52)},,,,,function(e,a,t){},,,,,,function(e,a,t){e.exports=t.p+"static/media/backend.306ae54d.svg"},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(16),r=t.n(c),s=(t(44),t(17)),l=t.n(s),o=t(18),m=t.n(o),d=t(9),u=t.n(d),p=t(19),g=t.n(p),_=t(20),b=t.n(_),v=t(21),E=t.n(v),f=t(22),h=t.n(f),N=t(4),y=function(){return i.a.createElement(N.b.div,{className:"sidebar",variants:{hidden:{x:"-20vw"},visible:{x:0,transition:{delay:.1,duration:.5,type:"spring"}}},initial:"hidden",animate:"visible"},i.a.createElement("img",{src:E.a,alt:"avatar",className:"sidebar__avatar"}),i.a.createElement("div",{className:"sidebar__name"}," Piyush ",i.a.createElement("span",null," Dutta ")," "),i.a.createElement("div",{className:"sidebar__item sidebar__title"}," Web Developer ")," ",i.a.createElement("a",{href:h.a,download:"piyushDutta.pdf"},i.a.createElement("div",{className:"sidebar__item sidebar__resume"},i.a.createElement("img",{src:b.a,alt:"resume",className:"sidebar__icon"})," Download Resume ")," ")," ",i.a.createElement("figure",{className:"sidebar__social-icons my-2"},i.a.createElement("a",{href:"!#"}," ",i.a.createElement("img",{src:l.a,alt:"facebook",className:"sidebar__icon mr-3"})," ")," ",i.a.createElement("a",{href:"!#"}," ",i.a.createElement("img",{src:m.a,alt:"instagram",className:"sidebar__icon"})," ")," ")," ",i.a.createElement("div",{className:"sidebar__contact"},i.a.createElement("div",{className:"sidebar__item sidebar__github"},i.a.createElement("a",{href:"!#"}," ",i.a.createElement("img",{src:u.a,alt:"github",className:"sidebar__icon mr-3"})," github ")," ")," ",i.a.createElement("div",{className:"sidebar__location"},i.a.createElement("img",{src:g.a,alt:"location",className:"sidebar__icon mr-3"}),"Kolkata, India ")," ",i.a.createElement("div",{className:"sidebar__item"}," iampiyushdutta @gmail.com ")," ",i.a.createElement("div",{className:"sidebar__item"}," 8340172667 ")," ")," ",i.a.createElement("div",{className:"sidebar__item sidebar__email",onClick:function(){window.open("mailto:codesumax@gmail.com")}}," email me ")," ")},k=t(8),j=t(6),x=function(){var e=Object(n.useState)(""),a=Object(k.a)(e,2),t=a[0],c=a[1];Object(n.useEffect)((function(){var e=window.location.href;console.log(e),e.endsWith("/")?c("About"):e.endsWith("/projects")?c("Projects"):e.endsWith("/resume")&&c("Resume")}),[t]);return i.a.createElement(N.b.div,{className:"navbar",variants:{hidden:{y:"-30vh",opacity:0},visible:{y:0,opacity:1,transition:{delay:.2,duration:.7,type:"spring"}}},initial:"hidden",animate:"visible"},i.a.createElement("div",{className:"navbar__active"},t),i.a.createElement("div",{className:"navbar__items"},"About"!==t&&i.a.createElement(j.b,{to:"/"},i.a.createElement("div",{className:"navbar__item",onClick:function(){return c("About")}},"About")),"Resume"!==t?i.a.createElement(j.b,{to:"/resume"},i.a.createElement("div",{className:"navbar__item",onClick:function(){return c("Resume")}},"Resume")):null,"Projects"!==t&&i.a.createElement(j.b,{to:"/projects"},i.a.createElement("div",{className:"navbar__item",onClick:function(){return c("Projects")}},"Projects"))))},w=t(1),C=function(e){var a=e.skill,t=a.icon,n=a.title,c=a.about;return i.a.createElement("div",{className:"col-lg-6"},i.a.createElement("div",{className:"skill-card"},i.a.createElement("img",{src:t,alt:"icon",className:"skill-card__icon"}),i.a.createElement("div",{className:"skill-card-body"},i.a.createElement("h6",{className:"skill-card__title"},n),i.a.createElement("p",{className:"skill_card__content"},c))))},D=t(25),S=t.n(D),I=(t(50),t(26)),B=t.n(I),P=t(12),O=t.n(P),A=t(27),R=t.n(A),T=t(28),W=t.n(T),J=[{icon:O.a,title:"Frontend Development",about:"I can build a beautiful and scalable SPA using HTML, CSS and React.js"},{icon:R.a,title:"Backend  Development",about:"handle database, server, api using and SQLlite"},{icon:S.a,title:"API Development",about:["I can develop robust REST API using",i.a.createElement("strong",{key:1}," django-rest-api ")]},{icon:B.a,title:"Competitive Coder",about:"a daily problem solver in HackerRank and Leetcode"},{icon:W.a,title:"UI/UX designer",about:"minimalistic user interface designer using figma and  framer"},{icon:O.a,title:"Whatever",about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!"}],L=(t(51),function(){return i.a.createElement(N.b.div,{className:"about",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{delay:.2,duration:.6}},exit:{opacity:0,transition:{ease:"easeInOut"}}},initial:"hidden",animate:"visible",exit:"exit"},i.a.createElement("h6",{className:"about__intro"},"I describe myself as someone who's persistant, a quick learner and loves problem solving by using simple and scalable solutions."),i.a.createElement("div",{className:"container about__container"},i.a.createElement("h6",{className:"about__heading"},"What I offer"),i.a.createElement("div",{className:"row"},J.map((function(e){return i.a.createElement(C,{skill:e})})))))}),M=function(e){var a=e.value,t=a.icon,n=a.name,c=a.level,r="".concat(c,"%");return i.a.createElement("div",{className:"bar"},i.a.createElement("div",{className:"bar__wrapper",style:{width:r}},i.a.createElement("span",{className:"bar__name"},i.a.createElement("img",{src:t,alt:"icon",className:"bar__icon mr-2"}),n)))},F=t(5),G=t.n(F),H=t(29),V=[{icon:t.n(H).a,name:"Python",level:"45"},{icon:G.a,name:"Java",level:"60"},{icon:G.a,name:"HTML",level:"80"},{icon:G.a,name:"react",level:"60"},{icon:G.a,name:"Django",level:"80"},{icon:G.a,name:"Bootstrap",level:"80"}],q=[{icon:G.a,name:"Figma",level:"85"},{icon:G.a,name:"Photoshop",level:"45"},{icon:G.a,name:"Illustrator",level:"60"},{icon:G.a,name:"Framer",level:"45"}],z=function(){return i.a.createElement(N.b.div,{className:"container resume",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{delay:.2,duration:.6}},exit:{opacity:0,transition:{ease:"easeInOut"}}},initial:"hidden",animate:"visible",exit:"exit"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-6 resume-card"},i.a.createElement("h4",{className:"resume-card__heading"},"Education ")," ",i.a.createElement("div",{className:"resume-card__body"},i.a.createElement("h5",{className:"resume-card__title"},"Computer Science Enginnering ")," ",i.a.createElement("p",{className:"resume-card__name"},"College of Engineering and Managements(2014 - 2018) ")," ",i.a.createElement("p",{className:"resume-card__details"}," I am currently persuing B.tech in Computer Science Engineering from College of Engineering and Managements( ")," ")," ")," ",i.a.createElement("div",{className:"col-lg-6 resume-card"},i.a.createElement("h4",{className:"resume-card__heading"},"Experience ")," ",i.a.createElement("div",{className:"resume-card__body"},i.a.createElement("h5",{className:"resume-card__title"},"Intern ")," ",i.a.createElement("p",{className:"resume-card__name"},"TCS(2020) ")," ",i.a.createElement("p",{className:"resume-card__details"}," I work as a intern in TCS and also completed some projects on testing ")," ")," ")," "),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-6 resume-languages"},i.a.createElement("h5",{className:"reume-language__heading"},"Language and Framework ")," ",i.a.createElement("div",{className:"resume-language__body mt-3"}," ",V.map((function(e){return i.a.createElement(M,{value:e})}))," ")," ")," ",i.a.createElement("div",{className:"col-lg-6 resume-languages"},i.a.createElement("h5",{className:"reume-language__heading"},"Tools and Softwares ")," ",i.a.createElement("div",{className:"resume-language__body mt-3"}," ",q.map((function(e){return i.a.createElement(M,{value:e})}))," ")," ")," ")," ")},U=t(30),Y=t.n(U),K=t(31),Q=t.n(K),X=t(32),Z=t.n(X),$=t(33),ee=t.n($),ae=t(34),te=t.n(ae),ne=t(35),ie=t.n(ne),ce=t(36),re=t.n(ce),se=t(37),le=t.n(se),oe=t(38),me=t.n(oe),de=[{name:"COVID 19 tracker",image:le.a,deployed_url:"https://covid-19-tracker-by-sumit.web.app/",github_url:"https://github.com/Dey-Sumit/covid-19-tracker",category:["react.js"]},{name:"Dev Talks",image:me.a,deployed_url:"https://dev-talks.herokuapp.com/",github_url:"https://github.com/Dey-Sumit/Dev-talks",category:["node.js","mongoDB","react.js"]},{name:"Realtime Chat App",image:Q.a,deployed_url:"https://sumit-chat.netlify.app/",github_url:"https://github.com/Dey-Sumit/chat-app-socket.io-react-node",category:["node","socket.io","react"]},{name:"Tweeter Clone",image:Y.a,deployed_url:"http://sumaxtweetme.pythonanywhere.com/",github_url:"https://github.com/Dey-Sumit/tweetme",category:["django","react"]},{name:"Shop Website",image:Z.a,deployed_url:"!#",category:["html_css","vanilla"]},{name:"Dev Portfolio",image:ee.a,deployed_url:"http://suprateem.herokuapp.com/",category:["vanilla"]},{name:"Bengali New Year",image:te.a,deployed_url:"https://dey-sumit.github.io/NewYear/",category:["vanilla"]},{name:"Color Classification using tf.js",image:ie.a,deployed_url:"!#",github_url:"https://github.com/Dey-Sumit/color-classification",category:["node","machine_learning"]},{name:"Blinking bubbles",image:re.a,deployed_url:"https://dey-sumit.github.io/Blinking_Bubbles/",github_url:"https://github.com/Dey-Sumit/Blinking_Bubbles",category:["processing"]}],ue=function(e){var a=e.project,t=a.name,n=a.image,c=a.deployed_url,r=a.github_url;return i.a.createElement("div",{className:"projectrCard col-md-6 col-lg-4 my-2"},i.a.createElement("figure",{className:"projectCard__wrapper"},i.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:n,alt:t,className:"projectCard__image"})),i.a.createElement("div",{className:"projectCard__title"},i.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:u.a,alt:"github link",className:"projectCard__icon"})),t)))},pe=function(){var e=Object(n.useState)(de),a=Object(k.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)("All"),s=Object(k.a)(r,2),l=s[0],o=s[1],m=function(e){var a=de.filter((function(a){return a.category.includes(e)}));c(a),o(e)};return i.a.createElement(N.b.div,{className:"container projects",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{delay:.2,duration:.6}},exit:{opacity:0,transition:{ease:"easeInOut"}}},initial:"hidden",animate:"visible",exit:"exit"},i.a.createElement("div",{className:"projects__navbar"},i.a.createElement("div",{className:"All"===l&&"projects__navbar-active",onClick:function(){c(de),o("All")}},"All"),i.a.createElement("div",{className:"react.js"===l&&"projects__navbar-active",onClick:function(){return m("react.js")}},"React"),i.a.createElement("div",{className:"mongoDB"===l&&"projects__navbar-active",onClick:function(){return m("mongoDB")}},"MongoDB"),i.a.createElement("div",{className:"node.js"===l&&"projects__navbar-active",onClick:function(){return m("node.js")}},"Node"),i.a.createElement("div",{className:"vanilla"===l&&"projects__navbar-active",onClick:function(){return m("vanilla")}},"Vanilla")),i.a.createElement("div",{className:"row"},t.map((function(e){return i.a.createElement(ue,{key:e.name,project:e})}))))};var ge=function(){var e=Object(w.g)();return i.a.createElement("div",{className:"app"},i.a.createElement("div",{className:"container app__container"},i.a.createElement("div",{className:"row app__row"},i.a.createElement("div",{className:"col-lg-3"},i.a.createElement(y,null)),i.a.createElement("div",{className:"col-lg-9 app__main-content"},i.a.createElement(x,null),i.a.createElement(N.a,{exitBeforeEnter:!0},i.a.createElement(w.d,{location:e,key:e.key},i.a.createElement(w.b,{exact:!0,path:"/"},i.a.createElement(L,null)),i.a.createElement(w.b,{path:"/resume"},i.a.createElement(z,null)),i.a.createElement(w.b,{path:"/projects",component:pe}),i.a.createElement(w.b,null,i.a.createElement(w.a,{to:"/"}))))))))};r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(j.a,null,i.a.createElement(ge,null))),document.getElementById("root"))}],[[39,1,2]]]);
//# sourceMappingURL=main.e656241d.chunk.js.map