!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},c={},i=n.parcelRequired7c6;null==i&&((i=function(t){if(t in r)return r[t].exports;if(t in c){var e=c[t];delete c[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){c[t]=e},n.parcelRequired7c6=i),i.register("iE7OH",(function(e,n){var r,c;t(e.exports,"register",(function(){return r}),(function(t){return r=t})),t(e.exports,"resolve",(function(){return c}),(function(t){return c=t}));var i={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)i[e[n]]=t[e[n]]},c=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),i.register("aNJCr",(function(e,n){var r;t(e.exports,"getBundleURL",(function(){return r}),(function(t){return r=t}));var c={};function i(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(t){var e=c[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return i(t[2])}return"/"}(),c[t]=e),e}})),i("iE7OH").register(JSON.parse('{"EVgbq":"index.7bc43b53.js","dJgAb":"mobile_not-found-280.2477c70c.png","2sSFK":"mobile_not-found-560.a4fbedec.png","4sgtB":"tablet_not-found-345.4a5eb24c.png","5hJ3C":"tablet_not-found-690.e022b24e.png","iQ4Zt":"desktop_not-found-345.4090a7c6.png","5z68B":"desktop_not-found-690.b26cda16.png","jvL0n":"index.c88a2250.css","8AV0k":"index.9a67cfca.js","9PkbM":"index.9a3e7b3d.js"}')),i("2xztc");var a=document.querySelector("[data-burger-menu-toggle]"),o=document.querySelector("[data-burger-menu]");a.addEventListener("click",(function(){a.classList.toggle("is-open"),o.classList.toggle("is-open"),a.setAttribute("aria-expanded",!0),s.classList.toggle("unscroll")}));var s=document.querySelector("body");var l=document.querySelector("[data-burger-menu-arrow]"),d=document.querySelector("[data-burger-menu-favorite]");l.addEventListener("click",(function(){d.classList.toggle("burger-favorite__items-display")})),console.log("12222"),document.querySelectorAll(".hero__btn").forEach((function(t){t.addEventListener("click",(function(){var e=document.querySelectorAll(".hero__btn--active");if(t.classList.contains("hero__btn--active"))t.classList.remove("hero__btn--active");else{if(1===e.length)e[0].classList.remove("hero__btn--active");t.classList.add("hero__btn--active")}}))}));var u=i("bpxeT"),m=i("2TvXO"),p=i("4s6iC");function h(){return f.apply(this,arguments)}function f(){return(f=e(u)(e(m).mark((function t(){var n,r,c;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://www.thecocktaildb.com/api/json/v1/1/random.php",n=window.innerWidth<768?3:window.innerWidth<1280?6:9,t.prev=3,t.next=6,Promise.all(Array.from({length:n},(function(){return fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")})));case 6:return r=t.sent,t.next=9,Promise.all(r.map((function(t){if(t.ok)return t.json();throw new Error(t.status)})));case 9:c=t.sent,document.getElementById("content").removeAttribute("hidden"),document.getElementById("loading").style.display="none",document.querySelector(".random-cocktail__list").innerHTML=_(c),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(3),console.log("Error",t.t0);case 18:case"end":return t.stop()}}),t,null,[[3,15]])})))).apply(this,arguments)}function _(t){return t.reduce((function(t,e){return localStorage.getItem("favCocktails").includes("".concat(e.drinks[0].idDrink))?t+'<li class="random-cocktail__item" id="'.concat(e.drinks[0].idDrink,'">\n  <img class="random-cocktail__image" src="').concat(e.drinks[0].strDrinkThumb,'" alt="').concat(e.drinks[0].strCategory,'"  width=0 height=0/><h3 class="random-cocktail__uppertext theme_text_color" name="cocktailName">').concat(e.drinks[0].strDrink,'</h3><div class="random-cocktail__btn">').concat(p.LEARN_MORE_BTN).concat(p.REMOVE_BTN,"</div></li></div></div>"):t+'<li class="random-cocktail__item" id="'.concat(e.drinks[0].idDrink,'">\n  <img class="random-cocktail__image" src="').concat(e.drinks[0].strDrinkThumb,'" alt="').concat(e.drinks[0].strCategory,'"  width=0 height=0/><h3 class="random-cocktail__uppertext theme_text_color" name="cocktailName">').concat(e.drinks[0].strDrink,'</h3><div class="random-cocktail__btn">').concat(p.LEARN_MORE_BTN).concat(p.ADD_BTN,"</div></li></div></div>")}),"")}window.onload=h();var v={selected:document.querySelector(".selected"),optionsContainer:document.querySelector(".options-container"),optionsList:document.querySelectorAll(".option")};v.selected.addEventListener("click",(function(){v.optionsContainer.classList.toggle("active")})),v.optionsList.forEach((function(t){t.addEventListener("click",(function(){v.selected.innerHTML=t.querySelector("label").innerHTML,v.optionsContainer.classList.remove("active")}))}));var g;u=i("bpxeT"),m=i("2TvXO");g=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("dJgAb");var b;b=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("2sSFK");i("aNJCr").getBundleURL("EVgbq"),i("iE7OH").resolve("4sgtB");i("aNJCr").getBundleURL("EVgbq"),i("iE7OH").resolve("5hJ3C");var k;k=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("iQ4Zt");var y;y=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("5z68B");var w,L=document.querySelector(".header-form"),x=(document.querySelector(".header-input"),document.querySelector(".random-cocktail__list"),document.querySelector(".random-cocktail__title"));function E(t){return C.apply(this,arguments)}function C(){return(C=e(u)(e(m).mark((function t(n){var r,c,i;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(n),t.next=3,fetch(r);case 3:return c=t.sent,t.next=6,c.json();case 6:return i=t.sent,t.abrupt("return",i.drinks);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function S(){return T.apply(this,arguments)}function T(){return T=e(u)(e(m).mark((function t(){var n,r,c=arguments;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:"",x.textContent="Searching results",r="",n?r=n.reduce((function(t,e){return t+'<li class="random-cocktail__item">\n    <img class="random-cocktail__image" src="'.concat(e.strDrinkThumb,'" alt="').concat(e.strCategory,'" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext theme_text_color">').concat(e.strDrink,'</h3><div class="random-cocktail__btn"><button type="button" class="btn btn-secondary">Learn more</button><button type="button" class="btn-primary btn">\n    Add to\n    <svg\n      class="btn-primary__icon"\n      viewBox="0 0 19 17"\n      fill="none"\n      xmlns="http://www.w3.org/2000/svg"\n    >\n      <path\n        class="outer"\n        d="M9.5 17L8.1225 15.7771C3.23 11.4507 0 8.59727 0 5.09537C0 2.24196 2.299 0 5.225 0C6.878 0 8.4645 0.750409 9.5 1.93624C10.5355 0.750409 12.122 0 13.775 0C16.701 0 19 2.24196 19 5.09537C19 8.59727 15.77 11.4507 10.8775 15.7864L9.5 17Z"\n        fill="#FD5103"\n      />\n      <path\n        class="inner"\n        d="M9.50005 15.2106L8.38493 14.2452C4.42433 10.8296 1.80957 8.57687 1.80957 5.81221C1.80957 3.55952 3.67067 1.78955 6.03933 1.78955C7.37748 1.78955 8.66178 2.38198 9.50005 3.31816C10.3383 2.38198 11.6226 1.78955 12.9608 1.78955C15.3294 1.78955 17.1905 3.55952 17.1905 5.81221C17.1905 8.57687 14.5758 10.8296 10.6152 14.2525L9.50005 15.2106Z"\n        fill="#FD5103"\n      />\n    </svg>\n  </button></div></li></div></div>')}),""):(x.innerHTML="<h2 class='empty-search__title'>Sorry, we didn't find<br> any cocktail for you</h2>",r='<li><picture >\n          <source\n          media="(min-width: 768px)"\n          srcset="'.concat(e(k),", ").concat(e(y),' 2x"\n          type="image/png"/>\n          <source\n          media="(max-width: 767px)"\n          srcset="').concat(e(g),", ").concat(e(b),' 2x"\n          type="image/png"/>\n          <img class="userpic" src="').concat(e(g),'" alt="People in the cafe" width="345" height="380"/>\n          </picture>\n          </li>')),t.abrupt("return",r.includes('<li class="random-cocktail__item">')?'<ul class="random-cocktail__list">'.concat(r,"</ul>"):r);case 5:case"end":return t.stop()}}),t)}))),T.apply(this,arguments)}L.addEventListener("submit",(w=e(u)(e(m).mark((function t(n){var r,c;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=L.elements.headerinput.value.trim()){t.next=11;break}return document.getElementById("rnd-cocktail").innerHTML="",x.textContent="No search results found.",t.t0=document.getElementById("rnd-cocktail"),t.next=8,S();case 8:return t.t1=t.sent,t.t0.insertAdjacentHTML.call(t.t0,"beforeend",t.t1),t.abrupt("return","");case 11:return t.next=13,E(r);case 13:return c=t.sent,document.getElementById("rnd-cocktail").innerHTML="",t.t2=document.getElementById("rnd-cocktail"),t.next=18,S(c);case 18:t.t3=t.sent,t.t2.insertAdjacentHTML.call(t.t2,"beforeend",t.t3);case 20:case"end":return t.stop()}}),t)}))),function(t){return w.apply(this,arguments)}));u=i("bpxeT"),m=i("2TvXO");var H=document.querySelector(".mobile-menu"),q=document.querySelector(".burger-menu-btn"),A=document.querySelector(".random-cocktail__title"),M=document.querySelector(".burger-form"),B=(document.querySelector(".header-input"),document.querySelector(".random-cocktail__list"),document.querySelector(".random-cocktail__title"));function N(t){return D.apply(this,arguments)}function D(){return(D=e(u)(e(m).mark((function t(n){var r,c,i;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(n),t.next=3,fetch(r);case 3:return c=t.sent,t.next=6,c.json();case 6:return i=t.sent,t.abrupt("return",i.drinks);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function R(){return O.apply(this,arguments)}function O(){return O=e(u)(e(m).mark((function t(){var n,r,c=arguments;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:"",B.textContent="Searching results",r="",n?r=n.reduce((function(t,e){return t+'<li class="random-cocktail__item">\n    <img class="random-cocktail__image" src="'.concat(e.strDrinkThumb,'" alt="').concat(e.strCategory,'" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext theme_text_color">').concat(e.strDrink,'</h3><div class="random-cocktail__btn"><button type="button" class="btn btn-secondary">Learn more</button><button type="button" class="btn-primary btn">\n    Add to\n    <svg\n      class="btn-primary__icon"\n      viewBox="0 0 19 17"\n      fill="none"\n      xmlns="http://www.w3.org/2000/svg"\n    >\n      <path\n        class="outer"\n        d="M9.5 17L8.1225 15.7771C3.23 11.4507 0 8.59727 0 5.09537C0 2.24196 2.299 0 5.225 0C6.878 0 8.4645 0.750409 9.5 1.93624C10.5355 0.750409 12.122 0 13.775 0C16.701 0 19 2.24196 19 5.09537C19 8.59727 15.77 11.4507 10.8775 15.7864L9.5 17Z"\n        fill="#FD5103"\n      />\n      <path\n        class="inner"\n        d="M9.50005 15.2106L8.38493 14.2452C4.42433 10.8296 1.80957 8.57687 1.80957 5.81221C1.80957 3.55952 3.67067 1.78955 6.03933 1.78955C7.37748 1.78955 8.66178 2.38198 9.50005 3.31816C10.3383 2.38198 11.6226 1.78955 12.9608 1.78955C15.3294 1.78955 17.1905 3.55952 17.1905 5.81221C17.1905 8.57687 14.5758 10.8296 10.6152 14.2525L9.50005 15.2106Z"\n        fill="#FD5103"\n      />\n    </svg>\n  </button></div></li></div></div>')}),""):(B.innerHTML="<h2 class='empty-search__title'>Sorry, we didn't find<br> any cocktail for you</h2>",r='<li><picture >\n          <source\n          media="(min-width: 768px)"\n          srcset="'.concat(e(k),", ").concat(e(y),' 2x"\n          type="image/png"/>\n          <source\n          media="(max-width: 767px)"\n          srcset="').concat(e(g),", ").concat(e(b),' 2x"\n          type="image/png"/>\n          <img class="userpic" src="').concat(e(g),'" alt="People in the cafe" width="345" height="380"/>\n          </picture>\n          </li>')),t.abrupt("return",r.includes('<li class="random-cocktail__item">')?'<ul class="random-cocktail__list">'.concat(r,"</ul>"):r);case 5:case"end":return t.stop()}}),t)}))),O.apply(this,arguments)}M.addEventListener("submit",function(){var t=e(u)(e(m).mark((function t(n){var r,c;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),r=M.elements.burgerinput.value.trim()){t.next=11;break}return document.getElementById("rnd-cocktail").innerHTML="",B.textContent="No search results found.",t.t0=document.getElementById("rnd-cocktail"),t.next=8,R();case 8:return t.t1=t.sent,t.t0.insertAdjacentHTML.call(t.t0,"beforeend",t.t1),t.abrupt("return","");case 11:return t.next=13,N(r);case 13:return c=t.sent,document.getElementById("rnd-cocktail").innerHTML="",t.t2=document.getElementById("rnd-cocktail"),t.next=18,R(c);case 18:t.t3=t.sent,t.t2.insertAdjacentHTML.call(t.t2,"beforeend",t.t3),H.classList.remove("is-open"),q.classList.remove("is-open"),A.scrollIntoView({behavior:"smooth"});case 23:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());u=i("bpxeT"),m=i("2TvXO"),p=i("4s6iC");var j=document.querySelector(".random-cocktail__list"),F=document.querySelector(".arrow-btn-pagination.previous"),I=document.querySelector(".arrow-btn-pagination.next"),J=document.querySelector(".random-cocktail__title"),V=document.querySelector(".pagination__wrapper"),z=document.querySelectorAll(".hero___search__list .hero__search__item");function U(t){return P.apply(this,arguments)}function P(){return(P=e(u)(e(m).mark((function t(n){var r,c,i;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://www.thecocktaildb.com/api/json/v1/1/search.php?f=".concat(n),t.next=3,fetch(r);case 3:return c=t.sent,t.next=6,c.json();case 6:return i=t.sent,t.abrupt("return",i.drinks);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function W(t){var e,n=t;Z(n,e=window.innerWidth<768?3:window.innerWidth<1280?6:9,1),function(t,e,n){I.style.display="block",I.disabled=!1,I.classList.add("active"),F.style.display="block",F.disabled=!0;var r=document.querySelector(".pagination__list");r.innerHTML="";var c=Math.ceil(t.length/e),i=document.createElement("span");if(i.classList.add("dots"),i.innerText="...",1===c)V.classList.add("visually-hidden");else if(window.innerWidth<768)if(c>5){for(var a=1;a<=3;a++){var o=X(t,a,n,e);r.appendChild(o)}r.appendChild(i);var s=X(t,c,n,e);s.addEventListener("click",(function(){Z(t,e,n=c),s.classList.add("pagination__item--active")})),r.appendChild(s)}else for(var l=1;l<=c;l++){var d=X(t,l,n,e);r.appendChild(d)}else if(window.innerWidth>=768)if(c>7){for(var u=1;u<=3;u++){var m=X(t,u,n,e);r.appendChild(m)}r.appendChild(i);for(var p=c;p>=c-2;p--){var h=X(p,n);r.appendChild(h)}}else for(var f=1;f<=c;f++){var _=X(t,f,n,e);r.appendChild(_)}}(n,e,1)}function Z(t,e,n){J.textContent="Searching results",j.innerHTML="";var r=e*--n,c=r+e,i=t.slice(r,c).reduce((function(t,e){return localStorage.getItem("favCocktails").includes("".concat(e.idDrink))?t+'<li class="random-cocktail__item" id="'.concat(e.idDrink,'">\n  <img class="random-cocktail__image" src="').concat(e.strDrinkThumb,'" alt="').concat(e.strCategory,'" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext theme_text_color" name="cocktailName">').concat(e.strDrink,'</h3><div class="random-cocktail__btn">').concat(p.LEARN_MORE_BTN).concat(p.REMOVE_BTN,"</div></li></div></div>"):t+'<li class="random-cocktail__item" id="'.concat(e.idDrink,'">\n  <img class="random-cocktail__image" src="').concat(e.strDrinkThumb,'" alt="').concat(e.strCategory,'" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext theme_text_color" name="cocktailName">').concat(e.strDrink,'</h3><div class="random-cocktail__btn">').concat(p.LEARN_MORE_BTN).concat(p.ADD_BTN,"</div></li></div></div>")}),"");j.insertAdjacentHTML("afterbegin",i),G(t,e,++n)}function X(t,e,n,r){var c=document.createElement("li");return c.classList.add("pagination__item"),c.innerText=e,n===e&&c.classList.add("pagination__item--active"),c.addEventListener("click",(function(){Z(t,r,n=e),G(t,r,n)})),c}function G(t,e,n){!function(t,e,n){I.addEventListener("click",(function(){n++,Z(t,e,n),G(t,e,n)}))}(t,e,n),function(t,e,n){F.addEventListener("click",(function(){n--,Z(t,e,n),G(t,e,n)}))}(t,e,n);var r=Math.ceil(t.length/e);TOTAL_PAGES_PAGINATION=r;var c=document.querySelector(".pagination__item--active");c&&c.classList.remove("pagination__item--active");var i=document.querySelector(".pagination__item:nth-child(".concat(n,")"));i&&i.classList.add("pagination__item--active"),n===r?(I.disabled=!0,I.classList.remove("active")):(I.disabled=!1,I.classList.add("active")),1===n?(F.disabled=!0,F.classList.remove("active")):(F.disabled=!1,F.classList.add("active"))}F.style.display="none",I.style.display="none",v.optionsList.forEach((function(t){t.addEventListener("click",(function(){U(t.querySelector("label").innerHTML.toLowerCase()).then((function(t){t||h(),W(t)}))}))})),z.forEach((function(t){t.addEventListener("click",(function(t){U(t.target.textContent.toLowerCase()).then((function(t){t||h(),W(t)}))}))})),i("hH1K1"),i("6alNL"),i("3GCax")}();
//# sourceMappingURL=index.7bc43b53.js.map
