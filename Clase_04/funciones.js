let nombre = 'Jonathan'; // Variable Global

function saludar(){
    let dia = 'Lunes'; // Variable local
    document.write('Bueno ' + dia + ' ' + nombre);
}


saludar();
console.log(nombre); 
console.log(dia); // Error porque es una variable local