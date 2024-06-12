import API_KEY from './keys.js';
import { cardGen } from './components.js';

// BASE URL 
const BASE_URL = 'https://api.themoviedb.org/3';


const containerCardEl = document.querySelector('.container-card');
const searchBarEl = document.querySelector(".searchbar");
const prevBtnEl = document.querySelector('.previous');
const nextBtnEl = document.querySelector('.next');
const pageNumberEl = document.querySelector('#page-number');
const popularEl = document.getElementById('popular');
const topRatedEl = document.getElementById('top-rated');
const upcomingEl = document.getElementById('upcoming');
const nowPlayingEl = document.getElementById('now-playing');

let currentPage = 1;
let currentType = 'popular';

popularEl.addEventListener('click', () => {
    currentType = 'popular';
    getMovies(currentType, 1);
});

topRatedEl.addEventListener('click', () => {
    currentType = 'top_rated';
    getMovies(currentType, 1);
});

upcomingEl.addEventListener('click', () => {
    currentType = 'upcoming';
    getMovies(currentType, 1);
});

nowPlayingEl.addEventListener('click', () => {
    currentType = 'now_playing';
    getMovies(currentType, 1);
});

function getMovies(type = 'popular', page = 1) {

    // CREAZIONE COSTANTE URL PAGINA FILM POPOLARI FORMATA DALLA BASE DELL'URL PI' LA STRINGA movie/popular LA SEZIONE ?api_key=${API_KEY} CHE RECUPERA LA CHIAVE E 
    // LA SEZIONE languafe=... recuprata dal fornitore di API
    const MOVIES_URL = `${BASE_URL}/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`;
    // Sul sito troviamo questo url 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1' 
    // in node language che ci fa' capire che la chiave api va dove abbiamo ?

    // facciamo la chiamata fetch di POPULAR_MOVIES_URL 
    fetch(MOVIES_URL)

        // attesa della chiamata 
        .then((response) => {

            // verifica se la risposta http è ok (status 200- 209)
            if (!response.ok) {

                // se non è ok visualizziamo l'errore  
                throw new Error('Network response was not ok ' + response.statusText);
            }

            // altrimenti torna il json 
            return response.json();
        })

        // non appena riceviamo risposta facciamo console.log dai dati in arrivo
        .then((data) => {
            containerCardEl.innerHTML = ''; // pulisci il contenitore delle card
            data.results.forEach((el) => {
                containerCardEl.insertAdjacentElement('beforeend', cardGen(el));
            })

            // Aggiorna lo stato dei pulsanti di paginazione
            currentPage = data.page;
            pageNumberEl.textContent = currentPage;
            prevBtnEl.disabled = currentPage === 1;
            nextBtnEl.disabled = currentPage === data.total_pages;

            searchBarEl.addEventListener("input", (event) => {
                const inputValue = event.target.value.toLowerCase();
                filterProducts(inputValue, data.results);
            });
        })

        .catch((error) => {
            // 
            console.error('There has been a problem with your fetch operation:', error);
        });

    // Funzione per filtrare i film
    function filterProducts(query, movies) {
        const filteredMovies = movies.filter((movie) => {
            return movie.title.toLowerCase().includes(query);
        });

        containerCardEl.innerHTML = "";
        filteredMovies.forEach((movie) => {
            containerCardEl.insertAdjacentElement('beforeend', cardGen(movie));
        })
    }
}

prevBtnEl.addEventListener('click', () => {
    if (currentPage > 1) {
        getMovies(currentType, currentPage - 1);
    }
});

nextBtnEl.addEventListener('click', () => {
    getMovies(currentType, currentPage + 1);
});



getMovies('popular');