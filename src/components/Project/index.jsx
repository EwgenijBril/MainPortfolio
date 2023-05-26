import React from "react";
import style from "./index.module.css";

export default function Project({ id, title, image, discription, link }) {
  return (
    <div className={style.project}>
      <h2>{title}</h2>
      <div className={style.info_block}>
        <img src={image} alt={title} />
        <p>{discription}</p>
        <a href={link} target="blank">
          <button className={style.btn}>Link </button>
        </a>
      </div>
    </div>
  );
}
