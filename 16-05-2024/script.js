/* dichiaro due costanti una con le vocali e una con tutte le lettere ammesse nel prompt */

const vowels = 'aeiou';
const charOk = 'abcdefghijklmnopqrstuvwxyz';

let word1 = prompt('Inserisci qui la parola');

/* creo una variabile in cui rendo minuscolo ed elimino eventuali spazi inseriti prima e dopo la parola */
let word1Normalize = word1.toLowerCase().trim();

/* creo una variabile in cui ricavo la prima lettera della variabile 'normalizzata' */
let firstLetterWord1 = word1Normalize.charAt(0);

/* se la lunghezza della parola è uguale a 0 (ovvero quando l'utente per errore non inserisce nulla e da' ok ) o
la prima lettera della parola non è inclusa nei caratteri 'ammessi', gli verrà restituito un alert e verrà refresciata la pagina */
word1.length === 0 || !charOk.includes(firstLetterWord1)
    ? (alert('stai sbagliando'), window.location.reload())

    /* oppure se il primo carattere della parola è incluso nella variabile 'vocali' restituirà in consol 'vocale' */
    : vowels.includes(firstLetterWord1)
        ? console.log('vocale')

        /* o se il primo carattere della parola è incluso nella variabile 'caratteri ammessi' restituirà in consol 'consonante' */
        : charOk.includes(firstLetterWord1)
            ? console.log('consonante')


            : null;

let word2 = prompt('Inserisci qui la parola');
let word2Normalize = word2.toLowerCase().trim();
let firstLetterWord2 = word2Normalize.charAt(0);

word2.length === 0 || !charOk.includes(firstLetterWord2)
    ? (alert('stai sbagliando'), window.location.reload())
    : vowels.includes(firstLetterWord2)
        ? console.log('vocale')
        : charOk.includes(firstLetterWord2)
            ? console.log('consonante')
            : null;

let word3 = prompt('Inserisci qui la parola');
let word3Normalize = word3.toLowerCase().trim();
let firstLetterWord3 = word3Normalize.charAt(0);

word3.length === 0 || !charOk.includes(firstLetterWord3)
    ? (alert('stai sbagliando'), window.location.reload())
    : vowels.includes(firstLetterWord3)
        ? console.log('vocale')
        : charOk.includes(firstLetterWord3)
            ? console.log('consonante')
            : null;