// import logo from './logo.svg';
import './App.css';
import React from "react";
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';

function App() {
  return (
    <div className="App">
      <EventsFunctional />
      <EventsClass />
    </div>
  );
}

export default App;
