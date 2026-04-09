import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Database, Users, BarChart3, Cog, Shield, Zap, CheckCircle, Settings } from 'lucide-react';
import ServiceNavbar from '../components/ServiceNavbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ERP_Integration = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      title: "Data Synchronization",
      description: "Real-time data synchronization across all business systems and applications."
    },
    {
      icon: <Layers className="w-8 h-8 text-green-600" />,
      title: "Multi-System Integration",
      description: "Seamless integration between ERP systems, databases, and third-party applications."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
      title: "Business Intelligence",
      description: "Advanced reporting and analytics integration for data-driven decision making."
    },
    {
      icon: <Cog className="w-8 h-8 text-orange-600" />,
      title: "Workflow Automation",
      description: "Automated business processes and workflows across integrated systems."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Data Security",
      description: "Enterprise-grade security measures to protect sensitive business data."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Performance Optimization",
      description: "Optimized data flows and processing for maximum system efficiency."
    }
  ];

  const erpSystems = [
    "SAP", "Oracle ERP", "Microsoft Dynamics", "Sage", "Infor", "Epicor", "NetSuite", "Odoo"
  ];

  const benefits = [
    "Streamlined operations across departments",
    "Real-time data visibility and insights",
    "Reduced manual data entry and errors",
    "Improved decision-making with accurate data",
    "Enhanced customer experience",
    "Scalable architecture for business growth"
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
                ERP Integration
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Connect your enterprise systems seamlessly with our comprehensive ERP integration solutions.
                Streamline operations, improve data flow, and drive business efficiency across all departments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  Start Integration <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/portfolio"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
            <div data-aos="fade-left" className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">150+</div>
                    <div className="text-blue-100">ERP Integrations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">99.5%</div>
                    <div className="text-blue-100">Data Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">40%</div>
                    <div className="text-blue-100">Efficiency Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-blue-100">System Monitoring</div>
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
              ERP Integration Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive ERP integration solutions that connect your business systems,
              automate workflows, and provide real-time insights for better decision making.
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

      {/* ERP Systems Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Supported ERP Systems
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We integrate with all major ERP platforms to ensure seamless connectivity and data flow.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up">
            {erpSystems.map((system, index) => (
              <div
                key={index}
                className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <span className="text-gray-800 font-medium">{system}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Business Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business operations with integrated ERP systems that drive efficiency and growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
              >
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 shrink-0" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Integration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures successful ERP integration with minimal disruption.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", desc: "Analyze current systems and requirements" },
              { step: "02", title: "Planning", desc: "Design integration architecture and roadmap" },
              { step: "03", title: "Implementation", desc: "Develop and deploy integration solutions" },
              { step: "04", title: "Testing", desc: "Comprehensive testing and go-live support" }
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
            Ready to Integrate Your ERP Systems?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's streamline your business operations with seamless ERP integration solutions.
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

export default ERP_Integration;