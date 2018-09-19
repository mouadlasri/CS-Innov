import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <p>© <span>2018</span> Copyright: <span><NavLink to='/'>CS-innov.com</NavLink></span></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;