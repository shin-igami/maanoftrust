import React from 'react'

import CurrentProgram from '../../Home/CurrentProgram/CurrentProgram'
import Our_impact_on_woman from './Our_imapct_on_woman/Our_impact_on_woman'
import "../../../Components/Cards/Headingimage/Headingimage.css"
import Headingimage from '../../../Components/Cards/Headingimage/Headingimage'
import DiversityImage from '../../../image/Diversity1.jpg'
import PingCard from '../../../Components/Cards/PingCard/PingCard'


function Diversity() {
  
 
  return (
   
    <>
    <Headingimage cardimg={DiversityImage} Title="Empower her" story="God is within her; she will not fall."/>
    <Our_impact_on_woman/>
   
    </>
  )
}

export default Diversity
