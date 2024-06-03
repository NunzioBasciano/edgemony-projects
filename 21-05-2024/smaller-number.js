/* - Scrivere una function che dati due parametri in ingresso controlla se siano numeri e torna il numero più piccolo:

```js

function min(a, b){

    return //...
}

console.log(min(1, 3));     // 1;
console.log(min(5, -3));    // -3;
console.log(min(100, 20)  );  // 20;

``` */
/* 
function min (a, b) {

} */


function min(a, b) {
    let aIsInteger = Number.isInteger(a);
    let bIsInteger = Number.isInteger(b);

    if (!aIsInteger && !bIsInteger) {
        return ('I valori inseriti non sono numeri');

    } else if (a < b) {
        return (a);

    } else if (a > b) {
        return (b);
    } else {
        return ('I numeri forniti sono uguali!');
    }
}


console.log(min(1, 3));     // 1;
console.log(min(5, -3));    // -3;
console.log(min(100, 20));  // 20;

