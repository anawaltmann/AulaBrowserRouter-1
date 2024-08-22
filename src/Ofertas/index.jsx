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
        title: "Anel Spring em Prata 925 com Topázios London, Topázios Sky e Safiras Incolores", 
        preco: "R$ 690,00", 
        imagem: "https://lojavivara.vtexassets.com/arquivos/ids/749312/Anel-Spring-em-Prata-925-com-Topazios-London-Topazios-Sky-e-Safiras-Incolores-83395_1_set.jpg?v=638437293564070000" 
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
        title: "Pingente Color em Prata 925 com Ametista Rosa e Topázio Rosa", 
        preco: "R$  190,00", 
        imagem: "https://lojavivara.vtexassets.com/arquivos/ids/886324/Pingente-Color-em-Prata-925-com-Ametista-Rosa-e-Topazio-Rosa-100395_1_set.jpg?v=638597709415830000" 
    },
    { 
        title: "Colar Happy em Prata 925 com Pérola e Peridoto, 45cm", 
        preco: "R$  550,00", 
        imagem: "https://lojavivara.vtexassets.com/arquivos/ids/795827/Colar-Happy-em-Prata-925-com-Perola-e-Peridoto-45cm-85760_1_set.jpg?v=638457556921070000" 
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