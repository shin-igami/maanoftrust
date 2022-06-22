import React from 'react'
import './ApplyCard.css'
import { Link } from 'react-router-dom';
const ApplyCard = (props) => {
    
  return (
    <div class="apply-card">
 <div className='content'>        <img src={props.image} alt="" />
  <div className='text-content'>  <h4>{props.title}</h4>
    <p>{props.description}</p></div></div>
    <a className='Link' target="__blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfUUKsyBrwFKVdQ-qSrVuZna47hHX0iRpZGBA48Nzd3R765qQ/viewform?usp=sf_link">Apply <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
  </div>
  )
}

export default ApplyCard