import React from 'react';

import './MainSection.css';
import Events from '../Events/Events.js';
import ClubInfo from '../ClubInfo/ClubInfo.js';

class MainSection extends React.Component {
    state = {
        events: [
            {
                id: 1,
                date: '3',
                month: 'SEP',
                location: 'Building 14, downstairs',
                time: '8:30 pm',
                description: 'Description of the event',
            },
            {
                id: 2,
                date: '3',
                month: 'SEP',
                location: 'Lab 7',
                time: '8 pm',
                description: 'Description of the event',
            }
        ]
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="jumbotron">
                            test
                        </div>
                    </div>
                    <div className="col-md-6 event-container">
                        <h1>Events</h1>
                        <h6>(Fall 2018)</h6>
                        <Events events={this.state.events} />
                    </div>
                </div>
                <div className="row form-section">
                    <div className="col-md-10 col-lg-10">

                    </div>
                </div>
                <ClubInfo />
                {/* <div className="row">
                    <div className="col-md-8 offset-2 event-container">
                        <h1>Events</h1>
                        <h6>(Fall 2018)</h6>
                        <Events events={this.state.events} />
                    </div>
                </div> 
                <div className="row">
                    <div className="col-md-10 col-lg-10">

                    </div>
                </div> */}
            </div>
            
        )
    }
}

export default MainSection;