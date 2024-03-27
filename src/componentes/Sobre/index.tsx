import { Link } from "react-router-dom";
import estilos from "./Sobre.module.scss";
import { useInView } from "react-intersection-observer";
import { Link as ScrollLink } from "react-scroll";

export default function Sobre() {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  const wpp = "https://wa.me/5561999981928";


  return (
    <div ref={ref}
      // className={estilos.sobre}
      className={`${inView ? estilos.sobre2 : estilos.sobre}`}
    >
      <div className={estilos.sobre__infos}>
        <div className={estilos.sobre__infos__titulos}>
          <h1 className={estilos.sobre__infos__titulo}>sobreMim</h1>
          <h2 className={estilos.sobre__infos__titulo2}>( )</h2>
        </div>
        <div>
          <p className={estilos.sobre__infos__texto}>
            Olá, sou Antonio, um desenvolvedor fullstack com 12 anos de experiência em TI, onde atuei como Técnico de Suporte. Sou formado em Análise e Desenvolvimento de Sistemas e estou animado para embarcar na carreira de desenvolvedor.
          </p>
          <p className={estilos.sobre__infos__texto}>
            Tenho habilidades sólidas em diversas linguagens de programação, incluindo JavaScript, TypeScript, NodeJS, Python e frameworks como React. Além disso, tenho experiência no uso de bancos de dados como SQL e MongoDB.
          </p>
          <p className={estilos.sobre__infos__texto}>
            Durante minha jornada como desenvolvedor, participei de projetos significativos, como a criação de um site de lista de presentes para casamentos. Nesse projeto, desenvolvi funcionalidades completas de gerenciamento de presentes e convidados, utilizando tecnologias como Express, TypeScript e React. Também tive a oportunidade de criar uma Pokedex, explorando o desenvolvimento de aplicações voltadas para o mundo dos jogos. Além disso, tenho experiência em desenvolvimento de sites de e-commerce e outras iniciativas interessantes.
          </p>
          <p className={estilos.sobre__infos__texto}>
            Ao longo da minha trajetória, também adquiri experiência com o sistema operacional Linux. Estou familiarizado com a administração e configuração de servidores Linux, bem como o uso de ferramentas e comandos de linha. Essa experiência me proporcionou um bom entendimento dos ambientes de desenvolvimento baseados em Linux, o que me permite trabalhar de forma eficiente em diversas plataformas.
          </p>
          <p className={estilos.sobre__infos__texto}>
            Além das minhas habilidades técnicas, estou em constante aprimoramento do meu inglês por meio de estudos regulares. Acredito que a fluência no idioma é um diferencial importante para acompanhar as tendências globais da área de desenvolvimento de software e colaborar em projetos internacionais.
          </p>
          <p className={estilos.sobre__infos__texto}>
            Constantemente busco expandir meus conhecimentos na área de desenvolvimento, e atualmente estou focado em estudar Inteligência Artificial, Python e Estrutura de Dados. Estou ansioso para aplicar esses conhecimentos e aprimorar minhas habilidades.
          </p>
          <p className={estilos.sobre__infos__texto}>
            Meu objetivo é utilizar toda a minha experiência e conhecimento para contribuir em projetos desafiadores, aprender com profissionais talentosos e me tornar cada dia melhor como desenvolvedor. Estou pronto para enfrentar novos desafios e colaborar em equipes de desenvolvimento.
          </p>
          <p className={estilos.sobre__infos__texto}>
            Se você está procurando um desenvolvedor dedicado, apaixonado por tecnologia, com experiência em Linux e um histórico sólido em TI, estou ansioso para conectar e contribuir para o sucesso da sua equipe.
          </p>
        </div>
      </div>
      <div className={estilos.sobre__cards}>
        <div className={estilos.sobre__cards__conteiner}>
          <div>
            <h1 className={estilos.sobre__cards__titulo}>
              Desenvolvedor Fullstack Jr.
            </h1>
            <ScrollLink to={"projetos"} className={estilos.sobre__cards__link}>
              Projetos
            </ScrollLink>
          </div>
          <h1 className={estilos.sobre__cards__simbol}>{"</>"}</h1>
        </div>
        <div className={estilos.sobre__cards__conteiner}>
          <div>
            <h1 className={estilos.sobre__cards__titulo}>
              Freelancer
            </h1>
            <Link to={wpp} className={estilos.sobre__cards__link}>
              Entre em contato comigo!
            </Link>
          </div>
          <h1 className={estilos.sobre__cards__simbol}>{"{}"}</h1>
        </div>
      </div>
    </div>
  );
}
