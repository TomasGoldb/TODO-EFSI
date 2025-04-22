import React from 'react'

function Tarea({index, tarea, setListaTareas, listaTareas}) {

    const tachar = () => {
        let tareas=[...listaTareas];
        if(!tareas[index].estaTachado){
          tareas[index].estaTachado=true;
          tareas[index].fechaTachado=new Date();
        }else{
          tareas[index].estaTachado=false;
          tareas[index].fechaTachado=null;
        }
        
        console.log(tareas);
        setListaTareas(tareas);
    }
  return (
    <div  className={tarea.estaTachado ? 'tachado' : ''} >
        <input type="checkbox" onChange={tachar} />
        <p>{tarea.text}</p> 
    </div>
  )
}

export default Tarea


