import { useCart } from "../../context/CartContext"
import { Link } from 'react-router-dom'
import '../Cart/Cart.css'


const Cart = () => {
    const { cart, total, incrementQuantity, decrementQuantity, clearCart } = useCart()

    return (
        <div className="textColorPpal size">
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
                            <div className=" caca" key={prod.id}>
                                
                                <h2 className="ItemStyle">{prod.name}</h2>
                                <h2 className="ItemStyle">{prod.quantity}</h2>
                                <h2 className="ItemStyle">${prod.price} x Unidad</h2>
                                <button className="btn btn-outline-dark marginTopButton caca" onClick={() => decrementQuantity(prod.id)}>-</button>
                                <button className="btn btn-outline-dark marginTopButton caca" onClick={() => incrementQuantity(prod.id, prod.stock)}>+</button>
                                           
                            </div>
                        
                        )
                    })
                }
                
            </div>
            
            <h1>Total de la compra ${total}</h1>
            
         <Link className="btn btn-outline-dark marginTopButton" to='/checkout' >Checkout</Link>
         <button className="btn btn-outline-dark marginTopButton" onClick={() => clearCart()}>Vaciar carrito</button>     
            
                 
          
            
        </div>
    )
}

export default Cart