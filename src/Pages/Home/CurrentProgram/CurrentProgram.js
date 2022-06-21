import React from 'react'
import Headingimage from '../../../Components/Cards/Headingimage/Headingimage'
import PingCard from '../../../Components/Cards/PingCard/PingCard'
import './CurrentProgram.css'
import edu from '../../../image/student.png'
import health from '../../../image/first-aid-kit.png'
import green from '../../../image/save-the-planet.png'
const CurrentProgram = () => {
  return (
    <>

    <div className='current-programs'>
    <div className="heading">
    <h1>Current Program</h1>
        <p className='text-muted'>We run the following main programs.</p>
    </div>
    <div className='card-coloums'>
      <PingCard campgn="Scholarship" headline="The main aim of the ...... Scholarship program is to support the 
brilliant contenders who’re belonging to finically weaker families." image={edu}/>
 <PingCard campgn="Go Green" headline="Trees help clean the air we breathe, filter the water we drink, and 
provide habitat to over 80% of the world's terrestrial 
biodiversity,keeping it in mind We are running a campaign “Go 
Green”." image={green}/>
      <PingCard campgn="Health First" headline="The primary focus of the health first is to provide the basic health 
and social needs of underprivileged sections of the society like 
poor, women, elderly, children etc" image={health}/>
     
 
      
    </div>
    </div>
    </>
  )
}

export default CurrentProgram