import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='home'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='contact'>
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink to='games'>
                        Games
                    </NavLink>
                </li>
                <li>
                    <NavLink to='algorithms'>
                        Algorithms
                    </NavLink>
                </li>
                <li>
                    <NavLink to='projects'>
                        Projects
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}