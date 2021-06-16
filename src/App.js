import { useState, useEffect } from 'react';
import Formulario from './components/Formulario'; 
import Cita from './components/Cita';

function App() {

   // Citas en localStorage

  //  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  //  if(!citasIniciales){
  //    citasIniciales = []
  //  }

  // ESTADO DE TODAS LAS CITAS

  const [citas, setCitas] = useState(JSON.parse(localStorage.getItem('citas')) || []);

  useEffect(() => {
      localStorage.setItem('citas', JSON.stringify(citas))
  }, [citas]);

  // FUNCION QUE TOME TODAS LAS CITAS ACT Y AGREGUE UNA NUEVA

  const crearCita = cita => {
    setCitas([
      ...citas,
      cita
    ]);
  }



  // FUNCION ENCARGADA DE ELIMINAR LAS CITAS

  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    setCitas(nuevasCitas)
  }

  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas'


  return (
    <div>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita 
                cita={cita}
                eliminarCita={eliminarCita}
                key={cita.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
