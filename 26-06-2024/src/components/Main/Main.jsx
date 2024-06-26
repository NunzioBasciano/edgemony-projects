import "./Main.css";
import posts from "./posts.json";

function Main() {
    return (
        <>
            <main>
                <div className="container">
                    <div className="main-grid">
                        <Sidebar items={sideElement} />
                        <PostSection />
                    </div>
                </div>
            </main>
        </>
    )
}
function PostSection() {
    return (
        <>
            <section>
                <h2>Lista post</h2>
                <Post />
            </section>
        </>
    )
}

function Post() {
    return (
        <>
            <article role="listitem">
                {posts.map((item, index, array) => (
                    <Item
                        key={`${item.label}-${index}`}
                        title={item.title}
                        body={item.body}
                    />

                ))}
            </article>
        </>
    )
}

function Item(props) {

    const { title, author, body } = props;
    return (

        <div className="card">
            <h3>{title}</h3>
            <div><small>{author}</small></div>
            <p>{body}</p>
        </div>

    )
}

const sideElement = [
    { label: 'General' },
    {
        label: 'Teams',
        subItems: [
            { label: 'Banned users' },
            { label: 'Calendar' }
        ]
    },
    { label: 'Billing' },
    { label: 'Invoices' },
    {
        label: 'Account',
        subItems: [
            { label: 'Detail' },
            { label: 'Security' },
            { label: 'Logout' }
        ]
    }
];
function Sidebar({ items }) {

    return (
        <>
            <aside className='left'>
                <h2>Logo</h2>
                <ul className='list'>
                    {items.map((item, index) => (
                        <SidebarItem key={index} item={item} />
                    ))}
                </ul>
            </aside>
        </>
    )
}

function SidebarItem({ item }) {
    return (
        <li>
            {item.label}
            {item.subItems && (
                <ul>
                    {item.subItems.map((subItem, index) => (
                        <li key={index}>{subItem.label}</li>
                    ))}
                </ul>
            )}
        </li>
    )
}

export { Main }
