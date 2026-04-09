import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart, CreditCard, Truck, Shield, BarChart3, Users } from 'lucide-react';
import ServiceNavbar from '../components/ServiceNavbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const E_Commerce = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      icon: <ShoppingCart className="w-8 h-8 text-blue-600" />,
      title: "Custom E-commerce Platforms",
      description: "Building tailored online stores that reflect your brand and meet your specific business needs."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-green-600" />,
      title: "Secure Payment Integration",
      description: "Implementing robust payment gateways with multiple options for seamless transactions."
    },
    {
      icon: <Truck className="w-8 h-8 text-purple-600" />,
      title: "Inventory Management",
      description: "Advanced inventory tracking and management systems for efficient operations."
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-600" />,
      title: "Security & Compliance",
      description: "Ensuring PCI compliance and implementing advanced security measures."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-600" />,
      title: "Analytics & Reporting",
      description: "Comprehensive dashboards and insights to track performance and growth."
    },
    {
      icon: <Users className="w-8 h-8 text-teal-600" />,
      title: "Customer Management",
      description: "CRM integration and customer relationship tools for better engagement."
    }
  ];

  const platforms = [
    { name: "Shopify", description: "Custom themes and app development" },
    { name: "WooCommerce", description: "WordPress-based e-commerce solutions" },
    { name: "Magento", description: "Enterprise-level e-commerce platforms" },
    { name: "Custom Solutions", description: "Tailored platforms built from scratch" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceNavbar />
      
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-green-600 via-blue-600 to-purple-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                E-commerce Solutions
              </h1>
              <p className="text-xl mb-8 text-green-100">
                Transform your business with powerful, scalable e-commerce platforms that drive sales and enhance customer experiences. 
                From setup to optimization, we handle it all.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center"
                >
                  Start Your Store <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/portfolio" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center"
                >
                  View Success Stories
                </Link>
              </div>
            </div>
            <div data-aos="fade-left" className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">300+</div>
                    <div className="text-green-100">Stores Launched</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">$50M+</div>
                    <div className="text-green-100">Revenue Generated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">99.9%</div>
                    <div className="text-green-100">Uptime Guarantee</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-green-100">Technical Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive E-commerce Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end e-commerce solutions that help you sell more, manage better, and grow faster.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Supported Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with leading e-commerce platforms and can build custom solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{platform.name}</h3>
                <p className="text-gray-600">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Launch Your Online Store?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Let's build an e-commerce platform that drives sales and delights customers.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
          >
            Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default E_Commerce;