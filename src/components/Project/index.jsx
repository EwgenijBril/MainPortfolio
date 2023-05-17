import React from "react";
import style from "./index.module.css";

export default function Project({ id, title, image, discription, link }) {
  return (
    <div className={style.project}>
      <h2>{title}</h2>
      <div className={style.info_block}>
        <div>
          <img src={image} alt={title} />
        </div>
        <div className={style.discription}>
          <p>{discription}</p>
          <button>
            <a href={link} target="blank">
              {link}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
// https://mygardenshop.onrender.com
