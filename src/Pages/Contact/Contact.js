import React from 'react'
import ContactCard from '../../Components/Cards/ContactCard/ContactCard'
import Headingimage from '../../Components/Cards/Headingimage/Headingimage'
import contactus from '../../image/Contact_Us.jpg'

const Contact = () => {
  return (
    <>
         <Headingimage cardimg={contactus} Title="Contact Us" story="We Would love to talk to you about any of the service that we offer."/>
         <ContactCard/>

    </>
  )
}

export default Contact