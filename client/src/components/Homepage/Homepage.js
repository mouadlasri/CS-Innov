import React from 'react';

import Toolbar from '../Toolbar/Toolbar.js';
import Events from '../Eventpage/Events/Events.js';
import Footer from '../Footer/Footer.js';
import Form from '../Form/Form.js';

import './Homepage.css';

const Homepage = () => {
    return (
        <div>
            <div className="home-page">
                <Toolbar />
                {/* <h1 className="club-title">Computer Science  <span className="home-page-for">for</span>  Innovation</h1> */}
                <h1 className="club-title" id="title" style={{ fontFamily: 'Audiowide' }}>Computer Science</h1>
                <h1 className="club-title home-for"><span className="home-page-for">for</span></h1>
                <h1 className="club-title" id="title-innov">Innovation</h1>
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