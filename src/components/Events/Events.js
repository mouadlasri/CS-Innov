import React from 'react';
import './Events.css';


const Events = (props) => {
    // const {date, month, description} = this.props;
    const events = props.events;
    console.log(events);
    const eventsList = events.map((event) => {
        return (
            <div className="row" key={event.id}>
                <div className="col-md-2 col-lg-2 offset-1 event-date text-center">
                    <span className="event-day">{event.date}</span>
                    <span className="event-month">{event.month}</span>
                </div>
                {/* <div className="col-2">
                </div> */}
                <div className="col-md-3 col-lg-3 event-details text-left border-left border-right">
                    <p className="h6 event-title">CS Club Meeting</p>
                    <p className="text-muted event-subtitle">
                        <i className="fa fa-map-marker"></i> {event.location} <br />
                        <i className="fa fa-clock-o"></i> {event.time}
                </p>
                </div>
                <div className="col-md-4 col-lg-4 event-summary">
                    <p >Join us for free pizza, drinks, and coding tutorials every Tuesday</p>
                </div>
            </div>
        )
    });

    console.log('Event list:', eventsList);
    return (
        <div className="events" id="eventsInfo" >
            {eventsList}
        </div>
        
        // <div className="row">
        //     <div className="col-2 event-date text-center">
        //         <span className="event-day">3</span>
        //         <span className="event-month">APR</span>
        //             </div>
        //     <div className="col-2">
        //     </div>
        //     <div className="col-3 event-details text-left">
        //         <p className="h6 event-title">CS Club Meeting</p>
        //         <p className="text-muted event-subtitle">
        //             <i className="fa fa-map-marker event-icon"></i> Business Bldg, Room 118 <br />
        //             <i className="fa fa-clock-o event-icon"></i> 11:15 AM
        //         </p>
        //     </div>
        //         <div className="col-5 event-summary text-center">
        //             <p className="text-center">Join us for free pizza, drinks, and coding tutorials every Tuesday</p>
        //         </div>
        // </div>
    );
}

export default Events;