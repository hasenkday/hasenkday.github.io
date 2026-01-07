import { useState } from 'react'

import { InputField } from '@/components/atoms/input-field'
import { RadioField } from '@/components/atoms/radio-field'

import styles from '../playground.module.css'

export default function PlaygroundAtomInputField() {
  const [textAlign, setTextAlign] = useState<'start' | 'center' | 'end'>('start')

  const [hasValue, setHasValue] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [disabled, setDisabled] = useState(false)

  return (
    <section id="playground-atom-input-field" className={styles.root}>
      <h2>Input Field</h2>

      <div className={styles.contentWrapper}>
        {/* Preview */}
        <div className={styles.previewArea}>
          <div className="w-full sm:w-[320px]">
            <InputField
              label="Email"
              placeholder="you@example.com"
              textAlign={textAlign}
              error={hasError}
              disabled={disabled}
              defaultValue={hasValue ? 'Filled input' : undefined}
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
            label="Value"
            variant="segmented"
            options={[
              { value: 'empty', label: 'Empty' },
              { value: 'filled', label: 'Filled' },
            ]}
            value={hasValue ? 'filled' : 'empty'}
            onValueChange={(v) => setHasValue(v === 'filled')}
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
