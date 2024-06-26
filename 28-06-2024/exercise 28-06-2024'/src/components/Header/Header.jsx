import './Header.css'

function Header(props) {

    return (
        <header>
            <img src={props.logoUrl} alt="Logo" className={props.logoClassName} />
            <Menu />
            <img src={props.closeUrl} alt="close icon" className={props.closeClassName} />
        </header>
    )
}
console.log
function Menu() {
    const menuItem = [
        { label: 'About us', href: '#' },
        { label: 'Product', href: '#' },
        { label: 'Contact', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'More', href: '#' },
    ]

    return (
        <ul>
            {menuItem.map((item) => (
                <Item
                    key={item.label}
                    label={item.label}
                    href={item.href}
                    className={'list-element'} />
            ))}
        </ul>
    )
}

function Item(props) {
    return (
        <li className={props.className}>
            <a href={props.href}>{props.label}</a>
        </li>
    )
}

export { Header }