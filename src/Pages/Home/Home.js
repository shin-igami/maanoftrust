import React from 'react'
import About from "../../Components/About"
import Crousel from '../../Components/Crousel'
import CurrentProgram from './CurrentProgram/CurrentProgram'
import FocusSectors from './FocusSectors/FocusSectors'

const Home = () => {
  return (
   <>
      <Crousel/>

   <About/>
  <FocusSectors/>
  <CurrentProgram/>

   </>
  )
}

export default Home