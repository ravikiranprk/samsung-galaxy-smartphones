import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import ProductHighlights from "@/components/product-highlights"
import PricingSection from "@/components/pricing-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <ProductHighlights />
      <PricingSection />
      <Footer />
    </main>
  )
}
