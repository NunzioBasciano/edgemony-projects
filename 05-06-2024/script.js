// ESERCIZIO 1
const divParent = document.querySelector('.container');
const buttonOneEl = document.querySelector('.button-1');
const buttonTwoEl = document.querySelector('.button-2');

// Questo gestore risponde agli eventi di clic sui figli di divParent. 
divParent.addEventListener('click', (event) => {

    // Verifica se l'elemento cliccato ha la classe 'button-1'
    if (event.target.className === 'button-1') {
        console.log('sono button one');

        // Verifica se l'elemento cliccato ha la classe 'button-2'
    } else if (event.target.className === 'button-2') {
        console.log('sono button two');
    }

    console.log(event.target.className);// // Stampa la classe dell'elemento cliccato
    console.log('sono div parent');// Stampa un messaggio che indica che l'evento è stato gestito da divParent
});

// ESERCIZIO 2
// funzione che logga il this
function logThis() {
    console.log(this);
}

const buttonThreeEl = document.querySelector('.button-3');

buttonThreeEl.addEventListener('click', function (event) {

    // ci restituisce il this dell'elemento da cui è scaturito l'evento
    logThis.call(this);
    console.log(event.target);
});

// ESERCIZIO 3
// creazione bottone per aprire la modale
const openModalBtn = document.createElement('button');
openModalBtn.className = 'open-modal';
openModalBtn.textContent = 'Apri modale';
const bodyEl = document.querySelector('body');
bodyEl.insertAdjacentElement('afterend', openModalBtn);

// funzione addEventListener che rimane in ascolto sul click del bottone openModalBtn
openModalBtn.addEventListener('click', openModal);

let modalTimeout;
let countDown;

function openModal() {
    container2El.classList.remove('hidden');
    startCountdown(5);
    modalTimeout = setTimeout(closeModal, 5000);
}

function closeModal() {
    container2El.classList.add('hidden');
    clearTimeout(modalTimeout);
    clearInterval(countDown);
}

// creazione e montaggio modal-window
const container2El = document.querySelector('.hidden');
const containerEl = document.createElement('div');
containerEl.className = 'modal-window';
const closeContainerEl = document.createElement('div');
closeContainerEl.className = 'close';
const closeBtnEl = document.createElement('button');
closeBtnEl.className = "close-button";
closeBtnEl.textContent = 'X';
const countdownEl = document.createElement('div');
countdownEl.className = 'countdown';
const answerContainerEl = document.createElement('div');
answerContainerEl.className = 'container-yes-no';
const yesBtnEl = document.createElement('button');
yesBtnEl.className = "yes-button";
yesBtnEl.textContent = 'Yes';
const noBtnEl = document.createElement('button');
noBtnEl.className = "no-button";
noBtnEl.textContent = 'No';
answerContainerEl.append(yesBtnEl, noBtnEl);
closeContainerEl.append(closeBtnEl);
containerEl.append(closeContainerEl, countdownEl, answerContainerEl);
container2El.append(containerEl);

// Aggiunta dell'event listener alla modale per la gestione dei pulsanti
containerEl.addEventListener('click', (event) => {

    // Cancella il timeout se viene premuto un pulsante
    clearTimeout(modalTimeout);

    if (event.target.className === 'close-button') {
        closeModal();

    } else if (event.target.className === 'yes-button') {
        console.log('Hai premuto yes');

    } else if (event.target.className === 'no-button') {
        console.log('Hai premuto no');
    }
});

// Funzione per aggiornare il countdown
function startCountdown(seconds) {
    let remainingSeconds = seconds;
    countdownEl.textContent = `Chiude in ${remainingSeconds} secondi`;

    countDown = setInterval(() => {
        remainingSeconds -= 1;
        countdownEl.textContent = `Chiude in ${remainingSeconds} secondi`;

        if (remainingSeconds <= 0) {
            clearInterval(countDown);
        }
    }, 1000);
}