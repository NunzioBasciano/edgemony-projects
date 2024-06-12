
/* Utilizziamo un oggetto test per verificare che tutto funzioni e lo passiamo nella proprietà body della funzione */
/* const testObj = {
	title: "string",
	price: 10,
	description: "string",
	categoryId: 10,
	images: ["http://asd.asd"]
}
 */

const titleEl = document.querySelector('.title');
const priceEl = document.querySelector('.price');
const descriptionEl = document.querySelector('.description');
const categoryIdEl = document.querySelector('.category-id');
const imageEL = document.querySelector('.images');
const submitBtnEl = document.querySelector('.button-send');
const deleteBtnEl = document.querySelector('.button-delete');

// FACCIAMO LA GET PER CAPIRE COSA C'E' DENTRO L'API
// ANDIAMO A DEFINIRE IL BASE-URL

const BASE_URL = "https://api.escuelajs.co/";

// RECUPERIAMO L'END-POINT DALLA DOCUMENTAZIONE
const getProductEndPoint = "api/v1/products";

// NELLA DOCUMENTAZIONE SI EVINCE CHE SONO RICHIESTI DUE PARAMETRI IL LIMIT E L'OFFEST DI TIPO NUMBER (è una sorta di paginazione)
// Esempio dato un limite di 8 (voglio che rispondi con 8 oggetti) i risultati potrebbero essere migliaia
// l'offset definisce l'indice di partenza (esempio 4: dall'array di risultati parti da indice 4 e restituisci 8 oggetti)

const GET = async () => {
	// scriviamo la funzione fetch con il template literal per poter inserire il limit e l'offset
	const res = await fetch(`${BASE_URL}${getProductEndPoint}`)
	// aspettiamo la risposta e la convertiamo in json
	const data = await res.json();

	return data;
}


// ADESSO ANDIAMO A VEDERE DALLA DOCUMENTAZIONE COME FARE LA POST. OVVERO LA STRUTTURA DI DATI RICHIESTA
// LA DOCUMENTAZIONE CI DICE CHE E' RICHIESTO UN BODY CHE E' DI TIPO APPLICATION JSON (VEDI RIGA 38) E CHE L'OGGETTO DEVE AVERE DELLE PROPRIETA' VEDI HTML

// FUNZIONE CHE PERMETTE DI AGGIUNGERE DATI ALL'API
const POST = async (products) => {

	// USIAMO LA FETCH PASSANDO 
	// L'URL (DALLA DOCUMENTAZIONE SI EVINCE CHE L'URL PER LA CHIAMATA POST E' LO STESSO DI QUELLA GET) ma senza limit e offset
	// E L'OGGETTO OPTION
	// salviamo la fetch in una variabile in quanto quando si manda una richiesta post viene generato un qualcosa di identificabile (in questo caso un id)
	const res = await fetch(`${BASE_URL}${getProductEndPoint}`, { // questo identificativo è utile per modifiche, per eliminare...
		// La risposta sarà uguale all'oggetto inviato + le informazioni caricate dal backend  
		// SETTIAMO LA PROPRIETA' METHOD IN : POST. FACCIAMO LA CHIAMATA PER MANDARI DEI DATI
		method: "POST",

		headers: {
			// DEFINISCE I TIPI DI DATO CHE IL BROWSER E' DISPOSTO AD ACCETTARE LO ANDIAMO A PRENDERE DALLA DOCUMENTAZIONE
			"Content-Type": "application/json",
		},
		// NELLE CHIAMATE POST ABBIAMO LA PROPRIETA' BODY. CHE DEFINISCE L'OGGETTO DEL DATO INVIATO. UTILIZZIAMO JSON.STRINGIFY PERCHE' CI OCCORRE MANDARLO IN STRINGA
		body: JSON.stringify(products),
		// DOBBIAMO TRADURRE IL NOSTRO JAVASCRIPT IN UN DATO COMPRENSIBILE PER IL BACK-EN
	});

	const data = await res.json();
	deleteBtnEl.textContent = data.id;
	console.log(data.id)
	return data.id;

};

const DELETE = async (id) => {

	const res = await fetch(`${BASE_URL}${getProductEndPoint}/${id}`, {

		method: "DELETE",

	});
	console.log(`id eliminato ${id}`)
	const messageEL = document.querySelector('.message-delete');
	messageEL.textContent = `id eliminato ${id}`;
}


submitBtnEl.addEventListener('click', e => {
	// RIMUOVE IL COMPORTAMENTO DI DEFAULT DEL FORM
	e.preventDefault();

	// CREA L'OGGETTO
	const objProductForm = {
		title: titleEl.value,
		price: priceEl.value,
		description: descriptionEl.value,
		categoryId: categoryIdEl.value,
		images: [imageEL.value]
	};

	// RICHIAMA LA FUNZIONE POST PASSANDO L'OGGETTO CREATO
	POST(objProductForm)

})

deleteBtnEl.addEventListener('click', e => {
	// RIMUOVE IL COMPORTAMENTO DI DEFAULT DEL FORM
	e.preventDefault();

	// RICHIAMA LA FUNZIONE POST PASSANDO L'OGGETTO CREATO
	console.log(deleteBtnEl.textContent);
	DELETE(deleteBtnEl.textContent);

})

