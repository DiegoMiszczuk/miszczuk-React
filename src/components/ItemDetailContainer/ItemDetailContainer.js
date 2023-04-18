import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'
import { useState, useEffect } from "react";
// import { getProductsById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import Loading from "../Spinner/Spinner";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

const ItemDetailContainer = () => {
    const [products, setProducts] = useState()
    const [ loading, setLoading] = useState(true)
    const { itemId } = useParams()

    useEffect( () => {
        setLoading(true)

        const productRef = doc(db, 'products', itemId)

        getDoc(productRef)
            .then(snapshot => {
                console.log(snapshot)
                const data = snapshot.data()
                const productAdapted = { id: snapshot.id, ...data}
                setProducts(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
        // getProductsById(itemId)
        //     .then(products =>{
        //         setProducts(products)
        // })
        // .catch(err =>{
        //     console.log(err)
        // })

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