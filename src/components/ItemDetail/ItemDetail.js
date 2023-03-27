import './ItemDetail.css'



const ItemDetail = ({name, img, price, category, stock, description}) => {
    return (
        <div className="itemDetailStyle">
            <img className='' src={img} alt={name}/>
            <div className='textColorPpal  '>
                <h4 className='text-xl'>{name}</h4>
                <p>{description}</p>
                <p>Tipo: {category}</p>
                <p>Cantidad en Stock: {stock}</p>
                <h4 className='text-xl font-bold'>Precio: ${price}</h4>
                <div>
                    <button className="btn btn-outline-light">Comprar</button>
                </div>
            </div>

        </div>
    )
}

export default ItemDetail