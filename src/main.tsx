import React from 'react'

import ReactDOM from 'react-dom/client'

import App from './App'
import './themes/index.css'
import { initTheme } from './hooks/use-theme'

initTheme()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
