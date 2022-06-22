import React from 'react'
import './ApplyCard.css'
import { Link } from 'react-router-dom';
const ApplyCard = (props) => {
    
  return (
    <div class="apply-card">
         <img src={props.image} alt="" />
  <div className='content'>  <h4>{props.title}</h4>
    <p>{props.description}</p></div>
    <Link className='Link' to="/programs/current-programs">Apply <i class="fa-solid fa-arrow-up-right-from-square"></i></Link>
  </div>
  )
}

export default ApplyCard