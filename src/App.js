import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Contacts from './components/contacts/Contacts';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Contacts />
      </div>
    </div>
  );
}
export default App;
