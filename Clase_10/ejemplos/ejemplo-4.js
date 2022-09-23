// Creación de la matriz:
let sodaStereo = [
    ['Gustavo', 'Cerati', 'Guitarra', 'soda-stereo-cerati.jpg'],
    ['Héctor', 'Bosio', 'Bajo', 'soda-stereo-bosio.jpg'],
    ['Carlos', 'Ficicchia', 'Batería', 'soda-stereo-alberti.jpg'],
    ['Nano', 'Dominguez', 'Saxo', 'enojo.jpg'],
];

// Función para mostrar la info recorrida:

const MostrarInfo = () => {
    let info = '';
    for (let musico of sodaStereo) {
        info += `
        <p><strong>${musico[0]} ${musico[1]}</strong></p>
        <p><strong>Instrumento:</strong> ${musico[2]}</p>
        <img src="items/${musico[3]}" />
        `;
    }
    document.getElementById('info').innerHTML = info;
}


let persona = ['Juan', 'Perez', 23];
console.log( persona[0]);


let persona2 = [];
persona2['nombre'] = 'Julieta';
persona2['apellido'] = 'Ramirez';
persona2['edad'] = 21;








