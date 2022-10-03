let alumnos = [];


// 1.Solicita los datos: Nombre, Apellido y Notas
// 2.Carga en los array los datos
function CargarAlumno(){
    let nombreAlumno;
    let apellidoAlumno;
    let notasAlumno = [];

    do {
        nombreAlumno = prompt('Ingrese el nombre');
    } while( !isNaN(nombreAlumno) ) // Valida que el usuario coloco un dato del tipo string

    do{
        apellidoAlumno = prompt('Ingrese el apellido');
    } while( !isNaN( apellidoAlumno ) )

    // Solicito notas, 
    do{
        let nota;
        do {
            nota = parseInt(  prompt('Ingrese la nota del Alumno') );
        } while (   !(nota >= 1 && nota <= 10)   )  // Valido que sea entre 1 y 10

        notasAlumno.push(nota);
    } while(  confirm('¿Seguir ingresando notas?') );

   // Agrego al array Global el objeto Alumno

    alumnos.push(
        {
            nombre: nombreAlumno,
            apellido: apellidoAlumno,
            notas: notasAlumno
        }
    );

}

// Recorre los array y renderizar en el HTML los datos
function MostrarDatos(){
    let html = '';
    let contador = 0;
    let acumulador = 0;
    
    // Recorro el array Global
    for(alumno of alumnos){
       // console.table(alumno);

        html += `<div>
                    <p>${alumno['nombre']} ${ alumno['apellido']}</p>
                    <p>Notas</p>
                    <ul>`
            for(nota of alumno['notas'] ){
                acumulador += nota
                contador++;
                //html += `<li style="color:  ${ nota < 4 ? 'red' : 'green'  } ">Notas: ${nota}</li>`;


                if(  nota < 4 ){
                    html += `<li style="color: red">Notas: ${nota}</li>`;
                } else {
                    html += `<li style="color: green">Notas: ${nota}</li>`;
                    
                }

            }
        
            html +=  ` <li>promedio: ${acumulador / contador}</li>
                    </ul>
                </div>`

            contador = 0;
            acumulador = 0;
    }


    document.querySelector('#info').innerHTML = html;
}