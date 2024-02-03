import styles from "./header.module.css";
import Logo from "../../img/Logo.png";
import IconCloser from "../../img/menu-closer.svg";
import { useState } from "react";
import IconsBars from "../../img/menu-togle.svg";
import Github from "../../img/github.png";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const links = [
    { name: "INICIO", link: "/"},
    { name: "APREENDER", link:"/"},
    { name: "REFERENCIA", link:"/"},
    { name: "COMUNIDADE", link:"/"},
  ];

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  return (
    <header
      id={styles.Menu}
      className={`${styles.header} ${menuActive ? styles.active : ""}`}
    >
      <div className={styles.header_wrapper}>
        <div>
          <button className={styles.LogoButton}>
            <img src={Logo} alt="Logo menu" />
          </button>
        </div>
        <button id={styles.buttonMobile} onClick={toggleMenu}>
          <img
            id={styles.Icons}
            src={menuActive ? IconCloser : IconsBars}
            alt="Icone Menu"
          />
        </button>
        <nav id={styles.header_nav} className={menuActive ? styles.active : ""}>
          <ul id={styles.header_lista} className={styles.ul_wrapper}>
            {links.map((link, index) => (
              <li className={styles.header_li} key={link.name}>
                <a className={styles.navLink} href={link.link} key={index}>
                  {link.name}
                </a>
              </li>
            ))}
              <li className={styles.btn_li}>
              <a href="#" className={styles.btn_login}>
                DOCUMENTAÇÃO
              </a>
              </li>
            <img src={Github} alt="Github"></img>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
