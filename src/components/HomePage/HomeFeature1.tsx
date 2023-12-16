import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/swiper.css";

import dish1Image from "../../assets/img/homeFeature1.jpg";
import dish2Image from "../../assets/img/homeFeature2.jpg";
import dish3Image from "../../assets/img/homeFeature3.jpg";
import dish5Image from "../../assets/img/homeFeature5.jpg";
import dish6Image from "../../assets/img/homeFeature6.jpg";
import dish7Image from "../../assets/img/homeFeature7.jpg";
import dish8Image from "../../assets/img/homeFeature8.jpg";

interface Props {
  className: string;
  id?: string;
}

interface FeatureSlide {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface SwiperProps {
  slides: FeatureSlide[];
  startSlide: number;
  onPrev: () => void;
  onNext: () => void;
}

const Swiper: React.FC<SwiperProps> = ({
  slides,
  startSlide,
  onPrev,
  onNext,
}) => {
  const translateValue = -startSlide * 28;
  const isSmallScreen = window.innerWidth < 768;

  return (
    <div className="swiper-container flex overflow-x-auto sm:block">
      <div
        className="swiper-slides-wrapper flex"
        style={{
          transform: `translateX(${translateValue}%)`,
          transition: "transform 0.5s ease",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="swiper-feature-box flex-shrink-0"
            style={isSmallScreen ? { width: "250px" } : {}}
          >
            <img src={slide.imageUrl} alt={slide.title} />
            <div className="slide-content">
              <div className="title-description">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
              <a
                href="https://eats.redbirdcloud.com/BethanyCafe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="add-to-order-button">Add to Orders</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function HomeFeature1({ id, className }: Props) {
  const [startSlide, setStartSlide] = useState(0);

  const nextSlide = () => {
    if (startSlide < features.length - 4) {
      setStartSlide(startSlide + 1);
    }
  };

  const prevSlide = () => {
    if (startSlide > 0) {
      setStartSlide(startSlide - 1);
    }
  };

  const features = [
    {
      id: 1,
      title: "Beef Noodle Soup",
      description:
        "A classic favorite with tender beef, hand-pulled noodles, and a rich, spiced broth.",
      imageUrl: dish1Image,
    },
    {
      id: 2,
      title: "Pork Chop Platter",
      description:
        "Juicy fried pork chops served with rice and mixed vegetables.",
      imageUrl: dish2Image,
    },
    {
      id: 3,
      title: "Kong Platter",
      description:
        "A delightful pork belly dish served with rice of your choice and mixed tea egg.",
      imageUrl: dish3Image,
    },
    {
      id: 4,
      title: "Fizzy Drinks",
      description:
        "Refreshing and bubbly beverages in a variety of exciting flavors.",
      imageUrl: dish8Image,
    },
    {
      id: 5,
      title: "Strawberry Matcha Latte",
      description:
        "A sweet and earthy blend of strawberries and matcha in a creamy latte.",
      imageUrl: dish5Image,
    },
    {
      id: 6,
      title: "Choco Dinosaur",
      description: "A rich, chocolatey drink for the ultimate chocolate lover.",
      imageUrl: dish6Image,
    },
    {
      id: 7,
      title: "Dirty Boba",
      description:
        "Bold brewed tea with milk, tapioca pearls, and brown sugar.",
      imageUrl: dish7Image,
    },
  ];

  return (
    <div className={className}>
      <section className="features-section2">
        <div className="container mx-auto py-24 px-5 sm:space-y-12">
          <div className="space-y-5 text-center sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <p className="mt-2 text-3xl md:text-6xl font-extrabold dark:text-black">
              Favorite Dishes
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2 ">
            <div className="swiper-outer-container ">
              <button
                className="swiper-outer-button swiper-button-prev hidden md:block"
                onClick={prevSlide}
                disabled={startSlide === 0}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <div className="swiper-container flex overflow-x-auto">
                <Swiper
                  slides={features}
                  startSlide={startSlide}
                  onPrev={prevSlide}
                  onNext={nextSlide}
                />
              </div>
              <button
                className="swiper-outer-button swiper-button-next hidden md:block"
                onClick={nextSlide}
                disabled={startSlide >= features.length - 4}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
