import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/HomeHero.css";
import homeHero1 from "../../assets/img/homeHero1.jpg";
import homeHero2 from "../../assets/img/homeHero2.jpg";
import homeHero3 from "../../assets/img/homeHero3.png";
import homeHero4 from "../../assets/img/homeHero4.png";
import homeHero5 from "../../assets/img/homeHero5.png";

const HomeHero = () => {
  const images = [homeHero1, homeHero2, homeHero3, homeHero4, homeHero5];
  const [currentSlide, setCurrentSlide] = useState(0);

  const goLeft = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const goRight = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="hero-container">
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="left-arrow"
        onClick={goLeft}
      />
      <div
        className="hero-slide"
        style={{ backgroundImage: `url(${images[currentSlide]})` }}
      />
      <FontAwesomeIcon
        icon={faArrowRight}
        className="right-arrow"
        onClick={goRight}
      />

      {/* Mobile Swiper */}
      <div className="mobile-swiper">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="mobile-hero-slide">
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeHero;
