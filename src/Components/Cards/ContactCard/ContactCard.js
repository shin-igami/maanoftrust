import React from 'react'
import './ContactCard.css'
import emailJs from 'emailjs-com'
import { useNavigate } from 'react-router-dom'
const ContactCard = () => {
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

<div class="ContactCard container">
	<div class="wrapper">
		<div class="form">
			<div class="left-col">
				<img src="img/ellipse1.png" class="img1" alt=""/>
				<h2>Address</h2>
				<div class="bull">
					<p>Maanof</p>
			
					<p>Shaheen Bagh,New Delhi</p>

					<p>1234567890</p>
				</div>
				<div class="soc">
					<p>follow us </p>
					<ul>
						<li><a href="#"><i className='fa fa-facebook'></i></a></li>
						<li><a href="#"><i className='fa fa-youtube'></i></a></li>
						<li><a href="#"><i className='fa fa-instagram'></i></a></li>
					</ul>
				</div>
			</div>
			<div class="right-col">
				<h2>Subscribe to Our Newsletter</h2>
			<form onSubmit={sendEmail}>
								<div class="result"></div>
				<div class="form-group">
					<input id="name" name='name' type="text" placeholder="Enter your name"/>
				</div>
				
				<div class="form-group">
					<input id="email" type="email" name='email' placeholder="Enter your email"/>
				</div>
				
				<div class="form-group">
					<input id="message" type="text" name='phone' placeholder="Enter your phone number"/>
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