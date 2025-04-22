import React from 'react'
import Tarea from './Tarea'

export default function ListaTareas({tareas, setListaTareas}) {
    
    return (
        <div class="lista-tareas">
        {tareas.map( (tarea, index) => (
            <Tarea index={index} tarea={tarea} setListaTareas={setListaTareas} listaTareas={tareas} />
        ))}
        </div>
  )
}
