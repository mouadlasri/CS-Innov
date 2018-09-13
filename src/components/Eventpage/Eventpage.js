import React from 'react';
import Events from './Events/Events.js';
import Toolbar from '../Toolbar/Toolbar.js';
import EventTypes from './EventTypes/EventTypes.js';
import { NavLink } from 'react-router-dom';
import './Eventpage.css';

class Eventpage extends React.Component {
    state = {
        events: [
            {
                id: 1,
                date: '13',
                month: 'SEP',
                location: 'Soccer Field',
                time: '8:30 pm',
                description: 'Join us at the Clubs Fair to learn more about the club and its activities! This is your occasion to join a new family!',
            },
            {
                id: 2,
                date: '20',
                month: 'SEP',
                location: 'SAO Meeting Room, Building 14 upstairs',
                time: '9 pm',
                description: 'Our first club meeting. Come join us to discuss the events and plans for this semester!',
            }
        ]
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className="event-page container-fluid">
                <div className="Toolbar-color">
                    <Toolbar />
                </div>
                <div className="events-description">
                    <h1 className="upcoming-events-title">Events</h1>
                    <p>Computer Science for Innovation organizes a wide variety of events ranging
                         from hackathons and workshops to trips and gaming events!</p>
                </div>
                <EventTypes />
                <Events events={this.state.events} />
                <NavLink to="/joinus"><button className="events-button">Join us!</button></NavLink>
            </div>
        )
    }
}

export default Eventpage;