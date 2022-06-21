import React from 'react'
import './PersonCard.css'
const PersonCard = (props) => {
    return (

                    <a class="person-card" href="#">
                        <div class="card__background" style={{"background-image":`url(${props.image})`}}></div>
                        <div class="card__content">
                            <h3 class="card__heading">{props.name}</h3>
                            <p class="card__category">{props.about}</p>
                        </div>
                    </a>
                  
          
 
    )
}

export default PersonCard