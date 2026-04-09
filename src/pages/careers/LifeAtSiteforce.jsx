// import React from "react";
// import { motion } from "framer-motion";
// import { Users, Rocket, Lightbulb, HeartHandshake } from "lucide-react";

// function LifeAtSiteforce() {

// const culture = [
// {
// icon:<Users size={40}/>,
// title:"Collaborative Culture",
// desc:"Teams collaborate across HR, IT and digital services."
// },
// {
// icon:<Rocket size={40}/>,
// title:"Growth Opportunities",
// desc:"Work on impactful projects that accelerate your career."
// },
// {
// icon:<Lightbulb size={40}/>,
// title:"Innovation First",
// desc:"Creative thinking and innovative solutions are encouraged."
// },
// {
// icon:<HeartHandshake size={40}/>,
// title:"Supportive Team",
// desc:"A positive workplace where everyone grows together."
// }
// ];

// return(

// <section className="relative py-32 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white overflow-hidden">

// {/* animated background circles */}

// <div className="absolute w-96 h-96 bg-purple-600 opacity-20 blur-3xl -top-20 -left-20"></div>
// <div className="absolute w-96 h-96 bg-indigo-500 opacity-20 blur-3xl bottom-0 right-0"></div>

// <div className="max-w-7xl mx-auto px-6">

// {/* heading */}

// <motion.div
// initial={{opacity:0,y:40}}
// whileInView={{opacity:1,y:0}}
// transition={{duration:0.6}}
// className="text-center mb-20"
// >

// <h2 className="text-5xl font-bold mb-6">
// Life at <span className="text-purple-300">SiteForce</span>
// </h2>

// <p className="max-w-3xl mx-auto text-gray-200">
// We create an inspiring workplace where professionals innovate,
// collaborate and grow while solving real business challenges.
// </p>

// </motion.div>


// {/* culture cards */}

// <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">

// {culture.map((item,index)=>(
// <motion.div
// key={index}
// initial={{opacity:0,y:40}}
// whileInView={{opacity:1,y:0}}
// transition={{delay:index*0.2}}
// whileHover={{scale:1.08}}
// className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-xl"
// >

// <div className="mb-4 text-purple-300">
// {item.icon}
// </div>

// <h3 className="text-xl font-semibold mb-3">
// {item.title}
// </h3>

// <p className="text-gray-300 text-sm">
// {item.desc}
// </p>

// </motion.div>
// ))}

// </div>


// {/* stats */}

// <div className="grid md:grid-cols-4 gap-10 text-center mb-24">

// <motion.div whileHover={{scale:1.1}}>
// <h3 className="text-4xl font-bold text-purple-300">50+</h3>
// <p className="text-gray-300">Employees</p>
// </motion.div>

// <motion.div whileHover={{scale:1.1}}>
// <h3 className="text-4xl font-bold text-purple-300">200+</h3>
// <p className="text-gray-300">Clients</p>
// </motion.div>

// <motion.div whileHover={{scale:1.1}}>
// <h3 className="text-4xl font-bold text-purple-300">500+</h3>
// <p className="text-gray-300">Projects</p>
// </motion.div>

// <motion.div whileHover={{scale:1.1}}>
// <h3 className="text-4xl font-bold text-purple-300">10+</h3>
// <p className="text-gray-300">Years Experience</p>
// </motion.div>

// </div>


// {/* team gallery */}

// <div>

// <h3 className="text-3xl font-bold text-center mb-12">
// Our Team Moments
// </h3>

// <div className="grid md:grid-cols-3 gap-8">

// <motion.img
// whileHover={{scale:1.1}}
// src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
// className="rounded-xl h-64 object-cover w-full"
// />

// <motion.img
// whileHover={{scale:1.1}}
// src="https://images.unsplash.com/photo-1552664730-d307ca884978"
// className="rounded-xl h-64 object-cover w-full"
// />

// <motion.img
// whileHover={{scale:1.1}}
// src="https://images.unsplash.com/photo-1531482615713-2afd69097998"
// className="rounded-xl h-64 object-cover w-full"
// />

// </div>

// </div>

// </div>

// </section>

// )

// }

// export default LifeAtSiteforce;



import React from "react";
import { motion } from "framer-motion";
import { Users, Rocket, Lightbulb, HeartHandshake, Sparkles, TrendingUp, Award, Heart, Coffee, BookOpen, Globe, Star } from "lucide-react";

