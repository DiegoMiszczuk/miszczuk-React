import './Item.css'
import '../../general.css'
import { Link, link } from 'react-router-dom'

const Item = ({id, name, img, price, description}) => {
    return (
       <div className="itemStyle fontMain background ">
            <h3 className='marginTop'>{name}</h3>
            <img className='imgSize' src={img} alt={name} ></img>
            <p>Precio: ${price}</p>
            <Link to={`/item/${id}`} type="button" className="btn btn-outline-light">Ver Detalle</Link>
        </div> 
    )
}

export default Item