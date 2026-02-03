import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom'
import { ResumeProvider } from './context/ResumeContext.jsx'

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
