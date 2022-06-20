import React from 'react'
import './ImgCard.css'
const ImgCard = (props) => {
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
                   {props.headlines}
                    </div>
                </div>
            </div>
           
    )
}

export default ImgCard