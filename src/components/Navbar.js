import React, { useState } from 'react';
import '../styles/navbar.css';
import logo from '../assets/Logo.svg';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
    const [itemActive, setItemActive] = useState('Home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleActive = () => {
        setItemActive()
    }

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src={logo} alt="Vickys Logo" />
            </div>
            <ul className="navbar__navigation">
                <li
                    className={`navbar__menu-item ${
                        itemActive === 'Home' && 'navbar__menu-item--active'
                    }`}
                    on
                >
                    Home
                </li>
                <li className="navbar__menu-item">Registro</li>
                <li>
                    <SearchIcon />
                </li>
            </ul>
            <button className="navbar__menu-icon" onClick={toggleMenu}>
                <MenuIcon />
            </button>
            {isMenuOpen && (
                <ul className="navbar__menu-mobile">
                    <li>Home</li>
                    <li>registro</li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
