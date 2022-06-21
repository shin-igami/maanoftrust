import React from 'react'
import './woman.css'
import CountUp from 'react-countup';
import girleducation from '../../../../image/girleducation.png'
import pregnantwoman from '../../../../image/pregnant.png'
import womanemploy from '../../../../image/Womanemployee.png'
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
          <img src={girleducation} alt="" />
          </div>
          <div className="score">
           <CountUp end={104} duration={4} />
          </div>
          <div className="story">
          Girls Sent to School
          </div>
        </div>
        <div className="innercard">
          <div className="image">
          <img src={pregnantwoman} alt="" />
          </div>
          <div className="score">
           <CountUp end={81} duration={4}/>
          </div>
          <div className="story">
          pregnant women monitored
          </div>
        </div>
        <div className="innercard">
          <div className="image">
          <img src={womanemploy} alt="" />
          </div>
          <div className="score">
          <CountUp end={45} duration={4}/>
          </div>
          <div className="story">
          Woman Employed
          </div>
        </div>
        
        

      </div>
    </section>
    
    </>
 
  )
}

export default Our_impact_on_woman
