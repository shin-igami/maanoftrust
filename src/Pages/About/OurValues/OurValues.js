import React from 'react'
import PingCard from '../../../Components/Cards/PingCard/PingCard'
import './OurValues.css'
const OurValues = () => {
  return (
    <div>
         <div className='OurValues'>
    <div className="heading">
    <h1>Our Values</h1>
    </div>
    <div className='container card-coloums'>
        <PingCard/>
        <PingCard/>
        <PingCard/>
        <PingCard/>
        <PingCard/>
        <PingCard/>
        <PingCard/>
    </div>
    </div>
    </div>
  )
}

export default OurValues