import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ScreenWidthProvider } from './ContextProviders/ScreenWidthContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScreenWidthProvider>
      <App />
    </ScreenWidthProvider>
  </StrictMode>,
)
