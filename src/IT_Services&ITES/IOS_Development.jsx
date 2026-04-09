import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Apple, Code, Shield, Zap, Users, Star, CheckCircle } from 'lucide-react';
import ServiceNavbar from '../components/ServiceNavbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const IOS_Development = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      icon: <Apple className="w-8 h-8 text-blue-600" />,
      title: "Native iOS Development",
      description: "Building high-performance apps using Swift and Objective-C with the latest iOS frameworks."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-green-600" />,
      title: "iOS UI/UX Design",
      description: "Creating intuitive interfaces that follow Apple's Human Interface Guidelines."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "App Store Optimization",
      description: "Ensuring your app meets all App Store requirements and gets maximum visibility."
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      title: "Performance Optimization",
      description: "Delivering lightning-fast, battery-efficient apps that users love."
    },
    {
      icon: <Code className="w-8 h-8 text-red-600" />,
      title: "API Integration",
      description: "Seamless integration with backend services and third-party APIs."
    },
    {
      icon: <Users className="w-8 h-8 text-teal-600" />,
      title: "User Testing",
      description: "Rigorous testing across all iOS devices and versions for quality assurance."
    }
  ];

  const technologies = [
    "Swift", "Objective-C", "SwiftUI", "UIKit", "Core Data", "ARKit", "Core ML", "CloudKit"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceNavbar />

      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                iOS Development
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Create exceptional iOS applications that deliver premium user experiences and drive business success.
                From concept to App Store launch, we handle every aspect of iOS development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  Start Your iOS Project <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/portfolio"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  View Our Apps
                </Link>
              </div>
            </div>
            <div data-aos="fade-left" className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">200+</div>
                    <div className="text-blue-100">iOS Apps Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">4.8★</div>
                    <div className="text-blue-100">Average App Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50M+</div>
                    <div className="text-blue-100">Downloads Achieved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-blue-100">Support & Maintenance</div>
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
              Why Choose Our iOS Development?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in creating iOS applications that not only look great but also perform exceptionally
              across all Apple devices and deliver outstanding user experiences.
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

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leveraging the latest iOS technologies and frameworks to build cutting-edge applications.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <span className="text-gray-800 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures quality, performance, and timely delivery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Planning", desc: "Requirements gathering and project planning" },
              { step: "02", title: "Design", desc: "UI/UX design and prototyping" },
              { step: "03", title: "Development", desc: "Coding with best practices" },
              { step: "04", title: "Testing", desc: "Quality assurance and deployment" }
            ].map((item, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Build Your iOS App?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's create an iOS application that stands out in the App Store and delights your users.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IOS_Development;