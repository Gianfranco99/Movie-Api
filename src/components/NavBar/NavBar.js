import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../logoImbd.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
            <div>
                <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            </div>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink to="/Movie-Api/" >Home</NavLink>
                        <NavLink to="/Movie-Api/favs" >Favoritas</NavLink>
                    </li>
                </ul>
                <div>
                    
                </div>
            </nav>
        </header>
    )
}