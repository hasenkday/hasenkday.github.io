import { useState } from 'react'

import { CheckboxField } from '@/components/atoms/checkbox-field'

export default function PlaygroundAtomCheckboxField() {
  const [values, setValues] = useState<string[]>([])
  const [sizes, setSizes] = useState<string[]>([])
  const [checked, setChecked] = useState(false)
  const [enabled, setEnabled] = useState(false)

  return (
    <div
      id="playground-atom-checkbox-field"
      className="flex flex-col items-center gap-8 px-4 py-8 md:px-12 md:pt-18 md:pb-12"
    >
      <h2>Checkbox Field</h2>

      <div className="flex flex-wrap items-center justify-center gap-5">
        <CheckboxField
          label="Enable notifications"
          checked={checked}
          onCheckedChange={setChecked}
        />
        --- multi
        <CheckboxField
          options={[
            { value: 'design', label: 'Design' },
            { value: 'dev', label: 'Development' },
          ]}
          value={values}
          onValueChange={setValues}
        />
        --- variant button single
        <CheckboxField
          variant="button"
          label="Enable feature"
          checked={enabled}
          onCheckedChange={setEnabled}
        />
        -- variant button multi
        <CheckboxField
          variant="button"
          options={[
            { value: 'small', label: 'Small' },
            { value: 'medium', label: 'Medium' },
            { value: 'large', label: 'Large' },
          ]}
          value={sizes}
          onValueChange={setSizes}
        />
      </div>
    </div>
  )
}
