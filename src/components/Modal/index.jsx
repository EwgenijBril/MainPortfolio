import React from "react";
import style from "./index.module.css";

export default function Modal({ active, setActive, children }) {
  return (
    <div
      className={[style.modal, active ? style.active : style.modal].join(" ")}
      onClick={() => setActive(false)}
    >
      <div
        className={[style.content, active ? style.active : style.content].join(
          " "
        )}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
