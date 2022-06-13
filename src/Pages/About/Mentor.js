import React from 'react'
import PersonCard from '../../Components/Cards/PersonCard/PersonCard'
import "../../Components/Cards/Headingimage/Headingimage.css"
import './Mentor.css'
import Headingimage from '../../Components/Cards/Headingimage/Headingimage'
import Mentorimage from '../../image/Mentor1.jpg'
const Mentor = () => {
 
  return (
    <>
     <Headingimage cardimg={Mentorimage} Title="Our Mentor" story="We have refined and perfected our incubation model to help take our enterprises to market in the shortest possible time."/>
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
    </>
  )
}

export default Mentor