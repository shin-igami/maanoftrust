import React from 'react'
import './ContactCard.css'
const ContactCard = () => {
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
			<form>
								<div class="result"></div>
				<div class="form-group">
					<input id="name" type="text" placeholder="enter your name"/>
				</div>
				
				<div class="form-group">
					<input id="email" type="email" placeholder="enter your email"/>
				</div>
				
				<div class="form-group">
					<input id="message" type="text" placeholder="enter your phone number"/>
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