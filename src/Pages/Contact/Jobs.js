import React from 'react'
import FormCards from '../../Components/Cards/FormCards/FormCards'
import Headingimage from '../../Components/Cards/Headingimage/Headingimage'
import contactjobimg from '../../image/Contact_job.jpg'

const Jobs = () => {
  return (
    <>
             <Headingimage cardimg={contactjobimg} Title="Jobs" story="We look for people who are enthusiastic and motivated to be part of our Organization."/>
             <FormCards/>
    </>
    
  )
}

export default Jobs