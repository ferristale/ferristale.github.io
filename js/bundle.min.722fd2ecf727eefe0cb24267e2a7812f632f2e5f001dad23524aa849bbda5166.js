$(window).scroll(function(){$(window).scrollTop()>500?$("#rocket").addClass("show"):$("#rocket").removeClass("show")}),$("#rocket").click(function(){return $("#rocket").addClass("launch"),$("html, body").animate({scrollTop:0},500,function(){$("#rocket").removeClass("show launch")}),!1}),function(){"use strict";console.log("Theme switcher script loaded");const e=["light","dark","auto"],i="theme-preference";let t=0,o=window.matchMedia("(prefers-color-scheme: dark)");function c(){try{const t=localStorage.getItem(i);return e.includes(t)?t:"auto"}catch{return"auto"}}function l(e){try{localStorage.setItem(i,e)}catch{console.warn("Could not store theme preference")}}function s(e){return e==="auto"?o.matches?"dark":"light":e}function n(e){const t=s(e);console.log("Applying theme:",e,"-> effective:",t),document.documentElement.setAttribute("data-theme",t),l(e),d(e)}function d(e){const t=document.getElementById("theme-switcher");if(!t)return;const n=t.querySelector(".theme-icon");if(!n)return;const o=s(e);e==="auto"?(n.textContent="⚡",t.title="Theme: Auto (follows system)"):o==="dark"?(n.textContent="🌙",t.title="Theme: Dark"):(n.textContent="☀️",t.title="Theme: Light")}function u(){t=(t+1)%e.length;const s=e[t];console.log("Cycling to theme:",s),n(s)}function a(){console.log("Creating theme switcher button");const t=document.getElementById("theme-switcher");t&&t.remove();const e=document.createElement("button");e.id="theme-switcher",e.className="theme-switcher-btn",e.setAttribute("aria-label","Toggle theme"),e.style.cssText=`
            position: fixed !important;
            top: 20px !important;
            right: 20px !important;
            z-index: 99999 !important;
            width: 50px !important;
            height: 50px !important;
            border-radius: 50% !important;
            border: 2px solid #ddd !important;
            background: #fff !important;
            color: #333 !important;
            font-size: 20px !important;
            cursor: pointer !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2) !important;
            transition: all 0.3s ease !important;
        `;const n=document.createElement("span");return n.className="theme-icon",e.appendChild(n),e.addEventListener("click",u),document.body.appendChild(e),console.log("Button created and appended to body"),e}function r(){console.log("Initializing theme system");const s=c();t=e.indexOf(s),n(s),document.body?a():document.addEventListener("DOMContentLoaded",a),o.addEventListener("change",function(){const s=e[t];s==="auto"&&(console.log("System theme changed, updating..."),n("auto"))}),console.log("Theme system initialized")}function h(){if(document.querySelector('[data-theme="dark"]'))return;const e=document.createElement("style");e.textContent=`
            [data-theme="dark"] {
                --bg-color: #1a1a1a !important;
                --text-color: #e8e8e8 !important;
                --border-color: #374151 !important;
            }
            [data-theme="dark"] body {
                background-color: var(--bg-color) !important;
                color: var(--text-color) !important;
            }
            [data-theme="dark"] .theme-switcher-btn {
                background: #333 !important;
                color: #fff !important;
                border-color: #555 !important;
            }
        `,document.head.appendChild(e)}h(),document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r()}()