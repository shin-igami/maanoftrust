import React from 'react'
import './PersonCard.css'
const PersonCard = () => {
    return (

                    <a class="card" href="#">
                        <div class="card__background" style={{"background-image": "url(https://i.pinimg.com/originals/af/1c/30/af1c30d6d881d9447dec06149f61d2f9.png)"}}></div>
                        <div class="card__content">
                            <h3 class="card__heading">Mohsin Raza</h3>
                            <p class="card__category">CEO</p>
                        </div>
                    </a>
                  
          
 
    )
}

export default PersonCard