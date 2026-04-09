import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import apiService from "../../api";
import { motion } from "framer-motion";
import { Calendar, User, ArrowLeft, Loader2, Tag, Share2, BookOpen, Hash } from "lucide-react";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    try {
      const res = await apiService.getBlogDetail(id);
      setBlog(res.data);
    } catch (error) {
      console.error("Error fetching blog detail:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return (
    <div className="min-h-screen bg-[#05070A] flex items-center justify-center">
      <Loader2 className="animate-spin text-blue-500" size={48} />
    </div>
  );

  if (!blog) return (
    <div className="min-h-screen bg-[#05070A] text-white flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Blog Post Not Found</h2>
      <Link to="/blog" className="text-blue-400 hover:underline flex items-center gap-2">
        <ArrowLeft size={20} /> Back to Blog
      </Link>
    </div>
  );

  return (
    <div className="bg-[#05070A] text-white min-h-screen pb-32">
      {/* HERO SECTION */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img 
          src={blog.image ? (blog.image.startsWith('http') ? blog.image : `http://127.0.0.1:8000${blog.image}`) : "https://images.unsplash.com/photo-1499750310107-5fef28a66643"} 
          className="w-full h-full object-cover"
          alt={blog.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-[#05070A]/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-16">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-blue-400 mb-8 font-bold hover:gap-3 transition-all">
              <ArrowLeft size={20} /> Back to Blog
            </Link>
            <div className="flex items-center gap-3 text-blue-400 text-sm font-bold uppercase tracking-widest mb-6">
              <Hash size={16} />
              <span>{blog.category || "General"}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-8 text-white/60 text-sm font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2"><User size={16} className="text-blue-400" /> {blog.author || "Siteforce Team"}</span>
              <span className="flex items-center gap-2"><Calendar size={16} className="text-blue-400" /> {new Date(blog.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-invert prose-blue max-w-none"
        >
          {/* Summary/Intro */}
          {blog.summary && (
            <p className="text-xl text-gray-300 font-medium leading-relaxed mb-12 italic border-l-4 border-blue-500 pl-6">
              {blog.summary}
            </p>
          )}

          {/* Main Content */}
          <div className="text-gray-300 text-lg leading-relaxed space-y-8 whitespace-pre-wrap">
            {blog.content}
          </div>
        </motion.div>

        {/* SHARE & NEXT */}
        <div className="mt-20 pt-10 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-white/40 uppercase tracking-widest">Share this post</span>
            <button className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition text-blue-400">
              <Share2 size={20} />
            </button>
          </div>
          <Link 
            to="/blog" 
            className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 font-bold hover:bg-white/10 transition"
          >
            More Posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
