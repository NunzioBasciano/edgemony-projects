/* Dato questo object:

const coder = {
    firstName: 'Luca', // coppia chiave - valore : "firstName" - "Luca"
    lastName: 'Pagliaro',
    age: 29,
    skills: ['JavaScript', 'HTML', 'CSS'],
    address: {
        city: 'Catania',
        zipCode: '95100'
    }
};

vorrei scrivere del codice che possa:

- stampare un console.log per ogni skill presente in coder.skills 
    ```
    // output aspettato:
    'JavaScript'
    'HTML'
    'CSS'
```*/

const coder = {
    firstName: 'Luca',
    lastName: 'Pagliaro',
    age: 29,
    skills: ['JavaScript', 'HTML', 'CSS'],
    address: {
        city: 'Catania',
        zipCode: '95100'
    }
};

let skills = coder.skills;
console.log(`Le skills di Luca sono:
'${skills.at(0)}'
'${skills.at(1)}'
'${skills.at(2)}'`);

/*

- salvare dentro "coder.address" due nuove proprietà da chidere all'utente tramite prompt: "country" e "street".
  Eseguiamo poi un console.log per controllare tutto sia OK.*/

coder.address.country = prompt('Inserisci qui la tua nazione');
coder.address.street = prompt('Inserisci qui la via');
console.log(coder.address);

/*
- Stampiamo in console tutte le chiavi presenti dentro il mio oggetto.
  ```
  // output aspettato:
  "firstName"
  "lastName"
  "age"
  "skills"
  "address"*/

/*
*/

for (let key in coder) {

    const value = coder[key];
    console.log(`"${key}"`);
}

/*
- Per ogni proprietà presente dentro il nostro object, controlliamo la chiave. Se la prima lettera è una vocale stampiamo in console la chiave ed il suo valore.
```
// output aspettato:
age: 29
address: [object Object]
*/

const vowels = ['a', 'e', 'i', 'o', 'u'];

for (let key in coder) {

    let firstLetter = key.charAt(0).toLowerCase();

    if (vowels.includes(firstLetter)) {

        console.log(`${key}: ${coder[key]}`);
    }
}

/* Chiediamo all'utente, tramite prompt, cosa vuole salvare dentro il nostro object e (tramite un altro prompt) quale valore voglia inserire. Salviamo quindi una nuova proprietà con chiave/valore presi dai prompt.

```js
const key = prompt('...');
const value = prompt('...');

coder[...] = ...;
```
*/
const newProperty = prompt('Inserisci qui la nuova proprietà');
const newValue = prompt('Inseririsci qui il valore');



coder[newProperty] = newValue;

console.log(coder);


