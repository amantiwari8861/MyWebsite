import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Server, Shield, Zap, Database, Globe, Cpu, Lock, BarChart3 } from 'lucide-react';
import ServiceNavbar from '../components/ServiceNavbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AWS_Development = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      icon: <Cloud className="w-8 h-8 text-orange-600" />,
      title: "Cloud Migration & Setup",
      description: "Seamless migration of applications and data to AWS cloud infrastructure."
    },
    {
      icon: <Server className="w-8 h-8 text-blue-600" />,
      title: "EC2 & Compute Services",
      description: "Scalable compute capacity with EC2 instances, Lambda functions, and container services."
    },
    {
      icon: <Database className="w-8 h-8 text-green-600" />,
      title: "Database Solutions",
      description: "Managed database services including RDS, DynamoDB, and Redshift for optimal performance."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with IAM, VPC, and compliance certifications."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Serverless Architecture",
      description: "Build scalable applications with Lambda, API Gateway, and serverless frameworks."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-600" />,
      title: "Monitoring & Analytics",
      description: "Comprehensive monitoring with CloudWatch, CloudTrail, and analytics services."
    }
  ];

  const services = [
    "EC2", "S3", "RDS", "Lambda", "CloudFormation", "CloudWatch", "IAM", "VPC", "Route 53", "CloudFront"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceNavbar />

      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-orange-600 via-orange-700 to-orange-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                AWS Cloud Solutions
              </h1>
              <p className="text-xl mb-8 text-orange-100">
                Harness the power of Amazon Web Services to build scalable, secure, and cost-effective cloud solutions.
                From migration to optimization, we deliver enterprise-grade AWS implementations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors inline-flex items-center justify-center"
                >
                  Start Your AWS Project <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/portfolio"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors inline-flex items-center justify-center"
                >
                  View Our Solutions
                </Link>
              </div>
            </div>
            <div data-aos="fade-left" className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-orange-100">AWS Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">99.9%</div>
                    <div className="text-orange-100">Uptime Achieved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50%</div>
                    <div className="text-orange-100">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-orange-100">AWS Support</div>
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
              AWS Services We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AWS cloud solutions leveraging the full spectrum of Amazon's cloud services
              to meet your business objectives and drive digital transformation.
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
              AWS Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leveraging the most powerful and reliable AWS services for your cloud infrastructure.
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
              Cloud Architecture Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Well-Architected Framework implementation for scalable, resilient, and cost-optimized cloud solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Scalability", desc: "Auto-scaling solutions for variable workloads" },
              { title: "Security", desc: "Multi-layered security with encryption and access control" },
              { title: "Performance", desc: "Optimized performance with CDN and caching" },
              { title: "Cost Optimization", desc: "Right-sizing and reserved instances for cost efficiency" }
            ].map((item, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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
      <section className="py-20 bg-linear-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Migrate to AWS?
          </h2>
          <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
            Let's build a robust, scalable cloud infrastructure that drives your business forward.
          </p>
          <Link
            to="/contact"
            className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors inline-flex items-center"
          >
            Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AWS_Development;