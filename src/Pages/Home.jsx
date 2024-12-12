import React from "react";
import Hero from "../Components/Hero";
import LanguageCarousel from "../Components/LanguageCarousel";
const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      {/* High Quality Content Section */}
      <div className="bg-green_1 w-full py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2">
              <img
                src="./Purple.png"
                alt="Educational platform interface"
                className="w-full h-auto object-cover "
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-green_3 font-rambla mb-4">
                High quality content
              </h2>
              <p className="text-base sm:text-lg text-black font-poppins mb-6">
                Access high-quality materials packed with engaging
                presentations, flashcards, fun facts, stunning images, videos,
                audio, and interactive exercises! With hidden translations just
                a click away in every class, learning is simple, intuitive and
                easy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Flexible & Accessible Section */}
      <div className="bg-green_3 w-full py-12 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 flex flex-col">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white_1 font-rambla mb-4">
                Flexible & accessible
              </h2>
              <p className="text-base sm:text-lg text-white font-poppins mb-6">
                Learn anytime, anywhere! Access all your materials online, on
                mobile, tablet, or computer. Study at your own pace with
                self-guided modules, or book personalized sessions with one of
                our a passionate and friendly teacher who's been in your shoes
                before. Receive tailored tips and practice in live. No
                commitment needed.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src="/Section-3.png"
                alt="Students learning together"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* High Quality Content Section */}
      <div className="bg-green_1 w-full py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2">
              <img
                src="/Purple.png"
                alt="Educational platform interface"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-green_3 font-rambla mb-4">
                Adapted for different learning styles
              </h2>
              <p className="text-base sm:text-lg text-black font-poppins mb-6">
                Choose your path, your way! Need guidance? Explore our tailored
                learning plans. Want more specific real-world context &
                situations? Dive into our practical scenarios classes. Ready to
                explore it all? Access the wealth of all our available resources
                and pick the classes of your choice.
              </p>
            </div>
          </div>
        </div>
      </div>

      <LanguageCarousel />
    </div>
  );
};

export default Home;
