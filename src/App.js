
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Welcome from "./sections/Welcome"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Related from "./sections/Related"
import Contact from "./sections/Contact"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Welcome} />
        <Route path='/experience' component={Experience} />
        <Route path='/projects' component={Projects} />
        <Route path='/related' component={Related} />
        <Route path='/contact' component={Contact} />
      </Routes>
    </Router>
  );
}

export default App;