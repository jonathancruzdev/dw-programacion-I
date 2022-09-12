
/*
    - Solicita y valida las siglas de una carrera (dw, dm, dg).
    - Envía el dato como argumento a la función ObtenerDias, que devolverá un valor
    - El valor devuelto debe ser informado al usuario mediante console.info().  
*/
const MostrarDias = function(){
    let s;
    let mensaje;
    // Obtener los valores
    do {

        s = prompt('Ingrese las siglas: dw, dm, dg');
        s = s.toLowerCase();

    } while( !( s =='dw' ||  s == 'dm' || s == 'dg' )  )

    mensaje = `Los días de cursada son `+  ObtenerDias(s);

    // Mostrar por consola
    console.info(mensaje);
}

// Retorna por ejemplo: 'Lu, Mi, Ju, Vi' Si es dw
const ObtenerDias = (siglas) =>{

}

