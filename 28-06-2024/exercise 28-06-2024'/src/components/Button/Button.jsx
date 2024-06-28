import './Button.css'

function Button(props) {


    return (
        <>
            <button className={'button ' + props.className}>{props.value}</button >
        </>
    )
}

export {
    Button
}