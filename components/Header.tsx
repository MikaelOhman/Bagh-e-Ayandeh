'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-3xl">🌍</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Open Earth
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/projects" className="text-gray-700 hover:text-emerald-600 transition">
              Projects
            </Link>
            <Link href="/problems" className="text-gray-700 hover:text-emerald-600 transition">
              Problems
            </Link>
            <Link href="/how-it-works" className="text-gray-700 hover:text-emerald-600 transition">
              How It Works
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-emerald-600 transition">
              About
            </Link>
            <Link 
              href="/contribute" 
              className="px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition font-medium"
            >
              Contribute
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/projects" className="block text-gray-700 hover:text-emerald-600">
              Projects
            </Link>
            <Link href="/problems" className="block text-gray-700 hover:text-emerald-600">
              Problems
            </Link>
            <Link href="/how-it-works" className="block text-gray-700 hover:text-emerald-600">
              How It Works
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-emerald-600">
              About
            </Link>
            <Link 
              href="/contribute" 
              className="block w-full text-center px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition"
            >
              Contribute
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
