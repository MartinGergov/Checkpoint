import { useState } from "react";

export function Form() {
  const formInicial = { nombre: "", apellido: "", correo: "" };
  const [user, setUser] = useState(formInicial);
  const [enviado, setEnviado] = useState(false);

  function handleInputChange(event) {
    setUser({ ...user, [event.target.id]: event.target.value });
  }

  function submitForm(event) {
    event.preventDefault();
    setEnviado(true);
  }

  function handleReset() {
    setUser(formInicial);
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          onChange={handleInputChange}
          id="nombre"
          value={user.nombre}
          type="text"
          placeholder="Nombre"
        />
        <input
          onChange={handleInputChange}
          id="apellido"
          value={user.apellido}
          type="text"
          placeholder="Apellido"
        />
        <input
          onChange={handleInputChange}
          id="correo"
          value={user.correo}
          type="text"
          placeholder="Correo electrónico"
        />
        <button>Submit</button>
        <button onClick={handleReset}>Reset</button>
      </form>
      {enviado && user && (
        <ul>
          <li>Nombre: {user.nombre}</li>
          <li>Apellido: {user.apellido}</li>
          <li>Correo: {user.correo}</li>
        </ul>
      )}
    </div>
  );
}
