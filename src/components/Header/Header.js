import React from 'react';
import './style.scss';
import logo from '../../assets/logo.png';


const Header = () => (
    <header className="header">
            <div className="wrap">
                <div className="logo">
                    <img src={logo} alt="Ecommerce Logo" />
                </div>
            </div>

    </header>

);

export default Header;
