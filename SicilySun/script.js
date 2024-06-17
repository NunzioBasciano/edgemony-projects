import {
    cardGen,
    GET
} from "./modules/components.js"
const province = ['trapani', 'palermo', 'catania', 'siracusa', 'ragusa', 'enna', 'caltanissetta', 'agrigento',]

const containerEl = document.querySelector('.container-card');


const data = (await GET(province.map(el => el)));

containerEl.append(cardGen(data))