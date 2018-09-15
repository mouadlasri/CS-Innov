import React from 'react';
import { NavLink } from 'react-router-dom';
import './Toolbar.css';
// import CSILogo from '../../csi-logo2.png';

const Toolbar = () => {
    return (
       
        <div className="container-fluid">
            <nav className="navbar navbar-light navbar-expand-lg">
                {/* <a href="#" className="navbar-brand"><img src="" alt=""/><img src={CSILogo} alt="" id="logo"/></a> */}
                <a href="#" className="navbar-brand"><span className="logo-letter">C</span>SInnov</a>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="nav collapse navbar-collapse justify-content-end navbar-light" id="navbarNavAltMarkup" >
                    {/* <div className="navbar-nav"> */}
                        <ul className="nav navbar-var">
                        <li><NavLink to="/" className="nav-item nav-link">Home</NavLink> </li> 
                        <li><NavLink to="/aboutus" className="nav-item nav-link">About us</NavLink></li>
                        <li><NavLink to ="/events" className="nav-item nav-link">Events</NavLink></li>
                        <li><NavLink to="/joinus"><button className="btn btn-info button-join">Join us</button></NavLink></li>
                    </ul>
                    {/* </div> */}
                </div>
            </nav>
        </div>
    )
}

export default Toolbar;
