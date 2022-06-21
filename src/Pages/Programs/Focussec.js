import React from 'react'
import Headingimage from '../../Components/Cards/Headingimage/Headingimage'
import FocusSectors from '../Home/FocusSectors/FocusSectors'
import '../Home/FocusSectors/FocusSectors.css'
import Focussectorimg from "../../image/FocusCentre.jpg"
import plantimg from '../../image/plantation.jpg'
import ImgCard from '../../Components/Cards/ImgCard/ImgCard'
import Educationimg from '../../image/Education.jpg'
import Healthcareimg from '../../image/healthcare.jpg'

function Focussec() {
  return (
    <>
    <Headingimage cardimg={Focussectorimg} Title="Diversity" story="We have refined and perfected our incubation model to help take our enterprises to market in the shortest possible time."/>
    <div className='FocusSectors'>
    <div className="heading">
    <h1>Focus Sectors</h1>
        <h4 className='text-muted'>We run the following man programs.</h4>
    </div>
    <div className='Container card-coloums'>
      
        <ImgCard  cardimage={Educationimg}  Title="Education" headlines="Maanof has been working continuously to ensure quality elementary education for children, especially underprivileged children from marginalized communities. Maanof also encourages talent through its scholarship programs.  "/>
        <ImgCard cardimage={Healthcareimg} Title="Healthcare" headlines="We are providing the highest level of health facilities to the children, adult and elders across the remote areas of the country. The ambit of our work includes improving of maternal and reproductive health, child health and nutrition, improvement of the sanitation in the environment and many more. "/>
        <ImgCard cardimage={plantimg} Title="plantation" headlines="We involve locals in our plantation campaign and cleanliness drive. Our objective is to plant as many trees as we can because we all know trees clean the air it absorbs odors and pollutant gases. We are running  various projects to nullify the environmental imbalance caused by us and our society to the enviroment."/>
         
    </div>
    </div>
    </>
  )
}

export default Focussec
