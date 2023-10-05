
import {BsFillTrashFill} from 'react-icons/bs'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import {BsFillArrowDownCircleFill} from 'react-icons/bs'

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
            <li className="listElement" key={item.id} onDoubleClick={() => handleModalShow(true, item.id)}>
                <strong>Nombre:</strong> {item.Nombre}, <strong>Acepta:</strong> {item.Acepta ? 'Sí' : 'No'}, <strong>Provincia:</strong> {item.Provincia}
                <div className="d-flex buttonContainer">
                    <BsFillTrashFill 
                        className='buttons red'
                        onClick={() => borrarElemento(item.Nombre)} />
                    <BsFillArrowUpCircleFill 
                        className='buttons green'
                        disabled={(0===index) ? true : false} 
                        onClick={() => subir(index)} />
                    <BsFillArrowDownCircleFill 
                        className='buttons blue'
                        disabled={(listaDatos.length-1===index) ? true : false} 
                        onClick={() => bajar(index)} />
                </div>
            </li>
        ))}
        </ul>
    </div>
    );

}

export default Lista
