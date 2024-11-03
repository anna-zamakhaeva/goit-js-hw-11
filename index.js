import{S as m,i as s}from"./assets/vendor-BRQ76Mty.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="46813790-fc5a4239c1de7fc02896691e1",h="https://pixabay.com/api/";function p(a){const o=new URLSearchParams({key:f,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${h}?${o}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}const c=document.querySelector(".loader");function d(a){return a.map(({webformatURL:o,largeImageURL:t,tags:n,likes:e,views:r,comments:i,downloads:u})=>`
        <li class="gallery-item">
            <div class="thumb">
            <a class="gallery-link" href="${t}">
            <img class="gallery-image" src="${o}" alt="${n}"/>
            </a>
            </div>
            <div class="image-card">
                <p><b>Likes</b> ${e}</p> 
                <p><b>Views</b> ${r}</p> 
                <p><b>Comments</b> ${i}</p> 
                <p><b>Downloads</b> ${u}</p> 
            </div>
        </li>
    `).join("")}function g(){c.style.display="block"}function y(){c.style.display="none"}const l=document.querySelector(".search-form"),b=document.querySelector(".gallery");let L=new m(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});l.addEventListener("submit",S);function S(a){a.preventDefault(),console.log(a.currentTarget.elements),g();const o=a.currentTarget.elements.search.value;if(console.log(o),!o.trim()){s.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3,backgroundColor:"pink"});return}p(o).then(t=>{console.log("then",t),b.innerHTML=d(t.hits),t.hits.length<=0&&s.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3,backgroundColor:"pink"}),L.refresh()}).catch(t=>{console.log("catch",t)}).finally(()=>y()),l.reset()}
//# sourceMappingURL=index.js.map
