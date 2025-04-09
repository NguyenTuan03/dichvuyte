import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MainGlobal from './components/global/MainGlobal.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainGlobal>
      <App />
    </MainGlobal>
  </StrictMode>,
)
