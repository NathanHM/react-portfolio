import { useEffect, useState } from 'react';
import Grid from './Grid';

export default function TicTacToe() {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState('X')
    const [winner, setWinner] = useState('');
    const [done, setDone] = useState(false);

    const reset = () => {
        setBoard(Array(9).fill(null));
        setTurn('X');
        setWinner('')
        setDone(false);
    }

    useEffect(() => {

        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (const line of lines) {
            if (board[line[0]] && board[line[0]] === board[line[1]] && board[line[0]] === board[line[2]]) {
                if (turn === 'X') {
                    setWinner("O wins!");
                } else {
                    setWinner("X wins!");
                }
                setDone(true);
            }
        }

    }, [board, turn])

    useEffect(() => {

        let tie = true;

        for (const square of board) {
            if(!square) {
                tie = false;
            }
        }

        if (tie) {
            setDone(true);
            setWinner('Draw!');
        }
    }, [board])

    return (<>

        <h3>Tic-Tac-Toe</h3>

        <div className='center'>
            <Grid board={board} turn={turn} setBoard={setBoard} setTurn={setTurn} done={done} />
        </div>

        <div className='space-between'>
            <button onClick={reset}>Reset</button>
            {done ? winner : `${turn}'s turn`}
        </div>

    </>)
}