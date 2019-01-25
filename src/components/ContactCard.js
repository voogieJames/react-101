import React from 'react';

//  make sure nothing is wrong and we are able to render this one 
class ContactCard extends React.Component {

    backClick = () => {
        this.props.onBackClick();
    };

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
                <div onClick={this.backClick}><div className="back-btn">Back</div></div>
            </div>
        )
    }
}
export default ContactCard;