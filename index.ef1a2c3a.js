window.onload=async function(){let n;n=window.innerWidth<768?3:window.innerWidth<1280?6:9;try{const t=await Promise.all(Array.from({length:n},(()=>fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")))),o=await Promise.all(t.map((n=>{if(n.ok)return n.json();throw new Error(n.status)})));console.log(o),o.forEach((n=>{var t;document.getElementById("rnd-cocktail").insertAdjacentHTML("beforeend",`<div class="photo-card">\n  <img class="photo-card__image" src="${(t=n).drinks[0].strDrinkThumb}" alt="${t.drinks[0].strCategory}" loading="lazy" width=0 heigth=0/><h3 class="photo-card__uppertext">${t.drinks[0].strDrink}</h3><div class="photo-card__btn"><button type="button" class="btn btn-secondary">Learn more</button><button type="button" class="btn btn-primary">\n  Remove\n  <svg\n    class="btn-primary__icon"\n    viewBox="0 0 19 17"\n    fill="none"\n    xmlns="http://www.w3.org/2000/svg"\n  >\n    <path\n      class="inner"\n      d="M9.5 17L8.1225 15.7771C3.23 11.4507 0 8.59727 0 5.09537C0 2.24196 2.299 0 5.225 0C6.878 0 8.4645 0.750409 9.5 1.93624C10.5355 0.750409 12.122 0 13.775 0C16.701 0 19 2.24196 19 5.09537C19 8.59727 15.77 11.4507 10.8775 15.7864L9.5 17Z"\n      fill="#FD5103"\n    />\n    <path\n      class="outer-remove"\n      d="M9.50005 15.2106L8.38493 14.2452C4.42433 10.8296 1.80957 8.57687 1.80957 5.81221C1.80957 3.55952 3.67067 1.78955 6.03933 1.78955C7.37748 1.78955 8.66178 2.38198 9.50005 3.31816C10.3383 2.38198 11.6226 1.78955 12.9608 1.78955C15.3294 1.78955 17.1905 3.55952 17.1905 5.81221C17.1905 8.57687 14.5758 10.8296 10.6152 14.2525L9.50005 15.2106Z"\n      fill="#FD5103"\n    />\n  </svg>\n</button></div></div></div></div>`)}))}catch(n){console.log("Error",n)}};
//# sourceMappingURL=index.ef1a2c3a.js.map
