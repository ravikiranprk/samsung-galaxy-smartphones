"use client"

import { Camera, Zap, Sparkles, Cpu, Shield, Maximize2 } from "lucide-react"

const features = [
  {
    icon: Camera,
    title: "Pro Camera System",
    description: "Advanced AI-powered photography with 200MP ultra-precise sensor and enhanced night mode.",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Performance",
    description: "Next-gen processor delivering exceptional speed and efficiency for demanding tasks.",
  },
  {
    icon: Sparkles,
    title: "Galaxy AI",
    description: "Personal AI assistant that learns your preferences and enhances your daily experience.",
  },
  {
    icon: Maximize2,
    title: "Infinity Display",
    description: "Stunning 6.8-inch AMOLED screen with 120Hz refresh rate for immersive visuals.",
  },
  {
    icon: Cpu,
    title: "Advanced Processing",
    description: "Optimized thermal management and power efficiency for all-day performance.",
  },
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "Multi-layer protection with advanced biometrics and secure enclave technology.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-background border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Cutting-Edge Features
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Discover what makes Galaxy the ultimate smartphone for modern users.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-6 md:p-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/50 transition-all duration-300"
              >
                <div className="mb-4 inline-flex p-3 bg-slate-800 rounded-lg group-hover:bg-white/10 transition-colors">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
