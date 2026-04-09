// import React from "react";
// import { Link } from "react-router-dom";
// import { Search, BarChart3, Megaphone, Users, Globe, PenTool, Target, Zap, Award } from "lucide-react";

// function DigitalMarketing() {
//   const digitalSubServices = [
//     {
//       title: "SEO Services",
//       to: "/services/seo-services",
//       icon: <Search size={40} className="text-purple-700 mb-4"/>,
//       description: "Improve search rankings and drive organic traffic to your website."
//     },
//     {
//       title: "SEM Marketing",
//       to: "/services/sem-marketing",
//       icon: <BarChart3 size={40} className="text-purple-700 mb-4"/>,
//       description: "Data-driven campaigns designed to maximize ROI and conversions."
//     },
//     {
//       title: "Social Media Management",
//       to: "/services/social-media-management",
//       icon: <Globe size={40} className="text-purple-700 mb-4"/>,
//       description: "Build strong brand presence on platforms like Facebook and LinkedIn."
//     },
//     {
//       title: "Online Advertising",
//       to: "/services/online-advertising",
//       icon: <Megaphone size={40} className="text-purple-700 mb-4"/>,
//       description: "Targeted advertising across various digital platforms."
//     },
//     {
//       title: "Branding",
//       to: "/services/branding",
//       icon: <Award size={40} className="text-purple-700 mb-4"/>,
//       description: "Create a unique and memorable brand identity for your business."
//     },
//     {
//       title: "Content Creation",
//       to: "/services/content-creation",
//       icon: <PenTool size={40} className="text-purple-700 mb-4"/>,
//       description: "Engaging content that resonates with your target audience."
//     },
//     {
//       title: "Lead Generation",
//       to: "/services/lead-generation",
//       icon: <Target size={40} className="text-purple-700 mb-4"/>,
//       description: "Generate high-quality leads through targeted marketing strategies."
//     },
//     {
//       title: "Digital Promotions",
//       to: "/services/digital-promotions",
//       icon: <Zap size={40} className="text-purple-700 mb-4"/>,
//       description: "Innovative promotional campaigns to boost your digital presence."
//     },
//   ];

//   return (
//     <div className="bg-gray-50">

//       {/* HERO SECTION */}
//       <section className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-28">

//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

//           <div>
//             <h1 className="text-5xl font-bold mb-6">
//               Digital Services
//             </h1>

//             <p className="text-lg mb-8">
//               Grow your business online with powerful digital marketing
//               strategies including SEO, social media marketing, performance
//               advertising and lead generation.
//             </p>

//             <button className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
//               Get Marketing Strategy
//             </button>
//           </div>

//           <img
//             src="https://images.unsplash.com/photo-1557838923-2985c318be48"
//             alt="Digital Marketing"
//             className="rounded-xl shadow-xl"
//           />

//         </div>

//       </section>


//       {/* SERVICES */}
//       <section className="max-w-7xl mx-auto px-6 py-20">

//         <h2 className="text-3xl font-bold text-center mb-16">
//           Our Digital Services
//         </h2>

//         <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10">
//           {digitalSubServices.map((service, index) => (
//             <Link 
//               key={index} 
//               to={service.to}
//               className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition no-underline text-inherit block group"
//             >
//               <div className="group-hover:scale-110 transition-transform duration-300">
//                 {service.icon}
//               </div>
//               <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-700 transition-colors">
//                 {service.title}
//               </h3>
//               <p className="text-gray-600">
//                 {service.description}
//               </p>
//             </Link>
//           ))}
//         </div>

//       </section>


//       {/* MARKETING PROCESS */}
//       <section className="bg-white py-20">

//         <div className="max-w-7xl mx-auto px-6">

//           <h2 className="text-3xl font-bold text-center mb-16">
//             Our Marketing Process
//           </h2>

//           <div className="grid md:grid-cols-4 gap-10 text-center">

//             <div>
//               <h3 className="text-xl font-bold text-purple-700">1</h3>
//               <p>Market Research</p>
//             </div>

