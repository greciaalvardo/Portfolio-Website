
import React from 'react';
import { Link } from "react-scroll"
import "./Navbar.css";

const Navbar = () =>
{
    return (
    <nav>
      <u1 className="navigation">
        <li>
          <Link
            activeClass="active"
            to="welcome"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            Welcome
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            Experience
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            Projects
          </Link>
          </li>
        <li>
          <Link
            activeClass="active"
            to="related"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            Related
          </Link>
          </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            Contact
          </Link>
          </li>
      </u1>
    </nav>
    );
}

export default Navbar;