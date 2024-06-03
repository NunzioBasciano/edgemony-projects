/* - Scriviamo una function potenza che accetta due parametri: base ed esponente. 
Facciamo tornare alla funzione il numero "base" moltiplicato per se stesso tante volte quante indicate dall'esponente

```js

function potenza(base, esponente){

    for(let i=0; i < espontente, i++){
        // ...
    }

}
*/

function potenza(base, esponente) {

    let result = 1;

    if (esponente === 0) {

        result = 1;

    } else if (esponente < 0) {

        result = 1 / base;

    }

    for (let i = 0; i < esponente; i++) {

        result *= base;
    }

    return console.log(result);

}

potenza(4, 2);    // 16
potenza(5, 3);   // 125
potenza(1, 100); // 1
potenza(6, 0);   // 1
potenza(6, -5);   // 1

// bonus point prevediamo anche l'elevamento a potenza con esponente 0.



