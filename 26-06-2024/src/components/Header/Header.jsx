import "./Header.css";
// ogni componente ha come primo parametro un oggetto 'props'
// se quando usato viene messo del contenuto dentro il mio componente, questo sarà disponibile dentro props.children
function Header() {

    return (
        <header className="header">
            <div className="container">
                <div className="logo">Logo</div>
                <Menu />
            </div>
        </header>
    )
}

// Funzione Menu che definisce il menu di navigazione
function Menu(props) {

    const items = [
        { label: 'About us', href: 'https://www.google.com/' },
        { label: 'Blog', href: 'https://developer.mozilla.org/en-US/' },
        { label: 'Contact', href: 'https://edgemony.com/' },
        { label: 'More', href: 'https://www.w3schools.com/tags/tag_html.asp' }
    ]

    return (
        <nav className="nav">
            <ul className="list">
                {items.map((item, index, array) => (
                    <ListItem
                        key={`${item.label}-${index}`}
                        label={item.label}
                        href={item.href} />
                ))}
            </ul>
        </nav>
    )
}

// Funzione Item che definisce un elemento di menu
function ListItem(props) {
    {/* Estrazione di label e href dai props, con href che ha un valore predefinito di '#' */ }
    const { label, href = '#' } = props;

    return (
        <li className="item">
            <a href={href}>{label}</a>
        </li>
    );
}

export { Header }