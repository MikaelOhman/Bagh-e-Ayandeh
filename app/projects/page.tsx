'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { iranProjects } from '@/lib/iran-data'

const categories = ['All', 'Water Infrastructure', 'Environment', 'Energy', 'Healthcare', 'Education', 'Economy', 'Infrastructure', 'Agriculture']
const countries = ['All', 'Iran']
const cities = ['All', 'Shiraz', 'Tehran', 'Yazd', 'Isfahan', 'Kerman', 'Qom', 'Kashan', 'Arak', 'Urmia', 'Nationwide', 'Mashhad', 'Rural Kerman']
const statuses = ['All', 'Active', 'Planning', 'Completed']
const budgetRanges = ['All', '0-500k', '500k-1M', '1M-2M', '2M-5M', '5M+']

export default function ProjectsPage() {
  const [selectedCountry, setSelectedCountry] = useState('All')
  const [selectedCity, setSelectedCity] = useState('All')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedStatus, setSelectedStatus] = useState('All')
  const [selectedBudget, setSelectedBudget] = useState('All')

  const filteredProjects = iranProjects.filter(project => {
    if (selectedCountry !== 'All' && project.country !== selectedCountry) return false
    if (selectedCity !== 'All' && project.location !== selectedCity) return false
    if (selectedCategory !== 'All' && project.category !== selectedCategory) return false
    if (selectedStatus !== 'All' && project.status !== selectedStatus.toLowerCase()) return false
    
    if (selectedBudget !== 'All') {
      const budget = project.budget
      if (selectedBudget === '0-500k' && budget > 500000) return false
      if (selectedBudget === '500k-1M' && (budget <= 500000 || budget > 1000000)) return false
      if (selectedBudget === '1M-2M' && (budget <= 1000000 || budget > 2000000)) return false
      if (selectedBudget === '2M-5M' && (budget <= 2000000 || budget > 5000000)) return false
      if (selectedBudget === '5M+' && budget <= 5000000) return false
    }
    
    return true
  })

  const formatBudget = (amount: number) => {
    return (amount / 1000).toFixed(0) + 'k kr'
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'planning': return 'bg-blue-100 text-blue-800'
      case 'completed': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Projects</h1>
          <p className="text-lg text-gray-600">
            Browse and support ongoing projects around the world
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Filters</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Country Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>

            {/* City Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City/Region
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>

            {/* Budget Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget
              </label>
              <select
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                {budgetRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredProjects.length} of {iranProjects.length} projects
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex items-start justify-between mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </span>
                <span className="text-xs text-gray-500">{project.country}</span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                📍 {project.location}
              </p>

              <p className="text-sm text-gray-600 mb-4">
                {project.description}
              </p>

              {project.relatedProblems && project.relatedProblems.length > 0 && (
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <div className="text-xs text-gray-500 mb-1">Helps solve:</div>
                  <div className="flex flex-wrap gap-1">
                    {project.relatedProblems.map(problemId => (
                      <Link 
                        key={problemId}
                        href={`/problems?id=${problemId}`}
                        className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs hover:bg-emerald-100 transition"
                      >
                        {problemId}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600">Category</span>
                  <span className="font-medium text-gray-900">{project.category}</span>
                </div>

                <div className="mb-3">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-600">Funding</span>
                    <span className="font-medium text-gray-900">
                      {formatBudget(project.raised)} / {formatBudget(project.budget)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full"
                      style={{ width: `${(project.raised / project.budget) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{project.contributors} contributors</span>
                  <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No projects match your filters</p>
            <button 
              onClick={() => {
                setSelectedCountry('All')
                setSelectedCity('All')
                setSelectedCategory('All')
                setSelectedStatus('All')
                setSelectedBudget('All')
              }}
              className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
