// Versión 1:
let colores = [
    'red',
    'green',
    'blue',
];

const Agregar = () => {
    let color;
    do {
        color = prompt('Ingrese un color');
    } while (!isNaN(color))
    // Agrego mediante push:
    colores.push(color);
}

const Mostrar = () => {
    console.log(colores);
    console.table(colores);
}