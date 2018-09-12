import React from 'react';
import { NavLink } from 'react-router-dom';
import './Toolbar.css';
import CSILogo from '../../csi-logo2.png';

const Toolbar = () => {
    return (
       
        <div className="container-fluid">
            <nav className="navbar navbar-light navbar-expand-lg">
                {/* <a href="#" className="navbar-brand"><img src="" alt=""/><img src={CSILogo} alt="" id="logo"/></a> */}
                <a href="#" className="navbar-brand-1">CSInnov</a>
                <a href="#" className="navbar-brand-2">CSInnov</a>
                <a href="#" className="navbar-brand-3">CSInnov</a>
                <a href="#" className="navbar-brand-4">CSInnov</a>
                <a href="#" className="navbar-brand-5">CSInnov</a>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="nav collapse navbar-collapse justify-content-end navbar-light" id="navbarNavAltMarkup" >
                    <div className="navbar-nav">
                        <NavLink to="/" className="nav-item nav-link">Home</NavLink>  
                        <NavLink to="/aboutus" className="nav-item nav-link">About us</NavLink>
                        <NavLink to ="/events" className="nav-item nav-link">Events</NavLink>
                        {/* <NavLink to="/joinus" className="nav-item nav-link btn btn-info">Join us</NavLink> */}
                        <NavLink to="/joinus"><button className="btn btn-info button-join">Join us</button></NavLink>
                        {/* <a className="nav-item nav-link" href="#">Home</a>
                        <a className="nav-item nav-link" href="#clubInfo">About us</a>
                        <a className="nav-item nav-link" href="#eventsInfo">Events</a>
                        <a className="nav-item nav-link" href="#joinForm"> <button className="btn btn-info join-btn">Join us!</button></a> */}
                    </div>
                </div>
            </nav>

            {/* <h1 className="info-image">Computer Science for Innovation</h1> */}
        </div>
    )
}

export default Toolbar;
