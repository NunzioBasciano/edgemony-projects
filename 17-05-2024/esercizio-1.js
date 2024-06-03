/*
Trova il positivo:
dato un array di numeri [-1, -2, -10, 2, 5];

scriviamo due cicli for che soddisfano ognuno una condizione:
1. Stampare in console solo i numeri > 0

*/
const setNumbers = [-1, -2, -10, 2, 5];
const positiveNumbers = [];

for (let i = 0; i < setNumbers.length; i++) {   // fintanto che l'indice è inferiore alla lunghezza dell'array

    (setNumbers[i] > 0) ? positiveNumbers.push(setNumbers[i]) : null;   // verifica se è positvo e aggiungilo all'array positiveNumbers

}

console.log('I numeri positivi sono: ', positiveNumbers);

/* 2. Deve interrompere al primo numero > 0 l'esecuzione del for (break) */

for (let i = 0; i < setNumbers.length; i++) {

    if (setNumbers[i] > 0) {
        console.log('Il primo numero positivo dell\' array è:', setNumbers[i]);
        break;
    }
}

let userWord = prompt('Inserisci una parola:').toLowerCase();


const userWordArray = userWord.split(''); // Scomponiamo la parola in un array di caratteri


let isPalindrome = true; // Iniziamo assumendo che la parola sia un palindromo

for (let i = 0; i < userWordArray.length / 2; i++) { // cicliamo gli emelenti dell'array fino a quando non arriviamo a metà 

    // Confrontiamo ogni carattere con il suo corrispondente "speculare" 
    // esempio: [ 'a' , 'n' , 'n' , 'a' ] 

    // 1' confronto - elemento a indice 0 ('a') lo confrontiamo con 
    // l'elemento posto alla posizione nell'array di indice = lunghezza dell'array (4) -1 - indice dell'array (0) = [3] ovvero ('a')
    // in questo caso è uguale quindi procede con il ciclo aggiungendo 1 e ricomincia.....
    if (userWordArray[i] !== userWordArray[userWordArray.length - 1 - i]) {

        // Se anche solo un confronto non corrisponde, la parola non è un palindromo
        isPalindrome = false;

        break; // Usciamo dal ciclo perché non è più necessario controllare gli altri caratteri
    }
}


if (isPalindrome) {
    console.log("Successo! È un palindromo!");
} else {
    console.log("La parola non è un palindromo.");
}


