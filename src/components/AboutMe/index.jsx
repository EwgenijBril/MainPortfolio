import React from "react";
import style from "./index.module.css";
import Foto from "./media/foto1.jpg";

export default function AboutMe() {
  return (
    <section className={style.block_about_me} id="about">
      <div className={["wrapper", style.about_me].join(" ")}>
        <div className={style.discription_block}>
          <h1>Get to know me</h1>
          <p>
            After moving to Germany, I decided to pivot my career towards
            frontend development and pursue further education in this field. I
            completed a 2-month orientation course followed by a 7-month
            professional course, culminating in a final project where I applied
            my skills in HTML5, CSS3, JavaScript, and React.
            <br />
            <br />
            Currently, I am learning Typescript through Udemy courses and am
            eager to expand my knowledge by learning the Next.js framework. I am
            actively seeking employment and believe that my experience creating
            adaptive websites and working effectively in teams will be a
            valuable asset to any company. I am excited to contribute to a new
            team's success.
          </p>
          <a download="My SV" href="CV.pdf">
            Download my CV
          </a>
        </div>
        <img src={Foto} alt="foto" />
      </div>
    </section>
  );
}
