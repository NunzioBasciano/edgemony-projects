import './Button.css'

function Button(props) {
    return (
        <button disabled={props.disabled} onClick={props.onClick} id={props.id}>{props.value}</button>
    )
}

export { Button }

