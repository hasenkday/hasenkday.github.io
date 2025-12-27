import { cn } from '@/lib/utils'

import styles from './image.module.css'

type ImageProps = {
  src: string
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
  fit?: 'cover' | 'contain'
}

export function Image({ src, alt, className, loading = 'lazy', fit = 'cover' }: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      className={cn(styles.root, styles[fit], className)}
    />
  )
}
