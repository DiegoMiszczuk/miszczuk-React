import { useEffect, useState } from 'react'
import { getProducts } from "../../asyncMock"



const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts()
            .then(products => {
                setProducts(products)
            })
    }, [])
    console.log(products)



    return (
        <div>
            <h1 className="textColorSec">{greeting}</h1>
            <div>
                {products.map(products => {
                    return (
                        <div key={products.id}>
                            <h3>{products.name}</h3>
                            <img src={products.img} alt={products.name}></img>
                            <p>Precio: ${products.price}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default ItemListContainer