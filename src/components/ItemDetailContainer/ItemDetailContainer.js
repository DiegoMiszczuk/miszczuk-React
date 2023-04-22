import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'
import { useState, useEffect } from "react";
// import { getProductsById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import Loading from "../Spinner/Spinner";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { getProductById } from "../../services/firestore/products";

const ItemDetailContainer = () => {
    const [products, setProducts] = useState()
    const [ loading, setLoading] = useState(true)
    const { itemId } = useParams()

    useEffect( () => {
        setLoading(true)

        getProductById(itemId)
            .then(products =>{
                setProducts(products)
                setLoading(false)
        })
        .catch(err =>{
            console.log(err)
        })

    }, [itemId])

    if (loading){
        return  <Loading/>            
    }
   

    return(
        <div className="flex center">

            <ItemDetail {...products}/> 
        </div>
    )
}

export default ItemDetailContainer