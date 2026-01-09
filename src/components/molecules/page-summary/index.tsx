import { Button } from '@/components/atoms/button'

import styles from './page-summary.module.css'
import type { SummaryItem, PageSummaryProps } from './types'

export function PageSummary({ title, items, offset = 0 }: PageSummaryProps) {
  const isGrouped = !Array.isArray(items)

  function scrollToSection(id: string) {
    const el = document.getElementById(id)
    if (!el) return

    const y = el.getBoundingClientRect().top + window.pageYOffset - offset

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    })
  }

  function renderItem(item: SummaryItem) {
    return (
      <Button
        key={item.id}
        variant="ghost"
        className={styles.item}
        size="sm"
        onClick={() => scrollToSection(item.id)}
      >
        {item.label}
      </Button>
    )
  }

  return (
    <div className={styles.root}>
      <span className={styles.summaryTitle}>{title}</span>
      <h1 className="text-center lg:hidden">{title}</h1>

      <nav className={styles.nav}>
        {isGrouped ? (
          Object.entries(items).map(([groupName, groupItems]) => (
            <div key={groupName} className={styles.group}>
              <div className={styles.groupTitle}>{groupName}</div>
              <div className={styles.buttonsGroup}>{groupItems.map(renderItem)}</div>
            </div>
          ))
        ) : (
          <div className={styles.group}>
            <div className={styles.buttonsGroup}>{items.map(renderItem)}</div>
          </div>
        )}
      </nav>
    </div>
  )
}
