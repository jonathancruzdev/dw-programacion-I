// Matriz base:
/*
let sodaStereo = [];

sodaStereo[0] = [];            // Necesito indicar que la posición 0 será un array.
sodaStereo[0][0] = 'Gustavo';
sodaStereo[0][1] = 'Cerati';
sodaStereo[0][2] = 'Guitarra';
sodaStereo[0][3] = 'soda-stereo-cerati.jpg';

sodaStereo[1] = [];            // Necesito indicar que la posición 1 será un array.
sodaStereo[1][0] = 'Héctor';
sodaStereo[1][1] = 'Bosio';
sodaStereo[1][2] = 'Bajo';
sodaStereo[1][3] = 'soda-stereo-bosio.jpg';

sodaStereo[2] = [];            // Necesito indicar que la posición 2 será un array.
sodaStereo[2][0] = 'Carlos';
sodaStereo[2][1] = 'Ficicchia';
sodaStereo[2][2] = 'Batería';
sodaStereo[2][3] = 'soda-stereo-alberti.jpg';
*/

/* ------------------------------- 1. ------------------------------- */

// Variable para guardar mensaje:
let info = '';
// Arrays
let sodaStereo = [];
let cerati = [];
let bosio = [];
let ficicchia = [];

cerati['nombre'] = 'Gustavo';
cerati['apellido'] = 'Cerati';
cerati['instrumento'] = 'Guitarra';
cerati['imagen'] = 'soda-stereo-cerati.jpg';

bosio['nombre'] = 'Héctor';
bosio['apellido'] = 'Bosio';
bosio['instrumento'] = 'Bajo';
bosio['imagen'] = 'soda-stereo-bosio.jpg';

ficicchia['nombre'] = 'Carlos';
ficicchia['apellido'] = 'Ficicchia';
ficicchia['instrumento'] = 'Batería';
ficicchia['imagen'] = 'soda-stereo-alberti.jpg';

sodaStereo = [ cerati, bosio];
sodaStereo.push(ficicchia);
/* ----------------------------------- 2. ----------------------------------- */
for (let i=0; i<sodaStereo.length; i++){
    // Crea la etiqueta ul de apertura
    info += '<ul>'; 
    const musico = sodaStereo[i];
    console.log(musico)
    /* ----------------------------------- 3. ----------------------------------- */
    for (const indice in musico) {
        console.log(indice);
        // Crea cada li por musico
        if( indice == 'imagen'){
            info += `<li>
                        <strong>${indice}</strong>
                        <img src="img/${musico[indice]}">
                    </li>`;
        } else {
            info += `<li>
                        <strong>${indice}</strong>
                        ${musico[indice]}
                    </li>`;
        }
    }
    // Cierra la ul
    info += '</ul>'; 
}

 /* -------------------------- Muestra la información ------------------------- */
 document.getElementById('info').innerHTML = info;