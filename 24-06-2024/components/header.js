/* Funzione che genera l'html dell'header */
function getHeaderHTML() {

    // Chiama la funzione per ottenere il codice HTML del menu
    const menuHTML = getMenuHTML();

    // Ritorna una stringa di template che rappresenta l'header HTML con il menu incluso
    return `
        <header class='header'>
            <div class='container'>
                <div class='wrapper'>
                    <div class='logo'>Logo</div>
                    ${menuHTML}
                    </div>
                </div>
            </div>
        </header>
    `;
}

// Funzione che genera l'HTML del menu
function getMenuHTML() {

    // Definisce un array di oggetti, ciascuno rappresenta un elemento del menu con un'etichetta e un link
    const menuItems = [
        { label: 'About us', href: 'https://edgemony.com/' },
        { label: 'Eventi', href: 'https://edgemony.com/eventi/?_gl=1*bxiaab*_up*MQ..*_ga*MTY1MjYyMDE2MC4xNzE5MjQ0NTc5*_ga_R6ZJ1Q3L2F*MTcxOTI0NDU3OC4xLjEuMTcxOTI0NDYxMi4wLjAuMA..' },
        { label: 'Products', href: 'https://edgemony.com/corso-front-end-developer-full-time/?_gl=1*tsehxx*_up*MQ..*_ga*MTY1MjYyMDE2MC4xNzE5MjQ0NTc5*_ga_R6ZJ1Q3L2F*MTcxOTI0NDU3OC4xLjEuMTcxOTI0NDY0My4wLjAuMA..' },
    ];

    // Mappa l'array degli elementi del menu in una stringa di HTML per ciascun elemento e li unisce in un'unica stringa
    let menuItemsHTML = menuItems.map(item => getMenuItemHTML(item)).join('');

    // Ritorna una stringa di template che rappresenta il menu HTML
    return `        
                        <nav class='nav'>
                            <ul class='list'>
                            ${menuItemsHTML}
                            </ul>
                        </nav>
                    </div>
    `
}

// Funzione che genera l'HTML per un singolo elemento del menu
function getMenuItemHTML(options = {}) {

    // Destruttura le opzioni passate, fornendo valori di default per label e href
    const { label, href = '#' } = options;

    // Ritorna una stringa di template che rappresenta un elemento di lista del menu
    return `        
        <li class='item'>
            <a href='${href}'>${label}</a>
        </li>
    `
}

export {
    getHeaderHTML
}