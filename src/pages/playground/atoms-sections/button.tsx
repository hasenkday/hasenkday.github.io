import { useState } from 'react'

import { Button } from '@/components/atoms/button'
import { RadioField } from '@/components/atoms/radio-field'
import { GithubIcon } from '@/components/icons'

import styles from '../playground.module.css'

export default function PlaygroundAtomButton() {
  const [variant, setVariant] = useState<'fill' | 'outline' | 'ghost'>('fill')
  const [color, setColor] = useState<'dark' | 'primary' | 'secondary'>('dark')
  const [size, setSize] = useState<'sm' | 'md' | 'icon'>('sm')

  const iconVariant = variant === 'fill' ? 'light' : 'dark'

  return (
    <section id="playground-atom-button" data-scroll-target className={styles.sectionRoot}>
      <h2>Button</h2>

      <div className={styles.contentWrapper}>
        {/* Preview */}
        <div className={styles.previewArea}>
          <Button variant={variant} color={color} size={size}>
            {size === 'icon' ? <GithubIcon variant={iconVariant} /> : 'Button (˶ᵔ ᵕ ᵔ˶)'}
          </Button>
        </div>

        {/* Controls */}
        <div className={styles.controlsArea}>
          <RadioField
            label="Variant"
            variant="segmented"
            options={[
              { value: 'fill', label: 'Fill' },
              { value: 'outline', label: 'Outline' },
              { value: 'ghost', label: 'Ghost' },
            ]}
            value={variant}
            onValueChange={setVariant}
          />

          <RadioField
            label="Color"
            variant="segmented"
            options={[
              { value: 'dark', label: 'Dark' },
              { value: 'primary', label: 'Primary' },
              { value: 'secondary', label: 'Secondary' },
            ]}
            value={color}
            onValueChange={setColor}
          />

          <RadioField
            label="Size"
            variant="segmented"
            options={[
              { value: 'md', label: 'Medium' },
              { value: 'sm', label: 'Small' },
              { value: 'icon', label: 'Icon' },
            ]}
            value={size}
            onValueChange={setSize}
          />
        </div>
      </div>
    </section>
  )
}
