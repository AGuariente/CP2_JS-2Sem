import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape"
import style from "./index.module.css";

export default function App(){

  return (
    <>
     <div className={style.container}>
        {/* Criar um cabeçalho com um header, um h1 e uma lista ul com 3 itens com links*/}
  <Cabecalho/>
        
        {/* Criar uma Seção de conteúdo com uma div e 2 parágrafos com 3 linhas de lorem. */}

        {/* <Conteudo/> */}
        <Outlet/>

        {/* Criar um rodapé com uma div uma lista ul e 3 itens com links para redes sociais, um parágrafo com o texto : Todos os meus diereitos reservados. 2023, n"ao se esqueça do código do símbolo do copyright. */}

      <Rodape/>
    
      </div> 
    </>
  )
}