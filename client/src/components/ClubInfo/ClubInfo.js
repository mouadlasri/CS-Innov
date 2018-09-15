import React from 'react';
import './ClubInfo.css';

const ClubInfo = () => {
    return (
        <div className="row club-info jumbotron" id="clubInfo">
            <div className="col-md test">
                <i className="fa fa-group fa-2x"></i>
                <h3>Workshops</h3>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, libero.
                </div>
            <div className="col-md">
                <i className="fa fa-code fa-2x"></i>
                <h3>Hackathons</h3>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, non?
                    </div>
            <div className="col-md">
                <i className="fa fa-car fa-2x"></i>
                <h3>Trips and Talks</h3>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, tempora.
            </div>
        </div>
    )
}

export default ClubInfo;