
import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="welcome">
        <h1>Welcome</h1>
      </div>
      <div id="experience">
        <h1>Experience</h1>
      </div>
      <div id="projects">
        <h1>Projects</h1>
      </div>
      <div id="related">
        <h1>Related</h1>
      </div>
      <div id="contact">
        <h1>Contact</h1>
      </div>
    </div>
  );
}

export default App;