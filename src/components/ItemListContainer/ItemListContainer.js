import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(products => {
                setProducts(products)
            })
    }, [categoryId])
    console.log(products)



    return (
        
        <div className='fontMain textColorPpal'>
            <h1 className="marginTitle">{greeting}{categoryId}</h1>
            <div className='containerStyle'>
                <ItemList products={products} />
            </div>
            
        </div>
    )
}
export default ItemListContainer