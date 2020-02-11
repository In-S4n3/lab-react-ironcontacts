import React, { Component } from 'react';
import './App.css';

import DynamicContactslist from "./components/Contacts"

class App extends Component {
  render() {
    return (
      <div className="App">
        <DynamicContactslist />
      </div>
    );
  }
}

export default App;
