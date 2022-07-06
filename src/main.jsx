import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FiltersContextProvider } from './contexts/filtersContext'
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FiltersContextProvider>
      <App />
    </FiltersContextProvider>
  </React.StrictMode>
)
