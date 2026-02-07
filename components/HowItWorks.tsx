export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      icon: '🔍',
      title: 'Identify Problems',
      description: 'Communities identify challenges they face - water shortage, energy needs, infrastructure gaps.'
    },
    {
      number: '2',
      icon: '💡',
      title: 'Propose Solutions',
      description: 'Experts, architects, engineers worldwide contribute solutions with detailed plans and costs.'
    },
    {
      number: '3',
      icon: '🗳️',
      title: 'Community Votes',
      description: 'The community votes on which projects to prioritize. Democracy in action.'
    },
    {
      number: '4',
      icon: '💰',
      title: 'Funding & Expertise',
      description: 'People pledge money, time, or skills. Companies sponsor. Experts volunteer.'
    },
    {
      number: '5',
      icon: '🏗️',
      title: 'Build Together',
      description: 'Teams form. Projects launch. Transparency every step. Everyone can see progress.'
    },
    {
      number: '6',
      icon: '✨',
      title: 'Impact',
      description: 'Communities transformed. Lives improved. Hope realized. Repeat for next project.'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From problem to solution. From idea to reality. Six simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100 hover:shadow-lg transition"
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                {step.number}
              </div>

              {/* Icon */}
              <div className="text-5xl mb-4 mt-2">{step.icon}</div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Transparency Note */}
        <div className="mt-16 p-8 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl text-white text-center">
          <div className="text-3xl mb-4">🔒</div>
          <h3 className="text-2xl font-bold mb-3">Built on Trust & Transparency</h3>
          <p className="text-lg text-emerald-50 max-w-3xl mx-auto">
            Every contribution is public. Every project milestone is tracked. 
            Every decision is voted on. This is crowdsourcing with complete accountability.
          </p>
        </div>
      </div>
    </section>
  )
}
