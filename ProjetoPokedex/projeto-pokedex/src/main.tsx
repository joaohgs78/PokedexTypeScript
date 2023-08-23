import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './index.css'
// Auth
import PokemonProvider from './context/PokemonContext.tsx'
import PokemonCardProvider from './context/PokemonCardContext'

const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <PokemonCardProvider>
      <PokemonProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </PokemonProvider>
    </PokemonCardProvider>
  )
} else {
  console.log('root não existe')
}
