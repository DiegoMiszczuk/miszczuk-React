import './Item.css'
import '../../general.css'

const Item = ({id, name, img, price, description}) => {
    return (
       <div className="itemStyle fontMain background ">
            <h3 className='marginTop'>{name}</h3>
            <img className='imgSize' src={img} alt={name} ></img>
            <p>Precio: ${price}</p>
            
        </div> 
        
    )
}

export default Item