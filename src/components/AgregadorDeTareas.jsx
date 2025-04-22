import React, { useState } from 'react'

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

  return (

    <div class="agregador-tareas">
        <input value={tareaPre} onChange={(e)=>setTareaPre(e.target.value)} type="text" /> 
        <button onClick={agregarTarea}>Agregar</button>
    </div>
  )
}

export default AgregadorDeTareas;