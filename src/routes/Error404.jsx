import { Link } from "react-router-dom";

export default function Erro404() {

  document.title = "Erro404";
  
  return (
    <div>
      <h1> Erro404 </h1>
      <p> <Link to="/">Voltar para HOME</Link></p>
    </div>
  )
}
