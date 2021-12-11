// HU-04 -- Usuario -- Buscar citas disponibles, de acuerdo a mis preferencias
const obtenerCitasDisponibles = async (
  especialidad,
  fecha_inicio,
  fecha_final
) => {
  let response = await fetch(
    "https://misiontic2022upb.vercel.app/api/medical-appointments/appointments"
    
  );
  let citas = await response.json();

  formatFechaInicio = Date.parse(fecha_inicio);
  formatFechaFinal = Date.parse(fecha_final);

  return citas.filter(
    (cita) =>
      (cita.especialidad == especialidad) &
      (Date.parse(cita.fecha) >= formatFechaInicio) &
      (Date.parse(cita.fecha) <= formatFechaFinal)
  );
};

// HU-05 -- Confirmar la cita escogida -- Poder guardarla y posteriormente hacer uso de ella
const confirmarCita = async (idCita) => {
  const URL =
    "https://misiontic2022upb.vercel.app/api/medical-appointments/confirm/"+idCita;

  let response = await fetch( URL, { method: "POST" });

  let res = await response.json();

  return res;
};

console.info(obtenerCitasDisponibles("odontología", "2020-01-01", "2021-06-06"));
// console.table(obtenerCitasDisponibles("medicina", "2020-01-01", "2020-01-01"));

// module.exports.obtenerCitasDisponibles = obtenerCitasDisponibles;
// module.exports.confirmarCita = confirmarCita;

module.exports = {
    obtenerCitasDisponibles,
    confirmarCita,
};