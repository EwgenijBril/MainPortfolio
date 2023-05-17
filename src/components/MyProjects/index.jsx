import React, { useState } from "react";
import Modal from "../Modal";
import Project from "../Project";
import style from "./index.module.css";

export default function MyProjects({ array_projects }) {
  const [modalActive, setModalActive] = useState(false);

  return (
    <section className={style.section} id="project">
      <div className={["wrapper", style.my_projects].join(" ")}>
        <h1>Here are my future projects</h1>
        <button onClick={() => setModalActive(true)}>open</button>
        <Modal active={modalActive} setActive={setModalActive}>
          {array_projects.map((el) => (
            <Project key={el.id} {...el} />
          ))}
        </Modal>
      </div>
    </section>
  );
}
