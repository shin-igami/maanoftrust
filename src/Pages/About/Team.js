import React from 'react'
import PersonCard from '../../Components/Cards/PersonCard/PersonCard'
import './Team.css'
import "../../Components/Cards/Headingimage/Headingimage.css"
import Headingimage from '../../Components/Cards/Headingimage/Headingimage'
const OurTeamimage = require('../../image/OurTeam3.jpg')
const Team = () => {
  
  return (<>
            <Headingimage cardimg="./OurTeam3.jpg" Title="Our Team" story="We have refined and perfected our incubation model to help take our enterprises to market in the shortest possible time."/>
            
    <div className='Team'>
        <h1>Board of Directors</h1>
             <section class="hero-section">
            
                <div class="card-grid">
                 
                    <PersonCard/>
                    <PersonCard/>
                    <PersonCard/>
                    <PersonCard/>
                </div>
                </section>
        
        <h1>Leadership Team</h1>
             <section class="hero-section">
            
                <div class="card-grid">
                 
                    <PersonCard/>
                    <PersonCard/>
                    <PersonCard/>
                    
                </div>
                </section>
        
        <h1>Team</h1>
             <section class="hero-section">
            
                <div class="card-grid">
                 
                    <PersonCard/>
                    <PersonCard/>
                    <PersonCard/>
                    <PersonCard/>
                    <PersonCard/>
                </div>
                </section>
        
    </div>
    </>
  )
}

export default Team