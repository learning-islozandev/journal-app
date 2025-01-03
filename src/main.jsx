import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { JournalApp } from './JournalApp';

import './style.css';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Configuracion de rutas... */}
    
    <BrowserRouter> 
      <JournalApp />
    </BrowserRouter>
  </StrictMode>,
)
