import React, { useState } from "react";
import Modal from "../Modal";
import style from "./index.module.css";

export default function MyProjects() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <section className={style.section} id="project">
      <div className={["wrapper", style.my_projects].join(" ")}>
        <h1>Here are my future projects</h1>
        <button onClick={() => setModalActive(true)}>open</button>
        <Modal active={modalActive} setActive={setModalActive}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            adipisci quae veniam quos aspernatur tempore aliquam? Corporis,
            ipsa. Ducimus officia fugiat quidem quo ratione saepe perferendis,
            facere omnis explicabo cum.
          </p>
        </Modal>
      </div>
    </section>
  );
}
