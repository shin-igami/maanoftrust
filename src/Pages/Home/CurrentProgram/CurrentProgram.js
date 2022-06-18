import React from 'react'
import Headingimage from '../../../Components/Cards/Headingimage/Headingimage'
import PingCard from '../../../Components/Cards/PingCard/PingCard'
import './CurrentProgram.css'

const CurrentProgram = () => {
  return (
    <>

    <div className='current-programs'>
    <div className="heading">
    <h1>Focus Sectors</h1>
        <p className='text-muted'>We run the following main programs.</p>
    </div>
    <div className='card-coloums'>
      <PingCard/>
      <PingCard/>
      <PingCard/>
      
    </div>
    </div>
    </>
  )
}

export default CurrentProgram