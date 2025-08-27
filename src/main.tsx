import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DmsmhPage from './pages/DmsmhPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dmsmh" element={<DmsmhPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
