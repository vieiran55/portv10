import { useEffect, useState, useRef } from "react";
import Empresas from "../../componentes/Empresas";
import Perfil from "../../componentes/Perfil";
import Projetos from "../../componentes/Projetos";
import Skills from "../../componentes/Skills";
import Sobre from "../../componentes/Sobre";
import estilos from "./Home.module.scss";
import { useInView } from "react-intersection-observer";
import { Outlet } from "react-router-dom";

export default function Home() {

  return (
    <div className={estilos.home}>
      <div id="perfil" className={estilos.home__perfil}>
        <Perfil />
      </div>
      <div id="sobre" className={estilos.home__sobre}>
        <Sobre />
      </div>
      <div id="skills" className={estilos.home__skills}>
        <Skills />
      </div>
      <div id="projetos" className={estilos.home__projetos}>
        <Projetos />
      </div>
      <div className={estilos.home__empresas} id="empresas">
        <Empresas />
      </div>
    </div>
  );
}
