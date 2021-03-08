import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import './style.scss';



const Header = () => (
    <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Ecommerce Logo" />
                    </Link>
                </div>
                <div className="callToActions">
                    <ul>
                        <li>
                            <Link to="/registration">Register</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>

    </header>

);

export default Header;
