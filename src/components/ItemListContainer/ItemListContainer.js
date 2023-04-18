import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import Loading from '../Spinner/Spinner'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()
    const [ loading, setLoading] = useState(true)

    useEffect(() => {
        // setLoading(true)

        const productsRef = collection(db, 'products')

        getDocs(productsRef) 
            .then(snapshot =>{
                console.log(snapshot)
            })
        },[categoryId])

    console.log(products)

    if (loading){
        return  <Loading/>            
    }
   
    

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