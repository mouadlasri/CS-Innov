import React from 'react';

import Toolbar from '../Toolbar/Toolbar.js';
import Events from '../Eventpage/Events/Events.js';
import Footer from '../Footer/Footer.js';
import Form from '../Form/Form.js';

import './Homepage.css';

const Homepage = () => {
    // font - family: 'Audiowide', cursive;
    // font - family: 'Baloo Tammudu', cursive;
    // font - family: 'Cinzel', serif;
    // font - family: 'Do Hyeon', sans - serif;
    // font - family: 'Monoton', cursive;
    // font - family: 'Orbitron', sans - serif;
    // font - family: 'Press Start 2P', cursive;
    // font - family: 'Russo One', sans - serif;
    // font - family: 'Unlock', cursive;
    return (
        <div>
            <div className="home-page">
                <Toolbar />
                {/* <h1 className="club-title">Computer Science  <span className="home-page-for">for</span>  Innovation</h1> */}
                <h1 className="club-title" style={{ fontFamily: 'Audiowide' }}>Computer Science</h1>
                <h1 className="club-title"><span className="home-page-for">for</span></h1>
                <h1 className="club-title">Innovation</h1>
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