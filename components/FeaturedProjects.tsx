import Link from 'next/link'

export default function FeaturedProjects() {
  // Mock projects for launch
  const projects = [
    {
      id: 'shiraz-water',
      title: 'Restore 10 Qanats in Shiraz',
      location: 'Shiraz, Iran 🇮🇷',
      category: 'Water',
      description: 'Pilot project to restore historic underground water channels (qanats) to provide sustainable water supply.',
      funded: 0,
      goal: 800000,
      contributors: 0,
      status: 'Coming Soon',
      emoji: '💧'
    },
    {
      id: 'solar-farm',
      title: 'Solar Farm for Rural Villages',
      location: 'Fars Province, Iran 🇮🇷',
      category: 'Energy',
      description: '100 MW solar park to provide clean energy to 50+ villages. Iran has 300+ sun days per year.',
      funded: 0,
      goal: 1500000,
      contributors: 0,
      status: 'Coming Soon',
      emoji: '☀️'
    },
    {
      id: 'urban-forest',
      title: 'Plant 1 Million Trees',
      location: 'Tehran, Iran 🇮🇷',
      category: 'Environment',
      description: 'Urban forest initiative to combat air pollution, reduce heat, and create green spaces for communities.',
      funded: 0,
      goal: 500000,
      contributors: 0,
      status: 'Coming Soon',
      emoji: '🌳'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're starting in Iran, but the vision is global. Here are the first projects being designed.
          </p>
          <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
            🚧 Platform launching soon - projects coming!
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white rounded-2xl border-2 border-gray-200 hover:border-emerald-500 transition overflow-hidden shadow-sm hover:shadow-xl"
            >
              {/* Project Header */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <span className="text-5xl">{project.emoji}</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    📍 {project.location}
                  </p>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Progress */}
              <div className="px-6 pb-6 space-y-3">
                {/* Progress Bar */}
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-1000"
                    style={{ width: `${(project.funded / project.goal) * 100}%` }}
                  />
                </div>

                {/* Stats */}
                <div className="flex justify-between items-center text-sm">
                  <div>
                    <span className="font-bold text-gray-900">
                      {project.funded.toLocaleString()} kr
                    </span>
                    <span className="text-gray-500"> of {project.goal.toLocaleString()} kr</span>
                  </div>
                  <div className="text-gray-500">
                    {project.contributors} contributors
                  </div>
                </div>

                {/* Status Badge */}
                <div className="pt-2">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full text-sm font-medium">
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link 
            href="/projects"
            className="inline-block px-8 py-4 bg-white text-emerald-600 text-lg font-medium rounded-full border-2 border-emerald-600 hover:bg-emerald-50 transition"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  )
}
