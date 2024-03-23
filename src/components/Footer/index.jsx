import React from "react";
import style from "./index.module.css";
import logo from "./media/Logo.png";

export default function Footer() {
  return (
    <section className={style.section}>
      <div className={["wrapper", style.footer_block].join(" ")}>
        <div className={style.information_block}>
          <div className={style.logo}>
            <img src={logo} alt="logo" />
            <div className={style.address}>
              <p>Marktplatz</p>
              <p>72250 Freudenstadt</p>
            </div>
            <br />
            <p className={style.mail}>ewgenijbril425@gmail.com</p>
          </div>
          <div>
            <h4>leistungen</h4>
            <p>Webentwicklung</p>
            <p>Wep-App</p>
            <p>Progressive Wep-App</p>
          </div>

          <div>
            <h4>aktiv</h4>
            <div className={style.linkenin}>
              <a
                href="https://www.linkedin.com/in/ewgenij-bril/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg"
                  alt="linkedin"
                />
                <p>LinkenIn</p>
              </a>
            </div>
            <div className={style.git_hub}>
              <a
                href="https://github.com/EwgenijBril"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.vectorlogo.zone/logos/github/github-icon.svg"
                  alt="GitHub"
                />
                <p>GitHub</p>
              </a>
            </div>
          </div>
        </div>
        <h3>Web studio Bril.</h3>
      </div>
    </section>
  );
}
