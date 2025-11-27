"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "Galaxy S25",
    price: "799",
    storage: "256GB",
    description: "Perfect for everyday users",
    features: [
      "Dynamic AMOLED 2X Display",
      "50MP Main Camera",
      "Galaxy AI",
      "25W Fast Charging",
      "4000mAh Battery",
      "1-Year Warranty",
    ],
  },
  {
    name: "Galaxy S25+",
    price: "899",
    storage: "512GB",
    description: "For power users",
    featured: true,
    features: [
      "Dynamic AMOLED 2X Display",
      "50MP + 10MP Dual Camera",
      "Advanced Galaxy AI",
      "45W Fast Charging",
      "4900mAh Battery",
      "2-Year Warranty",
    ],
  },
  {
    name: "Galaxy S25 Ultra",
    price: "1299",
    storage: "1TB",
    description: "Ultimate flagship experience",
    features: [
      '6.8" Dynamic AMOLED Display',
      "200MP Ultra Sensor",
      "Pro Galaxy AI Features",
      "65W Ultra Fast Charging",
      "5000mAh Battery",
      "3-Year Warranty",
    ],
  },
]

export default function PricingSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-background border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Choose your Galaxy device and select the storage that fits your needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-300 flex flex-col ${
                plan.featured
                  ? "border-white/20 bg-linear-to-br from-slate-800 to-slate-900 ring-2 ring-white/20 md:scale-105"
                  : "border-slate-800 bg-slate-900 hover:border-slate-700"
              }`}
            >
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                {plan.featured && (
                  <span className="inline-block mb-4 px-3 py-1 bg-white/10 text-white text-sm font-semibold rounded-full w-fit">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 mb-4 text-sm">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <p className="text-slate-400 text-sm mt-2">{plan.storage} Storage</p>
                </div>
                <Button
                  className={`w-full mb-6 font-semibold py-6 ${
                    plan.featured
                      ? "bg-white text-slate-950 hover:bg-slate-100"
                      : "bg-slate-800 text-white hover:bg-slate-700 border border-slate-700"
                  }`}
                  variant={plan.featured ? "default" : "outline"}
                >
                  Get {plan.name}
                </Button>
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-white shrink-0" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
