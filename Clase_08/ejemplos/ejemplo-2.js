let materias = [
    'Análisis de Datos',
    'Diseño Gráfico para Web',
    'Diseño Vectorial',
    'Lógica de Programación',
    'Experiencia del Usuario',
    'Aplicaciones para Dispositivos Móviles',
    'Programación I',
    'Programación II'
];

// for (let i = 0; i < materias.length; i++) {
//     console.log(i, materias[i]);
//     document.querySelector('#listado').innerHTML += `<li>${materias[i]}</li>`
// }

// console.log('----');

// Se pueden recorrecor todos los ínidice automágicamente con el for-in
// No es necesario indicarle donde empezar ni terminar, recorre TODOS los indices
// for (let indice in materias) {
//     console.log(indice, materias[indice]);
//     // console.log(materias[indice]);
//     // document.querySelector('#listado').innerHTML += `<li>${materias[indice]}</li>`
// }

// console.log('----');

// El for-of recorre todos los valores automágicamente:
// for (let valor of materias) {
//     console.log(valor);
// }


for (let materia of materias) {
    console.log(materia);
    document.querySelector('#listado').innerHTML += `<li>${materia}</li>`
}


// for (let i = 0; i < materias.length; i++) {
//     console.log(i, materias[i]);
// }

// for (let indice in materias) {
//     console.log(indice, materias[indice]);
// }

// for (let valor of materias) {
//     console.log(valor);
// }