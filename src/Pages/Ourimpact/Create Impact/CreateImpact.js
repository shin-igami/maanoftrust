import React from 'react'
import './CreateImpact.css'
import BigImageCard from '../../../Components/Cards/BigImageCard/BigImageCard'
import Headingimage from '../../../Components/Cards/Headingimage/Headingimage'
import creatingimpactimg from '../../../image/CreateImpact1.jpg'
const CreateImpact = () => {
  return (
     <>
          <Headingimage cardimg={creatingimpactimg} Title="Our Impact" story="We have refined and perfected our incubation model to help take our enterprises to market in the shortest possible time."/>
    <div className='CreateImpact'>
          <div className="heading">
        <h1>The Business Value of Impact</h1>
      </div>
      <div className='container card-coloums'>
     <BigImageCard/>
      </div>
    </div>
    </>
  )
}

export default CreateImpact