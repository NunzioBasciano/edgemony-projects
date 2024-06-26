import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="wrapper">
                    <div className="logo">Logo</div>
                    <nav className="nav">
                        <Menu />
                    </nav>
                </div>
            </div>
        </footer>
    );
};

// Menu component
const Menu = (props) => {
    const menuItems = [
        {
            label: 'About us',
            children: [
                { label: 'Company info' },
                { label: 'Careers' },
                { label: 'Facebook' },
                { label: 'Instagram' },
                { label: 'Our Team' }

            ],
        },
        {
            label: 'Services',
            children: [
                { label: 'Consulting' },
                { label: 'Support' },
                { label: 'Contact' },
                { label: 'Training' }

            ],
        },
        {
            label: 'Products',
            children: [
                { label: 'New Arrivals' },
                { label: 'Best Sellers' },
                { label: 'Discounts' },
                { label: 'Categories' }

            ],
        },
        {
            label: 'Resources',
            children: [
                { label: 'Blog' },
                { label: 'Case Studies' },
                { label: 'Webinars' },
                { label: 'White Papers' }
            ],
        }
    ];

    return (
        <ul className="menu">
            {/* Mappa gli elementi del menu */}
            {menuItems.map((item, index, array) => (
                <MenuItem
                    key={`${item.label}-${index}`}
                    label={item.label}
                    href={item.href}
                    children={item.children}
                />
            ))}
        </ul>
    );
};

// MenuItem component
const MenuItem = (props) => {

    const { label, href = '#', children = [] } = props

    return (
        <li className="item">
            {/* Link del menu */}
            <a href={href}>{label}</a>
            {/* Se ci sono figli, mostra un sotto-menu */}
            {children.length > 0 && (
                <ul>
                    {/* Mappa e rendi gli elementi del sotto-menu */}
                    {children.map((child, index) => (
                        <MenuItem
                            key={`${child.label}-${index}`}
                            label={child.label}
                            href={child.href}
                            children={child.children}
                        />
                    ))}
                </ul>
            )}
        </li>
    );
};




export {
    Footer
}