function LifeAtSiteforce() {
  const culture = [
    {
      icon: <Users size={40} />,
      title: "Collaborative Culture",
      desc: "Teams collaborate across HR, IT and digital services with open communication and shared success.",
      gradient: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-500/20"
    },
    {
      icon: <Rocket size={40} />,
      title: "Growth Opportunities",
      desc: "Work on impactful projects that accelerate your career with continuous learning and development.",
      gradient: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-500/20"
    },
    {
      icon: <Lightbulb size={40} />,
      title: "Innovation First",
      desc: "Creative thinking and innovative solutions are encouraged with cutting-edge technologies.",
      gradient: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-500/20"
    },
    {
      icon: <HeartHandshake size={40} />,
      title: "Supportive Team",
      desc: "A positive workplace where everyone grows together with mentorship and mutual support.",
      gradient: "from-rose-500 to-red-600",
      bgColor: "bg-rose-500/20"
    }
  ];

  const values = [
    { icon: <Star size={24} />, title: "Excellence", desc: "Deliver premium quality in everything" },
    { icon: <Heart size={24} />, title: "Integrity", desc: "Honest and transparent dealings" },
    { icon: <Users size={24} />, title: "Collaboration", desc: "Work together for shared success" },
    { icon: <Rocket size={24} />, title: "Innovation", desc: "Embrace creativity and new ideas" },
    { icon: <TrendingUp size={24} />, title: "Growth", desc: "Continuous learning and development" },
    { icon: <Globe size={24} />, title: "Impact", desc: "Make a difference globally" }
  ];

  const amenities = [
    { icon: <Coffee size={24} />, title: "Free Snacks & Drinks", desc: "Keep energy high" },
    { icon: <BookOpen size={24} />, title: "Learning Budget", desc: "Professional development" },
    { icon: <Users size={24} />, title: "Team Events", desc: "Regular gatherings & activities" },
    { icon: <Globe size={24} />, title: "Remote Work", desc: "Flexible working options" }
  ];

  const stats = [
    { number: "50+", label: "Employees", icon: <Users size={28} /> },
    { number: "200+", label: "Clients", icon: <Globe size={28} /> },
    { number: "500+", label: "Projects", icon: <Rocket size={28} /> },
    { number: "10+", label: "Years Experience", icon: <Award size={28} /> }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    "https://images.unsplash.com/photo-1552664730-d307ca884978",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998"
  ];

  return (
    <section className="relative py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white overflow-hidden">
      {/* Animated Background Circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 opacity-20 blur-3xl -top-20 -left-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 opacity-10 blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/20">
            <Sparkles size={18} />
            <span>Our Workplace Culture</span>
          </div>

          <h2 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
            Life at{" "}
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
              SiteForce
            </span>
          </h2>

          <p className="text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed">
            We create an inspiring workplace where professionals innovate, collaborate and grow while solving real business challenges with passion and purpose.
          </p>
        </motion.div>

        {/* Culture Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {culture.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all duration-300"
            >
              <div className={`${item.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <div className="text-white">{item.icon}</div>
              </div>

              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {item.title}
              </h3>

              <p className="text-gray-200 text-sm leading-relaxed">
                {item.desc}
              </p>

              <div className={`mt-6 h-1 w-12 bg-gradient-to-r ${item.gradient} rounded-full`}></div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-purple-400/30 group-hover:border-purple-400 transition-all">
                <div className="text-purple-300">{stat.icon}</div>
              </div>
              <h3 className="text-5xl font-extrabold bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-300 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Our Core Values</h3>
            <p className="text-gray-300 text-lg">Principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-500 w-12 h-12 rounded-xl flex items-center justify-center text-white">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{value.title}</h4>
                    <p className="text-gray-400 text-sm">{value.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Gallery */}
        <div className="mb-24">
          <h3 className="text-5xl font-extrabold text-center mb-12">
            Our Team{" "}
            <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
              Moments
            </span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="group relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src={image}
                  alt={`Team moment ${index + 1}`}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-semibold">Amazing Team Culture</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Amenities */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Workplace Amenities</h3>
            <p className="text-gray-300 text-lg">Everything you need to thrive at work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-purple-400/30 group-hover:scale-110 transition-all">
                  <div className="text-purple-300">{amenity.icon}</div>
                </div>
                <h4 className="text-lg font-bold mb-2">{amenity.title}</h4>
                <p className="text-gray-400 text-sm">{amenity.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-4xl font-bold mb-6">Ready to Join Our Team?</h3>
          <p className="text-gray-300 text-lg mb-8">Be part of something amazing and grow your career with us</p>
          <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center space-x-3 mx-auto">
            <span>View Open Positions</span>
            <Rocket size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default LifeAtSiteforce;