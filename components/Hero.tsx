import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-gray-900">One Earth.</span>
              <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Open to all.
              </span>
              <span className="block text-gray-900">Built together.</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A global platform where humanity collaborates to solve problems through 
              <span className="font-semibold text-emerald-600"> crowdsourced solutions</span>, 
              <span className="font-semibold text-teal-600"> shared expertise</span>, and 
              <span className="font-semibold text-cyan-600"> collective funding</span>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/explore"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white text-lg font-medium rounded-full hover:bg-emerald-700 transition shadow-lg hover:shadow-xl"
            >
              Explore Projects 🌍
            </Link>
            <Link 
              href="/contribute"
              className="w-full sm:w-auto px-8 py-4 bg-white text-emerald-600 text-lg font-medium rounded-full border-2 border-emerald-600 hover:bg-emerald-50 transition"
            >
              Start Contributing
            </Link>
          </div>

          {/* Stats */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-emerald-600">0</div>
              <div className="text-sm text-gray-600">Projects Launched</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-teal-600">0</div>
              <div className="text-sm text-gray-600">Contributors</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-cyan-600">0</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-emerald-600">∞</div>
              <div className="text-sm text-gray-600">Potential</div>
            </div>
          </div>

          {/* Origin Story */}
          <div className="pt-12 max-w-2xl mx-auto">
            <p className="text-gray-600 italic">
              <span className="font-semibold text-emerald-600">It started with Iran.</span>{' '}
              A vision for reconstruction after freedom. But the idea is universal. 
              Every country, every community can build their future together.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
