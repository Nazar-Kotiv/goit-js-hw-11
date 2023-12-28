import{S as d,i as u}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const f="41495993-e4e29dd1119c53de35b82b765",h=document.getElementById("search-form"),m=document.getElementById("search-input"),a=document.getElementById("gallery"),c=document.getElementById("loader");h.addEventListener("submit",p);function p(n){n.preventDefault();const o=m.value.trim();o!==""&&(L(),w(),y(o).then(e=>{e.hits.length===0?l("Sorry, there are no images matching your search query. Please try again!"):(g(e.hits),b())}).catch(e=>{l("An error occurred while fetching images. Please try again later."),console.error("Error fetching images:",e)}).finally(()=>{v()}))}function y(n){const o=`https://pixabay.com/api/?key=${f}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(e=>e.json())}function g(n){const o=n.map(e=>`
        <a href="${e.largeImageURL}" class="gallery-item" data-lightbox="gallery">
          <img src="${e.webformatURL}" alt="${e.tags}">
          <div class="info">
            <p>${e.likes} likes</p>
            <p>${e.views} views</p>
            <p>${e.comments} comments</p>
            <p>${e.downloads} downloads</p>
          </div>
        </a>
      `).join("");a.innerHTML=o}function L(){a.innerHTML=""}function b(){new d(".gallery a").refresh()}function w(){c.style.display="block"}function v(){c.style.display="none"}function l(n){u.error({title:"Error",message:n,position:"topCenter",timeout:5e3})}
//# sourceMappingURL=commonHelpers.js.map
