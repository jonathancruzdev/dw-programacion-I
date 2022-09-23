// Función con parámetro rest:
const List = (param1, param2, param3, ...rest) => {
    console.log('Parámetro 1:', param1);
    console.log('Parámetro 2:', param2);
    console.log('Parámetro 3:', param3);
    console.log('Parámetro rest:', rest);
    console.log('-----');
}

console.log('Con 2 argumentos:');
List('Argumento 1', 'Argumento 2');

console.log('Con 3 argumentos:');
List('Argumento 1', 'Argumento 2', 'Argumento 3');

console.log('Con 6 argumentos:');
List('Argumento 1', 'Argumento 2', 'Argumento 3', 'Argumento 4', 'Argumento 5', 'Argumento 6');

// Creo un array con 2 valores:
let argumentos = ['Argumento 1', 'Argumento 2'];

console.log('Sin argumento spread:');
List(argumentos, 'Argumento 3', 'Argumento 4');

console.log('Con argumento spread incial:');
List(...argumentos, 'Argumento 3', 'Argumento 4');

console.log('Con argumento spread en el medio:');
List('Argumento 3', ...argumentos, 'Argumento 4');

console.log('Con 2 argumentos spread al inicio:');
List(...argumentos, ...argumentos, 'Argumento 3', 'Argumento 4');