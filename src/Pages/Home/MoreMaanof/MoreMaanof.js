import React from 'react'
import Card4 from '../../../Components/Card4'
import './MoreMaanof.css'
import hiringimg from '../../../image/hiring.jpg'
import becommember from '../../../image/becomemember.png'
import ideas from '../../../image/ideas.jpg'

const MoreMaanof = () => {
  return (
      <div className='MoreMaanof'>
      <h1>More from Maanof</h1>
    
    <div className="outercard">
        
      <Card4 cardimage={hiringimg} Title="Hiring" content="We are looking for a customer care executive who has good communication skills and is comfortable in both Hindi and English."/>
      <Card4 cardimage={becommember} Title="Become a Member" content="We are looking for a customer care executive who has good communication skills and is comfortable in both Hindi and English."/>
      <Card4 cardimage={ideas} Title="Share your ideas" content="if you have any idea which can help us to support the needy  you can share it with us, you can call us or write a mail to us."/>
      
     
    </div>
    </div>
  )
}

export default MoreMaanof