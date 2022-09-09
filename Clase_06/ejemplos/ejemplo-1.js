console.log('Ejemplo 01');
const CrearImg = function() {
    document.write('<img src="' + rutaArchivo + '" />');
}

let rutaArchivo;
rutaArchivo = 'img/FF0000.jpg';

CrearImg();
rutaArchivo = 'img/00FF00.jpg';
CrearImg();
