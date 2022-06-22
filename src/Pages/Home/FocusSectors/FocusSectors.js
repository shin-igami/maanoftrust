import React from 'react'
import ImgCard from '../../../Components/Cards/ImgCard/ImgCard'
import './FocusSectors.css'
import Educationimg from '../../../image/Education.jpg'
import Healthimg from '../../../image/healthcare.jpg'
import plantimage from '../../../image/plantation.jpg'
const FocusSectors = () => {
  return (
      <div className='FocusSectors'>
    <div className="heading">
    <h1>Focus Sectors</h1>
        <p className='text-muted'>Till Now, We are focusing on these sectors.</p>
    </div>
    <div className='Container card-coloums'>
        <ImgCard  cardimage={Educationimg} Title="Education" headlines="Encouraging and supporting  underprivlegd children to  help them become the leaders and changemakers of the future."/>
        <ImgCard  cardimage={Healthimg} Title="Healthcare" headlines="Providing suitable healthcare facilities and crucial medical support through free medical camps in order to achieve better health. "/>
        <ImgCard cardimage={plantimage}Title="plantation" headlines="We aim  to create a greener and better world for present and future generations Through our campaign and drives."/>
       
        
    </div>
    </div>
  )
}

export default FocusSectors