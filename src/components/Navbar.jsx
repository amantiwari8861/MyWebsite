import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { menuItems } from "../data/menuItems.jsx";
import { ChevronDown, Menu, X, User, LogOut, Settings, ExternalLink, Globe, Briefcase, GraduationCap, Monitor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  const closeMenus = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-slate-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenus}
            className="flex items-center space-x-3 no-underline group"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex flex-col"
            >
              <img src="logo.png" alt="" className="" width={"150px"} height={"80px"}/>
            </motion.div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className={`relative px-4 py-2 text-sm font-semibold transition-all no-underline group ${
                isActive("/") ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
              }`}
            >
              <span>Home</span>
              {isActive("/") && (
                <motion.div 
                  layoutId="navUnderline"
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 rounded-full"
                />
              )}
            </Link>

            {Object.entries(menuItems).map(([key, item]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center space-x-1.5 px-4 py-2 text-sm font-semibold transition-all bg-transparent border-none cursor-pointer ${
                    activeDropdown === key || isActive(item.to)
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-blue-600"
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      activeDropdown === key ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === key && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className={`absolute top-full left-0 pt-3 z-50 ${
                        item.isMega ? "w-[800px]" : "w-72"
                      }`}
                    >
                      <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                        <div className={`p-4 ${item.isMega ? "grid grid-cols-3 gap-6 p-8" : "space-y-1"}`}>
                          {item.isMega ? (
                            item.sections.map((section, idx) => (
                              <div key={idx} className="space-y-4">
                                <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] px-3">
                                  {section.title}
                                </h3>
                                <div className="space-y-1">
                                  {section.links.map((link) => (
                                    <Link
                                      key={link.to}
                                      to={link.to}
                                      onClick={closeMenus}
                                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-slate-50 transition-all group/item no-underline"
                                    >
                                      <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover/item:bg-blue-50 group-hover/item:text-blue-600 transition-all">
                                        {link.icon}
                                      </div>
                                      <div className="flex flex-col">
                                        <span className="text-sm font-bold text-slate-700 group-hover/item:text-blue-600 transition-colors">
                                          {link.name}
                                        </span>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))
                          ) : (
                            item.links.map((link) => (
                              <Link
                                key={link.to}
                                to={link.to}
                                onClick={closeMenus}
                                className="flex items-center space-x-4 p-3 rounded-xl hover:bg-slate-50 transition-all group/item no-underline"
                              >
                                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover/item:bg-blue-50 group-hover/item:text-blue-600 transition-all">
                                  {link.icon}
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-sm font-bold text-slate-700 group-hover/item:text-blue-600 transition-colors">
                                    {link.name}
                                  </span>
                                  {link.description && (
                                    <span className="text-[11px] text-slate-400">
                                      {link.description}
                                    </span>
                                  )}
                                </div>
                              </Link>
                            ))
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link
              to="/about-siteforce"
              className={`relative px-4 py-2 text-sm font-semibold transition-all no-underline ${
                isActive("/about-siteforce") ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
              }`}
            >
              <span>About</span>
              {isActive("/about-siteforce") && (
                <motion.div 
                  layoutId="navUnderline"
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 rounded-full"
                />
              )}
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center space-x-6">
            <div className="hidden sm:flex items-center space-x-4">
              {user ? (
                <div className="relative" ref={userMenuRef}>
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-3 bg-white border border-slate-200 hover:border-blue-200 px-3 py-1.5 rounded-full transition-all cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-[11px] font-bold shadow-inner">
                      {user.username.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-xs font-bold text-slate-700 hidden md:block">
                      {user.username}
                    </span>
                    <ChevronDown
                      size={14}
                      className={`text-slate-400 transition-transform duration-300 ${
                        isUserMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isUserMenuOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 mt-3 w-56 bg-white border border-slate-100 shadow-2xl shadow-slate-200/50 rounded-2xl z-50 overflow-hidden"
                      >
                        <div className="p-2 space-y-0.5">
                          <Link
                            to="/profile"
                            onClick={() => setIsUserMenuOpen(false)}
                            className="flex items-center space-x-3 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-xl transition-all no-underline"
                          >
                            <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                              <User size={16} />
                            </div>
                            <span>Profile</span>
                          </Link>
                          <Link
                            to="/settings"
                            onClick={() => setIsUserMenuOpen(false)}
                            className="flex items-center space-x-3 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-xl transition-all no-underline"
                          >
                            <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                              <Settings size={16} />
                            </div>
                            <span>Settings</span>
                          </Link>
                          <div className="h-[1px] bg-slate-100 my-1 mx-2"></div>
                          <button
                            onClick={() => {
                              logout();
                              setIsUserMenuOpen(false);
                            }}
                            className="flex items-center space-x-3 w-full px-4 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50 rounded-xl transition-all border-none cursor-pointer text-left"
                          >
                            <div className="w-8 h-8 rounded-lg bg-red-50/50 flex items-center justify-center text-red-400">
                              <LogOut size={16} />
                            </div>
                            <span>Sign Out</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-all no-underline"
                >
                  Sign In
                </Link>
              )}
            </div>

            <Link
              to="/contact-us"
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white transition-all bg-blue-600 rounded-full hover:bg-blue-700 shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5 active:translate-y-0 no-underline"
            >
              Contact Us
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              className="lg:hidden p-2 text-slate-700 bg-slate-100/50 hover:bg-slate-100 rounded-xl transition-all border-none cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-8 space-y-8 max-h-[80vh] overflow-y-auto">
              <Link
                to="/"
                onClick={closeMenus}
                className={`block text-xl font-black no-underline ${isActive("/") ? "text-blue-600" : "text-slate-900"}`}
              >
                Home
              </Link>

              {Object.entries(menuItems).map(([key, item]) => (
                <div key={key} className="space-y-4">
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                    {item.label}
                  </div>
                  <div className="grid grid-cols-1 gap-2 pl-2">
                    {item.links.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={closeMenus}
                        className="flex items-center space-x-3 py-2 text-slate-700 font-bold no-underline hover:text-blue-600 transition-colors"
                      >
                        <span className="text-slate-400 group-hover:text-blue-600">{link.icon}</span>
                        <span>{link.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <Link
                to="/about-siteforce"
                onClick={closeMenus}
                className={`block text-xl font-black no-underline ${isActive("/about-siteforce") ? "text-blue-600" : "text-slate-900"}`}
              >
                About
              </Link>

              <div className="pt-8 border-t border-slate-100 flex flex-col space-y-4">
                {user ? (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-2xl">
                      <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-lg font-bold">
                        {user.username.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-slate-900">
                          {user.username}
                        </span>
                        <span className="text-xs text-slate-500">
                          View Profile
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Link
                        to="/profile"
                        onClick={closeMenus}
                        className="text-center py-3 bg-slate-50 rounded-xl text-sm font-bold text-slate-700 no-underline"
                      >
                        Profile
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          closeMenus();
                        }}
                        className="text-center py-3 bg-red-50 rounded-xl text-sm font-bold text-red-500 border-none cursor-pointer"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    onClick={closeMenus}
                    className="block w-full text-center py-4 bg-slate-50 rounded-2xl text-slate-900 font-bold no-underline"
                  >
                    Sign In to Account
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
