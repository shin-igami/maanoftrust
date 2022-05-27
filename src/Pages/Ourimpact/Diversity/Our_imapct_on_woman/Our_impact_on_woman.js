import React from 'react'
import './woman.css'
import CountUp from 'react-countup';

const imageicon = require('../../../../image/woman.png')
function Our_impact_on_woman() {
  return (
    <>
    <section className="impactonwoman">
      <div className="headline" align="left"  > 
        Our Impact on Women & Girls in 2019
      </div>
      <div className="card-container">
      
        <div className="innercard">
          <div className="image">
          <img src={imageicon} alt="" />
          </div>
          <div className="score">
           <CountUp end={454} duration={4} />
          </div>
          <div className="story">
          women screened for cervical cancer
          </div>
        </div>
        <div className="innercard">
          <div className="image">
          <img src={imageicon} alt="" />
          </div>
          <div className="score">
           <CountUp end={549} duration={4}/>
          </div>
          <div className="story">
          pregnant women monitored
          </div>
        </div>
        <div className="innercard">
          <div className="image">
          <img src={imageicon} alt="" />
          </div>
          <div className="score">
          <CountUp end={645} duration={4}/>
          </div>
          <div className="story">
          livlihood created for the woman 
          </div>
        </div>
        <div className="innercard">
          <div className="image">
          <img src={imageicon} alt="" />
          </div>
          <div className="score">
           <CountUp end={758} duration={4} />
          </div>
          <div className="story">
           This is for the woman
          </div>
        </div>
        

      </div>
    </section>
    
    </>
 
  )
}

export default Our_impact_on_woman
