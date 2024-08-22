export default function CardProdutos({ listaProdutos }) {
    return (

    <div className="card-container">
    {listaProdutos.map((produto, index) => (
        <div key={index} className="card-item">
            <img src={produto.imagem} alt={produto.title} />
            <h3>{produto.title}</h3>
            <p>{produto.preco}</p>
        </div>
    ))}
</div>
    );
}

