/* Chiediamo all'utente tramite un prompt di inserire il suo nome, poi salviamo il dato in una variabile;
Controlliamo che siano valori validi (non null), con almeno 3 caratteri e mostriamo tramite alert errori specifici;
Se abbiamo mostrato un errore ricarichiamo la pagina usando window.location.reload();
 */

let userName = prompt('Inserisci qui il tuo nome');

let userNameOk;

if (userName === '') {
    alert('Probabilmente non hai inserito nulla nel campo Nome!');
    window.location.reload();
} else if (userName.length < 3) {
    alert('Attento devi inserire un nome di almeno tre lettere nel campo Nome!');
    window.location.reload();

} else {
    userNameOk = userName;
}

/* Chiediamo all'utente tramite un prompt di inserire il suo cognome, poi salviamo il dato in una variabile; 
Controlliamo che siano valori validi (non null), con almeno 3 caratteri e mostriamo tramite alert errori specifici;
Se abbiamo mostrato un errore ricarichiamo la pagina usando window.location.reload();
 */

let userSurName = prompt('Inserisci qui il tuo cognome');

let userSurNameOk;

if (userSurName === '') {
    alert('Probabilmente non hai inserito nulla nel campo Cognome!');
    window.location.reload();
} else if (userSurName.length < 3) {
    alert('Attento devi inserire un cognome di almeno tre lettere nel campo Cognome!');
    window.location.reload();
} else {
    userSurNameOk = userSurName;
}

if (userNameOk && userSurNameOk) {

    /* Prendiamo il nome inserito e salviamo una nuova variabile trasformando la prima lettera in maiuscola, tip: */


    let firstLetterCapitalizeName = userName.charAt(0).toUpperCase();

    let nameWithoutFirstLetter = userName.slice(1);

    let nameCapitalize = firstLetterCapitalizeName + nameWithoutFirstLetter;

    /* Prendiamo il cognome inserito e salviamo una nuova variabile trasformando la prima lettera in maiuscola; */

    let firstLetterCapitalizeSurName = userSurName.charAt(0).toUpperCase();

    let surNameWithoutFirstLetter = userSurName.slice(1);

    let surNameCapitalize = firstLetterCapitalizeSurName + surNameWithoutFirstLetter;

    alert(`Ciao ${nameCapitalize} ${surNameCapitalize}`); // Ciao Nunzio Basciano


}

/* Quizzone - Qui usiamo lo switch dove possibile
   Creiamo una variabile let score = 0;;
   Proponiamo all'utente, tramite prompt, 4 domande di cultura generale e raccogliamo le sue risposte in altrettante variabili;
   Per ogni risposta corretta aggiungiamo al score 3 punti, per ogni errata togliamo 1 punto;
   Alla fine delle 4 domande mostriamo il pungeggio complessivo;
   Poi se le hai indovinate tutte mostra un alert "Sei il nuovo campione!" */

let score = 0;

let answer1 = prompt('Qual\'è capitale della Spagna?');
let answer2 = prompt('Chi è il primo ministro della Germania?');
let answer3 = prompt('In che anno è finita la Seconda Guerra Mondiale?');
let answer4 = prompt('Quando è stata scoperta l\'America?');

// le risposte verranno trasformate in minuscolo e verranno tolti gli spazi

answer1 = answer1.toLowerCase().trim();
answer2 = answer2.toLowerCase().trim();
answer3 = answer3.toLowerCase().trim();
answer4 = answer4.toLowerCase().trim();



switch (answer1) {
    case 'madrid':
        score += 3;
        break;

    default:
        score -= 1;
        break;
}


switch (answer2) {
    case 'scholz':
    case 'olaf scholz':
        score += 3;
        break;


    default:
        score -= 1;
        break;
}


switch (answer3) {
    case '1945':
        score += 3;
        break;

    default:
        score -= 1;
        break;
}


switch (answer4) {
    case '1492':
        score += 3;
        break;

    default:
        score -= 1;
        break;
}

alert(`il tuo punteggio complessivo è ${score}`);


if (score == 12) {
    alert('Sei il nuovo campione!')
} else {
    alert('Impegnati di più!');
}

