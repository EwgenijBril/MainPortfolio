import React from "react";
import html5 from "./media/html5.svg";
import css3 from "./media/css3.svg";
import js from "./media/js.svg";
import react from "./media/react.svg";
import bootstrap from "./media/bootstrap.svg";
import git from "./media/git.svg";
import mySQL from "./media/mySQL.svg";
import mongodb from "./media/mongodb.svg";
// import typescript from "./media/typescript.svg";
import style from "./index.module.css";

export default function MySkills() {
  return (
    <section>
      <div className={["wrapper", style.my_skills].join(" ")}>
        <div>
          <h1>Skills</h1>
          <p>
            I have completed my further education as a frontend developer and
            gained valuable experience. But I also understand that I am at the
            beginning of the road. In addition, I am looking forward to using my
            hard skills with you. These include HTML5, CSS3, JavaScript, React,
            React-Redux. Furthermore, I have studied databases MySQL and
            MongoDB, am familiar with Git, and have experience with Git Bash and
            GitHub. I can use the Rest API and Postman and also have basic
            knowledge of Node.js. I have also used Jira Software for various
            tasks.
          </p>
        </div>
        <div>
          <h1>Using now:</h1>
        </div>
        <div className={style.block_pictures}>
          <div>
            <img src={html5} alt="html5" />
            <p>HTML5</p>
          </div>
          <div>
            <img src={css3} alt="css3" />
            <p>CSS3</p>
          </div>
          <div>
            <img src={js} alt="js" />
            <p>JS</p>
          </div>
          <div>
            <img src={react} alt="react" />
            <p>REACT</p>
          </div>
          <div>
            <img src={bootstrap} alt="bootstrap" />
            <p>BOOTSTRAP</p>
          </div>
          <div>
            <img src={git} alt="git" />
            <p>GIT</p>
          </div>
          <div>
            <img src={mySQL} alt="mySQL" />
            <p>MySQL</p>
          </div>
          <div>
            <img src={mongodb} alt="mongodb" />
            <p>MONGODB</p>
          </div>
        </div>
        <div>
          <h1>Learing:</h1>
        </div>
      </div>
    </section>
  );
}
