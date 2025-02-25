import { useState, useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import { Menu, X } from "lucide-react";
// import Image from "next/image";
import CompanyStats from "../components/CompanyStats";
import ImageGallery from "../components/ImageGallery";
import CallToAction from "../components/CallToAction";
import Services from "../components/Services";
// import ContactForm from "../components/ContactForm";
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>SIMA FREIGHTS LLC - Reliable Trucking Services</title>
        <meta
          name="description"
          content="USA's leading trucking company for drivers. We provide reliable loads, excellent pay, and support for truck drivers."
        />
        <meta
          name="keywords"
          content="truck driver jobs, logistics, freight, transport, USA, trucking company, driver benefits"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="SIMA FREIGHTS LLC - Reliable Trucking Services"
        />
        <meta
          property="og:description"
          content="USA's leading trucking company for drivers"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="SIMA FREIGHTS LLC - Reliable Trucking Services"
        />
        <meta
          name="twitter:description"
          content="USA's leading trucking company for drivers"
        />
        <meta name="twitter:image" content="/twitter-image.jpg" />

        <link href="https://unpkg.com/aos@next/dist/aos.css" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <nav className="fixed w-full bg-white shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div
              onClick={() => scrollToTop()}
              className="text-xl font-bold text-blue-600 cursor-pointer"
            >
              SIMA FREIGHTS LLC
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a
                onClick={() => scrollToSection("services")}
                className="text-gray-600 hover:text-blue-600 transition cursor-pointer"
              >
                Services
              </a>
              <a
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-blue-600 transition cursor-pointer"
              >
                About Us
              </a>
              <a
                onClick={() => scrollToSection("footer")}
                className="text-gray-600 hover:text-blue-600 transition cursor-pointer"
              >
                Contact
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
                className="block text-gray-600 hover:text-blue-600 transition"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection("services");
                }}
              >
                Services
              </a>
              <a
                className="block text-gray-600 hover:text-blue-600 transition"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection("about");
                }}
              >
                About Us
              </a>
              <a
                href="#contact"
                className="block text-gray-600 hover:text-blue-600 transition"
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection("services");
                }}
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      <HeroSlider />

      {/* Company Stats */}
      <CompanyStats />

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-3xl font-bold text-gray-800 mb-4"
              data-aos="fade-up"
            >
              Our Services for Drivers
            </h2>
            <p
              className="text-gray-600 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              At SIMA FREIGHTS LLC, we&apos;re committed to supporting truck
              drivers with comprehensive services designed to make your job
              easier and more profitable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div
              className="bg-white rounded-lg shadow-md p-6"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl text-gray-600 font-semibold mb-2">
                Dedicated Fleet Services
              </h3>
              <p className="text-gray-600">
                Reliable load assignments with consistent miles. Competitive
                per-mile rates with performance bonuses. Flexible scheduling
                options for OTR, regional, and dedicated routes.
              </p>
            </div>

            {/* Service 2 */}
            <div
              className="bg-white rounded-lg shadow-md p-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl text-gray-600 font-semibold mb-2">
                Driver Support & Benefits
              </h3>
              <p className="text-gray-600">
                Quick pay options with direct deposit. Fuel card program with
                discounts. 24/7 dispatch support and ELD compliance assistance
                for all drivers.
              </p>
            </div>

            {/* Service 3 */}
            <div
              className="bg-white rounded-lg shadow-md p-6"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <div className="text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl text-gray-600 font-semibold mb-2">
                Equipment & Maintenance
              </h3>
              <p className="text-gray-600">
                Modern, well-maintained truck fleet. Regular preventative
                maintenance scheduling. Roadside assistance coverage and
                equipment upgrade options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-3xl font-bold text-blue-300 mb-4"
              data-aos="fade-up"
            >
              About SIMA FREIGHTS LLC
            </h2>
            <p
              className="text-gray-300 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              We&apos;re a driver-focused trucking company committed to creating
              the best possible environment for professional truck drivers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6" data-aos="fade-right">
              <h3 className="text-2xl font-semibold text-blue-300">
                Our Mission & History
              </h3>
              <p className="text-gray-300">
                Founded with a driver-first approach, SIMA FREIGHTS LLC has been
                dedicated to creating the most driver-friendly logistics company
                in the USA. Our growth story is built on strong relationships
                with professional drivers who trust us to provide fair
                compensation, consistent miles, and excellent support.
              </p>
              <p className="text-gray-300">
                We value driver safety, professional respect, and work-life
                balance. Our team understands the challenges of life on the road
                because many of us have been drivers ourselves.
              </p>

              <h3 className="text-2xl font-semibold text-blue-300 pt-4">
                Our Fleet & Coverage Area
              </h3>
              <p className="text-gray-300">
                SIMA FREIGHTS LLC operates a modern fleet of well-maintained
                trucks covering major routes throughout the United States. We
                specialize in serving key industries including retail,
                manufacturing, and agricultural sectors. Our consistent growth
                means more opportunities for our drivers with new routes added
                regularly.
              </p>
            </div>

            <div className="space-y-6" data-aos="fade-left">
              <h3 className="text-2xl font-semibold text-blue-300">
                Driver Testimonials
              </h3>

              <div className="bg-white p-6 rounded-lg">
                <p className="italic text-gray-800 mb-4">
                  &quot;I&apos;ve been with SIMA FREIGHTS for over 3 years now.
                  The consistent miles and respect I get from the team makes
                  this the best company I&apos;ve driven for in my 15-year
                  career.&quot;
                </p>
                <p className="font-semibold text-gray-800">
                  - Michael T., Professional Driver
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <p className="italic text-gray-800 mb-4">
                  &quot;What I appreciate most is the 24/7 support. When
                  I&apos;ve had issues on the road, the dispatch team is always
                  there to help, no matter what time it is.&quot;
                </p>
                <p className="font-semibold text-gray-800">
                  - Sarah K., Team Driver
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-blue-300 pt-4">
                Leadership Team
              </h3>
              <p className="text-gray-300">
                Our management team brings decades of combined experience in
                trucking operations. Many started their careers as drivers,
                giving them a unique perspective on the challenges you face.
                This experience shapes our driver-first policies and ensures
                your voice is always heard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <ImageGallery />

      <CallToAction />

      {/* Original Services Component */}
      <Services bgService={bgService} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
