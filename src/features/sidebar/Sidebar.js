import options from "./options";
import styles from './Sidebar.module.css';
import Bar from "./Bar";
import { v4 as uuidv4 } from "uuid";

export default function Sidebar({ page }) {

    return (
        <div className={styles.sidebar}>
            {options[page].map(option => <Bar name={option.name} path={option.path} page={page} key={uuidv4()} />)}
        </div>
    )


}