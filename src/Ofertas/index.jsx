import { useState } from "react";
import CardProdutos from "../components/CardProdutos";
import Header from "../components/Header";

export default function Ofertas(){
    const[lista,setLista] = useState([{ 
        title:"Anel Bali em Prata 925 com Ouro Amarelo 18k e Topázios Incolores", 
        preco: "R$ 1.490,00",
        imagem:"https://lojavivara.vtexassets.com/arquivos/ids/746126/Anel-Bali-em-Prata-925-com-Ouro-Amarelo-18k-e-Topazios-Incolores-79336_1_set.jpg?v=638437290087830000"
     },
     { 
        title: "Pulseira Vivara em Prata 925 com Safiras Negras", 
        preco: "R$ 1.250,00", 
        imagem: "https://lojavivara.vtexassets.com/arquivos/ids/776983/Pulseira-Vivara-em-Prata-925-com-Safiras-Negras-54780_1_set.jpg?v=638437347469700000" 
    },
    { 
        title: "Pingente Ópera em Ouro Amarelo 18k com Diamantes", 
        preco: "R$ 1.592,00", 
        imagem: "https://lojavivara.vtexassets.com/arquivos/ids/812200/Pingente-Opera-em-Ouro-Amarelo-18k-com-Diamantes-95253_1_set.jpg?v=638466391322900000" 
    },
    { 
        title: "Anel Gold em Ouro Amarelo 18k com Pérola, 4-4.5mm", 
        preco: "R$ 1.390,00", 
        imagem: "https://lojavivara.vtexassets.com/arquivos/ids/851190/Anel-Gold-em-Ouro-Amarelo-18k-com-Perola-4-45mm-80991_1_set.jpg?v=638484600560800000" 
    },
    { 
        title: "Pingente Menino em Ouro Amarelo 18k com Safiras Azuis", 
        preco: "R$ 1.390,00", 
        imagem: "https://lojavivara.vtexassets.com/arquivos/ids/863735/Pingente-Menino-em-Ouro-Amarelo-18k-com-Safiras-Azuis-18585_1_set.jpg?v=638519116897370000" 
    },
    { 
        title: "Brinco Vivara em Prata 925", 
        preco: "R$  590,00", 
        imagem: "https://lojavivara.vtexassets.com/arquivos/ids/752685/Brinco-Vivara-em-Prata-925-9198_1_set.jpg?v=638437299252070000" 
    },
    { 
        title: "Pingente Ópera em Prata 925 com Ouro Amarelo 18k", 
        preco: "R$  790,00", 
        imagem: "https://lojavivara.vtexassets.com/arquivos/ids/812202/Pingente-Opera-em-Prata-925-com-Ouro-Amarelo-18k-94819_1_set.jpg?v=638466391324200000" 
    },
    { 
        title: "Pingente Vivara em Prata 925 com Quartzo Leitoso e Safiras Negras", 
        preco: "R$  790,00", 
        imagem: "https://lojavivara.vtexassets.com/arquivos/ids/841324/Pingente-Vivara-em-Prata-925-com-Quartzo-Leitoso-e-Safiras-Negras-20879_1_set.jpg?v=638470855312830000" 
    },
    { 
        title: "", 
        preco: "R$  590,00", 
        imagem: "" 
    },
    { 
        title: "", 
        preco: "R$  590,00", 
        imagem: "" 
    },


     
]);
    return(
        <div>
            <Header/>
             <h1>Ofertas</h1>
             <CardProdutos listaProdutos={lista}/>
        </div>      
    );
}