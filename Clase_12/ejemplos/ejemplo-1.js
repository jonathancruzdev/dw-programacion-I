const TipoDeDato = (valor, tipoDeDato = '') => {
    let r = '';
    r += `
    <li>
        El valor evaluado <strong>
        ${tipoDeDato == 'string' ? `'${valor}'` : valor}
        ${tipoDeDato ? `(${tipoDeDato})` : ''}
        </strong> devolverá <strong>${typeof valor}</strong>.
    </li>`;
    document.write(r);
}