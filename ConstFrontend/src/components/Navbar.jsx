import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Schale_logo.png'
import './Navbar.css';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='logo-container'>
                <img src={logo} alt='Logo' className='logo' />
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signup">Registrar</Link></li>
                <li><Link to="/items">Lista de itens</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;

