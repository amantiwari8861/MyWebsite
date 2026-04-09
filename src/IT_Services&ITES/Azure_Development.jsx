import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Server, Shield, Zap, Database, Globe, Cpu, Lock, BarChart3 } from 'lucide-react';
import ServiceNavbar from '../components/ServiceNavbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Azure_Development = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-600" />,
      title: "Cloud Migration & Setup",
      description: "Seamless migration and modernization of applications to Microsoft Azure cloud."
    },
    {
      icon: <Server className="w-8 h-8 text-indigo-600" />,
      title: "Azure VMs & Compute",
      description: "Scalable virtual machines, Azure Functions, and container services for modern applications."
    },
    {
      icon: <Database className="w-8 h-8 text-green-600" />,
      title: "Database Solutions",
      description: "Managed databases with Azure SQL Database, Cosmos DB, and data analytics services."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Security & Compliance",
      description: "Enterprise security with Azure Active Directory, Key Vault, and compliance frameworks."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Serverless Computing",
      description: "Build event-driven applications with Azure Functions and Logic Apps."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-600" />,
      title: "Monitoring & DevOps",
      description: "Comprehensive monitoring with Azure Monitor, Application Insights, and DevOps tools."
    }
  ];

  const services = [
    "Azure VMs", "Azure Functions", "Azure SQL", "Cosmos DB", "Azure AD", "Azure Monitor", "Logic Apps", "Azure DevOps", "AKS", "Azure Storage"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceNavbar />

      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Azure Cloud Solutions
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Leverage Microsoft Azure's comprehensive cloud platform to build innovative, scalable solutions.
                From development to deployment, we deliver enterprise-ready Azure implementations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  Start Your Azure Project <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/portfolio"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  View Our Solutions
                </Link>
              </div>
            </div>
            <div data-aos="fade-left" className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">400+</div>
                    <div className="text-blue-100">Azure Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">99.9%</div>
                    <div className="text-blue-100">SLA Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">60%</div>
                    <div className="text-blue-100">Performance Boost</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-blue-100">Azure Support</div>
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
              Azure Services We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Azure cloud solutions utilizing Microsoft's enterprise-grade cloud platform
              to accelerate your digital transformation and drive business innovation.
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

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Azure Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harnessing the power of Microsoft's cloud ecosystem for robust, scalable solutions.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <span className="text-gray-800 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Enterprise Cloud Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Well-architected Azure solutions following Microsoft's best practices for security, scalability, and performance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Hybrid Cloud", desc: "Seamless integration between on-premises and cloud environments" },
              { title: "AI & ML", desc: "Azure AI services for intelligent applications" },
              { title: "DevOps", desc: "Complete CI/CD pipelines with Azure DevOps" },
              { title: "Analytics", desc: "Advanced analytics with Azure Synapse and Power BI" }
            ].map((item, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Move to Azure?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's harness the power of Microsoft Azure to transform your business operations.
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

export default Azure_Development;