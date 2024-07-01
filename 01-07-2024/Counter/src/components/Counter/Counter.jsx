import './Counter.css'

function Counter(props) {
    return (
        <div className="counter">
            <h1>Counter: {props.value}</h1>
        </div>
    )
}

export default Counter;