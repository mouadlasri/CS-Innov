import React from 'react';
import Events from './Events/Events.js';
import Toolbar from '../Toolbar/Toolbar.js';
import EventTypes from './EventTypes/EventTypes.js';

import './Eventpage.css';

class Eventpage extends React.Component {
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
            <div className="event-page container-fluid">
                <div className="Toolbar-color">
                    <Toolbar />
                </div>
                <div className="events-description">
                    <h1>Events</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis omnis, soluta sed rem sit at eum autem error incidunt. Ipsam!</p>
                </div>
                <EventTypes />
                <Events events={this.state.events} />
            </div>
        )
    }
}

export default Eventpage;