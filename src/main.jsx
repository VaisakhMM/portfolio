import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/portfolio'
import Navbar from './components/Navbar'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>,
)

