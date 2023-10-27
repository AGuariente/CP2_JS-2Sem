import { Link } from "react-router-dom";

export default function Home() {

  document.title = "HOME";

  return (
    <div>
      <h1>Home</h1>
      <div>
        <Link to={'/produtos'}> PRODUTOS EM OFERTA </Link>
        <figure>
          <img src="/public/img/grocery-1232944_640.jpg" alt="Prateleira de Produtos." />
        </figure>
      </div>
    </div>
  )
}

