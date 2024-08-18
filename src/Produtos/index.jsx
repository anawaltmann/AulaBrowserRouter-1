import { useState } from "react"
import Header from "../components/Header";
import CardProdutos from "../components/CardProdutos";

export default function Produto() {

    const [lista, setLista] = useState([
        { 
            title: "Anel Vivara em Ouro Amarelo 18k com Diamantes", 
            preco: "R$ 3.720,00", 
            imagem: "https://lojavivara.vtexassets.com/arquivos/ids/745172/Anel-Vivara-em-Ouro-Amarelo-18k-com-Diamantes-8689_1_set.jpg?v=638437289332230000" 
        },
        { 
            title: "Anel Vivara em Ouro Branco 18k com Diamantes", 
            preco: "R$ 3.512,00", 
            imagem: "https://lojavivara.vtexassets.com/arquivos/ids/745171/Anel-Vivara-em-Ouro-Branco-18k-com-Diamantes-8704_1_set.jpg?v=638437289331930000" 
        },
        { 
            title: "Brinco Vivara em Ouro Rosé 18ks", 
            preco: "R$ 3.290,00", 
            imagem: "https://lojavivara.vtexassets.com/unsafe/480x480/center/middle/https%3A%2F%2Flojavivara.vtexassets.com%2Farquivos%2Fids%2F709507%2FBrinco-Vivara-em-Ouro-Rose-18k-9220_hover.jpg%3Fv%3D638388091925700000" 
        },
        { 
            title: "Brinco Vivara em Ouro Vivara 18k com Diamantes Negros", 
            preco: "R$ 2.520,00", 
            imagem: "https://lojavivara.vtexassets.com/unsafe/480x480/center/middle/https%3A%2F%2Flojavivara.vtexassets.com%2Farquivos%2Fids%2F851692%2FBrinco-Vivara-em-Ouro-Vivara-18k-com-Diamantes-Negros-28148_hover.jpg%3Fv%3D638484747690030000" 
        },
        { 
            title: "Anel Vivara em Ouro Vivara 18k com Diamantes Negros", 
            preco: "R$ 6.360,00", 
            imagem: "https://lojavivara.vtexassets.com/arquivos/ids/743771/Anel-Vivara-em-Ouro-Vivara-18k-com-Diamantes-Negros-3890_1_set.jpg?v=638437287852070000" 
        },
        { 
            title: "Anel Vivara em Ouro Amarelo 18k com Diamantes", 
            preco: "R$ 5.320,00", 
            imagem: "https://lojavivara.vtexassets.com/arquivos/ids/767431/Anel-Vivara-em-Ouro-Amarelo-18k-com-Diamantes-62799_1_set.jpg?v=638437321447400000" 
        },
        { 
            title: "Brinco Vivara em Ouro Rosé 18k", 
            preco: "R$ 3.490,00", 
            imagem: "https://lojavivara.vtexassets.com/arquivos/ids/752531/Brinco-Vivara-em-Ouro-Rose-18k-71225_1_set.jpg?v=638437299024870000" 
        },
        { 
            title: "Anel Ouro Amarelo Ouro Branco e Diamantes", 
            preco: "R$ 9.160,00", 
            imagem: "https://lojavivara.vtexassets.com/arquivos/ids/881059/Anel-Vivara-em-Ouro-Amarelo-e-Ouro-Branco-18k-e-Diamantes-63013_1_set.jpg?v=638591586397170000" 
        },
        { 
            title: "Anel Vivara em Ouro Vivara 18k com Diamantes Negros", 
            preco: "R$ 6.360,00", 
            imagem: "" 
        },
       
    ]);

    return (
       
        <div>
            <Header />
            <h1>Produtos</h1>
            <CardProdutos listaProdutos={lista} />

            <div className="galeria-imagens"></div>
                </div>
        
    );
}
