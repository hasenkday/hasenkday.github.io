import { useState } from 'react'

import { InputField } from '@/components/atoms/input-field'
import { SelectField } from '@/components/atoms/select-field'

export default function PlaygroundAtomSelectField() {
  const [country, setCountry] = useState('br')

  return (
    <div
      id="playground-atom-select-field"
      className="flex flex-col items-center gap-8 px-4 py-8 md:px-12 md:pt-18 md:pb-12"
    >
      <h2>Select Field</h2>

      <div className="flex flex-wrap items-center justify-center gap-5">
        <SelectField
          label="Country"
          placeholder="Select a country"
          options={[
            { value: 'br', label: 'Brazil' },
            { value: 'us', label: 'United States' },
          ]}
        />

        <SelectField
          value={country}
          onValueChange={setCountry}
          options={[
            { value: 'br', label: 'Brazil' },
            { value: 'us', label: 'United States' },
          ]}
        />

        <div className="flex items-center">
          <SelectField
            variant="ghost"
            value="br"
            options={[
              { value: 'br', label: 'BR' },
              { value: 'us', label: 'US' },
            ]}
          />

          <InputField placeholder="Phone number" />
        </div>
      </div>
    </div>
  )
}
