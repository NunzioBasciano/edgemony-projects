import styles from './card.module.css'

function Card(props) {
    return (
        <div className={styles.card}>
            <h1 className={styles.card_title}>ADVICE # {props.title}</h1>
            <p className={styles.card_description}>{'"' + props.description + '"'}</p>
            <img src="../public/images/divider.svg" alt="divider.icon" className={styles.card_icon_divider} />
            <button id='random' onClick={props.onClick} className={styles.card_icon_dice_button}>
                <img src="../public/images/dice.svg" alt="dice.icon" className={styles.card_icon_dice} />
            </button>
        </div>
    )
}

export default Card