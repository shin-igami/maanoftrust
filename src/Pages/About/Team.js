import React from 'react'
import PersonCard from '../../Components/Cards/PersonCard/PersonCard'
import './Team.css'
import "../../Components/Cards/Headingimage/Headingimage.css"
import Headingimage from '../../Components/Cards/Headingimage/Headingimage'
import OurTeamimage from '../../image/OurTeam1.jpg'
import image1 from '../../image/mamu.jpg'
import image2 from '../../image/sagil.jpg'
import image3 from '../../image/mohsin.jpg'
const Team = () => {
  
  return (<>
            <Headingimage cardimg={OurTeamimage} Title="Our Team" story="We are led by young energetic team who are willing to give their 100% for the organisation."/>
            
    <div className='Team'>
        <h1>Directors</h1>
             <section class="hero-section">
            
                <div class="card-grid">
                 
                    <PersonCard name="MD Akhlaque Aslam" about="Director" image={image1}/>
                </div>
                </section>
        
        <h1>Team</h1>
             <section class="hero-section">
            
                <div class="card-grid">
                 
                    <PersonCard name="MD Sagil Faraz" about="Management Head" image={image2}/>
                    <PersonCard name="MD Mohsin Raza" about="Technical Head" image={image3}/>
                   
                </div>
                </section>
        
    </div>
    </>
  )
}

export default Team