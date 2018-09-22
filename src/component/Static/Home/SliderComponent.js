import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Constant from '../../../config/Constant';
class SliderComponent extends Component {
  render() {
    return (      
		<section className="homeSlider">
			<Carousel showArrows={false} infiniteLoop autoPlay showStatus={false} showThumbs={false}>
				<div className="sliderItem">
					<img src={Constant.frontUrl+"/assets/slider/one.jpg"} alt="one"/>
				</div>
				<div className="sliderItem">
					<img src={Constant.frontUrl+"/assets/slider/two.jpg"} alt="two"/>
				</div>
				<div className="sliderItem">
					<img src={Constant.frontUrl+"/assets/slider/three.jpg"} alt="third"/>
				</div>
			</Carousel>
		</section>  
    );
  }
}

export default SliderComponent;
