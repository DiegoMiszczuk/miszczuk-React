import { useEffect, useState, memo } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import Loading from '../Spinner/Spinner'

import { useNotification } from '../../Notification/NotificationService'
import { getProducts } from '../../services/firestore/products'


const ItemListMemo = memo(ItemList)

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()
    const [ loading, setLoading] = useState(true)
    const { setNotification } = useNotification() 

    useEffect(() => {
        setLoading(true)

        getProducts(categoryId)
        .then(products => {
            setProducts(products)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })

       
        },[categoryId,setNotification])

    console.log(products)

    if (loading){
        return  <Loading/>            
    }
   
    

    return (
        
        <div className='fontMain textColorPpal'>
            <h1 className="marginTitle">{greeting}{categoryId}</h1>
            <div className='containerStyle'>
                <ItemListMemo products={products} />
            </div>
        </div>
    )
}
export default ItemListContainer