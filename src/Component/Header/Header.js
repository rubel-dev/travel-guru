import React from 'react';
import Logo from '../../Logo.png'
import './Header.css'

const Header = () => {
    return (
       <div className="container">
            <div className="header">
                <div className="nav_left"> 
                    <img src={Logo} alt=""/>  
                    <input type="text" className='search_box'/> 
                </div>
                <div className="nav_right">
                    <ul>
                         <li><a href="/news">News</a> </li>
                         <li><a href="/destination">Destination</a>  </li>
                         <li><a href="/blog">Blog</a> </li>
                         <li><a href="/contact">Contact</a> </li>
                         <li> <a href="/login">Login</a> </li>
                    </ul>
                      
                </div>
            </div>
       </div>
    );
};

export default Header;