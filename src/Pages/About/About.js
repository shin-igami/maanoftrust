import React from 'react'
import Crousel from '../../Components/Crousel'
import Our_story from '../../Components/Our_story'
import Intro from './Intro/Intro'
import OurValues from './OurValues/OurValues'

const About = () => {
  return (
    <div> 
    <Crousel/>
    <Intro/>
    <OurValues/>
    <Our_story/>
    </div>
  )
}

export default About