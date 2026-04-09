import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/siteforce_app';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiService = {
  // Contact Form
  submitContact: (data) => apiClient.post('/contact/', data),

  // Job Application
  submitApplication: (formData) => apiClient.post('/apply/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }),

  // Industries
  getIndustries: (page = 1) => apiClient.get(`/industries/?page=${page}`),

  // Services
  getServices: () => apiClient.get('/services/'),

  // Jobs
  getJobs: (params) => apiClient.get('/jobs/', { params }),

  // Employee Benefits
  getBenefits: () => apiClient.get('/benefits/'),

  // Internship Programs
  getInternshipPrograms: () => apiClient.get('/internship-programs/'),

  // Hiring Process
  getHiringProcess: () => apiClient.get('/hiring-process/'),

  // On-Demand Developers
  getOnDemandDevelopers: () => apiClient.get('/on-demand/'),

  // Enquiry Form
  submitEnquiry: (data) => apiClient.post('/enquiry/', data),

  // Banner
  getBanner: () => apiClient.get('/banner/'),

  // Clients
  getClients: () => apiClient.get('/clients/'),

  // Trainings
  getTrainings: () => apiClient.get('/trainings/'),

  // Why Choose Us
  getWhyChooseUs: () => apiClient.get('/why-choose-us/'),

  // Case Studies
  getCaseStudies: (params) => apiClient.get('/case-studies/', { params }),
  getCaseStudyDetail: (id) => apiClient.get(`/case-studies/${id}/`),

  // Insights
  getInsights: (params) => apiClient.get('/insights/', { params }),
  getFeaturedInsights: () => apiClient.get('/insights/featured/'),
  getInsightDetail: (id) => apiClient.get(`/insights/${id}/`),

  // Newsletter
  subscribeNewsletter: (data) => apiClient.post('/newsletter/', data),

  // Resources (News, Reports, Papers, Trends, Articles)
  getResources: (type) => apiClient.get('/resources/', { params: { type } }),

  // Blogs
  getBlogs: () => apiClient.get('/blogs/'),
  getBlogDetail: (id) => apiClient.get(`/blogs/${id}/`),

  // Page Content & Hero
  getPageHero: (page) => apiClient.get('/page-hero/', { params: { page } }),
  getPageContent: (page) => apiClient.get('/page-content/', { params: { page } }),

  // Team & Gallery
  getTeam: () => apiClient.get('/team/'),
  getGallery: () => apiClient.get('/gallery/'),

  // Unified Software/Website Page Data

  getSoftwarePageData: (page = 'software') => apiClient.get(`/software-page/?page=${page}`),

  // Unified Training Page Data
  getTrainingPageData: (page = 'it_training') => apiClient.get(`/training-page/?page=${page}`),

  // About Page
  getAboutPageData: () => apiClient.get('/about-page/'),
};

export default apiService;
