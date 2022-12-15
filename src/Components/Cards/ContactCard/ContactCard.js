import React from 'react'
import './ContactCard.css'
import emailJs from 'emailjs-com'
import { useNavigate } from 'react-router-dom'
const ContactCard = () => {
	const navigate = useNavigate();
	const sendEmail = (e) => {
		e.preventDefault();
		emailJs.sendForm('service_pn7vgo9', 'template_79gb27c', e.target,
			'6u4r4hVtftEcMQbx2').then(res => {
				console.log(res);
				alert("Submitted Successfully")
				navigate('/');
			}).catch(err => {
				console.log(err);
			})
	}
	return (

		<div class="ContactCard container">
			<div class="wrapper">
				<div class="form">
					<div class="left-col">
						<img src="img/ellipse1.png" class="img1" alt="" />
						<h2>Address</h2>
						<div class="bull">
							<p>Maanof Federation</p>

							<p>
							H.NO 165-A,F/F Sarai Jullena N.F Colony, Delhi, South Delhi, 
							Delhi, India, 110025</p>

							<p>9599380707</p>
						</div>
						<div class="soc">
							<p>follow us </p>
							<ul>
								<a href="https://twitter.com/MAANOF22" target="_blank"><i className="fa-brands fa-twitter" id="twiter"></i></a>
								<a href="https://twitter.com" target="_blank"><i className="fa-brands fa-facebook-f" id="facebook"></i></a>
								<a href="https://www.instagram.com/maanof22/" target="_blank" ><i className="fa-brands fa-instagram" id="insta"></i></a>
								<a href="https://www.youtube.com/channel/UC25RXBGG9Qp22sLnO6jS5ug" target="_blank" ><i className="fa-brands fa-youtube" id="youtube"></i></a>
								<a href="https://www.linkedin.com/company/maanof-federation/?viewAsMember=true" target="_blank"><i className="fa-brands fa-linkedin-in" id="linkdin"></i></a>
							</ul>
						</div>
					</div>
					<div class="right-col">
						<h2>Request a Callback</h2>
						<form onSubmit={sendEmail}>
							<div class="result"></div>
							<div class="form-group">
								<input id="name" name='name' type="text" placeholder="Enter your name" />
							</div>

							<div class="form-group">
								<input id="email" type="email" name='email' placeholder="Enter your email" />
							</div>

							<div class="form-group">
								<input id="message" type="text" name='phone' placeholder="Enter your phone number" />
							</div>
							<button id="submit" type="submit">Submit</button>
						</form>
					</div>
				</div>
			</div>
		</div>


	)
}

export default ContactCard