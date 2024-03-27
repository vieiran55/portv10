import estilos from "./Skills.module.scss";
import css3 from "../../images/skills/css3.svg";
import html5 from "../../images/skills/html5.svg";
import javascript from "../../images/skills/javascript.svg";
import mongodb from "../../images/skills/mongodb.svg";
import mysql from "../../images/skills/mysql.svg";
import sqlite from "../../images/skills/sqlite.svg";
import nodejs from "../../images/skills/nodejs.svg";
import python from "../../images/skills/python.svg";
import react from "../../images/skills/react.svg";
import sass from "../../images/skills/sass.svg";
import tailwindcss from "../../images/skills/tailwindcss.svg";
import typescript from "../../images/skills/typescript.svg";
import { useInView } from "react-intersection-observer";
import { TbParentheses } from "react-icons/tb";

export default function Skills() {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <div
      ref={ref}
      // className={estilos.conteiner}
      className={`${inView ? estilos.conteiner2 : estilos.conteiner}`}
    >
      <div  className={estilos.skills__titulosConteiner}>
        <div className={estilos.skills__titulos}>
          <h1 className={estilos.skills__titulo}>skills</h1>
          <h2 className={estilos.skills__titulo2}>
            ( )
          </h2>
        </div>
        <div></div>
        <div className={estilos.skills}>
          <img src={react} alt="react" className={estilos.skills__icons} />
          <img
            src={javascript}
            alt="javascript"
            className={estilos.skills__icons}
          />
          <img
            src={typescript}
            alt="typescript"
            className={estilos.skills__icons}
          />
          <img src={html5} alt="html5" className={estilos.skills__icons} />
          <img src={css3} alt="css3" className={estilos.skills__icons} />
          <img src={python} alt="python" className={estilos.skills__icons} />
          <img src={nodejs} alt="nodejs" className={estilos.skills__icons} />
          <img src={sass} alt="sass" className={estilos.skills__icons} />
          <img
            src={tailwindcss}
            alt="tailwindcss"
            className={estilos.skills__icons}
          />
          <img src={mongodb} alt="mongodb" className={estilos.skills__icons} />
          <img src={mysql} alt="mysql" className={estilos.skills__icons} />
          <img src={sqlite} alt="sqlite" className={estilos.skills__icons} />
        </div>
      </div>
    </div>
  );
}
