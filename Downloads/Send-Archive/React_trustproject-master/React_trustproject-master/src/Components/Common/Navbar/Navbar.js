import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
	let defaultCss = 'navbar  navbarBugFix navbar-expand-lg navbar-light  ';
	const [ NavbarStatus, setNavbarStatus ] = useState(true);
	const [ shadowCss, setShadowCss ] = useState(defaultCss);

	// Similar to componentDidMount and componentDidUpdate:
	useEffect(() => {
		// Update the Navbar status using AddEventListener
		let listener = document.addEventListener('scroll', (e) => {
			var scrolled = document.scrollingElement.scrollTop;
			if (scrolled >= 120) {
				if (NavbarStatus !== false) {
					setShadowCss('navbar transitionAnim navbarBugFix navbar-expand-lg navbar-light  ');
					setNavbarStatus(false);
				}
			} else {
				if (NavbarStatus !== true) {
					setNavbarStatus(true);
					setShadowCss(defaultCss)
				}
			}
		});
	});
	//change font color based on the scroll
	let color = NavbarStatus == true ? 'white' : 'black';
	onclick = () => {
		setNavbarStatus(false);
	};

	return (
		<div className=" mx-auto ">
			<nav
				class={shadowCss}
				style={{
					backgroundColor: NavbarStatus === true ? '' : 'white',

					width: '100%'
				}}
			>
				<a class="navbar-brand " style={{ color: color }} href="#">
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
						onclick={() => onclick()}
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
						onclick={() => setNavbarStatus(true)}
					>
						<span class="navbar-toggler-icon" />
					</button>
				)}

				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav mx-auto">
						<li class="nav-item active">
							<a style={{ color: color, fontFamily: 'Source Sans Pro', fontWeight: "lighter", fontSize: 16 }} class="nav-link" href="#">
								About Us <span class="sr-only">(current)</span>
							</a>
						</li>
						<li class="nav-item">
							<a style={{ color: color, fontFamily: 'Source Sans Pro', fontWeight: "lighter", fontSize: 16 }} class="nav-link" href="#">
								Our Works
							</a>
						</li>
						<li class="nav-item">
							<a style={{ color: color, fontFamily: 'Source Sans Pro', fontWeight: "lighter", fontSize: 16 }} class="nav-link" href="#">
								Donate
							</a>
						</li>
						<li class="nav-item">
							<a
								style={{ color: color, fontFamily: 'Source Sans Pro', fontWeight: "lighter", fontSize: 16 }}
								class="nav-link disabled"
								href="#"
								tabindex="-1"
								aria-disabled="true"
							>
								Contact Us
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
