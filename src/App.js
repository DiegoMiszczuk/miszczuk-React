import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { NotificationProvider } from './Notification/NotificationService';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import { CartProvider } from './context/CartContext';




function App() {
   return (
    <div className="App">
      <BrowserRouter>
        <NotificationProvider>
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
        </NotificationProvider>  
      </BrowserRouter>
      
    </div>
  ); 
}

export default App;
