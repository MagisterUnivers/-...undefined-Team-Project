!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var i=r("4s6iC"),o=r("h6c0i"),a=document.querySelector(".fav-ingredients__list");function l(){var e=JSON.parse(localStorage.getItem("favIngredients"))||[];a.innerHTML="";var t=!0,n=!1,r=void 0;try{for(var l,s=function(t,n){var r=n.value,l=document.createElement("li");l.classList.add("fav-ingredients__item"),l.innerHTML='<h3 class="fav-ingredient__name">'.concat(r.strIngredient,'</h3>\n    <h4 class="fav-ingredient__type">').concat(r.strType,'</h4>\n    <div class="fav-ingredient__btn">\n      ').concat(i.LEARN_MORE_BTN).concat(i.REMOVE_BTN,"\n    </div>"),l.querySelector(".btn-remove-from").addEventListener("click",(function(){var t=e.findIndex((function(e){return e.strIngredient===r.strIngredient&&e.strType===r.strType}));t>-1&&(e.splice(t,1),localStorage.setItem("favIngredients",JSON.stringify(e)),l.remove(),o.Notify.info("".concat(r.strIngredient," was removed from your favorites🙄!")),c())})),a.appendChild(l)},d=e[Symbol.iterator]();!(t=(l=d.next()).done);t=!0)s(0,l)}catch(e){n=!0,r=e}finally{try{t||null==d.return||d.return()}finally{if(n)throw r}}function c(){var t=document.querySelector(".footer"),n=document.querySelector(".fav-ingredients__default");e.length?e.length<4?(t.style.position="absolute",t.style.bottom="0",t.style.width="100%"):(t.style.position="static",n.style.display="none"):(t.style.position="absolute",t.style.bottom="0",t.style.width="100%",n.style.display="block")}c()}l(),window.addEventListener("storage",(function(e){"favIngredients"===e.key&&l()}))}();
//# sourceMappingURL=fav_ingredients.7fc5de0c.js.map
