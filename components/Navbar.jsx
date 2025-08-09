'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Button from './Button' // Using your existing Button component

export default function Navbar(){
  const [shadow, setShadow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShadow(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`w-full bg-white fixed top-0 z-50 transition-shadow ${shadow ? 'shadow-md' : ''}`}>
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo/Name */}
        <Link href="/" className="font-semibold text-lg text-sky-600">
          Ankit Kumar
        </Link>

        {/* Center: Navigation */}
        <nav className="hidden md:flex gap-5 text-sm">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>

        {/* Right: Download Resume */}
        <div className="hidden md:block">
          <Button as="a" href="/Ankit-Kumar-Resume.pdf" download>
            Download Resume
          </Button>
        </div>
      </div>
    </header>
  )
}
