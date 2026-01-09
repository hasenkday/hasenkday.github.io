const STORAGE_KEY = 'theme'

export function initTheme() {
  const saved = localStorage.getItem(STORAGE_KEY)

  if (saved === 'dark') {
    document.documentElement.classList.add('dark')
  }
}

export function toggleTheme(isDark: boolean) {
  const root = document.documentElement

  root.classList.add('theme-transition')

  if (isDark) {
    root.classList.add('dark')
    localStorage.setItem(STORAGE_KEY, 'dark')
  } else {
    root.classList.remove('dark')
    localStorage.setItem(STORAGE_KEY, 'light')
  }

  window.setTimeout(() => {
    root.classList.remove('theme-transition')
  }, 250)
}
