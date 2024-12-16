import { img, label } from "framer-motion/client";
import React from "react";

const InteractiveActivities = () => {
  const cards = [
    {
      img: "/Interactive Activities icons/fill-in-the-blanks.png",
      label: "Fill in the Blanks",
    },
    {
      img: "/Interactive Activities icons/sort-the-para.png",
      label: "Sort the paragraph",
    },
    {
      img: "/Interactive Activities icons/true-and-false.png",
      label: "True & False",
    },
    {
      img: "/Interactive Activities icons/presentations.png",
      label: "Presentations",
    },
    {
      img: "/Interactive Activities icons/sort-the-para.png",
      label: "Sort the paragraph",
    },
    {
      img: "/Interactive Activities icons/true-and-false.png",
      label: "True & False",
    },
    {
      img: "/Interactive Activities icons/presentations.png",
      label: "Presentations",
    },
    {
      img: "/Interactive Activities icons/sort-the-para.png",
      label: "Sort the paragraph",
    },
    {
      img: "/Interactive Activities icons/true-and-false.png",
      label: "True & False",
    },
    {
      img: "/Interactive Activities icons/fill-in-the-blanks.png",
      label: "Fill in the Blanks",
    },
  ];
  return (
    <div className="bg-white_1 w-full py-12">
      <div className="lcontainer mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-green_3 font-rambla mb-4 text-center">
          Interactive Activities
        </h2>
        <div className="flex md:flex-row flex-col items-center lg:items-start w-full py-8 justify-center gap-10">
          <div>
            <div className="flex md:w-[300px] w-[320px] h-[265px] border-black border rounded-xl items-center justify-center">
              <img
                src="/Interactive Activities icons/drag-and-drop.png"
                alt=""
                className="lg:h-[200px] h-[160px]"
              />
            </div>
            <h4 className="text-center text-xl md:text-2xl font-extrabold font-rambla mt-4">
              Drag and Drop
            </h4>
          </div>
          <div>
            <div className="flex md:w-[300px] w-[320px] h-[265px] border-black border rounded-xl items-center justify-center">
              <img
                src="/Interactive Activities icons/fill-in-the-blanks.png"
                alt=""
                className="lg:h-[200px] h-[160px]"
              />
            </div>
            <h4 className="text-center text-xl md:text-2xl font-extrabold font-rambla mt-4">
              Fill in the Blanks
            </h4>
          </div>
        </div>
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-8 md:gap-y-8 gap-y-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${
                index === 9 ? "col-span-1 md:col-start-2 col-start-1" : ""
              }`}
            >
              <div className="md:w-[300px] w-[320px] flex items-center h-[265px] border border-black rounded-xl mx-auto">
                <img
                  src={card.img}
                  alt=""
                  className="lg:h-[200px] h-[160px] mx-auto"
                />
              </div>
              <h4 className="text-center text-xl md:text-2xl font-extrabold font-rambla mt-4">
                {card.label}
              </h4>
            </div>
          ))}
        </div>
        <img
          src="/Interactive Activities icons/demo-arrow.png"
          alt=""
          className="lg:w-32 w-20 mx-auto my-5"
        />
        <div className="rounded-xl bg-green_2 text-white lg:w-[300px] w-[200px] mx-auto text-center md:py-5 py-3 lg:text-[20px] text-lg border border-black_1 cursor-pointer">
          See Demo
        </div>
      </div>
    </div>
  );
};

export default InteractiveActivities;
