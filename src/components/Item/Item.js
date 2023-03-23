import './Item.css'

const Item = ({id, name, img, price}) => {
    return (
       <div className="itemStyle">
            <h3>{name}</h3>
            <img className='imgSize' src={img} alt={name} ></img>
            <p>Precio: ${price}</p>
        </div> 
        
    )
}

export default Item