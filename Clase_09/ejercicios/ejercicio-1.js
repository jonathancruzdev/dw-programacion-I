// Variables:
let colores = [
    'red',
    'green',
    'blue',
    'cyan',
    'magenta',
    'yellow',
    'black',
    'white',
    'orange',
    'pink',
    'tomato',
    'lime',
    'khaki',
    'orangered',
    'lightgreen',
    'lightblue',
    'aqua',
    'navy',
    'lemonchelo',
    'vermilion',
    'turquoise',
    'salmon',
    'chocolate',
    'goldenrod',
    'gamboge',
    'rebeccapurple',
    'lemonchiffon',
    'peru',
    '#FAFAFA',
];


// Recorrida del array:
for(let i=0; i< colores.length; i++ ){
    let span = `<span style="background-color: ${colores[i] }"> ${i}</span>`;
    //document.write(span);
    document.querySelector('#gal1').innerHTML += span;
}




