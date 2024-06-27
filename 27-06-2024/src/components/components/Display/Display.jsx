import "./Display.css";

function Display(props) {

    const { input1, input2, operation, result } = props;

    return (
        <div className="calculator-display">
            <Operation />
            <Result />

        </div>
    );
}

function Operation() {

    return (
        <div className="calculator-operation">
            <p>{`5*4`}</p>
        </div>
    );
}

function Result() {

    return (
        <div className="calculator-result">
            {'5'}
        </div>
    );
}



export {
    Display
}