import React from 'react'
import './ImgCard.css'
import { Link } from 'react-router-dom';
const ImgCard = (props) => {
    function limitWord(myString){
        return `${myString
          .replace(/\s+/g, ' ') // remove extra spaces between words
          .split(' ')           // split string into array (using spaces as seperator)
          .splice(0, 20)     // splice the array to the desired word limit
          .join(' ')}...`;           // join it back into string (using spaces as seperator)
       }
    return (
            <div class="a-box">
                <div class="img-container">
                    <div class="img-inner">
                        <div class="inner-skew">
                            <img src={props.cardimage} />
                        </div>
                    </div>
                </div>
                <div class="text-container">
                    <h3>{props.Title}</h3>
                    <div >
                   {props.headlines? limitWord(props.headlines) : props.content}
                    </div>
                          <Link className='Link' to="/programs/focus-sectors">Read More</Link>
                </div>
          
            </div>
           
    )
}

export default ImgCard