import React from "react";

const CompanyStats: React.FC = () => {
  return (
    <div className="bg-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="p-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">5000+</h3>
            <p className="text-gray-600">Satisfied Customers</p>
          </div>
          <div className="p-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">100+</h3>
            <p className="text-gray-600">Trucks</p>
          </div>
          <div className="p-6" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">15+</h3>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div className="p-6" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">50+</h3>
            <p className="text-gray-600">Partner Countries</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyStats;
