import React from 'react';
import Events from '../Events/Events.js';
import './EventTypes.css';


const EventTypes = () => {
    return (
        <div className="container-fluid event-types">
            <div className="row">
                <div className="col-md-6 ml-auto mr-auto hackathon">
                    <h1>Hackathons</h1>
                    <p>Every semester, CSI sets up themed hackathons for AUI community. Everyone is free
                        to join and take part in the competition.
                    </p>
                </div>
                <div className="col-md-6  ml-auto mr-auto trips">
                    <h1>Trips & Talks</h1>
                    <p>To fulfill its educational curiosity, CSI organizes trips to the most important tech conferences in Morocco
                         but also brings guest speakers to the university to share their knowledge and experiences.</p>
                </div>

            </div>
            <div className="row" style={{ marginTop: "0px" }}>
                <div className="col-md-6 ml-auto mr-auto workshops">
                    <h1>Workshops</h1>
                    <p>Each semester, Computer Science for Innovation organizes various workshops in different fields of computer science (Web Dev, Mobile Dev, AI...).</p>
                </div>
                <div className="col-md-6 ml-auto mr-auto gaming">
                    <h1>Gaming</h1>
                    <p>The club organizes yearly gaming tournaments for the gaming community at AUI to gather and compete for the title of the best team in the university!</p>
                </div>
            </div>
        </div>
    )
}

export default EventTypes;

// class Eventpage extends React.Component {
//     state = {
//         events: [
//             {
//                 id: 1,
//                 date: '3',
//                 month: 'SEP',
//                 location: 'Building 14, downstairs',
//                 time: '8:30 pm',
//                 description: 'Description of the event',
//             },
//             {
//                 id: 2,
//                 date: '3',
//                 month: 'SEP',
//                 location: 'Lab 7',
//                 time: '8 pm',
//                 description: 'Description of the event',
//             }
//         ]
//     }

//     render() {
//         return (
//             <div>

//             </div>
//             <div className="container-fluid event-types">
//                 <h2>Events</h2>
//                 <div className="row">
//                     <div className="col-md-4 ml-auto mr-auto test3 hackathon">
//                         <h1>Hackathons</h1>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consequuntur nisi eius numquam et odit quos ullam, asperiores accusamus, veritatis laborum dolorem iure, earum quisquam ad nemo autem necessitatibus dignissimos?</p>
//                     </div>
//                     <div className="col-md-4  ml-auto mr-auto test3 trips">
//                         <h1>Trips & Talks</h1>
//                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, ipsum nobis ut in libero corporis.</p>
//                     </div>

//                 </div>
//                 <div className="row" style={{ marginTop: "50px" }}>
//                     <div className="col-md-4 ml-auto mr-auto test3 workshops">
//                         <h1>Workshops</h1>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dignissimos rerum praesentium magni fuga amet porro harum, cum obcaecati expedita minus unde nemo! Provident, omnis!</p>
//                     </div>
//                     <div className="col-md-4 ml-auto mr-auto test3 gaming">
//                         <h1>Gaming</h1>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dignissimos rerum praesentium magni fuga amet porro harum, cum obcaecati expedita minus unde nemo! Provident, omnis!</p>
//                     </div>
//                 </div>
//                 <Events events={this.state.events} />
//             </div>
//         )
//     }

// }

// export default Eventpage;