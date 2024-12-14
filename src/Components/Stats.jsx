import { div } from "framer-motion/client";
import React, { useEffect, useRef, useState } from "react";

const Stats = () => {
  const stats = [
    { value: 124, label: "Learn More" },
    { value: 35, label: "Learn More" },
    { value: 124, label: "Learn More" },
    { value: 1000, label: "Learn More" },
    { value: 124, label: "Learn More" },
    { value: 124, label: "Learn More" },
    { value: 124, label: "Learn More" },
    { value: 124, label: "Learn More" },
    { value: 124, label: "Learn More" },
  ];
  const [currentValues, setCurrentValues] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false); // Track visibility
  const sectionRef = useRef(null); // Reference to the stats section

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when section is visible
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed (50% visible)
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return; // Start animation only when visible

    const duration = 2000; // 2 seconds
    const interval = 20; // Update every 20ms
    const steps = duration / interval;
    const increments = stats.map((stat) => stat.value / steps);

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCurrentValues((prevValues) =>
        prevValues.map((value, index) =>
          step >= steps
            ? stats[index].value
            : Math.min(value + increments[index], stats[index].value)
        )
      );

      if (step >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible, stats]);

  return (
    <div
      ref={sectionRef}
      className="relative bg-cover bg-center w-full py-12 lg:py-20 font-rambla"
      style={{ backgroundImage: "url('/stats-section-bg.png')" }}
    >
      {/* Green Overlay */}
      <div className="absolute inset-0 bg-[#04543B] opacity-70"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h3 className="md:text-5xl text-4xl font-bold text-center">
          Stats Section
        </h3>
        <div className="grid md:grid-cols-3 grid-cols-2 mt-12 gap-16">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center`}>
              <h4 className="md:text-5xl text-3xl font-bold mb-3">
                {Math.round(currentValues[index])}
              </h4>
              <span className="text-xl">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
