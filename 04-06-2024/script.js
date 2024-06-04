/* CREO UN DIV CON UN COUNTER */
const clockEl = document.createElement('div');
clockEl.className = 'clock';
clockEl.textContent = '00:00:00';

/* CREO UN BUTTON  START */
const startBtn = document.createElement('button');
startBtn.id = 'start-button';
startBtn.title = 'start clock!';


/* CREO UN BUTTON  STOP */
const stopBtn = document.createElement('button');
stopBtn.id = 'stop-button';
stopBtn.title = 'stop clock!';


/* IL TUTTO VERRA MONTATO NEL BODY */
const bodyEl = document.querySelector('body');
bodyEl.append(clockEl, startBtn, stopBtn);

/* INIZIALIZZO TIMER */
let timer;

/* INIZIALIZZO E ASSEGNO RUNNING. IL QUALE SE SARA' FALSE VORRA' DIRE CHE L'OROLOGIO E' FERMO */
let running = false;

/* FUNZIONE CHE STARTA L'OROLOGIO AL CARICAMENTO DELLA PAGINA */
function startClock() {
    if (!running) {
        running = true;
        timer = setInterval(updateClock, 1000);
    }
}

/* FUNZIONE CHE STOPPA L'OROLOGIO */
function stopClock() {
    running = false;
    clearInterval(timer);
}

/* FUNZIONE CHE AGGIORNA L'ORA */

function updateClock() {

    /* creazione della data corrente */
    const now = new Date();

    /* creazione della variabile ore data dalla conversione a stringa del metodo getHours il quale sarà composto da due numeri (2) mediante padstart con lo 0 davanti se ore sarà < 10*/
    const hours = String(now.getHours()).padStart(2, '0');

    /* creazione della variabile minuti data dalla conversione a stringa del metodo getMinutes il quale sarà composto da due numeri (2) mediante padstart con lo 0 davanti se ore sarà < 10*/
    const minutes = String(now.getMinutes()).padStart(2, '0');

    /* creazione della variabile secondi data dalla conversione a stringa del metodo getSeconds il quale sarà composto da due numeri (2) mediante padstart con lo 0 davanti se ore sarà < 10*/
    const seconds = String(now.getSeconds()).padStart(2, '0');

    /* il valore di clockEl sarà quindi dato da */
    clockEl.textContent = `${hours}:${minutes}:${seconds}`;
}

/* creo una eventlistner al click dello startBtn in cui ci sarà la funzione startClock */
startBtn.addEventListener('click', startClock);

/* creo una eventlistner al click dello stopBtn in cui ci sarà la funzione stopClock */
stopBtn.addEventListener('click', stopClock);




let intervalId;

function currentTime() {
    const now = new Date();
    console.log(now.toString());
}

function startConsole() {
    if (!intervalId) {
        // Avvia l'intervallo e memorizza l'ID dell'intervallo
        intervalId = setInterval(currentTime, 1000);
    }
}

function stopConsole() {
    if (intervalId) {
        // Avvia l'intervallo e memorizza l'ID dell'intervallo
        clearInterval(intervalId);
        intervalId = null;
    }
}

startConsole();
setTimeout(stopConsole, 10000);