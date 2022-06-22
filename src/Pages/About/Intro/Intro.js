import React from 'react'
import './Intro.css'
import mamu from '../../../image/mamu.jpg'
const Intro = () => {
  return (
    <div className='intro'>
        <div className="Container">
        <section>
       <div className="intro-image1"><img src={mamu} alt="" /></div>
       <div className="intro-content"><h1>Our Mission</h1><p>Maanof Federation was founded in 2021 by Mr. Akhlaque Aslam with the mission to empower underprivileged children through quality education and support them to achieve their goals. We also aim to provide better healthcare facilities to the needy. </p></div>
       </section>
        </div>
    </div>
  )
}

export default Intro