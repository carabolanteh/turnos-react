import PropTypes from 'prop-types';

const Cita = ({
    cita:{mascota, propietario, fecha, hora, sintomas, id},
    eliminarCita
    }) => {
    return(
        <div className="cita">
            <p>Mascota: <span>{mascota}</span></p>
            <p>Propietario: <span>{propietario}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Síntomas: <span>{sintomas}</span></p>
            <button 
                className="button eliminar u-full-width"
                onClick={()=> eliminarCita(id)}
            >Eliminar &times;</button>
        </div>
    )
}


Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita;