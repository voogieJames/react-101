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

                    <ul>
                        {
                            this.props.contacts.map(
                            (contact) => {
                                return (
                                    <Info
                                        key={contact.id}
                                        id={contact.id}
                                        name={contact.name}
                                        phone={contact.phoneNumber}
                                        avatar={contact.avatar}
                                        oncontact = {this.props.onContactClick}
                                    />
                                )
                            })
                        }
                    </ul>
                }
            </div>
        )
    } 
}

export default Contacts;