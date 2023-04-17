import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { useNotification } from '../../Notification/NotificationService'

const ItemDetail = ({ id, name, img, price, category, stock, description }) => {

    const {setNotification} = useNotification()
    const { addItem, isInCart } = useCart()
    // const [inputType, setInputType] = useState('input')
    // const [quantity, setQuantity] = useState(0)

    // const ItemCount = inputType === 'input' ? InputCount : buttonCount

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }
        // console.log(productToAdd)
        addItem(productToAdd)
        setNotification('success',`Se agrego correctamente ${quantity} ${name}`)
        // setQuantity(quantity)
    }
    return (
        <div className="itemDetailStyle">
            <img className='imgSize' src={img} alt={name} />
            <div className='textColorPpal'>
                <h3 >{name}</h3>
                <p>{description}</p>
                <p>Tipo: {category}</p>
                <p>Cantidad en Stock: {stock}</p>
                <h5>Precio: {price}</h5>
            </div>
            <footer className='ItemFooter'>
                {
                    isInCart(id) ? (
                        <Link className="btn btn-outline-light marginTopButton" to='/cart'>Finalizar Compra</Link>
                    ) : (
                        <ItemCount onAdd={handleOnAdd} stock={stock} />
                    )
                    
                    // quantity === 0 ? (<ItemCount onAdd={handleOnAdd} stock={stock} />
                    // ) : (
                    //     <button type="button" className="btn btn-outline-light marginTopButton">Finalizar compra</button>
                    // )
                }

            </footer>
        </div>
    )
}

export default ItemDetail