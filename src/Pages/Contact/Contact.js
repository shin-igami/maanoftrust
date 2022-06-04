import React from 'react'
import ContactCard from '../../Components/Cards/ContactCard/ContactCard'
import Headingimage from '../../Components/Cards/Headingimage/Headingimage'
import contactus from '../../image/Contact_Us.jpg'

const Contact = () => {
  return (
    <>
         <Headingimage cardimg={contactus} Title="Contact Us" story="We have refined and perfected our incubation model to help take our enterprises to market in the shortest possible time."/>
         <ContactCard/>

    </>
  )
}

export default Contact