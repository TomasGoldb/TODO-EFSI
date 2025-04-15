import React, { useState } from 'react'
import './App.css'
import Tarea from './components/Tarea.jsx'
import AgregadorDeTareas from './components/AgregadorDeTareas.jsx'
import ListaTareas from './components/ListaTareas.jsx'

function App() {

  const [listaTareas, setListaTareas]=useState([]);

  return (
    <>
    <AgregadorDeTareas listaTareas={listaTareas} setListaTareas={setListaTareas} />
      <ListaTareas setListaTareas={setListaTareas} tareas={listaTareas} />
    </>
  )
}

export default App


