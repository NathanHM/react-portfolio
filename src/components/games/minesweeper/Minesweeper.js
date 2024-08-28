import { useState } from "react"
import Grid from "./Grid";
import checkSurroundings from "./checkSurroundings";


export default function Minesweeper() {

    const width = 10;
    const [height, setHeight] = useState(10);
    const [mines, setMines] = useState(20);
    const [playing, setPlaying] = useState(false);
    const [field, setField] = useState([]);
    const [state, setState] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
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

    const changeHeight = e => {
        setHeight(e.target.value)
    }

    const changeMines = e => {
        setMines(e.target.value)
    }

    const reset = () => {
        setState('');
        setPlaying(false);
    }

    return (<>

        <h3>Minesweeper</h3>

        {playing ?
            <>
                <Grid height={height} width={width} field={field} mines={mines} setField={setField} setState={setState} />

                <div className="space-between">
                    <button onClick={reset}>
                        Reset
                    </button>

                    {state}
                </div>
            </>
            :
            <form onSubmit={handleSubmit}>

                <div className="space-between">
                    <label name="height">Height: </label>
                    <input name="height" type="number" max="50" min="5" value={height} onChange={changeHeight} ></input>
                </div>

                <div className="space-between">
                    <label name="Mines">Mines: </label>
                    <input name="width" type="number" max={Math.min(50, height * width)} min="4" step="2" value={mines} onChange={changeMines}></input>
                </div>


                <div className="center">
                    <input type="submit" value="Play"></input>
                </div>

            </form>
        }


    </>)

}