import { Typography } from "../typography";
import { StyledCardTechDescription } from "./styles";

export function CardTechDescription() {
  return (
    <StyledCardTechDescription>
      <Typography fontWheight="600" color="var(--orange-300)" size="1.5rem">
        HTML
      </Typography>
      <Typography color="var(--orange-300)">
        O HTML (Hypertext Markup Language) é a linguagem usada para criar
        páginas da web. Ele funciona através de elementos identificados por
        tags, organizados hierarquicamente. Esses elementos podem conter texto e
        atributos para adicionar informações extras. HTML é usado para
        estruturar o conteúdo de uma página e pode ser estilizado com CSS.
        Navegadores interpretam o HTML e o exibem aos usuários, e interatividade
        pode ser adicionada com JavaScript. Em resumo, HTML é a base da
        estrutura de conteúdo na web.
      </Typography>
    </StyledCardTechDescription>
  );
}
