// Variables Globales
let nombre = 'Jonthan';
let curso = 2;

function saludar(){
    //alert("Hola " + nombre  );
    // template string me permite interpolar valores
    alert( `Hola ${nombre} este es el curso ${ curso + 3 }` ); // alt + 96
    let materia = 'Programación I';  // Variable local

}

function selccionar(){
    console.log('El usuario seleccion el input');
}

//console.log(materia);