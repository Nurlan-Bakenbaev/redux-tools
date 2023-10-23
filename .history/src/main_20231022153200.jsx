import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './app/store.js'
import { Provide } from 'react'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <></>
    <App />
  </React.StrictMode>,
)
