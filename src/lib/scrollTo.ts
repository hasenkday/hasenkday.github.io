export type ScrollToOptions = {
  offset?: number
  behavior?: ScrollBehavior
}

export function scrollToId(id: string, { offset = 0, behavior = 'smooth' }: ScrollToOptions = {}) {
  const el = document.getElementById(id)
  if (!el) return

  const y = el.getBoundingClientRect().top + window.pageYOffset - offset

  window.scrollTo({
    top: y,
    behavior,
  })
}

export function scrollToHash(hash: string, options?: ScrollToOptions) {
  if (!hash) return
  scrollToId(hash.replace('#', ''), options)
}
