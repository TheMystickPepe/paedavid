let feriados;
feriados = [];   
fetch("./feriados.json")
  .then(response => response.json())
  .then(fechas => {
    for (let fecha of fechas) {
      feriados.push(fecha.date)
    }
  });

let contenedor = document.getElementById("contenedor-div")
contenedor.innerHTML = "<h1>POR FAVOR,INGRESÁ TU FECHA DESEADA PARA EL TURNO.<h1><h2> LUEGO DE ENVÍAR TU SOLICITUD,NOS PONDREMOS EN CONTACTO CONTIGO."
const titulo = document.querySelector("#contenedor-div");

let arregloFechas = JSON.parse(localStorage.getItem("turnos"));

if (!arregloFechas) {
  arregloFechas = []
}
function prueba() {
  const dateAgregar = document.getElementById("fecha");
  console.log(dateAgregar.value)
  if (arregloFechas.includes(dateAgregar.value)) {
  swal("Este turno ya se encuentra ocupado", "por favor prueba con uno distinto", "error");
  
  } else if(feriados.includes(dateAgregar.value)){
   swal("Día no disponible por ser feriado")
  } else {
    arregloFechas.push(dateAgregar.value)
    localStorage.setItem("turnos", JSON.stringify(arregloFechas))
    swal("Felicidades", "Tu Turno ha sido agendado", "success");
  }
  console.log(arregloFechas)
}
 
