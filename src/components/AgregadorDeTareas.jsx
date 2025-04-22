import React, { useState } from 'react'
import date from 'date-and-time'

function AgregadorDeTareas({listaTareas, setListaTareas}) {
    

    
    const [tareaPre, setTareaPre]=useState("");
    const [id, setId]=useState(0);
    const esValida= (texto) => {
        return texto.trim().length > 0;
    }
    const agregarTarea=()=>{
        if(esValida(tareaPre)){ 
            let tareaCreada={
                key:id,
                text: tareaPre,
                fechaCreado: new Date(),
                fechaTachado: null,
                estaTachado: false

                        }
            setId(id+1);
            setListaTareas([...listaTareas, tareaCreada]);
            setTareaPre("");

        }
    }
    let tareaRapidisima;
    const tareaMasRapida=()=>{
        tareaRapidisima=listaTareas[0];
        listaTareas.map((tarea)=>{
        if(tarea.estaTachado && tarea.fechaTachado-tarea.fechaCreado<tareaRapidisima.fechaTachado-tareaRapidisima.fechaCreado){
            tareaRapidisima=tarea;
        }    
        })
        console.log(`La tarea mas rapida fue ${tareaRapidisima.texto}, tardando ${tareaRapidisima.fechaTachado-tareaRapidisima.fechaCreado}`)
    }

  return (

    <div className="agregador-tareas">
        <input value={tareaPre} onChange={(e)=>setTareaPre(e.target.value)} type="text" /> 
        <button onClick={agregarTarea}>Agregar</button>
        <button onClick={tareaMasRapida}>Tarea más rápida</button>
    </div>
  )
}

export default AgregadorDeTareas;