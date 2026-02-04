import Link from 'next/link';

export default function Shiraz() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-persian-green-50 via-white to-persian-turquoise-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-reverse space-x-2 hover:opacity-80 transition">
              <span className="text-2xl">←</span>
              <span className="text-xl font-bold text-persian-turquoise-600">باغ آینده</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">شیراز</h1>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-7xl mb-6">🏛️</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800">
            شیراز
          </h1>
          <p className="text-2xl text-gray-600 mb-2">شهر شعر، باغ و معنویت</p>
          <p className="text-xl text-gray-500 italic">City of Poetry, Gardens & Spirituality</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6 text-persian-green-700">نگاهی کلی</h2>
          <div className="prose prose-lg max-w-none text-right">
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              شیراز، مرکز استان فارس، یکی از قدیمی‌ترین شهرهای ایران است. 
              این شهر به عنوان زادگاه حافظ و سعدی، دو تن از بزرگترین شاعران فارسی‌زبان، 
              و نزدیکی به تخت جمشید، پایتخت باستانی امپراتوری هخامنشی، شناخته می‌شود.
            </p>
            <p className="text-gray-600 text-base mb-4">
              <em>
                Shiraz, capital of Fars Province, is one of Iran's oldest cities. Known as the birthplace of Hafez and Saadi, two of the greatest Persian poets, and its proximity to Persepolis, the ancient capital of the Achaemenid Empire.
              </em>
            </p>
          </div>
        </div>
      </section>

      {/* Climate & Geography */}
      <section className="py-12 px-4 bg-persian-turquoise-50/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">آب و هوا و جغرافیا</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-persian-turquoise-700">ویژگی‌های آب و هوایی</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-2xl ml-3">🌡️</span>
                  <div>
                    <strong>دما:</strong> زمستان‌های سرد (حدود 5°C) و تابستان‌های گرم (حدود 35°C)
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl ml-3">💧</span>
                  <div>
                    <strong>بارندگی:</strong> کم (حدود 300 میلی‌متر در سال)، عمدتاً در زمستان
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl ml-3">🏜️</span>
                  <div>
                    <strong>خشکی:</strong> اقلیم نیمه‌خشک، تابستان‌های خشک طولانی
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl ml-3">⛰️</span>
                  <div>
                    <strong>ارتفاع:</strong> 1500 متر از سطح دریا
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-persian-green-700">چالش‌های کلیدی</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-2xl ml-3">⚠️</span>
                  <div>
                    <strong>کمبود آب:</strong> منابع آب زیرزمینی رو به کاهش
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl ml-3">🌵</span>
                  <div>
                    <strong>بیابان‌زایی:</strong> خشکسالی‌های مکرر
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl ml-3">🏗️</span>
                  <div>
                    <strong>رشد شهری:</strong> فشار بر زیرساخت‌های آب
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl ml-3">🌾</span>
                  <div>
                    <strong>کشاورزی:</strong> نیاز به سیستم‌های آبیاری کارآمد
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Water Solutions */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">راه‌حل‌های آب 💧</h2>
          
          <div className="bg-gradient-to-br from-persian-turquoise-50 to-persian-green-50 rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <div className="bg-yellow-100 border-r-4 border-yellow-500 p-4 mb-6">
              <p className="text-gray-800">
                ⚠️ <strong>نکته مهم:</strong> برخلاف مناطق ساحلی، دستگاه‌های رطوبت‌گیر (dehumidifier) در شیراز به دلیل خشکی هوا کارآمد نیستند.
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-persian-turquoise-700">راه‌حل‌های پیشنهادی</h3>
            
            <div className="space-y-6">
              {/* Solution 1 */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold mb-3 text-persian-green-700">۱. بازسازی و مدرن‌سازی قنات‌ها</h4>
                <p className="text-gray-700 mb-4">
                  سیستم قنات، فناوری ایرانی باستانی که آب را از کوهستان به دشت منتقل می‌کند، می‌تواند با فناوری مدرن احیا شود.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-persian-turquoise-50 p-3 rounded">
                    <strong>هزینه تخمینی:</strong><br/>
                    $2-5M per qanat system
                  </div>
                  <div className="bg-persian-green-50 p-3 rounded">
                    <strong>زمان اجرا:</strong><br/>
                    2-3 years
                  </div>
                  <div className="bg-persian-gold-50 p-3 rounded">
                    <strong>تأثیر:</strong><br/>
                    +30% water availability
                  </div>
                </div>
              </div>

              {/* Solution 2 */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold mb-3 text-persian-green-700">۲. آبیاری قطره‌ای در کشاورزی</h4>
                <p className="text-gray-700 mb-4">
                  جایگزینی سیستم‌های آبیاری سنتی با آبیاری قطره‌ای می‌تواند مصرف آب را تا 60% کاهش دهد.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-persian-turquoise-50 p-3 rounded">
                    <strong>هزینه تخمینی:</strong><br/>
                    $500-1,500 per hectare
                  </div>
                  <div className="bg-persian-green-50 p-3 rounded">
                    <strong>زمان اجرا:</strong><br/>
                    6-12 months
                  </div>
                  <div className="bg-persian-gold-50 p-3 rounded">
                    <strong>صرفه‌جویی:</strong><br/>
                    60% less water usage
                  </div>
                </div>
              </div>

              {/* Solution 3 */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-xl font-bold mb-3 text-persian-green-700">۳. جمع‌آوری آب باران</h4>
                <p className="text-gray-700 mb-4">
                  سیستم‌های جمع‌آوری و ذخیره آب باران برای استفاده در باغ‌ها و فضای سبز شهری.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-persian-turquoise-50 p-3 rounded">
                    <strong>هزینه تخمینی:</strong><br/>
                    $200-500 per household
                  </div>
                  <div className="bg-persian-green-50 p-3 rounded">
                    <strong>زمان اجرا:</strong><br/>
                    2-4 weeks
                  </div>
                  <div className="bg-persian-gold-50 p-3 rounded">
                    <strong>ظرفیت:</strong><br/>
                    1,000-5,000L storage
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-12 px-4 bg-gradient-to-r from-persian-gold-100 to-persian-green-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">میراث فرهنگی 🏛️</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Poetry */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-persian-gold-700">شعر</h3>
              <p className="text-gray-700 mb-6">
                حافظ و سعدی، دو تن از بزرگترین شاعران تاریخ ادبیات فارسی، در شیراز متولد شدند و مدفون هستند.
              </p>
              <div className="bg-persian-gold-50 p-6 rounded-lg border-r-4 border-persian-gold-500">
                <p className="text-lg font-serif italic text-gray-800 mb-2">
                  «صدا کن که درگاه ما باز نیست»
                </p>
                <p className="text-sm text-gray-600">- حافظ</p>
              </div>
            </div>

            {/* Gardens */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-persian-green-700">باغ‌های ایرانی</h3>
              <p className="text-gray-700 mb-4">
                شیراز به باغ‌های زیبای خود مشهور است:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>🌳 <strong>باغ ارم</strong> - میراث جهانی یونسکو</li>
                <li>🌸 <strong>باغ عفیف‌آباد</strong> - موزه نظامی</li>
                <li>🌿 <strong>باغ دلگشا</strong> - باغ تاریخی</li>
                <li>💐 <strong>باغ جهان‌نما</strong> - چشم‌انداز شهر</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Link href="/" className="text-persian-turquoise-400 hover:text-persian-turquoise-300 font-semibold">
            ← بازگشت به صفحه اصلی
          </Link>
          <p className="text-gray-500 mt-4 text-sm">
            ساخته شده با عشق برای شیراز 🇮🇷❤️
          </p>
        </div>
      </footer>
    </div>
  );
}
