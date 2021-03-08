import React from 'react';
import './style.scss';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';


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
                    </ul>
                </div>
            </div>

    </header>

);

export default Header;
