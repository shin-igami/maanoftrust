import React from 'react'
import PersonCard from '../../Components/Cards/PersonCard/PersonCard'
import './Team.css'
const Team = () => {
  return (
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
  )
}

export default Team