import "./Main.css";
import posts from "./posts.json";

function Main() {
    return (
        <>
            <main>
                <div className="container">
                    <div className="main-grid">
                        <Sidebar />
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

function Sidebar() {
    return (
        <>
            <aside className='left'>
                <h2>Logo</h2>
                <ul className='list'>
                    <li className='item'>item1</li>
                    <li className='item'>item2</li>
                    <li className='item'>item3</li>
                    <li className='item'>item4</li>
                    <li className='item'>item5</li>
                </ul>
            </aside>
        </>
    )
}

export { Main }
