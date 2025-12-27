import { playgroundItems } from './playground-items'
import styles from './playground-summary.module.css'

type PlaygroundSummaryProps = {
  onSelect: (id: string) => void
}

export function PlaygroundSummary({ onSelect }: PlaygroundSummaryProps) {
  return (
    <nav className={styles.root}>
      <ul className={styles.group}>
        <li className={styles.groupTitle}>Atoms</li>

        <div className={styles.buttonsGroup}>
          {playgroundItems.atoms.map((item) => (
            <li key={item.id}>
              <button type="button" className={styles.item} onClick={() => onSelect(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </div>
      </ul>

      {/* <ul className={styles.group}>
        <li className={styles.groupTitle}>Molecules</li>

        {playgroundItems.molecules.length === 0 && <li className={styles.empty}>Coming soon</li>}

        {playgroundItems.molecules.map((item) => (
          <li key={item.id}>
            <button type="button" className={styles.item} onClick={() => onSelect(item.id)}>
              {item.label}
            </button>
          </li>
        ))}
      </ul> */}
    </nav>
  )
}
