import '../../general.css'
import { useCart } from '../../context/CartContext'

const Checkout = () => {

    const { cart, total} = useCart()

    const createOrder = (userData) => {
        const objOrder = {
            Buyer:{
                name: 'diego',
                phone: '123151513',
                email: 'sarasa@sarasa.com'
            },
            items: cart,
            total
            
        }
        console.log(objOrder)
    }
    return (
        <div className='textColorPpal'> 
            <h1>Checkout</h1>
            <h2>Ingrese sus datos</h2>
            {/* <form onConfirm{createOrder}></form> */}
            <button className="btn btn-outline-light marginTopButton" onClick={createOrder}>Crear Orden</button>
        </div>
    )
}

export default Checkout