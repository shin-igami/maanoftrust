import React from 'react'
import PingCard from '../../../Components/Cards/PingCard/PingCard'
import './OurValues.css'
import SmallCard from '../../../Components/Cards/SmallCard/SmallCard'
import book from '../../../image/open-book.png'
import heart from '../../../image/heart.png'
import idea from '../../../image/idea.png'
import house from '../../../image/house.png'
const OurValues = () => {
  return (
    <div className='OurValues'>
      <div className="heading">
        <h1>Our Values</h1>
      </div>
      <div className='container card-coloums'>
        <SmallCard campgn="DELIVER" image={book}/>
        <SmallCard campgn="SILVER" image={heart}/>
        <SmallCard campgn="GET" image={idea}/>
        <SmallCard campgn="DIAMOND" image={house}/>
      </div>
    </div>
  )
}

export default OurValues