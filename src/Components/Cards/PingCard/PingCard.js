import React from 'react'
import "./PingCard.css"
import DemoPing from '../../../image/student.png'
const PingCard = () => {
  return (
  <div className="PingCards">
    <div className="container">
      <div class="card">
      <div class="box">
        <div class="content">
          <div className="img"><img src={DemoPing} alt="" /></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
    </div>
  </div>
  )
}

export default PingCard