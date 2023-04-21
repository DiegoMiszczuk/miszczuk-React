import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../context/CartContext'
import { useNotification } from '../../Notification/NotificationService'
import 'bootstrap/dist/css/bootstrap.css'

const ItemDetail = ({ id, name, img, price, category, stock, description }) => {

    const {setNotification} = useNotification()
    const { addItem, getProductQuantity } = useCart()
    // const [inputType, setInputType] = useState('input')
    // const [quantity, setQuantity] = useState(0)

    // const ItemCount = inputType === 'input' ? InputCount : buttonCount

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity, stock, img
        }
        // console.log(productToAdd)
        addItem(productToAdd)
        setNotification('success',`Se agrego correctamente ${quantity} ${name}`)
        // setQuantity(quantity)
    }

    const productQuantity = getProductQuantity(id)

    return (
        <div className="itemDetailStyle">
            <img className='sizeImg' src={img} alt={name} />
            <div className='textColorPpal'>
                <h3 >{name}</h3>
                <p>{description}</p>
                <p>Tipo: {category}</p>
                <p>Cantidad en Stock: {stock}</p>
                <h5>Precio: {price}</h5>
                <footer className='ItemFooter'>
                {
                    // isInCart(id) ? (
                    //     <Link className="btn btn-outline-dark marginTopButton" to='/cart'>Finalizar Compra</Link>
                    // ) : (
                        <ItemCount onAdd={handleOnAdd} stock={stock} initial={productQuantity || 1} />
                    
                    
                    // quantity === 0 ? (<ItemCount onAdd={handleOnAdd} stock={stock} />
                    // ) : (
                    //     <button type="button" className="btn btn-outline-light marginTopButton">Finalizar compra</button>
                    // )
}

            </footer>
            </div>
           
        </div>
    )
}

export default ItemDetail