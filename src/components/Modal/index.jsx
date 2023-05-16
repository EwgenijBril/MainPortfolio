import React from "react";
import Logo from "./media/Logo.png";
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

// open, onClose, children
{
  /* <div onClick={onClose} className={style.overlay}>
      <div
        onClick={(event) => {
          event.stopPropagation();
        }}
        className={style.modalContainer}
      >
        {children}
        <p onClick={onClose} className={style.close}>
          X
        </p>
        <img src={Logo} alt="Logo" />
      </div>
    </div> */
}
