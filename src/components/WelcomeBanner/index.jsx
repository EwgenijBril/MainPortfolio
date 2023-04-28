import React from "react";
import style from "./index.module.css";

export default function WelcomeBanner() {
  return (
    <section>
      <div className={["wrapper", style.block_banner].join(" ")}>
        <div>
          <p>Hey there!!</p>
          <h1>I'm Ewgenij</h1>
          <h1>Bril</h1>
          <p>A junior frontend developer</p>
        </div>
        <div>
          <h1>I'm creating and building</h1>
          <h1 className={style.text}>website with code</h1>
        </div>
      </div>
    </section>
  );
}
