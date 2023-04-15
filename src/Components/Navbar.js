import { useState, useEffect,useRef } from "react";
import "../Styles/Navbar.css";
import { NavLink } from 'react-router-dom';
import Logo from '../image/MANOFF 3D  LOGO 26-11-21 PNG.png'
function Navbar() {
  const [val, setVal] = useState("navbox")
  useEffect(() => {
    window.onscroll = function () {
      if (document.documentElement.scrollTop > 35) {
        setVal("navbox sticky")
      } else {
        setVal("navbox")
      }

    }
  }, [val])
const refClose = useRef(null);
const handleClick =() =>{
  refClose.current.click();
}
  return (

    <>
      <header id="header">
        <div className={val}>
          <div id="logo">
            <NavLink to="/"><img src={Logo} alt="Maanof" title="" /></NavLink>
          </div>
          <input type="checkbox" id="click" />
          <label htmlFor="click" className="menu-btn" ref={refClose}>
            <i className="fas fa-bars"></i>
          </label>
          <ul className="navitems">
            <li class="nav-item">
              <NavLink class="nav-link" to="/" onClick={handleClick}>Home</NavLink>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><NavLink onClick={handleClick} class="dropdown-item" to="/about-maanof">About Maanof</NavLink></li>
                <li><NavLink onClick={handleClick} class="dropdown-item" to="/team">Team</NavLink></li>
  
                <li><NavLink onClick={handleClick} class="dropdown-item" to="/mentors">Mentors</NavLink></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
              class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Our impact
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><NavLink onClick={handleClick} class="dropdown-item" to="/impact/creating-impact">Creating Impact</NavLink></li>
                <li><NavLink onClick={handleClick} class="dropdown-item" to="/impact/Diversity">Empower her </NavLink></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Program
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><NavLink class="dropdown-item" onClick={handleClick} to="/programs/focus-sectors">Focus Sectors</NavLink></li>
                <li><NavLink class="dropdown-item" onClick={handleClick} to="/programs/current-programs">Current Programs</NavLink></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Contact Us
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><NavLink onClick={handleClick} class="dropdown-item" to="/contact/contact-us">Contact Us</NavLink></li>
                <li><NavLink onClick={handleClick} class="dropdown-item" to="/contact/jobs">Jobs</NavLink></li>
                <li><NavLink onClick={handleClick} class="dropdown-item" to="/contact/become-a-mentor">Become A Mentor</NavLink></li>
                <li><NavLink onClick={handleClick}  class="dropdown-item" to="/contact/partnerwith-us">Partner With Us</NavLink></li>
              </ul>
            </li>
            <a target="__blank" href="https://rzp.io/l/CcCG1qOV3" className="btn red-btn" >Donate Now</a>
          </ul>
          
        </div>
      </header>
    </>
  )
}

export default Navbar
