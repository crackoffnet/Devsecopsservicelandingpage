import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import { getPortlessCanonicalRedirectUrl } from './app/lib/site'
import './styles/index.css'

const redirectUrl = getPortlessCanonicalRedirectUrl(window.location)

if (redirectUrl) {
  window.location.replace(redirectUrl)
} else {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
