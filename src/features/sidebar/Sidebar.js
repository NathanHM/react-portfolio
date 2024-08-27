import options from "./options";
import styles from './Sidebar.module.css';
import Bar from "./Bar";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import icon from './sidebar.png';

export default function Sidebar({ page }) {

    const [display, setDisplay] = useState(true);

    const handleClick = () => {

        setDisplay(!display)
    }

    return (<>

        <div className={display ? styles.sidebar : styles.collapsed}>
            {options[page].map(option => <Bar name={option.name} path={option.path} page={page} display={display} key={uuidv4()} />)}
        </div>

        <button className={styles.button} onClick={handleClick}>
            <img src={icon} className="icon" alt="sidebar" />
        </button>

    </>)

}