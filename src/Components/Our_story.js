import React from 'react'
import "../Styles/Our_story.css";
const logo = require('../image/bottomlogo.png')

function Our_story() {
  return (
    <>
      <div className="OurStorymain">
        <div className="OurStory">
          <div className="Story_heading">
            <h1 id="header_title">Our Story</h1>
          </div>
          <div className="wrap_items">

            <div className="content1" align="left">
            Although our founder Mr. Akhlaque Aslam started the Maanof federation in 2021, the motivation to help underprivileged children was in him for a long time. As he spent his entire childhood in a village, he saw how some children were not getting basic education due to poor family conditions, and many of them are even suffering from health issues. This realization led him to take action, and he was propelled into the ever-changing journey of the Maanof Federation. 
            </div>
            <div className="content2" align="left">
              <p>In 2021 Maanof Federation was established with the clear intention to support the underprivileged and contribute to social development. Since its establishment, Maanof is continuously backing brilliant contenders who are looking for further education. In 2021 Maanof come forward to help 4 JEE qualified students who belonged to finically weaker families, Same year maanof federation organise a campaign to distribute books to 35 students of primary school. </p>
              <p>Since the beginning, we believed that health is a major aspect to create a better livelihood and social development, so keeping it in mind we started the healthcare campaigns in the rural area where we offered basic health check-ups. In Jan 2022 we organized a free eye check-up camp where we served 50+ people. we noticed that awareness of some dangerous diseases like cancer, tuberculosis (TB), Diabetes, etc is very low. So, we started to create awareness for these deadliest diseases. We also live with the awareness that only taking care of health and education is not enough unless we don't preserve our Nature, Here We add a new section in our federation which is plantation. Till today, we have planted more than 1000 trees. </p>
            </div>
          </div>
          <div className="bottomlogo">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>

    </>
  )
}

export default Our_story
