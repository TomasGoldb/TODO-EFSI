import React from 'react'
import Tarea from './Tarea'

export default function ListaTareas({tareas, setListaTareas}) {
    
    return (
        <div className="lista-tareas">
        {tareas.map((tarea, index) => (
            <Tarea key={index} index={index} tarea={tarea} setListaTareas={setListaTareas} listaTareas={tareas} />
        ))}
        </div>
  )
}
