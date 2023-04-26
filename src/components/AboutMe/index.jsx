import React from "react";
import style from "./index.module.css";
import Foto from "./media/foto1.jpg";

export default function AboutMe() {
  return (
    <section>
      <div className={["wrapper", style.about_me].join(" ")}>
        <div className={style.discription_block}>
          <h1>Get to know me</h1>
          <p>
            Recent bachelor's degree with a background in web design and
            development. Moringa school web developer certification. Motivated,
            responsible and hardworking ready to advance in the field of
            Information Technology majoring in Full Stack Development and
            Networking. I have a strong drive to see things to competition and
            learn more in my technical Skill since the world of technology keeps
            on changing every time. I have excellent Computer Skills in all the
            Computer packages. A creative copywriter with knowledge of SEO best
            practices and keyword optimization. Well organized research skills
            to craft unique and valuable content for a wide variety of target
            audiences. I am looking forward to develop my next project with the
            wonderful team. I believe the knowledge gained will help me achieve
            great in my software engineering path.
          </p>
          <button>Download CV</button>
        </div>
        <img src={Foto} alt="foto" />
      </div>
    </section>
  );
}
