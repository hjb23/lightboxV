"use strict";var lightboxa=function(){var t=document.querySelectorAll(".lightbox-v"),e=[],n=[],i=[],o={dataName:"data-lightbox-v",dataTitle:"data-title",dataAlt:"data-alt",arrows:"lightboxv__arrows",next:"lightboxv__next",prev:"lightboxv__prev",nextInside:"lightboxv__inside--next",prevInside:"lightboxv__inside--prev",close:"lightboxv__close",inside:"lightboxv__inside"},r=void 0;r="undefined"==typeof lightBoxVOptions?[{maxWidth:"",imageCount:!0,fadeDuration:10,border:!1,noLoop:!0,expand:!1,arrowsSm:!1}]:[lightBoxVOptions],document.body.insertAdjacentHTML("beforeend",'<div class="lightboxv"> </div>');var l=document.querySelector(".lightboxv");function s(t){t.preventDefault(),document.querySelector(".lightboxv").classList.add("lightboxv--show"),document.body.classList.toggle("js-lightbox-open");var e=this.getAttribute("href"),r=this.getAttribute(o.dataName),s=n.find(function(t){return t.group===r}).details,d=void 0,c=(s.find(function(t){return t.img===e&&(d=s.indexOf(t),!0)}),{groupDetails:s,currentIndex:d,currentItem:s[d]});i=c,l.innerHTML='\n    <div class="lightboxv__inside">\n      <div class="lightboxv__inside__container">\n        <img src="./dist/images/puff.svg" class="lightboxv__inside__img lightboxv__inside__img--loader" style="opacity: 1;">\n      </div>\n    </div>',setTimeout(function(){a(i.currentItem)},500)}function a(t){null===t.title&&(t.title="");var e;e='<div class="lightboxv__inside '+(r[0].arrowsSm?"lightboxv__arrows-sm":"")+"   "+(i.groupDetails.length-1===i.currentIndex&&r[0].noLoop?"lightboxv__no__next":"")+" "+(0===i.currentIndex&&r[0].noLoop?"lightboxv__no__prev":"")+'">\n <div class="lightboxv__inside__container" '+(r[0].maxWidth?'style="width:'+r[0].maxWidth+'px"':"")+" >\n\n "+(r[0].expand?' <div class="lightboxv__expand"></div>':"")+"\n\n"+(i.groupDetails.length>1?'<div class ="lightboxv__prev lightboxv__arrows">\n<div class="lightboxv__arrows__inside lightboxv__inside--prev">\n</div>\n</div>':"")+'\n\n <img src ="'+t.img+'" class="lightboxv__inside__img lightboxv__inside__img--border" style="opacity: 0"\n alt="'+t.alt+'"\n >\n\n\n'+(i.groupDetails.length>1?'<div class ="lightboxv__next lightboxv__arrows\n          ">\n<div class="lightboxv__arrows__inside lightboxv__inside--next">\n    \n</div></div>':"")+'\n</div>\n<div class="lightboxv__details">\n'+(r[0].imageCount?'\n<p class="lightboxv__count">'+(i.currentIndex+1)+" of "+i.groupDetails.length+"</p>":"")+'\n    <p class="lightboxv__title">'+t.title+'</p>\n   <span class="lightboxv__close"></span>\n</div>\n</div>',setTimeout(function(){document.querySelector(".lightboxv__inside__img").style.opacity="1"},r[0].fadeDuration),l.innerHTML=e;var n=document.querySelector(".lightboxv__inside__img--border");r[0].border&&n.classList.add("lightboxv__border")}!function(){t.forEach(function(t){var n={group:t.getAttribute(o.dataName),title:t.getAttribute(o.dataTitle),img:t.getAttribute("href"),alt:t.getAttribute(o.dataAlt)};e.push(n)});var i=[];e.forEach(function(t){i[t.group]=i[t.group]||{};var e=i[t.group];0==Object.keys(e).length&&n.push(e),e.group=t.group,e.details=e.details||[],e.details.push({title:t.title,img:t.img,alt:t.alt})})}(),t.forEach(function(t){return t.addEventListener("click",s)});var d=function(t){i.currentIndex<i.groupDetails.length-1?(i.currentIndex++,a(i.groupDetails[i.currentIndex])):(i.currentIndex=i.groupDetails.length)&&(i.currentIndex=0,a(i.groupDetails[0]),t&&(i.currentIndex=i.groupDetails.length-1,a(i.groupDetails[i.currentIndex])))},c=function(t){i.currentIndex<=i.groupDetails.length-1&&(i.currentIndex>0?(i.currentIndex--,a(i.groupDetails[i.currentIndex])):(i.currentIndex=i.groupDetails.length-1,a(i.groupDetails[i.currentIndex]),t&&1===i.currentIndex&&(i.currentIndex=0,a(i.groupDetails[i.currentIndex]))))},u=function(t){!1===r[0].noLoop?"next"===t?d():"prev"===t&&c():"next"===t?d(!0):"prev"===t&&c(!0)},g=function(){l.innerHTML=null,l.classList.remove("lightboxv--show"),document.body.classList.toggle("js-lightbox-open")};l.addEventListener("click",function(t){t.target.classList.contains(o.nextInside)?u("next"):t.target.classList.contains(o.prevInside)?u("prev"):t.target.classList.contains(o.close)?g():t.target.classList.contains(o.inside)?g():t.target.classList.contains("lightboxv__expand")&&document.querySelector(".lightboxv__inside").classList.toggle("lightboxv__expand__img")});var v=document.querySelector(".lightboxv");v.addEventListener("touchstart",function(t){_=t.touches[0].clientX,x=t.touches[0].clientY},!1),v.addEventListener("touchmove",function(t){if(null===_)return;if(null===x)return;var e=t.touches[0].clientX,n=t.touches[0].clientY,i=_-e,o=x-n;Math.abs(i)>Math.abs(o)?u(i>0?"next":"prev"):o>0?console.log("swiped up"):console.log("swiped down");_=null,x=null,t.preventDefault()},!1);var _=null,x=null;var h=0,p=void 0,b=void 0;v.addEventListener("mousedown",function(t){p=t.clientX,t.clientY,h=0},!1),v.addEventListener("mousemove",function(t){h=1},!1),v.addEventListener("mouseup",function(t){b=t.clientX,t.clientY,0===h||1===h&&(p>b+50?u("next"):p<b&&u("prev"))},!1)}();