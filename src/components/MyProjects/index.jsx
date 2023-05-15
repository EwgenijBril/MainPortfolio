import React, { useState } from "react";
import Modal from "../Modal";
import style from "./index.module.css";

export default function MyProjects() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className={style.section} id="project">
      <div className={["wrapper", style.my_projects].join(" ")}>
        <h1>Here are my future projects</h1>
        <button onClick={() => setOpenModal(true)}>open</button>
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <button>open</button>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            temporibus consectetur tenetur unde nisi molestiae vel illum! Fugiat
            rem incidunt quasi voluptatum? Aut, dolor ab? Ratione error
            perferendis atque cumque!
          </p>
        </Modal>
      </div>
    </section>
  );
}
