import { cards } from "./data/cards.js";

import {
    /*  borderCard1ElGen,
     borderCard2ElGen, */
    cardElGen
} from "./modules/components.js";

const mainSectionEl = document.querySelector('.container-card');

/* const borderCard1 = borderCard1ElGen();
const borderCard2 = borderCard2ElGen(); */

for (let i = 0; i < cards.length; i++) {

    const cardEl = cardElGen(cards[i]);

    mainSectionEl.append(cardEl);


}

/* borderCard1.append(borderCard2); */
window.onload = mainSectionEl/* .append(cardElGen); */;