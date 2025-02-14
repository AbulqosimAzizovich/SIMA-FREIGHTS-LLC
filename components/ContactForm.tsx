import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div id="contact" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8" data-aos="fade-up">
            <h2 className="text-3xl text-gray-800 font-bold text-center mb-8">
              Biz bilan bog&apos;laning
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Ismingiz</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Telefon</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Xabar</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Yuborish
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
