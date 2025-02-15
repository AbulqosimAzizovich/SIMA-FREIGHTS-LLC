import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import img1 from "../public/4.jpg";
import img2 from "../public/2.jpg";
import img3 from "../public/3.jpg";

const slides = [
  {
    id: 1,
    title: "USA Freight Service",
    description: "We deliver your goods reliably to any point in the world",
    image: img1,
  },
  {
    id: 2,
    title: "Fast and Quality Logistics",
    description: "Deliver your goods quickly through optimal routes",
    image: img2,
  },
  {
    id: 3,
    title: "24/7 Customer Service",
    description: "Our professional specialists are always at your service",
    image: img3,
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Slide changes every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden bg-gray-900">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out
              ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            {/* Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
              />
              {/* Black gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
              <div
                className={`max-w-xl transition-all duration-1000 transform
                  ${
                    index === currentSlide
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {slide.title}
                </h1>
                <p className="text-xl text-gray-200 mb-8">
                  {slide.description}
                </p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-800 transition text-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Indicators */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all
                ${index === currentSlide ? "bg-blue-600 w-6" : "bg-gray-400"}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-800 transition text-white"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
