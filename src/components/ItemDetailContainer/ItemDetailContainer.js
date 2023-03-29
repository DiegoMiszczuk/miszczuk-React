import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'
import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncMock";
import { useParams } from "react-router-dom";




const ItemDetailContainer = () => {
    const [products, setProducts] = useState()
   
    const { itemId } = useParams()

    useEffect( () => {
        getProductsById(itemId)
            .then(products =>{
                setProducts(products)
        })
        .catch(err =>{
            console.log(err)
        })

    }, [itemId])

    return(
        <div className="flex center">

            <ItemDetail {...products}/> 
        </div>
    )
}

export default ItemDetailContainer