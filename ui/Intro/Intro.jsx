"use client";
import intro from "./intro.module.css";
import { useEffect, useState } from "react";

export default function Intro() {
  const [clearIntro, setClearIntro] = useState(false);

  useEffect(() => {
    const time = setTimeout(() => {
      setClearIntro(true);
    }, 2000);

    return () => {
      clearTimeout(time);
    };
  }, []);

  return (
    <div className={`${intro.box} ${clearIntro ? intro.clearIntro : ""}`}>
      <div className={intro.title}>
        <div className={intro.title__item__one}> Portfolio</div>
        <div className={intro.title__item__two}> of</div>
        <div className={intro.title__item__three}>Kadamato</div>
      </div>
    </div>
  );
}
