import { InputField } from '@/components/atoms/input-field'
import { SelectField } from '@/components/atoms/select-field'

import styles from '../playground.module.css'

export default function PlaygroundAtomSelectField() {
  return (
    <section id="playground-atom-select-field" className={styles.sectionRoot}>
      <h2>Select Field</h2>

      <div className={styles.contentWrapper}>
        {/* Preview */}
        <div className={styles.previewArea}>
          <div className="flex max-w-md flex-col gap-6">
            <SelectField
              label="Country"
              placeholder="Select a country"
              options={[
                { value: 'br', label: 'Brazil' },
                { value: 'us', label: 'United States' },
              ]}
            />

            {/* Inline / ghost example */}
            <div className="flex max-w-full items-center gap-2 sm:w-[300px]">
              <SelectField
                variant="ghost"
                value="br"
                options={[
                  { value: 'br', label: 'BR' },
                  { value: 'us', label: 'US' },
                ]}
              />
              <div className="w-full">
                <InputField placeholder="Phone number" className="w-full! flex-1!" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
