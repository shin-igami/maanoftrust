import React from 'react'
import "../Styles/Topbar.css";

function Topbar() {
    // const emailicon = require('../image/email.png')
    // const phoneicon = require('../image/phone.png')
  return (
    <>
    <div className="topbar"> 

   <div className="email">
    
   <i className="fa-solid fa-envelope"></i>Maanof@gmail.com    
    
   </div>
   <div className="phone">
     
   <i className="fa-solid fa-phone"></i>    +9999336369
    
   </div>

   <div className="socialmedia">
     <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-twitter" id="twiter"></i></a>
     <a href="https://twitter.com"><i className="fa-brands fa-facebook-f" id="facebook"></i></a>
     <a href="https://twitter.com"><i className="fa-brands fa-instagram" id="insta"></i></a>
     <a href="https://twitter.com"><i className="fa-brands fa-youtube" id="youtube"></i></a>
     <a href="https://twitter.com"><i className="fa-brands fa-linkedin-in" id="linkdin"></i></a>
     

   
   </div>
   


    </div>
    </>
  )
}

export default Topbar
