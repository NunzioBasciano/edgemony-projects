/* 1 - definiamo variabile che contiene una stringa 

Usiamo i doppi apici e salviamo la stringa: Ciao Mondo! */

let phrase1 = "Ciao Mondo";

/* Usiamo i singoli apici e salviamo la stringa: Mio zio viene dalla città di l'Aquila
Occhio ad usare un escape per i singoli apici dentro la stringa!! */

let phrase2 = 'Mio zio viene dalla città di L\'Aquila';

/* Usiamo il backtick per concatenare le due stringhe precendti dentro una nuova, usiamo anche "l'andata a capo" */

let phrase3 = `

${phrase1} 

${phrase2}`;

console.log(phrase3);

/* Creiamo una nuova variabile in cui inseriamo una variabile precedente che modifichiamo portato il tutto in maiuscolo (.toUpperCase()) */

let fraseMaiuscolo = phrase3.toUpperCase();

console.log(fraseMaiuscolo);


/* Definiamo una variabile e salviamo all'interno un dato passato dall'utente tramite prompt() */

let userName = prompt('Inserisci il tuo Nome', 'Mario');

console.log(userName);

/* Facciamo un console.log del dato precedento portato a lowercase */

console.log(userName.toLowerCase());



/* Chiediamo al nostro user un numero da uno a 10 tramite prompt
e solo se maggiore di 7 esclamare in console che ha vinto!

tips: 

prompt('Dammi un numero da uno a dieci!'); // occhio che il prompt torna una stringa!!
if([...] > 7 ){

} */


let userNumber = prompt('Inserisci qui il numero da 1 a 10');


if (Number(userNumber) > 7) {
    console.log('Hai vinto!');
} else {
    console.log('Mi dispiace. Ritenta');
}


/* 
let userNumber = parseInt(prompt('Inserisci qui il numero da 1 a 10'));

if (userNumber > 7) {
    console.log('Hai vinto');
}
 */




