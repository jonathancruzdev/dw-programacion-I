// Variables:
let discos = [
    'los-redondos-1985-gulp!.jpg',
    'los-redondos-1986-oktubre.jpg',
    'los-redondos-1988-un-baión-para-el-ojo-idiota.jpg',
    'los-redondos-1989-¡bang!-¡bang!-estás-liquidado.jpg',
    'los-redondos-1991-la-mosca-y-la-sopa.jpg',
    'los-redondos-1993-lobo-suelto-cordero-atado-1.jpg',
    'los-redondos-1993-lobo-suelto-cordero-atado-2.jpg',
    'los-redondos-1996-luzbelito.jpg',
    'los-redondos-1998-último-bondi-a-finisterre.jpg',
    'los-redondos-2000-momo-sampler.jpg',
];

// Recorrida del array:
for(let i=0; i < discos.length; i++){
    let div = `<div>
                    <img src="img/${discos[i]}" alt="${discos[i]}" />
                    <p>${discos[i]}</p>
                </div>`;
    document.querySelector('.galeria').innerHTML += div;
}