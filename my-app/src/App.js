// import logo from './logo.svg';
import './App.css';
import StatefulGreeting from './components/StatefulGreeting';
import React from "react";

function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting="I'm a stateful class component" name="Harry"/>
    </div>
  );
}

export default App;
