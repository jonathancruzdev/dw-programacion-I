// Variables Globales
let numero1 = null;
let numero2 =  null;

let resultado;

// Solicita el número 1 y lo asigna a la variable Global numero1
const ObtenerNumero1 = () =>{
    do {
        numero1 = parseFloat( prompt('Ingrese valor del primer Número') ) ;

    } while( isNaN(numero1));
}

// Solicita el número 2 y lo asigna a la variable Global numero2
const ObtenerNumero2 = ()=>{

}

const Mostrar = () => {
    if( numero1 != null & numero2 != null){

    } else {
        alert('No ingreso lo valores');
    }
}

// Verifica si el operador es 'sumar', 'resta', 'multiplicar', 'dividir'.
// Luego realiza la opreacion asignando el resultado en la variable resultado
const Operacion = (operador) => {

}