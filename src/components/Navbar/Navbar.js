import "./Navbar.css"

import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css';


const Navbar = () => {
    return (
        <nav className="Navbar">
            <h1>Mzk Shop</h1>
            {/* <div>
                <button className="btn btn-primary">1</button>
                <button className="btn btn-primary">2</button>
                <button className="btn btn-primary">3</button>
            </div> */}
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary">Left</button>
                <button type="button" class="btn btn-primary">Middle</button>
                <button type="button" class="btn btn-primary">Right</button>
            </div>
            <div>
            <button type="button" class="btn btn-primary"><i className="bi bi-cart"></i>
                Carrito</button>
                
            </div>
        </nav>


        
    )
}

export default Navbar