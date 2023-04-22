import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { NotificationProvider } from './Notification/NotificationService';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import CarouselFadeExample from './components/Carousel/Carousel'

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
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/checkout" element={<Checkout />}/>
            </Routes>
          </CartProvider>
        </NotificationProvider> 
        <CarouselFadeExample></CarouselFadeExample> 
        <Footer/>
      </BrowserRouter>
     
      
    </div>
  ); 
}

export default App;
