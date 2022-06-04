import React from 'react'
import './FormCards.css'
const FormCards = () => {
    return (
        <div class="FormCard container">
            <div class="wrapper">
                <div class="form">

                    <div class="right-col left" style={{
                        "background-color":"#82c2dd"
                    }}>
                        <h2>Subscribe to Our Newsletter</h2>

                        <div class="result"></div>
                        <div class="form-group">
                            <input id="name" type="text" placeholder="enter your name" />
                        </div>

                        <div class="form-group">
                            <input id="email" type="email" placeholder="enter your email" />
                        </div>

                        <div class="form-group">
                            <input id="message" type="text" placeholder="enter your phone number" />
                        </div>


                    </div>
                    <div class="right-col">


                        <div class="result"></div>
                        <div class="form-group">
                            <input id="name" type="text" placeholder="enter your name" />
                        </div>

                        <div class="form-group">
                            <input id="email" type="email" placeholder="enter your email" />
                        </div>

                        <div class="form-group">
                            <input id="message" type="text" placeholder="enter your phone number" />
                        </div>
                        <button id="submit" type="submit">Submit</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormCards