import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../context/CartContext'
import { useNotification } from '../../Notification/NotificationService'
import 'bootstrap/dist/css/bootstrap.css'

const ItemDetail = ({ id, name, img, price, category, stock, description }) => {

    const {setNotification} = useNotification()
    const { addItem, getProductQuantity } = useCart()
   

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity, stock, img
        }
       
        addItem(productToAdd)
        setNotification('success',`Se agrego correctamente ${quantity} ${name}`)
        
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
                
                        <ItemCount onAdd={handleOnAdd} stock={stock} initial={productQuantity || 1} />
                    
                    
                    
}

            </footer>
            </div>
           
        </div>
    )
}

export default ItemDetail