/*
- El primero dice “Ingresar siglas de la carrera”, que al hacerle click una función debe  ingresar por prompt una de las siguientes siglas: dw, dm, dg.
- El segundo dice “Mostrar carrera”, que al hacerle click una función debe mostrar  mediante console.info el nombre completo de la carrera: Diseño web, Diseño  multimedial, Diseño gráﬁco.

- Se deben validar los valores ingresados.
- Se debe considerar la posibilidad de que el usuario quiera ver antes de ingresar, realizar la  validación.

*/
let sigla;

function ingresarCarrera(){
    do {
        sigla =  prompt('Ingrese la carrera').toLowerCase();

    } while( sigla != 'dw' && sigla != 'dm' && sigla != 'dg' );
    
}

function mostrarCarrera(){
    if( sigla == undefined) {
        alert('No ingreso las siglas');
    }

    if( sigla == 'dm' ){
        console.info('La carrera es Diseño Web');
    } else if( sigla == 'dm'){
        console.info('La carrera es Diseño Multimedial');
    } else if( sigla == 'dg'){
        console.info('La carrera es Diseño Gráfico');
    }
}