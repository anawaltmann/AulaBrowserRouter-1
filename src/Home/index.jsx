import Header from "../components/Header";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home () {
    return (
        <>
        <Header/>
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
        <img src="https://lojavivara.vtexassets.com/unsafe/fit-in/1920x768/center/middle/https%3A%2F%2Flojavivara.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2F1ee1f635-2aeb-43d4-b73d-3e038c0e46c8___ebd2c29ce273f9413fc233b567293c12.png"></img>
        </div>
        <div>
        <img src="https://lojavivara.vtexassets.com/unsafe/fit-in/1920x768/center/middle/https%3A%2F%2Flojavivara.vtexassets.com%2Fassets%2Fvtex.file-manager-graphql%2Fimages%2F6e1c3acc-3caa-4ba0-8107-bfe410117d74___f027c424fe1b21c89847d08dd08af487.png"></img>
        </div>
        </Carousel>
        <h1>JOIAS VIVARA</h1>

        <h2>Eternize momentos</h2>

        <div>
        <img src="https://lojavivara.vtexassets.com/assets/vtex.file-manager-graphql/images/ec84f601-0218-4d84-80e7-142c9bf76738___e9904f00ee4307b4af170bc839c793a3.png"></img>
      
      <h1>ESCOLHA POR VALOR</h1>
      <h4>NOVAS JOIAS PARA TODOS</h4>
        </div>
        
        <footer>
  <div class="footer">
    </div>
    <div class="footer-content">
    </div>
</footer>
     </>
  );
}