import React from 'react';
import { Link } from "react-router-dom";

class ContactCard extends React.Component {

    render() {
        return(
            <div className="contact-card">
                <img className="avatar" src={this.props.details.avatar} alt="Profile"/>
                <div className="content">
                    <div>
                        <span>Name:</span>
                        <span>{this.props.details.name}</span>
                    </div>
                    <div className="divide">
                        <span>Phone:</span>
                        <span>{this.props.details.phoneNumber}</span>
                    </div>
                    <div>
                        <span>Address:</span>
                        <span>{this.props.details.address}</span>
                    </div>
                    <div className="divide">
                        <span>City:</span>
                        <span>{this.props.details.city}</span>
                    </div>
                    <div>
                        <span>About:</span>
                        <span>{this.props.details.description}</span>
                    </div>
                </div>
                <Link to="/" className="back-btn">Back</Link>
            </div>
        )
    }
}

export default ContactCard;
