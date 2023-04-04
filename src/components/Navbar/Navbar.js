
import "./Navbar.css"
import './Navbar.css'
import '../../general.css'
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import CartWidget from "../CartWidget/CartWidget";
import logo from './assets/logo.png'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="Navbar fontMain">
            <Link to={"/"} className="flex textDecNone">
               <img style={{Width: "10"}} src={logo} alt="logo" />
                <h1 className=" namePosition textColorPpal">Mzk Shop</h1>
            </Link>
            <div className="btn-group" role="group" aria-label="Basic example">
                <Link to={'/category/Celulares'} type="button" className="btn btn-outline-light">Celulares</Link>
                <Link to={'/category/Tablets'} type="button" className="btn btn-outline-light">Tablets</Link>
                <Link to={'/category/Notebooks'} type="button" className="btn btn-outline-light">Notebooks</Link>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar