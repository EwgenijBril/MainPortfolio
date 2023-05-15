import React from "react";
import Logo from "./media/Logo.png";
import style from "./index.module.css";

export default function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div onClick={onClose} className={style.overlay}>
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
    </div>
  );
}
