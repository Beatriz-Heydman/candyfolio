//Libs
import { DiJavascript1, DiReact, DiCss3Full } from "react-icons/di";
import { BiLogoHtml5 } from "react-icons/bi";
import { TbBrandTypescript } from "react-icons/tb";

export const CARDS_LANGUAGES_TECH = [
  {
    id: 1,
    name: "HTML",
    color: "var(--orange-300)",
    backgroundColor: "#FFE5C7",
    borderColor: "var(--orange-200)",
    icon: <BiLogoHtml5 />,
    skills: ["HTML 5", "Semântica"],
    description:
      "O HTML (Hypertext Markup Language) é a linguagem usada para criar páginas da web. Ele funciona através de elementos identificados por tags, organizados hierarquicamente. Esses elementos podem conter texto e atributos para adicionar informações extras. HTML é usado para estruturar o conteúdo de uma página e pode ser estilizado com CSS. Navegadores interpretam o HTML e o exibem aos usuários, e interatividade pode ser adicionada com JavaScript. Em resumo, HTML é a base da estrutura de conteúdo na web.",
  },
  {
    id: 2,
    name: "CSS",
    color: "var(--blue-300)",
    backgroundColor: "#B7DDFF",
    borderColor: "var(--blue-250)",
    icon: <DiCss3Full />,
    skills: ["Seletores", "Flex box", "Animações", "Media Queries"],
    description:
      "O CSS (Cascading Style Sheets) é uma linguagem que estiliza páginas da web. Ele funciona selecionando elementos HTML e aplicando estilos usando regras CSS, que consistem em seletores, propriedades e valores. CSS controla a aparência, o posicionamento e o layout dos elementos na página. Também permite a criação de estilos responsivos e animações. Em resumo, o CSS é usado para tornar as páginas da web visualmente atraentes e funcionais.",
  },
  {
    id: 3,
    name: "Javascript",
    color: "var(--yellow-300)",
    backgroundColor: "#FFF5BF",
    borderColor: "var(--yellow-200)",
    icon: <DiJavascript1 />,
    skills: [
      "Loopings",
      "Requisições API",
      "Axios",
      "DOM",
      "Javascript assincrono",
    ],
    description:
      "O JavaScript é uma linguagem de programação para web que funciona no navegador do usuário. Ele permite adicionar interatividade às páginas web, manipular o conteúdo da página, responder a eventos do usuário e se comunicar com serviços externos. É amplamente utilizado para criar experiências interativas e dinâmicas na web.",
  },
  {
    id: 4,
    name: "Typescript",
    color: "var(--blue-300)",
    backgroundColor: "#B6EEFF",
    borderColor: "var(--blue-200)",
    icon: <TbBrandTypescript />,
    skills: ["Literal Types", "Union Types", "Primitive Types"],
    description:
      "TypeScript é uma linguagem de programação que estende o JavaScript com tipagem estática, tornando o código mais seguro e confiável. Permite aos desenvolvedores definir tipos de variáveis e estruturas de dados, facilitando a detecção de erros durante a compilação. É amplamente usado para desenvolvimento web e aplicações front-end.",
  },
  {
    id: 5,
    name: "React",
    color: "var(--sea-green-300)",
    backgroundColor: "#B6FFF6",
    borderColor: "var(--sea-green-200)",
    icon: <DiReact />,
    skills: [
      "Hooks",
      "Components",
      "Props",
      "Styled Components",
      "Context API",
    ],
    description:
      "O React é uma biblioteca JavaScript desenvolvida pelo Facebook para criar interfaces de usuário interativas e reativas. Ele se baseia em componentes reutilizáveis, utiliza um Virtual DOM para atualizações eficientes, trabalha com JSX para estruturação de interfaces e possui uma comunidade ativa e um ecossistema rico. É usado tanto para desenvolvimento web quanto móvel e é conhecido por sua eficiência e facilidade de desenvolvimento.",
  },
];
