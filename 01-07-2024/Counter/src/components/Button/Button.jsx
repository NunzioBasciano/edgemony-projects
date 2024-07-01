import './Button.css'

function Button(props) {
    return (
        <button onClick={props.onClick} id={props.id}>{props.value}</button>
    )
}

export { Button }

