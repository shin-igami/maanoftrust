import React from 'react'
import Headingimage from '../../Components/Cards/Headingimage/Headingimage'
import FocusSectors from '../Home/FocusSectors/FocusSectors'
import '../Home/FocusSectors/FocusSectors.css'
import Focussectorimg from "../../image/FocusCentre.jpg"
import plantimg from '../../image/plantation.jpg'
import ImgCard from '../../Components/Cards/ImgCard/ImgCard'
import Educationimg from '../../image/Education.jpg'
import Healthcareimg from '../../image/healthcare.jpg'
import './Focussec.css'
function Focussec() {
  return (

    <div className='focussec'>
    <Headingimage cardimg={Focussectorimg} Title="Focus Sector" story="We are currently working and focusing on these three sectors. "/>

    <div className='FocusSectors'>
    <div className="heading">
    <h1>Focus Sectors</h1>
        <h4 className='text-muted'>Till Now, We are focusing on these sectors.</h4>
    </div>
    <div className='Container card-coloums'>
      
        <ImgCard  cardimage={Educationimg}  Title="Education" content="Encouraging and supporting underprivlegd children to help 
them become the leaders and changemakers of the future.Maanof has been working continuously to ensure quality elementary education for children, especially underprivileged children from marginalized communities. Maanof also encourages talent through its scholarship programs.  "/>
        <ImgCard cardimage={Healthcareimg} Title="Healthcare" content="Providing suitable healthcare facilities and crucial medical 
support through free medical camps in order to achieve better 
health. 
We are providing the highest level of health facilities to the 
children, adult and elders across the remote areas of the country. 
The ambit of our work includes improving of maternal and 
reproductive health, child health and nutrition, improvement of 
the sanitation in the environment and many more. "/>
        <ImgCard cardimage={plantimg} Title="plantation" content="We aim to create a greener and better world for present and 
future generations Through our campaign and drives.We involve locals in our plantation campaign and cleanliness drive. Our objective is to plant as many trees as we can because we all know trees clean the air it absorbs odors and pollutant gases. We are running  various projects to nullify the environmental imbalance caused by us and our society to the enviroment."/>
         
    </div>
    </div>
    </div>
  )
}

export default Focussec
