import options from "./options";
import { NavLink } from "react-router-dom";
import styles from './Sidebar.module.css';

export default function Sidebar({ page }) {

    return (<>
        <div className={styles.page}>
            <ul>
                {options[page].map(option => <li><NavLink to={`/${page}/${option.path}`}>{option.name}</NavLink></li>)}
            </ul>
        </div>
    </>)

}