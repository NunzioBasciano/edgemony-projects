import {
    cardGen,
    GET
} from "./modules/components.js"

const province = ['trapani', 'palermo', 'catania', 'messina', 'siracusa', 'ragusa', 'enna', 'caltanissetta', 'agrigento',];
const backgrounds = [
    { name: 'trapani', image: 'images/trapani-background.jpg' },
    { name: 'palermo', image: 'images/palermo-background.jpeg' },
    { name: 'catania', image: 'images/catania-background.jpg' },
    { name: 'messina', image: 'images/messina-background.jpg' },
    { name: 'siracusa', image: 'images/siracusa-background.jpg' },
    { name: 'ragusa', image: 'images/ragusa-background.jpg' },
    { name: 'enna', image: 'images/enna-background.jpg' },
    { name: 'caltanissetta', image: 'images/caltanissetta-background.jpg' },
    { name: 'agrigento', image: 'images/agrigento-background.jpg' }
];

const containerEl = document.querySelector('.container-card');
const selectElement = document.getElementById('province');

console.log(await GET(province[0]))


// Funzione per gestire la generazione dinamica delle card
const generateCards = async () => {
    try {
        containerEl.textContent = ''; // Svuota il contenitore delle card

        // Cicla attraverso tutte le province per ottenere i dati e generare le card
        for (let i = 0; i < province.length; i++) {
            // Chiamata GET per ottenere i dati della provincia
            const data = await GET(province[i]);
            // Trova lo sfondo corrispondente alla provincia
            const background = backgrounds.find(bg => bg.name === province[i]);
            // Genera la card utilizzando i dati e lo sfondo trovato
            const card = cardGen(data, background.image);
            // Aggiungi la card al contenitore
            containerEl.appendChild(card);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Funzione per generare la card della provincia selezionata o di tutte le province siciliane
const generateSelectedCard = async (selectedProvince) => {
    try {
        containerEl.textContent = ''; // Svuota il contenitore delle card

        // Se non è stata selezionata una provincia o è selezionato "seleziona una provincia siciliana", carica tutte le card
        if (!selectedProvince || selectedProvince === 'seleziona una provincia siciliana') {
            await generateCards(); // Carica tutte le card
        } else {
            // Ottieni i dati della provincia selezionata
            const data = await GET(selectedProvince);
            // Trova lo sfondo corrispondente alla provincia selezionata
            const background = backgrounds.find(bg => bg.name === selectedProvince);
            // Genera la card utilizzando i dati e lo sfondo trovato
            const card = cardGen(data, background.image);
            // Aggiungi la card al contenitore
            containerEl.appendChild(card);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Event listener per il cambio della select
selectElement.addEventListener('change', async function () {

    const selectedProvince = selectElement.value.toLowerCase(); // Ottiene il valore selezionato in minuscolo
    generateSelectedCard(selectedProvince); // Chiama la funzione per generare la card della provincia selezionata
});

generateCards();