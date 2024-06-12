// API JS

const BASE_URL = "https://api.escuelajs.co/";
const getProductEndpoint = "api/v1/products";
const url = BASE_URL + getProductEndpoint;

const POST = async (product) => {
	const res = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json; charset=utf-8",
		},
		body: JSON.stringify(product),
	});

	const data = await res.json();
	console.log(url);

	return data.id;
};




const inputTitleEl = document.querySelector('.title');
const inputPriceEl = document.querySelector('.price');
const inputDescriptionEl = document.querySelector('.description');
const inputCategoryEl = document.querySelector('.category-id');
const inputImagesEl = document.querySelector('.images');
const buttonSendEl = document.querySelector('.button-send');
const deleteIdEl = document.querySelector('.delete-id'); // Seleziona l'elemento di input per l'ID da eliminare
const buttonDeleteEl = document.querySelector('.button-delete');


buttonSendEl.addEventListener('click', async (e) => {
	e.preventDefault();
	const objProductForm = {
		title: inputTitleEl.value,
		price: inputPriceEl.value,
		description: inputDescriptionEl.value,
		categoryId: inputCategoryEl.value,
		images: [inputImagesEl.value],
	};

	const productId = await POST(objProductForm);
	console.log(`Product ID: ${productId}`);
});

