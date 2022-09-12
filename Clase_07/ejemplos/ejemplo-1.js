// Realizar una funcion que reciba un numero y retorne el doble
// Ademas validar

const mostrarDoble = function(numero){
    if( !isNaN(numero) ){
        let doble = numero * 2;
        return `El doble es ${doble}`;
    }else{
        return 'Se esperaba un número';
    }

    console.log('Fin de la función')
}

let n1 = mostrarDoble(3);

let n2 = mostrarDoble('a');

let n3 = mostrarDoble();

console.log(n1, n2, n3);

//document.write(n1);
//document.write(n2);
//document.write(n3);

//alert(n1);

//alert(  mostrarDoble( prompt('ingrese un número') ) );

const otraFuncion = function(){

}
// Cuando en una funcion flecha tenemos una única línea de código
const unFuncion = () => 'Una funcion';

console.log( mostrarDoble(4) );

// No se puede re asignar a una constante otro dato.
// Es recomendable definir las funciones como constantes para evitar estos errores
//mostrarDoble = 'Algo'

