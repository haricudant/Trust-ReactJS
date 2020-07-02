import React from 'react';
import Slider from 'react-slick';
import './OurEffects.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ourWorks = () => {
	const settings = {
		dots: true,
		infinite: false,
		speed: 3000,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
					speed: 2000,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
					speed: 2000,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					dots: true,
					slidesToShow: 1,
					infinite: true,
					dots: true,
					speed: 2000,
					slidesToScroll: 1,
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	};
	return (
		<div>
			<div class="container">
				<div class=" mx-auto mb-5">
					<h3 class="display-5 text-center font-weight-light our_efforts">
						<strong style={{fontFamily:'Lato', fontWeight:"bold", fontSize: 40}}>Our Efforts </strong>to make this world a better place
					</h3>
					<p class="text-center font-weight-light sub_title">
						He who has never denied himself for the sake of giving, has but glanced at the joys of <strong>charity.</strong>
					</p>
				</div>

				<div class="container p-3  mb-5">
					<Slider {...settings}>
						<img className="p-4" src="https://picsum.photos/300/200" />

						<img className=" p-4" src="https://picsum.photos/300/200" />

						<img className=" p-4" src="https://picsum.photos/300/200" />

						<img className="p-4 " src="https://picsum.photos/300/200" />

						<img className="p-4 " src="https://picsum.photos/300/200" />

						<img className=" p-4" src="https://picsum.photos/300/200" />
					</Slider>
				</div>

				<div className="mb-2 text-center center_div">
					<button type="button" class="btn btn-primary active btn-lg btn_text">
						Click to see more{' '}
					</button>
				</div>
			</div>
			<hr />
		</div>
	);
};

export default ourWorks;
