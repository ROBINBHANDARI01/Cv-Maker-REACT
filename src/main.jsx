import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom'
import { ResumeProvider } from './context/ResumeContext.jsx'

import { AuthProvider } from './context/AuthContext.jsx'


import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
    <ResumeProvider>
      <BrowserRouter>

      <App/>

      </BrowserRouter>
    </ResumeProvider>
    </AuthProvider>
  </StrictMode>,
)
