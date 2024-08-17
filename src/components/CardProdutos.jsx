export default function CardProdutos({ listaProdutos }) {
    return (
        <div>
            {listaProdutos.map((produto) => (
                <div key={produto.title} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
                    {/* Exibindo a imagem */}
                    <img 
                        src={produto.imagem} 
                        alt={produto.title} 
                        style={{ width: "100px", height: "100px" }} 
                    />
                    {/* Exibindo o título e preço */}
                    <p>{produto.title}</p>
                    <p>{produto.preco}</p>
                </div>
            ))}
        </div>
    );
}
