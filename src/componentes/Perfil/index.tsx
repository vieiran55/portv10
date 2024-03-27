import estilos from "./Perfil.module.scss";
import avatar from "../../images/antonio.png";
import { useInView } from "react-intersection-observer";

export default function Perfil(){

  const [ref, inView] = useInView({
    threshold: 0,
  });

  return(
    <div 
      ref={ref}
      // className={estilos.perfil}
      className={`${inView ? estilos.perfil2 : estilos.perfil}`}
    >
      <div className={estilos.perfil__conteiner__avatar}>
        <img className={estilos.perfil__avatar} src={avatar} alt="Minha caracteristicas fisicas" />
      </div>
      <div className={estilos.perfil__titulos}>
        <h3 className={estilos.perfil__titulos__ola}>Olá, eu sou</h3>
        <h1 className={estilos.perfil__titulos__nome}>{"< Antonio Vieira />"}</h1>
        <h2 className={estilos.perfil__titulos__prof}>Desenvolvedor Fullstack Jr</h2>
      </div>
    </div>
  );
}