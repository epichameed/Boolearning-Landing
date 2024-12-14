import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
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
    vertical: true,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "0px",
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
    adaptiveHeight: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          vertical: false,
        },
      },
    ],
  };

  const testimonials = [
    {
      img: "/Avatar-1.png",
      heading: "Learn More",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam ullam vitae iure fugit minima alias!",
    },
    {
      img: "/Avatar-1.png",
      heading: "Learn that",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam ullam vitae iure fugit minima alias!",
    },
    {
      img: "/Avatar-1.png",
      heading: "Learn Less",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam ullam vitae iure fugit minima alias!",
    },
    {
      img: "/Avatar-1.png",
      heading: "Learn There",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam ullam vitae iure fugit minima alias!",
    },
    {
      img: "/Avatar-1.png",
      heading: "Learn Here",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam ullam vitae iure fugit minima alias!",
    },
  ];
  return (
    <div className="bg-white_1 w-full py-12 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex md:flex-row flex-col justify-center gap-12">
        <div className="md:w-1/3 w-full">
          <h3 className="font-rambla font-bold text-green_3 md:text-5xl text-3xl">
            What our Students say?
          </h3>
          <p className="font-poppins leading-[34px] my-7 font-semibold md:text-xl text-lg max-w-[500px]">
            Our learning material is crafted from teaching experience and
            continuous feedback from our students, ensuring we always deliver
            the best. Don't just take our word for it—see what our students have
            to say!
          </p>
          <div className="md:w-[370px] w-[220px] md:h-[70px] h-[50px] bg-green_2 text-white_1 flex justify-center items-center text-3xl font-rambla rounded-lg cursor-pointer">
            Learn More!
          </div>
        </div>
        <div className="md:w-1/2 w-full overflow-visible">
          <Slider {...settings}>
            {testimonials.map((testimony, index) => {
              // Calculate the middle slide index based on total slides and slidesToShow
              //   const middleSlideIndex = Math.floor(settings.slidesToShow / 2);

              //   // Determine if this is the middle slide
              //   const isMiddleSlide =
              //     (currentSlide + middleSlideIndex) % testimonials.length ===
              //     index;
              //     {console.log("REsult", (currentSlide + middleSlideIndex) % testimonials.length)}
              // Calculate the number of visible slides
              const visibleSlides =
                typeof settings.slidesToShow === "number"
                  ? settings.slidesToShow
                  : 1; // Fallback for responsive or undefined slidesToShow

              // Find the middle slide index
              const middleSlideIndex =
                Math.floor(visibleSlides / 2) +
                (currentSlide % testimonials.length) - 1;

              // Determine if this slide is the middle slide
              const isMiddleSlide =
                index === middleSlideIndex % testimonials.length;

              console.log("Current Slide:", currentSlide);
              console.log("Middle Slide Index:", middleSlideIndex);
              console.log("Is Middle Slide:", isMiddleSlide);
              return (
                <div
                  key={index}
                  className={`max-w-[600px] h-[150px] !flex items-center md:gap-10 gap-5 relative border-4 border-l-[15px] border-[#F3F2F2] testimony ${
                    isMiddleSlide ? "border-green_3 bg-green_2 text-white md:scale-105 md:-ml-10 md:mr-10 shadow-lg" : ""
                  }`}
                >
                  <img
                    src="/quote-icon.png"
                    alt="quotes"
                    className="absolute md:top-3 top-7 right-10 md:w-12 w-6"
                  />
                  <div>
                    <img src={testimony.img} alt="" className="w-36 ml-3" />
                  </div>
                  <div>
                    <h4 className="font-rambla text-xl font-semibold md:mb-3">
                      {testimony.heading}
                    </h4>
                    <p className="md:text-base text-sm">{testimony.description}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
