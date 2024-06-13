// Definizione delle costanti per l'URL di base dell'API e il percorso dell'endpoint dei prodotti
const BASE_URL = "https://api.escuelajs.co/";
const getProductEndpoint = "api/v1/products";
const url = BASE_URL + getProductEndpoint;

// Funzione generica per gestire le richieste HTTP con fetch
const handleRequest = async (requestUrl, options) => {
	try {
		const res = await fetch(requestUrl, options);  // Effettua la richiesta HTTP

		if (!res.ok) { // Se la risposta non è OK (status code diverso da 200)
			const errorData = await res.json();  // Estrae i dati di errore dalla risposta JSON
			throw new Error(errorData.message || 'Request failed');  // Solleva un'eccezione con il messaggio di errore
		}

		return await res.json();  // Ritorna i dati JSON dalla risposta
	} catch (error) {
		throw error; // Gestisce qualsiasi errore e lo solleva
	}
};

// Funzione per inviare un nuovo prodotto tramite metodo POST
const POST = async (product) => {
	try {
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json; charset=utf-8",
			},
			body: JSON.stringify(product), // Converte il prodotto in formato JSON per il corpo della richiesta
		};

		const data = await handleRequest(url, options); // Invia la richiesta tramite la funzione handleRequest
		handleFeedback(null, null, "Product created successfully"); // Gestisce il feedback di successo
		return data.id; // Ritorna l'ID del prodotto creato
	} catch (error) {
		handleFeedback(error, `Error in creating product: ${error.message}`);  // Gestisce il feedback di errore
		throw error;  // Solleva l'errore per gestione ulteriore
	}
};

// Funzione per aggiornare un prodotto esistente tramite metodo PUT
const PUT = async (productId, product) => {
	try {
		const putUrl = `${BASE_URL}${getProductEndpoint}/${productId}`;  // URL completo per il metodo PUT
		const options = {
			method: "PUT",  // Metodo della richiesta
			headers: {
				"Content-Type": "application/json; charset=utf-8", // Intestazione per indicare il tipo di contenuto JSON
			},
			body: JSON.stringify(product),  // Converte il prodotto in formato JSON per il corpo della richiesta
		};

		const data = await handleRequest(putUrl, options);  // Invia la richiesta tramite la funzione handleRequest
		handleFeedback(null, null, "Product updated successfully"); // Gestisce il feedback di successo
		return data.id; // Ritorna l'ID del prodotto aggiornato

	} catch (error) {
		handleFeedback(error, `Error in updating product: ${error.message}`); // Gestisce il feedback di errore
		throw error; // Solleva l'errore per gestione ulteriore
	}
};

// Funzione per eliminare un prodotto tramite metodo DELETE
const DELETE = async (productId) => {
	try {
		const deleteUrl = `${BASE_URL}${getProductEndpoint}/${productId}`;  // URL completo per il metodo DELETE
		const options = {
			method: "DELETE",  // Metodo della richiesta
			headers: {
				"Content-Type": "application/json; charset=utf-8",
			},
		};

		const res = await fetch(deleteUrl, options); // Effettua la richiesta DELETE

		if (!res.ok) {  // Se la risposta non è OK (status code diverso da 200)
			const errorData = await res.json(); // Estrae i dati di errore dalla risposta JSON
			throw new Error(errorData.message || 'Failed to delete product'); // Solleva un'eccezione con il messaggio di errore
		}

		console.log(`Product with ID ${productId} deleted successfully`); // Stampa un messaggio di successo in console
		handleFeedback(null, null, "Product deleted successfully"); // Feedback verde per successo
	} catch (error) {
		if (error.message.includes("Could not find any entity of type")) {
			handleFeedback(error, `Product with ID ${productId} not found`, null); // Gestisce il feedback di errore specifico per prodotto non trovato
		} else {
			handleFeedback(error, `Error in deleting product: ${error.message}`); // Gestisce il feedback di errore generico
		}
	}
};

