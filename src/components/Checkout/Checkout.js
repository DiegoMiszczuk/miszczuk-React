import '../../general.css'
import { useCart } from '../../context/CartContext'
import { collection, query, where, documentId, getDocs, writeBatch, addDoc} from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import { useState } from 'react'
import { useNotification } from '../../Notification/NotificationService'
import Loading from '../Spinner/Spinner'
import { useNavigate } from 'react-router-dom'
import ContactForm from '../ContactForm/ContactForm'
import './Checkout.css'

const Checkout = () => {
    const [orderId, setOrderId] = useState('')


    const { cart, total, clearCart} = useCart()

    const { setNotification } = useNotification()
    const [loading, setLoading ] = useState(false)

    const navigate = useNavigate()

    const createOrder = async(userData) => {
        try {
            setLoading(true)
            const objOrder = {
                Buyer: userData,
                items: cart,
                total
                
            }
            const ids = cart.map(prod => prod.id)
        
            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
    
            const { docs } = await getDocs(productsRef)
            
            const batch = writeBatch(db)
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                batch.commit()
    
                const ordersRef = collection(db, 'orders')
    
                const orderAdded = await addDoc(ordersRef, objOrder)
                
                clearCart()
                setOrderId(orderAdded.id)

                setTimeout(() => {
                    navigate('/')
                }, 5000)
            } else {
                setNotification('error', 'Hay productos que no tienen stock')
            }
        } catch (error) {
            setNotification('error', 'Hubo un error generando la orden')
        } finally {
            setLoading(false)
        }
   }

   if (loading){
    return (
        <div>
            <h1>Su orden de compra se esta generando</h1>
            <Loading/>
        </div>
    )             
}


    if (orderId) {
        return (
            <div>
                <h1>El id de su compra es: {orderId}</h1>
            </div>
        )
        
    }
    return (
        <div className='textColorPpal checkoutStyle'> 
            <h1>Checkout</h1>
            <h2>Ingrese sus datos</h2>
            <ContactForm onConfirm={createOrder}/>
            {/* <form onConfirm{createOrder}></form> */}
            {/* <button className="btn btn-outline-light marginTopButton" onClick={createOrder}>Crear Orden</button> */}
        </div>
    )
}

export default Checkout