var d={exports:{}};(function(u,s){function o(){var t=document.querySelector("[data-toggle-theme]");(function(e=localStorage.getItem("theme")){localStorage.getItem("theme")&&(document.documentElement.setAttribute("data-theme",e),t&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(a=>{a.classList.add(t.getAttribute("data-act-class"))}))})(),t&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(e=>{e.addEventListener("click",function(){var a=e.getAttribute("data-toggle-theme");if(a){var c=a.split(",");document.documentElement.getAttribute("data-theme")==c[0]?c.length==1?(document.documentElement.removeAttribute("data-theme"),localStorage.removeItem("theme")):(document.documentElement.setAttribute("data-theme",c[1]),localStorage.setItem("theme",c[1])):(document.documentElement.setAttribute("data-theme",c[0]),localStorage.setItem("theme",c[0]))}[...document.querySelectorAll("[data-toggle-theme]")].forEach(r=>{r.classList.toggle(this.getAttribute("data-act-class"))})})})}function l(){(function(t=localStorage.getItem("theme")){if(t!=null&&t!="")if(localStorage.getItem("theme")&&localStorage.getItem("theme")!=""){document.documentElement.setAttribute("data-theme",t);var e=document.querySelector("[data-set-theme='"+t.toString()+"']");e&&([...document.querySelectorAll("[data-set-theme]")].forEach(a=>{a.classList.remove(a.getAttribute("data-act-class"))}),e.getAttribute("data-act-class")&&e.classList.add(e.getAttribute("data-act-class")))}else{var e=document.querySelector("[data-set-theme='']");e.getAttribute("data-act-class")&&e.classList.add(e.getAttribute("data-act-class"))}})(),[...document.querySelectorAll("[data-set-theme]")].forEach(t=>{t.addEventListener("click",function(){document.documentElement.setAttribute("data-theme",this.getAttribute("data-set-theme")),localStorage.setItem("theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("[data-set-theme]")].forEach(e=>{e.classList.remove(e.getAttribute("data-act-class"))}),t.getAttribute("data-act-class")&&t.classList.add(t.getAttribute("data-act-class"))})})}function m(){(function(t=localStorage.getItem("theme")){if(localStorage.getItem("theme")){document.documentElement.setAttribute("data-theme",t);var e=document.querySelector("select[data-choose-theme] [value='"+t.toString()+"']");e&&[...document.querySelectorAll("select[data-choose-theme] [value='"+t.toString()+"']")].forEach(a=>{a.selected=!0})}})(),document.querySelector("select[data-choose-theme]")&&[...document.querySelectorAll("select[data-choose-theme]")].forEach(t=>{t.addEventListener("change",function(){document.documentElement.setAttribute("data-theme",this.value),localStorage.setItem("theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("select[data-choose-theme] [value='"+localStorage.getItem("theme")+"']")].forEach(e=>{e.selected=!0})})})}function n(t=!0){t===!0?document.addEventListener("DOMContentLoaded",function(e){o(),m(),l()}):(o(),m(),l())}u.exports={themeChange:n}})(d);d.exports.themeChange();