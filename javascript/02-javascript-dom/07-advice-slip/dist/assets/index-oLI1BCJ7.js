(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=document.querySelector("blockquote > p"),i=document.getElementById("btn"),d=document.getElementById("span"),u="https://api.adviceslip.com/advice";i.style.display="none";i.addEventListener("click",()=>{window.location.reload()});fetch(u).then(o=>o.json()).then(o=>{d.innerText=`#${o.slip.id}`,l.innerText=`"${o.slip.advice}"`});i.style.display="block";