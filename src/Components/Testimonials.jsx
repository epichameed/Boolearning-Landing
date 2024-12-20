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
  };
  // To make the above slider responsive, add the following property:
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       centerMode: true,
  //       vertical: false,
  //     },
  //   },
  // ],

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex lg:flex-row flex-col justify-center gap-12">
        <div className="lg:w-1/3 w-full lg:block flex flex-col items-center">
          <h3 className="font-rambla font-bold text-green_3 text-3xl">
            What our Students say?
          </h3>
          <p className="font-poppins leading-[28px] my-7 font-semibold text-lg max-w-[500px] lg:text-left text-center">
            Our learning material is crafted from teaching experience and
            continuous feedback from our students, ensuring we always deliver
            the best. Don't just take our word for it—see what our students have
            to say!
          </p>
          <div className="md:w-[220px] w-[150px] h-[50px] bg-green_2 text-white_1 flex justify-center items-center text-xl font-rambla rounded-lg cursor-pointer">
            Learn More!
          </div>
        </div>
        <div className="lg:w-1/2 w-full lg:max-w-full max-w-[500px] mx-auto overflow-visible">
          <Slider {...settings} className="testimonial-slider">
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
                (currentSlide % testimonials.length) -
                1;

              // Determine if this slide is the middle slide
              const isMiddleSlide =
                index === middleSlideIndex % testimonials.length;
              return (
                <div
                  key={index}
                  className={`md:max-w-[500px] max-w-[330px] h-[120px] !flex items-center md:gap-10 gap-5 relative border-4 border-l-[15px] border-[#F3F2F2] testimony ${
                    isMiddleSlide
                      ? "border-green_3 bg-green_2 text-white scale-105 -ml-10 mmr-10 shadow-lg"
                      : ""
                  }`}
                >
                  <img
                    src="/quote-icon.png"
                    alt="quotes"
                    className="absolute md:top-2 top-2 right-10 md:w-8 w-6"
                  />
                  <div>
                    <img src={testimony.img} alt="" className="w-36 ml-3" />
                  </div>
                  <div>
                    <h4 className="font-rambla md:text-xl text-base font-semibold md:mb-1">
                      {testimony.heading}
                    </h4>
                    <p className="md:text-base text-sm">
                      {testimony.description}
                    </p>
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
