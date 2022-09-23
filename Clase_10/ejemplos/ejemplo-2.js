// Creación de la matriz:
let sodaStereo = [
    ['Gustavo', 'Cerati', 'Guitarra', 'soda-stereo-cerati.jpg'],
    ['Héctor', 'Bosio', 'Bajo', 'soda-stereo-bosio.jpg'],
    ['Carlos', 'Ficicchia', 'Batería', 'soda-stereo-alberti.jpg'],
    ['Nano', 'Dominguez', 'Saxo', 'enojo.jpg', 'Celeste'],
];

// Función para mostrar la info recorrida:
// for (let musico of sodaStereo) {
//     // console.table(musico);
//     for (let dato of musico) {
//         console.log(dato);
//     }
//     console.log('----');
// }

// let salida = '';
// for (let musico of sodaStereo) {
//     salida += `<ul>`;
//     for (let dato of musico) {
//         salida += `<li>${dato}</li>`;
//     }
//     salida += `</ul><hr />`;
// }

// document.querySelector('#info').innerHTML = salida;

// let salida = '';
// for (let indiceMusico in sodaStereo) {
//     // salida += `<p>Musico ${+indiceMusico + 1}</p>`;
//     salida += `<ul>`;
//     for (let dato of sodaStereo[indiceMusico]) {
//         salida += `<li>${dato}</li>`;
//     }
//     salida += `</ul><hr />`;
// }

// document.querySelector('#info').innerHTML = salida;

const MostrarInfo = () => {
    let info = '';
    for (let indiceMusico in sodaStereo) {
        info += `<p>Músico ${indiceMusico}:</p>`;
        info += '<ul>';
        for (let datoMusico of sodaStereo[indiceMusico]) {
            info += `<li>${datoMusico}</li>`;
        }
        info += '</ul>';
    }
    document.getElementById('info').innerHTML = info;
}