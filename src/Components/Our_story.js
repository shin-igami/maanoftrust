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
              In 2001, as a pioneering social enterprise  lorem incubator in India, the recipe for incubation success was yet unwritten. With a passionate young team, inspiring leadership, an accomplished Board of Advisors, and partners who truly walked the distance with us, we spent many years refining our incubation model. Twenty years and working with over 300 entrepreneurs has perfected our incubation technique and attuned it to the needs of the innovative early stage companies that we work with.
            </div>
            <div className="content2" align="left">
              <p>As we became seasoned members of the social enterprise ecosystem through the years, we grew zealous about contributing to it through meaningful knowledge and networking products. “iPitch” and “Unconvention” – home-grown ideas by Villgroers were conceptualized to create symbiosis between entrepreneurs, investors, and other stakeholders. Over the last 4 years they have evolved into some of the most purposeful platforms for social entrepreneurs in India.</p>
              <p>We also live with the awareness that one Villgro is not enough to create impact at the scale that we envisage. We share our experiences and knowledge with as many others as possible, and have trained numerous other incubators in our model. Today, we have Villgros in Kenya, the Philippines and the US. We remain committed to creating many more Villgros around the world.</p>
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
