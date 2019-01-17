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
    //  figure how to use fetch command to get values from sever
    //  make sure you understand next two commented lines
        //  .then(resp => resp.json())
        //  .then(results => console.log("Hey, we have a response: ", results));
  };

  onContactClickHandler(clickedId) {
    //  find an object based on id
    //  make the project render information about it
  }

  //  do we actually need this?  
  onBackClick = () => {
    console.log("click");
  }

  render() {
    return (
        <div className="contacts-app">
          <div className="title">Contacts List</div>
          { this.state.displayContact 
            ? <ContactCard 
                details={this.state.displayContact} 
                onBackClick={this.onBackClick}
              />
            : <Contacts 
                contacts={this.state.contacts} 
                onContactClick={this.onContactClickHandler}
              />
          }
        </div>
    );
  }
}

export default ContactsList;
