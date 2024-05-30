import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './Component/Store.js'

 ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </Provider>
)
