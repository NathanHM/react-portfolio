import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

export default function Bar({ name, path, page }) {

    return (
        <div className={styles.bar}>
            <NavLink to={`/${page}/${path}`}>
                {name}
            </NavLink>
        </div>
    )
}