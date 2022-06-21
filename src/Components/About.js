import React from 'react'
import '../Styles/About.css'
import image1 from '../image/poor-child1.jpg'
import image2 from '../image/poor-child2.jpg'
const About = () => {
  return (
   <div className="aboutc">
       <section>
       <div className="aboutc-image1"><img src={image2} alt="" /></div>
       <div className="aboutc-content"><h1>Who are we?</h1><p>Maanof Federation is an NGO in India that is operated from Delhi. We are endeavoring to help and support all underprivileged children and impoverished families. Maanof as an organization believes that children are great imitators, so give them something great to imitate. .</p></div>
       </section>
       <section>
       <div className="aboutc-content"><h1>What we do...</h1><p>Maanof federation has been working towards helping underprivileged children to achieve their dreams. Maanof educates and empowers underprivileged children from all over India. Along with this, we are continuously caring for those who can't take care of themselves by providing essential healthcare. </p></div>
      
       <div className="aboutc-image2"><img src={image1} alt="" /></div> </section>
   </div>
  )
}

export default About