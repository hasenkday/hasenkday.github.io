import { cn } from '@/lib/utils'

import styles from './image.module.css'

type ImageProps = {
  src: string
  alt: string
  className?: string
  fit?: 'cover' | 'contain'
}

export function Image({ src, alt, fit = 'cover', className }: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(styles.root, styles[fit], className)}
      loading="lazy"
      decoding="async"
    />
  )
}
