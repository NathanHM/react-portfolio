import { useState } from "react"
import Grid from "./Grid";
import checkSurroundings from "./checkSurroundings";


export default function Minesweeper() {

    const width = 10;
    const height = 15;
    const mines = 20;
    const [flagCount, setFlagCount] = useState(1);
    const [playing, setPlaying] = useState(false);
    const [field, setField] = useState([]);
    const [state, setState] = useState('')

    const reset = () => {
        setPlaying(true);
        setFlagCount(1);
        setState(`Mines: ${mines}`)
        setField(Array.from({ length: height * width }, () => ({
            value: 0,
            surroundings: undefined,
            clicked: false,
            flagged: ''
        })));

        for (let i = 0; i < mines / 2; i++) {
            setField(prev => {
                const next = [...prev];
                let random = Math.floor(Math.random() * height * width)
                while (next[random].value === "M") {
                    random = Math.floor(Math.random() * height * width)
                }
                next[random].value = "M";
                return next;
            })
        }
        setField(prev => checkSurroundings(prev, height, width))
    }

    useState(() => {
        if (!playing) {
            setPlaying(true);
            setState(`Mines: ${mines}`)
            setField(Array.from({ length: height * width }, () => ({
                value: 0,
                surroundings: undefined,
                clicked: false,
                flagged: ''
            })));

            for (let i = 0; i < mines / 2; i++) {
                setField(prev => {
                    const next = [...prev];
                    let random = Math.floor(Math.random() * height * width)
                    while (next[random].value === "M") {
                        random = Math.floor(Math.random() * height * width)
                    }
                    next[random].value = "M";
                    return next;
                })
            }
            setField(prev => checkSurroundings(prev, height, width))
        }
    }, [playing])

    return (<>

        <h3>Minesweeper</h3>


        <div className="center">
            <Grid height={height} width={width} field={field} mines={mines} flagCount={flagCount} setFlagCount={setFlagCount} setField={setField} setState={setState} />
        </div>

        <div className="space-between">
            <button onClick={reset}>
                Reset
            </button>

            {state}
        </div>


    </>)

}