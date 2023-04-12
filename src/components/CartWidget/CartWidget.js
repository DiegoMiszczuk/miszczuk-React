import cart from './Assets/cart.png'
import './CartWidget.css'
import '../../../src/general.css'
import { useCart } from '../../context/CartContext'

const CartWidget = () => {

    const { totalQuantity} = useCart()
    return (
        <div className='flex textColorPpal border fondo'>
            <img  src={cart} alt="Cart-Widget"/>
            {totalQuantity}
        </div>
    )
}

export default CartWidget