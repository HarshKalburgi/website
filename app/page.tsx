import Hero from "@/components/hero"
import Offerings from "@/components/offerings"
import Contact from "@/components/contact"
import About from "@/components/about"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Offerings />
      <Contact />
      <About />
      <Footer />
    </main>
  )
}

