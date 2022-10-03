/* let nombre = 'Juan';
let edad = 23;
let nivel = 2.32;
let lenguajes = ['PHP', 'HTML', 'CSS'];
let saludar = function(){
    alert('hola');
}

console.log( nombre, typeof(nombre) );
console.log( edad, typeof(edad) );
console.log( nivel, typeof(nivel) );

console.log( lenguajes, typeof(lenguajes) );

console.log( typeof(saludar));
 */

  /* --------------------------------- objetos -------------------------------- */

function consultar(){
    let lenguaje = prompt('Ingrese el lenguaje');
    // Recorro el array de lenguajes de la persona y verifico
    let seProgramar = false;
    for (let i = 0; i < persona.lenguajes.length; i++) {
        console.log(persona.lenguajes[i]);
        if( lenguaje == persona.lenguajes[i]  ) {
            seProgramar = true;
        }
    }

    if( seProgramar == true  ) {
        alert('Si se programar en ' + lenguaje);
    } else {
        alert('No se ' + lenguaje);
    }
}

let persona = {
    // Atributos
    nombre: 'Lucas',
    apellido: 'Herrera',
    edad: 21,
    lenguajes: ['HTML', 'CSS', 'JavaScript'],
    // Metodos
    saludar: function(){
        alert('Hola soy ' + this.nombre );
    },
}

document.write( `<h2> ${persona.nombre} </h2>`  );
document.write( `<h2> ${persona.apellido} </h2>`  );



