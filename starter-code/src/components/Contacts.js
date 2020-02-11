import React, { Component } from "react";
import Contacts from "../contacts.json";

class DynamicContactList extends Component {
  constructor() {
    super();
    this.state = {
      contacts: Contacts.splice(0, 5)
    };
    this.handleAddContact = this.handleAddContact.bind(this);
    console.log(this.state.contacts);
  }

  handleAddContact() {
    console.log('bla', this.state)
    const copyContacts = [...this.state.contacts]
    copyContacts.push(Contacts[Math.floor(Math.random() * Contacts.length)])
    this.setState({
      contacts: copyContacts
    })
  }

  handleSortByName() {
    console.log('ola')
    const sortByName = [...this.state.contacts]
    sortByName.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    this.setState({
      contacts: sortByName
    })
  }

  handleSortByPopularity() {
    console.log('ola')
    const sortByName = [...this.state.contacts]
    sortByName.sort(function (a, b) {
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (a.popularity < b.popularity) {
        return 1;
      }
      // a must be equal to b
      return 0;
    });
    this.setState({
      contacts: sortByName
    })
  }

  deleteConctactHandler = id => {
    const contactsCopy = [...this.state.contacts];
    const contactIndex = contactsCopy.findIndex(oneContact => {
      console.log(id)
      return oneContact.id === id
    });
    console.log('index', contactIndex)
    // debugger;
    contactsCopy.splice(contactIndex, 1);
    this.setState({
      contacts: contactsCopy
    });
  };

  render() {
    const newListOfContacts = this.state.contacts.map((oneContact, index) => {
      return (
        <tbody key={index}>
          <tr>
            <td>
              <img src={oneContact.pictureUrl} alt="" width="15%" />
            </td>
            <td>{oneContact.name}</td>
            <td>{oneContact.popularity}</td>
            <td><button onClick={() => this.deleteConctactHandler(oneContact.id)}>Delete</button></td>
          </tr>
        </tbody>
      );
    });

    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.handleAddContact}>Add a Random Contact</button>
        <button onClick={() => this.handleSortByName()}>Sort by name</button>
        <button onClick={() => this.handleSortByPopularity()}>Sort by popularity</button>
        <br />
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          {newListOfContacts}
        </table>
      </div>
    );
  }
}

export default DynamicContactList;
