import Cell from "./Cell";
import styles from "./TicTacToe.module.css";

export default function Grid({ board, turn, setBoard, setTurn, done }) {

    const handleClick = i => {

        if (!board[i] && !done) {

            setBoard(prev => {
                const newBoard = [...prev];
                newBoard[i] = turn;
                return newBoard;
            });

            if (turn === 'X') {
                setTurn('O');
            } else {
                setTurn('X');
            }


        }
    }

    return (

        <div className={styles.board}>
            <div className={styles.boardRow}>
                <Cell value={board[0]} handleClick={() => handleClick(0)} />
                <Cell value={board[1]} handleClick={() => handleClick(1)} />
                <Cell value={board[2]} handleClick={() => handleClick(2)} />
            </div>
            <div className={styles.boardRow}>
                <Cell value={board[3]} handleClick={() => handleClick(3)} />
                <Cell value={board[4]} handleClick={() => handleClick(4)} />
                <Cell value={board[5]} handleClick={() => handleClick(5)} />
            </div>
            <div className={styles.boardRow}>
                <Cell value={board[6]} handleClick={() => handleClick(6)} />
                <Cell value={board[7]} handleClick={() => handleClick(7)} />
                <Cell value={board[8]} handleClick={() => handleClick(8)} />
            </div>
        </div>

    )
}