import React, { Component } from "react";
 

import brigestone1 from "../../../assets/images/oto/bridgestone.png";
import waterfall from "../../../assets/images/oto/waterfall.png";
import michelin from "../../../assets/images/oto/michelin.png";
import lassa from "../../../assets/images/oto/lassa.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div className="partners">
         <Slider {...settings}>
     <div className="partners__slick">
         <img className='partners__logo' src={brigestone1} alt="" />
     </div>

     <div className="partners__slick">
     <img className='partners__logo' src={waterfall} alt="" />
     </div>

     <div className="partners__slick">
     <img className='partners__logo' src={michelin} alt="" />
     </div>

     <div className="partners__slick">
     <img className='partners__logo' src={lassa} alt="" />
     </div>

      <div className="partners__slick">
     <img className='partners__logo' src={michelin} alt="" />
     </div>

  
     <div className="partners__slick">
     <img className='partners__logo' src={waterfall} alt="" />
     </div>
    
 
    
        </Slider>
      </div>
    );
  }
}


 

 