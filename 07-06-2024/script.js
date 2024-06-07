import API_KEY from './keys.js';

const BASE_URL = 'https://api.themoviedb.org/3';
const POPULAR_MOVIES_URL = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

// Selettore del container e della search bar
const moviesContainer = document.getElementById('movies-container');
const searchBar = document.getElementById('searchBar');

// Funzione per ottenere i film popolari
function fetchPopularMovies() {
    fetch(POPULAR_MOVIES_URL)
        .then(response => response.json())
        .then(data => {
            const movies = data.results;
            displayMovies(movies);
        })
        .catch(error => {
            console.error('Errore nel recupero dei film popolari:', error);
            moviesContainer.innerHTML = '<p>Si è verificato un errore nel caricamento dei film.</p>';
        });
}

// Funzione per creare le card dei film e aggiungerle al DOM
function displayMovies(movies) {
    moviesContainer.innerHTML = '';
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';

        const movieTitle = document.createElement('h2');
        movieTitle.textContent = movie.title;

        const moviePoster = document.createElement('img');
        moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        moviePoster.alt = movie.title;

        movieCard.appendChild(moviePoster);
        movieCard.appendChild(movieTitle);

        moviesContainer.appendChild(movieCard);
    });
}

// Filtrare i risultati della ricerca
searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const movieCards = document.querySelectorAll('.movie-card');
    movieCards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        if (title.includes(searchString)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Chiamata iniziale per ottenere e mostrare i film
fetchPopularMovies();
