/* #### Creazioni elementi:

Aggiungiamo al nostro HTML tramite JS due nuovi elementi: un h1 ed un paragrafo.
Usiamo il metodo document.createElement per creare i vari elementi 
Per inserirli nella pagina usiamo rispettivamente: insertAdjacentElement() per h1, e append() per il <p>.*/



// 1 STEP creo una variabile che richiami il div main-container
const containerEl = document.querySelector('#main-container');


// 2 STEP creo la costante heading che crea l'elemento h1
const heading = document.createElement('h1');
containerEl.style.color = 'yellow';
heading.style.padding = '16px 16px';


// 3 STEP inserisco il testo dell'elemento
heading.innerHTML = 'Edgemony-cb10-course';

// 4 step Lo colloco all'inizio del div container mediante insertAdjacentElement
containerEl.insertAdjacentElement('afterbegin', heading);

const paragraf = document.createElement('p');
paragraf.style.margin = '16px'
paragraf.innerHTML = "Presenze del 24/05/2024 ";
containerEl.append(paragraf);


/*

#### Button contatore dinamico:

- Aggiungiamo nella nostra pagina, dopo il paragrafo, un <button>0</button>.
- Al button associamo un evento `onmouseenter` che cambierà lo style del button (sperimentiamo un po');
- Al button associamo un altro evento `onclick` che al click aumenta di uno il numero inserito nel proprio innerHTML;

*/

const button = document.createElement('button');
button.style.backgroundColor = 'yellow';
button.style.minWidth = '50px';
button.innerHTML = '0';
containerEl.appendChild(button);



button.onmouseenter = function () {
    button.style.backgroundColor = '#796709';
    button.style.minWidth = '200px';
    button.style.borderRadius = '16px';
}

button.onclick = function () {
    const html = this.innerHTML;
    const count = Number(html) || 0;
    this.innerHTML = count + 1;
}
/*


#### Lista di nomi:

Insieriamo all'interno della pagina HTML un elemento form secondo quanto riportato sotto:

```html

<form>
    <div>
        <label for="nomi">Lista nomi e cognomi</label>
        <input 
            id="nomi" 
            name="nomi" 
            type="text" 
            minlength="3" 
            autocomplete="off" 
        />
    </div>

    <button type="submit">Invia</button> 
</form>

<ul class="list"></ul>

```*/

const formEl = document.querySelector('form');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('.list');

formEl.onsubmit = function (event) {

    event.preventDefault(); /// impediamo il caricamento della pagina

    const inputValue = inputEl.value;


    if (typeof inputValue === 'string' && inputValue.includes(' ')) {

        const liEl = document.createElement('li');
        liEl.textContent = inputValue;

        liEl.onclick = function () {
            console.log('Elemento aggiunto', inputValue);
        }

        listEl.appendChild(liEl);
        console.log(inputValue);
        inputEl.value = '';


    } else {
        console.log('Il valore inserito non è valido');
    }


}



/*

Usiamo JS per inserire all'evento `onsubmit` una function che:
- previene il comportamento di default del form.
- Quindi prendere il valore dell'input, controllare che sia una stringa valida e che abbia almeno uno spazio all'interno;
- Se il valore è valido creare un elemento <li> e inserirlo dentro l'elemento `.list` (vedi HTML)
- Aggiungere una function al `onclick` del nuovo elemento <li> e stampare un console.log() quando viene eseguito il click.

```js

const formEl = // ...;
const inputEl = // ...;

formEl.onsubmit = function(event){

    event. /// eseguiamo un particolare metodo...

    const inputValue = // ...

    if(...){
        
    }
}

```


*/

