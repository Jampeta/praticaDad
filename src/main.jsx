import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Section from './Components/Section/Section.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Section
      titulo="CLIENTE +"
      card="promo"
      imagem="praticaDad/pratica/src/assets/meat-its-raw-state-isolated-transparent-background_191095-20207-removebg-preview.png"
    />
    <Section
      titulo="Outros"
      card="saudaveis"
      imagem="praticaDad/pratica/src/assets/meat-its-raw-state-isolated-transparent-background_191095-20207-removebg-preview.png"
    />
  </StrictMode>,
)
