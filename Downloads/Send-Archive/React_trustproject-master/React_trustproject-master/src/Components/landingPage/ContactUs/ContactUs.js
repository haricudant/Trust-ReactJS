import React from 'react';
import './ContactUs.css';

export default function ContactUs() {
	return (
		<div className="">
            <div class="container  contactBG ">
				<h1 class="text-center" style={{fontFamily:'Lato', fontWeight:"bold", fontSize: 40}}>Contact Us</h1>
				<p class="text-center para" >
					<strong>
						We would be delighted to help you out with any query you have regarding our organisation.<strong />
					</strong>
				</p>
				<br />
				<br />
				<div class="row">
					<div class="col-md-12">
						<div class="form-group">
							<textarea
								id="form_message"
								name="message"
								class="form-control"
								placeholder="Message "
								rows="4"
								required="required"
								data-error="Please, leave us a message."
							/>
							<div class="help-block with-errors" />
						</div>
					</div>

					<div class="col-md-4">
						<div class="form-group">
							<input
								id="form_name"
								type="text"
								name="name"
								class="form-control"
								placeholder="Email Address"
								required="required"
								data-error="Firstname is required."
							/>
							<div class="help-block with-errors" />
						</div>
					</div>
					<div class="col-md-4">
						<div class="form-group">
							<input
								id="form_lastname"
								type="text"
								name="surname"
								class="form-control"
								placeholder=" Full Name"
								required="required"
								data-error="Lastname is required."
							/>
							<div class="help-block with-errors" />
						</div>
					</div>
					<div class="col-md-4">
						<div class="form-group">
							<input
								id="form_name"
								type="text"
								name="name"
								class="form-control"
								placeholder="Phone Number"
								required="required"
								data-error="Firstname is required."
							/>
							<div class="help-block with-errors" />
						</div>
					</div>
				</div>
				<div className="mb-2 text-center">
					<button type="button" class=" buttnn">
						Send{' '}
					</button>
				</div>
				<br /> <br />
			</div>
			<hr />
		</div>
	);
}