//             <div>
//               <h3 className="text-xl font-bold text-purple-700">2</h3>
//               <p>Strategy Planning</p>
//             </div>

//             <div>
//               <h3 className="text-xl font-bold text-purple-700">3</h3>
//               <p>Campaign Execution</p>
//             </div>

//             <div>
//               <h3 className="text-xl font-bold text-purple-700">4</h3>
//               <p>Analytics & Optimization</p>
//             </div>

//           </div>

//         </div>

//       </section>


//       {/* CTA */}
//       <section className="bg-gradient-to-r from-purple-700 to-pink-600 text-white text-center py-20">

//         <h2 className="text-3xl font-bold mb-4">
//           Ready to Grow Your Business Online?
//         </h2>

//         <p className="mb-6">
//           Partner with us for powerful digital marketing strategies.
//         </p>

//         <button className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
//           Contact Our Experts
//         </button>

//       </section>

//     </div>
//   );
// }

// export default DigitalMarketing;


import React from "react";
import { Link } from "react-router-dom";
import { Search, BarChart3, Megaphone, Users, Globe, PenTool, Target, Zap, Award, ArrowRight, CheckCircle, Sparkles } from "lucide-react";

function DigitalMarketing() {
  const digitalSubServices = [
    {
      title: "SEO Services",
      to: "/services/seo-services",
      icon: <Search size={40} className="text-purple-600 mb-4" />,
      description: "Improve search rankings and drive organic traffic to your website with data-driven optimization strategies."
    },
    {
      title: "SEM Marketing",
      to: "/services/sem-marketing",
      icon: <BarChart3 size={40} className="text-purple-600 mb-4" />,
      description: "Data-driven campaigns designed to maximize ROI and conversions through intelligent paid advertising."
    },
    {
      title: "Social Media Management",
      to: "/services/social-media-management",
      icon: <Globe size={40} className="text-purple-600 mb-4" />,
      description: "Build strong brand presence on platforms like Facebook, Instagram, and LinkedIn with strategic engagement."
    },
    {
      title: "Online Advertising",
      to: "/services/online-advertising",
      icon: <Megaphone size={40} className="text-purple-600 mb-4" />,
      description: "Targeted advertising across various digital platforms to reach your ideal audience effectively."
    },
    {
      title: "Branding",
      to: "/services/branding",
      icon: <Award size={40} className="text-purple-600 mb-4" />,
      description: "Create a unique and memorable brand identity that resonates with your target audience and stands out."
    },
    {
      title: "Content Creation",
      to: "/services/content-creation",
      icon: <PenTool size={40} className="text-purple-600 mb-4" />,
      description: "Engaging content that resonates with your target audience and drives meaningful interactions."
    },
    {
      title: "Lead Generation",
      to: "/services/lead-generation",
      icon: <Target size={40} className="text-purple-600 mb-4" />,
      description: "Generate high-quality leads through targeted marketing strategies and conversion optimization."
    },
    {
      title: "Digital Promotions",
      to: "/services/digital-promotions",
      icon: <Zap size={40} className="text-purple-600 mb-4" />,
      description: "Innovative promotional campaigns to boost your digital presence and accelerate business growth."
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Market Research",
      description: "Deep analysis of your industry, competitors, and target audience",
      icon: <Search size={32} className="text-purple-600" />
    },
    {
      number: "02",
      title: "Strategy Planning",
      description: "Custom roadmap designed for your unique business goals",
      icon: <BarChart3 size={32} className="text-purple-600" />
    },
    {
      number: "03",
      title: "Campaign Execution",
      description: "Precision implementation across all chosen channels",
      icon: <Zap size={32} className="text-purple-600" />
    },
    {
      number: "04",
      title: "Analytics & Optimization",
      description: "Continuous monitoring and improvement for maximum ROI",
      icon: <Award size={32} className="text-purple-600" />
    }
  ];

  const benefits = [
    "Increased online visibility and brand awareness",
    "Higher quality leads and better conversion rates",
    "Data-driven decisions with measurable results",
    "Scalable strategies that grow with your business"
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600 text-white py-32 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles size={16} />
                <span>Professional Digital Marketing Solutions</span>
              </div>
              
              <h1 className="text-6xl font-extrabold leading-tight">
                Digital Services
                <span className="block text-pink-200">That Drive Results</span>
              </h1>
              
              <p className="text-xl text-purple-100 leading-relaxed">
                Transform your business with powerful digital marketing strategies including SEO, social media marketing, 
                performance advertising, and lead generation that deliver measurable growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-white text-purple-700 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                  <span>Get Marketing Strategy</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>View Case Studies</span>
                </button>
              </div>
              
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-purple-200 text-sm">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-purple-200 text-sm">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">10K+</div>
                  <div className="text-purple-200 text-sm">Campaigns Run</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1557838923-2985c318be48"
                alt="Digital Marketing"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square border-4 border-white/20"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-purple-700 px-6 py-4 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">300%</div>
                <div className="text-sm text-gray-600">Average ROI Increase</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles size={16} />
            <span>Our Expertise</span>
          </div>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Our Digital Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive digital marketing solutions tailored to accelerate your business growth and maximize your online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {digitalSubServices.map((service, index) => (
            <Link 
              key={index} 
              to={service.to}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 no-underline text-inherit block border border-gray-100 hover:border-purple-200 hover:-translate-y-2"
            >
              <div className="bg-purple-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:scale-110 transition-all duration-300">
                <div className="group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
              <div className="mt-4 flex items-center text-purple-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                <span>Learn more</span>
                <ArrowRight size={16} className="ml-2" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="bg-gradient-to-br from-gray-900 to-purple-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                <CheckCircle size={16} />
                <span>Why Choose Us</span>
              </div>
              <h2 className="text-5xl font-extrabold mb-8">
                Results That Speak for Themselves
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our data-driven approach and proven strategies deliver measurable results thattransform your business.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl">
                    <CheckCircle size={24} className="text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center">
                <div className="text-5xl font-extrabold text-green-400 mb-2">300%</div>
                <div className="text-gray-300">Average ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center">
                <div className="text-5xl font-extrabold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Expert Team</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center">
                <div className="text-5xl font-extrabold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center">
                <div className="text-5xl font-extrabold text-blue-400 mb-2">100%</div>
                <div className="text-gray-300">Transparency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARKETING PROCESS */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles size={16} />
              <span>Our Process</span>
            </div>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
              Our Marketing Process
            </h2>
            <p className="text-xl text-gray-600">
              A proven four-step approach that ensures predictable, measurable results for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-200 to-pink-200 -z-10"></div>
                )}
                <div className="text-center bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-purple-300 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <div className="text-6xl font-extrabold text-purple-100 mb-4 absolute top-4 right-4 opacity-20">
                    {step.number}
                  </div>
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-purple-700 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium mb-8">
            <Sparkles size={20} />
            <span>Ready to Transform Your Business?</span>
          </div>
          
          <h2 className="text-6xl font-extrabold mb-8 leading-tight">
            Ready to Grow Your Business Online?
          </h2>
          
          <p className="text-2xl text-purple-100 mb-12 leading-relaxed">
            Partner with us for powerful digital marketing strategies that deliver measurable results and accelerate your growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-white text-purple-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-purple-50 transition-all duration-300 shadow-2xl hover:shadow-purple-300/50 flex items-center justify-center space-x-3">
              <span>Contact Our Experts</span>
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-3">
              <span>Free Consultation</span>
            </button>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-8 text-purple-200">
            <div className="flex items-center space-x-2">
              <CheckCircle size={20} />
              <span>Free Strategy Session</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={20} />
              <span>No Obligation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={20} />
              <span>Expert Advice</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA BAR */}
      {/* <section className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Let's Build Something Amazing Together</h3>
              <p className="text-gray-400">Get your free digital marketing audit today</p>
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg flex items-center space-x-2">
              <span>Get Started Now</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default DigitalMarketing;