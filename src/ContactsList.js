import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contacts from './components/Contacts';
import ContactCard from './components/ContactCard';
import './ContactsList.css';

class ContactsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    }
  }

  componentDidMount() {
    this.getContacts();
  }

  getContacts() {
    fetch('https://voogie.glitch.me/contacts')
        .then(resp => resp.json())
        .then(results => this.setState({contacts: results}));
  };

  onContactClickHandler = (clickedId) => {
    const contactClicked = this.state.contacts.find(contact => {
      return contact.id === clickedId
    });
    this.setState({displayContact: contactClicked});
  }

  getContactsList = (props) => (
    <Contacts 
      contacts={this.state.contacts} 
      onContactClick={this.onContactClickHandler}
      {...props}
    />
  )

  contactInfo = (props) => {
    const found = this.state.contacts.find(
      contact => { return contact.id.toString() === props.match.params.id }
    );
    return found 
      ? (
        <ContactCard 
          details={found}
        />
      )
      : null
  }

  render() {
    return (
      <Router>
        <div className="contacts-app">
          <div className="title">{ this.state.displayContact 
              ? this.state.displayContact.name
              : this.props.headerText
            }
          </div>
          <Route exact path="/" component={this.getContactsList} />
          <Route path="/contact/:id" component={this.contactInfo} />
        </div>
      </Router> 
    );
  }
}

export default ContactsList;
