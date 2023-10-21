import React, { useEffect } from "react";
import style from "./index.module.css";

export default function Modal({ active, setActive, children }) {
  // Function to disable scrolling
  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  // Function to enable scrolling
  const enableScroll = () => {
    document.body.style.overflow = "auto";
  };

  // Use useEffect to handle scrolling when the modal opens and closes
  useEffect(() => {
    if (active) {
      disableScroll();
    } else {
      enableScroll();
    }

    // Cleanup effect when the component unmounts
    return () => {
      enableScroll();
    };
  }, [active]);

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
