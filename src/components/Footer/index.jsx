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
            <p>Marktplatz</p>
            <p>72250 Freudenstadt</p>
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
            <div className={style.git_hub}>
              <img
                src="https://www.vectorlogo.zone/logos/github/github-icon.svg"
                alt="GitHub"
              />
              <p>GitHub</p>
            </div>
            <div className={style.linkenin}>
              <img
                src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg"
                alt="linkedin"
              />
              <p>LinkenIn</p>
            </div>
          </div>
        </div>
        <h3>Created with by Bril.</h3>
      </div>
    </section>
  );
}
