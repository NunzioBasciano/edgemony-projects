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
                <Item
                    title="La Divina Commedia"
                    author="Dante Alighieri"
                    body="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate sit, explicabo ullam facilis cumque eaque?"
                />
                <Item
                    title="La Divina Commedia"
                    author="Dante Alighieri"
                    body="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate sit, explicabo ullam facilis cumque eaque?"
                />
            </article>
        </>
    )
}

function Item(props) {

    const { title, author, body } = props;
    return (
        <>
            <h3>{title}</h3>
            <div><small>{author}</small></div>
            <p>{body}</p>
        </>
    )
}

function Sidebar() {
    return (
        <>
            <aside class='left'>
                <h2>Sidebar</h2>
                <ul class='list'>
                    <li class='item'>item1</li>
                    <li class='item'>item2</li>
                    <li class='item'>item3</li>
                    <li class='item'>item4</li>
                    <li class='item'>item5</li>
                </ul>
            </aside>
        </>
    )
}

export { Main }
