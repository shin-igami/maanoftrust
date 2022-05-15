import React from 'react'
import "../Styles/Topbar.css";

function Topbar() {
    const emailicon = require('../image/email.png')
    const phoneicon = require('../image/phone.png')
  return (
    <>
    <div className="topbar"> 

   <div className="emailphone">
    
   <i class="fa-solid fa-envelope"></i>Maanof@gmail.com    | 
   <i class="fa-solid fa-phone"></i>     +9999336369
    
   </div>

   <div className="socialmedia">
   <i class="fa-brands fa-twitter"></i>
   <i class="fa-brands fa-facebook-f"></i>
   <i class="fa-brands fa-instagram"></i>
   <i class="fa-brands fa-google-plus-g"></i>
   <i class="fa-brands fa-linkedin-in"></i>
   </div>
   


    </div>
    </>
  )
}

export default Topbar
