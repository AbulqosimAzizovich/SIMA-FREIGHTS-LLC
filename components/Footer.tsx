import React from "react";
import { PhoneCall, Mail, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p>Our company operates in the field of transport and logistics.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <PhoneCall className="w-6 h-6 mr-3 text-white" />
                +1 (513) 757-1045
              </li>
              <li className="flex items-center">
                <Mail className="w-6 h-6 mr-3 text-white" />
                info@logistrans.com
              </li>
              <li className="flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-white" />
                Tashkent, Uzbekistan
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.facebook.com/logistrans"
                  className="text-white hover:text-gray-400"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/logistrans"
                  className="text-white hover:text-gray-400"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/logistrans"
                  className="text-white hover:text-gray-400"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
