import { useState } from 'react'

import { RadioField } from '@/components/atoms/radio-field'
import { TextareaField } from '@/components/atoms/textarea-field'

import styles from '../playground.module.css'

export default function PlaygroundAtomTextareaField() {
  const [textAlign, setTextAlign] = useState<'start' | 'center' | 'end'>('start')
  const [hasError, setHasError] = useState(false)
  const [disabled, setDisabled] = useState(false)

  return (
    <section id="playground-atom-textarea-field" className={styles.sectionRoot}>
      <h2>Textarea Field</h2>

      <div className={styles.contentWrapper}>
        {/* Preview */}
        <div className={styles.previewArea}>
          <div className="w-full sm:w-[320px]">
            <TextareaField
              label="Message"
              placeholder="Write your message here"
              textAlign={textAlign}
              error={hasError}
              disabled={disabled}
            />
          </div>
        </div>

        {/* Controls */}
        <div className={styles.controlsArea}>
          <RadioField
            label="Text align"
            variant="segmented"
            options={[
              { value: 'start', label: 'Start' },
              { value: 'center', label: 'Center' },
              { value: 'end', label: 'End' },
            ]}
            value={textAlign}
            onValueChange={setTextAlign}
          />

          <RadioField
            label="Error"
            variant="segmented"
            options={[
              { value: 'off', label: 'Off' },
              { value: 'on', label: 'On' },
            ]}
            value={hasError ? 'on' : 'off'}
            onValueChange={(v) => setHasError(v === 'on')}
          />

          <RadioField
            label="Disabled"
            variant="segmented"
            options={[
              { value: 'off', label: 'Off' },
              { value: 'on', label: 'On' },
            ]}
            value={disabled ? 'on' : 'off'}
            onValueChange={(v) => setDisabled(v === 'on')}
          />
        </div>
      </div>
    </section>
  )
}
