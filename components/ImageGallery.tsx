import React from "react";
import Image from "next/image";

import img1 from "../public/2.jpg";

const ImageGallery: React.FC = () => {
  return (
    // <div className="py-20 bg-gray-50">
    //   <div className="max-w-6xl mx-auto px-4">
    //     <h2 className="text-3xl font-bold text-center mb-16">
    //       Bizning ishlarimiz
    //     </h2>
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //       {[1, 2, 3, 4, 5, 6].map((item) => (
    //         <div
    //           key={item}
    //           className="relative h-64 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
    //           data-aos="fade-up"
    //           data-aos-delay={item * 100}
    //         >
    //           <Image
    //             src={`/images/gallery-${item}.jpg`}
    //             alt={`Gallery image ${item}`}
    //             layout="fill"
    //             objectFit="cover"
    //             loading="lazy"
    //             className="hover:opacity-75 transition"
    //           />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-16">
          Bizning ishlarimiz
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {"123456".split("").map((item) => (
            <div
              key={item}
              className="relative h-64 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <Image
                src={img1}
                alt="Gallery image 1"
                layout="fill"
                objectFit="cover"
                loading="lazy"
                className="hover:opacity-75 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
