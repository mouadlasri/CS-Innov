import React from 'react';
import Toolbar from '../Toolbar/Toolbar.js';
import Form from '../Form/Form.js';
import Footer from '../Footer/Footer.js';
import './Joinpage.css';

const Joinpage = () => {
    return (
        <div className="container-fluid join-page">
            <div className="Toolbar-color">
                <Toolbar />
            </div>
            <div className="join-page-form">
                <Form />                
            </div>
            {/* <div className="footer-position">
                <Footer />
            </div> */}
        </div>
    )
}

export default Joinpage;