"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

export default function Navbar() {
  const [shadow, setShadow] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const lastScrollYRef = useRef(0);
  const [progressWidth, setProgressWidth] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setShadow(currentScrollY > 10);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollYRef.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
      setLastScrollY(currentScrollY);

      const documentElement = document.documentElement;
      const totalScrollable =
        documentElement.scrollHeight - window.innerHeight;
      const percentage =
        totalScrollable > 0
          ? Math.min((currentScrollY / totalScrollable) * 100, 100)
          : 0;
      setProgressWidth(percentage);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Initialize on mount to set initial progress
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <AnimatePresence>
      <motion.header
        className={`w-full bg-white/90 backdrop-blur-md fixed top-0 z-50 transition-all duration-300 border-b border-sky-100/50 ${
          shadow ? "shadow-lg shadow-sky-100/50" : ""
        }`}
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Left: Logo/Name with Animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="font-bold text-xl bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent hover:from-sky-700 hover:to-indigo-700 transition-all duration-300"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Ankit Kumar
              </motion.span>
            </Link>
          </motion.div>

          {/* Center: Navigation with Stagger Animation */}
          <motion.nav
            className="hidden md:flex gap-8 text-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="relative text-slate-600 hover:text-sky-600 font-medium transition-colors duration-300 group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
                whileHover={{ y: -2 }}
              >
                {item.label}
                {/* Animated Underline */}
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-sky-400 to-indigo-600 rounded-full origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Hover Dot */}
                <motion.div
                  className="absolute -top-2 left-1/2 w-1 h-1 bg-sky-500 rounded-full transform -translate-x-1/2"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </motion.nav>

          {/* Right: Download Resume Button with Animation */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button as="a" href="/AnkitResume.pdf" download>
              <motion.span className="flex items-center gap-2">
                <motion.span
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  📄
                </motion.span>
                Download Resume
              </motion.span>
            </Button>
          </motion.div>

          {/* Mobile: Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setIsMobileMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white/80 p-2 text-slate-700 shadow-sm hover:bg-white hover:shadow transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-sky-400 to-indigo-600"
          initial={{ width: "0%" }}
          animate={{ width: `${progressWidth}%` }}
          transition={{ duration: 0.1 }}
        />
      </motion.header>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              key="overlay"
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.aside
              key="sidebar"
              className="fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-white z-[60] shadow-xl p-6 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-bold text-lg bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">Menu</span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="text-slate-700 hover:text-sky-600 font-medium text-base"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.03 * (index + 1) }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-6 border-t border-slate-200 pt-6">
                <Button as="a" href="/AnkitResume.pdf" download>
                  <span className="flex items-center gap-2">
                    <span>📄</span>
                    Download Resume
                  </span>
                </Button>
              </div>

              <div className="mt-auto text-xs text-slate-400">© {new Date().getFullYear()} Ankit Kumar</div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
}
