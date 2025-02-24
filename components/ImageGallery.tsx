import React from "react";
import Image from "next/image";

import img1 from "../public/amazon.png";
import img2 from "../public/FEDEX.png";
import img3 from "../public/JB HUNT.jpg";
import img4 from "../public/UPS.png";
import img5 from "../public/USPS.png";
import img6 from "../public/TQL.png";

const ImageGallery: React.FC = () => {
  const images = [
    { src: img1, alt: "Amazon" },
    { src: img2, alt: "FedEx" },
    { src: img3, alt: "JB Hunt" },
    { src: img4, alt: "UPS" },
    { src: img5, alt: "USPS" },
    { src: img6, alt: "TQL" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-16">
          Reliable truck drivers we work with.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative w-full h-40 flex items-center justify-center">
                <Image
                  src={img.src}
                  alt={img.alt}
                  quality={100}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${btoa(
                    '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1 1"><rect width="1" height="1" fill="#f3f4f6"/></svg>'
                  )}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
