import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}/>
          </div>

          {/* Content */}
          <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center space-y-8">
            <div className="text-6xl mb-4">🌍</div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Be Part of Something Bigger
            </h2>
            
            <p className="text-xl text-emerald-50 max-w-2xl mx-auto leading-relaxed">
              Whether you're an architect in Stockholm, an engineer in Tehran, or someone who just wants to help - 
              there's a place for you here.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link 
                href="/contribute"
                className="w-full sm:w-auto px-8 py-4 bg-white text-emerald-600 text-lg font-bold rounded-full hover:bg-emerald-50 transition shadow-lg"
              >
                Start Contributing Now
              </Link>
              <Link 
                href="/about"
                className="w-full sm:w-auto px-8 py-4 bg-transparent text-white text-lg font-medium rounded-full border-2 border-white hover:bg-white/10 transition"
              >
                Learn More
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-emerald-50">
              <div className="flex items-center gap-2">
                <span>🔓</span>
                <span className="text-sm font-medium">Open Source</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🔒</span>
                <span className="text-sm font-medium">Transparent</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🤝</span>
                <span className="text-sm font-medium">Community-Driven</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🌍</span>
                <span className="text-sm font-medium">Global</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
