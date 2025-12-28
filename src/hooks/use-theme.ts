export function initTheme() {
  const saved = localStorage.getItem('theme')

  if (saved === 'dark') {
    document.documentElement.classList.add('dark')
  }
}

export function toggleTheme() {
  const root = document.documentElement

  root.classList.add('theme-transition')
  root.classList.toggle('dark')

  window.setTimeout(() => {
    root.classList.remove('theme-transition')
  }, 250)
}
