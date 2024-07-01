import './Counter.css'

function Counter(props) {

    if (props.value === 0) {
        return (
            <div className='counter zero'>
                <h1 className='zero'>{props.value}</h1>
            </div>)
    }

    return (
        <div className={'counter ' + props.className}>
            <h1 className={props.className}>{props.value}</h1>
        </div>
    )
}

export default Counter;