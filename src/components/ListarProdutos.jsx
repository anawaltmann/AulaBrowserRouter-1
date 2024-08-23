import {useState } from "react";
    export default function ListarProdutos({listaProdutos}){
    return(
    <div className="container">
    {listaProdutos.map((produto) =>
    <div>
    <p>{produto.title}</p>
    <p>{produto.preco}</p>
    <p>{produto.cor}</p>
    <p>{produto.categoria}</p>
    <img className="card-image" src={produto.imagem}/>
    </div>
    )}
    </div>
    );
}
    