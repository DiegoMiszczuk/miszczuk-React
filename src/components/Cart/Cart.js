import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "../Cart/Cart.css";
import {BsTrash} from 'react-icons/bs';

const Cart = () => {
  const { cart, total,removeItem, incrementQuantity, decrementQuantity, clearCart } =
    useCart();

  return (
    <div className="textColorPpal size">
      <h1>Tu Carrito</h1>
      <div className="rowCart itemCartStyle">
        {/* <h2>Item</h2>
        <h2>Cantidad</h2>
        <h2>Precio</h2> */}
      </div>
      <div>
        <div className="container">
          {cart.map((prod) => {
            return (
              <div className="row rowitem align-items-center" key={prod.id}>
                <div className="col-2">
                  <img
                    style={{ width: "40px", height: "40px" }}
                    className="sizeImg"
                    src={prod.img}
                    alt={prod.name}
                  />
                </div>
                <div className="col-4">
                  <span className="ItemStyle">{prod.name}</span>
                </div>
                <div className="col">
                  <span className="ItemStyle">{prod.quantity}</span>
                </div>
                <div className="col">
                  <span className="ItemStyle">${prod.price} x Unidad</span>
                </div>
                <div className="col">
                  <button
                    className="btn btn-outline-dark buttonCart "
                    onClick={() => decrementQuantity(prod.id)}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-outline-dark buttonCart"
                    onClick={() => incrementQuantity(prod.id, prod.stock)}
                  >
                    +
                  </button>
                  
                  <button
                    className="btn btn-outline-dark buttonCart pad"
                    onClick={() => removeItem(prod.id)}
                  >
                   <BsTrash className="trash"/>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {/* {cart.map((prod) => {
          return (
            <div className="cartDetail" key={prod.id}>
              <img
                style={{ width: "40px", height: "40px" }}
                className="sizeImg"
                src={prod.img}
                alt={prod.name}
              />
              <h2 className="ItemStyle">{prod.name}</h2>
              <h2 className="ItemStyle">{prod.quantity}</h2>
              <h2 className="ItemStyle">${prod.price} x Unidad</h2>
              <button
                className="btn btn-outline-dark marginTopButton caca"
                onClick={() => decrementQuantity(prod.id)}
              >
                -
              </button>
              <button
                className="btn btn-outline-dark marginTopButton caca"
                onClick={() => incrementQuantity(prod.id, prod.stock)}
              >
                +
              </button>
            </div>
          );
        })} */}
      </div>

      <hr/>
        <h3 hidden={total === 0 ? false : true}>Tu carrito esta vacio</h3>
      <h2 hidden={total === 0 ? true : false}>Total de la compra ${total}</h2>

      <Link hidden={total === 0 ? true : false} className="btn btn-outline-dark marginTopButton" to="/checkout">
        Checkout
      </Link>
      <button
        className="btn btn-outline-dark marginTopButton"
        hidden={total === 0 ? true : false}
        onClick={() => clearCart()}
      >
        Vaciar carrito
      </button>
    </div>
  );
};

export default Cart;
