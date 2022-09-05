let a = 1;
let b = '2';
let c = 'texto';

console.log( typeof(a) )
console.log( 'La variable ' + a + ' ¿Es un No número? ' + isNaN(a) );  // ¿Esto es un No Numero?

console.log( typeof(b) )
console.log( 'La variable ' + b + ' ¿Es un No número? ' + isNaN(b) );  // ¿Esto es un No Numero?


console.log( typeof(c) )
console.log( 'La variable ' + c + ' ¿Es un No número? ' + isNaN(c) );  // ¿Esto es un No Numero?


// Guardar datos de nombre tipo String mayor o igual tres caracteres y menor a 20 catacteres
// El nombre debe ser todo en minuscula
// Edad del tipo numerico
let edad = parseInt( prompt('Ingrese su edad'));

if(  isNaN(edad)  ){
    alert('Dato invalido');
}

let nombre = prompt('Ingrese su nombre');
console.log(nombre)

nombre = nombre.toLowerCase();

console.log(nombre);

if(  (nombre.length >= 3) && (nombre.length <= 20) ){

} else {
    alert('La longitud es invalida');
}

// Código de guardado

