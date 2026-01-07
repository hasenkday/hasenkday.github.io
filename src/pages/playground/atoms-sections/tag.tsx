import { Tag } from '@/components/atoms/tag'

import styles from '../playground.module.css'

const COLORS = [
  'default',
  'primary',
  'secondary',
  'light',
  'success',
  'info',
  'warning',
  'danger',
] as const

const VARIANTS = ['fill', 'outline', 'ghost'] as const

export default function PlaygroundAtomTag() {
  return (
    <section id="playground-atom-tag" className={styles.sectionRoot}>
      <h2>Tag</h2>

      <div className={styles.contentWrapper}>
        {/* Preview */}
        <div className={styles.previewArea}>
          <div className="flex flex-col gap-6">
            {VARIANTS.map((variant) => (
              <div key={variant} className="flex flex-wrap gap-3">
                {COLORS.map((color) => (
                  <Tag key={`${variant}-${color}`} variant={variant} color={color}>
                    {color}
                  </Tag>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
