export default function CardProdutos({listaProdutos}){
    return(
        <div>
            { listaProdutos.map( (produto) => 
                <div key={produto.title}>
                    <p>{produto.title}</p>
                    <p>{produto.preco}</p>
                </div>
            
            )}
        </div>
    );
}