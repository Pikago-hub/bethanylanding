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
import dish6Image from "../../assets/img/homeFeature6.png";
import dish7Image from "../../assets/img/homeFeature7.png";
import dish8Image from "../../assets/img/homeFeature8.png";
import dish4Image from "../../assets/img/homeFeature4.jpg";

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
        {slides.map((slide) => (
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
                href="https://bethany-cafe.redbirdtab.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="add-to-order-button">Start Ordering</button>
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
      title: "Kong Rice 控肉饭",
      description:
        "Braised pork belly rice served with homemade sour cabbage, tea egg, and minced pork sauce over the rice.",
      imageUrl: dish1Image,
    },
    {
      id: 2,
      title: "Stinky Tofu 臭豆腐",
      description:
        "Distinctive fermented tofu dish served with homemade sour cabbage.",
      imageUrl: dish2Image,
    },
    {
      id: 3,
      title: "Minced Pork and Bean Sauce Noodle 炸酱面",
      description:
        "Savory bean sauce complements the tender minced pork and fresh noodles, served with cilantro, green onions, carrots, and cucumbers.",
      imageUrl: dish3Image,
    },
    {
      id: 4,
      title: "Pepper Steak Rice 青椒牛饭",
      description:
        "Tender strips of beef with peppers, onions and a flavorful brown sauce, served over steamed rice.",
      imageUrl: dish8Image,
    },
    {
      id: 5,
      title: "Dirty Ice Cream Boba (Large)",
      description: "Brown sugar milk tea with vanilla ice cream.",
      imageUrl: dish5Image,
    },
    {
      id: 6,
      title: "Vietnamese Iced Coffee (Large)",
      description: "An intensely strong and sweet coffee.",
      imageUrl: dish6Image,
    },
    {
      id: 7,
      title: "Chamoyada",
      description: "Mango guava slush swirled with chamoy sauce.",
      imageUrl: dish7Image,
    },
    {
      id: 8,
      title: "Mango Dragonfruit Lemonade (Large)",
      description:
        "A refreshing blend of tropical mango, vibrant dragonfruit, and zesty lemonade, perfect for a sunny day.",
      imageUrl: dish4Image,
    },
  ];

  return (
    <div className={className}>
      <section className="features-section2">
        <div className="container mx-auto py-24 px-5 sm:space-y-12">
          <div className="space-y-5 text-center sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <p className="mt-2 text-3xl md:text-6xl font-extrabold dark:text-black">
              Top Sellers
            </p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <div className="swiper-outer-container">
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
