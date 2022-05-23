import React from 'react'
import PersonCard from '../../Components/Cards/PersonCard/PersonCard'
import './Mentor.css'
const Mentor = () => {
  return (
    <div className='mentor'>
        <h1>Our Mentors</h1>
             <section class="hero-section">
            
                <div class="card-grid">
                 
                    <PersonCard/>
                    <PersonCard/>
                    <PersonCard/>
                    <PersonCard/>
                    <PersonCard/>
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

export default Mentor