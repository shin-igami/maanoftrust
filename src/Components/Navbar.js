import { useState, useEffect,useRef } from "react";
import "../Styles/Navbar.css";
import { Link } from 'react-router-dom';
import Logo from '../image/MANOFF 3D  LOGO 26-11-21 PNG.png'
function Navbar() {
  const [val, setVal] = useState("navbox")
  useEffect(() => {
    window.onscroll = function () {
      if (document.documentElement.scrollTop > 20) {
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
            <Link to="/"><img src={Logo} alt="Maanof" title="" /></Link>
          </div>
          <input type="checkbox" id="click" />
          <label htmlFor="click" className="menu-btn" ref={refClose}>
            <i className="fas fa-bars"></i>
          </label>
          <ul className="navitems">
            <li class="nav-item">
              <Link class="nav-link" to="/" onClick={handleClick}>Home</Link>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link onClick={handleClick} class="dropdown-item" to="/about-maanof">About Maanof</Link></li>
                <li><Link onClick={handleClick} class="dropdown-item" to="/team">Team</Link></li>

                <li><Link onClick={handleClick} class="dropdown-item" to="/mentors">Mentors</Link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <Link  class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Our impact
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link onClick={handleClick} class="dropdown-item" to="/impact/creating-impact">Creating Impact</Link></li>
                <li><Link onClick={handleClick} class="dropdown-item" to="/impact/Diversity">Diversity and inclusion</Link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Program
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" onClick={handleClick} to="/programs/focus-sectors">Focus Sectors</Link></li>
                <li><Link class="dropdown-item" onClick={handleClick} to="/programs/current-programs">Current Programs</Link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Contact us
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link onClick={handleClick} class="dropdown-item" to="/contact/contact-us">Contact Us</Link></li>
                <li><Link onClick={handleClick} class="dropdown-item" to="/contact/jobs">Jobs</Link></li>
                <li><Link onClick={handleClick} class="dropdown-item" to="/contact/become-a-mentor">Become A Mentor</Link></li>
                <li><Link onClick={handleClick}  class="dropdown-item" to="/contact/partnerwith-us">Partner With Us</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Navbar
