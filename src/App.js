import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext';



function App() {
  

  return (
    <div className="App">
        <BrowserRouter>
          <CartProvider>
            <Navbar/>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Nuestros Productos'}/>}></Route>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos por Categoria: '}/>}></Route>
              <Route path='/item/:itemId' element={<ItemDetailContainer/>}></Route>
              <Route path="/cart" element={<h1>Cart</h1>}/>
              <Route path="/checkout" element={<h1>Checkout</h1>}/>
            </Routes>
          </CartProvider>
        </BrowserRouter>
      
    </div>
  ); 
}

export default App;
