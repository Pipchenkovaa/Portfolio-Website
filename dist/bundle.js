(()=>{"use strict";var e=function(e,a,o){var i=document.createElement(e);a&&(i.className=a),o&&(i.id=o);for(var t=arguments.length,n=new Array(t>3?t-3:0),s=3;s<t;s++)n[s-3]=arguments[s];return n&&n.forEach((function(e){i.append(e)})),i},a=function(e,a){var o=document.createElement("div");o.className=e,a&&(o.id=a);for(var i=arguments.length,t=new Array(i>2?i-2:0),n=2;n<i;n++)t[n-2]=arguments[n];return t.forEach((function(e){o.append(e)})),o},o=function(e,a){var o=document.createElement("a");o.href=e,a&&(o.className=a);for(var i=arguments.length,t=new Array(i>2?i-2:0),n=2;n<i;n++)t[n-2]=arguments[n];return t.forEach((function(e){o.append(e)})),o},i=function(e,a,o,i){var t=document.createElement("img");return t.src=e,t.alt=a,o&&(t.className=o),i&&(t.width=i),t},t=e("section","introduction");[{githubLink:"https://github.com/Pipchenkovaa",githubIcon:"./images/icons/github.svg",githubIconAlt:"Github Icon",telegramLink:"https://t.me/@pip_ch",telegramIcon:"./images/icons/telegram-icon.svg",telegramIconAlt:"Telegram Icon",emailLink:"mailto:pipchenkova0701@gmail.com",emailIcon:"./images/icons/email.svg",emailIconAlt:"Email Icon",avatarImage:"./images/avatar.png",avatarImageAlt:"Alina's avatar",heading:"Hi there! My name's Alina and, above all, I love ",text:"I'm currently studying at the HSE University, and my goal is to become a frontend developer and create modern, efficient web interfaces"}].forEach((function(n){var s=i(n.githubIcon,n.githubIconAlt,"github-contact",30),c=e("p",null,null,"View GitHub"),l=o(n.githubLink,"welcome-info__socials connection headers-text-color button-link-decor",s,c);l.classList.contains("connection")&&Object.assign(l.style,{display:"flex",justifyContent:"space-between",padding:"8px 16px"});var r=i(n.telegramIcon,n.telegramIconAlt,"telegram-contact social-link button-link-decor",46),g=o(n.telegramLink,"welcome-info__socials",r),d=i(n.emailIcon,n.emailIconAlt,"social-link button-link-decor",46),m=o(n.emailLink,"welcome-info__socials",d),h=a("welcome-info__socials",null,l,g,m),p=e("p","welcome-info__additional-text body-text-color",null,n.text),u=e("span","welcome-info__main-text__highlighting headers-text-color",null,"programming"),v=e("h1","welcome-info__main-text headers-text-color",null,n.heading,u),f=a("card welcome-info card-decor",null,h,v,p),I=i(n.avatarImage,n.avatarImageAlt,"avatar__image");I.style.margin="auto";var b=a("card avatar background-gradient border-common",null,I);b.classList.contains("avatar")&&(b.style.display="flex"),t.append(f,b)}));var n=e("h4","body-text-color",null,"My technology stack"),s=a("technology-stack__scrolling-wrapper marquee marquee--8");Object.assign(s.style,{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",overflowX:"hidden",margin:"0 auto"}),[{src:"./images/icons/html.svg",alt:"HTML Logo"},{src:"./images/icons/css.svg",alt:"CSS Logo"},{src:"./images/icons/tailwind.svg",alt:"Tailwindcss Logo"},{src:"./images/icons/js.svg",alt:"JavaScript Logo"},{src:"./images/icons/git.svg",alt:"Git Logo"},{src:"./images/icons/scss.svg",alt:"SCSS Logo"},{src:"./images/icons/webpack.svg",alt:"Webpack Logo"},{src:"./images/icons/gsap.svg",alt:"GSAP Logo"}].forEach((function(e){var a=i(e.src,e.alt,"marquee__item stack-logo");s.append(a)}));var c=e("section","technology-stack",null,n,s);Object.assign(c.style,{display:"inline",textAlign:"center"});var l=e("h4","body-text-color",null,"Some examples of my work"),r=e("section","pet-projects");r.append(l),[{projectName:"Fantasy Authorization Form",href:"https://pipchenkovaa.github.io/Authorization-Form/",projectImageSrc:"./images/login-form.png",projectImageAlt:"Fantasy Auth Form",imageCardClass:"project-example dark-card",projectDescription:"The stunning design of the two-page authorization form is suitable for both new & registered users",usedTechnologies:[{imageIcon:"./images/icons/scss.svg",imageAlt:"SCSS Logo",hiddenClass:!1,hiddenId:!1},{imageIcon:"./images/icons/html.svg",imageAlt:"HTML Logo",hiddenClass:!1,hiddenId:!1},{imageIcon:"./images/icons/css.svg",imageAlt:"CSS Logo",hiddenClass:!0,hiddenId:!1},{imageIcon:"./images/icons/js.svg",imageAlt:"JS Logo",hiddenClass:!1,hiddenId:!1},{imageIcon:"./images/icons/git.svg",imageAlt:"GIT Logo",hiddenClass:!1,hiddenId:!1}]},{projectName:"Webpage With A Parallax Effect",href:"https://pipchenkovaa.github.io/Webpage-With-A-Parallax-Effect/",projectImageSrc:"./images/3d-forest.png",projectImageAlt:"Webpage with 3D effect",imageCardClass:"project-example dark-card",projectDescription:"A simple webpage with a parallax effect, created primarily using JavaScript, GSAP & Photoshop",usedTechnologies:[{imageIcon:"./images/icons/scss.svg",imageAlt:"SCSS Logo",hiddenClass:!1,hiddenId:!1},{imageIcon:"./images/icons/html.svg",imageAlt:"HTML Logo",hiddenClass:!1,hiddenId:!1},{imageIcon:"./images/icons/css.svg",imageAlt:"CSS Logo",hiddenClass:!0,hiddenId:!1},{imageIcon:"./images/icons/js.svg",imageAlt:"JS Logo",hiddenClass:!1,hiddenId:!1},{imageIcon:"./images/icons/photoshop.svg",imageAlt:"Photoshop Logo",hiddenClass:!1,hiddenId:!1},{imageIcon:"./images/icons/gsap.svg",imageAlt:"GSAP Logo",hiddenClass:!1,hiddenId:!0}]},{projectName:"Apple / Mac Website",href:"https://pipchenkovaa.github.io/Apple_Mac-Website/",projectImageSrc:"./images/apple-site.png",projectImageAlt:"Apple Mac Website",imageCardClass:"project-example light-card",projectDescription:"An updated, multi-page website that is inspired by the iconic style of Apple Inc. The first major project of it's kind",usedTechnologies:[{imageIcon:"./images/icons/html.svg",imageAlt:"HTML Logo",hiddenClass:!1,hiddenId:!1},{imageIcon:"./images/icons/css.svg",imageAlt:"CSS Logo",hiddenClass:!1,hiddenId:!1},{imageIcon:"./images/icons/js.svg",imageAlt:"JS Logo",hiddenClass:!1,hiddenId:!1},{imageIcon:"./images/icons/photoshop.svg",imageAlt:"Photoshop Logo",hiddenClass:!1,hiddenId:!1}]},{projectName:"Minimalistic News Webpage",href:"https://pipchenkovaa.github.io/News-Webpage/",projectImageSrc:"./images/tailwind.png",projectImageAlt:"News Webpage",imageCardClass:"project-example light-card",projectDescription:"A minimalist fashion news webpage, where I first used the Tailwind CSS framework",usedTechnologies:[{imageIcon:"./images/icons/tailwind.svg",imageAlt:"Tailwindcss Logo",hiddenClass:!1,hiddenId:!1},{imageIcon:"./images/icons/html.svg",imageAlt:"HTML Logo",hiddenClass:!1,hiddenId:!1},{imageIcon:"./images/icons/css.svg",imageAlt:"CSS Logo",hiddenClass:!1,hiddenId:!1},{imageIcon:"./images/icons/js.svg",imageAlt:"JS Logo",hiddenClass:!1,hiddenId:!1}]}].forEach((function(t){var n,s,c=i(t.projectImageSrc,t.projectImageAlt,t.imageCardClass,800),l=o(t.href,null,c),g=a("image-cover",null,l),d=e("h5","project-name headers-text-color headers-link",null,t.projectName),m=o(t.href,null,d),h=a("project-descrtiption_cover",null,m),p=e("p","add-project-info body-text-color",null,t.projectDescription),u=a("used-technologies hidden-mobile-small",null,(n=t.usedTechnologies,(s=document.createElement("ul")).className="used-technologies__list",n.forEach((function(e){var a=document.createElement("li");a.className="used-technologies__list__wrapper border-common",e.hiddenClass&&a.classList.add("hidden-one"),e.hiddenId&&(a.id="specialDesktop");var o=i(e.imageIcon,e.imageAlt,null,30);a.append(o),s.append(a)})),s)),v=a("project-description",null,h,p,u),f=a("project-card card-decor",null,g,v);r.append(f)}));var g=e("h5","headers-text-color");g.innerHTML="&#10022;  Layout Design Development";var d=e("p","body-text-color",null,"I'll design an exquisite website based on your existing ready-made layout, with a focus on styles"),m=a("first-service border-right","layout",g,d),h=e("h5","headers-text-color");h.innerHTML="&#10022;  Frontend Development";var p=e("p","body-text-color",null,"I'll create a fully responsive & unique website that focuses on JavaScript development"),u=a("second-service","frontend",h,p),v=a("proposed-services",null,m,u);Object.assign(v.style,{display:"flex",justifyContent:"space-between"});var f=e("p",null,null,"View GitHub"),I=i("./images/icons/arrow.svg","Arrow Icon","arrow",35),b=o("https://github.com/Pipchenkovaa","connection headers-text-color button-link-decor",f,I);b.classList.contains("connection")&&Object.assign(b.style,{display:"flex",justifyContent:"center",alignItems:"center"});var y=a("intrest-form-content__register",null,b);y.style.display="flex";var A=e("span","intrest-form-content__highlighting headers-text-color",null,"Interested?"),L=e("h1","headers-text-color",null,"Got ",A),j=a("card intrest-form-content card-decor",null,L,v,y),w=e("section","services",null,j);Object.assign(w.style,{display:"grid",justifyItems:"center"});var x=a("connection-icons");[{href:"https://t.me/@pip_ch",src:"./images/icons/telegram-icon.svg",alt:"Telegram Icon"},{href:"https://wa.me/79169259277",src:"./images/icons/whatsapp.svg",alt:"WhatsApp Icon"},{href:"tel:+79169259277",src:"./images/icons/phone.svg",alt:"Phone Icon"},{href:"mailto:pipchenkova0701@gmail.com",src:"./images/icons/email.svg",alt:"Email Icon"}].forEach((function(e){var t=i(e.src,e.alt,"icon__space button-link-decor",45),n=o(e.href,null,t),s=a("icon",null,n);x.append(s)}));var C=e("p","body-text-color");C.innerHTML="Available Hours: 9:00 AM – 9:00 PM <br> (Moscow Time)";var _=e("span","stay-connected__highlighting headers-text-color",null,"Connected"),S=e("h1","headers-text-color",null,"Stay ",_),k=a("stay-connected",null,S,C,x),T=e("section","footer",null,k);Object.assign(T.style,{display:"inline-flexbox",textAlign:"center"});var M=e("p",null,null,"© Pipchencova Alina, 2024"),E=a("copy-rights body-text-color",null,M),H=e("section","rights",null,E);Object.assign(H.style,{display:"flex",justifyContent:"center"});var N=[t.outerHTML,c.outerHTML,r.outerHTML,w.outerHTML,T.outerHTML,H.outerHTML],P=a("container","app");document.body.append(P),N.forEach((function(e){return P.insertAdjacentHTML("beforeend",e)}))})();