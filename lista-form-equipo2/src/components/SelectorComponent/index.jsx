import { useState } from "react"


export const Select =({data, listaDatos, setListaDatos})=>{

    const [wrapSelect, setWrapSelect] = useState(false)

    const toWrapSelect = ()=>{
        setWrapSelect(!wrapSelect)
    }

    const selectItemFromSelect =(provincia)=>{
        
        setListaDatos([...listaDatos, 
            listaDatos[listaDatos.length-1].Provincia= provincia]
            )
    }



    return (
        <>
            <label htmlFor="selection">Seleccionar </label>
            <input id="selection" type="text"  onClick={toWrapSelect}/>
            <ul style={{overflowY: "scroll", height: "100px", width: "200px",border: "1px solid black", visibility: wrapSelect ? "visible": "hidden"}}>
                {data.map((e, i)=>{
                    return <li style={{ marginTop: "10px", listStyle: "none", cursor:"pointer", display: "flex", flexDirection:"row", gap: 15}}key={e} onDoubleClick={()=>selectItemFromSelect(e)}>
                            {e}
                        </li>
                        
                })}
            </ul>
        </>
    )
}