// Event listener che si attiva quando il documento HTML è completamente caricato
document.addEventListener('DOMContentLoaded', () => {
	// Selezione degli elementi del DOM
	const inputIdEl = document.querySelector('.delete-id');
	const inputTitleEl = document.querySelector('.title');
	const inputPriceEl = document.querySelector('.price');
	const inputDescriptionEl = document.querySelector('.description');
	const inputCategoryEl = document.querySelector('.category-id');
	const inputImagesEl = document.querySelector('.images');
	const buttonSendEl = document.querySelector('.button-send');
	const buttonDeleteEl = document.querySelector('.button-delete');
	const buttonUpdateEl = document.querySelector('.button-update');

	// Event listener per inviare un prodotto tramite il pulsante "Invia"
	buttonSendEl.addEventListener('click', async (e) => {
		e.preventDefault(); // Evita il comportamento predefinito del form

		// Ottiene i valori inseriti dall'utente
		const title = inputTitleEl.value;
		const price = inputPriceEl.value;
		const description = inputDescriptionEl.value;
		const categoryId = inputCategoryEl.value;
		const images = [inputImagesEl.value];

		try {
			// Validazione dei campi inseriti
			if (!title || !price || !description || !categoryId || !images[0]) {
				throw new Error("All fields must be filled out");
			}

			if (isNaN(price)) {
				throw new Error("Received invalid number for price");
			}

			if (isNaN(categoryId)) {
				throw new Error("Received invalid number for category ID");
			}

			// Costruzione dell'oggetto prodotto da inviare
			const objProductForm = {
				title,
				price: parseFloat(price),
				description,
				categoryId: parseInt(categoryId),
				images,
			};

			// Invio del prodotto tramite la funzione POST
			const productId = await POST(objProductForm);
			console.log(`Product ID: ${productId}`);
			handleFeedback(null, null, "Product created successfully");  // Gestisce il feedback di successo
		} catch (error) {
			console.error(`Failed to create product: ${error.message}`);
			handleFeedback(error, `Error in creating product: ${error.message}`); // Gestisce il feedback di errore
		}
	});

	// Event listener per eliminare un prodotto tramite il pulsante "Elimina"
	buttonDeleteEl.addEventListener('click', async (e) => {
		e.preventDefault(); // Evita il comportamento predefinito del form

		// Ottiene l'ID del prodotto da eliminare
		const productId = inputIdEl.value;

		try {
			// Validazione dell'ID del prodotto
			if (!productId) {
				throw new Error("Please enter a product ID to delete");
			}

			if (isNaN(productId)) {
				throw new Error("Received invalid number for product ID");
			}

			// Eliminazione del prodotto tramite la funzione DELETE
			await DELETE(productId);
			handleFeedback(null, null, "Product deleted successfully");
		} catch (error) {
			console.error(`Failed to delete product: ${error.message}`);
			handleFeedback(error, `Error in deleting product: ${error.message}`);
		}
	});

	// Event listener per aggiornare un prodotto tramite il pulsante "Aggiorna"
	buttonUpdateEl.addEventListener('click', async (e) => {
		e.preventDefault();// Evita il comportamento predefinito del form

		// Ottiene l'ID e i nuovi valori del prodotto da aggiornare
		const productId = inputIdEl.value;
		const title = inputTitleEl.value;
		const price = inputPriceEl.value;
		const description = inputDescriptionEl.value;
		const categoryId = inputCategoryEl.value;
		const images = [inputImagesEl.value];

		try {
			// Validazione dell'ID e dei campi del prodotto aggiornato
			if (!productId) {
				throw new Error("Please enter a product ID to update");
			}

			if (!title || !price || !description || !categoryId || !images[0]) {
				throw new Error("All fields must be filled out");
			}

			if (isNaN(productId)) {
				throw new Error("Received invalid number for product ID");
			}

			if (isNaN(price)) {
				throw new Error("Received invalid number for price");
			}

			if (isNaN(categoryId)) {
				throw new Error("Received invalid number for category ID");
			}

			// Costruzione dell'oggetto prodotto aggiornato
			const objProductForm = {
				title,
				price: parseFloat(price),
				description,
				categoryId: parseInt(categoryId),
				images,
			};

			// Invio del prodotto aggiornato tramite la funzione PUT
			const updatedProductId = await PUT(productId, objProductForm);
			console.log(`Updated Product ID: ${updatedProductId}`);
			handleFeedback(null, null, "Product updated successfully"); // Gestisce il feedback di successo
		} catch (error) {
			console.error(`Failed to update product: ${error.message}`);
			handleFeedback(error, `Error in updating product: ${error.message}`);  // Gestisce il feedback di errore
		}
	});
});

const handleFeedback = (error, errorMessage = null, successMessage = null) => {
	// Selezione degli elementi nel DOM per i feedback
	const errorFeedbackEl = document.querySelector('.feedback.error');
	const successFeedbackEl = document.querySelector('.feedback.success');

	if (error) {
		// Se è presente un errore
		console.error(error);// Log dell'errore nella console del browser
		// Imposta il testo del feedback di errore con il messaggio personalizzato o predefinito
		errorFeedbackEl.textContent = errorMessage || `Error: ${error.message}`;
		errorFeedbackEl.style.display = 'block'; // Mostra il feedback di errore
		successFeedbackEl.style.display = 'none';// Nasconde il feedback di successo
	} else {
		// Se non ci sono errori
		successFeedbackEl.textContent = successMessage || 'Operation successful'; // Testo di successo personalizzato o predefinito
		successFeedbackEl.style.display = 'block';  // Mostra il feedback di successo
		errorFeedbackEl.style.display = 'none'; // Nasconde il feedback di errore
	}

	// Imposta un timeout per nascondere automaticamente i feedback dopo 3 secondi
	setTimeout(() => {
		errorFeedbackEl.style.display = 'none';  // Nasconde il feedback di errore
		successFeedbackEl.style.display = 'none';  // Nasconde il feedback di successo
	}, 3000); // Nasconde il feedback dopo 3 secondi
};
