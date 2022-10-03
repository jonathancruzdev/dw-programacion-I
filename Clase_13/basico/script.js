// Array Global donde guardo los objetos alumno
let alumnos = [];

function cargarAlumno(){
    // 1. Solicito los datos
    let nombreAlumno = prompt('Ingrse el Nombre');
    let apellidoAlumno = prompt('Ingrese el Apellido');

    // 2. Creo el objeto literal
    let alumno = {
        nombre: nombreAlumno,
        apellido: apellidoAlumno
    }

    //3. Agrego al array Global
    alumnos.push( alumno);

}

// Recorro el arry
function mostarLista(){
    let html = '';
    for (let i = 0; i < alumnos.length; i++) {

        console.log(alumnos[i]);

        html += `<h2> ${alumnos[i].nombre} </h2>
                <h2> ${alumnos[i].apellido} </h2>`;
        
        document.write(html);

    }
}