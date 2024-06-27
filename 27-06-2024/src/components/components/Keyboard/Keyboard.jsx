import { Button } from "../../atoms/Button/Button";
import "./Keyboard.css";

function Keyboard(props) {

    const items = ["AC", "+/-", "%", "/", 7, 8, 9, "X", 4, 5, 6, "-", 1, 2, 3, "+", "Reset", 0, ".", "="];
    const specialBtn = ["AC", "+/-", "%",];
    const operatorBtn = ["/", "X", "-", "+", "="];
    return (
        <div className="calculator-keyboard">
            {items.map((item, index) => {

                let classes;
                if (specialBtn.includes(item)) {
                    classes = 'special-btn-1';
                } else if (operatorBtn.includes(item)) {
                    classes = 'special-btn-2';
                } else if (item === 'Reset') {
                    classes = 'btn-reset';
                } else {
                    classes = 'normal-btn';
                }
                return (
                    <Button key={index} className={classes}>
                        {item}
                    </Button>
                );

            })}
        </div>
    );
}

export {
    Keyboard
}