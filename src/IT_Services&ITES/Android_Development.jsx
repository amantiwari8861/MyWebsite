import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Code, Shield, Zap, Users, Star, CheckCircle, Tablet } from 'lucide-react';
import ServiceNavbar from '../components/ServiceNavbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Android_Development = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      icon: <Tablet className="w-8 h-8 text-green-600" />,
      title: "Native Android Development",
      description: "Building high-performance apps using Kotlin and Java with the latest Android frameworks."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: "Material Design",
      description: "Creating beautiful, consistent interfaces following Google's Material Design guidelines."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Google Play Store Ready",
      description: "Ensuring your app meets all Play Store requirements and gets maximum visibility."
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      title: "Performance Optimization",
      description: "Delivering fast, efficient apps that work seamlessly across all Android devices."
    },
    {
      icon: <Code className="w-8 h-8 text-red-600" />,
      title: "Cross-Platform Compatibility",
      description: "Supporting all Android versions and device configurations for maximum reach."
    },
    {
      icon: <Users className="w-8 h-8 text-teal-600" />,
      title: "Comprehensive Testing",
      description: "Rigorous testing across thousands of Android devices for quality assurance."
    }
  ];

  const technologies = [
    "Kotlin", "Java", "Android Jetpack", "Room", "LiveData", "ViewModel", "Firebase", "Google Maps API"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceNavbar />

      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-green-600 via-green-700 to-green-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Android Development
              </h1>
              <p className="text-xl mb-8 text-green-100">
                Build powerful Android applications that reach billions of users worldwide.
                From concept to Google Play Store launch, we deliver exceptional Android experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center"
                >
                  Start Your Android Project <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/portfolio"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center"
                >
                  View Our Apps
                </Link>
              </div>
            </div>
            <div data-aos="fade-left" className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">300+</div>
                    <div className="text-green-100">Android Apps Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">4.7★</div>
                    <div className="text-green-100">Average App Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">100M+</div>
                    <div className="text-green-100">Downloads Achieved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-green-100">Support & Maintenance</div>
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
              Why Choose Our Android Development?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in creating Android applications that leverage the full potential of the platform,
              delivering exceptional user experiences across billions of devices worldwide.
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
              Utilizing modern Android technologies and frameworks to build robust, scalable applications.
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
              A systematic approach that ensures quality, compatibility, and successful Play Store deployment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Planning", desc: "Requirements analysis and architecture design" },
              { step: "02", title: "Design", desc: "Material Design implementation" },
              { step: "03", title: "Development", desc: "Agile development with modern tools" },
              { step: "04", title: "Testing", desc: "Device testing and Play Store preparation" }
            ].map((item, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
      <section className="py-20 bg-linear-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Build Your Android App?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Let's create an Android application that reaches millions of users and drives your business growth.
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

export default Android_Development;