import { useState } from "react"
import Header from "../components/Header";
import CardProdutos from "../components/CardProdutos";

export default function Produto() {

    const [lista, setLista] = useState([
        { 
            id:1,
            title: "Anel Vivara em Ouro Amarelo 18k com Diamantes", 
            preco: "R$ 3.720,00", 
            imagem: "https://lojavivara.vtexassets.com/arquivos/ids/745172/Anel-Vivara-em-Ouro-Amarelo-18k-com-Diamantes-8689_1_set.jpg?v=638437289332230000",
            cor:["Ouro Amarelo","Diamantes"],
            categoria:"dedo"
        },
        
        { 
            id:2,
            title: "Anel Vivara em Ouro Branco 18k com Diamantes", 
            preco: "R$ 3.512,00", 
            imagem: "https://lojavivara.vtexassets.com/arquivos/ids/745171/Anel-Vivara-em-Ouro-Branco-18k-com-Diamantes-8704_1_set.jpg?v=638437289331930000",
            cor:["Ouro Branco","Diamante"],
            categoria: "dedo"
        },
        { 
            id:3,
            title: "Brinco Vivara em Ouro Rosé 18ks", 
            preco: "R$ 3.290,00", 
            imagem: "https://lojavivara.vtexassets.com/unsafe/480x480/center/middle/https%3A%2F%2Flojavivara.vtexassets.com%2Farquivos%2Fids%2F709507%2FBrinco-Vivara-em-Ouro-Rose-18k-9220_hover.jpg%3Fv%3D638388091925700000",
            cor:["Ouro","Rosé"],
            categoria: "orelha"
        },
        { 
            id:4,
            title: "Brinco Vivara em Ouro Vivara 18k com Diamantes Negros", 
            preco: "R$ 2.520,00", 
            imagem: "https://lojavivara.vtexassets.com/unsafe/480x480/center/middle/https%3A%2F%2Flojavivara.vtexassets.com%2Farquivos%2Fids%2F851692%2FBrinco-Vivara-em-Ouro-Vivara-18k-com-Diamantes-Negros-28148_hover.jpg%3Fv%3D638484747690030000", 
            cor:["Ouro","Diamante Negro"],
            categoria: "orelha"
        },
        { 
            id:5,
            title: "Anel Vivara em Ouro Vivara 18k com Diamantes Negros", 
            preco: "R$ 6.360,00", 
            imagem: "https://lojavivara.vtexassets.com/arquivos/ids/743771/Anel-Vivara-em-Ouro-Vivara-18k-com-Diamantes-Negros-3890_1_set.jpg?v=638437287852070000", 
            cor:["Ouro","Diamentes Negros"],
            categoria: "dedo"
        },
        { 
            id:6,
            title: "Anel Vivara em Ouro Amarelo 18k com Diamantes", 
            preco: "R$ 5.320,00", 
            imagem: "https://lojavivara.vtexassets.com/arquivos/ids/767431/Anel-Vivara-em-Ouro-Amarelo-18k-com-Diamantes-62799_1_set.jpg?v=638437321447400000", 
            cor:["Ouro Amarelo","Diamantes"],
            categoria: "dedo"
        },
        { 
            id:7,
            title: "Brinco Vivara em Ouro Rosé 18k", 
            preco: "R$ 3.490,00", 
            imagem: "https://lojavivara.vtexassets.com/arquivos/ids/752531/Brinco-Vivara-em-Ouro-Rose-18k-71225_1_set.jpg?v=638437299024870000",
            cor:["Ouro","Rosé"],
            categoria: "orelha"
        },
        { 
            id:8,
            title: "Anel Ouro Amarelo Ouro Branco e Diamantes", 
            preco: "R$ 9.160,00", 
            imagem: "https://lojavivara.vtexassets.com/arquivos/ids/881059/Anel-Vivara-em-Ouro-Amarelo-e-Ouro-Branco-18k-e-Diamantes-63013_1_set.jpg?v=638591586397170000", 
            cor:["Ouro","Diamante"],
            categoria: "dedo"
        },
        { 
            id:9,
            title: "Anel Bali em Prata 925 com Ouro Amarelo 18k e Topázios Incolores", 
            preco: "R$ 1.490,00", 
            imagem: "https://lojavivara.vtexassets.com/arquivos/ids/746126/Anel-Bali-em-Prata-925-com-Ouro-Amarelo-18k-e-Topazios-Incolores-79336_1_set.jpg?v=638437290087830000", 
            cor:["Ouro Amarelo","Topázios"],
            categoria: "dedo"
        },
        { 
            id:10,
            title: "Anel Ópera em Ouro Amarelo 18k com Diamantes", 
            preco: "R$ 2.280,00", 
            imagem: "https://lojavivara.vtexassets.com/arquivos/ids/812216/Anel-Opera-em-Ouro-Amarelo-18k-com-Diamantes-94813_1_set.jpg?v=638466391771370000", 
            cor:["Ouro Amarelo","Diamantes"],
            categoria: "dedo"
        },
        { 
            id:11,
            title: "Pingente Menino em Ouro Amarelo 18k com Safiras Azuis", 
            preco: "R$ 1.390,00", 
            imagem: "https://lojavivara.vtexassets.com/arquivos/ids/863735/Pingente-Menino-em-Ouro-Amarelo-18k-com-Safiras-Azuis-18585_1_set.jpg?v=638519116897370000",
            cor:["Ouro Amarelo","Safiras Azuis"],
            categoria: "pescoço"
        },
        { 
            id:12,
            title: "Anel Gold em Ouro Amarelo 18k com Pérola, 4-4.5mm", 
            preco: "R$ 1.390,00", 
            imagem: "https://lojavivara.vtexassets.com/arquivos/ids/851190/Anel-Gold-em-Ouro-Amarelo-18k-com-Perola-4-45mm-80991_1_set.jpg?v=638484600560800000",
            cor:["Ouro Amarelo","Pérola"],
            categoria: "dedo"
        },
        { 
            id:13,
            title: "Anel Classic Oriental em Ouro Branco 18k com Esmeralda e Diamantes", 
            preco: "R$ 3.752,00", 
            imagem: "https://lojavivara.vtexassets.com/arquivos/ids/879176/Anel-Classic-Oriental-em-Ouro-Branco-18k-com-Esmeralda-e-Diamantes-61828_1_set.jpg?v=638590840635130000",
            cor:["Ouro Branco","Esmeralda com Diamante"],
            categoria: "dedo"
        },
        { 
            id:14,
            title: "Anel Pavê Coração em Ouro Amarelo 18k com Diamantes", 
            preco: "R$ 2.072,00", 
            imagem: "https://lojavivara.vtexassets.com/arquivos/ids/746120/Anel-Pave-Coracao-em-Ouro-Amarelo-18k-com-Diamantes-65498_1_set.jpg?v=638437290087030000",
            cor:["Ouro Amarelo","Diamantes"],
            categoria: "dedo"
        },
        { 
            id:15,
            title: "Pingente Ópera em Ouro Amarelo 18k com Diamantes", 
            preco: "R$ 1.592,00", 
            imagem: "https://lojavivara.vtexassets.com/arquivos/ids/812200/Pingente-Opera-em-Ouro-Amarelo-18k-com-Diamantes-95253_1_set.jpg?v=638466391322900000", 
            cor:["Ouro Amarelo","Diamantes"],
            categoria: "pescoço"
        },
        { 
            id:16,
            title: "Pulseira Vivara em Prata 925 com Safiras Negras", 
            preco: "R$ 1.250,00", 
            imagem: "https://lojavivara.vtexassets.com/arquivos/ids/776983/Pulseira-Vivara-em-Prata-925-com-Safiras-Negras-54780_1_set.jpg?v=638437347469700000",
            cor:["Prata","Diamantes"],
            categoria: "pescoço"
            
        },
        { 
            id:17,
            title: "Brinco Arpege em Ouro Branco 18k com Diamantes", 
            preco: "R$ 18.360,00", 
            imagem: "https://lojavivara.vtexassets.com/arquivos/ids/752591/Brinco-Arpege-em-Ouro-Branco-18k-com-Diamantes-66967_1_set.jpg?v=638437299094000000",
            cor:["Ouro Branco","Diamantes"],
            categoria: "orelha"
        },
        { 
            id:18,
            title: "Anel Arpege em Ouro Branco 18k com Diamantes", 
            preco: "R$  15.880,00", 
            imagem: "https://lojavivara.vtexassets.com/arquivos/ids/743913/Anel-Arpege-em-Ouro-Branco-18k-com-Diamantes-1606_1_set.jpg?v=638437287921230000", 
            cor:["Ouro Branco","Diamantes"],
            categoria: "dedo"
        },
        { 
            id:19,
            title: "Brinco Vivara em Prata 925", 
            preco: "R$  590,00", 
            imagem: "https://lojavivara.vtexassets.com/arquivos/ids/752685/Brinco-Vivara-em-Prata-925-9198_1_set.jpg?v=638437299252070000", 
            cor:["Prata"],
            categoria: "orelha"
        },
        { 
            id:20,
            title: "Pingente Vivara em Prata 925 com Quartzo Leitoso e Safiras Negras", 
            preco: "R$  790,00", 
            imagem: "https://lojavivara.vtexassets.com/arquivos/ids/841324/Pingente-Vivara-em-Prata-925-com-Quartzo-Leitoso-e-Safiras-Negras-20879_1_set.jpg?v=638470855312830000",
            cor:["Prata","Quartzo Leitose"],
            categoria: "pescoço"
        },
        { 
            id:21,
            title: "Pingente Ópera em Prata 925 com Ouro Amarelo 18k", 
            preco: "R$  790,00", 
            imagem: "https://lojavivara.vtexassets.com/arquivos/ids/812202/Pingente-Opera-em-Prata-925-com-Ouro-Amarelo-18k-94819_1_set.jpg?v=638466391324200000",
            cor:["Prata","Ouro Amarelo"],
            categoria: "pescoço"
        },
        { 
            id:22,
            title: "Colar Happy em Prata 925 com Pérola e Peridoto, 45cm", 
            preco: "R$  550,00", 
            imagem: "https://lojavivara.vtexassets.com/arquivos/ids/795827/Colar-Happy-em-Prata-925-com-Perola-e-Peridoto-45cm-85760_1_set.jpg?v=638457556921070000", 
            cor:["Prata","Pérola"],
            categoria: "pescoço"
        },
        { 
            id:23,
            title: "Pingente Color em Prata 925 com Ametista Rosa e Topázio Rosa", 
            preco: "R$  190,00", 
            imagem: "https://lojavivara.vtexassets.com/arquivos/ids/886324/Pingente-Color-em-Prata-925-com-Ametista-Rosa-e-Topazio-Rosa-100395_1_set.jpg?v=638597709415830000",
            cor:["Prata","Ametista Rosa"],
            categoria: "pescoço"
        },
        { 
            id:24,
            title: "Anel Spring em Prata 925 com Topázios London, Topázios Sky e Safiras Incolores", 
            preco: "R$ 690,00", 
            imagem: "https://lojavivara.vtexassets.com/arquivos/ids/749312/Anel-Spring-em-Prata-925-com-Topazios-London-Topazios-Sky-e-Safiras-Incolores-83395_1_set.jpg?v=638437293564070000", 
            cor:["Prata","Topázios"],
            categoria: "pescoço"
        }



    
    ]);
    

    return (
        <div className="pagina-produtos">
        <Header />
        <h1>Produtos</h1>
        <CardProdutos listaProdutos={lista} />
    </div>
        
    );
}
