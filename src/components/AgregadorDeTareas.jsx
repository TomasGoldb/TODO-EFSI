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
    let tareaRapidisima;

    const tareaMasRapida=()=>{
        let tareasTachadas=[...listaTareas]
        tareasTachadas.filter(t=>{t.estaTachado});
        console.log(tareasTachadas);
        if(tareasTachadas.length==0){
            console.log("ERROR, no hay ninguna tachada");
            return
        }
        tareaRapidisima=tareasTachadas[0];
        tareasTachadas.map((tarea)=>{
        if((tarea.fechaTachado-tarea.fechaCreado)<(tareaRapidisima.fechaTachado-tareaRapidisima.fechaCreado)){
            tareaRapidisima=tarea;
        }    
        })
        console.log(`La tarea mas rapida fue ${tareaRapidisima.text}, tardando ${(tareaRapidisima.fechaTachado-tareaRapidisima.fechaCreado)}`)
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