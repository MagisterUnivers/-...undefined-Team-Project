!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=r.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},r.parcelRequired7c6=a),a.register("i8Q71",(function(e,t){var r=document.querySelector("[data-burger-menu-toggle]"),n=document.querySelector("[data-burger-menu]");r.addEventListener("click",(function(){r.classList.toggle("is-open"),n.classList.toggle("is-open"),r.setAttribute("aria-expanded",!0),o.classList.toggle("unscroll")}));var o=document.querySelector("body");var a=document.querySelector("[data-burger-menu-arrow]"),c=document.querySelector("[data-burger-menu-favorite]");a.addEventListener("click",(function(){c.classList.toggle("burger-favorite__items-display")}))})),a.register("hH1K1",(function(t,r){var n,o,c,i,s=a("bpxeT"),l=a("2TvXO"),d=a("h6c0i"),u=a("gK8BF"),f=a("4s6iC"),m=a("3GCax"),p=document.querySelector("#rnd-cocktail");function g(){return(g=e(s)(e(l).mark((function t(r){var a,s,p;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.target.closest(".btn-add-to")){e.next=11;break}return o=r.target.closest(".btn-add-to"),n=r.target.closest(".random-cocktail__btn"),c=r.target.closest(".random-cocktail__item").id,o.setAttribute("disabled",""),e.next=7,(0,u.getCocktail)(c);case 7:a=e.sent;try{(s=JSON.parse(localStorage.getItem("favCocktails"))).push(a.drinks[0]),localStorage.setItem("favCocktails",JSON.stringify(s)),i=s[s.length-1].strDrink,d.Notify.success("Cocktail ".concat(i," added to your favorites😍!")),o.remove(),n.insertAdjacentHTML("beforeend",f.REMOVE_BTN)}catch(e){d.Notify.failure("Some error has occurred. Try in a few minutes.❌")}e.next=12;break;case 11:r.target.closest(".btn-remove-from")?(o=r.target.closest(".btn-remove-from"),n=r.target.closest(".random-cocktail__btn"),o.setAttribute("disabled",""),(p=JSON.parse(localStorage.getItem("favCocktails"))).splice(p.findIndex((function(e){return i=e.strDrink,Number(e.idDrink)===Number(r.target.parentNode.parentNode.id)})),1),o.remove(),n&&n.insertAdjacentHTML("beforeend",f.ADD_BTN),localStorage.setItem("favCocktails",JSON.stringify(p)),d.Notify.info("Cocktail ".concat(i," was removed from your favorites🙄!"))):r.target.classList.contains("btn-learn-more")&&(0,m.onBtnAddFavClick)(r);case 12:case"end":return e.stop()}}),t)})))).apply(this,arguments)}localStorage.getItem("favCocktails")||localStorage.setItem("favCocktails",JSON.stringify([])),p.addEventListener("click",(function(e){return g.apply(this,arguments)}))})),a.register("gK8BF",(function(r,n){t(r.exports,"getCocktail",(function(){return s}));var o=a("bpxeT"),c=a("2TvXO"),i="https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";function s(e){return l.apply(this,arguments)}function l(){return(l=e(o)(e(c).mark((function t(r){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i).concat(r));case 2:if(!(n=e.sent).ok){e.next=7;break}return e.abrupt("return",n.json());case 7:throw new Error;case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}})),a.register("3GCax",(function(r,n){t(r.exports,"onBtnAddFavClick",(function(){return _}));var o,c,i=a("bpxeT"),s=a("2TvXO"),l=a("6alNL"),d=a("h6c0i"),u=a("4s6iC"),f=(document.querySelector(".modal-cocktails-group"),document.querySelector("#modal-cocktails"),document.querySelector(".btn-secondary"),document.querySelector(".modal-cocktails-close")),m=document.querySelector(".backdrop2"),p=document.querySelector("#modal-btn__remove-fav2"),g=document.querySelector("#modal-btn__add-to-fav2"),y=document.querySelector("#rnd-cocktail");function k(){document.querySelector("body").classList.add("no-scroll"),m.classList.toggle("is-hidden")}function v(e){return b.apply(this,arguments)}function b(){return(b=e(i)(e(s).mark((function t(r){var n,o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(r));case 2:return n=e.sent,e.next=5,n.json();case 5:return o=e.sent.drinks,e.abrupt("return",o[0]);case 7:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function _(e){return h.apply(this,arguments)}function h(){return(h=e(i)(e(s).mark((function t(r){var n,a,i,l,d,u,f,m;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.target.closest("li").getAttribute("id"),e.next=3,v(n);case 3:a=e.sent,o=a,i='<div class="modal__cocktail">\n  <h3 class="modal__title theme_text_color" id=\''.concat(a.idDrink,"'>").concat(a.strDrink,'</h3>\n  <div class="modal__instructions-hold">\n    <h4 class="modal__instructions theme_text_color">INSTRUCTION:</h4>\n    <p class="instruction theme_modal_text_color ">').concat(a.strInstructions,'</p>\n  </div>\n  <img\n      class="modal__picture"\n      src="').concat(a.strDrinkThumb,'"\n      alt=""\n      width="280"\n      height="280"\n    />\n  <div class="modal__ingredients-hold">\n    \n    <h4 class="modal__ingredients theme_text_color">INGREDIENTS</h4>\n    <p class="modal__description theme_text_color">Per cocktail</p>\n    <ul class="ingredients__list theme_modal_text_color"></ul>\n  </div>\n</div>'),(l=document.querySelector(".modal-cocktails-group")).insertAdjacentHTML("afterbegin",i),c=document.querySelector(".modal__title"),x(),d=l.querySelector(".ingredients__list"),u=1;case 12:if(!(u<=15)){e.next=23;break}if(!(f=a["strIngredient"+u])){e.next=18;break}(m=document.createElement("li")).classList.add("ingredient__item"),m.setAttribute("data-ingredient",f),m.setAttribute("data-name","ingredient"),m.innerHTML='<span class="ingredientsBlack theme_text_color ">✶ </span>'.concat(f),d.appendChild(m),e.next=19;break;case 18:return e.abrupt("break",23);case 19:d.addEventListener("click",S);case 20:u++,e.next=12;break;case 23:k();case 24:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function S(e){var t=e.target.closest("li");if(t){var r=t.textContent.trim().substring(2);(0,l.getIngredientData)(r),l.modalIngredients.classList.toggle("is-hidden")}}function x(){JSON.parse(localStorage.getItem("favCocktails")).find((function(e){return Number(e.idDrink)===Number(c.id)}))?(p.style.display="block",g.style.display="none"):(p.style.display="none",g.style.display="block")}p.style.display="none",g.addEventListener("click",(function(){p.style.display="block",g.style.display="none";var e=JSON.parse(localStorage.getItem("favCocktails"));e.push(o),localStorage.setItem("favCocktails",JSON.stringify(e));var t=y.querySelector('[id = "'.concat(o.idDrink,'"]')).querySelector(".random-cocktail__btn");t.querySelector(".btn-add-to").remove(),t.insertAdjacentHTML("beforeend",u.REMOVE_BTN),d.Notify.success("Cocktail ".concat(o.strDrink," added to your favorites😍!"))})),p.addEventListener("click",(function(){p.style.display="none",g.style.display="block";var e=JSON.parse(localStorage.getItem("favCocktails"));e.splice(e.findIndex((function(e){return Number(e.idDrink)===Number(c.id)})),1),localStorage.setItem("favCocktails",JSON.stringify(e));var t=y.querySelector('[id = "'.concat(o.idDrink,'"]')).querySelector(".random-cocktail__btn");t.querySelector(".btn-remove-from").remove(),t.insertAdjacentHTML("beforeend",u.ADD_BTN),d.Notify.info("Cocktail ".concat(o.strDrink," was removed from your favorites🙄!"))})),f.addEventListener("click",(function(){document.querySelector(".modal__cocktail").innerHTML="",k(),document.querySelector("body").classList.remove("no-scroll")}))}))}();
//# sourceMappingURL=index.4fbbf747.js.map
