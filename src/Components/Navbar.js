import React from 'react';
import "../Styles/Navbar.css";
import { Link } from 'react-router-dom';
function Navbar() {
  const logo = require('../image/logo1.jpg')
  return (

    <>
      <header id="header">
        <div className="navbox">
          <div id="logo">
            <Link to="/"><img src={logo} alt="Maanof" title="" /></Link>
          </div>
          <ul className="navitems">
            <li class="nav-item">
              <Link class="nav-link" to="/">Home</Link>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" to="/about-maanof">About Maanof</Link></li>
                <li><Link class="dropdown-item" to="/team">Team</Link></li>

                <li><Link class="dropdown-item" to="/mentors">Mentors</Link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Our impact
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" to="/impact-createimpact">Creating Impact</Link></li>
                <li><Link class="dropdown-item" to="/impact-Diversity">Diversity and inclusion</Link></li>

              </ul>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Program
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" to="/">Focus Sectors</Link></li>
                <li><Link class="dropdown-item" to="/">Another action</Link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Contact us
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" to="/contact/contact-us">Contact Us</Link></li>
                <li><Link class="dropdown-item" to="/contact/jobs">Jobs</Link></li>
                <li><Link class="dropdown-item" to="/contact/become-a-mentor">Become A Mentor</Link></li>
                <li><Link class="dropdown-item" to="/contact/partnerwith-us">Partner With Us</Link></li>
              </ul>
            </li>


          </ul>
        </div>
      </header>
    </>
  )
}

export default Navbar
