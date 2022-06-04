import React from 'react'
import FormCards from '../../Components/Cards/FormCards/FormCards'
import Headingimage from '../../Components/Cards/Headingimage/Headingimage'
import contactjobimg from '../../image/Contact_job.jpg'

const Jobs = () => {
  return (
    <>
             <Headingimage cardimg={contactjobimg} Title="Jobs" story="We have refined and perfected our incubation model to help take our enterprises to market in the shortest possible time."/>
             <FormCards/>
    </>
    
  )
}

export default Jobs