function t(t,e,o,n){Object.defineProperty(t,e,{get:o,set:n,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=o.parcelRequired7c6;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){i[t]=e},o.parcelRequired7c6=a),a.register("kyEFX",(function(e,o){var n,i;t(e.exports,"register",(function(){return n}),(function(t){return n=t})),t(e.exports,"resolve",(function(){return i}),(function(t){return i=t}));var a={};n=function(t){for(var e=Object.keys(t),o=0;o<e.length;o++)a[e[o]]=t[e[o]]},i=function(t){var e=a[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),a("kyEFX").register(JSON.parse('{"5ZPII":"index.26d7f145.js","7kmbu":"mobile_not-found-280.2477c70c.png","15y1x":"mobile_not-found-560.a4fbedec.png","8JTkt":"tablet_not-found-345.4a5eb24c.png","a5Rn2":"tablet_not-found-690.e022b24e.png","h8C2i":"desktop_not-found-345.4090a7c6.png","aqGym":"desktop_not-found-690.b26cda16.png","jvL0n":"index.00759909.css"}'));document.querySelectorAll(".hero__btn").forEach((t=>{t.addEventListener("click",(()=>{const e=document.querySelectorAll(".hero__btn--active");if(t.classList.contains("hero__btn--active"))t.classList.remove("hero__btn--active");else{if(1===e.length){e[0].classList.remove("hero__btn--active")}t.classList.add("hero__btn--active")}}))}));const r='<button type="button" class="btn btn-primary btn-remove-from">\n  Remove\n  <svg\n    class="btn-primary__icon btn-remove-from"\n    viewBox="0 0 19 17"\n    fill="none"\n    xmlns="http://www.w3.org/2000/svg"\n  >\n    <path\n      class="outer"\n      d="M9.5 17L8.1225 15.7771C3.23 11.4507 0 8.59727 0 5.09537C0 2.24196 2.299 0 5.225 0C6.878 0 8.4645 0.750409 9.5 1.93624C10.5355 0.750409 12.122 0 13.775 0C16.701 0 19 2.24196 19 5.09537C19 8.59727 15.77 11.4507 10.8775 15.7864L9.5 17Z"\n      fill="#FD5103"\n    />\n    <path\n      class="inner-remove"\n      d="M9.50005 15.2106L8.38493 14.2452C4.42433 10.8296 1.80957 8.57687 1.80957 5.81221C1.80957 3.55952 3.67067 1.78955 6.03933 1.78955C7.37748 1.78955 8.66178 2.38198 9.50005 3.31816C10.3383 2.38198 11.6226 1.78955 12.9608 1.78955C15.3294 1.78955 17.1905 3.55952 17.1905 5.81221C17.1905 8.57687 14.5758 10.8296 10.6152 14.2525L9.50005 15.2106Z"\n      fill="#FD5103"\n    />\n  </svg>\n</button>',s='<button type="button" class="btn-primary btn btn-add-to">\n    Add to\n    <svg\n      class="btn-primary__icon btn-add-to"\n      viewBox="0 0 19 17"\n      fill="none"\n      xmlns="http://www.w3.org/2000/svg"\n    >\n      <path\n        class="outer"\n        d="M9.5 17L8.1225 15.7771C3.23 11.4507 0 8.59727 0 5.09537C0 2.24196 2.299 0 5.225 0C6.878 0 8.4645 0.750409 9.5 1.93624C10.5355 0.750409 12.122 0 13.775 0C16.701 0 19 2.24196 19 5.09537C19 8.59727 15.77 11.4507 10.8775 15.7864L9.5 17Z"\n        fill="#FD5103"\n      />\n      <path\n        class="inner"\n        d="M9.50005 15.2106L8.38493 14.2452C4.42433 10.8296 1.80957 8.57687 1.80957 5.81221C1.80957 3.55952 3.67067 1.78955 6.03933 1.78955C7.37748 1.78955 8.66178 2.38198 9.50005 3.31816C10.3383 2.38198 11.6226 1.78955 12.9608 1.78955C15.3294 1.78955 17.1905 3.55952 17.1905 5.81221C17.1905 8.57687 14.5758 10.8296 10.6152 14.2525L9.50005 15.2106Z"\n        fill="#FD5103"\n      />\n    </svg>\n  </button>\n';async function l(){let t;t=window.innerWidth<768?3:window.innerWidth<1280?6:9;try{const e=await Promise.all(Array.from({length:t},(()=>fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")))),o=await Promise.all(e.map((t=>{if(t.ok)return t.json();throw new Error(t.status)})));document.getElementById("content").removeAttribute("hidden"),document.getElementById("loading").style.display="none",console.log(o),o.forEach((t=>{var e;document.querySelector(".random-cocktail__list").insertAdjacentHTML("beforeend",(e=t,localStorage.getItem("favCocktails").includes(`${e.drinks[0].idDrink}`)?`<li class="random-cocktail__item" id="${e.drinks[0].idDrink}">\n  <img class="random-cocktail__image" src="${e.drinks[0].strDrinkThumb}" alt="${e.drinks[0].strCategory}" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext" name="cocktailName">${e.drinks[0].strDrink}</h3><div class="random-cocktail__btn"><button type="button" class="btn btn-secondary">Learn more</button>${r}</div></li></div></div>`:`<li class="random-cocktail__item" id="${e.drinks[0].idDrink}">\n  <img class="random-cocktail__image" src="${e.drinks[0].strDrinkThumb}" alt="${e.drinks[0].strCategory}" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext" name="cocktailName">${e.drinks[0].strDrink}</h3><div class="random-cocktail__btn"><button type="button" class="btn btn-secondary">Learn more</button>${s}</div></li></div></div>`))}))}catch(t){console.log("Error",t)}}window.onload=l();const c={selected:document.querySelector(".selected"),optionsContainer:document.querySelector(".options-container"),optionsList:document.querySelectorAll(".option")};c.selected.addEventListener("click",(()=>{c.optionsContainer.classList.toggle("active")})),c.optionsList.forEach((t=>{t.addEventListener("click",(()=>{c.selected.innerHTML=t.querySelector("label").innerHTML,c.optionsContainer.classList.remove("active")}))}));var d;d=new URL(a("kyEFX").resolve("7kmbu"),import.meta.url).toString();var m;m=new URL(a("kyEFX").resolve("15y1x"),import.meta.url).toString();new URL(a("kyEFX").resolve("8JTkt"),import.meta.url).toString();new URL(a("kyEFX").resolve("a5Rn2"),import.meta.url).toString();var f;f=new URL(a("kyEFX").resolve("h8C2i"),import.meta.url).toString();var p;p=new URL(a("kyEFX").resolve("aqGym"),import.meta.url).toString();const y=document.querySelector(".header-form"),u=(document.querySelector(".header-input"),document.querySelector(".random-cocktail__list"),document.querySelector(".random-cocktail__title"));async function x(t){const e=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${t}`,o=await fetch(e);return(await o.json()).drinks}async function g(t=""){u.textContent="Searching results";let o="";return t?o=t.reduce(((t,e)=>t+`<li class="random-cocktail__item">\n    <img class="random-cocktail__image" src="${e.strDrinkThumb}" alt="${e.strCategory}" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext">${e.strDrink}</h3><div class="random-cocktail__btn"><button type="button" class="btn btn-secondary">Learn more</button><button type="button" class="btn-primary btn">\n    Add to\n    <svg\n      class="btn-primary__icon"\n      viewBox="0 0 19 17"\n      fill="none"\n      xmlns="http://www.w3.org/2000/svg"\n    >\n      <path\n        class="outer"\n        d="M9.5 17L8.1225 15.7771C3.23 11.4507 0 8.59727 0 5.09537C0 2.24196 2.299 0 5.225 0C6.878 0 8.4645 0.750409 9.5 1.93624C10.5355 0.750409 12.122 0 13.775 0C16.701 0 19 2.24196 19 5.09537C19 8.59727 15.77 11.4507 10.8775 15.7864L9.5 17Z"\n        fill="#FD5103"\n      />\n      <path\n        class="inner"\n        d="M9.50005 15.2106L8.38493 14.2452C4.42433 10.8296 1.80957 8.57687 1.80957 5.81221C1.80957 3.55952 3.67067 1.78955 6.03933 1.78955C7.37748 1.78955 8.66178 2.38198 9.50005 3.31816C10.3383 2.38198 11.6226 1.78955 12.9608 1.78955C15.3294 1.78955 17.1905 3.55952 17.1905 5.81221C17.1905 8.57687 14.5758 10.8296 10.6152 14.2525L9.50005 15.2106Z"\n        fill="#FD5103"\n      />\n    </svg>\n  </button></div></li></div></div>`),""):(u.innerHTML="<h2 class='empty-search__title'>Sorry, we didn't find<br> any cocktail for you</h2>",o=`<li><picture >\n          <source\n          media="(min-width: 768px)"\n          srcset="${e(f)}, ${e(p)} 2x"\n          type="image/png"/>\n          <source\n          media="(max-width: 767px)"\n          srcset="${e(d)}, ${e(m)} 2x"\n          type="image/png"/>\n          <img class="userpic" src="${e(d)}" alt="People in the cafe" width="345" height="380"/>\n          </picture>\n          </li>`),o.includes('<li class="random-cocktail__item">')?`<ul class="random-cocktail__list">${o}</ul>`:o}y.addEventListener("submit",(async t=>{t.preventDefault();const e=y.elements.headerinput.value.trim();if(!e)return document.getElementById("rnd-cocktail").innerHTML="",u.textContent="No search results found.",document.getElementById("rnd-cocktail").insertAdjacentHTML("beforeend",await g()),"";const o=await x(e);document.getElementById("rnd-cocktail").innerHTML="",document.getElementById("rnd-cocktail").insertAdjacentHTML("beforeend",await g(o))}));const b=document.querySelector(".searched_coctail.section");b.classList.add("visually-hidden");const h=document.querySelector(".arrow-btn-pagination.previous"),w=document.querySelector(".arrow-btn-pagination.next");h.style.display="none",w.style.display="none";document.querySelectorAll(".hero___search__list .hero__search__item").forEach((t=>{t.addEventListener("click",(t=>{const e=t.target.textContent.toLowerCase();console.log(e),x(e).then((t=>{t||l(),function(t){const e=t;let o,n=1;o=window.innerWidth<768?3:window.innerWidth<1280?6:9;function i(t,e,o){const n=document.querySelector(".random_coctail.section");b.classList.remove("visually-hidden"),n.classList.add("visually-hidden");const i=document.querySelector(".searched__list");i.innerHTML="";const a=e*--o,r=a+e,s=t.slice(a,r).map((t=>`<li class="searched-cocktail__item">\n  <img class="searched-cocktail__image" src="${t.strDrinkThumb}" alt="${t.strCategory}" loading="lazy" width=0 heigth=0/><h3 class="random-cocktail__uppertext">${t.strDrink}</h3><div class="searched-cocktail__btn"><button type="button" class="btn btn-secondary">Learn more</button><button type="button" class="btn-primary btn">\n  Add to\n  <svg\n    class="btn-primary__icon"\n    viewBox="0 0 19 17"\n    fill="none"\n    xmlns="http://www.w3.org/2000/svg"\n  >\n    <path\n      class="outer"\n      d="M9.5 17L8.1225 15.7771C3.23 11.4507 0 8.59727 0 5.09537C0 2.24196 2.299 0 5.225 0C6.878 0 8.4645 0.750409 9.5 1.93624C10.5355 0.750409 12.122 0 13.775 0C16.701 0 19 2.24196 19 5.09537C19 8.59727 15.77 11.4507 10.8775 15.7864L9.5 17Z"\n      fill="#FD5103"\n    />\n    <path\n      class="inner"\n      d="M9.50005 15.2106L8.38493 14.2452C4.42433 10.8296 1.80957 8.57687 1.80957 5.81221C1.80957 3.55952 3.67067 1.78955 6.03933 1.78955C7.37748 1.78955 8.66178 2.38198 9.50005 3.31816C10.3383 2.38198 11.6226 1.78955 12.9608 1.78955C15.3294 1.78955 17.1905 3.55952 17.1905 5.81221C17.1905 8.57687 14.5758 10.8296 10.6152 14.2525L9.50005 15.2106Z"\n      fill="#FD5103"\n    />\n  </svg>\n</button></div></li></div></div>`)).join("");i.insertAdjacentHTML("afterbegin",s)}function a(t,e){const o=document.querySelector(".pagination__list");o.innerHTML="";const n=Math.ceil(t.length/e);for(let t=0;t<n;t++){const e=r(t+1);o.appendChild(e)}}function r(t){const a=document.createElement("li");return a.classList.add("pagination__item"),a.innerText=t,n===t&&a.classList.add("pagination__item--active"),a.addEventListener("click",(()=>{n=t,i(e,o,n),document.querySelector("li.pagination__item--active").classList.remove("pagination__item--active"),a.classList.add("pagination__item--active")})),a}function s(t){h.style.display="block",h.addEventListener("click",(()=>{n=t-1,i(e,o,n)})),w.style.display="block",w.addEventListener("click",(()=>{n=t+1,i(e,o,n)}))}i(e,o,n),e.length>o&&(a(e,o),s(n))}(t)}))}))}));var v,k,N={};v=void 0!==o?o:"undefined"!=typeof window?window:N,k=function(t){if(void 0===t&&void 0===t.document)return!1;var e,o="Success",n="Failure",i="Warning",a="Info",r={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(t){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},l=function(e){return e||(e="head"),null!==t.document[e]||(s('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},c=function(){var t={},e=!1,o=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],o++);for(var n=function(o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e&&"[object Object]"===Object.prototype.toString.call(o[n])?t[n]=c(t[n],o[n]):t[n]=o[n])};o<arguments.length;o++)n(arguments[o]);return t},d=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},m=0,f=function(s,d,f,y){if(!l("body"))return!1;e||p.Notify.init({});var u=c(!0,e,{});if("object"==typeof f&&!Array.isArray(f)||"object"==typeof y&&!Array.isArray(y)){var x={};"object"==typeof f?x=f:"object"==typeof y&&(x=y),e=c(!0,e,x)}var g,b,h=e[s.toLocaleLowerCase("en")];m++,"string"!=typeof d&&(d="Notiflix "+s),e.plainText&&(g=d,(b=t.document.createElement("div")).innerHTML=g,d=b.textContent||b.innerText||""),!e.plainText&&d.length>e.messageMaxLength&&(e=c(!0,e,{closeButton:!0,messageMaxLength:150}),d='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),d.length>e.messageMaxLength&&(d=d.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(h.fontAwesomeIconColor=h.background),e.cssAnimation||(e.cssAnimationDuration=0);var w=t.document.getElementById(r.wrapID)||t.document.createElement("div");if(w.id=r.wrapID,w.style.width=e.width,w.style.zIndex=e.zindex,w.style.opacity=e.opacity,"center-center"===e.position?(w.style.left=e.distance,w.style.top=e.distance,w.style.right=e.distance,w.style.bottom=e.distance,w.style.margin="auto",w.classList.add("nx-flex-center-center"),w.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",w.style.display="flex",w.style.flexWrap="wrap",w.style.flexDirection="column",w.style.justifyContent="center",w.style.alignItems="center",w.style.pointerEvents="none"):"center-top"===e.position?(w.style.left=e.distance,w.style.right=e.distance,w.style.top=e.distance,w.style.bottom="auto",w.style.margin="auto"):"center-bottom"===e.position?(w.style.left=e.distance,w.style.right=e.distance,w.style.bottom=e.distance,w.style.top="auto",w.style.margin="auto"):"right-bottom"===e.position?(w.style.right=e.distance,w.style.bottom=e.distance,w.style.top="auto",w.style.left="auto"):"left-top"===e.position?(w.style.left=e.distance,w.style.top=e.distance,w.style.right="auto",w.style.bottom="auto"):"left-bottom"===e.position?(w.style.left=e.distance,w.style.bottom=e.distance,w.style.top="auto",w.style.right="auto"):(w.style.right=e.distance,w.style.top=e.distance,w.style.left="auto",w.style.bottom="auto"),e.backOverlay){var v=t.document.getElementById(r.overlayID)||t.document.createElement("div");v.id=r.overlayID,v.style.width="100%",v.style.height="100%",v.style.position="fixed",v.style.zIndex=e.zindex-1,v.style.left=0,v.style.top=0,v.style.right=0,v.style.bottom=0,v.style.background=h.backOverlayColor||e.backOverlayColor,v.className=e.cssAnimation?"nx-with-animation":"",v.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(r.overlayID)||t.document.body.appendChild(v)}t.document.getElementById(r.wrapID)||t.document.body.appendChild(w);var k=t.document.createElement("div");k.id=e.ID+"-"+m,k.className=e.className+" "+h.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!=typeof f?"nx-with-close-button":"")+" "+("function"==typeof f?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),k.style.fontSize=e.fontSize,k.style.color=h.textColor,k.style.background=h.background,k.style.borderRadius=e.borderRadius,k.style.pointerEvents="all",e.rtl&&(k.setAttribute("dir","rtl"),k.classList.add("nx-rtl-on")),k.style.fontFamily='"'+e.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',e.cssAnimation&&(k.style.animationDuration=e.cssAnimationDuration+"ms");var N="";if(e.closeButton&&"function"!=typeof f&&(N='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+h.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)k.innerHTML='<i style="color:'+h.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+h.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+d+"</span>"+(e.closeButton?N:"");else{var C="";s===o?C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':s===n?C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':s===i?C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':s===a&&(C='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),k.innerHTML=C+'<span class="nx-message nx-with-icon">'+d+"</span>"+(e.closeButton?N:"")}else k.innerHTML='<span class="nx-message">'+d+"</span>"+(e.closeButton?N:"");if("left-bottom"===e.position||"right-bottom"===e.position){var _=t.document.getElementById(r.wrapID);_.insertBefore(k,_.firstChild)}else t.document.getElementById(r.wrapID).appendChild(k);var L=t.document.getElementById(k.id);if(L){var I,S,A=function(){L.classList.add("nx-remove");var e=t.document.getElementById(r.overlayID);e&&w.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(I)},E=function(){if(L&&null!==L.parentNode&&L.parentNode.removeChild(L),w.childElementCount<=0&&null!==w.parentNode){w.parentNode.removeChild(w);var e=t.document.getElementById(r.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(S)};if(e.closeButton&&"function"!=typeof f&&t.document.getElementById(k.id).querySelector("span.nx-close-button").addEventListener("click",(function(){A();var t=setTimeout((function(){E(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"==typeof f||e.clickToClose)&&L.addEventListener("click",(function(){"function"==typeof f&&f(),A();var t=setTimeout((function(){E(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!=typeof f){var D=function(){I=setTimeout((function(){A()}),e.timeout),S=setTimeout((function(){E()}),e.timeout+e.cssAnimationDuration)};D(),e.pauseOnHover&&(L.addEventListener("mouseenter",(function(){L.classList.add("nx-paused"),clearTimeout(I),clearTimeout(S)})),L.addEventListener("mouseleave",(function(){L.classList.remove("nx-paused"),D()})))}}if(e.showOnlyTheLastOne&&m>0)for(var T=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+m+"])"),z=0;z<T.length;z++){var W=T[z];null!==W.parentNode&&W.parentNode.removeChild(W)}e=c(!0,e,u)},p={Notify:{init:function(o){e=c(!0,r,o),function(e,o){if(!l("head"))return!1;if(null!==e()&&!t.document.getElementById(o)){var n=t.document.createElement("style");n.id=o,n.innerHTML=e(),t.document.head.appendChild(n)}}(d,"NotiflixNotifyInternalCSS")},merge:function(t){if(!e)return s("You have to initialize the Notify module before call Merge function."),!1;e=c(!0,e,t)},success:function(t,e,n){f(o,t,e,n)},failure:function(t,e,o){f(n,t,e,o)},warning:function(t,e,o){f(i,t,e,o)},info:function(t,e,o){f(a,t,e,o)}}};return"object"==typeof t.Notiflix?c(!0,t.Notiflix,{Notify:p.Notify}):{Notify:p.Notify}},"function"==typeof define&&define.amd?define([],(function(){return k(v)})):"object"==typeof N?N=k(v):v.Notiflix=k(v);async function C(t){const e=await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${t}`);if(e.ok)return e.json();throw new Error}const _={cocktailsDiv:document.querySelector("#rnd-cocktail")};let L,I,S,A;console.log(JSON.parse(localStorage.getItem("favCocktails"))),localStorage.getItem("favCocktails")||localStorage.setItem("favCocktails",JSON.stringify([])),_.cocktailsDiv.addEventListener("click",(async function(t){if(console.dir(t),t.target.classList.contains("btn-add-to")||t.target.parentNode.classList.contains("btn-add-to")){t.target.classList.contains("btn-add-to")?(I=t.target,L=t.target.parentNode,console.log(I),console.dir(t.target.parentNode.parentNode),S=t.target.parentNode.parentNode.id):(I=t.target.parentNode.parentNode,L=t.target.parentNode.parentNode.parentNode,S=t.target.parentNode.parentNode.parentNode.parentNode.id),I.setAttribute("disabled","");const e=await C(S);try{console.log(e);const t=JSON.parse(localStorage.getItem("favCocktails"));localStorage.getItem("favCocktails").includes(`${e.drinks[0].idDrink}`)?console.log("ALREADY IN ARRAY!!!"):(t.push(e.drinks[0]),localStorage.setItem("favCocktails",JSON.stringify(t)),A=t[t.length-1].strDrink,N.Notify.success(`Cocktail ${A} added to your favorites!✅`),I.remove(),L.insertAdjacentHTML("beforeend",r))}catch{console.log("ERROR>>",error.message),N.Notify.failure("Some error has occurred. Try in a few minutes.❌")}}else if(t.target.classList.contains("btn-remove-from")||t.target.parentNode.classList.contains("btn-remove-from")){t.target.classList.contains("btn-remove-from")?(I=t.target,L=t.target.parentNode):(I=t.target.parentNode.parentNode,L=t.target.parentNode.parentNode.parentNode),I.setAttribute("disabled",""),console.log("click on remove");const e=JSON.parse(localStorage.getItem("favCocktails"));console.log(e),console.log(Number(t.target.parentNode.parentNode.id)),e.splice(e.findIndex((e=>(A=e.strDrink,Number(e.idDrink)===Number(t.target.parentNode.parentNode.id)))),1),I.remove(),L.insertAdjacentHTML("beforeend",s),localStorage.setItem("favCocktails",JSON.stringify(e)),N.Notify.success(`Cocktail ${A} was removed from your favorites!✅`)}}));
//# sourceMappingURL=index.26d7f145.js.map
