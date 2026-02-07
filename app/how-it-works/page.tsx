import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">How Open Earth Works</h1>

        {/* Process */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Process</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Identify Problems</h3>
                <p className="text-gray-700">
                  Local communities identify concrete challenges they face — water shortages, 
                  infrastructure decay, healthcare gaps, environmental issues, and more.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Propose Solutions</h3>
                <p className="text-gray-700">
                  Experts, engineers, and community members propose buildable solutions. 
                  Each solution includes detailed costs, timelines, and required resources.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Support</h3>
                <p className="text-gray-700">
                  People vote on solutions, pledge money, offer skills, or donate equipment. 
                  All contributions are transparent and publicly tracked.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Build Together</h3>
                <p className="text-gray-700">
                  Once a project reaches its goal, work begins. Progress is tracked publicly 
                  with regular updates, photos, and financial transparency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contribution Types */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ways to Contribute</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fund Projects</h3>
              <p className="text-gray-700">
                Pledge money with escrow protection. Funds are only released when 
                milestones are met and verified by the community.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-4xl mb-3">🛠️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Offer Skills</h3>
              <p className="text-gray-700">
                Share your expertise — engineering, construction, healthcare, education, 
                or any skill that can help solve problems.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-4xl mb-3">📦</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Donate Equipment</h3>
              <p className="text-gray-700">
                Provide tools, materials, or machinery that projects need. 
                From excavators to laptops to solar panels.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-4xl mb-3">🗳️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vote & Guide</h3>
              <p className="text-gray-700">
                Help the community decide which problems to prioritize and 
                which solutions are most viable and impactful.
              </p>
            </div>
          </div>
        </section>

        {/* Point System */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recognition & Points</h2>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <p className="text-gray-700 mb-6">
              Contributors earn points for their contributions. Points build reputation and 
              show your impact on the platform. You can contribute publicly to build your 
              profile, or stay anonymous — both are equally valued.
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💡</span>
                  <span className="font-medium text-gray-900">Propose a Solution</span>
                </div>
                <span className="text-emerald-600 font-semibold">+50 pts</span>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⏰</span>
                  <span className="font-medium text-gray-900">Volunteer Time</span>
                </div>
                <span className="text-emerald-600 font-semibold">+10 pts/hour</span>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🛠️</span>
                  <span className="font-medium text-gray-900">Complete a Project</span>
                </div>
                <span className="text-emerald-600 font-semibold">+200 pts</span>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎓</span>
                  <span className="font-medium text-gray-900">Share Expertise</span>
                </div>
                <span className="text-emerald-600 font-semibold">+100 pts</span>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📦</span>
                  <span className="font-medium text-gray-900">Donate Equipment</span>
                </div>
                <span className="text-emerald-600 font-semibold">+150 pts</span>
              </div>

              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💰</span>
                  <span className="font-medium text-gray-900">Fund a Project</span>
                </div>
                <span className="text-emerald-600 font-semibold">+1 pt/100 kr</span>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Earn Badges</h3>
            <p className="text-gray-700 mb-4">
              As you contribute, you earn badges that showcase your expertise and dedication:
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-900">
                💡 Problem Solver
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-900">
                ⏰ Time Champion
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-900">
                🛠️ Builder
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-900">
                📦 Equipment Hero
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-900">
                🔧 Expert
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-900">
                🌟 Mentor
              </span>
            </div>
          </div>
        </section>

        {/* Transparency */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Transparency & Trust</h2>
          
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">✅ Everything is Public</h3>
              <p className="text-gray-700">
                All project costs, bids, progress updates, and fund allocation are visible 
                to everyone. No hidden fees, no black boxes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">🔒 Escrow Protection</h3>
              <p className="text-gray-700">
                Pledged funds are held in escrow and only released when milestones are 
                verified and approved by the community.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">🗳️ Community Governance</h3>
              <p className="text-gray-700">
                The community votes on which problems to prioritize, which solutions to 
                implement, and how to resolve disputes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">📊 Track Everything</h3>
              <p className="text-gray-700">
                See exactly where every krona goes, who's working on what, and how 
                projects are progressing with real-time updates.
              </p>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Principles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Non-political</h3>
              <p className="text-gray-700">
                We focus on buildable solutions, not ideology. Problems and solutions 
                are concrete, measurable, and practical.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Universal</h3>
              <p className="text-gray-700">
                Open to all people, all cities, all problems. Started with Iran, 
                but designed to scale globally.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparent</h3>
              <p className="text-gray-700">
                Every pledge, every decision, publicly visible. Trust is built through 
                radical transparency.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Concrete</h3>
              <p className="text-gray-700">
                Real infrastructure, technology, engineering. Not abstract ideas — 
                buildable solutions that make tangible impact.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Make an Impact?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Join the movement to rebuild cities and solve real problems.
          </p>
          <a 
            href="/projects"
            className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all"
          >
            Browse Projects →
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}
