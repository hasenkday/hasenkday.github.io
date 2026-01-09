import { useState } from 'react'

import { RadioField } from '@/components/atoms/radio-field'

import styles from '../playground.module.css'

export default function PlaygroundAtomRadioField() {
  const [plan, setPlan] = useState<'yes' | 'yessss'>('yessss')
  const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium')
  const [layout, setLayout] = useState<'grid' | 'list'>('grid')

  return (
    <section id="playground-atom-radio-field" data-scroll-target className={styles.sectionRoot}>
      <h2>Radio Field</h2>

      <div className={styles.contentWrapper}>
        {/* Preview */}
        <div className="flex h-full w-full items-center justify-center self-center">
          <div className="flex flex-col gap-10">
            {/* Default */}
            <RadioField
              label="Will 2026 be awesome?"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'yessss', label: 'Yessss' },
              ]}
              value={plan}
              onValueChange={setPlan}
              groupClassName="gap-6!"
            />

            {/* Button variant */}
            <RadioField
              label="Size (button)"
              variant="button"
              options={[
                { value: 'small', label: 'Small' },
                { value: 'medium', label: 'Medium' },
                { value: 'large', label: 'Large' },
              ]}
              value={size}
              onValueChange={setSize}
            />

            {/* Segmented variant */}
            <RadioField
              label="Layout (segmented)"
              variant="segmented"
              options={[
                { value: 'grid', label: 'Grid' },
                { value: 'list', label: 'List' },
              ]}
              value={layout}
              onValueChange={setLayout}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
