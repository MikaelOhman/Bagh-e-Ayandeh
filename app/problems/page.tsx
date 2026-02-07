'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { iranProblems } from '@/lib/iran-data'

const categories = ['All', 'Water Infrastructure', 'Environment', 'Agriculture', 'Healthcare', 'Education', 'Economy', 'Infrastructure', 'Social', 'Energy']
const countries = ['All', 'Iran']
const cities = ['All', 'Nationwide', 'Tehran', 'Shiraz', 'Isfahan', 'Urmia', 'Bushehr', 'Multiple cities', 'Provincial cities', 'Southwest Iran', 'North/West Iran', 'Major cities', 'Villages', 'Industrial cities', 'Multiple regions', 'Cities', 'Rural areas', 'Farmland', 'Distribution', 'Northern Iran', 'Central Iran', 'Urban periphery', 'Industrial zones']
const severities = ['All', 'Critical', 'High', 'Medium']

export default function ProblemsPage() {
  const [selectedCountry, setSelectedCountry] = useState('All')
  const [selectedCity, setSelectedCity] = useState('All')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedSeverity, setSelectedSeverity] = useState('All')

  const filteredProblems = iranProblems.filter(problem => {
    if (selectedCountry !== 'All' && problem.country !== selectedCountry) return false
    if (selectedCity !== 'All' && problem.location !== selectedCity) return false
    if (selectedCategory !== 'All' && problem.category !== selectedCategory) return false
    if (selectedSeverity !== 'All' && problem.severity !== selectedSeverity.toLowerCase()) return false
    return true
  })

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800'
      case 'high': return 'bg-orange-100 text-orange-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Problems</h1>
          <p className="text-lg text-gray-600">
            Challenges identified by communities that need solutions
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Filters</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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

            {/* Severity Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Severity
              </label>
              <select
                value={selectedSeverity}
                onChange={(e) => setSelectedSeverity(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                {severities.map(severity => (
                  <option key={severity} value={severity}>{severity}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredProblems.length} of {iranProblems.length} problems
          </div>
        </div>

        {/* Problems List */}
        <div className="space-y-4">
          {filteredProblems.map(problem => (
            <div key={problem.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSeverityColor(problem.severity)}`}>
                      {problem.severity.charAt(0).toUpperCase() + problem.severity.slice(1)}
                    </span>
                    <span className="text-sm text-gray-600">{problem.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {problem.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-3">
                    📍 {problem.location}, {problem.country}
                  </p>
                  
                  <p className="text-gray-700">
                    {problem.description}
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <span>💡 {problem.solutions} solutions proposed</span>
                  <span>👍 {problem.votes} community votes</span>
                  {problem.relatedProjects && problem.relatedProjects.length > 0 && (
                    <span className="text-emerald-600 font-medium">
                      🔗 {problem.relatedProjects.length} projects working on this
                    </span>
                  )}
                </div>
                <Link 
                  href={`/projects?problem=${problem.id}`}
                  className="text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  View Solutions →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredProblems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No problems match your filters</p>
            <button 
              onClick={() => {
                setSelectedCountry('All')
                setSelectedCity('All')
                setSelectedCategory('All')
                setSelectedSeverity('All')
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
