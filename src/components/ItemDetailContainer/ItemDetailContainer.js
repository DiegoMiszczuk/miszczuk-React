import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'
import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncMock";



const ItemDetailContainer = () => {
    const [products, setProducts] = useState()
   
     

    useEffect( () => {
        getProductsById('2')
            .then(products =>{
                setProducts(products)
        })
        .catch(err =>{
            console.log(err)
        })

    }, [])

    return(
        <div className="flex center">

            <ItemDetail {...products}/> 
        </div>
    )
}

export default ItemDetailContainer