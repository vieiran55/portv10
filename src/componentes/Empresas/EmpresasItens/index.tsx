import { useState } from "react";
import classNames from "classnames";
import estilos from "./EmpresasItens.module.scss";
import { MdStarBorderPurple500 } from "react-icons/md";
import { DiReact } from "react-icons/di";
import { GiNinjaStar } from "react-icons/gi";
import { TfiHandPointDown } from "react-icons/tfi";

interface Experiencia {
  empresa: string;
  cargo: string;
  periodo: string;
  descricao: string;
}

interface Props {
  experiencias: Experiencia[];
}

export default function EmpresasItens({ experiencias }: Props) {
  // Armazena os índices das experiências ativas
  const [experienciasAtivas, setExperienciasAtivas] = useState<number[]>([]);

  // Função para alternar a ativação de uma experiência
  const toggleExperiencia = (index: number) => {
    setExperienciasAtivas((prevState) => {
      console.log(prevState);
      // Se o índice já estiver ativo, remove-o da lista de ativos
      if (prevState.includes(index)) {
        return prevState.filter((i) => i !== index);
      } else {
        // Caso contrário, adiciona-o à lista de ativos
        return [...prevState, index];
      }
    });
  };

  return (
    <div className={estilos.empresasItens}>
      <div className={estilos.linha__vertical}></div>
      <div className={estilos.experiencia__list}>
        {/* Mapeia as experiências e renderiza cada uma */}
        {experiencias.map((experiencia, index) => (
          <div
            className={classNames(estilos.experiencia__item, {
              // Aplica a classe 'esquerda' se o índice for par
              [estilos.esquerda]: index % 2 === 0,
              // Aplica a classe 'direita' se o índice for ímpar
              [estilos.direita]: index % 2 !== 0,
              // Aplica a classe 'ativa' se o índice estiver na lista de ativos
              [estilos.ativa]: experienciasAtivas.includes(index)
            })}
            key={index}
          >
            <div
              className={estilos.circulo}
              onClick={() => toggleExperiencia(index)}
            >
              {/* Renderiza o ícone apenas se a experiência estiver ativa */}
              {!experienciasAtivas.includes(index) && (
                <TfiHandPointDown size={20} className={estilos.notification} />
              )}
              {experienciasAtivas.includes(index) && (
                <GiNinjaStar size={20} className={estilos.estrela} />
              )}
            </div>
            <div className={estilos.teste}>
              <div className={estilos.conteudo}>
                {/* Renderiza o conteúdo da experiência apenas se estiver ativa */}
                {experienciasAtivas.includes(index) && (
                  <div className={estilos.dentro}>
                    <h3>{experiencia.empresa}</h3>
                    <p>{experiencia.cargo}</p>
                    <p>{experiencia.periodo}</p>
                    <p className={estilos.descricao}>{experiencia.descricao}</p>
                  </div>
                )}
              </div>
              <div></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
