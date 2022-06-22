import React from 'react'
import Crousel from '../../Components/Crousel'
import Our_story from '../../Components/Our_story'
import Intro from './Intro/Intro'
import OurValues from './OurValues/OurValues'
import Aboutus from '../../image/AboutUs1.jpg'
import Headingimage from '../../Components/Cards/Headingimage/Headingimage'


const About = () => {
 
  return (
    <>  
    <Headingimage cardimg={Aboutus} Title="About Us" story="What we do and how we are so good at it...ldjalj lajfklla ljaflkjkl aljflkalal lfkajlj fakjl lajflk jaljkljflklaflk afkl faljlkfaa flllafjlkjal ldfjsla lkafjlkjafl ajlfa!"/>
    <Intro/>
    <OurValues/>
    <Our_story/>
    </>
  )
}

export default About