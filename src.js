
const obtenerCitasDisponibles = async (especialidad,fecha_inicio,fecha_final) => {

    let response = await fetch("https://misiontic2022upb.vercel.app/api/medical-appointments/appointments");
    let citas = await response.json();
    formatFechaInicio = Date.parse(fecha_inicio);
    formatFechaFinal = Date.parse(fecha_final);
    return citas.filter(cita => cita.especialidad==especialidad & Date.parse(cita.fecha)>=formatFechaInicio & Date.parse(cita.fecha)<=formatFechaFinal);
    
};
console.info(obtenerCitasDisponibles("odontología", "2020-01-01", "2021-06-06"));


//module.exports.obtenerCitasDisponibles=obtenerCitasDisponibles;
//module.exports.confirmarCita=confirmarCita;
