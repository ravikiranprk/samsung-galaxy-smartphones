"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 pt-20">
      {/* Decorative grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
              <span className="text-balance">Galaxy Innovation Redefined</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Experience the future with cutting-edge AI, revolutionary camera systems, and displays that set new
              standards in mobile technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-white text-slate-950 hover:bg-slate-100 font-semibold px-8 py-6">
                Explore Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6 bg-transparent"
              >
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full h-96 md:h-full">
              <img src="/samsung-galaxy-smartphone-premium-device.png" alt="Samsung Galaxy Smartphone" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
