import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Produto.scss";

export default function Produtos() {
  document.title = "PRODUTOS";


  const [listaProdutosAPI, setListaProdutosAPI] = useState([]);

  useEffect(() => {
    console.log("EXECUTA APENAS UMA VEZ!");
    fetch("http://localhost:5000/produtos",{
      method:"GET",
      headers:{
        "Acepted":"application/json"
      }
    })
    .then((response)=> response.json())
    .then((response)=> setListaProdutosAPI(response))
    .catch((error) => console.log(error));
  }, [])

  const excluirDados = (id) => {
    // Excluir produto usando API
    fetch(`http://localhost:5000/produtos/${id}`, {
      method: "DELETE"
    })
    .then(() => {
      // Redirecionar para a página principal após a adição
      window.location.reload();
    })
    .catch((error) => console.error(error));
  };


  return (

    <div>
      <h1>Produtos</h1>

        <div className="tblProdutos">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>DESCRIÇÃO</th>
                <th>VALOR</th>
                <th>EDITAR/EXCLUIR</th>
              </tr>
            </thead>
            <tbody className="tblNomes">

                {listaProdutosAPI.map((item,indice)=>(
                  <tr key={indice}>
                      <td>{item.id}</td>
                      <td>{item.nome}</td>
                      <td>{item.desc}</td>
                      <td>{item.valor}</td>
                      <td>
                        <Link to={`/editar/produtos/${item.id}`}>Editar</Link>
                      </td>
                      <td>
                        <button onClick={() => excluirDados(item.id)}>Excluir</button>
                      </td>
                  </tr>
                ))}

            </tbody>
            <tfoot> 
              <tr>
                <td>
                  <Link to={"/adicionar/produtos"}>Adicionar</Link>
                </td>              
              </tr>
              <tr>
                <td colSpan={4}>PRODUTOS / Qtd = {listaProdutosAPI.length}</td>
              </tr>
            </tfoot>
          </table>
        </div>


    </div>
  )
}

