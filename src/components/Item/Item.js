import './Item.css'

const Item = ({id, name, img, price}) => {
    return (
       <div className="itemStyle">
            <h3>{name}</h3>
            <img src={img} alt={name} style={{width:100}}></img>
            <p>Precio: ${price}</p>
        </div> 
    )
}

export default Item