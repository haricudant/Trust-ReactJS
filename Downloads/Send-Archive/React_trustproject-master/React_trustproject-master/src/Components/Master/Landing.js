import React from 'react';
import Navbar from '../Common/Navbar/Navbar';
import JUmbotron from '../landingPage/Jumbotron/JUmbotron';
import FollowUs from '../landingPage/FollowUs/FollowUs';
import AboutUs from '../landingPage/AboutUs/AboutUs';
import DonateUs from '../landingPage/DonateUs/DonateUs';
import ContactUs from '../landingPage/ContactUs/ContactUs';
import SocialNetwork from '../landingPage/SocialNetwork/SocialNetwork';
import OurEffects from '../landingPage/OurEffects/OurEffects';
import scrollToComponent from 'react-scroll-to-component';

export default class landingPage extends React.Component {
	defaultCss = 'navbar  navbarBugFix navbar-expand-lg navbar-light  ';
	constructor() {
		super();
		this.state = {
			NavbarStatus: true,
			shadowCss: this.defaultCss,
			color: 'white'
		};
	}
	componentDidMount() {
		// Update the Navbar status using AddEventListener
		let listener = document.addEventListener('scroll', (e) => {
			var scrolled = document.scrollingElement.scrollTop;
			if (scrolled >= 120) {
				if (this.state.NavbarStatus !== false) {
					this.setState({
						shadowCss: 'navbar transitionAnim navbarBugFix navbar-expand-lg navbar-light  ',
						NavbarStatus: false,
						color: 'black'
					});
				}
			} else {
				if (this.state.NavbarStatus !== true) {
					this.setState({
						shadowCss: this.defaultCss,
						NavbarStatus: true,
						color: 'white'
					});
				}
			}
		});
	}
	onclick = () => {
		this.setState({
			NavbarStatus: false,
			color: 'black'
		});
	};

	render() {
		console.log(this.state.NavbarStatus);
		const { shadowCss, NavbarStatus, color } = this.state;
		return (
			<div>
				<div className=" mx-auto ">
					<nav
						class={shadowCss}
						style={{
							backgroundColor: NavbarStatus === true ? '' : 'white',
							width: '100%'
						}}
					>
						<a class="navbar-brand " style={{ color: color, cursor: 'pointer' }} href="#">
							Trust logo
						</a>

						{NavbarStatus == false ? (
							<button
								class="navbar-toggler"
								type="button"
								data-toggle="collapse"
								data-target="#navbarNav"
								aria-controls="navbarNav"
								aria-expanded="false"
								aria-label="Toggle navigation"
								onClick={() => this.onclick()}
							>
								<span class="navbar-toggler-icon" />
							</button>
						) : (
							<button
								class="navbar-toggler"
								type="button"
								data-toggle="collapse"
								data-target="#navbarNav"
								aria-controls="navbarNav"
								aria-expanded="false"
								aria-label="Toggle navigation"
								onClick={() => {
									this.setState({
										NavbarStatus: false,
										color: 'black'
									});
								}}
							>
								<span class="navbar-toggler-icon" />
							</button>
						)}

						<div class="collapse navbar-collapse" id="navbarNav">
							<ul class="navbar-nav mx-auto">
								<li class="nav-item active">
									<a
										onClick={() =>
											scrollToComponent(this.AboutUs, {
												offset: -200,
												align: 'top',
												duration: 1500
											})}
										style={{ color: color, cursor: 'pointer' }}
										class="nav-link"
									>
										About Us <span class="sr-only">(current)</span>
									</a>
								</li>
								<li class="nav-item">
									<a
										onClick={() =>
											scrollToComponent(this.OurEffects, {
												offset: -200,
												align: 'top',
												duration: 1500
											})}
										style={{ color: color, cursor: 'pointer' }}
										class="nav-link"
									>
										Our Works
									</a>
								</li>
								<li class="nav-item">
									<a
										onClick={() =>
											scrollToComponent(this.DonateUs, {
												offset: -200,
												align: 'top',
												duration: 1500
											})}
										style={{ color: color, cursor: 'pointer' }}
										class="nav-link"
									>
										Donate
									</a>
								</li>
								<li class="nav-item">
									<a
										onClick={() =>
											scrollToComponent(this.ContactUs, {
												offset: -200,
												align: 'top',
												duration: 1500
											})}
										style={{ color: color, cursor: 'pointer' }}
										class="nav-link "
									>
										Contact Us
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
				<JUmbotron />
				<section
					ref={(section) => {
						this.AboutUs = section;
					}}
				>
					<AboutUs />
				</section>
				<section
					ref={(section) => {
						this.OurEffects = section;
					}}
				>
					<OurEffects />
				</section>
				<section
					ref={(section) => {
						this.DonateUs = section;
					}}
				>
					<DonateUs />
				</section>
				<section
					ref={(section) => {
						this.ContactUs = section;
					}}
				>
					<ContactUs />
				</section>
				<section
					ref={(section) => {
						this.FollowUs = section;
					}}
				>
					<FollowUs />
				</section>

				<SocialNetwork />
			</div>
		);
	}
}
