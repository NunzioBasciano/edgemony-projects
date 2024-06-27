import "./Button.css";

function Button(props) {
    const { children, className, ...attrs } = props;
    const classes = 'btn' + ' ' + (className || '');
    return (
        <button {...attrs} className={classes}>
            {children}
        </button>
    )
}

export {
    Button
}