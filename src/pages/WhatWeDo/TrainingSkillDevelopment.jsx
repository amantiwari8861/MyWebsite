// import React from "react";
// import { Link } from "react-router-dom";
// import { GraduationCap, Users, Laptop, BookOpen, Monitor, Phone, Presentation, Briefcase } from "lucide-react";

// function TrainingSkillDevelopment() {
//   const trainingSubServices = [
//     {
//       title: "IT Training",
//       to: "/services/it-training",
//       icon: <Laptop size={40} className="text-green-700 mb-4"/>,
//       description: "Professional IT training in various technologies and frameworks."
//     },
//     {
//       title: "Software Training",
//       to: "/services/software-training",
//       icon: <Monitor size={40} className="text-green-700 mb-4"/>,
//       description: "Comprehensive training for software development and tools."
//     },
//     {
//       title: "Call Center Training",
//       to: "/services/call-center-training",
//       icon: <Phone size={40} className="text-green-700 mb-4"/>,
//       description: "Essential skills for customer support and call center operations."
//     },
//     {
//       title: "Corporate Training",
//       to: "/corporate-training",
//       icon: <Briefcase size={40} className="text-green-700 mb-4"/>,
//       description: "Customized training solutions for corporate workforce development."
//     },
//     {
//       title: "Skills Development",
//       to: "/services/skill-development",
//       icon: <BookOpen size={40} className="text-green-700 mb-4"/>,
//       description: "Programs to enhance technical and professional skills."
//     },
//     {
//       title: "Workshops",
//       to: "/services/workshops",
//       icon: <Presentation size={40} className="text-green-700 mb-4"/>,
//       description: "Interactive workshops on emerging industry trends."
//     },
//     {
//       title: "Seminars",
//       to: "/services/seminars",
//       icon: <Users size={40} className="text-green-700 mb-4"/>,
//       description: "Insightful seminars led by industry experts."
//     },
//     {
//       title: "Internship Programs",
//       to: "/early-careers",
//       icon: <GraduationCap size={40} className="text-green-700 mb-4"/>,
//       description: "Hands-on experience for students and early career professionals."
//     },
//   ];

//   return (
//     <div className="bg-gray-50">

//       {/* HERO */}
//       <section className="bg-gradient-to-r from-green-700 to-teal-600 text-white py-28">

//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

//           <div>
//             <h1 className="text-5xl font-bold mb-6">
//               Training & Development
//             </h1>

//             <p className="text-lg mb-8">
//               Empower your workforce with professional training programs
//               designed to enhance technical skills, leadership abilities,
//               and business productivity.
//             </p>

//             <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
//               Explore Training
//             </button>
//           </div>

//           <img
//             src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
//             alt="Training"
//             className="rounded-xl shadow-xl"
//           />

//         </div>

//       </section>


//       {/* TRAINING PROGRAMS */}
//       <section className="max-w-7xl mx-auto px-6 py-20">

//         <h2 className="text-3xl font-bold text-center mb-16">
//           Our Training Programs
//         </h2>

//         <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10">
//           {trainingSubServices.map((service, index) => (
//             <Link 
//               key={index} 
//               to={service.to}
//               className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition no-underline text-inherit block group"
//             >
//               <div className="group-hover:scale-110 transition-transform duration-300">
//                 {service.icon}
//               </div>
//               <h3 className="text-xl font-semibold mb-3 group-hover:text-green-700 transition-colors">
//                 {service.title}
//               </h3>
//               <p className="text-gray-600">
//                 {service.description}
//               </p>
//             </Link>
//           ))}
//         </div>

//       </section>


//       {/* LEARNING PROCESS */}
//       <section className="bg-white py-20">

//         <div className="max-w-7xl mx-auto px-6">

//           <h2 className="text-3xl font-bold text-center mb-16">
//             Our Learning Approach
//           </h2>

//           <div className="grid md:grid-cols-4 gap-10 text-center">

//             <div>
//               <h3 className="text-xl font-bold text-green-700">1</h3>
//               <p>Skill Assessment</p>
//             </div>

//             <div>
//               <h3 className="text-xl font-bold text-green-700">2</h3>
//               <p>Customized Training</p>
//             </div>

//             <div>
//               <h3 className="text-xl font-bold text-green-700">3</h3>
//               <p>Practical Learning</p>
//             </div>

//             <div>
//               <h3 className="text-xl font-bold text-green-700">4</h3>
//               <p>Certification & Growth</p>
//             </div>

