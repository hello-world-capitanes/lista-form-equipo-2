import { useState } from 'react';
import { Select } from './SelectorComponent';
import provincias from '../assets/provincias.json'


function Form({listaDatos, setListaDatos}) {
  

  const [form, setForm] = useState({
    Nombre: "",
    Acepta: "",
    Provincia: ""
  })

  
  const onChangeFormData = (e) => {
    e.preventDefault();
   if (e.target.name == "Checked") {
    setForm({...form, 
      [e.target.name] : e.target.checked,
    });
   }else{
    setForm({...form, 
      [e.target.name] : e.target.value,
    });
  }
   

  };

  const handleSubmit =(e)=>{
   e.preventDefault()

   setForm({...form, 
    id: Math.random()* new Date()
   })


  setListaDatos([...listaDatos, form])
   
  }

  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre: </label>
          <input
            type="text"
            name="Nombre"
            value={form.Nombre}
            onChange={onChangeFormData}
          />
        </div>
        <div>
          <label>Casado: </label>
          <input
            type="checkbox"
            name="Acepta"
            onChange={onChangeFormData}
          />
        </div>
        <Select data={provincias} listaDatos={form} setListaDatos={setForm}/>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Form;