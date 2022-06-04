import React from 'react'

import CurrentProgram from '../../Home/CurrentProgram/CurrentProgram'
import Our_impact_on_woman from './Our_imapct_on_woman/Our_impact_on_woman'
import "../../../Components/Cards/Headingimage/Headingimage.css"
import Headingimage from '../../../Components/Cards/Headingimage/Headingimage'
const Diversityimage = require('../../../image/Diversity.jpg')

function Diversity() {
  
 
  return (
   
    <>
    <Headingimage cardimg="./Diversity.jpg" Title="Diversity" story="We have refined and perfected our incubation model to help take our enterprises to market in the shortest possible time."/>
    <Our_impact_on_woman/>
    <CurrentProgram/>

    </>
  )
}

export default Diversity
