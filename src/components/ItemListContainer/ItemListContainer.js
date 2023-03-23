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
        
        <div className='fontMain textColorPpal'>
            <h1 className="marginTitle">{greeting}</h1>
            <div className='containerStyle'>
                <ItemList products={products} />
            </div>
            
        </div>
    )
}
export default ItemListContainer