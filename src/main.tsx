import { App } from '@/app'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const rootElement = document.querySelector('[data-js="root"]') as HTMLElement

if (!rootElement) {
  throw new Error('Failed to find the root element')
}

const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
