import { useState, useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import {
  PhoneCall,
  Mail,
  MapPin,
  Truck,
  Globe,
  Package,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import CompanyStats from "../components/CompanyStats";
import ImageGallery from "../components/ImageGallery";
import CallToAction from "../components/CallToAction";
import Services from "../components/Services";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
import LoadingSpinner from "../components/Spinner";
import bgService from "../public/1.jpg";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Simulate checking if all resources are loaded
    const handleLoad = () => {
      setPageLoading(false);
    };

    // Add load event listener
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Cleanup
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (pageLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen">
      <Head>
        <title>LogisTrans - Ishonchli logistika xizmatlari</title>
        <meta
          name="description"
          content="O'zbekistonning yetakchi logistika kompaniyasi - LogisTrans. Yuklaringizni tez va xavfsiz yetkazib beramiz."
        />
        <meta
          name="keywords"
          content="logistika, yuk tashish, transport, O'zbekiston, xalqaro yuk tashish"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="LogisTrans - Ishonchli logistika xizmatlari"
        />
        <meta
          property="og:description"
          content="O'zbekistonning yetakchi logistika kompaniyasi"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="LogisTrans - Ishonchli logistika xizmatlari"
        />
        <meta
          name="twitter:description"
          content="O'zbekistonning yetakchi logistika kompaniyasi"
        />
        <meta name="twitter:image" content="/twitter-image.jpg" />

        <link href="https://unpkg.com/aos@next/dist/aos.css" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <nav className="fixed w-full bg-white shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-blue-600">
              SIMA FREIGHTS LLC
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#xizmatlar"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Xizmatlar
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Biz haqimizda
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Bog'lanish
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <a
                href="#xizmatlar"
                className="block text-gray-600 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Xizmatlar
              </a>
              <a
                href="#about"
                className="block text-gray-600 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Biz haqimizda
              </a>
              <a
                href="#contact"
                className="block text-gray-600 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Bog'lanish
              </a>
            </div>
          )}
        </div>
      </nav>

      <HeroSlider />

      {/* Company Stats */}
      <CompanyStats />

      {/* Services section remains the same */}

      {/* Image Gallery */}
      <ImageGallery />

      <CallToAction />

      {/* Services */}
      <Services bgService={bgService} />

      {/* Contact Form */}
      {/* <ContactForm /> */}

      {/* Footer */}
      <Footer />
    </div>
  );
}
