import React from "react";
import { Truck, Globe, Package } from "lucide-react"; // Add appropriate icons

interface ServicesProps {
  bgService: {
    src: string;
  };
}

const Services: React.FC<ServicesProps> = ({ bgService }) => {
  return (
    <div
      id="services"
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${bgService.src})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="p-6 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 shadow-lg hover:shadow-xl hover:bg-white/30 transition duration-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="bg-blue-50/30 w-16 h-16 rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Vehicle Transport
            </h3>
            <p className="text-gray-100">
              Fast and reliable delivery service across Uzbekistan
            </p>
          </div>

          <div
            className="p-6 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 shadow-lg hover:shadow-xl hover:bg-white/30 transition duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="bg-blue-50/30 w-16 h-16 rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              International Transport
            </h3>
            <p className="text-gray-100">Delivery service to and from abroad</p>
          </div>

          <div
            className="p-6 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 shadow-lg hover:shadow-xl hover:bg-white/30 transition duration-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="bg-blue-50/30 w-16 h-16 rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm">
              <Package className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Warehouse</h3>
            <p className="text-gray-100">Modern equipped warehouse services</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
