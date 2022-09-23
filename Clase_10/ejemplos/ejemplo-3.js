// Creación de la matriz:
let sodaStereo = [
    // 0            1           2           3
    ['Gustavo', 'Cerati', 'Guitarra', 'soda-stereo-cerati.jpg'], // 0
    ['Héctor', 'Bosio', 'Bajo', 'soda-stereo-bosio.jpg'],  // 1
    ['Carlos', 'Ficicchia', 'Batería', 'soda-stereo-alberti.jpg'],  // 2
    ['Nano', 'Dominguez', 'Saxo', 'enojo.jpg', 'Celeste'],  // 3
];

const MostrarInfo = () => {
    let info = '';
    for (let indiceMusico in sodaStereo) {
        info += `<p>Músico ${indiceMusico}:</p>`;
        info += '<ul>';
        for (let indiceDato in sodaStereo[indiceMusico]) {
            if (indiceDato == 3) {
                info += `<li><img src="img/${sodaStereo[indiceMusico][indiceDato]}" /></li>`;
            } else {
                info += `<li>${sodaStereo[indiceMusico][indiceDato]}</li>`;
            }
        }
        info += '</ul>';
    }
    document.getElementById('info').innerHTML = info;
}