import React from 'react'
import PingCard from '../../../Components/Cards/PingCard/PingCard'
import './OurValues.css'
import SmallCard from '../../../Components/Cards/SmallCard/SmallCard'
const OurValues = () => {
  return (
    <div className='OurValues'>
      <div className="heading">
        <h1>Our Values</h1>
      </div>
      <div className='container card-coloums'>
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
    </div>
  )
}

export default OurValues