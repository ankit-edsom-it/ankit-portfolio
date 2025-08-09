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

  const navItems = [
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];
  console.log("navItems", navItems);

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
            <Button as="a" href="/Ankit-Kumar-Resume.pdf" download>
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
        </div>

        {/* Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-sky-400 to-indigo-600"
          initial={{ width: "0%" }}
          animate={{ width: `${progressWidth}%` }}
          transition={{ duration: 0.1 }}
        />
      </motion.header>
    </AnimatePresence>
  );
}
