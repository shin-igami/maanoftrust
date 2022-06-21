import React from 'react'
import "./PingCard.css"
import DemoPing from '../../../image/student.png'
const PingCard = (props) => {
  function limitWord(myString){
  return `${myString
    .replace(/\s+/g, ' ') // remove extra spaces between words
    .split(' ')           // split string into array (using spaces as seperator)
    .splice(0, 20)     // splice the array to the desired word limit
    .join(' ')}...`;           // join it back into string (using spaces as seperator)
 }
  return (
  <div className="PingCards">
    <div className="container">
      <div class="card">
      <div class="box">
        <div class="content">
          <div className="img"><img src={props.image} alt="" /></div>
          <h4>{props.campgn}</h4>
          <p>{limitWord(props.headline)}</p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
    </div>
  </div>
  )
}

export default PingCard