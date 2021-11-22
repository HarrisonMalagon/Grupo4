//Array CITAS que simula el archivo en el ambiente de pruebas

CITAS = [
    {
        especialidad:"odontologia",
        nombre:"Dr. Juan",
        fecha:"2020-01-01",
        hora:"08:00",
    },
    {
        especialidad:"medicina",
        nombre:"Dr. Mario",
        fecha:"2020-01-01",
        hora:"15:00",
    },
    {
        especialidad:"optometria",
        nombre:"Dr. Mario",
        fecha:"2020-01-01",
        hora:"16:00",
    }
]
console.info(CITAS);

   
    const obtenerCitasDisponibles = (especialidad,fecha_inicio, fecha_final) =>{
    formatFechaInicio = Date.parse(fecha_inicio);
    formatFechaFinal = Date.parse(fecha_final);
    return CITAS.filter(cita => cita.especialidad==especialidad & Date.parse(cita.fecha)>=formatFechaInicio & Date.parse(cita.fecha)<=formatFechaFinal);
    }

console.info(obtenerCitasDisponibles("optometria", "2019-12-31", "2020-02-12"));



    const obtenerCitasPorJornada=(especialidad,fecha_inicio, fecha_final, jornadaPreferida)=>{
        if (jornadaPreferida = "mañana") { 
            horaInicio="08:00";
            horaFin="12:00";
        } else if (jornadaPreferida = "tarde"){
            horaInicio="13:00";
            horaFin="17:00";
        }
        let resultados = obtenerCitasDisponibles (especialidad,fecha_inicio, fecha_final);
        return resultados.filter(citaFinal => citaFinal.hora>=horaInicio & citaFinal.hora<=horaFin)
    }

console.info(obtenerCitasPorJornada("optometria", "2019-12-31", "2020-02-12", "tarde"));


// module.exports.obtenerCitasDisponibles=obtenerCitasDisponibles;
// module.exports.obtenerCitasPorJornada=obtenerCitasPorJornada;
