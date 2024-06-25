// Funzione Header che definisce l'intestazione della pagina. 
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
function Menu() {
    return (
        <nav className="nav">
            <ul className="list">
                <Item label={'About us'} />{/* Componente Item con prop "label" impostato su "About us" */}
                <Item label={'Blog'} />
            </ul>
        </nav>
    )
}

// Funzione Item che definisce un elemento di menu
function Item(props) {
    {/* Estrazione di label e href dai props, con href che ha un valore predefinito di '#' */ }
    const { label, href = '#' } = props;

    return (
        <li className="item">
            <a href="#">{label}</a>
        </li>
    );
}

export { Header }