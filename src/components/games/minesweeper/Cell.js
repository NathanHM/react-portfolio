import styles from "./Minesweeper.module.css";

export default function Cell({ value, flagged, handleClick, clicked, handleRightClick }) {

    if (clicked) {
        return (
            <div className={styles.button}>
                <div className={styles.square} onClick={handleClick}>
                    {value}
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.button}>
                <div className={styles.square} onClick={handleClick} onContextMenuCapture={handleRightClick}>
                    {flagged}
                </div>
            </div>
        )
    }
}