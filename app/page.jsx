"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import ExperienceCard from "../components/ExperienceCard";
import SkillBadge from "../components/SkillBadge";
import Button from "../components/Button";

// Enhanced Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.6, -0.05, 0.01, 0.99] 
    } 
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const stagger = {
  show: { transition: { staggerChildren: 0.1 } },
};

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200
    }
  }
};

const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Custom hook for scroll-based animations
function useScrollAnimation() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  return { y, opacity };
}

// Animated Counter Component
function AnimatedCounter({ end, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

const projects = [
  {
    title: "iPhone Store",
    desc: "MERN eCommerce with JWT auth, Redux, and responsive UI. Features secure login, cart, and order placement.",
    repo: "https://github.com/ankit-kumar-it/iphone-Store",
  },
  {
    title: "Online Jewellery Shopping",
    desc: "MERN shopping cart with admin & user panels, product management, and responsive design.",
    repo: "https://github.com/DMC-Ankit-Kumar/OnlineJewelleryShopping",
  },
];

const experiences = [
  {
    role: "React Developer",
    company: "Edsom Fintech Pvt Ltd",
    duration: "08/2024 – present",
    location: "Pune",
    bullets: [
      "Built core banking modules (fund transfer, loans, share certificate).",
      "Integrated YesBank APIs, added Excel/PDF export and role-based access.",
      "Enhanced API efficiency & performance across fintech modules.",
    ],
  },
  {
    role: "MERN Stack Intern",
    company: "Humancloud Technologies Pvt Ltd",
    duration: "06/2024 – 08/2024",
    location: "Pune",
    bullets: [
      "Built responsive Next.js + TypeScript frontend for real-estate platform.",
      "Implemented secure backend services and advanced filtering.",
      "Optimized platform for mobile-first performance.",
    ],
  },
];

const skills = [
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Formik",
  "Material UI",
  "Node.js",
  "Express",
  "MySQL",
  "PostgreSQL",
  "TypeScript",
  "Redux",
  "Git",
  "Framer Motion",
  "Vercel",
  "REST APIs",
  "GraphQL",
  "MongoDB",
  "HTML5",
  "CSS3",
  "JavaScript",
  "Responsive Design",
  "Agile Methodologies",
  "Problem Solving",
  "Team Collaboration",
  "Communication",
  "Version Control",
  "Testing & Debugging",
  "UI/UX Design Principles",
];

export default function Home() {
  const { y, opacity } = useScrollAnimation();
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });

  return (
    <motion.div 
      initial="hidden" 
      animate="show" 
      variants={stagger}
      style={{ y, opacity }}
    >
      {/* Enhanced Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={isHeroInView ? "show" : "hidden"}
        variants={stagger}
        className="grid md:grid-cols-3 gap-6 items-center mb-16 mt-16 relative overflow-hidden"
      >
        {/* Background Animation Elements */}
        <motion.div
          className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-sky-400/10 to-indigo-400/10 rounded-full blur-xl"
          {...floatingAnimation}
        />
        <motion.div
          className="absolute top-20 right-10 w-16 h-16 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-xl"
          animate={{
            y: [10, -10, 10],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }
          }}
        />
        
        <motion.div className="md:col-span-2" variants={fadeInLeft}>
          {/* Animated Name */}
          <motion.h1 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4"
            variants={letterAnimation}
          >
            <motion.span
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block"
            >
              A
            </motion.span>
            <motion.span
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-block"
            >
              nkit
            </motion.span>
            {" "}
            <motion.span
              initial={{ opacity: 0, rotateY: -90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-block"
            >
              Kumar
            </motion.span>
          </motion.h1>
          
          {/* Typewriter Effect */}
          <motion.p 
            className="text-slate-600 mt-3 text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Software Developer (React) — building scalable UIs & fintech integrations.
          </motion.p>
          
          {/* Stats Counter */}
          <motion.div 
            className="mt-6 grid grid-cols-3 gap-4 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-sky-100"
            variants={scaleIn}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-sky-600">
                <AnimatedCounter end={1} />+
              </div>
              <div className="text-sm text-slate-500">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">
                <AnimatedCounter end={10} />+
              </div>
              <div className="text-sm text-slate-500">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                <AnimatedCounter end={25} />+
              </div>
              <div className="text-sm text-slate-500">Technologies</div>
            </div>
          </motion.div>
          
          {/* Enhanced Buttons */}
          <motion.div 
            className="mt-8 flex gap-4"
            variants={fadeInUp}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button as="a" href="mailto:itsankit.k27@gmail.com">
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  📧 Email Me
                </motion.span>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                as="a"
                href="https://linkedin.com/in/ankit-kumar-27-july"
                variant="ghost"
              >
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  💼 LinkedIn
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Enhanced Profile Image */}
        <motion.div
          variants={fadeInRight}
          className="flex justify-center relative"
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Animated Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-sky-400 to-indigo-600"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -inset-2 rounded-full bg-gradient-to-r from-sky-400/20 to-indigo-600/20 blur-md"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <img
              src="/profile.jpg"
              alt="Ankit Kumar - Software Developer"
              className="w-48 h-48 rounded-full object-cover shadow-2xl relative z-10 border-4 border-white"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Enhanced Experience Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
      >
        <SectionTitle id="experience">Experience</SectionTitle>
        <motion.div className="space-y-8 mb-16 relative">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-sky-400 to-indigo-600"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          
          {experiences.map((e, index) => (
            <motion.div 
              key={e.company} 
              variants={{
                hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
                show: { 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.8, delay: index * 0.2 }
                }
              }}
              className="relative"
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-6 top-6 w-4 h-4 bg-white border-4 border-sky-500 rounded-full z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
                viewport={{ once: true }}
              />
              <div className="ml-16">
                <ExperienceCard exp={e} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced Projects Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <SectionTitle id="projects">Projects</SectionTitle>
        <motion.div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((p, index) => (
            <motion.div 
              key={p.title} 
              variants={{
                hidden: { opacity: 0, y: 50, rotateX: -15 },
                show: { 
                  opacity: 1, 
                  y: 0,
                  rotateX: 0,
                  transition: { 
                    duration: 0.8, 
                    delay: index * 0.2,
                    ease: [0.6, -0.05, 0.01, 0.99]
                  }
                }
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced Skills Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
      >
        <SectionTitle id="skills">Skills</SectionTitle>
        <motion.div 
          className="flex flex-wrap gap-3 mb-16 relative"
          variants={stagger}
        >
          {/* Background Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-sky-100/50 via-transparent to-transparent rounded-3xl blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          {skills.map((skill, index) => {
            const delay = index * 0.05;
            return (
              <motion.div 
                key={skill} 
                variants={{
                  hidden: { 
                    opacity: 0, 
                    scale: 0,
                    rotate: -180
                  },
                  show: { 
                    opacity: 1, 
                    scale: 1,
                    rotate: 0,
                    transition: { 
                      duration: 0.5, 
                      delay,
                      type: "spring",
                      stiffness: 260,
                      damping: 20
                    }
                  }
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <SkillBadge text={skill} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Enhanced Contact Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={stagger}
      >
        <SectionTitle id="contact">Contact</SectionTitle>
        <motion.div
          className="bg-gradient-to-r from-sky-50 to-indigo-50 p-8 rounded-2xl border border-sky-200 mb-8 relative overflow-hidden"
          variants={scaleIn}
        >
          {/* Background Pattern */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
            animate={{
              x: [0, 60, 0],
              y: [0, 60, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.div
            className="text-center relative z-10"
            variants={fadeInUp}
          >
            <motion.h3
              className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent mb-6"
              variants={letterAnimation}
            >
              Let's Connect!
            </motion.h3>
            
            <motion.div
              className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg"
              variants={stagger}
            >
              <motion.a
                href="mailto:itsankit.k27@gmail.com"
                className="flex items-center gap-3 text-sky-600 hover:text-sky-800 transition-colors"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  📧
                </motion.span>
                itsankit.k27@gmail.com
              </motion.a>
              
              <motion.div
                className="flex items-center gap-3 text-indigo-600"
                variants={fadeInUp}
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  📱
                </motion.span>
                8299144486 | 8574998116
              </motion.div>
              
              <motion.div
                className="flex items-center gap-3 text-purple-600"
                variants={fadeInUp}
              >
                <motion.span
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  📍
                </motion.span>
                Pune, Maharashtra
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
