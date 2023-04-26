import React from "react";
import style from "./index.module.css";

export default function NavMenu() {
  return (
    <header className={style.header}>
      <nav className={["wrapper", style.nav_menu].join(" ")}>
        <div>
          <h1>Software</h1>
          <h3>Developer</h3>
        </div>
        <ul className={style.block_menu}>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            <li>Skill</li>
          </a>
          <a href="#">
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
