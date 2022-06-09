import React from 'react'
import ImgCard from '../../../Components/Cards/ImgCard/ImgCard'
import './FocusSectors.css'
const FocusSectors = () => {
  return (
      <div className='FocusSectors'>
    <div className="heading">
    <h1>Focus Sectors</h1>
        <p className='text-muted'>We run the following main programs.</p>
    </div>
    <div className='Container card-coloums'>
        <ImgCard/>
        <ImgCard/>
        <ImgCard/>
    </div>
    </div>
  )
}

export default FocusSectors