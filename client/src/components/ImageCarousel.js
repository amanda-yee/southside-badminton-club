import React, { useState } from "react";

const ImageCarousel = () => {
  const media = [
    `${process.env.PUBLIC_URL}/media/badminton1.jpg`,
    `${process.env.PUBLIC_URL}/media/badminton2.jpg`,
    `${process.env.PUBLIC_URL}/media/badminton3.jpg`,
    `${process.env.PUBLIC_URL}/media/badminton4.jpg`,
    `${process.env.PUBLIC_URL}/media/badminton5.jpg`,
    `${process.env.PUBLIC_URL}/media/badminton6.jpg`,
    `${process.env.PUBLIC_URL}/media/badminton-vid.mp4`
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Media */}
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {media.map((src, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {src.endsWith(".mp4") ? (
                <video className="w-full" controls>
                  <source src={src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={src} alt={`Slide ${index + 1}`} className="w-full" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Nav arrows */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        onClick={prevSlide}
      >
        &#8592;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        onClick={nextSlide}
      >
        &#8594;
      </button>

      {/* Navigation dots */}
      <div className="flex justify-center mt-4 gap-2">
        {media.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index
                ? "bg-blue-500"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
