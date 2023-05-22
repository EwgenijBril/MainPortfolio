import React from "react";
import style from "./index.module.css";

export default function Project({ id, title, image, discription, link }) {
  return (
    <div className={style.project}>
      <h2>{title}</h2>
      <div className={style.info_block}>
        <img src={image} alt={title} />
        <p>{discription}</p>
        <button className={style.btn}>
          <a href={link} target="blank">
            Link
          </a>
        </button>
      </div>
    </div>
  );
}
// https://mygardenshop.onrender.com
