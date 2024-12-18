import React, { useEffect, useRef, useState } from "react";
import Logo from "../components/Logo";

const About = () => {
  const divRef = useRef(null);
  const [height, setHeight] = useState(0); // State to store the height
  const aboutContent = [
    "Each beginner plan builds on the one before, so as you progress, you’ll expand your vocabulary and learn more types of conversations. Take your time—it’s a marathon, not a sprint!",
    "Each beginner plan builds on the one before, so as you progress, you’ll expand your vocabulary and learn more types of conversations. Take your time—it’s a marathon, not a sprint!",
    "Each beginner plan builds on the one before, so as you progress, you’ll expand your vocabulary and learn more types of conversations. Take your time—it’s a marathon, not a sprint!",
    "Each beginner plan builds on the one before, so as you progress, you’ll expand your vocabulary and learn more types of conversations. Take your time—it’s a marathon, not a sprint!",
    "Each beginner plan builds on the one before, so as you progress, you’ll expand your vocabulary and learn more types of conversations. Take your time—it’s a marathon, not a sprint!",
    "Each beginner plan builds on the one before, so as you progress, you’ll expand your vocabulary and learn more types of conversations. Take your time—it’s a marathon, not a sprint!",
  ];

  const updateHeight = () => {
    if (divRef.current) {
      setHeight(divRef.current.offsetHeight);
    }
  };

  useEffect(() => {
    updateHeight(); // Measure height on initial render

    console.log(height)
    // Update height on window resize
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [height]);

  return (
    <>
      <div className="bg-green_3 w-full py-12 lg:py-28 relative">
        <img
          src="/about-hero-bg.png"
          alt="background-overlay"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <h1 className="font-raleway font-semibold md:text-6xl text-3xl">
            About Beginner Learning
          </h1>
          <p className="font-poppins md:text-lg text-base mt-12 max-w-[60%] mx-auto leading-[34px]">
            The objective of this plan is to introduce learners to essential
            English language elements, including basic phonetics, sentence
            structures, vocabulary, and everyday conversation skills. By the end
            of the plan, learners will be able to:
          </p>
        </div>
      </div>
      <div className="bg-white w-full py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center text-green_3">
          <h1 className="font-raleway font-semibold md:text-6xl text-3xl">
            Our Story
          </h1>
          <div className="w-full flex">
            <div className="w-full md:flex hidden items-center">
              <img src="/our-story-l.png" alt="vectors" className="w-[400px]" />
            </div>
            <div className="md:px-0 px-4">
              <p className="font-poppins md:text-lg text-base md:mt-12 mt-6 md:max-w-[60%] md:leading-[34px] leading-[26px] mx-auto text-left">
                The objective of this plan is to introduce learners to essential
                English language elements, including basic phonetics, sentence
                structures, vocabulary, and everyday conversation skills. By the
                end of the plan, learners will be able to: The objective of this
                plan is to introduce learners to essential English language
                elements, including basic phonetics, sentence structures,
                vocabulary, and everyday conversation skills. By the end of the
                plan, learners will be able to: The objective of this plan is to
                introduce learners to essential English language elements,
                including basic phonetics, sentence structures, vocabulary, and
                everyday conversation skills. By the end of the plan, learners
                will be able to:
              </p>
            </div>
            <div className="w-full md:flex hidden items-center">
              <img src="/our-story-r.png" alt="vectors" className="w-[400px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green_1 w-full py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-raleway font-semibold md:text-6xl text-3xl">
            Our Story
          </h1>
          <div className="w-full flex text-black pt-5">
            <div className="md:min-w-64 min-w-40 border-r border-r-black">
              {aboutContent.map((elem, index) => (
                <div key={index} className="flex">
                  <div className={`md:h-20 md:min-w-40 min-w-32 relative flex items-center`}style={window.innerWidth < 768 ? { height: `${height}px` } : {}}>
                    <img src="/label-bg.png" alt="" className="absolute " />
                    <span className="text-left md:ml-4 ml-1 font-bold">
                      Preview the <br /> course
                    </span>
                  </div>
                  <div className="w-full flex items-center relative">
                    <hr className="absolute top-1/2 -translate-y-1/2 left-0 right-0 border mt-1 border-black -ml-1" />
                    <div className="md:w-4 w-3 md:h-4 h-3 rounded-full bg-green_3 absolute mt-2 md:left-5 left-2"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full md:pl-10 pl-4">
              {aboutContent.map((text, index) => (
                <div
                  key={index}
                  className="md:h-20 h-auto py-4 flex items-center text-left"
                  ref={divRef}
                >
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Who are we? Section */}
      <div className="bg-green_3 w-full py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-8 text-white">
          <h1 className="font-raleway font-semibold md:text-6xl text-3xl text-center">
            Who are we?
          </h1>
          <div className="w-full flex md:flex-row flex-col-reverse md:pt-10">
            <div className="md:w-1/2 w-full md:pt-20">
              <p className="md:text-xl text-base md:leading-9 leading-8">
                Learn anytime, anywhere! Access all your materials online, on
                mobile, tablet, or computer. Study at your own pace with
                self-guided modules, or book personalized sessions with one of
                our a passionate and friendly teacher who’s been in your shoes
                before. Receive tailored tips and practice in live. No
                commitment needed.
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <img
                src="/who-are-we.png"
                alt=""
                className="mx-auto md:w-[500px] w-[300px] md:my-0 my-5"
              />
            </div>
          </div>
        </div>
      </div>
      {/* What we believe in... Section */}
      <div className="bg-green_1 w-full py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <h1 className="font-raleway font-semibold md:text-6xl text-3xl text-center text-green_3 ">
            What we believe in...
          </h1>
          <div className="w-full flex md:flex-row flex-col md:pt-10">
            <div className="md:w-1/2 w-full">
              <img
                src="/what-we-believe.png"
                alt=""
                className="mx-auto md:w-[500px] w-[300px]"
              />
            </div>
            <div className="md:w-1/2 w-full md:pt-20">
              <p className="md:text-xl text-base md:leading-9 leading-8 text-black">
                Learn anytime, anywhere! Access all your materials online, on
                mobile, tablet, or computer. Study at your own pace with
                self-guided modules, or book personalized sessions with one of
                our a passionate and friendly teacher who’s been in your shoes
                before. Receive tailored tips and practice in live. No
                commitment needed.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-raleway font-semibold md:text-6xl text-3xl text-center text-green_3 ">
            Our belief in action
          </h1>
          <img
            src="/belief-in-action.png"
            alt="section-image"
            className="mx-auto md:w-[500px] w-[300px] mt-10"
          />
          <div className="flex md:flex-row flex-col md:gap-0 gap-5 justify-between font-poppins md:mt-0 mt-5">
            <div className="flex flex-col gap-5 px-5 text-center">
              <h4 className="uppercase text-green_3 font-semibold text-2xl">
                Assessment
              </h4>
              <p>
                Weekly quizzes on vocabulary and sentence structure. Short
                dialogues or role-play activities to encourage conversational
                practice.
              </p>
            </div>
            <div className="flex flex-col gap-5 px-5 text-center">
              <h4 className="uppercase text-green_3 font-semibold text-2xl">
                LANGUAGE SUPPORT
              </h4>
              <p>
                The plan can be complemented with translations and support in
                the student’s native language to help beginners feel more
                comfortable while learning.
              </p>
            </div>
            <div className="flex flex-col gap-5 px-5 text-center">
              <h4 className="uppercase text-green_3 font-semibold text-2xl">
                LANGUAGE SUPP
              </h4>
              <p>
                The plan can be complemented with translations and support in
                the student’s native language to help beginners feel more
                comfortable while learning.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green_3 w-full py-12 lg:py-28 relative">
        <img
          src="/about-hero-bg.png"
          alt="background-overlay"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <h1 className="font-raleway font-semibold md:text-6xl text-3xl">
            Our Uniqueness
          </h1>
          <p className="font-poppins md:text-lg text-base mt-12 md:max-w-[60%] max-w-[80%] mx-auto leading-[34px]">
            The objective of this plan is to introduce learners to essential
            English language elements, including basic phonetics, sentence
            structures, vocabulary, and everyday conversation skills. By the end
            of the plan, learners will be able to: The objective of this plan is
            to introduce learners to essential English language elements,
            including basic phonetics, sentence structures, vocabulary, and
            everyday conversation skills. By the end of the plan, learners will
            be able to:The objective of this plan is to introduce learners to
            essential English language elements, including basic phonetics,
            sentence structures, vocabulary, and everyday conversation skills.
            By the end of the plan, learners will be able to:
          </p>
        </div>
      </div>
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
      {/* <div className="flex flex-col items-center container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-green_3 mb-6 font-rambla">
          About Boo Learning
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-8 w-full max-w-4xl">
          <div className="flex flex-col w-full md:w-1/2">
            <p className="text-lg text-green_3 mb-4 font-poppins">
              Boo Learning is revolutionizing the way people learn languages.
              Our innovative platform combines cutting-edge technology with
              proven learning methods to make language acquisition fun,
              engaging, and effective.
            </p>
            <p className="text-lg text-green_3 mb-4 font-poppins">
              Founded in 2020 by a team of language enthusiasts and tech
              experts, Boo Learning has quickly grown to become a leading name
              in online language education.
            </p>
            <p className="text-lg text-green_3 mb-4 font-poppins">
              Our mission is to break down language barriers and connect people
              across cultures through accessible and enjoyable learning
              experiences.
            </p>
          </div>
          <div className="relative w-full md:w-1/2">
            <div className="absolute top-0 right-0 w-48 h-48 bg-green_1 rounded-full -z-10 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-green_1 rounded-full -z-10 blur-xl"></div>
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Boo Learning Team"
              className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="mt-12 w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-green_3 mb-4 font-rambla">
            Our Values
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-green_1 p-6 rounded-lg flex flex-col w-full md:w-[calc(33% - 1rem)]">
              <h3 className="text-xl font-semibold text-green_3 mb-2 font-pragatiNarrow">
                Innovation
              </h3>
              <p className="text-green_3 font-poppins">
                We constantly push the boundaries of language learning
                technology to provide the best possible experience for our
                users.
              </p>
            </div>
            <div className="bg-green_1 p-6 rounded-lg flex flex-col w-full md:w-[calc(33% - 1rem)]">
              <h3 className="text-xl font-semibold text-green_3 mb-2 font-pragatiNarrow">
                Accessibility
              </h3>
              <p className="text-green_3 font-poppins">
                We believe that language learning should be accessible to
                everyone, regardless of their background or circumstances.
              </p>
            </div>
            <div className="bg-green_1 p-6 rounded-lg flex flex-col w-full md:w-[calc(33% - 1rem)]">
              <h3 className="text-xl font-semibold text-green_3 mb-2 font-pragatiNarrow">
                Community
              </h3>
              <p className="text-green_3 font-poppins">
                We foster a supportive community of learners, encouraging
                collaboration and cultural exchange.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default About;
