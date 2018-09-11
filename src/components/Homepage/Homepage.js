import React from 'react';

import Toolbar from '../Toolbar/Toolbar.js';
import Events from '../Eventpage/Events/Events.js';
import MainSection from '../MainSection/MainSection.js';
import Footer from '../Footer/Footer.js';
import Form from '../Form/Form.js';

import './Homepage.css';

const Homepage = () => {
    return (
        <div>
            <div className="main-section">
                <Toolbar />
            </div>
            
            {/* <main style={{ marginTop: "56px" }} >
                <MainSection />
            </main>
            <footer>
                <Footer />
            </footer> */}
        </div>
    )
}

export default Homepage;