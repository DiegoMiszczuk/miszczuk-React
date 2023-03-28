
import "./Navbar.css"
import './Navbar.css'
import '../../general.css'
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import CartWidget from "../CartWidget/CartWidget";
import logo from './assets/logo.png'

const Navbar = () => {
    return (
        <nav className="Navbar fontMain">
            <div className="flex">
                <img style={{Width: "10"}} src={logo} alt="logo" />
                <h1 className=" namePosition textColorPpal">Mzk Shop</h1>
            </div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-outline-light">Celulares</button>
                <button type="button" className="btn btn-outline-light">Tablets</button>
                <button type="button" className="btn btn-outline-light">Notebooks</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar