// Funzione che genera l'HTML del footer
function getFooterHTML() {

    // Chiama la funzione per ottenere il codice HTML del menu
    const menuHTML = getMenuHTML();

    // Ritorna una stringa di template che rappresenta il footer HTML con il menu incluso
    return `<footer class='footer'>
                <div class='container'>
                    <div class='wrapper'>
                        <div class='logo'>Logo</div>
                            <nav class='nav'>
                                ${menuHTML}
                            </nav>                        
                    </div>
                </div>
            </footer>`;
}

// Funzione che genera l'HTML del menu
function getMenuHTML() {
    // Definisce un array di oggetti, ciascuno rappresenta un elemento del menu con etichetta e figli (sotto-elementi)
    const menuItems = [
        {
            label: 'About us',
            children: [
                { label: 'Company info' },
                { label: 'Careers' },
                { label: 'Facebook' },
                { label: 'Instagram' }
            ],
        },
        {
            label: 'About us',
            children: [
                { label: 'Company info' },
                { label: 'Careers' },
                { label: 'Facebook' },
                { label: 'Instagram' }
            ],
        }
    ];

    // Ritorna una stringa di template che rappresenta il menu HTML, concatenando gli elementi mappati
    return `
        <ul class='menu'>
            ${menuItems.map((item) => getMenuItemHTML(item)).join('')}
        </ul>`
}

// Funzione che genera l'HTML per un singolo elemento del menu
function getMenuItemHTML(options) {

    // Destruttura le opzioni passate, fornendo valori di default per label, href, e children
    const { label, href = '#', children = [] } = options;

    // Mappa gli elementi figli in stringhe HTML e li concatena in un'unica stringa
    const subItemsHTML = children.map(item => getMenuItemHTML(item)).join('');

    // Genera il codice HTML per il sottomenu
    const subMenuHTML = '<ul>' + subItemsHTML + '</ul>';

    // Ritorna una stringa di template che rappresenta un elemento di lista del menu con sottomenu (se presente)
    return `<li class='item'>
        <a href='${href}'>${label}</a>
        ${children.length > 0 ? subMenuHTML : ''}
    </li>`;
}

export { getFooterHTML };
