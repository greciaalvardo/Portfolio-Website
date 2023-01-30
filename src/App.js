import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Welcome from "./sections/Welcome"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Related from "./sections/Related"
import Contact from "./sections/Contact"

function App() {
  return (
    <main>
    <div className="App">
      <Navbar />
      <Welcome />
      <Experience/>
      <Projects/>
      <Related/>
      <Contact/>
    </div>
</main>

  );
}

export default App;