import React from "react";
import { PhoneCall, Mail, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12" id="footer">
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
                <a className="flex items-center" href="tel:+1 (513) 757-1045">
                  <PhoneCall className="w-6 h-6 mr-3 text-white" />
                  +1 (513) 757-1045
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="flex items-center"
                  href="mailto:recruiting@simafreights.com"
                >
                  <Mail className="w-6 h-6 mr-3 text-white" />
                  recruiting@simafreights.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-white" />
                Loveland OH 45140
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100082251435862"
                  className="text-white hover:text-gray-400"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/simafreights?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
                  className="text-white hover:text-gray-400"
                >
                  Instagram
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
