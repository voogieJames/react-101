import React, { Component } from 'react';
import Info from "./Info";

class Contacts extends Component {

    render() {
        return (
            <div className="contacts">
                { this.props.contacts.map((contact, index) => (
                    <Info 
                        key={index} 
                        id={contact.id} 
                        name={contact.name}
                        phone={contact.phoneNumber}
                        avatar={contact.avatar} 
                        onContactClick={() => { this.props.history.push("/contact/" + contact.id)} }
                        /> 
                    )) 
                }
            </div>
        )
    } 
}

export default Contacts;