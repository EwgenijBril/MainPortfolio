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
            Currently, I am learning Typescript through Udemy courses and am
            eager to expand my knowledge by learning the Next.js framework. I am
            actively seeking employment and believe that my experience creating
            adaptive websites and working effectively in teams will be a
            valuable asset to any company. I am excited to contribute to a new
            team's success.
          </p>
          <a
            href="https://drive.google.com/file/d/17xrhoGCoU2lgehC7WeLVZc6SnHeroT1I/view?usp=share_link"
            target="blank"
          >
            Resume
          </a>
        </div>
        <img src={Foto} alt="foto" />
      </div>
    </section>
  );
}
