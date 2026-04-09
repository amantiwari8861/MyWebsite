import React, { useState } from 'react';
import { Search, MapPin, Building2, Clock, DollarSign, Briefcase, Users, Globe } from 'lucide-react';

const Recruitment = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const jobCategories = ['All', 'Engineering', 'Design', 'Marketing', 'Sales', 'Operations'];

  const stats = [
    { icon: Briefcase, label: 'Open Positions', value: '24+', color: 'bg-blue-500' },
    { icon: Users, label: 'Team Members', value: '150+', color: 'bg-green-500' },
    { icon: Globe, label: 'Countries', value: '12', color: 'bg-purple-500' },
    { icon: Clock, label: 'Years Active', value: '8+', color: 'bg-orange-500' },
  ];

  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$120k - $160k',
      posted: '2 days ago',
      description: 'We\'re looking for an experienced React developer to join our team.',
      tags: ['React', 'TypeScript', 'Tailwind'],
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$100k - $140k',
      posted: '3 days ago',
      description: 'Create beautiful and intuitive user experiences for our products.',
      tags: ['Figma', 'Design Systems', 'Prototyping'],
    },
    {
      id: 3,
      title: 'Product Marketing Manager',
      department: 'Marketing',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$130k - $170k',
      posted: '1 week ago',
      description: 'Lead go-to-market strategies for our flagship products.',
      tags: ['B2B', 'SaaS', 'Growth'],
    },
    {
      id: 4,
      title: 'Full Stack Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$140k - $180k',
      posted: '5 days ago',
      description: 'Build scalable backend services and responsive frontend applications.',
      tags: ['Node.js', 'React', 'PostgreSQL'],
    },
    {
      id: 5,
      title: 'Customer Success Manager',
      department: 'Sales',
      location: 'London, UK',
      type: 'Full-time',
      salary: '£60k - £80k',
      posted: '1 day ago',
      description: 'Ensure customer satisfaction and drive retention.',
      tags: ['Customer Relations', 'SaaS', 'Communication'],
    },
    {
      id: 6,
      title: 'Operations Coordinator',
      department: 'Operations',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$70k - $90k',
      posted: '4 days ago',
      description: 'Streamline operations and support team efficiency.',
      tags: ['Project Management', 'Process Improvement'],
    },
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || job.department === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Build the future with us. We're looking for talented individuals who are passionate about creating exceptional products.
            </p>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3" />
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-blue-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="md:col-span-2">
              <div className="flex flex-wrap gap-2">
                {jobCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Jobs Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900">
            Open Positions ({filteredJobs.length})
          </h2>
          <div className="text-slate-600">
            Showing {filteredJobs.length} of {jobs.length} jobs
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-md border border-slate-200 p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-slate-600 text-sm mt-1">{job.department}</p>
                </div>
              </div>

              <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                {job.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Job Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-slate-600">
                  <MapPin className="w-4 h-4 mr-2 text-slate-400" />
                  {job.location}
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <Briefcase className="w-4 h-4 mr-2 text-slate-400" />
                  {job.type}
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <DollarSign className="w-4 h-4 mr-2 text-slate-400" />
                  {job.salary}
                </div>
                <div className="flex items-center text-sm text-slate-500">
                  <Clock className="w-4 h-4 mr-2 text-slate-400" />
                  {job.posted}
                </div>
              </div>

              {/* Apply Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg group-hover:bg-blue-700">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-16">
            <Building2 className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No jobs found</h3>
            <p className="text-slate-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't See Your Perfect Role?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
            Submit Your Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;