"use client"

export default function ProductHighlights() {
  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-br from-slate-900 to-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Galaxy Lineup</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Choose from our premium selection of Galaxy smartphones.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Galaxy S25 Ultra */}
          <div className="rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all group">
            <div className="aspect-square bg-linear-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
              <img
                src="/samsung-galaxy-s25-ultra-premium-flagship-phone.png"
                alt="Galaxy S25 Ultra"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Galaxy S25 Ultra</h3>
              <p className="text-slate-400 mb-4">
                The pinnacle of mobile innovation with 200MP camera and 6.8" display.
              </p>
              <p className="text-white font-semibold">From $1,299</p>
            </div>
          </div>

          {/* Galaxy S25+ */}
          <div className="rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all group md:scale-95 md:hover:scale-100">
            <div className="aspect-square bg-linear-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
              <img
                src="/samsung-galaxy-s25-plus-mid-range-flagship-phone.png"
                alt="Galaxy S25+"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Galaxy S25+</h3>
              <p className="text-slate-400 mb-4">Premium performance with 50MP dual camera and 120Hz AMOLED display.</p>
              <p className="text-white font-semibold">From $899</p>
            </div>
          </div>

          {/* Galaxy S25 */}
          <div className="rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all group">
            <div className="aspect-square bg-linear-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
              <img
                src="/samsung-galaxy-s25-standard-flagship-phone.png"
                alt="Galaxy S25"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-2">Galaxy S25</h3>
              <p className="text-slate-400 mb-4">Flagship power in a compact form with 50MP camera and AI features.</p>
              <p className="text-white font-semibold">From $799</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
