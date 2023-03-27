import ItemDetail from "../ItemDetail/ItemDetail";

import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncMock";



const ItemDetailContainer = () => {
    const [products, setProducts] = useState()

   

    useEffect( () => {
        getProductsById(products)
            .then(products =>{
                setProducts(products)
        })
        .catch(err =>{
            console.log(err)
        })

    }, [])

    return(
        <div >

            <ItemDetail {...products}/> 
        </div>
    )
}

export default ItemDetailContainer