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
        <div className="container-fluid about-page">
            <div className="Toolbar-color">
                <Toolbar />
            </div>
            {/* <h1 className="about-title">Who are We?</h1>
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
            </div> */}
            
            <div className="row">
                <h1 className="about-title">Who are We?</h1>
                <div className="col-10 mr-auto ml-auto">
                    <p style={{marginBottom: "50px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim numquam ratione, 
                        aut possimus sit adipisci nisi eum unde quia ipsa? Facilis error autem eos sed sapiente voluptates, illum nesciunt
                         corporis cumque necessitinctio </p>
                    <div className="row">
                        <div className="col-md-5 about-image-1">
                            
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-5 about-image-2">
                        
                        </div>
                    </div>
                </div>
            </div>
            <NavLink to="/events"><button className="events-button">Learn about our Events</button></NavLink>
        </div>
    )
}

export default Aboutpage;