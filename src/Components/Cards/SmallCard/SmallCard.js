import React from 'react'
import './SmallCard.css'
const SmallCard = (props) => {
  return (
      <div class="SmallCard">
        <h2>{props.campgn}</h2>
        <p>{props.headline}</p>
        <img src={props.image} alt="" />
       
      </div>
 
  )
}

export default SmallCard