import { Nav } from "@/components/sections/nav"
import { Hero } from "@/components/sections/hero"
import { Stats } from "@/components/sections/stats"
import { Capabilities } from "@/components/sections/capabilities"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Stats />
      <Capabilities />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
