import React from 'react';
import Toolbar from '../Toolbar/Toolbar.js';
import { NavLink } from 'react-router-dom';
import './Aboutpage.css';

const Aboutpage = () => {
    return (
        // <div className="container-fluid about-page">
        //     <div className="Toolbar-color">
        //         <Toolbar />
        //     </div>
        //     <h1 className="about-title">Who are We?</h1>
        //     <div className="row about-info">
        //         <div className="col-md-5 about-text align-center">
        //             <p className=" align-middle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere repudiandae aspernatur 
        //                 alias veritatis voluptate! Facilis error autem eos sed sapiente voluptates, illum nesciunt
        //                  corporis cumque necessitinctio.</p>
        //         </div>
        //         <div className="col-md-2">
                
        //         </div>
        //         <div className="col-md-5 about-image">
        //             {/* <img src="" style={{width: "100%", backgroundColor: "red"}} /> */}
        //         </div>
        //     </div>
        //     <div className="row about-info">
        //         <div className="col-md-5 about-image">
        //             {/* <img src="https://via.placeholder.com/400x300" /> */}
        //         </div>
        //         <div className="col-md-2 separator">
        //             <hr />
        //         </div>
        //         <div className="col-md-5 about-text align-self-center">
        //             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere repudiandae aspernatur
        //                 alias veritatis voluptate! Facilis error autem eos sed sapiente voluptates, illum nesciunt
        //                  corporis cumque necessitinctio.</p>
        //         </div>
        //     </div>
        // </div>
        
            /* <h1 className="about-title">Who are We?</h1>
            <div className="row about-info justify-content-start">
                <div className="col-md-4 offset-md-1 about-text align-center">
                    <h4>Computer Science for Innovation</h4>
                    <p className=" align-middle">
                        CSINNOV is a students' Organization that strives to promote Technology & Innovation 
                        within Al Akhwayn Community.
                    </p>
                </div>
            </div>
            <div className="row about-info">
                <div className="col-md-4 offset-md-7 about-image-1">
                </div>
            </div>
            <div className="row about-info justify-content-start">
                <div className="col-md-4 offset-md-1 about-text-test align-self-center">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere repudiandae aspernatur
                        alias veritatis voluptate! Facilis error autem eos sed sapiente voluptates, illum nesciunt
                         corporis cumque necessitinctio.</p>
                </div>
            </div>
            <div className="row about-info">
                <div className="col-md-4 offset-md-7 about-image-2">
                </div>
            </div> */
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
                </div>
            </div>
            <NavLink to="/events"><button className="events-button">Learn about our Events</button></NavLink>
        </div>
    )
}

export default Aboutpage;