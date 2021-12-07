const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.get("/api/medical-appointments/apointments", (req, res) => {
	res.json(appointments);
})

app.post("/api/medical-appointments/confirm/:appointment_id", (req, res) => {

	let id = parseInt(req.params["appointment_id"])
	
	appointments_confirmed = appointments.filter(appointment => {
		if (appointment.id === id ) {
			appointment.status = 'confirmed';
			return appointment;
		}
	});

	res.json(appointments_confirmed)
	

});


module.exports = app;