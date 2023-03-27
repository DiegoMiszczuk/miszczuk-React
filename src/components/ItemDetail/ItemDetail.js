


const ItemDetail = ({name, img, price, category, stock, description}) => {
    return (
        <div className=" bg-slate-800 text-white flex justify-between flex-row-reverse itemDetail">
            <img src={img} alt={name}/>
            <div className='flex flex-col justify-evenly m-auto gap-6'>
                <h4 className='text-xl'>{name}</h4>
                <p>{description}</p>
                <p>Tipo: {category}</p>
                <p>Cantidad en Stock: {stock}</p>
                <h4 className='text-xl font-bold'>Precio: ${price}</h4>
                <div>
                    <button className='bg-violet-600 hover:bg-violet-700 text-white py-3 px-7 rounded-full'>Comprar</button>
                </div>
            </div>

        </div>
    )
}

export default ItemDetail