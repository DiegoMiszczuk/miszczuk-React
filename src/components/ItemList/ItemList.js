const ItemList = ({ products }) => {
    return (
        <div>
            {products.map(product => {
                return (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <img src={product.img} alt={product.name}></img>
                        <p>Precio: ${product.price}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemList