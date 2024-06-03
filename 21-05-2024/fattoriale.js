/*
- Bonus point (opzionale):
il fattoriale (n!) in matematica è il prodotto di un numero intero per tutti i numeri precedenti positivi (!==0).
esempio: 5! (fattoriale di 5) è 5 * 4 * 3 * 2 * 1 = 120

scriviamo una funzione ricorsia che calcola il fattoriale di un numero passato tramite parametro e lo stampa in console.

```js

function factorial(n){

}
```
*/

function factorial(n) {

    if (typeof n !== 'number') {
        console.log('Probabilmente non hai inserito un numero');
        return;
    }

    let result = 1;
    if (n === 0) {
        return result;

    } else if (n < 0) {
        console.log('Non è possibile calcolcare il fattoriale di un numero negativo');
        return;

    } else {
        return n * factorial(n - 1);
    }

}
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(-15));
console.log(factorial('ciao'));

// 5 != 0. entra nell'else e trona
// 5 * (funz. factorial di 5 - 1 = 4) -> 5 * 4 = 20
// 20* (funz. factorial di 4 - 1 = 3) -> 20 * 3 = 60
// 60* (funz. factorial di 3 - 1 = 2) -> 60 * 2 = 120
// 120* (funz. factorial di 2 - 1 = 1) -> 120 * 1 = 120
// 120* (funz. factorial di 1 - 1 = 0; if n = 0 -> result = 1) -> 120 * 1 = 120
