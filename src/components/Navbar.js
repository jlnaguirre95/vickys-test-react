import React from 'react';
import '../styles/navbar.css';
import logo from '../assets/Logo.svg';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src={logo} alt=""/>
            </div>
            <div className="navbar__navigation">
                <ul>
                    <li>Home</li>
                    <li>Registro</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
