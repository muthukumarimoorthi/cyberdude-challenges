(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const l=document.forms.register,c=l.elements.fullName,a=l.elements.mobileNumber,u=i=>{i.preventDefault();const r=new FormData(l),t=Object.fromEntries(r);console.log(t),c.value.length>2&&c.value.length<=22?console.log("Nice Name"):alert("Please enter your correct name!!!"),a.value.length<10||a.value.length>10?alert("Please enter your correct number!!! "):confirm("We will send all updates in your phone"),function(){const n=`
      Customer Name : ${t.fullName}
      DOB           : ${t.date} ${t.month} ${t.year}
      Email ID      : ${t.email}
      Mobile No     : ${t.mobileNumber}
      Package       : ${t.packageMonths}
      Disability    : ${t.yesOrNoRadio} 
    `;console.log(n)}(),confirm(`Thank you ${t.fullName} for choosing us`)};l.addEventListener("submit",u);
