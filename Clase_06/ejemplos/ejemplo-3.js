const CrearImgOpcionalConRetorno = function(ruta = 'img/000000.jpg') { 
    return `<img src="${ ruta }">`;
}


let img1 = CrearImgOpcionalConRetorno('img/0000FF.jpg');
let img2 = CrearImgOpcionalConRetorno('img/00FF00.jpg');
let img3 = CrearImgOpcionalConRetorno('img/FF0000.jpg');
let img4 = CrearImgOpcionalConRetorno();


document.write(img1);
document.write(img2);
document.write(img3);
document.write(img4);
document.write(  CrearImgOpcionalConRetorno( 'img/FFFF00.jpg') );



