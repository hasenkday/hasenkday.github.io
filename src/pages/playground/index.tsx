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
import styles from './playground.module.css'

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
    <div id="playground" className={styles.root}>
      {/* Sidebar */}
      <aside className="border-dark/10 bg-light relative self-start overflow-hidden border-b lg:h-full lg:border-r lg:border-b-0">
        <div className="px-6 py-8 lg:fixed lg:px-12 lg:pt-12 lg:pb-12">
          <h1 className="mb-8 text-center lg:text-start lg:text-sm">Components Playground</h1>
          <PlaygroundSummary onSelect={scrollToSection} />
        </div>
      </aside>

      {/* Content */}
      <div className="w-full pb-12">
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
    </div>
  )
}
