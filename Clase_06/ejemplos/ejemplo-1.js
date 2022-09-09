console.log('Ejemplo 01');
let rutaArchivo;


/* const CrearImg = function() {
    document.write('<img src="' + rutaArchivo + '" />');
}

rutaArchivo = 'img/FF0000.jpg';

CrearImg();
rutaArchivo = 'img/00FF00.jpg';
CrearImg();

rutaArchivo = 'img/FF0000.jpg';

CrearImg(); */

function crearImg(ruta, titulo='Imagen de cuadrado'){
    document.write(`<img src="${ruta}"  title="${titulo}" alt="${titulo}">`);
}

crearImg('img/FF0000.jpg', 'Cuadrado rojo');
crearImg('otra imagen', 'img/FFFF00.jpg'); // El orden de los argumento es importante
crearImg('img/0000FF.jpg');



// ruta es una parametro de la funcion. Solo pertenece a ella
// console.log(ruta); 