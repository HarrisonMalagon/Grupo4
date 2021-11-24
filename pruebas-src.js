//Arreglo Gobal para consultar citas Medicas -- Arreglo de pruebas 
global.CITAS = [
    {
      "especialidad": "odontologia",
      "nombre": "Dr. Juan",
      "fecha": "2020-01-01",
      "hora": "8:00:00"
    },
    {
      "especialidad": "odontologia",
      "nombre": "Dr. Juan",
      "fecha": "2020-01-01",
      "hora": "9:00:00"
    },
    {
      "especialidad": "odontologia",
      "nombre": "Dr. Juan",
      "fecha": "2020-01-01",
      "hora": "10:00:00"
    },
    {
      "especialidad": "odontologia",
      "nombre": "Dr. Juan",
      "fecha": "2020-01-01",
      "hora": "11:00:00"
    },
    {
      "especialidad": "odontologia",
      "nombre": "Dr. Juan",
      "fecha": "2020-01-01",
      "hora": "12:00:00"
    },
    {
      "especialidad": "odontologia",
      "nombre": "Dr. Juan",
      "fecha": "2020-01-01",
      "hora": "13:00:00"
    },
    {
      "especialidad": "odontologia",
      "nombre": "Dr. Juan",
      "fecha": "2020-01-01",
      "hora": "14:00:00"
    },
    {
      "especialidad": "odontologia",
      "nombre": "Dr. Juan",
      "fecha": "2020-01-01",
      "hora": "15:00:00"
    },
    {
      "especialidad": "odontologia",
      "nombre": "Dr. Juan",
      "fecha": "2020-01-01",
      "hora": "16:00:00"
    },
    {
      "especialidad": "odontologia",
      "nombre": "Dr. Juan",
      "fecha": "2020-01-01",
      "hora": "17:00:00"
    },
    {
      "especialidad": "odontologia",
      "nombre": "Dr. Juan",
      "fecha": "2020-03-01",
      "hora": "11:00:00"
    },
    {
      "especialidad": "odontologia",
      "nombre": "Dr. Juan",
      "fecha": "2020-03-01",
      "hora": "12:00:00"
    },
    {
      "especialidad": "odontologia",
      "nombre": "Dr. Juan",
      "fecha": "2020-03-01",
      "hora": "13:00:00"
    },
    {
      "especialidad": "odontologia",
      "nombre": "Dr. Juan",
      "fecha": "2020-03-01",
      "hora": "14:00:00"
    },
    {
      "especialidad": "odontologia",
      "nombre": "Dr. Juan",
      "fecha": "2020-03-01",
      "hora": "15:00:00"
    },
    {
      "especialidad": "odontologia",
      "nombre": "Dr. Juan",
      "fecha": "2020-03-01",
      "hora": "16:00:00"
    },
    {
      "especialidad": "odontologia",
      "nombre": "Dr. Juan",
      "fecha": "2020-03-01",
      "hora": "17:00:00"
    },
    {
      "especialidad": "medicina",
      "nombre": "Dr. Mario",
      "fecha": "2020-01-01",
      "hora": "8:00:00"
    },
    {
      "especialidad": "medicina",
      "nombre": "Dr. Mario",
      "fecha": "2020-01-01",
      "hora": "9:00:00"
    },
    {
      "especialidad": "medicina",
      "nombre": "Dr. Mario",
      "fecha": "2020-01-01",
      "hora": "10:00:00"
    },
    {
      "especialidad": "medicina",
      "nombre": "Dr. Mario",
      "fecha": "2020-01-01",
      "hora": "11:00:00"
    },
    {
      "especialidad": "medicina",
      "nombre": "Dr. Mario",
      "fecha": "2020-01-01",
      "hora": "12:00:00"
    },
    {
      "especialidad": "medicina",
      "nombre": "Dr. Mario",
      "fecha": "2020-01-01",
      "hora": "13:00:00"
    },
    {
      "especialidad": "medicina",
      "nombre": "Dr. Mario",
      "fecha": "2020-01-01",
      "hora": "14:00:00"
    },
    {
      "especialidad": "medicina",
      "nombre": "Dr. Mario",
      "fecha": "2020-01-01",
      "hora": "15:00:00"
    },
    {
      "especialidad": "medicina",
      "nombre": "Dr. Mario",
      "fecha": "2020-01-01",
      "hora": "16:00:00"
    },
    {
      "especialidad": "medicina",
      "nombre": "Dr. Mario",
      "fecha": "2020-01-01",
      "hora": "17:00:00"
    },
    {
      "especialidad": "optometria",
      "nombre": "Dr Luis",
      "fecha": "2020-01-01",
      "hora": "8:00:00"
    },
    {
      "especialidad": "optometria",
      "nombre": "Dr Luis",
      "fecha": "2020-01-01",
      "hora": "9:00:00"
    },
    {
      "especialidad": "optometria",
      "nombre": "Dr Luis",
      "fecha": "2020-01-01",
      "hora": "10:00:00"
    },
    {
      "especialidad": "optometria",
      "nombre": "Dr Luis",
      "fecha": "2020-01-01",
      "hora": "11:00:00"
    },
    {
      "especialidad": "optometria",
      "nombre": "Dr Luis",
      "fecha": "2020-01-01",
      "hora": "12:00:00"
    },
    {
      "especialidad": "optometria",
      "nombre": "Dr Luis",
      "fecha": "2020-01-01",
      "hora": "13:00:00"
    },
    {
      "especialidad": "optometria",
      "nombre": "Dr Luis",
      "fecha": "2020-01-01",
      "hora": "14:00:00"
    },
    {
      "especialidad": "optometria",
      "nombre": "Dr Luis",
      "fecha": "2020-01-01",
      "hora": "15:00:00"
    },
    {
      "especialidad": "optometria",
      "nombre": "Dr Luis",
      "fecha": "2020-01-01",
      "hora": "16:00:00"
    },
    {
      "especialidad": "optometria",
      "nombre": "Dr Luis",
      "fecha": "2020-01-01",
      "hora": "17:00:00"
    }
   ]
// VER CITAS EN CONSOLA -- 
// console.info(CITAS) // Se ve en Formato JSON
//console.table(CITAS); // Se ven los datos tipo tablas.

const obtenerCitasDisponibles = (especialidad,fecha_inicio, fecha_final) =>{
    return CITAS.filter(cita => (
        especialidad == cita.especialidad
        &&
        new Date(cita.fecha)>=new Date(fecha_inicio)
        &&
        new Date(cita.fecha)<=new Date(fecha_final)
    ));
    }

// console.info(obtenerCitasDisponibles("optometria", "2019-12-31", "2020-02-12"));

module.exports = {
    obtenerCitasDisponibles,
    // obtenerCitasPorJornada
}


// // TEST 1
// especialidad = "optometria";
// fecha_inicio = "2020-01-01";
// fecha_final = "2020-02-01";

console.info(obtenerCitasDisponibles("odontologia", "2020-01-01", "2020-01-12"));
// console.table(obtenerCitasDisponibles("especialidad", "fecha_inicio", "fecha_final"));

//TEST 2
// especialidad = "odontologia";
// fecha_inicio = "2020-02-01";
// fecha_final = "2020-03-01";
// jornadaPreferida = "mañana";

// console.table(obtenerCitasDisponibles(especialidad, fecha_inicio, fecha_final));
// console.table(obtenerCitasPorJornada("","","","mañana"));
// console.table(obtenerCitasPorJornada(especialidad, fecha_inicio, fecha_final, jornadaPreferida));

