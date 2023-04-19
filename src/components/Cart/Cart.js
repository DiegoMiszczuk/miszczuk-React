import { useCart } from "../../context/CartContext"
import { Link } from 'react-router-dom'
import '../Cart/Cart.css'


const Cart = () => {
    const { cart, total } = useCart()

    return (
        <div className="textColorPpal">
            <h1>Cart View</h1>
            <div className="rowCart itemCartStyle">
                <h2>Item</h2>
                <h2>Cantidad</h2>
                <h2>Precio</h2>
            </div>
            <div >
                {
                    cart.map(prod => {
                        return (
                            <div className="itemCartStyle" key={prod.id}>
                                
                                <h2 className="ItemStyle">{prod.name}</h2>
                                <h2 className="ItemStyle">{prod.quantity}</h2>
                                <h2 className="ItemStyle">${prod.price} x Unidad</h2>
                            </div>
                        )
                    })
                }
            </div>

            <h1>Total de la compra ${total}</h1>
            <Link className="btn btn-outline-light marginTopButton" to='/checkout' >Checkout</Link>
        </div>
    )
}

export default Cart