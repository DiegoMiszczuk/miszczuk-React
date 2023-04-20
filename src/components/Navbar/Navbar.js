import "./Navbar.css"
import './Navbar.css'
import '../../general.css'
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import CartWidget from "../CartWidget/CartWidget";
import logo from './assets/logo.png'
import { Link, NavLink } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.js';
import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";


const Navbar = () => {
    const [categories, setCategories] = useState([])
  
    useEffect(() => {
      const categoriesRef = query(collection(db, 'categories'), orderBy('label', 'asc'))
  
      getDocs(categoriesRef)
        .then(snapshot => {
          const categoriesAdapted = snapshot.docs.map(doc => {
            const data = doc.data()
            return { id: doc.id, ...data}
          })
          setCategories(categoriesAdapted)
        })
    }, [])
  
    console.log(categories)

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
                        {
                            categories.map(cat => {
                                return<NavLink key={cat.id} to={`/category/${cat.slug}`} className="nav-link active text-dark" aria-current="page" >{cat.label}</NavLink>
                            })
                        }
                        {/* <Link to={'/category/Celular'} className="nav-link active text-dark" aria-current="page" >Celulares</Link>
                        <Link to={'/category/Tablets'} className="nav-link text-dark" >Tablets</Link>
                        <Link to={'/category/Notebooks'} className="nav-link text-dark" >Notebooks</Link> */}
                        <CartWidget className="nav-link navbar-nav " />
                    </div>
                </div>
            </div>
      </nav>
    )
}

export default Navbar