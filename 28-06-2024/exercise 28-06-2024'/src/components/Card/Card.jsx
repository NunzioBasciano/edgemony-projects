import './Card.css'
import { Button } from '../Button/Button'


function Card(props) {


    return (
        <>
            <div className={'card ' + props.className}>
                <img className='card-image' src={props.src} alt="test" />
                <h2>{props.title}</h2>
                <ul>
                    <li>{props.item1}</li>
                    <li>{props.item2}</li>
                    <li>{props.item3}</li>
                </ul>
                <Button className={props.buttonClassName} value={props.buttonValue} />
            </div>
        </>
    )
}

export {
    Card
}