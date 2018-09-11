import React from 'react';
import Toolbar from '../Toolbar/Toolbar.js';

import './Aboutpage.css';

const Aboutpage = () => {
    return (
        <div className="container about-page">
            <h1 className="title">Who are We?</h1>
            <div className="row about-info">
                <div className="col-md-5 test2 align-center">
                    <p className=" align-middle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere repudiandae aspernatur 
                        alias veritatis voluptate! Facilis error autem eos sed sapiente voluptates, illum nesciunt
                         corporis cumque necessitinctio.</p>
                </div>
                <div className="col-md-2">
                
                </div>
                <div className="col-md-5">
                    <img src="https://via.placeholder.com/400x300" />
                </div>
            </div>
            <div className="row about-info">
                <div className="col-md-5">
                    <img src="https://via.placeholder.com/400x300" />
                </div>
                <div className="col-md-2">

                </div>
                <div className="col-md-5 align-self-center">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere repudiandae aspernatur
                        alias veritatis voluptate! Facilis error autem eos sed sapiente voluptates, illum nesciunt
                         corporis cumque necessitinctio.</p>
                </div>
            </div>
        </div>
    )
}

export default Aboutpage;