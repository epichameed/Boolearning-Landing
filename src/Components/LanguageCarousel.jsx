"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const languageData = [
  {
    id: 1,
    title: "French",
    description:
      "Ready to speak the language of love? French, the language of romance, culture, and culinary delights, is spoken by over 300 million people worldwide. Whether you're dreaming of strolling through Parisian streets, planning to work abroad, build relationships or impressing friends with your accent, our engaging lessons make learning French fun, practical, and accessible.",
    image: "/french-learning.png",
  },
  {
    id: 2,
    title: "English",
    description:
      "Learn the global language of opportunity! English, the universal language of business, travel, and more. It is spoken in 58 countries, making it one of the most widely spoken languages globally. Whether you're planning to work abroad, explore new cultures, or connect with new people, our dynamic lessons make learning English easy and accessible.",
    image: "/english-learning.png",
  },
  {
    id: 3,
    title: "Spanish",
    description:
      "Dive into the richness and beauty of Spanish! Spoken by over 580 million people worldwide, Spanish is the official language of many countries across Europe, Latin America, and the Caribbean. Whether you're planning to travel, build relationships, or explore vibrant cultural traditions, our engaging lessons make learning Spanish fun, practical, and accessible.",
    image: "/spanish-learning.png",
  },
];

const LanguageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "0px",
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="bg-white_1 w-full py-12 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-green_3 font-rambla mb-12 text-center">
          Languages to learn
        </h2>
        <div className="max-w-7xl mx-auto">
          <Slider {...settings}>
            {languageData.map((language) => (
            <div key={language.id} className="px-4">
            <div
              className="group rounded-lg overflow-hidden shadow-lg transition-all duration-300 bg-[#F0F0F0] hover:bg-green_2"
            >
              <img
                src={language.image}
                alt={`${language.title} learning`}
                className="w-full h-64 object-cover "
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold font-rambla mb-4 text-green_3 group-hover:text-white">
                  {language.title}
                </h3>
                <p className="text-sm mb-6 font-poppins text-black_1 group-hover:text-white">
                  {language.description}
                </p>
                <div className="flex gap-4">
                  <button className="h-10 rounded-md flex items-start justify-start font-bold underline text-green_2 group-hover:text-white">
                    Access
                  </button>
                  <button className="h-10 rounded-md flex items-start justify-start font-bold underline text-green_2 group-hover:text-white">
                    Book a class
                  </button>
                </div>
              </div>
            </div>
          </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default LanguageCarousel;
