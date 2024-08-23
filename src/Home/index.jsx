import React, { useState } from 'react';
import Header from "../components/Header";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
  
  const [products] = useState([
    {
      id: 1,
      title: 'Conjunto Alianças Just You e Solitário Classic em Ouro Branco 18k com Diamante',
      preco: 'R$ 11.140,00',
      image: "https://lojavivara.vtexassets.com/arquivos/ids/867576/Conjunto-Aliancas-Just-You-e-Solitario-Classic-em-Ouro-Branco-18k-com-Diamante-98483_1_set.jpg?v=638519740894770000",
      cor: ["Ouro Branco", "Diamante"],
      categoria: "dedo"
    },
    {
      id: 2,
      title: 'Pingente Reali em Ouro Branco 18k com Topázio Sky, Tanzanita e Diamantes',
      preco: 'R$ 3.752,00',
      image: "https://lojavivara.vtexassets.com/arquivos/ids/873673/Pingente-Reali-em-Ouro-Branco-18k-com-Topazio-Sky-Tanzanita-e-Diamantes-2641_1_set.jpg?v=638539845524070000",
      cor:["Ouro Branco", "Topázio Sky"],
      categoria: "pescoço"
    },
    {
      id: 3,
      title: 'Brinco Reali em Ouro Amarelo 18k com Citrino, Opala de Fogo e Diamantes',
      preco: 'R$ 8.152,00',
      image: "https://lojavivara.vtexassets.com/arquivos/ids/873471/Brinco-Reali-em-Ouro-Amarelo-18k-com-Citrino-Opala-de-Fogo-e-Diamantes-2649_1_set.jpg?v=638539053440400000",
      cor:["Ouro Amarelo", "Diamantes"],
      categoria: "orelha"
    },
    {
      id: 4,
      title: 'Colar Reali em Ouro Rosé 18k com Prasiolitas, Quartzos Rosa e Diamantes, 45cm',
      preco: 'R$ 42.840,00',
      image: "https://lojavivara.vtexassets.com/arquivos/ids/873683/Colar-Reali-em-Ouro-Rose-18k-com-Prasiolitas-Quartzos-Rosa-e-Diamantes-45cm-2661_1_set.jpg?v=638539845585330000",
      cor:["Ouro Rosé", "Diamantes"],
      categoria: "pescoço"
    },
    {
      id: 5,
      title: 'Brinco Reali em Ouro Amarelo 18k com Pérola, Tanzanita e Diamantes',
      preco: 'R$ 6.552,00',
      image: "https://lojavivara.vtexassets.com/arquivos/ids/873680/Brinco-Reali-em-Ouro-Amarelo-18k-com-Perola-Tanzanita-e-Diamantes-2651_1_set.jpg?v=638539845564500000",
      cor:["Ouro Amarelo", "Tanzanita"],
      categoria: "orelha"
    },
  ]);

  // Lista de produtos para a nova seção
  const [moreProducts] = useState([
    {
      id: 6,
      title: 'Anéis',
      image: "https://lojavivara.vtexassets.com/arquivos/ids/743913/Anel-Arpege-em-Ouro-Branco-18k-com-Diamantes-1606_1_set.jpg?v=638437287921230000",
    },
    {
      id: 7,
      title: 'Pulseiras',
      image: "https://lojavivara.vtexassets.com/arquivos/ids/786007/Pulseira-Riviera-em-Ouro-Branco-18k-com-Diamantes-2-08-ct-89272_1_set.jpg?v=638448325362570000",
    },
    {
      id: 8,
      title: 'Brincos',
      image: "https://lojavivara.vtexassets.com/arquivos/ids/784328/Brinco-Classic-em-Ouro-Branco-18k-com-Aguas-Marinhas-e-Diamantes-27570_1_set.jpg?v=638445649306100000",
    },
    {
      id: 9,
      title: 'Colares',
      image: "https://lojavivara.vtexassets.com/arquivos/ids/832263/Colar-Nature-em-Prata-925-42cm-73386_1_set.jpg?v=638467256499270000",
    },
    {
      id: 10,
      title: 'Pingentes',
      image: "https://lojavivara.vtexassets.com/arquivos/ids/840273/Pingente-Solitario-em-Ouro-Branco-18k-com-Diamante-0-50-ct-92483_1_set.jpg?v=638470828909530000",
    },
    {
      id: 11,
      title: 'Alianças',
      image: "https://lojavivara.vtexassets.com/arquivos/ids/746374/Alianca-Inteira-Eternity-em-Ouro-Branco-18k-com-Diamantes-31-mm-78440_1_set.jpg?v=638437290211100000",
    }

  
  ]);

  return (
    <>
      <Header />
      <h1>VIVARA</h1>
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        dynamicHeight
      >
        <div>
          <img src="https://lojavivara.vtexassets.com/unsafe/fit-in/1920x768/center/middle/https%3A%2F%2Flojavivara.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2F1ee1f635-2aeb-43d4-b73d-3e038c0e46c8___ebd2c29ce273f9413fc233b567293c12.png" alt="Promoção 1" />
        </div>
        <div>
          <img src="https://lojavivara.vtexassets.com/unsafe/fit-in/1920x768/center/middle/https%3A%2F%2Flojavivara.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2F6e1c3acc-3caa-4ba0-8107-bfe410117d74___f027c424fe1b21c89847d08dd08af487.png" alt="" />
        </div>
      </Carousel>
      <h1>JOIAS VIVARA</h1>
      <h2>Eternize momentos</h2>

      {/* Exibição dos produtos */}
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>

      <div>
          <img src="https://lojavivara.vtexassets.com/assets/vtex.file-manager-graphql/images/ec84f601-0218-4d84-80e7-142c9bf76738___e9904f00ee4307b4af170bc839c793a3.png" alt="Promoção 1" />
        </div>

      <h1>ESCOLHA POR CATEGORIA</h1>
      <h4>ENCONTRE A SUA FAVORITA</h4>

      {/* Exibição da nova lista de produtos */}
      <div className="product-list">
        {moreProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>

      <h1>NOSSAS LOJAS</h1>
      <h4>ENCONTRE A VIVARA OU LIFE MAIS PRÓXIMA DE VOCÊ</h4>
      
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>Sobre a Vivara</h3>
            <p>A Vivara é uma das principais marcas de joias do Brasil, oferecendo peças únicas e de alta qualidade.</p>
          </div>
          <div className="footer-section links">
            <h3>Links Úteis</h3>
            <ul>
              <li><a href="#">https://l1nq.com/BwEC3</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contato</h3>
            <p>Email: contato@vivara.com.br</p>
            <p>Telefone: (11) 1234-5678</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Vivara. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
