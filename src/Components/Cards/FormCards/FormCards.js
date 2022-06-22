import React from 'react'
import './FormCards.css'
import emailJs from 'emailjs-com'
import { useNavigate } from 'react-router-dom'
const FormCards = () => {
    const navigate = useNavigate();
	const sendEmail =(e)=>{
		e.preventDefault();
		emailJs.sendForm('service_l018gtr','template_79gb27c',e.target,
		'6u4r4hVtftEcMQbx2').then(res=>{
			console.log(res);
			alert("Submitted Successfully")
			navigate('/');
		}).catch(err=>{
              console.log(err);
		})
	}
    return (
        <div class="FormCard container">
            <div class="wrapper">
                <div class="form">

                    <div class="right-col left" >
                        <h2>Partner with Us</h2>

                        <div class="result"></div>
                        <div class="form-group">
                            <input id="name" type="text" placeholder="Enter your name" />
                        </div>

                        <div class="form-group">
                            <input id="email" type="email" placeholder="Enter your email" />
                        </div>

                        <div class="form-group">
                            <input id="message" type="text" placeholder="Enter your phone number" />
                        </div>


                    </div>
                    <div class="right-col">


                        <div class="result"></div>
                        <div class="form-group">
                            <input id="name" type="text" placeholder="Organisation" />
                        </div>
{/* 
                        <div class="form-group">
                            <input id="email" type="email" placeholder="Designation" />
                        </div> */}

                        <div class="form-group">
                            <input id="message" type="text" placeholder="Any Further Detail" />
                        </div>
                        <button id="submit" type="submit">Submit</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormCards