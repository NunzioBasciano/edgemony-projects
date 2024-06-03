/*
- Scriviamo ed eseguamo una funzione che possa data una stringa tornarne una nuova con la prima lettera maiuscola, il resto minuscolo.

```js

function capitalize(string){
    return // ...;
}

// output 
capitalize('ciao');     // Ciao
capitalize('mondo');    // Mondo
capitalize('Mondo');    // Mondo
capitalize('TEST');     // Test

```
*/

function capitalize(word) {
    let firstLetterCapitalize = word.charAt(0).toUpperCase();
    let wordWithoutFirstLetter = word.slice(1);
    let wordWithoutFirstLetterLower = wordWithoutFirstLetter.toLowerCase();
    let wordCapitalize = firstLetterCapitalize + wordWithoutFirstLetterLower;
    return console.log(wordCapitalize);

}

capitalize('ciao');     // Ciao
capitalize('mondo');    // Mondo
capitalize('Mondo');    // Mondo
capitalize('TEST');     // Test