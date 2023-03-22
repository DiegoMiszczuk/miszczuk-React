import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({ products }) => {
    return (
        <div style={{display:"flex"}}>
            {products.map(product => <Item key={product.id}{...product}/>)}
          
        </div>
    )
}

export default ItemList