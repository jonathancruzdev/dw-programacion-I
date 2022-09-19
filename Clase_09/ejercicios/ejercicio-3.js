let html = '';
let imagenes = [
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

let nombres = [
    'GULP!',
    'OKTUBRE',
    'UN BAIÓN PARA EL OJO IDIOTA',
    '¡BANG! ¡BANG! ESTÁS LIQUIDADO',
    'LA MOSCA Y LA SOPA',
    'LOBO SUELTO CORDERO ATADO 1',
    'LOBO SUELTO CORDERO ATADO 2',
    'LUZBELITO',
    'ÚLTIMO BONDI A FINISTERRE',
    'MOMO SAMPLER',
];

let lanzamientos = [
    1985,
    1986,
    1988,
    1989,
    1991,
    1993,
    1993,
    1996,
    1998,
    2000,
];

// Recorrida del array:
for (let i = 0; i < imagenes.length; i++) {
    let div = `<div>
                    <a href="img/${imagenes[i]}" target="_blank">
                        <img src="img/${imagenes[i]}" alt="NOMBRE" />
                    </a>
                    <h3>NOMBRE</h3>
                    <p>AÑO</p>
                </div>`;
    document.querySelector('.galeria').innerHTML += div;
    
}