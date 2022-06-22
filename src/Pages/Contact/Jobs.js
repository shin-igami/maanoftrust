import React from 'react'
import ApplyCard from '../../Components/Cards/Apply Card/ApplyCard'
import FormCards from '../../Components/Cards/FormCards/FormCards'
import Headingimage from '../../Components/Cards/Headingimage/Headingimage'
import contactjobimg from '../../image/Contact_job.jpg'
import monitor from '../../image/monitor.png'
import user from '../../image/user.png'

const Jobs = () => {
  return (
    <>

             <Headingimage cardimg={contactjobimg} Title="Jobs" story="We look for people who are enthusiastic and motivated to be part of our Organization."/>
             <ApplyCard image={monitor} title="IT Sector" description="An IT sector with some experience in developing App or Web."/>
             <ApplyCard image={user} title="Customer Care Executive" description="We are looking for a customer care executive who has good communication skills and is comfortable in both Hindi and English."/>
        

    </>
    
  )
}

export default Jobs