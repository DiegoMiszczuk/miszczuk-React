import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={'Nuestros Productos'}/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
