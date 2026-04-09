import React, { useEffect, useState } from "react";
import apiService from "../../api";
import { motion, AnimatePresence } from "framer-motion";
import { User, Calendar, ArrowRight, Search, Loader2, BookOpen, Hash } from "lucide-react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await apiService.getBlogs();
      setBlogs(res.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const filtered = blogs.filter(item => 
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return (
    <div className="min-h-screen bg-[#05070A] flex items-center justify-center">
      <Loader2 className="animate-spin text-blue-500" size={48} />
    </div>
  );

  return (
    <div className="bg-[#05070A] text-white min-h-screen pb-20">
      
      {/* HERO */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            The Siteforce <span className="text-blue-500">Blog</span>
          </motion.h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Insights, tutorials, and stories from the people building 
            the future of enterprise technology.
          </p>
        </div>
      </section>

      {/* SEARCH */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          <input 
            type="text"
            placeholder="Search by title or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 focus:outline-none focus:border-blue-500/50 transition-colors"
          />
        </div>
      </div>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col bg-white/5 border border-white/10 rounded-[32px] overflow-hidden hover:bg-white/[0.08] transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image ? (item.image.startsWith('http') ? item.image : `http://127.0.0.1:8000${item.image}`) : "https://images.unsplash.com/photo-1499750310107-5fef28a66643"} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="flex items-center gap-1 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      <Hash size={10} /> {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col grow">
                  <div className="flex items-center gap-4 text-white/40 text-[10px] font-bold uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-1"><User size={12} /> {item.author}</span>
                    <span className="flex items-center gap-1"><Calendar size={12} /> {new Date(item.created_at).toLocaleDateString()}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-blue-300 transition-colors leading-tight line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">
                    {item.summary}
                  </p>
                  
                  <Link 
                    to={`/blog/${item.id}`}
                    className="mt-auto flex items-center gap-2 text-blue-400 font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <BookOpen size={64} className="mx-auto text-gray-700 mb-4" />
            <p className="text-gray-500">No blog posts found.</p>
          </div>
        )}
      </section>

    </div>
  );
};

export default Blog;
