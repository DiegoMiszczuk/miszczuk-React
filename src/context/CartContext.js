import { createContext, useContext, useState } from 'react';

const CartContext = createContext('valor inicial')

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  console.log(cart)

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart(prev => [...prev, productToAdd])
    } else {
      console.log('no se agrega por que esta ')
    }
  }

  const isInCart = (id) => {
    return cart.some(prod => prod.id === id)
  }

  const removeItem = (id) => {
    const Updatedcart = cart.filter(prod => prod.id !== id)
    setCart(Updatedcart)
  }

  const getTotalQuantity = () => {
    let totalQuantity = 0

    cart.forEach(prod =>{
      totalQuantity += prod.quantity
    })

    return totalQuantity
  }

  const totalQuantity = getTotalQuantity()


  return (
    <CartContext.Provider value={{ cart, addItem, totalQuantity, isInCart, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}