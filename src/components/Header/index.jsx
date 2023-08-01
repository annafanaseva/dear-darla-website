import { NavLink } from 'react-router-dom';

import logo from '../../assets/img/logo.png';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logoWrapper}>
          <img src={logo} alt="LOGO" />
        </div>

        <ul className={styles.links}>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
              to="/"
            >
              Главная
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
              to="/about"
            >
              Обо мне
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
              to="/contact"
            >
              Контакты
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
