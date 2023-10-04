import { useState } from "react"



export const Select =({data})=>{

    const [wrapSelect, setWrapSelect] = useState(false)

    const selectWrap = ()=>{
        setWrapSelect(!wrapSelect)
    }

    return (
        <>
            <label htmlFor="selection">Seleccionar </label>
            <input id="selection" type="text" onClick={selectWrap}/>
            <ul style={{visibility: wrapSelect ? "visible": "hidden"}}>
                {data.map(e=>{
                    return <li>
                            {e}
                            <button className="primaryButton">Subir</button>
                            <button className="primaryButton">Bajar</button>
                        </li>
                })}
            </ul>
        </>
    )
}