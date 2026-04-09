import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Palette,
  Smartphone,
  Monitor,
  Users,
  Award,
  CheckCircle,
} from "lucide-react";
import ServiceNavbar from "../components/ServiceNavbar";
import AOS from "aos";
import "aos/dist/aos.css";

const UI_UX_Development = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      icon: <Palette className="w-8 h-8 text-blue-600" />,
      title: "User-Centric Design",
      description:
        "Creating intuitive interfaces that prioritize user experience and engagement.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-green-600" />,
      title: "Responsive Design",
      description:
        "Ensuring seamless experiences across all devices and screen sizes.",
    },
    {
      icon: <Monitor className="w-8 h-8 text-purple-600" />,
      title: "Interactive Prototyping",
      description:
        "Developing clickable prototypes to test and refine user flows.",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "User Research",
      description:
        "Conducting thorough research to understand user needs and behaviors.",
    },
    {
      icon: <Award className="w-8 h-8 text-red-600" />,
      title: "Accessibility",
      description: "Designing inclusive interfaces that meet WCAG guidelines.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-teal-600" />,
      title: "Usability Testing",
      description:
        "Rigorous testing to ensure optimal user satisfaction and performance.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "Understanding your business goals and user needs",
    },
    {
      step: "02",
      title: "Research",
      description: "User interviews, competitor analysis, and market research",
    },
    {
      step: "03",
      title: "Wireframing",
      description: "Creating low-fidelity blueprints of the user interface",
    },
    {
      step: "04",
      title: "Design",
      description: "Developing high-fidelity mockups and visual designs",
    },
    {
      step: "05",
      title: "Prototyping",
      description: "Building interactive prototypes for testing",
    },
    {
      step: "06",
      title: "Testing",
      description: "User testing and iteration based on feedback",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ServiceNavbar />

      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-600 via-purple-600 to-indigo-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                UI/UX Development
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Crafting exceptional digital experiences that captivate users
                and drive business success. Our expert designers create
                intuitive, beautiful, and functional interfaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/portfolio"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  View Our Work
                </Link>
              </div>
            </div>
            <div data-aos="fade-left" className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-blue-100">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">98%</div>
                    <div className="text-blue-100">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-blue-100">Expert Designers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-blue-100">Support Available</div>
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
              Our UI/UX Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to launch, we provide comprehensive UI/UX design
              services that transform ideas into exceptional digital
              experiences.
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
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
              Our Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to creating user-centered designs that
              deliver results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Digital Experience?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's collaborate to create stunning, user-friendly interfaces that
            drive engagement and conversions.
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

export default UI_UX_Development;
