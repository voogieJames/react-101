import React from 'react';
import Contacts from './components/Contacts';
import ContactCard from './components/ContactCard';
import './ContactsList.css';

class ContactsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      displayContact: null
    }
    this.getContacts = this.getContacts.bind(this);
    this.getContacts();
  }

  //  isn't it a bit weird function?
  componentDidMount() {
    //  server url where you can fetch data you need
    const url = "https://voogie.glitch.me/contacts";
    //  think why we call this function here
    this.getContacts(url);
  }

  //  this method get's called when the componend is first mounted
  //  how can we use it?
  getContacts(url) {
    fetch(url)
        .then(resp => resp.json())
        .then(resp => this.setState({contacts:resp}));
  }

  onContactClickHandler(clickedId) {
    this.setState({displayContact:this.state.contacts.find((u) => {
        return u.id=== clickedId;
      })});

    //  find an object based on id
    //  make the project render information about it
  }

  //  do we actually need this?  
  onBackClick = () => {
    this.setState({displayContact:null});
  }

  render() {

    return (
        <div className="contacts-app">
          <div className="title">CANTACT LIST</div>
          { this.state.displayContact 
            ? <ContactCard 
                details={this.state.displayContact} 
                onBackClick={this.onBackClick}
              />
            : <Contacts 
                contacts={this.state.contacts}
                onContactClick={this.onContactClickHandler.bind(this)}
              />
          }
        </div>
    );
  }
}

export default ContactsList;
