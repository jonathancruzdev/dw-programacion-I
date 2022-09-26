let nombres = ['Luna', 'Laika', 'Mei', 'Gatito'];
let fotos = [
    'img/perro_1.jpg', 
    'img/perro_2.jpg',
    'img/gato_1.jpg',
    'img/gato_2.jpg'
];
let info = '';

function renderizarCard(){
    console.log('Renderizado');
    info = '';
    for(let i=0; i<nombres.length; i++){
        info += `
        <div class="card">
            <h3>${nombres[i]}</h3>
            <img src="${fotos[i]}" alt="mei">
        </div>
        `
    } 


    // Bucle recorre el array y el html
    /*
    for (const key of nombres) {
        console.log(key)
        info += `
        <div class="card">
            <h3>${key}</h3>
            <img src="img/gato_1.jpg" alt="mei">
        </div>
        `
    }
    */
    document.querySelector('#info').innerHTML = info;
}