import { BrowserRouter as Routers } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import './style/index.css';


ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <Routers>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Routers>,
  )