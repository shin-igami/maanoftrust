import React from 'react'
import './CreateImpact.css'
import BigImageCard from '../../../Components/Cards/BigImageCard/BigImageCard'
import Headingimage from '../../../Components/Cards/Headingimage/Headingimage'
import creatingimpactimg from '../../../image/CreateImpact1.jpg'
import impact from '../../../image/impact.jpg'
const CreateImpact = () => {
  return (
     <>
          <Headingimage cardimg={creatingimpactimg} Title="Our Impact" story="A life is not important except in the impact it has on other lives. "/>
    <div className='CreateImpact'>
          <div className="heading">
        <h1>Our Impact on Society</h1>
      </div>
      <div className='container card-coloums'>
     <BigImageCard/>
      </div>
    </div>
    </>
  )
}

export default CreateImpact