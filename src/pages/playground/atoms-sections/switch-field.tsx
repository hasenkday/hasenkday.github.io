import { useState } from 'react'

import { SwitchField } from '@/components/atoms/switch-field'
import { MoonIcon, SunIcon } from '@/components/icons'

export default function PlaygroundAtomSwitchField() {
  const [isDark, setIsDark] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [isPublic, setIsPublic] = useState(false)

  return (
    <div
      id="playground-atom-switch-field"
      className="flex flex-col items-center gap-8 px-4 py-8 md:px-12 md:pt-18 md:pb-12"
    >
      <h2>Switch Field</h2>

      <div className="flex flex-wrap items-center justify-center gap-5">
        <SwitchField
          variant="outlined"
          label="Public profile"
          checked={isPublic}
          onCheckedChange={setIsPublic}
        />
        ---
        <SwitchField checked={darkMode} onCheckedChange={setDarkMode} />
        ---
        <SwitchField
          variant="icon"
          checked={isDark}
          onCheckedChange={setIsDark}
          offIcon={<SunIcon />}
          onIcon={<MoonIcon />}
        />
      </div>
    </div>
  )
}
