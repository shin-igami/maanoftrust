import React from 'react'
import './BigImageCard.css'
import impact from '../../../image/impact.jpg'
const BigImageCard = () => {
  return (
    <div className='BigImageCard'>
        <div className="bigCard-image"><img src={impact} alt="" /></div>
        <div className="text-content">
            <div className="section-1">
                <div className='special-section'>
                  <p>We Maanof Federation leaves a great impact on different parts of society. Now we are focusing on the education sector, agriculture sector, and human welfare.Lets see Education sector for example. We try to help un-privileged children by providing them quality education; by providing them books, creating awareness among them and their parents, and by providing scholarships to the meritorious students.</p>
                </div>
                <div className='normal-section'><p></p></div>
            </div>
            <div className="section-2">
                <div className="special-section"><p>
                  <ul>
                    <li>We have provided books to 200+ under-privileged students.</li>
                    <li>10 meritous students have been given scholarships for higher studies.</li>
                    <li>100+ girls sent to school.</li>
                    <li>50+ pregnant women were monitored by us. </li>
                    <li>100+ farmers have been provided with free transportation to transport their crops to the market.</li>
                   
                    </ul></p></div>
                <div className="normal-section"><p></p></div>
            </div>
        </div>
    </div>
  )
}

export default BigImageCard