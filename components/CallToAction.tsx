import React from "react";

const CallToAction: React.FC = () => {
  return (
    <div className="pt-24 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Ishonchli logistika yechimlar
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Yuklaringizni tez va xavfsiz yetkazib beramiz
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition transform hover:scale-105">
            Biz bilan bog'laning
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
