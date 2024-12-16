import React from "react";
import Hero from "../Components/Hero";
import LanguageCarousel from "../Components/LanguageCarousel";
import InteractiveActivities from "../Components/InteractiveActivities";
import LearningMethods from "../Components/LearningMethods";
import Stats from "../Components/Stats";
import Testimonials from "../Components/Testimonials";
import Logo from "../components/Logo";
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

      {/* Learning Paths Section */}
      <div className="bg-green_3 w-full py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex md:flex-row flex-col">
          <div className="md:w-1/2 w-full">
            <h3 className="text-white font-semibold md:text-5xl text-3xl">
              Learning paths
            </h3>
            <div className="flex gap-4 font-rambla font-semibold mt-8 md:text-base text-sm text-center">
              <div className="bg-white text-green_3 rounded-lg px-4 py-1">
                Learning Plans
              </div>
              <div className="bg-white text-green_3 rounded-lg px-4 py-1">
                Real-life scenario
              </div>
              <div className="bg-white text-green_3 rounded-lg px-4 py-1">
                Self-guided
              </div>
            </div>
            <p className="text-white mt-5">
              Ready to speak the language of love? French, the language of
              romance, culture, and culinary delights, is spoken by over 300
              million people worldwide. Whether you're dreaming of strolling
              through Parisian streets or impressing friends with your accent,
              our engaging lessons make learning French easy and fun.
            </p>
            <div className="flex gap-4 font-rambla mt-5">
              <div className="bg-green_2 text-white px-4 py-1 rounded-lg">
                Learning Plans
              </div>
              <div className="bg-green_2 text-white px-4 py-1 rounded-lg">
                Real-life scenario
              </div>
            </div>
            <p className="text-white text-sm mt-4">
              Ready to speak the language of love? French, the language of
              romance, culture, and culinary delights, is spoken by over 300
              million people worldwide.
            </p>
          </div>
          <div className="md:w-1/2 w-full flex justify-center">
            <img src="/learning-paths.png" alt="" className="lg:w-96 md:w-full w-64" />
          </div>
        </div>
      </div>

      {/* Interactive Activities Section */}
      <InteractiveActivities />

      {/* Learning Methods Section */}
      <LearningMethods />

      {/* Stats Section */}
      <Stats />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Ready to start Section */}
      <div className="bg-green_1 w-full py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-semibold font-rambla text-green_3 md:text-5xl text-3xl">
            Ready to start?
          </h3>
          <p className="font-rambla font-semibold text-green_3 md:my-12 my-5 md:text-xl text-lg">
            Subscribe now, book a session with a teacher, or contact us with any
            questions-let's make
            <br /> learning English and French fun and effortless together!
          </p>
          <div className="flex md:gap-14 gap-6 w-full justify-center">
            <div className="md:w-[220px] w-[150px] h-[50px] bg-green_2 text-white_1 flex justify-center items-center md:text-2xl text-xl font-rambla rounded-lg cursor-pointer">
              Subscribe Now!
            </div>
            <div className="md:w-[220px] w-[150px] h-[50px] bg-green_2 text-white_1 flex justify-center items-center md:text-2xl text-xl font-rambla rounded-lg cursor-pointer">
              Book a class
            </div>
          </div>
        </div>
      </div>

      {/* FAQ's section */}
      <div className="bg-green_3 w-full py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white font-rambla">
          <hr className="w-64 mx-auto mb-5" />
          <h3 className="md:text-5xl text-2xl md:mb-10 mb-5 font-semibold">
            Not sure yet? Still have some questions?
          </h3>
          <p className="md:text-xl text-lg mb-4">
            Don't hesitate to contact us and ask us any questions you might
            have. You have specific needs? You want to learn specific topics?
            Let us know, we might be able to help you.
          </p>
          <p className="md:text-xl  italic">
            You can also consult our Frequently asked questions (FAQs) page for
            more information.
          </p>
        </div>
      </div>

      <div className="bg-white_1 w-full py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
          <Logo />
          <div className="md:w-[200px] w-[150px] h-[50px] bg-green_2 text-white_1 flex justify-center items-center text-xl font-rambla rounded-lg cursor-pointer">
            Get Started
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
