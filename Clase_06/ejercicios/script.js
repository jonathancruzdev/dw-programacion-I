/*Hay un botón que dice "Calcular impuesto":
    Se le debe pedir al usuario un valor que corresponda al precio de un producto y opcionalmente el impuesto al valor agregado (IVA) a calcular sobre el producto. Puede  ser entre 0 y 100%, por defecto será 21%.

        Los valores deben ser pasados a los parámetros de la función CalcularImpuesto, que  calcula el IVA seleccionado y devuelve el siguiente mensaje:
Precio: valor – IVA: iva% – Total: valor con iva
El mensaje debe ser devuelto por la función e informado con un console.log().  La función debe veriﬁcar que los datos sean válidos (en caso contrario notiﬁcarlo).  La función no hace el ingreso ni el egreso de valores por parte del usuario.
No se pueden utilizar variables globales.  

*/

function CalcularImpuesto(precio=null, impuesto=21 ){
    // Validacion de parametros
    if(precio==null){
        console.warn('Falta el parametro Precio');
        return;
    }

    precio = parseFloat(precio);
    if( isNaN(precio) ){
        console.warn('El formato del precio es incorrecto');
        return;
    }

    impuesto = parseInt(impuesto);
    if( isNaN(impuesto) ){
        console.warn('El formato del impuesto es incorrecto');
        return;
    }

    // Calculo
    let iva = precio * impuesto / 100;
    let final = precio + iva;

    return `El Precio es ${precio}, el iva es ${iva}. El Precio Final es ${final}`;
}

