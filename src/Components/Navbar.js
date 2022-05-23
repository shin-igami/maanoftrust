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

         <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
          Approach
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/">Incubation</Link></li>
            <li><Link class="dropdown-item" to="/">Another action</Link></li>
            <li><Link class="dropdown-item" to="/">iPitch</Link></li>
            <li><Link class="dropdown-item" to="/">Unconvention</Link></li>
            <li><Link class="dropdown-item" to="/">Mentoring & Technical Assistance</Link></li>
            <li><Link class="dropdown-item" to="/">Incubating Incubators</Link></li>
          </ul>
        </li>
         <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Program
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/">Action</Link></li>
            <li><Link class="dropdown-item" to="/">Another action</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li>
         <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resources
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/">Action</Link></li>
            <li><Link class="dropdown-item" to="/">Another action</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li>
         <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Portfolio
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/">Action</Link></li>
            <li><Link class="dropdown-item" to="/">Another action</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li>
         <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contact us
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/">Action</Link></li>
            <li><Link class="dropdown-item" to="/">Another action</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li>
         <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Our impact
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/">Action</Link></li>
            <li><Link class="dropdown-item" to="/">Another action</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" to="/">Something else here</Link></li>

          </ul>
        </li>
         
       </ul>
     </div>
   </header>
    </>
  )
}

export default Navbar
