//Array CITAS que simula el archivo en el ambiente de pruebas

var CITAS = [
  {
    id: 1,
    especialidad: "odontología",
    nombre: "Dr. Juan",
    fecha: "2020-01-01",
    hora: "08:00",
  },
  {
    id: 2,
    especialidad: "odontología",
    nombre: "Dr. Juan",
    fecha: "2020-01-01",
    hora: "9:00",
  },
  {
    id: 3,
    especialidad: "odontología",
    nombre: "Dr. Juan",
    fecha: "2020-01-01",
    hora: "10:00",
  },
  {
    id: 4,
    especialidad: "odontología",
    nombre: "Dr. Juan",
    fecha: "2020-01-01",
    hora: "11:00",
  },
  {
    id: 5,
    especialidad: "odontología",
    nombre: "Dr. Juan",
    fecha: "2020-01-01",
    hora: "12:00",
  },
  {
    id: 6,
    especialidad: "odontología",
    nombre: "Dr. Juan",
    fecha: "2020-01-01",
    hora: "13:00",
  },
  {
    id: 7,
    especialidad: "odontología",
    nombre: "Dr. Juan",
    fecha: "2020-01-01",
    hora: "14:00",
  },
  {
    id: 8,
    especialidad: "odontología",
    nombre: "Dr. Juan",
    fecha: "2020-01-01",
    hora: "15:00",
  },
  {
    id: 9,
    especialidad: "odontología",
    nombre: "Dr. Juan",
    fecha: "2020-01-01",
    hora: "16:00",
  },
  {
    id: 10,
    especialidad: "odontología",
    nombre: "Dr. Juan",
    fecha: "2020-01-01",
    hora: "17:00",
  },
  {
    id: 11,
    especialidad: "medicina",
    nombre: "Dr. Mario",
    fecha: "2020-01-01",
    hora: "08:00",
  },
  {
    id: 12,
    especialidad: "medicina",
    nombre: "Dr. Mario",
    fecha: "2020-01-01",
    hora: "9:00",
  },
  {
    id: 13,
    especialidad: "medicina",
    nombre: "Dr. Mario",
    fecha: "2020-01-01",
    hora: "10:00",
  },
  {
    id: 14,
    especialidad: "medicina",
    nombre: "Dr. Mario",
    fecha: "2020-01-01",
    hora: "11:00",
  },
  {
    id: 15,
    especialidad: "medicina",
    nombre: "Dr. Mario",
    fecha: "2020-01-01",
    hora: "12:00",
  },
  {
    id: 16,
    especialidad: "medicina",
    nombre: "Dr. Mario",
    fecha: "2020-01-01",
    hora: "13:00",
  },
  {
    id: 17,
    especialidad: "medicina",
    nombre: "Dr. Mario",
    fecha: "2020-01-01",
    hora: "14:00",
  },
  {
    id: 18,
    especialidad: "medicina",
    nombre: "Dr. Mario",
    fecha: "2020-01-01",
    hora: "15:00",
  },
  {
    id: 19,
    especialidad: "medicina",
    nombre: "Dr. Mario",
    fecha: "2020-01-01",
    hora: "16:00",
  },
  {
    id: 20,
    especialidad: "medicina",
    nombre: "Dr. Mario",
    fecha: "2020-01-01",
    hora: "17:00",
  },
  {
    id: 21,
    especialidad: "optometría",
    nombre: "Dr. Mario",
    fecha: "2020-01-01",
    hora: "8:00",
  },
  {
    id: 22,
    especialidad: "optometría",
    nombre: "Dr. Mario",
    fecha: "2020-01-01",
    hora: "9:00",
  },
  {
    id: 23,
    especialidad: "optometría",
    nombre: "Dr. Mario",
    fecha: "2020-01-01",
    hora: "10:00",
  },
  {
    id: 24,
    especialidad: "optometría",
    nombre: "Dr. Mario",
    fecha: "2020-01-01",
    hora: "11:00",
  },
  {
    id: 25,
    especialidad: "optometría",
    nombre: "Dr. Mario",
    fecha: "2020-01-01",
    hora: "12:00",
  },
  {
    id: 26,
    especialidad: "optometría",
    nombre: "Dr. Mario",
    fecha: "2020-01-01",
    hora: "13:00",
  },
  {
    id: 27,
    especialidad: "optometría",
    nombre: "Dr. Mario",
    fecha: "2020-01-01",
    hora: "14:00",
  },
  {
    id: 28,
    especialidad: "optometría",
    nombre: "Dr. Mario",
    fecha: "2020-01-01",
    hora: "15:00",
  },
  {
    id: 29,
    especialidad: "optometría",
    nombre: "Dr. Mario",
    fecha: "2020-01-01",
    hora: "16:00",
  },
  {
    id: 30,
    especialidad: "optometría",
    nombre: "Dr. Mario",
    fecha: "2020-01-01",
    hora: "16:00",
  },
];

function findOcc(CITAS, key){
    let arr2 = [];
      
    CITAS.forEach((x)=>{
         
      // Checking if there is any object in arr2
      // which contains the key value
       if(arr2.some((val)=>{ return val[key] == x[key] })){
           
         // If yes! then increase the occurrence by 1
         arr2.forEach((k)=>{
           if(k[key] === x[key]){ 
             k["occurrence"]++
           }
        })
           
       }else{
         // If not! Then create a new object initialize 
         // it with the present iteration key's value and 
         // set the occurrence to 1
         let a = {}
         a[key] = x[key]
         a["occurrence"] = 1
         arr2.push(a);
       }
    })
      docker
      
    return arr2
  }

let key = "nombre"
console.log(findOcc(CITAS, key))