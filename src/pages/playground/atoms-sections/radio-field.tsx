import { useState } from 'react'

import { RadioField } from '@/components/atoms/radio-field'

export default function PlaygroundAtomRadioField() {
  const [plan, setPlan] = useState('free')
  const [size, setSize] = useState('medium')

  return (
    <div
      id="playground-atom-radio-field"
      className="flex flex-col items-center gap-8 px-4 py-8 md:px-12 md:pt-18 md:pb-12"
    >
      <h2>Radio Field</h2>

      <div className="flex flex-wrap items-center justify-center gap-5">
        <RadioField
          options={[
            { value: 'free', label: 'Free' },
            { value: 'pro', label: 'Pro' },
          ]}
          value={plan}
          onValueChange={setPlan}
        />
        --- button variant
        <RadioField
          variant="button"
          options={[
            { value: 'small', label: 'Small' },
            { value: 'medium', label: 'Medium' },
            { value: 'large', label: 'Large' },
          ]}
          value={size}
          onValueChange={setSize}
        />
      </div>
    </div>
  )
}
