/*  inseriamo in HTML il seguente codice dentro il body:

```html

<div class="container">
    <h1 title="Titolo" id="heading">Ciao classe!</h1>
    <h2 id="kicker">benvenuti nel mondo del DOM</h2>
    <p class="description">Testo a caso</p>

    <button>Canel</button>
    <button>Click me!</button>
</div>

#### Selettori

- Usando il querySelector prendiamo l'elemento con id `heading` ed eseguiamo un console.log
 
```
// output <h1>...</h1>   */

const headingEl = document.body.querySelector('#heading');
console.log(headingEl);

/* - Per ogni elemento `button` presente in pagina stampiamo in console il suo testo.
 
```js
 
const buttonEls = document.querySelectorAll('button');
 
for(...){
    console.log(...);
}
 
// output 
// cancel
// Click me!*/


const buttonsEls = document.querySelectorAll('button');
const array = Array.from(buttonsEls);

for (let el of array) {
    console.log(el.innerHTML);
}

/*
 
#### Contatore
 
- salviamo due variabili con dentro i riferimenti ai due button della pagina `resetBtn` e `clickBtn`;
- inseriamo una function dentro l'evento `onclick` di `clickBtn` e per ogni click:
- leggiamo il valore attuale del proprio innerHTML
    - convertiamo il valore a numero, se NaN portiamolo a 0;
    - incrementiamo il valore precedente e salviamolo in innerHTML;
 
- inseriamo una function dentro l'evento `onclick` di `resetBtn` e per ogni click impostiamo innerHTML di `clickBtn` a "0";
 
```js
 
const resetBtn = document.querySelector(..);
const clickBtn = document.querySelector(..);
 
resetBtn.onclick = function(){
    // portare clickBtn.innerHTML a "0"
}
 
clickBtn.onclick = function(){
    // se stringa portare clickBtn.innerHTML a "0"
    // se numero incrementare e salvare il valore
}
 
*/

const resetBtn = document.body.querySelector('#resetBtn');
const clickBtn = document.body.querySelector('#clickBtn');



clickBtn.onclick = () => {
    // Leggi il valore attuale di innerHTML (la prima volta sarà click me.)
    let currentValue = clickBtn.innerHTML;

    // Converti il valore a numero
    let numberValue = parseInt(currentValue);


    // Se il valore non è un numero (NaN), impostalo a 0
    if (isNaN(numberValue)) {
        numberValue = 0;
    }
    // Incrementa il valore e salvalo in innerHTML
    clickBtn.innerHTML = numberValue + 1;
};

resetBtn.onclick = () => {

    let currentValue = resetBtn.innerHTML;

    let numberValue = parseInt(currentValue);

    clickBtn.innerHTML = 0;
};