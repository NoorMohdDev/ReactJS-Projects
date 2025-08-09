import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './main.css';
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <div className='transition-all flex justify-center item-center'>
    <App />
    </div>
  // </StrictMode>,
)
