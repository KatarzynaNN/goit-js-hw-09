const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),r=document.querySelector("body");let o=null;e.addEventListener("click",(()=>{o=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.setAttribute("disabled")})),t.addEventListener("click",(()=>{clearInterval(o),e.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.57dcc7de.js.map