//           </div>

//         </div>

//       </section>


//       {/* BENEFITS */}
//       <section className="bg-gray-100 py-20">

//         <div className="max-w-7xl mx-auto px-6">

//           <h2 className="text-3xl font-bold text-center mb-16">
//             Benefits of Our Training
//           </h2>

//           <div className="grid md:grid-cols-2 gap-10">

//             <div className="bg-white p-6 rounded-lg shadow">
//               ✔ Industry-relevant skill development
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow">
//               ✔ Experienced trainers & mentors
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow">
//               ✔ Hands-on practical learning
//             </div>

//             <div className="bg-white p-6 rounded-lg shadow">
//               ✔ Certification programs
//             </div>

//           </div>

//         </div>

//       </section>


//       {/* CTA */}
//       <section className="bg-gradient-to-r from-green-700 to-teal-600 text-white text-center py-20">

//         <h2 className="text-3xl font-bold mb-4">
//           Upgrade Your Skills Today
//         </h2>

//         <p className="mb-6">
//           Join our professional training programs and grow your career.
//         </p>

//         <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
//           Enroll Now
//         </button>

//       </section>

//     </div>
//   );
// }

// export default TrainingSkillDevelopment;


import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Users, Laptop, BookOpen, Monitor, Phone, Presentation, Briefcase, ArrowRight, CheckCircle, Sparkles, TrendingUp, Award, Clock } from "lucide-react";

