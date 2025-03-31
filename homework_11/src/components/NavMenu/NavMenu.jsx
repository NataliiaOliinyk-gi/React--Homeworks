import { NavLink } from "react-router-dom";

import styles from './NavMenu.module.css';

const NavMenu = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <NavLink className={styles.link} to="/">Главная</NavLink>
                </li>
                <li>
                    <NavLink className={styles.link} to="/articles">Статьи</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default NavMenu;