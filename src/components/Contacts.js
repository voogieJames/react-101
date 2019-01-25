import React, { Component } from 'react';
import Info from "./Info";

class Contacts extends Component {

    render() {
        return (
            <div className="contacts">
                {
                    //  go through each element in the array that was provided as
                    //  props and execute this function, which will return
                    //  an array of JSX elements, figure out what to do next

                    this.props.contacts.map((contact, index) =>(
                            <Info
                                key={index}
                                id={contact.id}
                                name={contact.name}
                                phone={contact.phoneNumber}
                                avatar={contact.avatar}
                                onContactClick={this.props.onContactClick}
                            />
                        ))


                }
            </div>
        )
    }
}

export default Contacts;

