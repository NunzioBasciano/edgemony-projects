/* #### Bonus: Ripasso Array

Scrivere una function che data una stringa in input possa sostituire ogni carattere con il suo indice nell'alfabeto.

esempio: 
a = 1;
b = 2;

console.log(alphabetPosition('Rosso di sera, bel tempo si spera'))
// output: "18 15 19 19 15 4 9 19 5 18 1 2 5 12 20 5 13 16 15 19 9 19 16 5 18 1"

*/
function alphabetPosition(string) {

    let alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


    let raccoglitore = [];

    for (let i = 0; i < string.length; i++) {

        raccoglitore.push(alfabeto.indexOf(string[i]) + 1);

    }

    return console.log(raccoglitore.join(' '));
}

alphabetPosition('ciao');


/*

tips: 

```js
const indexForEachLetter = {
    a: 1,
}
const input = 'Rosso di sera, bel tempo si spera';


function alphabetPosition(string){
    let output = '';

    for(let letter of string){
        const value = indexForEachLetter[...];

    }

    return output;    
}
```
 */

