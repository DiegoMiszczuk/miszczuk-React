 import './Footer.css'
import '../../general.css'


// const Footer = () => {
//     return (
//         <div className="footerBackground">
//             <h4>Footer</h4>
//         </div>
        
//     )
// }

// export default Footer

import React from 'react'; 
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 

const Footer = () => { return ( 
    <div className="footer footerBackground textColorPpal">
         
        
        <div className=" row"> 
            <div className='grid'>
            <a className='iconSize' href="https://www.facebook.com/MzkShop"><FaFacebook /></a> 
            <a className='iconSize' href="https://www.twitter.com/MzkShop"><FaTwitter /></a> 
            <a className='iconSize' href="https://www.instagram.com/MzkShop"><FaInstagram /></a> </div>
        
        </div>
           
        <div className=" row"> 
            <div className='col'><span>Teléfono: 123-456-7890</span></div>
            <div className='col'><span>Dirección: Calle Falsa 123</span></div>
            <div className='col'><span>Correo electrónico: info@mzkshop.com</span> </div>

        </div> 
    </div> 
     ); 
    }; 
    
    
export default Footer;