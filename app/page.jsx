'use client'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import ExperienceCard from '../components/ExperienceCard'
import SkillBadge from '../components/SkillBadge'
import Button from '../components/Button'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const stagger = {
  show: { transition: { staggerChildren: 0.15 } }
}

const projects = [
  {
    title: 'iPhone Store',
    desc: 'MERN eCommerce with JWT auth, Redux, and responsive UI. Features secure login, cart, and order placement.',
    repo: 'https://github.com/ankit-kumar-it/iphone-Store'
  },
  {
    title: 'Online Jewellery Shopping',
    desc: 'MERN shopping cart with admin & user panels, product management, and responsive design.',
    repo: 'https://github.com/DMC-Ankit-Kumar/OnlineJewelleryShopping'
  }
]

const experiences = [
  {
    role: 'React Developer',
    company: 'Edsom Fintech Pvt Ltd',
    duration: '08/2024 – present',
    location: 'Pune',
    bullets: [
      'Built core banking modules (fund transfer, loans, share certificate).',
      'Integrated YesBank APIs, added Excel/PDF export and role-based access.',
      'Enhanced API efficiency & performance across fintech modules.'
    ]
  },
  {
    role: 'MERN Stack Intern',
    company: 'Humancloud Technologies Pvt Ltd',
    duration: '06/2024 – 08/2024',
    location: 'Pune',
    bullets: [
      'Built responsive Next.js + TypeScript frontend for real-estate platform.',
      'Implemented secure backend services and advanced filtering.',
      'Optimized platform for mobile-first performance.'
    ]
  }
]

const skills = [
  'React.js','Next.js','Tailwind CSS','Formik','Material UI','Node.js',
  'Express','MySQL','PostgreSQL','TypeScript','Redux','Git','Framer Motion', 'Vercel',
  'REST APIs','GraphQL','MongoDB','HTML5','CSS3','JavaScript','Responsive Design',
  'Agile Methodologies','Problem Solving','Team Collaboration','Communication',
  'Version Control','Testing & Debugging','UI/UX Design Principles'
]

export default function Home() {
  return (
    <motion.div initial="hidden" animate="show" variants={stagger}>
      <motion.section variants={fadeInUp} className="grid md:grid-cols-3 gap-6 items-center mb-16 mt-16">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">Ankit Kumar</h1>
          <p className="text-slate-600 mt-3 text-lg">Software Developer (React) — building scalable UIs & fintech integrations.</p>
          <div className="mt-5 flex gap-3">
            <Button as="a" href="mailto:itsankit.k27@gmail.com">Email Me</Button>
            <Button as="a" href="https://linkedin.com/in/ankit-kumar-27-july" variant="ghost">LinkedIn</Button>
          </div>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} className="flex justify-center">
          <img src='/profile.jpg' alt="avatar" className="w-40 h-40 rounded-full object-cover shadow-lg" />
        </motion.div>
      </motion.section>

      <SectionTitle id="projects">Projects</SectionTitle>
      <motion.div variants={stagger} className="grid md:grid-cols-2 gap-6 mb-16">
        {projects.map(p => (
          <motion.div key={p.title} variants={fadeInUp}>
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </motion.div>

      <SectionTitle id="experience">Experience</SectionTitle>
      <motion.div variants={stagger} className="space-y-6 mb-16">
        {experiences.map(e => (
          <motion.div key={e.company} variants={fadeInUp}>
            <ExperienceCard exp={e} />
          </motion.div>
        ))}
      </motion.div>

      <SectionTitle id="skills">Skills</SectionTitle>
      <motion.div variants={stagger} className="flex flex-wrap gap-3 mb-16">
        {skills.map(s => (
          <motion.div key={s} variants={fadeInUp}>
            <SkillBadge text={s} />
          </motion.div>
        ))}
      </motion.div>

      <SectionTitle id="contact">Contact</SectionTitle>
      <motion.p variants={fadeInUp} className="mb-4">📧 itsankit.k27@gmail.com • 📱 8299144486 • 📍 Pune, Maharashtra</motion.p>
    </motion.div>
  )
}
