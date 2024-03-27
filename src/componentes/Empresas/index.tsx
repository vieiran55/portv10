import React from "react";
import EmpresasItens from "./EmpresasItens";
import estilos from "./Empresas.module.scss";
import { useInView } from "react-intersection-observer";
import experiencias from "../../dados/empresas.json";

export default function Empresas() {
  
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <div ref={ref} 
      // className={estilos.empresas}
      className={`${inView ? estilos.empresas2 : estilos.empresas}`}
    >
      <div className={estilos.empresas__titulos}>
        <h1 className={estilos.empresas__titulo}>experiências</h1>
        <h2 className={estilos.empresas__titulo2}>( )</h2>
      </div>
      <div className={estilos.empresas__conteiner}>
        <EmpresasItens experiencias={experiencias} />
      </div>
    </div>
  );
}
