//make a scrolly
// also make page smooth-scroll

import React from 'react';
import { Link } from "react-router-dom"

const Navbar = () =>
{
    return (
    <div>
    <li>
      <Link to="/">WELCOME</Link>
    </li>
    <li>
      <Link to="/experience">EXPERIENCE</Link>
    </li>
    <li>
      <Link to="/projects">PROJECTS</Link>
    </li>
    <li>
      <Link to="/related">RELATED</Link>
    </li>
    <li>
      <Link to="/contact">CONTACT</Link>
    </li>
  </div>
    );
}

export default Navbar;