import React from 'react'
import FormCards from '../../Components/Cards/FormCards/FormCards'
import Headingimage from '../../Components/Cards/Headingimage/Headingimage'
import partner from '../../image/Partner.jpg'


const BeacomePartner = () => {
  return (
  <>
       <Headingimage cardimg={partner} Title="Become Partner" story="We have refined and perfected our incubation model to help take our enterprises to market in the shortest possible time."/>
       <FormCards/>
  </>
    
    
  )
}

export default BeacomePartner