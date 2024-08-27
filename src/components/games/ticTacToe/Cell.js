import { useEffect, useState } from "react";
import styles from './TicTacToe.module.css';

export default function Cell({ value, handleClick }) {

    const [disabled, setDisabled] = useState(false);

    useEffect(() => {

        if (value) {
            setDisabled(true)
        }

    }, [value])

    return (
        <div className={styles.button} onClick={handleClick} disabled={disabled}>
            {value}
        </div>
    )
}