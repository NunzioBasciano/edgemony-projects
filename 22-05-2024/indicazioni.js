/* #### Direzioni
Scriviamo una function che prende in parametro una serie indefinita di indicazioni, per ogni indicazione stampare un console.log

nb: le indicazione possono essere solo "su" "giù" "sinistra" "destra"

```js

function indicazioni(...directions){

}

indicazioni('su', 'su', 'sinistra'); 
// output:
// 'su'
// 'su'
// 'sinistra'
```
*/
const up = 'su';
const down = 'giù';
const left = 'sinistra';
const right = 'destra;'

function indicazioni(...directions) {

    for (let direction of directions) {
        console.log(direction);
    }

}

indicazioni('su', 'su', 'sinistra');


