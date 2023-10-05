import { useState } from "react"

function Lista ({listaDatos, setListaDatos, handleModalShow}){

    function borrarElemento(nombre){
        setListaDatos((list)=>{
            const nuevaLista = list.filter((item)=> item.Nombre!==nombre)
            return nuevaLista
        })
    }

    function subir(index){
        let listaAux= [...listaDatos]
        const elemAnterior = listaAux[index-1]
        listaAux[index-1]=listaAux[index]
        listaAux[index]=elemAnterior
        setListaDatos(listaAux)
    }
    function bajar(index){
        let listaAux= [...listaDatos]
        const elemPosterior = listaAux[index+1]
        listaAux[index+1]=listaAux[index]
        listaAux[index]=elemPosterior
        setListaDatos(listaAux)
    }
    
    return (
    <div className="listContainer d-flex">
        <ul>
        {listaDatos.map((item, index) => (
            <li className="listElement" key={item.Nombre} onDoubleClick={() => handleModalShow(true, item.id)}>
                <strong>Nombre:</strong> {item.Nombre}, <strong>Acepta:</strong> {item.Acepta ? 'Sí' : 'No'}, <strong>Provincia:</strong> {item.Provincia}
                <button onClick={() => borrarElemento(item.Nombre)}>Eliminar</button>
                <button disabled={(0===index) ? true : false} onClick={() => subir(index)}>Subir</button>
                <button disabled={(listaDatos.length-1===index) ? true : false} onClick={() => bajar(index)}>Bajar</button>
            </li>
        ))}
        </ul>
    </div>
    );

}

export default Lista
