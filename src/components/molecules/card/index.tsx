import { cn } from '@/lib/utils'

import styles from './card.module.css'

type CardProps = {
  children: React.ReactNode
  className?: string
  backgroundImage?: string
  backdrop?: boolean
  backdropColor?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

export function Card({
  children,
  className,
  backgroundImage,
  backdrop = false,
  backdropColor = 'from-dark/70',
  onClick,
}: CardProps) {
  const isClickable = Boolean(onclick)

  return (
    <div
      role={isClickable ? 'button' : undefined}
      // TODO: fix tab index
      tabIndex={isClickable ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(e) => {
        if (!onClick) return
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick(e as unknown as React.MouseEvent<HTMLDivElement>)
        }
      }}
      className={cn(
        styles.root,
        isClickable && 'cursor-pointer focus-visible:ring focus-visible:outline-none',
        className
      )}
    >
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          {backdrop && (
            <div className={cn(backdropColor, 'absolute inset-0 bg-linear-to-t to-transparent')} />
          )}
        </>
      )}

      <div className="relative bottom-0 z-10 flex h-full items-end">{children}</div>
    </div>
  )
}
