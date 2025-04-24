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
          
        setListaTareas(tareas);
    }
    const eliminarTarea=()=>{
      let tareas=[...listaTareas];
      tareas.splice(index,1);
      setListaTareas(tareas);
    }
  return (
    <div  className={tarea.estaTachado ? 'tachado' : ''} >
      <section className="primera-parte-tarea">
        <input type="checkbox" onChange={tachar} />
        <p>{tarea.text}</p> 
        </section>
        <img onClick={eliminarTarea} className="tacho" src="trash-solid.svg" />
    </div>
  )
}

export default Tarea


