import React from 'react'
import CurrentProgram from '../Home/CurrentProgram/CurrentProgram'
import Currentprogramimg from "../../image/CurrentProgram.jpg"
import Headingimage from '../../Components/Cards/Headingimage/Headingimage'
import '../Home/CurrentProgram/CurrentProgram.css'
import SmallCard from '../../Components/Cards/SmallCard/SmallCard'
import edu from '../../image/student.png'
import green from '../../image/save-the-planet.png'
import health from '../../image/first-aid-kit.png'
import './Currprogram.css'
function Currprogram() {
  return (
    <div className='currprogram'>
      <Headingimage cardimg={Currentprogramimg} Title="Current program" story=" From Our focus sector, we are running programs that help in social development." />

      <div className='current-programs'>
        <div className="heading">
          <h1>Currnet Program</h1>
          <p className='text-muted'>We run the following main programs.</p>
        </div>
        <div className='card-coloums'>

          <SmallCard campgn="Scholarship" headline="The main aim of the ...... Scholarship program is to support the 
brilliant contenders who’re belonging to finically weaker families.

The Objective of the scholarship scheme is to support the 
dedicated and economically backward students of class X, who 
want to study further will be awarded. Over 100 shortlists 
candidates will accept a cash award between INR 500 to INR 
1000.Eligibility criteria are simple parents' income should be less 
than 2lac per annum and have decent marks in class 10. " image={edu} />
          <SmallCard campgn="Go Green" headline="Trees help clean the air we breathe, filter the water we drink, and 
provide habitat to over 80% of the world's terrestrial 
biodiversity,keeping it in mind We are running a campaign “Go 
Green”.
“Trees exhale for us so that we can inhale them to stay alive. Can we ever forget that? 
Let us love trees with every breath we take until we perish.”
The major emphasis in this programme is to motivate and create 
awareness among children and adults and trees to plant trees, 
inform them about the benefit of planting trees. We aim to plant 
100 trees every month in different location and involve locals in 
our campaign. " image={green} />
          <SmallCard campgn="Health First" headline="The primary focus of the health first is to provide the basic health 
and social needs of underprivileged sections of the society like 
poor, women, elderly, children etc
“To ensure good health: eat lightly, breathe deeply, live moderately, cultivate 
cheerfulness, and maintain an interest in life.” -William Londen
We are running this campaign in rural areas for the 
underprivileged and provide them with basic health check-up 
tests like Complete Blood Count with ESR, Random Blood Sugar, 
and ECG. Apart from tests, we like to provide some essential 
medicine" image={health} />


        </div>
      </div>
    </div>
  )
}

export default Currprogram
