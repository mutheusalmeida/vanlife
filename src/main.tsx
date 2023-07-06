import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'
import GlobalStyles from './styles/global'

import './styles/index.css'

const rootElement = document.querySelector('[data-js="root"]') as HTMLElement

if (!rootElement) {
  throw new Error('Failed to find the root element')
}

const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>
)
