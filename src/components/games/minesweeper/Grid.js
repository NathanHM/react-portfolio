import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from './Minesweeper.module.css'
import Cell from "./Cell";

export default function Grid({ height, width, field, mines, setField, setState }) {

    const [grid, setGrid] = useState([]);
    const [flagCount, setFlagCount] = useState(1);

    useEffect(() => {

        const clickSurroundings = num => {
            const surroundings = field[num].surroundings;

            if (surroundings[0] !== false) {
                surroundings[0] = false;
                handleClick(num - width - 1);
            } if (surroundings[1] !== false) {
                surroundings[1] = false;
                handleClick(num - width);
            } if (surroundings[2] !== false) {
                surroundings[2] = false;
                handleClick(num - width + 1);
            } if (surroundings[3] !== false) {
                surroundings[3] = false;
                handleClick(num - 1);
            } if (surroundings[4] !== false) {
                surroundings[4] = false;
                handleClick(num + 1);
            } if (surroundings[5] !== false) {
                surroundings[5] = false;
                handleClick(num + width - 1);
            } if (surroundings[6] !== false) {
                surroundings[6] = false;
                handleClick(num + width);
            } if (surroundings[7] !== false) {
                surroundings[7] = false;
                handleClick(num + width + 1);
            }
        }

        const handleClick = num => {

            setField(prev => {
                const next = [...prev];
                next[num].clicked = true;
                return next;
            })

            if (field[num].flagged === 'F') {
                setFlagCount(flagCount - 1);
                setState(`Mines: ${mines - flagCount}`);
            }

            if (field[num].value === 'M') {
                setState('You lose!')

                for (let i = 0; i < height * width; i++) {
                    setField(prev => {
                        const next = [...prev];
                        next[i].clicked = true;
                        return next;
                    })
                }

                return;
            }


            if (field[num].value === 0) {
                clickSurroundings(num)
            }

            return;

        }

        const handleRightClick = num => {

            window.addEventListener(`contextmenu`, (e) => {
                e.preventDefault();
            });

            if (field[num].flagged) {
                setFlagCount(flagCount - 1);
                setState(`Mines: ${mines - flagCount}`);

                setField(prev => {
                    const next = [...prev];
                    next[num].flagged = '';
                    return next;
                })
            } else {
                setFlagCount(flagCount + 1);
                setState(`Mines: ${mines - flagCount}`);

                setField(prev => {
                    const next = [...prev];
                    next[num].flagged = 'F';
                    return next;
                })
            }
        }

        const rows = []
        for (let i = 0; i < height; i++) {
            const row = [];
            for (let j = 0; j < width; j++) {
                const num = j + i * width

                row.push(<Cell value={field[num].value} flagged={field[num].flagged} handleClick={() => handleClick(num)} clicked={field[num].clicked} handleRightClick={() => handleRightClick(num)} key={uuidv4()} />)
            }
            rows.push(<div className={styles.fieldRow} key={uuidv4()}>
                {row}
            </div>)
        }
        setGrid(rows)

    }, [field, height, width, setField, setState, mines, flagCount])



    return (
        <div className={styles.field}>
            {grid}
        </div>
    )
}