import { useState } from 'react'

import { CheckboxField } from '@/components/atoms/checkbox-field'
import { RadioField } from '@/components/atoms/radio-field'
import { cn } from '@/lib/utils'

import styles from '../playground.module.css'

export default function PlaygroundAtomCheckboxField() {
  // single
  const [checked, setChecked] = useState(false)

  // multi
  const [values, setValues] = useState<string[]>([])

  const [variant, setVariant] = useState<'default' | 'button'>('default')

  return (
    <section id="playground-atom-checkbox-field" className={styles.sectionRoot}>
      <h2>Checkbox Field</h2>

      <div className={styles.contentWrapper}>
        {/* Preview */}
        <div className={styles.previewArea}>
          <div className="flex flex-col gap-6">
            {/* Single */}
            <CheckboxField
              variant={variant === 'button' ? 'button' : undefined}
              label="Enable notifications"
              checked={checked}
              onCheckedChange={setChecked}
            />

            <CheckboxField
              variant={variant === 'button' ? 'button' : undefined}
              options={[
                { value: 'design', label: 'Design' },
                { value: 'dev', label: 'Development' },
                { value: 'illustrator', label: 'Illustrator' },
              ]}
              value={values}
              onValueChange={setValues}
              className={cn(variant === 'button' ? 'gap-2!' : 'gap-6!')}
            />
          </div>
        </div>

        {/* Controls */}
        <div className={styles.controlsArea}>
          <RadioField
            label="Variant"
            variant="segmented"
            options={[
              { value: 'default', label: 'Default' },
              { value: 'button', label: 'Button' },
            ]}
            value={variant}
            onValueChange={setVariant}
          />

          <RadioField
            label="Single value"
            variant="segmented"
            options={[
              { value: 'off', label: 'Unchecked' },
              { value: 'on', label: 'Checked' },
            ]}
            value={checked ? 'on' : 'off'}
            onValueChange={(v) => setChecked(v === 'on')}
          />

          <RadioField
            label="Multi values"
            variant="segmented"
            options={[
              { value: 'empty', label: 'Empty' },
              { value: 'some', label: 'Some selected' },
            ]}
            value={values.length ? 'some' : 'empty'}
            onValueChange={(v) => setValues(v === 'some' ? ['design', 'dev'] : [])}
          />
        </div>
      </div>
    </section>
  )
}
