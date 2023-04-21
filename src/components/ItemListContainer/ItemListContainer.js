import { useEffect, useState, memo } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import Loading from '../Spinner/Spinner'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import { useNotification } from '../../Notification/NotificationService'

const ItemListMemo = memo(ItemList)

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()
    const [ loading, setLoading] = useState(true)
    const { setNotification } = useNotification() 

    useEffect(() => {
        setLoading(true)

        const productsRef = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(productsRef) 
            .then(snapshot =>{
                console.log(snapshot)
                const productAdapted = snapshot.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                setProducts(productAdapted)
            })
            .catch(error => {
                setNotification('error', 'hubo un error obteniendo los productos')             
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