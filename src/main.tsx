import React from 'react'
import './style/globals.css'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects/Projects.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/experience' element={<App />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/articles' element={<App />} />
        <Route path='/about' element={<App />} />
        <Route path='/contact' element={<App />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
