import { PlaygroundSummary } from '@/components/molecules/playground-summary'

import PlaygroundAtomButton from './atoms-sections/button'
import PlaygroundAtomCheckboxField from './atoms-sections/checkbox-field'
import PlaygroundAtomInputField from './atoms-sections/input-field'
import PlaygroundAtomRadioField from './atoms-sections/radio-field'
import PlaygroundAtomSelectField from './atoms-sections/select-field'
import PlaygroundAtomSeparator from './atoms-sections/separator'
import PlaygroundAtomSwitchField from './atoms-sections/switch-field'
import PlaygroundAtomTag from './atoms-sections/tag'
import PlaygroundAtomTextareaField from './atoms-sections/textarea-field'

export default function PlaygroundPage() {
  function scrollToSection(id: string) {
    const el = document.getElementById(id)
    if (!el) return

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <div
      id="playground"
      className="grid min-h-[700px] w-full md:grid-cols-[300px_1fr] lg:grid-cols-[300px_1fr]"
    >
      {/* Sidebar */}
      <aside className="border-dark/10 bg-light relative self-start overflow-hidden border-b md:h-full md:border-r md:border-b-0">
        <div className="px-6 py-8 md:fixed md:px-12 md:pt-12 md:pb-12">
          <h1 className="mb-8 text-center md:text-start md:text-sm">Components Playground</h1>
          <PlaygroundSummary onSelect={scrollToSection} />
        </div>
      </aside>

      {/* Content */}
      <div className="section-container">
        <PlaygroundAtomButton />
        <PlaygroundAtomInputField />
        <PlaygroundAtomTextareaField />
        <PlaygroundAtomCheckboxField />
        <PlaygroundAtomRadioField />
        <PlaygroundAtomSelectField />
        <PlaygroundAtomSwitchField />
        <PlaygroundAtomSeparator />
        <PlaygroundAtomTag />
      </div>
    </div>
  )
}
