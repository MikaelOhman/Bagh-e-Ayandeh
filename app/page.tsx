import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-reverse space-x-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-persian-green-600 via-persian-turquoise-600 to-persian-gold-600 bg-clip-text text-transparent">
                باغ آینده
              </h1>
              <span className="text-sm text-gray-600">Future Garden</span>
            </div>
            <div className="flex items-center space-x-reverse space-x-6">
              <Link href="/shiraz" className="text-gray-700 hover:text-persian-turquoise-600 transition">شیراز</Link>
              <Link href="/culture" className="text-gray-700 hover:text-persian-turquoise-600 transition">فرهنگ</Link>
              <Link href="/solutions" className="text-gray-700 hover:text-persian-turquoise-600 transition">راه‌حل‌ها</Link>
              <Link href="/music" className="text-gray-700 hover:text-persian-turquoise-600 transition">موسیقی</Link>
              <button className="px-4 py-2 text-sm bg-persian-gold-500 text-white rounded-lg hover:bg-persian-gold-600 transition">
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="text-7xl mb-4 animate-bounce">🌱</div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-persian-green-600 via-persian-turquoise-600 to-persian-gold-600 bg-clip-text text-transparent">
              باغ آینده
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-700 mb-4">
            امیدی برای ایران آزاد
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 italic">
            A Vision of Hope for a Free Iran
          </p>

          <div className="prose prose-lg max-w-3xl mx-auto text-right mb-12">
            <p className="text-gray-700 leading-relaxed text-xl">
              ما از این فرض آغاز می‌کنیم که دیکتاتوری سقوط کرده و مردم آزادی خود را بازیافته‌اند.
              این وبسایت نقشه راهی است برای ساختن ایرانی زیبا، پایدار و امیدوارکننده.
            </p>
            <p className="text-gray-600 text-lg mt-4">
              We start from the premise that dictatorship has fallen and people have reclaimed their freedom.
              This website is a roadmap for building a beautiful, sustainable, and hopeful Iran.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/shiraz"
              className="px-8 py-4 bg-gradient-to-r from-persian-green-600 to-persian-turquoise-600 text-white rounded-xl text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105"
            >
              شروع با شیراز 🏛️
            </Link>
            <Link 
              href="/vision"
              className="px-8 py-4 bg-white text-persian-turquoise-600 border-2 border-persian-turquoise-600 rounded-xl text-lg font-semibold hover:bg-persian-turquoise-50 transition-all"
            >
              چشم‌انداز ما
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 text-6xl opacity-20 animate-pulse">🌿</div>
        <div className="absolute bottom-20 left-10 text-6xl opacity-20 animate-pulse delay-1000">💐</div>
        <div className="absolute top-40 left-20 text-5xl opacity-20 animate-pulse delay-500">🌸</div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            موضوعات کلیدی
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Regions */}
            <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🗺️</div>
              <h3 className="text-2xl font-bold mb-3 text-persian-green-700">مناطق</h3>
              <p className="text-gray-600 mb-4">
                راه‌حل‌های منطقه‌ای برای هر استان، با توجه به آب و هوا، فرهنگ و چالش‌های خاص
              </p>
              <Link href="/shiraz" className="text-persian-turquoise-600 hover:text-persian-turquoise-700 font-semibold">
                شروع با شیراز ←
              </Link>
            </div>

            {/* Card 2: Solutions */}
            <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-3 text-persian-turquoise-700">راه‌حل‌ها</h3>
              <p className="text-gray-600 mb-4">
                آب، انرژی، زیرساخت، و شهرسازی - با هزینه‌ها و زمان‌بندی واقع‌بینانه
              </p>
              <Link href="/solutions" className="text-persian-turquoise-600 hover:text-persian-turquoise-700 font-semibold">
                کاوش کنید ←
              </Link>
            </div>

            {/* Card 3: Culture */}
            <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🏛️</div>
              <h3 className="text-2xl font-bold mb-3 text-persian-gold-700">فرهنگ</h3>
              <p className="text-gray-600 mb-4">
                شعر، معماری و باغ‌های ایرانی - ترکیب سنت با مدرنیته
              </p>
              <Link href="/culture" className="text-persian-turquoise-600 hover:text-persian-turquoise-700 font-semibold">
                کشف کنید ←
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-persian-turquoise-600 to-persian-green-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <p className="text-3xl md:text-4xl font-bold mb-6 leading-relaxed">
            «اگر به دل می‌نشینی، دنیا همه از آن توست»
          </p>
          <p className="text-xl md:text-2xl opacity-90 mb-4">
            حافظ شیرازی
          </p>
          <p className="text-lg opacity-75 italic">
            "If you seek in the heart, the whole world is yours" - Hafez of Shiraz
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">باغ آینده - Bagh-e Ayandeh</h3>
          <p className="text-gray-400 mb-6">
            پروژه‌ای خانوادگی با عشق برای ایران 🇮🇷❤️
          </p>
          <p className="text-sm text-gray-500">
            Open source • Built with hope • For a free Iran
          </p>
        </div>
      </footer>
    </div>
  );
}
