import React, { useEffect, useRef, useState } from "react";
import style from "./index.module.css";

export default function WelcomeBanner() {
  const useTypingEffect = (textToType, interKeyStokeDurationInMs) => {
    const [currentPosition, setCurrentPosition] = useState(0);
    const currentPositionRef = useRef(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        console.log(intervalId);
        setCurrentPosition((value) => value + 1);
        setCurrentPosition(textToType.sla);
        currentPositionRef.current += 1;
        if (currentPositionRef.current > textToType.length) {
          clearInterval(intervalId);
        }
      }, interKeyStokeDurationInMs);
      return () => {
        clearInterval(intervalId);
        currentPositionRef.current = 0;
        setCurrentPosition(0);
      };
    }, [interKeyStokeDurationInMs, textToType]);

    return textToType.substring(0, currentPosition);
  };

  const text = useTypingEffect("responsive websites", 300);

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
          <h1>I create and build</h1>
          <h1 className={style.text}>{text}</h1>
          <h1></h1>
        </div>
      </div>
    </section>
  );
}
