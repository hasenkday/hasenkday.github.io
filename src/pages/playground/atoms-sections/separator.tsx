import { Separator } from '@/components/ui/separator'

import styles from '../playground.module.css'

export default function PlaygroundAtomSeparator() {
  return (
    <section id="playground-atom-separator" data-scroll-target className={styles.sectionRoot}>
      <h2>Separator</h2>

      <div className={styles.contentWrapper}>
        {/* Preview */}
        <div className={styles.previewArea}>
          <div className="flex w-full max-w-md flex-col gap-8 sm:w-[300px]">
            {/* Default */}
            <Separator />

            {/* With content + spacing */}
            <div>
              <p className="mb-3 text-sm">Content above</p>
              <Separator className="bg-dark/20" />
              <p className="mt-3 text-sm">Content below</p>
            </div>

            {/* Vertical */}
            <div className="flex h-12 items-center gap-4">
              <span>Left</span>
              <Separator orientation="vertical" className="bg-dark/20" />
              <span>Right</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
