
import './index.css'
import React from 'react'
import MyNavbar from "./Navbar"
import ClienteForm from './ClienteForm'
import AgenteForm from './AgenteForm'
import AdminForm from './AdminForm'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import AgenteDetail from './AgenteDetail'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="custom-bg">
      <BrowserRouter>
        <MyNavbar/>

        <Routes>
          <Route path='/' element={<Navigate to="/cliente"/>}/>
          <Route path='/cliente' element={<ClienteForm />} />
          <Route path='/agente' element={<AgenteForm />} />
          <Route path='/admin' element={<AdminForm />} />

          {/* Mostrar los detalles de un agente */}
          <Route path='/agente/:id' element={<AgenteDetail />} />
        </Routes>

      </BrowserRouter>
      
    </div>
  )
}

export default App
