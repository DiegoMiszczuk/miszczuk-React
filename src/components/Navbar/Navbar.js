
import "./Navbar.css"
import './Navbar.css'
import '../../general.css'
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import CartWidget from "../CartWidget/CartWidget";
import logo from './assets/logo.png'
import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.js';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbarBackground">
            <div className="container-fluid">
                <Link to={"/"} className="flex textDecNone">
                <img style={{Width: "10",height:'60px'}} src={logo} alt="logo" />
                <h1 className=" namePosition textColorPpal">Mzk Shop</h1>
                </Link>
                <button className="navbar-toggler navbar-dark " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto center ">
                        <Link to={'/category/Celular'} className="nav-link active text-light" aria-current="page" >Celulares</Link>
                        <Link to={'/category/Tablets'} className="nav-link text-light" >Tablets</Link>
                        <Link to={'/category/Notebooks'} className="nav-link text-light" >Notebooks</Link>
                        <CartWidget className="nav-link navbar-nav " />
                    </div>
                </div>
            </div>
      </nav>
    )
}

export default Navbar