import { useState } from "react"
import Header from "../components/Header";
import CardProdutos from "../components/CardProdutos";

export default function Produto(){

    const[lista,setLista] = useState([{ title:"Anel Vivara em Ouro Amarelo 18k com Diamantes", preco: "R$ 3.720,00" },{  title:"Anel Vivara em Ouro Branco 18k com Diamantes", preco: "R$ 3.512,00" }]);
    return(
        <div>
            <Header/>
            <h1>Produtos</h1>
            <CardProdutos listaProdutos={lista}/>
        </div>
      
    );
}