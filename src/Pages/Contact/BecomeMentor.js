import React from 'react'
import FormCards from '../../Components/Cards/FormCards/FormCards'
import Headingimage from '../../Components/Cards/Headingimage/Headingimage'
import Mentor from '../../image/BecomeMentor.jpg'
const BecomeMentor = () => {
  return (
    <>
     <Headingimage cardimg={Mentor} Title="Become Mentor" story="We have refined and perfected our incubation model to help take our enterprises to market in the shortest possible time."/>
    <FormCards/>
    </>
    
  )
}

export default BecomeMentor