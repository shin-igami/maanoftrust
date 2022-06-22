import React from 'react'
import FormCards from '../../Components/Cards/FormCards/FormCards'
import Headingimage from '../../Components/Cards/Headingimage/Headingimage'
import partner from '../../image/Partner.jpg'


const BeacomePartner = () => {
  return (
  <>
       <Headingimage cardimg={partner} Title="Become Partner" story="Alone we can do so little together we can do so much."/>
       <FormCards/>
  </>
    
    
  )
}

export default BeacomePartner