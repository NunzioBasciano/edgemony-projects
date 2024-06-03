/* #### Conta il click

scriviamo una function che conta quante volte viene eseguita. Attacchiamo questa function all'evento click sul body usando document.body.onclick.

```js
let count = 0;
const countClick = () => {
    
} 

document.body.onclick = countClick;

// output:
// click -> 1
// click -> 2
// click -> 3

``` */


let count = 0;
const countClick = () => {
    count++;
    console.log(count);
}

document.body.onclick = countClick;





