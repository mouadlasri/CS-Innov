import React from 'react';
import Toolbar from '../Toolbar/Toolbar.js';
import { NavLink } from 'react-router-dom';
import './Aboutpage.css';

const Aboutpage = () => {
    return (
        <div className="container-fluid about-page">
            <div className="Toolbar-color">
                <Toolbar />
            </div>
            <div className="row">
                <h1 className="about-title">Who are We?</h1>
                <div className="col-md-10 mr-auto ml-auto">
                    <p style={{ marginBottom: "50px" }}>Computer Science for Innovation club is a students' organization that strives to promote Technology & Innovation 
                        within Al Akhawayn Community through various events, workshops and fairs. </p>
                    <div className="row">
                        <div className="col-md-5 about-image-1">
                            
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-5 about-image-2">
        
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-10 mr-auto ml-auto">
                    <h1 className="about-title" style={{ marginTop: "20px" }}>Board Members - Fall 2018</h1>                                
                    <h5><span className="board-member">President:</span> Karima Kadaoui</h5>
                    <h5><span className="board-member">Vice-President: </span> Mouad Lasri</h5>
                    <h5><span className="board-member">General Secretary:</span> Hamza Ait Hssayene</h5>
                    <h5><span className="board-member">Treasurer:</span> Othmane Belhoussine</h5>
                    <h5 style={{marginTop: "30px"}}><span className="board-member">Contact us:</span> csinnov.contact@gmail.com</h5>
                </div>
            </div>
            <NavLink to="/events"><button className="events-button">Learn about our Events</button></NavLink>
        </div>
    )
}

export default Aboutpage;