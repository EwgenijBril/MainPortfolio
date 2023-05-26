import React, { useEffect, useState } from "react";
import style from "./index.module.css";

export default function WelcomeBanner() {
  const [text, setText] = useState("");
  const myText = "responsive websites";

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(myText.slice(0, text.length + 1));
    }, 300);
    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <section>
      <div className={["wrapper", style.block_banner].join(" ")}>
        <div>
          <p>Hey there!!</p>
          <h1>
            {" "}
            <span>I'm Ewgenij</span>{" "}
          </h1>
          <h1>
            {" "}
            <span>Bril</span>
          </h1>
          <p>A junior frontend developer</p>
        </div>
        <div>
          <h1>I create and build</h1>
          {text ? (
            <h1 className={style.text}>{text}</h1>
          ) : (
            <h1 className={style.text}>{myText}</h1>
          )}
        </div>
      </div>
    </section>
  );
}
