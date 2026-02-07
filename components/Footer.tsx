import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-3xl">🌍</span>
              <span className="text-2xl font-bold text-white">Open Earth</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              One Earth. Open to all. Built together.
            </p>
            <p className="text-sm text-gray-500">
              A global platform for crowdsourced solutions.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white font-bold mb-4">Explore</h3>
            <ul className="space-y-3">
              <li><Link href="/projects" className="hover:text-emerald-400 transition">All Projects</Link></li>
              <li><Link href="/problems" className="hover:text-emerald-400 transition">All Problems</Link></li>
              <li><Link href="/how-it-works" className="hover:text-emerald-400 transition">How It Works</Link></li>
              <li><Link href="/community" className="hover:text-emerald-400 transition">Community</Link></li>
            </ul>
          </div>

          {/* Contribute */}
          <div>
            <h3 className="text-white font-bold mb-4">Contribute</h3>
            <ul className="space-y-3">
              <li><Link href="/contribute" className="hover:text-emerald-400 transition">Get Started</Link></li>
              <li><Link href="/submit-project" className="hover:text-emerald-400 transition">Submit Project</Link></li>
              <li><Link href="/offer-expertise" className="hover:text-emerald-400 transition">Offer Expertise</Link></li>
              <li><Link href="/sponsor" className="hover:text-emerald-400 transition">Become a Sponsor</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white font-bold mb-4">About</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-emerald-400 transition">Our Story</Link></li>
              <li><Link href="/faq" className="hover:text-emerald-400 transition">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition">Contact</Link></li>
              <li>
                <a 
                  href="https://github.com/openearth" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition flex items-center gap-2"
                >
                  GitHub <span className="text-sm">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Open Earth. Built with hope for humanity.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-emerald-400 transition">Privacy</Link>
              <Link href="/terms" className="hover:text-emerald-400 transition">Terms</Link>
              <a 
                href="https://twitter.com/openearth" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition"
              >
                Twitter
              </a>
            </div>
          </div>

          {/* Inspiration Note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 italic">
              Started with باغ آینده (Future Garden) for Iran. 
              Growing into a platform for the world. 🌱
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
