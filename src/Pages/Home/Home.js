import React from 'react'
import About from "../../Components/About"
import Card4 from '../../Components/Card4'
import Crousel from '../../Components/Crousel'
import CurrentProgram from './CurrentProgram/CurrentProgram'
import FocusSectors from './FocusSectors/FocusSectors'
import MoreMaanof from './MoreMaanof/MoreMaanof'
import SmallCard from '../../Components/Cards/SmallCard/SmallCard'
import BigImageCard from '../../Components/Cards/BigImageCard/BigImageCard'
const Home = () => {
  return (
   <>
      <Crousel/>

   <About/>
  <FocusSectors/>
  <CurrentProgram/>
<MoreMaanof/>
<SmallCard/>
<BigImageCard/>
   </>
  )
}

export default Home