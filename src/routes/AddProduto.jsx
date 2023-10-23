import  { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdicionarProduto() {
  const history = useNavigate();

  const [produto, setProduto] = useState({
    nome: "",
    desc: "",
    valor: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduto((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAdicao = (e) => {
    e.preventDefault();
    // Adicionar produto usando API com método POST
    fetch(`http://localhost:5000/produtos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(produto)
    })
      .then(() => {
        // Redirecionar para a página principal após a adição
        history.push("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Adicionar Produto</h1>
      <form onSubmit={handleAdicao}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            value={produto.nome}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="desc">Desc</label>
          <input
            type="text"
            name="desc"
            value={produto.desc}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="valor">Valor</label>
          <input
            type="number"
            name="valor"
            value={produto.valor}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Adicionar Produto</button>
      </form>
    </div>
  );
}