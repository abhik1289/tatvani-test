"use client";

import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Image from "next/image";

const images = [
  'https://via.placeholder.com/1920x1080?text=Image+1',
  'https://via.placeholder.com/1920x1080?text=Image+2',
  'https://via.placeholder.com/1920x1080?text=Image+3',
  'https://via.placeholder.com/1920x1080?text=Image+4',
];

const HomeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigation = (direction) => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + direction + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[70vh] overflow-hidden bg-black">
      <TransitionGroup>
        <CSSTransition key={currentIndex} timeout={1000} classNames="fade">
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            fill
            className="object-cover transition-transform duration-1000 ease-in-out"
            priority
          />
        </CSSTransition>
      </TransitionGroup>

      {/* Navigation Arrows */}
      <button
        onClick={() => handleNavigation(-1)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 text-black rounded-full p-3 shadow-lg hover:bg-opacity-100 hover:scale-110 transition-all duration-300"
        aria-label="Previous Slide"
      >
        &lt;
      </button>
      <button
        onClick={() => handleNavigation(1)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 text-black rounded-full p-3 shadow-lg hover:bg-opacity-100 hover:scale-110 transition-all duration-300"
        aria-label="Next Slide"
      >
        &gt;
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            } hover:bg-white transition-all duration-300`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .fade-enter {
          opacity: 0;
          transform: scale(0.95);
        }
        .fade-enter-active {
          opacity: 1;
          transform: scale(1);
          transition: opacity 1000ms ease-in-out, transform 1000ms ease-in-out;
        }
        .fade-exit {
          opacity: 1;
        }
        .fade-exit-active {
          opacity: 0;
          transition: opacity 1000ms ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default HomeSlider;
