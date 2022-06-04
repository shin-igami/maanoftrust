import React from 'react'
import './Headingimage.css'
// import '../../../image/woman.png'

function Headingimage(props){
    
    const mystyle = {
        backgroundImage: `url(${props.cardimg})`,    
        backgroundRepeat  :'no-repeat',
        width: "100%",
        height:" 370px",
        backgroundSize: 'cover',
        display: "flex"
     
      };
      
  return ( 
   <>
   <div style={mystyle} >
    <div className="Texts" align="left"> 
     {/* <img src={cardimage} alt="" /> */}
        <div className="Title"> 
           {props.Title}
        </div>
        <div className="para">
            {props.story}
        </div>
    </div>

   </div>
   </>
  )
}

export default Headingimage
