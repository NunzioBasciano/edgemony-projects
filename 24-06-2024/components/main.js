async function getMainHTML() {
    const sectionHTML = await getSectionHTML();

    return `
    <main>
        ${getAsideHTML()}
        ${sectionHTML}
     </main>
`;
}

function getAsideHTML() {
    return `<aside class='left'>
                <h2>Sidebar<h2>
                <ul>
                    <li>Side item1</li>
                    <li>Side item2</li>
                    <li>Side item3</li>
                    <li>Side item4</li>
                    <li>Side item5</li>
                </ul>      
            </aside>`;
}

async function getSectionHTML() {

    const data = await GET();

    return `<section>
                ${data.map((card) => getListCardHTML(card)).join('')}
            </section>`;
}

function getListCardHTML(obj) {

    return `<div class='card'>
                <h2>${obj.title}</h2>
                <p>${obj.body}</p>
            </div>`;
}

const GET = async () => {
    // scriviamo la funzione fetch con il template literal per poter inserire il limit e l'offset
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    // aspettiamo la risposta e la convertiamo in json
    const data = await res.json();

    return data;
}

export { getMainHTML };