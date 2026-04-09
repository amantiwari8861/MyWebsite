import React from 'react';
import { Users, Briefcase, DollarSign, TrendingUp, Shield, Train, UsersRound, Calendar, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const HRServices = () => {
  const services = [
    {
      icon: Briefcase,
      title: 'Recruitment & Staffing',
      description: 'End-to-end recruiting solutions including talent sourcing, screening, interviewing, and onboarding of top-tier candidates.',
      features: ['Tech Recruiting', 'Executive Search', 'Contract Staffing', 'RPO Solutions'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
    },
    {
      icon: Users,
      title: 'Employee Management',
      description: 'Comprehensive employee lifecycle management from onboarding to offboarding with performance tracking.',
      features: ['Onboarding', 'Performance Reviews', 'Employee Engagment', 'Offboarding'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
    },
    {
      icon: DollarSign,
      title: 'Payroll & Compensation',
      description: 'Accurate and timely payroll processing with compliance management and competitive compensation structures.',
      features: ['Payroll Processing', 'Benefits Administration', 'Tax Compliance', 'Salary Benchmarking'],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
    },
    {
      icon: Train,
      title: 'Training & Development',
      description: 'Professional development programs and training solutions to enhance employee skills and career growth.',
      features: ['Leadership Training', 'Skill Development', 'Workshops', 'E-Learning Programs'],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
    },
    {
      icon: Shield,
      title: 'Compliance & Legal',
      description: 'HR compliance management and legal support to ensure your organization meets all regulatory requirements.',
      features: ['Labor Law Compliance', 'Policy Development', 'Risk Management', 'Legal Advisory'],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
    },
    {
      icon: TrendingUp,
      title: 'HR Analytics & Consulting',
      description: 'Data-driven HR insights and strategic consulting to optimize workforce performance and organizational efficiency.',
      features: ['Workforce Analytics', 'HR Strategy', 'Organizational Design', 'Change Management'],
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600',
    },
  ];

  const benefits = [
    { icon: CheckCircle, text: '24/7 Support Available' },
    { icon: CheckCircle, text: 'Expert HR Professionals' },
    { icon: CheckCircle, text: 'Compliance Guaranteed' },
    { icon: CheckCircle, text: 'Customized Solutions' },
    { icon: CheckCircle, text: 'Cost-Effective Pricing' },
    { icon: CheckCircle, text: 'Proven Track Record' },
  ];

  const stats = [
    { value: '500+', label: 'Clients Served' },
    { value: '50,000+', label: 'Placements Made' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '15+', label: 'Years Experience' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              HR Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Comprehensive HR solutions to help your business thrive. From recruitment to compliance, we handle it all so you can focus on growth.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-blue-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our HR Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Complete range of professional HR services tailored to meet your organization's unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-2xl hover:translate-y-[-8px] transition-all duration-300 group"
            >
              {/* Icon Header */}
              <div className={`bg-gradient-to-r ${service.color} p-6`}>
                <service.icon className="w-12 h-12 text-white" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className={`w-2 h-2 rounded-full ${service.color.replace('from', 'bg').split(' ')[0]} mr-3 flex-shrink-0`}></div>
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <button className={`w-full ${service.bgColor} ${service.textColor} font-semibold py-3 px-4 rounded-xl hover:opacity-80 transition-all duration-200 flex items-center justify-center group`}>
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Why Choose Our HR Services?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                We combine decades of experience with cutting-edge technology to deliver HR solutions that drive real business results.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <benefit.icon className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-200">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Ready to Get Started?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 bg-white/10 rounded-xl p-4">
                  <Phone className="w-6 h-6 text-green-400" />
                  <div>
                    <div className="text-sm text-slate-300">Call Us</div>
                    <div className="font-semibold">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 bg-white/10 rounded-xl p-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <div>
                    <div className="text-sm text-slate-300">Email Us</div>
                    <div className="font-semibold">hr@company.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 bg-white/10 rounded-xl p-4">
                  <MapPin className="w-6 h-6 text-purple-400" />
                  <div>
                    <div className="text-sm text-slate-300">Visit Us</div>
                    <div className="font-semibold">123 Business St, NYC</div>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 bg-white text-slate-900 font-semibold py-4 rounded-xl hover:bg-slate-100 transition-all duration-200">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your HR Operations Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let us handle the complexities of HR while you focus on what matters most—growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              Get a Free Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-xl transition-all duration-200">
              View Pricing Plans
            </button>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="bg-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 text-sm">
            Trusted by 500+ companies worldwide • ISO 27001 Certified • GDPR Compliant
          </p>
        </div>
      </div>
    </div>
  );
};

export default HRServices;