import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Contact from './components/contacts/Contact';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Contact fullName="ET-TARAK Zouhair" email="ettarak.zouhair@gmail.com" />
      </div>
    </div>
  );
}
export default App;
