import { useEffect, useState } from 'react'
import { getProducts } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

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
        
        <div >
            <h1 className="textColorSec">{greeting}</h1>
            <div className='listStyle'>
                <ItemList products={products} />
            </div>
            
        </div>
    )
}
export default ItemListContainer