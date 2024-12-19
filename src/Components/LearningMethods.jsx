import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LearningMethods = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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

  const LearningMethods = [
    {
      img: "/learning-methods.png",
      heading: "Self Learning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur purus scelerisque purus congue bibendum. Curabitur ut congue elit. Sed nec euismod nunc. Nunc lorem risus, hendrerit in maximus ut, condimentum eu mauris. Pellentesque id pulvinar ipsum. Cras porta sollicitudin est at imperdiet. Morbi ac posuere mauris. Mauris dapibus enim libero.  ",
      stats: ["Support", "35 hours", "4 weeks"],
    },
    {
      img: "/learning-methods.png",
      heading: "Teachers-led session",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur purus scelerisque purus congue bibendum. Curabitur ut congue elit. Sed nec euismod nunc. Nunc lorem risus, hendrerit in maximus ut, condimentum eu mauris. Pellentesque id pulvinar ipsum. Cras porta sollicitudin est at imperdiet. Morbi ac posuere mauris. Mauris dapibus enim libero.",
      stats: ["Support", "35 hours", "4 weeks"],
    },
    {
      img: "/learning-methods.png",
      heading: "Combo",
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur purus scelerisque purus congue bibendum. Curabitur ut congue elit. Sed nec euismod nunc. Nunc lorem risus, hendrerit in maximus ut, condimentum eu mauris. Pellentesque id pulvinar ipsum. Cras porta sollicitudin est at imperdiet. Morbi ac posuere mauris. Mauris dapibus enim libero.",
      stats: ["Support", "35 hours", "4 weeks"],
    },
  ];
  return (
    <div className="w-full bg-green_3 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white_1 font-rambla mb-4 text-center">
          Learning Methods
        </h2>
        <p className="font-poppins text-white_1 text-center max-w-[800px] mx-auto mt-10">
          Whatever your learning style, we have the method for you. No one
          approach is better than another: each is uniquely tailored to suit
          different preferences.
        </p>
        <div className="w-full flex flex-col lg:flex-row text-white mt-8 gap-8">
          <div className="flex flex-col lg:w-1/3 w-full text-center font-rambla xl:text-3xl text-xl gap-5">
            {["Self Learning", "Teachers-led session", "Combo"].map(
              (method, index) => (
                <div
                  key={index}
                  className={`border-4  rounded-lg p-4 lg:p-6 ${
                    currentSlide !== index ? "border-white_1" : "border-green_2"
                  } flex-1 lg:flex-none`}
                >
                  {method}
                </div>
              )
            )}
          </div>
          <div className="lg:w-2/3 w-full p-6 bg-white_1 rounded-lg">
            <Slider {...settings} className="slider-custom">
              {LearningMethods.map((method, index) => {
                return (
                  <div
                    key={index}
                    className="w-full !flex md:flex-row flex-col bg-white_1 text-black_1 gap-4"
                  >
                    <div className="xl:w-[400px] w-full xl:h-[400px] h-[200px] flex-shrink-0">
                      <img
                        src={method.img}
                        alt=""
                        className="!w-[400px] xl:h-[400px] h-[200px] border-4 border-green_2 rounded-lg object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col xl:gap-5 gap-2">
                      <h3 className="font-rambla font-bold xl:text-2xl text-lg">
                        {method.heading}
                      </h3>
                      <p className="font-poppins">{method.description}</p>
                      <p className="font-pragatiNarrow font-bold text-xl">
                        {method.stats.map((stat, index) => (
                          <span key={index}>
                            {stat}
                            {index < method.stats.length - 1 && "  |  "}
                          </span>
                        ))}
                      </p>
                      <div className=" h-10  text-green_2 rounded-md flex items-start justify-start font-bold underline">
                        Book a Class
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        {/* Claude's Version */}
        {/* <div className="w-full flex flex-col md:flex-row text-white mt-8 md:gap-8 gap-4">
          <div className="md:w-1/3 w-full flex md:flex-col flex-row justify-between text-center font-rambla md:text-3xl text-base gap-2 md:gap-5">
            <div
              className={`border-4 border-white_1 rounded-lg p-4 md:p-6 flex-1 ${
                currentSlide === 0 ? "border-green_2" : ""
              }`}
            >
              Self Learning
            </div>
            <div
              className={`border-4 border-white_1 rounded-lg p-4 md:p-6 flex-1 ${
                currentSlide === 1 ? "border-[#04B27C]" : ""
              }`}
            >
              Teachers-led session
            </div>
            <div
              className={`border-4 border-white_1 rounded-lg p-4 md:p-6 flex-1 ${
                currentSlide === 2 ? "border-[#04B27C]" : ""
              }`}
            >
              Combo
            </div>
          </div>

          <div className="md:w-2/3 w-full p-4 md:p-6 bg-white_1 rounded-lg">
            <Slider {...settings}>
              {LearningMethods.map((method, index) => (
                <div
                  key={index}
                  className="w-full !flex flex-col md:flex-row bg-white_1 text-black_1 gap-4 p-4"
                >
                  <div className="md:w-[400px] w-full mb-4 md:mb-0 flex-shrink-0">
                    <img
                      src={method.img}
                      alt={method.heading}
                      className="w-full md:h-[400px] h-[250px] border-4 border-green_2 rounded-lg object-cover object-center"
                    />
                  </div>

                  <div className="flex flex-col justify-center md:gap-5 gap-3">
                    <h3 className="font-rambla font-bold md:text-2xl text-xl">
                      {method.heading}
                    </h3>
                    <p className="font-poppins text-sm md:text-base">
                      {method.description}
                    </p>
                    <p className="font-pragatiNarrow font-bold md:text-xl text-base">
                      {method.stats.map((stat, index) => (
                        <span key={index}>
                          {stat}
                          {index < method.stats.length - 1 && "  |  "}
                        </span>
                      ))}
                    </p>
                    <div className="w-32 h-10 bg-green_2 text-white rounded-md flex items-center justify-center self-start cursor-pointer hover:bg-green-600 transition-colors">
                      Book a Class
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div> */}
        {/* V0 Dev's version */}
        {/* <div className="w-full flex flex-col lg:flex-row text-white mt-8 gap-8 px-4 lg:px-0">
          <div className="flex flex-row lg:flex-col w-full lg:w-1/3 text-center font-rambla text-lg sm:text-xl lg:text-2xl xl:text-3xl gap-2 lg:gap-5">
            {["Self Learning", "Teachers-led session", "Combo"].map(
              (method, index) => (
                <div
                  key={index}
                  className={`border-4 border-white_1 rounded-lg p-2 lg:p-6 ${
                    currentSlide === index ? "border-green_2" : ""
                  } flex-1 lg:flex-none`}
                >
                  {method}
                </div>
              )
            )}
          </div>
          <div className="w-full lg:w-2/3 p-4 lg:p-6 bg-white_1 rounded-lg">
            <Slider {...settings}>
              {LearningMethods.map((method, index) => (
                <div
                  key={index}
                  className="w-full flex flex-col sm:flex-row bg-white_1 text-black_1 gap-4"
                >
                  <div className="w-full sm:w-[200px] lg:w-[300px] xl:w-[400px] flex-shrink-0">
                    <img
                      src={method.img}
                      alt=""
                      className="w-full h-[200px] sm:h-[200px] lg:h-[300px] xl:h-[400px] border-4 border-green_2 rounded-lg object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col gap-2 lg:gap-5">
                    <h3 className="font-rambla font-bold text-lg sm:text-xl lg:text-2xl">
                      {method.heading}
                    </h3>
                    <p className="font-poppins text-sm lg:text-base">
                      {method.description}
                    </p>
                    <p className="font-pragatiNarrow font-bold text-base lg:text-xl">
                      {method.stats.map((stat, index) => (
                        <span key={index}>
                          {stat}
                          {index < method.stats.length - 1 && "  |  "}
                        </span>
                      ))}
                    </p>
                    <div className="w-32 h-10 bg-green_2 text-white rounded-md flex items-center justify-center text-sm lg:text-base">
                      Book a Class
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LearningMethods;
