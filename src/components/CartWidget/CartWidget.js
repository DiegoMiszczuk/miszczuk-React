import cart from './Assets/cart.png'
import './CartWidget.css'
import '../../../src/general.css'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'



const CartWidget = () => {

    const { totalQuantity} = useCart()
    
    
    return (
        <Link to='/cart' className='flex textColorPpal border fondo'>
            <img  src={cart} alt="Cart-Widget"/>
            {totalQuantity}
        </Link>
    )
}

export default CartWidget