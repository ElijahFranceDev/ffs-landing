import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Technology from './Technology.tsx'
import Hours from './Hours.tsx'

const path = window.location.pathname.replace(/\/+$/, '') || '/'
const Page = path === '/technology' ? Technology : path === '/hours' ? Hours : App

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
