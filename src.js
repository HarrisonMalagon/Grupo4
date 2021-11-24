import CITAS from 'global'
//Array CITAS que simula el archivo en el ambiente de pruebas
/* 
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
        fecha:"2020-02-11",
        hora:"09:00",
    },
    {
        especialidad:"medicina",
        nombre:"Dr. Mario",
        fecha:"2021-05-01",
        hora:"15:00",
    },
    {
        especialidad:"medicina",
        nombre:"Dr. Mario",
        fecha:"2021-03-15",
        hora:"15:00",
    },
    {
        especialidad:"medicina",
        nombre:"Dr. Mario",
        fecha:"2015-01-01",
        hora:"15:00",
    },
    {
        especialidad:"optometria",
        nombre:"Dr. Mario",
        fecha:"2020-01-01",
        hora:"16:00",
    }
] */
//console.info(CITAS);

   
    const obtenerCitasDisponibles = (especialidad,fecha_inicio, fecha_final) =>{
    formatFechaInicio = Date.parse(fecha_inicio);
    formatFechaFinal = Date.parse(fecha_final);
    return CITAS.filter(cita => cita.especialidad==especialidad & Date.parse(cita.fecha)>=formatFechaInicio & Date.parse(cita.fecha)<=formatFechaFinal);
    }

//console.info(obtenerCitasDisponibles("medicina", "2014-12-31", "2021-07-07"));


    const obtenerCitasPorJornada=(especialidad, fecha_inicio, fecha_final, jornadaPreferida)=>{
                        
        const horaInicio = new Date();
        const horaFin = new Date();

        if (jornadaPreferida === "mañana") { 
            horaInicio.setHours(08,00);
            horaFin.setHours(12,00);
        } else if (jornadaPreferida === "tarde"){
            horaInicio.setHours(13,00);
            horaFin.setHours(17,00);
        }
        
        let resultados = obtenerCitasDisponibles (especialidad, fecha_inicio, fecha_final);

        return resultados.filter(function (resultado) {
            let horaDiv = resultado.hora.split(":");
            const citaFinal = new Date;
            citaFinal2 = citaFinal.setHours(horaDiv[0],horaDiv[1]);
            console.log (citaFinal2);
            return citaFinal2 >= horaInicio & citaFinal2 <= horaFin;
        });      
    }

//console.info(obtenerCitasPorJornada("medicina", "2019-12-31", "2020-02-12", "mañana"));


 module.exports.obtenerCitasDisponibles=obtenerCitasDisponibles;
 module.exports.obtenerCitasPorJornada=obtenerCitasPorJornada;
