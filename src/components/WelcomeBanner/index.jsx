import React, { useState } from "react";
import style from "./index.module.css";
import TypeWriter from "typewriter-effect";

export default function WelcomeBanner() {
  // const message = ["responsive websites"];

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
          <h1>I'm create and build</h1>
          <div className={style.text}>
            <TypeWriter
              onInit={(typewriter) => {
                typewriter.typeString("responsive websites").start();
              }}
            />
          </div>

          <h1></h1>
        </div>
      </div>
    </section>
  );
}
