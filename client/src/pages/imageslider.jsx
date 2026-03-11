import { useState } from "react";

export default function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-72 overflow-hidden rounded-lg">
      <img
        src={images[index]}
        alt="product"
        className="w-full h-80 object-cover transition-all duration-500"
      />

      {/* Left Button */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white px-2 py-1 rounded-full"
      >
        ❮
      </button>

      {/* Right Button */}
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white px-2 py-1 rounded-full"
      >
        ❯
      </button>

      {/* Dots Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
