import React from 'react'
import Headingimage from '../../Components/Cards/Headingimage/Headingimage'
import FocusSectors from '../Home/FocusSectors/FocusSectors'
import Focussectorimg from "../../image/FocusCentre.jpg"
function Focussec() {
  return (
    <>
    <Headingimage cardimg={Focussectorimg} Title="Diversity" story="We have refined and perfected our incubation model to help take our enterprises to market in the shortest possible time."/>
    <FocusSectors/>
    </>
  )
}

export default Focussec
