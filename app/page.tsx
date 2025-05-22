import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroBanner from "@/components/hero-banner"
import WebinarList from "@/components/webinar-list"
import FaqPreview from "@/components/faq-preview"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroBanner />

      <section id="about" className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">About the Webinar Series</h2>
            <p className="text-lg text-gray-600 mb-6">
              Join us for an enlightening series of{" "}
              <span className="font-semibold text-emerald-600">free webinars</span> focused on integrative approaches to
              oncology. Our expert naturopathic doctors will share valuable insights on complementary therapies,
              nutritional support, and evidence-based natural approaches to cancer care.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Each session provides healthcare practitioners and interested individuals with cutting-edge research and
              practical applications in the field of integrative oncology.{" "}
              <span className="font-semibold">No prior knowledge required - everyone is welcome!</span>
            </p>
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="#webinars">View Webinars</Link>
            </Button>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <img
              src="/placeholder-aj0sr.png"
              alt="Healthcare professionals discussing integrative oncology approaches"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </section>

      <WebinarList />

      <FaqPreview />

      <section className="container py-16 md:py-24">
        <div className="bg-emerald-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-800">
            Ready to Join Our Free Webinar Series?
          </h2>
          <p className="text-lg text-emerald-700 mb-8 max-w-3xl mx-auto">
            Register now to secure your spot in our upcoming integrative oncology webinars. Learn from expert
            naturopathic doctors and enhance your knowledge of complementary cancer care approaches - completely free of
            charge.
          </p>
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            Register Free
          </Button>
        </div>
      </section>
    </main>
  )
}
