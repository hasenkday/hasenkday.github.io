import { useState } from 'react'

import { SwitchField } from '@/components/atoms/switch-field'
import { MoonIcon, SunIcon } from '@/components/icons'

import styles from '../playground.module.css'

export default function PlaygroundAtomSwitchField() {
  const [isPublic, setIsPublic] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [isDark, setIsDark] = useState(false)

  return (
    <section id="playground-atom-switch-field" className={styles.sectionRoot}>
      <h2>Switch Field</h2>

      <div className={styles.contentWrapper}>
        {/* Preview */}
        <div className={styles.previewArea}>
          <div className="flex flex-row flex-wrap items-center gap-6">
            {/* Outlined + label */}
            <SwitchField
              variant="outlined"
              label="Public profile"
              checked={isPublic}
              onCheckedChange={setIsPublic}
            />

            {/* Default */}
            <SwitchField checked={darkMode} onCheckedChange={setDarkMode} />

            {/* Icon variant */}
            <SwitchField
              variant="icon"
              checked={isDark}
              onCheckedChange={setIsDark}
              offIcon={<SunIcon />}
              onIcon={<MoonIcon />}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