function TrainingSkillDevelopment() {
  const trainingSubServices = [
    {
      title: "IT Training",
      to: "/services/it-training",
      icon: <Laptop size={40} className="text-green-600 mb-4" />,
      description: "Professional IT training in various technologies and frameworks with hands-on projects."
    },
    {
      title: "Software Training",
      to: "/services/software-training",
      icon: <Monitor size={40} className="text-green-600 mb-4" />,
      description: "Comprehensive training for software development, tools, and best industry practices."
    },
    {
      title: "Call Center Training",
      to: "/services/call-center-training",
      icon: <Phone size={40} className="text-green-600 mb-4" />,
      description: "Essential skills for customer support, communication, and call center operations excellence."
    },
    {
      title: "Corporate Training",
      to: "/corporate-training",
      icon: <Briefcase size={40} className="text-green-600 mb-4" />,
      description: "Customized training solutions for corporate workforce development and organizational growth."
    },
    {
      title: "Skills Development",
      to: "/services/skill-development",
      icon: <BookOpen size={40} className="text-green-600 mb-4" />,
      description: "Programs to enhance technical and professional skills for career advancement."
    },
    {
      title: "Workshops",
      to: "/services/workshops",
      icon: <Presentation size={40} className="text-green-600 mb-4" />,
      description: "Interactive workshops on emerging industry trends with practical applications."
    },
    {
      title: "Seminars",
      to: "/services/seminars",
      icon: <Users size={40} className="text-green-600 mb-4" />,
      description: "Insightful seminars led by industry experts sharing real-world insights and knowledge."
    },
    {
      title: "Internship Programs",
      to: "/early-careers",
      icon: <GraduationCap size={40} className="text-green-600 mb-4" />,
      description: "Hands-on experience for students and early career professionals with mentorship."
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Skill Assessment",
      description: "Comprehensive evaluation of current skills and learning gaps",
      icon: <TrendingUp size={32} className="text-green-600" />
    },
    {
      number: "02",
      title: "Customized Training",
      description: "Personalized curriculum designed for your specific goals",
      icon: <BookOpen size={32} className="text-green-600" />
    },
    {
      number: "03",
      title: "Practical Learning",
      description: "Hands-on projects and real-world applications",
      icon: <Laptop size={32} className="text-green-600" />
    },
    {
      number: "04",
      title: "Certification & Growth",
      description: "Industry-recognized certification and career support",
      icon: <Award size={32} className="text-green-600" />
    }
  ];

  const benefits = [
    {
      title: "Industry-Relevant Skills",
      description: "Learn cutting-edge technologies and practices that employers demand",
      icon: <TrendingUp size={28} className="text-green-600" />
    },
    {
      title: "Expert Mentors",
      description: "Learn from experienced professionals with real-world expertise",
      icon: <Users size={28} className="text-green-600" />
    },
    {
      title: "Hands-On Practice",
      description: "Work on live projects and build a strong portfolio",
      icon: <Laptop size={28} className="text-green-600" />
    },
    {
      title: "Certification Programs",
      description: "Earn industry-recognized certificates to boost your career",
      icon: <Award size={28} className="text-green-600" />
    },
    {
      title: "Flexible Learning",
      description: "Online and offline options with flexible scheduling",
      icon: <Clock size={28} className="text-green-600" />
    },
    {
      title: "Career Support",
      description: "Job placement assistance and interview preparation",
      icon: <Briefcase size={28} className="text-green-600" />
    }
  ];

  const stats = [
    { number: "10,000+", label: "Students Trained" },
    { number: "500+", label: "Corporate Clients" },
    { number: "95%", label: "Placement Rate" },
    { number: "50+", label: "Expert Trainers" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-600 to-teal-500 text-white py-32 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles size={16} />
                <span>Professional Training & Development</span>
              </div>
              
              <h1 className="text-6xl font-extrabold leading-tight">
                Training &
                <span className="block text-teal-200">Skill Development</span>
              </h1>
              
              <p className="text-xl text-green-100 leading-relaxed">
                Empower your workforce with professional training programs designed to enhance technical skills, 
                leadership abilities, and business productivity with industry-expert mentors.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-white text-green-700 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                  <span>Explore Training</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Schedule Consultation</span>
                </button>
              </div>
              
              <div className="flex items-center space-x-8 pt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold">{stat.number}</div>
                    <div className="text-green-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                alt="Training"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square border-4 border-white/20"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-green-700 px-6 py-4 rounded-2xl shadow-xl">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-gray-600">Placement Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles size={16} />
            <span>Our Programs</span>
          </div>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Our Training Programs
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive training solutions tailored to accelerate your professional growth and mastery of cutting-edge skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainingSubServices.map((service, index) => (
            <Link 
              key={index} 
              to={service.to}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 no-underline text-inherit block border border-gray-100 hover:border-green-200 hover:-translate-y-2"
            >
              <div className="bg-green-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300">
                <div className="group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
              <div className="mt-4 flex items-center text-green-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                <span>Learn more</span>
                <ArrowRight size={16} className="ml-2" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="bg-gradient-to-br from-gray-900 to-green-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle size={16} />
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-5xl font-extrabold mb-6">
              Benefits of Our Training
            </h2>
            <p className="text-xl text-gray-300">
              Experience world-class training that transforms your career with proven results and expert guidance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-green-400/50 hover:bg-white/10 transition-all duration-300 group">
                <div className="bg-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING PROCESS */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles size={16} />
              <span>Our Process</span>
            </div>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
              Our Learning Approach
            </h2>
            <p className="text-xl text-gray-600">
              A proven four-step methodology that ensures optimal learning outcomes and career success.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-green-200 to-teal-200 -z-10"></div>
                )}
                <div className="text-center bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-green-300 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-green-600 to-teal-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <div className="text-6xl font-extrabold text-green-100 mb-4 absolute top-4 right-4 opacity-20">
                    {step.number}
                  </div>
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-green-700 mb-3">
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
      <section className="relative bg-gradient-to-br from-green-800 via-green-600 to-teal-500 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium mb-8">
            <Sparkles size={20} />
            <span>Start Your Learning Journey</span>
          </div>
          
          <h2 className="text-6xl font-extrabold mb-8 leading-tight">
            Upgrade Your Skills Today
          </h2>
          
          <p className="text-2xl text-green-100 mb-12 leading-relaxed">
            Join our professional training programs and grow your career with industry-leading education and mentorship.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-white text-green-700 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-2xl hover:shadow-green-300/50 flex items-center justify-center space-x-3">
              <span>Enroll Now</span>
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-3">
              <span>Free Consultation</span>
            </button>
          </div>
          
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-green-200">
            <div className="flex items-center space-x-2">
              <CheckCircle size={20} />
              <span>Free Assessment</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={20} />
              <span>No Obligation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={20} />
              <span>Expert Guidance</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle size={20} />
              <span>Flexible Options</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA BAR */}
      {/* <section className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Transform Your Career with Expert Training</h3>
              <p className="text-gray-400">Get your free learning path consultation today</p>
            </div>
            <button className="bg-gradient-to-r from-green-600 to-teal-600 px-8 py-4 rounded-xl font-bold hover:from-green-700 hover:to-teal-700 transition-all duration-300 shadow-lg flex items-center space-x-2">
              <span>Get Started Now</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default TrainingSkillDevelopment;