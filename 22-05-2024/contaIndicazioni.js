/*
#### Contare le direzioni

scrivere una function partendo da quella di prima, per ogni direzione salvare dentro un oggetto il numero di indicazioni uguali.


function contaIndicazioni(...directions){
    const directions = { su: 0, giu: 0, ... };

    // fare un ciclo per ogni direction...

    return directions;
}
*/

const su = 'su';
const giu = 'giù';
const sinistra = 'sinistra';
const destra = 'destra';

function contaIndicazioni(...directions) {

    const direzioni = { su: 0, giu: 0, sinistra: 0, destra: 0 };

    for (let direction of directions) {

        switch (direction) {
            case 'su':
                direzioni.su += 1;
                break;

            case 'giu':
                direzioni.giu += 1;
                break;

            case 'sinistra':
                direzioni.sinistra += 1;
                break;

            case 'destra':
                direzioni.destra += 1;
                break;

        }
    }
    return console.log(direzioni);
}

contaIndicazioni('su', 'su', 'sinistra');





