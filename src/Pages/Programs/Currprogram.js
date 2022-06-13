import React from 'react'
import CurrentProgram from '../Home/CurrentProgram/CurrentProgram'
import Currentprogramimg from "../../image/CurrentProgram.jpg"
import Headingimage from '../../Components/Cards/Headingimage/Headingimage'


function Currprogram() {
  return (
    <>
    <Headingimage cardimg={Currentprogramimg} Title="Diversity" story="We have refined and perfected our incubation model to help take our enterprises to market in the shortest possible time."/>

    <CurrentProgram/>
    </>
  )
}

export default Currprogram
