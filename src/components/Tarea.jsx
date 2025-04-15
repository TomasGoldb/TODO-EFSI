import React from 'react'

function Tarea({index, tarea, setListaTareas, listaTareas}) {

    const tachar = () => {
        let tareas=listaTareas;
        tareas[index].estaTachado=true;
        setListaTareas(tareas);
    }
  return (
    <div className={tarea.estaTachado?"":"tachado"}>
        <input type="checkbox" onClick={tachar} />
        <p>{tarea.text}</p> 
    </div>
  )
}

export default Tarea


