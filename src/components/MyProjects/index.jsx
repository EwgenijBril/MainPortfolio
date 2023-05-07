import React from "react";
import style from "./index.module.css";

export default function MyProjects() {
  return (
    <section className={style.section} id="project">
      <div className={["wrapper", style.my_projects].join(" ")}>
        <h1>Here are my future projects</h1>
      </div>
    </section>
  );
}
