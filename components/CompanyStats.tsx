import React from "react";

const CompanyStats: React.FC = () => {
  return (
    <div className="bg-blue-50 py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 text-center">
          <div className="p-12" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-7xl font-bold text-blue-600 mb-4">5000+</h3>
            <p className="text-2xl text-gray-600">Satisfied Customers</p>
          </div>
          <div className="p-12" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-7xl font-bold text-blue-600 mb-4">100+</h3>
            <p className="text-2xl text-gray-600">Trucks</p>
          </div>
          <div className="p-12" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-7xl font-bold text-blue-600 mb-4">10+</h3>
            <p className="text-2xl text-gray-600">Years of Experience</p>
          </div>
          <div className="p-12" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-7xl font-bold text-blue-600 mb-4">50+</h3>
            <p className="text-2xl text-gray-600">Partner Countries</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyStats;
