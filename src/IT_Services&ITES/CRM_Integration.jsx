import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Database, BarChart3, Mail, Phone, Shield, Zap, CheckCircle, Settings } from 'lucide-react';
import ServiceNavbar from '../components/ServiceNavbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CRM_Integration = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Customer Data Integration",
      description: "Unified customer data across all touchpoints and communication channels."
    },
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      title: "Multi-Platform Sync",
      description: "Seamless synchronization between CRM systems, email, social media, and sales platforms."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
      title: "Analytics Integration",
      description: "Advanced customer analytics and reporting across integrated marketing and sales data."
    },
    {
      icon: <Mail className="w-8 h-8 text-orange-600" />,
      title: "Marketing Automation",
      description: "Automated email campaigns, lead nurturing, and customer journey mapping."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Data Privacy Compliance",
      description: "GDPR and CCPA compliant data handling and customer privacy protection."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Real-time Updates",
      description: "Instant data synchronization for up-to-date customer information across all systems."
    }
  ];

  const crmSystems = [
    "Salesforce", "HubSpot", "Zoho CRM", "Microsoft Dynamics", "Pipedrive", "Freshworks", "Insightly", "SugarCRM"
  ];

  const benefits = [
    "360-degree customer view across all channels",
    "Improved customer relationship management",
    "Automated lead generation and nurturing",
    "Enhanced sales team productivity",
    "Personalized customer experiences",
    "Data-driven marketing campaigns"
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
                CRM Integration
              </h1>
              <p className="text-xl mb-8 text-green-100">
                Connect your customer relationship systems for a unified view of customer interactions.
                Enhance customer experiences, streamline sales processes, and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center"
                >
                  Start Integration <ArrowRight className="ml-2 w-5 h-5" />
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
                    <div className="text-3xl font-bold mb-2">200+</div>
                    <div className="text-green-100">CRM Integrations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">95%</div>
                    <div className="text-green-100">Customer Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">60%</div>
                    <div className="text-green-100">Sales Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-green-100">Customer Support</div>
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
              CRM Integration Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive CRM integration solutions that connect your customer data,
              automate marketing processes, and provide actionable insights for better customer relationships.
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

      {/* CRM Systems Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Supported CRM Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We integrate with all major CRM systems to ensure seamless customer data management.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up">
            {crmSystems.map((system, index) => (
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
              Transform your customer relationships with integrated CRM systems that drive engagement and growth.
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
              Our systematic approach ensures successful CRM integration with enhanced customer experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Analysis", desc: "Assess current CRM and business requirements" },
              { step: "02", title: "Strategy", desc: "Design integration strategy and data mapping" },
              { step: "03", title: "Development", desc: "Build and configure integration solutions" },
              { step: "04", title: "Optimization", desc: "Testing, training, and performance optimization" }
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
            Ready to Integrate Your CRM Systems?
          </h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Let's create a unified customer experience with seamless CRM integration solutions.
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

export default CRM_Integration;