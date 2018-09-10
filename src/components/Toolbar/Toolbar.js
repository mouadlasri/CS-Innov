import React from 'react';

import './Toolbar.css';
import CSILogo from '../../csi-logo2.png';

const Toolbar = () => {
    return (
       
        <div className="container-fluid main-section">
            <nav className="navbar navbar-light navbar-expand-lg sticky-top ">
                <a href="#" className="navbar-brand"><img src="" alt=""/><img src={CSILogo} alt="" id="logo"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="nav collapse navbar-collapse justify-content-end navbar-light" id="navbarNavAltMarkup" >
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="#">Home</a>
                        <a className="nav-item nav-link" href="#clubInfo">About us</a>
                        <a className="nav-item nav-link" href="#eventsInfo">Events</a>
                        <a className="nav-item nav-link" href="#joinForm"> <button className="btn btn-info join-btn">Join us!</button></a>
                    </div>
                </div>
            </nav>

            {/* <h1 className="info-image">Computer Science for Innovation</h1> */}
        </div>
    )
}

export default Toolbar;
