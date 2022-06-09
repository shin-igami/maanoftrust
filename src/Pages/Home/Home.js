import React from 'react'
import About from "../../Components/About"
import Card4 from '../../Components/Card4'
import Crousel from '../../Components/Crousel'
import CurrentProgram from './CurrentProgram/CurrentProgram'
import FocusSectors from './FocusSectors/FocusSectors'
import MoreMaanof from './MoreMaanof/MoreMaanof'
import SmallCard from '../../Components/Cards/SmallCard/SmallCard'
import BigImageCard from '../../Components/Cards/BigImageCard/BigImageCard'
import ContactCard from '../../Components/Cards/ContactCard/ContactCard'
import FormCards from '../../Components/Cards/FormCards/FormCards'
const Home = () => {
  return (
   <>
   <Crousel/>
 <About/>
 <FocusSectors/>
<CurrentProgram/>
<MoreMaanof/>
   </>
  )
}

export default Home