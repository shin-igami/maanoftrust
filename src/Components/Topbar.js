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
     <a href="https://twitter.com"><i className="fa-brands fa-twitter"></i></a>
     <a href="https://twitter.com"><i className="fa-brands fa-facebook-f"></i></a>
     <a href="https://twitter.com"><i className="fa-brands fa-instagram"></i></a>
     <a href="https://twitter.com"><i className="fa-brands fa-google-plus-g"></i></a>
     <a href="https://twitter.com"><i className="fa-brands fa-linkedin-in"></i></a>
     

   
   </div>
   


    </div>
    </>
  )
}

export default Topbar
