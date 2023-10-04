import { useState } from 'react';

function Form({listaDatos, setListaDatos}) {
  const [inputTexto, setInputTexto] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoDato = { Nombre: inputTexto, Acepta: checkbox};
    setListaDatos([...listaDatos, nuevoDato]);
    setInputTexto('');
    setCheckbox(false);
  };
  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre: </label>
          <input
            type="text"
            name="texto"
            value={inputTexto}
            onChange={(e) => setInputTexto(e.target.value)}
          />
        </div>
        <div>
          <label>Casado: </label>
          <input
            type="checkbox"
            name="checkbox"
            checked={checkbox}
            onChange={(e) => setCheckbox(e.target.checked)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Form;