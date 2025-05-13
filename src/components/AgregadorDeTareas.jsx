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

    const tareaMasRapida=()=>{
        console.log(listaTareas);
        let tareasTachadas= listaTareas.filter(t=>t.estaTachado);
        console.log(tareasTachadas);
        if(tareasTachadas.length==0){
            console.log("ERROR, no hay ninguna tachada");
            return
        }

        let tareaRapida = tareasTachadas[0];
        let menorTiempo = tareaRapida.fechaTachado - tareaRapida.fechaCreado;

        tareasTachadas.forEach((tarea) => {
        const tiempo = tarea.fechaTachado - tarea.fechaCreado;
        if (tiempo < menorTiempo) {
            menorTiempo = tiempo;
            tareaRapida = tarea;
        }
  });
        alert(`La tarea mas rapida fue ${tareaRapida.text}`)
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