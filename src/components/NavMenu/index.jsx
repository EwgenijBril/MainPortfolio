import React, { useState } from "react";
import Modal from "../Modal";
import logo from "./media/Logo.png";
import style from "./index.module.css";

export default function NavMenu() {
  const [modalActive, setModalActive] = useState(false);
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
          <a onClick={() => setModalActive(true)}>
            <li>Contact</li>
          </a>
        </ul>
        <div className={style.message}>
          <Modal active={modalActive} setActive={setModalActive}>
            <form className={style.info}>
              <input type="text" name="Your name" placeholder="Your name" />
              <input type="email" name="email" placeholder="Email" />
              <textarea
                name="story"
                cols="30"
                rows="10"
                maxLength="1000"
                placeholder="Write me"
              ></textarea>
              <button type="submit">send</button>
            </form>
          </Modal>
        </div>
      </nav>
    </header>
  );
}
