const contadorDoctor = async () => {
	let response = await fetch(
		"https://misiontic2022upb.vercel.app/api/medical-appointments/appointments"	
		);

	const CITAS = await response.json();

	let disponibilidad_doctores = {};

	CITAS.forEach(cita => {
		disponibilidad_doctores[cita.nombre] = disponibilidad_doctores[cita.nombre] ? disponibilidad_doctores[cita.nombre] + 1 : 1;
		// console.table(CITAS)

	});

	return disponibilidad_doctores;
};
module.exports.contadorDoctor = contadorDoctor;