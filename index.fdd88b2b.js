!function(){function t(t,e,n,c){Object.defineProperty(t,e,{get:n,set:c,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},c={},r={},i=n.parcelRequired7c6;null==i&&((i=function(t){if(t in c)return c[t].exports;if(t in r){var e=r[t];delete r[t];var n={id:t,exports:{}};return c[t]=n,e.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){r[t]=e},n.parcelRequired7c6=i),i.register("iE7OH",(function(e,n){var c,r;t(e.exports,"register",(function(){return c}),(function(t){return c=t})),t(e.exports,"resolve",(function(){return r}),(function(t){return r=t}));var i={};c=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)i[e[n]]=t[e[n]]},r=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),i.register("aNJCr",(function(e,n){var c;t(e.exports,"getBundleURL",(function(){return c}),(function(t){return c=t}));var r={};function i(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}c=function(t){var e=r[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return i(t[2])}return"/"}(),r[t]=e),e}})),i("iE7OH").register(JSON.parse('{"EVgbq":"index.fdd88b2b.js","dJgAb":"mobile_not-found-280.2477c70c.png","2sSFK":"mobile_not-found-560.a4fbedec.png","4sgtB":"tablet_not-found-345.4a5eb24c.png","5hJ3C":"tablet_not-found-690.e022b24e.png","iQ4Zt":"desktop_not-found-345.4090a7c6.png","5z68B":"desktop_not-found-690.b26cda16.png","jvL0n":"index.4d47f4a7.css","8AV0k":"index.434ae83c.js"}')),document.querySelectorAll(".hero__btn").forEach((function(t){t.addEventListener("click",(function(){var e=document.querySelectorAll(".hero__btn--active");if(t.classList.contains("hero__btn--active"))t.classList.remove("hero__btn--active");else{if(1===e.length)e[0].classList.remove("hero__btn--active");t.classList.add("hero__btn--active")}}))}));var o=i("bpxeT"),a=i("2TvXO"),s=i("4s6iC");function l(){return d.apply(this,arguments)}function d(){return(d=e(o)(e(a).mark((function t(){var n,c,r;return e(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://www.thecocktaildb.com/api/json/v1/1/random.php",n=window.innerWidth<768?3:window.innerWidth<1280?6:9,t.prev=3,t.next=6,Promise.all(Array.from({length:n},(function(){return fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")})));case 6:return c=t.sent,t.next=9,Promise.all(c.map((function(t){if(t.ok)return t.json();throw new Error(t.status)})));case 9:r=t.sent,document.getElementById("content").removeAttribute("hidden"),document.getElementById("loading").style.display="none",console.log(r),document.querySelector(".random-cocktail__list").innerHTML=u(r),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(3),console.log("Error",t.t0);case 19:case"end":return t.stop()}}),t,null,[[3,16]])})))).apply(this,arguments)}function u(t){return console.log(t),t.reduce((function(t,e){return localStorage.getItem("favCocktails").includes("".concat(e.drinks[0].idDrink))?t+'<li class="random-cocktail__item" id="'.concat(e.drinks[0].idDrink,'">\n  <img class="random-cocktail__image" src="').concat(e.drinks[0].strDrinkThumb,'" alt="').concat(e.drinks[0].strCategory,'"  width=0 height=0/><h3 class="random-cocktail__uppertext theme_text_color" name="cocktailName">').concat(e.drinks[0].strDrink,'</h3><div class="random-cocktail__btn">').concat(s.LEARN_MORE_BTN).concat(s.REMOVE_BTN,"</div></li></div></div>"):t+'<li class="random-cocktail__item" id="'.concat(e.drinks[0].idDrink,'">\n  <img class="random-cocktail__image" src="').concat(e.drinks[0].strDrinkThumb,'" alt="').concat(e.drinks[0].strCategory,'"  width=0 height=0/><h3 class="random-cocktail__uppertext theme_text_color" name="cocktailName">').concat(e.drinks[0].strDrink,'</h3><div class="random-cocktail__btn">').concat(s.LEARN_MORE_BTN).concat(s.ADD_BTN,"</div></li></div></div>")}),"")}window.onload=l();var m={selected:document.querySelector(".selected"),optionsContainer:document.querySelector(".options-container"),optionsList:document.querySelectorAll(".option")};m.selected.addEventListener("click",(function(){m.optionsContainer.classList.toggle("active")})),m.optionsList.forEach((function(t){t.addEventListener("click",(function(){m.selected.innerHTML=t.querySelector("label").innerHTML,m.optionsContainer.classList.remove("active")}))}));var p;o=i("bpxeT"),a=i("2TvXO");p=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("dJgAb");var _;_=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("2sSFK");i("aNJCr").getBundleURL("EVgbq"),i("iE7OH").resolve("4sgtB");i("aNJCr").getBundleURL("EVgbq"),i("iE7OH").resolve("5hJ3C");var f;f=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("iQ4Zt");var h;h=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("5z68B");var v,g=document.querySelector(".header-form"),b=(document.querySelector(".header-input"),document.querySelector(".random-cocktail__list"),document.querySelector(".random-cocktail__title"));function k(t){return y.apply(this,arguments)}function y(){return(y=e(o)(e(a).mark((function t(n){var c,r,i;return e(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(n),t.next=3,fetch(c);case 3:return r=t.sent,t.next=6,r.json();case 6:return i=t.sent,t.abrupt("return",i.drinks);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function L(){return E.apply(this,arguments)}function E(){return E=e(o)(e(a).mark((function t(){var n,c,r=arguments;return e(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:"",b.textContent="Searching results",c="",n?c=n.reduce((function(t,e){return t+'<li class="random-cocktail__item">\n    <img class="random-cocktail__image" src="'.concat(e.strDrinkThumb,'" alt="').concat(e.strCategory,'" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext theme_text_color">').concat(e.strDrink,'</h3><div class="random-cocktail__btn"><button type="button" class="btn btn-secondary">Learn more</button><button type="button" class="btn-primary btn">\n    Add to\n    <svg\n      class="btn-primary__icon"\n      viewBox="0 0 19 17"\n      fill="none"\n      xmlns="http://www.w3.org/2000/svg"\n    >\n      <path\n        class="outer"\n        d="M9.5 17L8.1225 15.7771C3.23 11.4507 0 8.59727 0 5.09537C0 2.24196 2.299 0 5.225 0C6.878 0 8.4645 0.750409 9.5 1.93624C10.5355 0.750409 12.122 0 13.775 0C16.701 0 19 2.24196 19 5.09537C19 8.59727 15.77 11.4507 10.8775 15.7864L9.5 17Z"\n        fill="#FD5103"\n      />\n      <path\n        class="inner"\n        d="M9.50005 15.2106L8.38493 14.2452C4.42433 10.8296 1.80957 8.57687 1.80957 5.81221C1.80957 3.55952 3.67067 1.78955 6.03933 1.78955C7.37748 1.78955 8.66178 2.38198 9.50005 3.31816C10.3383 2.38198 11.6226 1.78955 12.9608 1.78955C15.3294 1.78955 17.1905 3.55952 17.1905 5.81221C17.1905 8.57687 14.5758 10.8296 10.6152 14.2525L9.50005 15.2106Z"\n        fill="#FD5103"\n      />\n    </svg>\n  </button></div></li></div></div>')}),""):(b.innerHTML="<h2 class='empty-search__title'>Sorry, we didn't find<br> any cocktail for you</h2>",c='<li><picture >\n          <source\n          media="(min-width: 768px)"\n          srcset="'.concat(e(f),", ").concat(e(h),' 2x"\n          type="image/png"/>\n          <source\n          media="(max-width: 767px)"\n          srcset="').concat(e(p),", ").concat(e(_),' 2x"\n          type="image/png"/>\n          <img class="userpic" src="').concat(e(p),'" alt="People in the cafe" width="345" height="380"/>\n          </picture>\n          </li>')),t.abrupt("return",c.includes('<li class="random-cocktail__item">')?'<ul class="random-cocktail__list">'.concat(c,"</ul>"):c);case 5:case"end":return t.stop()}}),t)}))),E.apply(this,arguments)}g.addEventListener("submit",(v=e(o)(e(a).mark((function t(n){var c,r;return e(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),c=g.elements.headerinput.value.trim()){t.next=11;break}return document.getElementById("rnd-cocktail").innerHTML="",b.textContent="No search results found.",t.t0=document.getElementById("rnd-cocktail"),t.next=8,L();case 8:return t.t1=t.sent,t.t0.insertAdjacentHTML.call(t.t0,"beforeend",t.t1),t.abrupt("return","");case 11:return t.next=13,k(c);case 13:return r=t.sent,document.getElementById("rnd-cocktail").innerHTML="",t.t2=document.getElementById("rnd-cocktail"),t.next=18,L(r);case 18:t.t3=t.sent,t.t2.insertAdjacentHTML.call(t.t2,"beforeend",t.t3);case 20:case"end":return t.stop()}}),t)}))),function(t){return v.apply(this,arguments)}));s=i("4s6iC");var w=document.querySelector(".random-cocktail__list"),x=document.querySelector(".arrow-btn-pagination.previous"),C=document.querySelector(".arrow-btn-pagination.next");x.style.display="none",C.style.display="none";var S=document.querySelectorAll(".hero___search__list .hero__search__item");function H(t){var e,n=t,c=1;function r(t,e,n){w.innerHTML="";var c=e*--n,r=c+e,i=t.slice(c,r);console.log(i);var o=i.reduce((function(t,e){return localStorage.getItem("favCocktails").includes("".concat(e.idDrink))?t+'<li class="random-cocktail__item" id="'.concat(e.idDrink,'">\n    <img class="random-cocktail__image" src="').concat(e.strDrinkThumb,'" alt="').concat(e.strCategory,'" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext theme_text_color" name="cocktailName">').concat(e.strDrink,'</h3><div class="random-cocktail__btn">').concat(s.LEARN_MORE_BTN).concat(s.REMOVE_BTN,"</div></li></div></div>"):t+'<li class="random-cocktail__item" id="'.concat(e.idDrink,'">\n    <img class="random-cocktail__image" src="').concat(e.strDrinkThumb,'" alt="').concat(e.strCategory,'" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext theme_text_color" name="cocktailName">').concat(e.strDrink,'</h3><div class="random-cocktail__btn">').concat(s.LEARN_MORE_BTN).concat(s.ADD_BTN,"</div></li></div></div>")}),"");w.insertAdjacentHTML("afterbegin",o)}function i(){var t=document.querySelector(".pagination__item--active");console.log(t),t&&t.classList.remove("pagination__item--active");var e=document.querySelector(".pagination__item:nth-child(".concat(c+1,")"));e&&e.classList.add("pagination__item--active")}function o(t){var i=document.createElement("li");return i.classList.add("pagination__item"),i.innerText=t,c===t&&i.classList.add("pagination__item--active"),i.addEventListener("click",(function(){r(n,e,c=t),document.querySelector("li.pagination__item--active").classList.remove("pagination__item--active"),i.classList.add("pagination__item--active")})),i}e=window.innerWidth<768?3:window.innerWidth<1280?6:9,r(n,e,c),function(t,a){var s=document.querySelector(".pagination__list");s.innerHTML="";for(var l=Math.ceil(t.length/a),d=0;d<l;d++){var u=o(d+1);s.appendChild(u)}x.style.display="block",x.disabled=!0,x.addEventListener("click",(function(){0===c?(x.disabled=!0,C.classList.remove("active")):(C.classList.add("active"),x.disabled=!1,c--,r(n,e,c),i())})),C.style.display="block",C.classList.add("active"),C.disabled=!1,C.addEventListener("click",(function(){c===l-1?(console.log(l),C.disabled=!0,C.classList.remove("active")):(C.classList.add("active"),C.disabled=!1,x.disabled=!1,x.classList.add("active"),c++,r(n,e,c),i())}))}(n,e)}console.log(S),m.optionsList.forEach((function(t){t.addEventListener("click",(function(){var e=t.querySelector("label").innerHTML.toLowerCase();console.log(e),k(e).then((function(t){t||l(),H(t)}))}))})),S.forEach((function(t){t.addEventListener("click",(function(t){var e=t.target.textContent.toLowerCase();console.log(e),k(e).then((function(t){t||l(),H(t)}))}))})),i("hH1K1");o=i("bpxeT"),a=i("2TvXO");var T=document.querySelector("#modal-ingredients"),q=document.querySelector(".open-btn"),A=document.querySelector(".modal-ingredients-close"),N=document.querySelector(".backdrop"),R=document.querySelector("#modal-btn__remove-fav"),B=document.querySelector("#modal-btn__add-to-fav");function D(){return(D=e(o)(e(a).mark((function t(n){var c,r,i,o,s;return e(a).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=function(){return'<h2 class="modal-ingredient-title">'.concat(i.strIngredient,'</h2>\n        <strong class="modal-ingredient-uptitle">').concat(i.strType,'</strong>\n        <p class="modal-ingredient-text">').concat(i.strDescription,'</p>\n        <ul class="modal-ingredient-list specs-list">\n        <li class="modal-ingredient-item specs-list__item"><span class="specs-list__marker">&#10038;</span> Alcohol: ').concat(i.strAlcohol,"</li>\n        ").concat(o,"\n          </ul>")},t.next=3,fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?i=".concat(n));case 3:return c=t.sent,t.next=6,c.json();case 6:r=t.sent,i=r.ingredients[0],o='<li class="modal-ingredient-item specs-list__item"><span class="specs-list__marker">&#10038;</span> Alcohol by volume: '.concat(i.strABV,"%</li>"),"No"===i.strAlcohol&&(o=""),T.insertAdjacentHTML("beforeend",s());case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function M(){N.classList.toggle("is-hidden")}R.style.display="none",B.addEventListener("click",(function(){R.style.display="block",B.style.display="none"})),R.addEventListener("click",(function(){R.style.display="none",B.style.display="block"})),A.addEventListener("click",M),q.addEventListener("click",M),function(t){D.apply(this,arguments)}("Wine"),i("3GCax"),i("2xztc")}();
//# sourceMappingURL=index.fdd88b2b.js.map
