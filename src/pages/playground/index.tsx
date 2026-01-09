import { PageSummary } from '@/components/molecules/page-summary'
import { PageWithSidebar } from '@/layouts/page-with-sidebar'

import PlaygroundAtomButton from './atoms-sections/button'
import PlaygroundAtomCheckboxField from './atoms-sections/checkbox-field'
import PlaygroundAtomInputField from './atoms-sections/input-field'
import PlaygroundAtomRadioField from './atoms-sections/radio-field'
import PlaygroundAtomSelectField from './atoms-sections/select-field'
import PlaygroundAtomSeparator from './atoms-sections/separator'
import PlaygroundAtomSwitchField from './atoms-sections/switch-field'
import PlaygroundAtomTag from './atoms-sections/tag'
import PlaygroundAtomTextareaField from './atoms-sections/textarea-field'
import { playgroundItems } from './playground-items'

export default function PlaygroundPage() {
  return (
    <PageWithSidebar
      sidebar={<PageSummary title="Components Playground" items={playgroundItems} offset={96} />}
    >
      <PlaygroundAtomButton />
      <PlaygroundAtomInputField />
      <PlaygroundAtomTextareaField />
      <PlaygroundAtomCheckboxField />
      <PlaygroundAtomRadioField />
      <PlaygroundAtomSelectField />
      <PlaygroundAtomSwitchField />
      <PlaygroundAtomSeparator />
      <PlaygroundAtomTag />
    </PageWithSidebar>
  )
}
