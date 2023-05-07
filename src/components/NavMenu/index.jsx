import React from "react";
import logo from "./media/Logo.png";
import style from "./index.module.css";

export default function NavMenu() {
  return (
    <header className={style.header}>
      <nav className={["wrapper", style.nav_menu].join(" ")}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <ul className={style.block_menu}>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#skills">
            <li>Skill</li>
          </a>
          <a href="#project">
            <li>Project</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}
