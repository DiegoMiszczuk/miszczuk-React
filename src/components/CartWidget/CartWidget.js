import cart from './Assets/cart.png'
import './CartWidget.css'
import '../../../src/general.css'


const CartWidget = () => {
    return (
        <div className='flex textColorPpal border fondo'>
            <img  src={cart} alt="Cart-Widget"/>
            <p>0</p>
        </div>
    )
}

export default CartWidget