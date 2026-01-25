import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Router } from 'react-router-dom'
import { ResumeProvider } from './context/ResumeContext.jsx'
import './Style/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ResumeProvider>
      <BrowserRouter>
      <App/>
      </BrowserRouter>
    
    </ResumeProvider>
  </StrictMode>,
)
