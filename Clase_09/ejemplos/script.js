let colores = [
    'Azul',
    'Rojo',
    'Verde',
    'Violeta',
    'Amarillo'
]

//console.log(colores);

//console.log('El primer colore es ' + colores[0]);

colores.push('Negro');
colores.push('Blanco');
colores.push('Gris');

console.log(colores.length, colores );


let longitud = colores.length;

for (let i = 0; i < longitud; i++) {
    console.log('El primer colore es ' + colores[i]);

}