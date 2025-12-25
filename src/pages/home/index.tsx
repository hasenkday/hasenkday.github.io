import AboutSection from './sections/about'
import CasesSection from './sections/cases'
import ContactSection from './sections/contact'
import HeroSection from './sections/hero'
import ToolsSection from './sections/tools'

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-bold">Portfolio</h1>

      <HeroSection />
      <CasesSection />
      <AboutSection />
      <ToolsSection />
      <ContactSection />
    </div>
  )
}
