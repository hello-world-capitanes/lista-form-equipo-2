import { useState } from "react"

function Lista ({listaDatos, setListaDatos}){

    const [verModal, setVerModal]=useState(false)

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

    function abrirModal(datosPersona){
        setVerModal(true)
    }
    
    return (
    <div className="App">
        <h1>Lista de Datos desde JSON</h1>
        <ul>
        {listaDatos.map((item, index) => (
            <li key={item.Nombre}>
                <strong>Nombre:</strong> {item.Nombre}, <strong>Acepta:</strong> {item.Acepta ? 'Sí' : 'No'}, <strong>Provincia:</strong> {item.Provincia}
                <button onClick={() => borrarElemento(item.Nombre)}>Eliminar</button>
                <button disabled={(0===index) ? true : false} onClick={() => subir(index)}>Subir</button>
                <button disabled={(listaDatos.length-1===index) ? true : false} onClick={() => bajar(index)}>Bajar</button>
                <button onClick={()=>abrirModal(lista[index])} >Ampliar</button>
            </li>
        ))}
        </ul>
    </div>
    );

}

export default Lista