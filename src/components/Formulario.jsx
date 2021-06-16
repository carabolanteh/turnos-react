import PropTypes from 'prop-types';
import {useState} from "react";
// import uuid from "uuid/v4"
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'


const Formulario = ({crearCita}) => {

    // CREAR EL ESTADO DE LAS CITAS
    // se llama a un obj con todas las propiedades del formulario

    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

     // CREANDO EL ESTADO DEL ERROR

     const [error, setError] = useState(false)

    // PARA DAR MSJ AL USUARIO DE QUE SUS DATOS FUERON GUARDADOS EXITOSAMENTE

        const [mensajeEnviado, setMensajeEnviado] = useState()



    const handlerState = e => {
        // identificar el input
        console.log(e.target.name);
        // identidicar el valor
        console.log(e.target.value);
        // poner en el estado el valor del input con su respectivo input
        setCita({
            //para que no lo sobre escriba copiamos el anterior y logramos la concatenación
            ...cita,
            [e.target.name]: e.target.value
        })

    }
    

    // EXTRAER VALORES DE LAS CITAS

    // Destructuring
    const {mascota, propietario, fecha, hora, sintomas} = cita;


    // CUANDO EL USUARIO PRESIONES "AGREGAR CITA"

    const submitCita = e => {
        e.preventDefault();

    //VALIDAR
        //trim(no recibe espacios vacíos)
        if(
            mascota.trim() === '' ||
            propietario.trim() === '' ||
            fecha.trim() === '' ||
            hora.trim() === '' ||
            sintomas.trim() === ''
        ){
            setError(true)
            return;
        }
        setError(false)
        console.log('Formulario enviado');

   
    // AGREGAR UN ID
        cita.id = uuidv4()
        console.log(cita);

    // CREAR UNA CITA
        crearCita(cita);
        
    // MOSTRAR MSJA DE EXITO

    setMensajeEnviado(true)

    // OCULTANDO MJS

    // LIMPIAR EL FORMULARIO
        setCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }


    return(
      <>
        <h2>Crear cita</h2>

        {/* {error ? <p className='alerta-error'>Todos los campos son obligatorios</p> : null} */}
        {error && <p className='alerta-error'>Todos los campos son obligatorios</p>}
        {mensajeEnviado && <p className='alerta-enviado'>Sus datos fueron guardados con exito</p>}

        <form
            onSubmit={submitCita}
        >
            <label>Nombre de mascota</label>
            <input 
                type="text" 
                name="mascota"
                className="u-full-width"
                placeholder="Nombre de mascota"
                // value={cita.mascota} es igual a:
                value={mascota}
                onChange={handlerState}
            />
            <label>Nombre del dueño</label>
            <input 
                type="text" 
                name="propietario"
                className="u-full-width"
                placeholder="Nombre del dueño de la mascota"
                value={propietario}
                onChange={handlerState}
            />
            <label>Fecha de ingreso</label>
            <input 
                type="date" 
                name="fecha"
                className="u-full-width"
                value={fecha}
                onChange={handlerState}
            />
            <label>Hora de ingreso</label>
            <input 
                type="time" 
                name="hora"
                className="u-full-width"
                value={hora}
                onChange={handlerState}
            />
            <label>Síntomas</label>
            <textarea 
                name="sintomas"
                className="u-full-width"
                placeholder="¿Cuáles son los síntomas?"
                value={sintomas}
                onChange={handlerState}
            />
            <button
                type="submit"
                className="u-full-width button-primary"
            >
                Agregar Cita
            </button>
        </form>
      </>
    );
  };

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired,
}
  
export default Formulario;
  