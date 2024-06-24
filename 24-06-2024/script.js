import { getHeaderHTML } from "./components/header.js";
import { getAsideHTML } from "./components/aside.js";
import { getMainHTML } from "./components/main.js";
import { getSectionHTML } from "./components/sections.js";
import { getFooterHTML } from "./components/footer.js";


const appEl = document.querySelector("#app");

window.addEventListener("DOMContentLoaded", () => {


    if (appEl) {
        // dentro la function sono sicuro che appEl sia un elemento caricato nel dom
        renderPage(appEl);
    }
});

async function renderPage(container) {

    const header = getHeaderHTML();
    const aside = getAsideHTML();
    const main = await getMainHTML();
    const right = getSectionHTML();
    const footer = getFooterHTML();

    const html = header + aside + main + right + footer;

    appEl.innerHTML = html;
}