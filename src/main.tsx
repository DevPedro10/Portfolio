import React from 'react'
import './style/globals.css'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllProjects from './components/Projects/AllProjects.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/work' element={<App />} />
        <Route path='/projects' element={<AllProjects />} />
        <Route path='/articles' element={<App />} />
        <Route path='/about' element={<App />} />
        <Route path='/contact' element={<App />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
