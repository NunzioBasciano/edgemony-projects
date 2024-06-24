import { getHeaderHTML } from "./components/header.js";
import { getMainHTML } from "./components/main.js";
import { getFooterHTML } from "./components/footer.js";


const appEl = document.querySelector("#app");

window.addEventListener("DOMContentLoaded", () => {


    if (appEl) {
        // dentro la function sono sicuro che appEl sia un elemento caricato nel dom
        renderPage(appEl);
    }
});

function renderPage(container) {
    appEl.innerHTML = 'ciao';

    const header = getHeaderHTML();
    const main = getMainHTML();
    const footer = getFooterHTML();

    const html = header + main + footer

    appEl.innerHTML = html;
}