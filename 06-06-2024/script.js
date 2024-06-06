/* Esercizio 1: esercitiamoci con fetch ,
 effettuiamo una chiamata a https://fakestoreapi.com/products, 
 sfruttando i .then() stampiamo a console i dati ottenuti comprensibili per js */

/* fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((data) => {
    console.log(data)
}); */

/* Esercizio 2: proviamo a stampare i dati ottenuti sul DOM, 
va bene anche una card o un titolo, 
comunque che sia qualcosa ottenuta dalla risposta della nostra chiamata */



const buttonEl = document.querySelector('.builder');

buttonEl.addEventListener('click', function () {

    const bodyEl = document.querySelector('body');
    bodyEl.className = 'body-element';


    fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((data) => {

        const cardElGen = (obj) => {

            const truncateText = (text, maxLength) => {
                if (text.length > maxLength) {
                    return text.substring(0, maxLength) + '...';
                }
                return text;
            };
            // creazione contenitore card
            const containerEL = document.createElement('div');
            containerEL.className = 'card__container';

            // creazione sezione id
            const idEl = document.createElement('p');
            idEl.className = 'card__id'
            idEl.textContent = `ID: ${obj.id}`;

            // creazione immagine card
            const imageEl = document.createElement('img');
            imageEl.src = obj.image;
            imageEl.className = "card__img";
            imageEl.alt = obj.title;

            // creazione titolo card
            const titleEl = document.createElement('h2');
            titleEl.className = "card__title";
            titleEl.textContent = obj.title;

            // creazione descrizione card
            const descriptionEl = document.createElement('p');
            descriptionEl.className = 'card__description';
            descriptionEl.textContent = truncateText(obj.description, 150);

            // creazione prezzo card
            const priceEl = document.createElement('p');
            priceEl.className = 'card__price';
            priceEl.textContent = `$${obj.price.toFixed(2)}`;

            // creazione rating card
            const ratingEl = document.createElement('p');
            ratingEl.className = 'card__rating';
            ratingEl.textContent = `Rating: ${obj.rating.rate}`;

            // creazione recensioni card
            const reviewsEl = document.createElement('p');
            reviewsEl.className = 'card__reviews';
            reviewsEl.textContent = `Reviews: ${obj.rating.count}`;

            containerEL.append(idEl, imageEl, titleEl, descriptionEl, priceEl, ratingEl, reviewsEl);

            return containerEL;

        }

        data.forEach(el => {
            bodyEl.insertAdjacentElement('afterbegin', cardElGen(el));
        });


    });

    buttonEl.className = 'hidden';


})