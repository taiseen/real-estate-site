import { BrowserRouter as Routers } from 'react-router-dom';
import { HouseContext } from './context/HouseContext';
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import './style/index.css';


ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <HouseContext>
      <Routers>

        <React.StrictMode>
          <App />
        </React.StrictMode>
        
      </Routers>
    </HouseContext>,
  )