import { useState } from "react";
import CardProdutos from "../components/CardProdutos";
import Header from "../components/Header";

export default function Ofertas(){
    const[lista,setLista] = useState([{ title:"Anel Vivara em Ouro Amarelo 18k com Diamantes", preco: "R$ 3.720,00" },{  title:"Anel Vivara em Ouro Branco 18k com Diamantes", preco: "R$ 3.512,00" }]);
    return(
        <div>
            <Header/>
             <h1>Ofertas</h1>
             <CardProdutos listaProdutos={lista}/>
        </div>      
    );
}